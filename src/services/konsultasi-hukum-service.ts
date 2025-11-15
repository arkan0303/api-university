import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface KonsultasiHukum {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  waktu: string;
}

interface ProsedurKonsultasi {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  waktu: string;
}

interface StatistikProsedurKonsultasi {
  konsultasiPerBulan: string;
  tingkatKepuasan: string;
  konsultasiAktif: string;
  totalKonsultasi: string;
  slogan: string;
  deskripsi: string;
}

class KonsultasiHukumService {
  async createKonsultasiHukum(data: KonsultasiHukum) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createKonsultasiHukum = await prisma.konsultasiHukum.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          waktu: data.waktu,
        },
      });
      return createKonsultasiHukum;
    } catch (error) {
      console.error("Error in createKonsultasiHukum:", error);
      return null;
    }
  }

  async getAllKonsultasiHukum() {
    try {
      const getAllKonsultasiHukum = await prisma.konsultasiHukum.findMany();
      return getAllKonsultasiHukum;
    } catch (error) {
      console.error("Error in getAllKonsultasiHukum:", error);
      return null;
    }
  }

  async updateKonsultasiHukum(id: number, data: KonsultasiHukum) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        waktu: data.waktu,
        kategori: data.kategori,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedKonsultasiHukum = await prisma.konsultasiHukum.update({
        where: { id },
        data: updateData,
      });

      return updatedKonsultasiHukum;
    } catch (error) {
      console.error("Error in updateKonsultasiHukum:", error);
      throw error;
    }
  }

  async deleteKonsultasiHukum(id: number) {
    try {
      const deletedKonsultasiHukum = await prisma.konsultasiHukum.delete({
        where: { id },
      });
      return deletedKonsultasiHukum;
    } catch (error) {
      console.error("Error in deleteKonsultasiHukum:", error);
      throw error;
    }
  }

  async createProsedurKonsultasi(data: ProsedurKonsultasi) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createProsedurKonsultasi = await prisma.prosedurKonsultasi.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          deskripsi: data.deskripsi,
          waktu: data.waktu,
        },
      });
      return createProsedurKonsultasi;
    } catch (error) {
      console.error("Error in createProsedurKonsultasi:", error);
      return null;
    }
  }

  async getAllProsedurKonsultasi() {
    try {
      const getAllProsedurKonsultasi =
        await prisma.prosedurKonsultasi.findMany();
      return getAllProsedurKonsultasi;
    } catch (error) {
      console.error("Error in getAllProsedurKonsultasi:", error);
      return null;
    }
  }

  async updateProsedurKonsultasi(id: number, data: ProsedurKonsultasi) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        waktu: data.waktu,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedProsedurKonsultasi = await prisma.prosedurKonsultasi.update({
        where: { id },
        data: updateData,
      });

      return updatedProsedurKonsultasi;
    } catch (error) {
      console.error("Error in updateProsedurKonsultasi:", error);
      throw error;
    }
  }

  async deleteProsedurKonsultasi(id: number) {
    try {
      const deletedProsedurKonsultasi = await prisma.prosedurKonsultasi.delete({
        where: { id },
      });
      return deletedProsedurKonsultasi;
    } catch (error) {
      console.error("Error in deleteProsedurKonsultasi:", error);
      throw error;
    }
  }

  async createStatistikProsedurKonsultasi(data: StatistikProsedurKonsultasi) {
    try {
      const createStatistikProsedurKonsultasi =
        await prisma.statistikProsedurKonsultasi.create({
          data: {
            konsultasiPerBulan: data.konsultasiPerBulan,
            tingkatKepuasan: data.tingkatKepuasan,
            konsultasiAktif: data.konsultasiAktif,
            totalKonsultasi: data.totalKonsultasi,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createStatistikProsedurKonsultasi;
    } catch (error) {
      console.error("Error in createStatistikProsedurKonsultasi:", error);
      return null;
    }
  }

  async getAllStatistikProsedurKonsultasi() {
    try {
      const getAllStatistikProsedurKonsultasi =
        await prisma.statistikProsedurKonsultasi.findMany();
      return getAllStatistikProsedurKonsultasi;
    } catch (error) {
      console.error("Error in getAllStatistikProsedurKonsultasi:", error);
      return null;
    }
  }

  async updateStatistikProsedurKonsultasi(
    id: number,
    data: StatistikProsedurKonsultasi
  ) {
    try {
      const updateData: any = {
        konsultasiPerBulan: data.konsultasiPerBulan,
        tingkatKepuasan: data.tingkatKepuasan,
        konsultasiAktif: data.konsultasiAktif,
        totalKonsultasi: data.totalKonsultasi,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikProsedurKonsultasi =
        await prisma.statistikProsedurKonsultasi.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikProsedurKonsultasi;
    } catch (error) {
      console.error("Error in updateStatistikProsedurKonsultasi:", error);
      throw error;
    }
  }

  async deleteStatistikProsedurKonsultasi(id: number) {
    try {
      const deletedStatistikProsedurKonsultasi =
        await prisma.statistikProsedurKonsultasi.delete({
          where: { id },
        });
      return deletedStatistikProsedurKonsultasi;
    } catch (error) {
      console.error("Error in deleteStatistikProsedurKonsultasi:", error);
      throw error;
    }
  }
}

export default new KonsultasiHukumService();
