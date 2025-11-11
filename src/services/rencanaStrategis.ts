import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface Strategis {
  tahun: string;
  judul: string;
  katagori: Prisma.JsonValue[];
  deskripsi: string;
  foto: Express.Multer.File[];
}

interface Statistik {
  tahunRencana: string;
  targetStrategis: string;
  programAksi: string;
  targetAkreditas: string;
  slogan: string;
  deskripsi: string;
}

class RencanaStrategisService {
  async createStrategis(strategis: Strategis) {
    try {
      let galeriData: Prisma.JsonArray = [];

      if (strategis.foto && strategis.foto.length > 0) {
        const uploadedUrls = await Promise.all(
          strategis.foto.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      const strategisData = await prisma.rencanaStrategis.create({
        data: {
          tahun: strategis.tahun,
          judul: strategis.judul,
          katagori: strategis.katagori,
          deskripsi: strategis.deskripsi,
          foto: galeriData,
        },
      });
      return strategisData;
    } catch (error) {
      console.error("Error in createStrategis:", error);
      throw error;
    }
  }

  async getAllStrategis() {
    try {
      const strategis = await prisma.rencanaStrategis.findMany();
      return strategis;
    } catch (error) {
      console.error("Error in getAllStrategis:", error);
      throw error;
    }
  }

  async updateStrategis(
    id: number,
    strategis: Strategis & { foto?: Express.Multer.File[] }
  ) {
    try {
      const updateData: any = {
        tahun: strategis.tahun,
        judul: strategis.judul,
        katagori: strategis.katagori,
        deskripsi: strategis.deskripsi,
        foto: strategis.foto,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (strategis.foto && strategis.foto.length > 0) {
        const fotoUrl = await Promise.all(
          strategis.foto.map((file) => uploadToCloudinary(file.buffer))
        );
        updateData.foto = fotoUrl;
      }

      const updatedStrategis = await prisma.rencanaStrategis.update({
        where: { id },
        data: updateData,
      });

      return updatedStrategis;
    } catch (error) {
      console.error("Error in updateStrategis:", error);
      throw error;
    }
  }

  async deleteStrategis(id: number) {
    try {
      const deletedData = await prisma.rencanaStrategis.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createStatistikStrategis(statistik: Statistik) {
    try {
      const statistiks = await prisma.statistikRencanaStrategis.create({
        data: {
          tahunRencana: statistik.tahunRencana,
          targetStrategis: statistik.targetStrategis,
          programAksi: statistik.programAksi,
          targetAkreditas: statistik.targetAkreditas,
          slogan: statistik.slogan,
          deskripsi: statistik.deskripsi,
        },
      });
      return statistiks;
    } catch (error) {
      console.error("Error in createStatistikStrategis:", error);
      throw error;
    }
  }

  async getAllStatistikStrategis() {
    try {
      const statistiks = await prisma.statistikRencanaStrategis.findMany();
      return statistiks;
    } catch (error) {
      console.error("Error in getAllStatistikStrategis:", error);
      throw error;
    }
  }

  async updateStatistikStrategis(id: number, statistik: Statistik) {
    try {
      const updateData: any = {
        tahunRencana: statistik.tahunRencana,
        targetStrategis: statistik.targetStrategis,
        programAksi: statistik.programAksi,
        targetAkreditas: statistik.targetAkreditas,
        slogan: statistik.slogan,
        deskripsi: statistik.deskripsi,
      };

      const updatedStatistik = await prisma.statistikRencanaStrategis.update({
        where: { id },
        data: updateData,
      });

      return updatedStatistik;
    } catch (error) {
      console.error("Error in updateStatistikStrategis:", error);
      throw error;
    }
  }

  async deleteStatistikStrategis(id: number) {
    try {
      const deletedData = await prisma.statistikRencanaStrategis.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }
}

export default new RencanaStrategisService();
