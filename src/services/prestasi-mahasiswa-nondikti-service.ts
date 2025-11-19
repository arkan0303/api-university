import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface PrestasiMahasiswaNonDikti {
  foto: Express.Multer.File;
  title: string;
  juara: string; //Juara 1, Juara 2, Juara 3
  namaMahasiswa: string;
  kategori: Prisma.JsonValue[]; //Debat Hukum , Nasional
  deskripsi: string;
  dampak: string;
  keahlian: Prisma.JsonValue[];
  penghargaan: Prisma.JsonValue[];
  waktuKompetisi: string;
  alamat: string;
  penyelenggara: string;
}

interface StatistikPrestasiMahasiswaNonDikti {
  totalPrestasi: string;
  tingkatInternasional: string;
  tingkatNasional: string;
  tingkatRegional: string;
  slogan: string;
  deskripsi: string;
}

class PrestasiMahasiswaNonDiktiService {
  async createPrestasiMahasiswaNonDikti(data: PrestasiMahasiswaNonDikti) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createPrestasiMahasiswaNonDikti =
        await prisma.prestasiMahasiswaNonDikti.create({
          data: {
            ...data,
            foto: fotoUrl,
          },
        });
      return createPrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error("Error in createPrestasiMahasiswaNonDikti:", error);
      throw error;
    }
  }

  async getAllPrestasiMahasiswaNonDikti() {
    try {
      const getAllPrestasiMahasiswaNonDikti =
        await prisma.prestasiMahasiswaNonDikti.findMany();
      return getAllPrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error("Error in getAllPrestasiMahasiswaNonDikti:", error);
      throw error;
    }
  }

  async updatePrestasiMahasiswaNonDikti(
    id: number,
    data: PrestasiMahasiswaNonDikti & { foto?: Express.Multer.File }
  ) {
    try {
      const updateData: any = {
        title: data.title,
        juara: data.juara,
        namaMahasiswa: data.namaMahasiswa,
        kategori: data.kategori,
        deskripsi: data.deskripsi,
        dampak: data.dampak,
        keahlian: data.keahlian,
        penghargaan: data.penghargaan,
        waktuKompetisi: data.waktuKompetisi,
        alamat: data.alamat,
        penyelenggara: data.penyelenggara,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedPrestasiMahasiswaNonDikti =
        await prisma.prestasiMahasiswaNonDikti.update({
          where: { id },
          data: updateData,
        });

      return updatedPrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error("Error in updatePrestasiMahasiswaNonDikti:", error);
      throw error;
    }
  }

  async deletePrestasiMahasiswaNonDikti(id: number) {
    try {
      const deletePrestasiMahasiswaNonDikti =
        await prisma.prestasiMahasiswaNonDikti.delete({
          where: {
            id,
          },
        });
      return deletePrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error("Error in deletePrestasiMahasiswaNonDikti:", error);
      throw error;
    }
  }

  async createStatistikPrestasiMahasiswaNonDikti(
    data: StatistikPrestasiMahasiswaNonDikti
  ) {
    try {
      const createStatistikPrestasiMahasiswaNonDikti =
        await prisma.statistikPrestasiMahasiswaNonDikti.create({
          data: {
            ...data,
          },
        });
      return createStatistikPrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error(
        "Error in createStatistikPrestasiMahasiswaNonDikti:",
        error
      );
      throw error;
    }
  }

  async getAllStatistikPrestasiMahasiswaNonDikti() {
    try {
      const getAllStatistikPrestasiMahasiswaNonDikti =
        await prisma.statistikPrestasiMahasiswaNonDikti.findMany();
      return getAllStatistikPrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error(
        "Error in getAllStatistikPrestasiMahasiswaNonDikti:",
        error
      );
      throw error;
    }
  }

  async updateStatistikPrestasiMahasiswaNonDikti(
    id: number,
    data: StatistikPrestasiMahasiswaNonDikti
  ) {
    try {
      const updateData: any = {
        totalPrestasi: data.totalPrestasi,
        tingkatInternasional: data.tingkatInternasional,
        tingkatNasional: data.tingkatNasional,
        tingkatRegional: data.tingkatRegional,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikPrestasiMahasiswaNonDikti =
        await prisma.statistikPrestasiMahasiswaNonDikti.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikPrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error(
        "Error in updateStatistikPrestasiMahasiswaNonDikti:",
        error
      );
      throw error;
    }
  }

  async deleteStatistikPrestasiMahasiswaNonDikti(id: number) {
    try {
      const deleteStatistikPrestasiMahasiswaNonDikti =
        await prisma.statistikPrestasiMahasiswaNonDikti.delete({
          where: {
            id,
          },
        });
      return deleteStatistikPrestasiMahasiswaNonDikti;
    } catch (error) {
      console.error(
        "Error in deleteStatistikPrestasiMahasiswaNonDikti:",
        error
      );
      throw error;
    }
  }
}

export default new PrestasiMahasiswaNonDiktiService();
