import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface SenatFakultas {
  nama: string;
  jabatan: string;
  foto: Express.Multer.File;
  keahlian: string;
  periode: string;
  tugas: string;
  deskripsi: string;
  galeri: Express.Multer.File[];
}

interface StatistikSenatFakultas {
  anggotaSenat: string;
  tahunPeriode: string;
  rapatPerTahun: string;
  keputusan: string;
  slogan: string;
  deskripsi: string;
}

class SenatFakultasService {
  async createSenatFakultas(data: SenatFakultas) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);

      // Process gallery if exists
      let galeriData: Prisma.JsonArray = [];

      if (data.galeri && data.galeri.length > 0) {
        const uploadedUrls = await Promise.all(
          data.galeri.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      const senatFakultas = await prisma.senatFakultas.create({
        data: {
          nama: data.nama,
          jabatan: data.jabatan,
          foto: fotoUrl,
          keahlian: data.keahlian,
          periode: data.periode,
          tugas: data.tugas,
          deskripsi: data.deskripsi,
          galeri: galeriData,
        },
      });
      return senatFakultas;
    } catch (error) {
      console.error("Error in createSenatFakultas:", error);
      throw error;
    }
  }

  async getAllSenatFakultas() {
    try {
      const senatFakultas = await prisma.senatFakultas.findMany();
      return senatFakultas;
    } catch (error) {
      console.error("Error in getAllSenatFakultas:", error);
      throw error;
    }
  }

  async updateSenatFakultas(
    id: number,
    data: SenatFakultas & {
      foto?: Express.Multer.File;
      galeri?: Express.Multer.File[];
    }
  ) {
    try {
      const updateData: any = {
        nama: data.nama,
        jabatan: data.jabatan,
        keahlian: data.keahlian,
        periode: data.periode,
        tugas: data.tugas,
        deskripsi: data.deskripsi,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      // Hanya upload galeri baru jika ada file yang diunggah
      if (data.galeri && data.galeri.length > 0) {
        const uploadedUrls = await Promise.all(
          data.galeri.map((file) => uploadToCloudinary(file.buffer))
        );
        updateData.galeri = uploadedUrls as Prisma.JsonArray;
      }

      const updatedSenatFakultas = await prisma.senatFakultas.update({
        where: { id },
        data: updateData,
      });

      return updatedSenatFakultas;
    } catch (error) {
      console.error("Error in updateSenatFakultas:", error);
      throw error;
    }
  }

  async deleteSenatFakultas(id: number) {
    try {
      const deletedData = await prisma.senatFakultas.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteSenatFakultas:", error);
      throw error;
    }
  }

  async createStatistikSenatFakultas(data: StatistikSenatFakultas) {
    try {
      const statistikSenatFakultas = await prisma.statistikSenatFakultas.create(
        {
          data: {
            anggotaSenat: data.anggotaSenat,
            tahunPeriode: data.tahunPeriode,
            rapatPerTahun: data.rapatPerTahun,
            keputusan: data.keputusan,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        }
      );
      return statistikSenatFakultas;
    } catch (error) {
      console.error("Error in createStatistikSenatFakultas:", error);
      throw error;
    }
  }

  async getAllStatistikSenatFakultas() {
    try {
      const statistikSenatFakultas =
        await prisma.statistikSenatFakultas.findMany();
      return statistikSenatFakultas;
    } catch (error) {
      console.error("Error in getAllStatistikSenatFakultas:", error);
      throw error;
    }
  }

  async updateStatistikSenatFakultas(id: number, data: StatistikSenatFakultas) {
    try {
      const updatedData = await prisma.statistikSenatFakultas.update({
        where: { id },
        data: {
          anggotaSenat: data.anggotaSenat,
          tahunPeriode: data.tahunPeriode,
          rapatPerTahun: data.rapatPerTahun,
          keputusan: data.keputusan,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateStatistikSenatFakultas:", error);
      throw error;
    }
  }

  async deleteStatistikSenatFakultas(id: number) {
    try {
      const deletedData = await prisma.statistikSenatFakultas.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikSenatFakultas:", error);
      throw error;
    }
  }
}

export default new SenatFakultasService();
