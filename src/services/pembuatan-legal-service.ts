import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface PembuatanLegal {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  waktu: string;
}

interface ProsedurPembuatanLegal {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  waktu: string;
}

interface StatistikProsedurPembuatanLegal {
  legalOpinianPerTahun: string;
  tingkatKepuasan: string;
  ahliHukum: string;
  totalPembuatan: string;
  slogan: string;
  deskripsi: string;
}

class PembuatanLegalService {
  async createPembuatanLegal(data: PembuatanLegal) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createPembuatanLegal = await prisma.pembuatanLegal.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          waktu: data.waktu,
        },
      });
      return createPembuatanLegal;
    } catch (error) {
      console.error("Error in createPembuatanLegal:", error);
      return null;
    }
  }

  async getAllPembuatanLegal() {
    try {
      const getAllPembuatanLegal = await prisma.pembuatanLegal.findMany();
      return getAllPembuatanLegal;
    } catch (error) {
      console.error("Error in getAllPembuatanLegal:", error);
      return null;
    }
  }

  async updatePembuatanLegal(id: number, data: PembuatanLegal) {
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

      const updatedPembuatanLegal = await prisma.pembuatanLegal.update({
        where: { id },
        data: updateData,
      });

      return updatedPembuatanLegal;
    } catch (error) {
      console.error("Error in updatePendampinganHukum:", error);
      throw error;
    }
  }

  async deletePembuatanLegal(id: number) {
    try {
      const deletedPembuatanLegal = await prisma.pembuatanLegal.delete({
        where: { id },
      });
      return deletedPembuatanLegal;
    } catch (error) {
      console.error("Error in deletePembuatanLegal:", error);
      throw error;
    }
  }

  async createProsedurPembuatanLegal(data: ProsedurPembuatanLegal) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createProsedurPembuatanLegal =
        await prisma.prosedurPembuatanLegal.create({
          data: {
            foto: fotoUrl,
            title: data.title,
            deskripsi: data.deskripsi,
            waktu: data.waktu,
          },
        });
      return createProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in createProsedurPembuatanLegal:", error);
      return null;
    }
  }

  async getAllProsedurPembuatanLegal() {
    try {
      const getAllProsedurPembuatanLegal =
        await prisma.prosedurPembuatanLegal.findMany();
      return getAllProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in getAllProsedurPendampinganHukum:", error);
      return null;
    }
  }

  async updateProsedurPembuatanLegal(id: number, data: ProsedurPembuatanLegal) {
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

      const updatedProsedurPembuatanLegal =
        await prisma.prosedurPembuatanLegal.update({
          where: { id },
          data: updateData,
        });

      return updatedProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in updateProsedurPembuatanLegal:", error);
      throw error;
    }
  }

  async deleteProsedurPembuatanLegal(id: number) {
    try {
      const deletedProsedurPembuatanLegal =
        await prisma.prosedurPembuatanLegal.delete({
          where: { id },
        });
      return deletedProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in deleteProsedurPembuatanLegal:", error);
      throw error;
    }
  }

  async createStatistikProsedurPembuatanLegal(
    data: StatistikProsedurPembuatanLegal
  ) {
    try {
      const createStatistikProsedurPembuatanLegal =
        await prisma.statistikPembuatanLegal.create({
          data: {
            legalOpinianPerTahun: data.legalOpinianPerTahun,
            tingkatKepuasan: data.tingkatKepuasan,
            ahliHukum: data.ahliHukum,
            totalPembuatan: data.totalPembuatan,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createStatistikProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in createStatistikProsedurPembuatanLegal:", error);
      return null;
    }
  }

  async getAllStatistikProsedurPembuatanLegal() {
    try {
      const getAllStatistikProsedurPembuatanLegal =
        await prisma.statistikPembuatanLegal.findMany();
      return getAllStatistikProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in getAllStatistikProsedurPembuatanLegal:", error);
      return null;
    }
  }

  async updateStatistikProsedurPembuatanLegal(
    id: number,
    data: StatistikProsedurPembuatanLegal
  ) {
    try {
      const updateData: any = {
        legalOpinianPerTahun: data.legalOpinianPerTahun,
        tingkatKepuasan: data.tingkatKepuasan,
        ahliHukum: data.ahliHukum,
        totalPembuatan: data.totalPembuatan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikProsedurPembuatanLegal =
        await prisma.statistikPembuatanLegal.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in updateStatistikProsedurPembuatanLegal:", error);
      throw error;
    }
  }

  async deleteStatistikProsedurPembuatanLegal(id: number) {
    try {
      const deletedStatistikProsedurPembuatanLegal =
        await prisma.statistikPembuatanLegal.delete({
          where: { id },
        });
      return deletedStatistikProsedurPembuatanLegal;
    } catch (error) {
      console.error("Error in deleteStatistikProsedurPembuatanLegal:", error);
      throw error;
    }
  }
}

export default new PembuatanLegalService();
