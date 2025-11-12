import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface PengurusLBKH {
  nama: string;
  foto: Express.Multer.File;
  deskripsi: string;
  jabatan: string;
  kategori: Prisma.JsonValue;
  email: string;
  noTelp: string;
}

interface StatistikPengurusLBKH {
  total: string;
  kasusDitangani: string;
  advokatAktif: string;
  tahunPengalaman: string;
  slogan: string;
  deskripsi: string;
}

class PengurusLBKHService {
  async createPengurusLBKH(data: PengurusLBKH) {
    try {
      let fotoUrl;
      if (data.foto) {
        fotoUrl = await uploadToCloudinary(data.foto.buffer);
      }
      const pengurusLBKH = await prisma.pengurusLBKH.create({
        data: {
          ...data,
          foto: fotoUrl || null,
        },
      });
      return pengurusLBKH;
    } catch (error) {
      console.error("Error in createPengurusLBKH:", error);
      throw error;
    }
  }

  async getAllPengurusLBKH() {
    try {
      const pengurusLBKH = await prisma.pengurusLBKH.findMany();
      return pengurusLBKH;
    } catch (error) {
      console.error("Error in getAllPengurusLBKH:", error);
      throw error;
    }
  }

  async updatePengurusLBKH(id: number, data: PengurusLBKH) {
    try {
      const updateData: any = {
        nama: data.nama,
        deskripsi: data.deskripsi,
        jabatan: data.jabatan,
        kategori: data.kategori,
        email: data.email,
        noTelp: data.noTelp,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedPengurusLBKH = await prisma.pengurusLBKH.update({
        where: { id },
        data: updateData,
      });

      return updatedPengurusLBKH;
    } catch (error) {
      console.error("Error in updatePengurusLBKH:", error);
      throw error;
    }
  }

  async deletePengurusLBKH(id: number) {
    try {
      const deletedPengurusLBKH = await prisma.pengurusLBKH.delete({
        where: { id },
      });
      return deletedPengurusLBKH;
    } catch (error) {
      console.error("Error in deletePengurusLBKH:", error);
      throw error;
    }
  }

  async createStatistikPengurusLBKH(data: StatistikPengurusLBKH) {
    try {
      const statistikPengurusLBKH = await prisma.statistikPengurusLBKH.create({
        data,
      });
      return statistikPengurusLBKH;
    } catch (error) {
      console.error("Error in createStatistikPengurusLBKH:", error);
      throw error;
    }
  }

  async getAllStatistikPengurusLBKH() {
    try {
      const statistikPengurusLBKH =
        await prisma.statistikPengurusLBKH.findMany();
      return statistikPengurusLBKH;
    } catch (error) {
      console.error("Error in getAllStatistikPengurusLBKH:", error);
      throw error;
    }
  }

  async updateStatistikPengurusLBKH(id: number, data: StatistikPengurusLBKH) {
    try {
      const updatedStatistikPengurusLBKH =
        await prisma.statistikPengurusLBKH.update({
          where: { id },
          data,
        });
      return updatedStatistikPengurusLBKH;
    } catch (error) {
      console.error("Error in updateStatistikPengurusLBKH:", error);
      throw error;
    }
  }

  async deleteStatistikPengurusLBKH(id: number) {
    try {
      const deletedStatistikPengurusLBKH =
        await prisma.statistikPengurusLBKH.delete({
          where: { id },
        });
      return deletedStatistikPengurusLBKH;
    } catch (error) {
      console.error("Error in deleteStatistikPengurusLBKH:", error);
      throw error;
    }
  }
}

export default new PengurusLBKHService();
