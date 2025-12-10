import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";

interface VisiMisiLBKH {
  type: string; // "Visi", "Misi"
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
}

interface StatistikVisiMisiLBKH {
  paralegaf: string;
  kasusDitangani: string;
  advokatAktif: string;
  tingkatKepuasan: string;
  slogan: string;
  deskripsi: string;
}

class VisiMisiLBKHService {
  async createVisiMisiLBKH(visiMisiLBKH: VisiMisiLBKH) {
    try {
      const fotoUrl = await uploadToCloudinary(visiMisiLBKH.foto.buffer);
      const visiMisiLBKHH = await prisma.visiMisiLBKH.create({
        data: {
          type: visiMisiLBKH.type,
          title: visiMisiLBKH.title,
          deskripsi: visiMisiLBKH.deskripsi,
          kategori: visiMisiLBKH.kategori,
          foto: fotoUrl,
        },
      });
      return visiMisiLBKHH;
    } catch (error) {
      console.error("Error in createVisiMisiLBKH:", error);
      throw error;
    }
  }

  async updateVisiMisiLBKH(id: number, visiMisiLBKH: VisiMisiLBKH) {
    try {
      const updateData: any = {
        type: visiMisiLBKH.type,
        title: visiMisiLBKH.title,
        deskripsi: visiMisiLBKH.deskripsi,
        kategori: visiMisiLBKH.kategori,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (visiMisiLBKH.foto) {
        const fotoUrl = await uploadToCloudinary(visiMisiLBKH.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const visiMisiLBKHH = await prisma.visiMisiLBKH.update({
        where: { id: id },
        data: updateData,
      });
      return visiMisiLBKHH;
    } catch (error) {
      console.error("Error in updateVisiMisiLBKH:", error);
      throw error;
    }
  }

  async deleteVisiMisiLBKH(id: number) {
    try {
      const deletedData = await prisma.visiMisiLBKH.delete({
        where: { id: id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteVisiMisiLBKH:", error);
      throw error;
    }
  }

  async getAllVisiMisiLBKH() {
    try {
      const visiMisiLBKH = await prisma.visiMisiLBKH.findMany();
      return visiMisiLBKH;
    } catch (error) {
      console.error("Error in getAllVisiMisiLBKH:", error);
      throw error;
    }
  }

  async createStatistikVisiMisiLBKH(
    statistikVisiMisiLBKH: StatistikVisiMisiLBKH
  ) {
    try {
      const statistikVisiMisiLBKHH = await prisma.statistikVisiMisiLBKH.create({
        data: statistikVisiMisiLBKH,
      });
      return statistikVisiMisiLBKHH;
    } catch (error) {
      console.error("Error in createStatistikVisiMisiLBKH:", error);
      throw error;
    }
  }

  async updateStatistikVisiMisiLBKH(
    id: number,
    statistikVisiMisiLBKH: StatistikVisiMisiLBKH
  ) {
    try {
      const updateData: any = {
        paralegaf: statistikVisiMisiLBKH.paralegaf,
        kasusDitangani: statistikVisiMisiLBKH.kasusDitangani,
        advokatAktif: statistikVisiMisiLBKH.advokatAktif,
        tingkatKepuasan: statistikVisiMisiLBKH.tingkatKepuasan,
        slogan: statistikVisiMisiLBKH.slogan,
        deskripsi: statistikVisiMisiLBKH.deskripsi,
      };

      const statistikVisiMisiLBKHH = await prisma.statistikVisiMisiLBKH.update({
        where: { id: id },
        data: updateData,
      });
      return statistikVisiMisiLBKHH;
    } catch (error) {
      console.error("Error in updateStatistikVisiMisiLBKH:", error);
      throw error;
    }
  }

  async deleteStatistikVisiMisiLBKH(id: number) {
    try {
      const deletedData = await prisma.statistikVisiMisiLBKH.delete({
        where: { id: id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikVisiMisiLBKH:", error);
      throw error;
    }
  }

  async getAllStatistikVisiMisiLBKH() {
    try {
      const statistikVisiMisiLBKH =
        await prisma.statistikVisiMisiLBKH.findMany();
      return statistikVisiMisiLBKH;
    } catch (error) {
      console.error("Error in getAllStatistikVisiMisiLBKH:", error);
      throw error;
    }
  }
}

export default new VisiMisiLBKHService();
