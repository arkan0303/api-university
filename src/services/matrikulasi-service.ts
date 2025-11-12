import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface Matrikulasi {
  title: string;
  kategori: Prisma.JsonValue[];
  foto: Express.Multer.File;
  type: string; // "mata kuliah", "persyaratan"
  waktu: string; // 4 minggu
  sks: string; // 24 SKS
  deskripsi: string;
}

interface StatistikMatrikulasi {
  durasi: string;
  sks: string;
  totalMataKuliah: string;
  kelulusan: string;
  slogan: string;
  deskripsi: string;
}

class MatrikulasiService {
  async create(data: Matrikulasi) {
    try {
      let fotoUrl;
      if (data.foto) {
        fotoUrl = await uploadToCloudinary(data.foto.buffer);
      }
      const matrikulasi = await prisma.matrikulasi.create({
        data: {
          ...data,
          foto: fotoUrl || null,
        },
      });
      return matrikulasi;
    } catch (error) {
      console.error("Error in createMatrikulasi:", error);
      throw error;
    }
  }

  async getAllMatrikulasi() {
    try {
      const matrikulasi = await prisma.matrikulasi.findMany();
      return matrikulasi;
    } catch (error) {
      console.error("Error in getAllMatrikulasi:", error);
      throw error;
    }
  }

  async updateMatrikulasi(id: number, data: Matrikulasi) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        type: data.type,
        waktu: data.waktu,
        sks: data.sks,
        kategori: data.kategori,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedMatrikulasi = await prisma.matrikulasi.update({
        where: { id },
        data: updateData,
      });

      return updatedMatrikulasi;
    } catch (error) {
      console.error("Error in updateMatrikulasi:", error);
      throw error;
    }
  }

  async deleteMatrikulasi(id: number) {
    try {
      const deletedMatrikulasi = await prisma.matrikulasi.delete({
        where: { id },
      });
      return deletedMatrikulasi;
    } catch (error) {
      console.error("Error in deleteMatrikulasi:", error);
      throw error;
    }
  }

  async createStatistikMatrikulasi(data: StatistikMatrikulasi) {
    try {
      const statistikMatrikulasi = await prisma.statistikMatrikulasi.create({
        data,
      });
      return statistikMatrikulasi;
    } catch (error) {
      console.error("Error in createStatistikMatrikulasi:", error);
      throw error;
    }
  }

  async getAllStatistikMatrikulasi() {
    try {
      const statistikMatrikulasi = await prisma.statistikMatrikulasi.findMany();
      return statistikMatrikulasi;
    } catch (error) {
      console.error("Error in getAllStatistikMatrikulasi:", error);
      throw error;
    }
  }
  async updateStatistikMatrikulasi(id: number, data: StatistikMatrikulasi) {
    try {
      const updateData: any = {
        durasi: data.durasi,
        sks: data.sks,
        totalMataKuliah: data.totalMataKuliah,
        kelulusan: data.kelulusan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikMatrikulasi =
        await prisma.statistikMatrikulasi.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikMatrikulasi;
    } catch (error) {
      console.error("Error in updateStatistikMatrikulasi:", error);
      throw error;
    }
  }

  async deleteStatistikMatrikulasi(id: number) {
    try {
      const deletedStatistikMatrikulasi =
        await prisma.statistikMatrikulasi.delete({
          where: { id },
        });
      return deletedStatistikMatrikulasi;
    } catch (error) {
      console.error("Error in deleteStatistikMatrikulasi:", error);
      throw error;
    }
  }
}

export default new MatrikulasiService();
