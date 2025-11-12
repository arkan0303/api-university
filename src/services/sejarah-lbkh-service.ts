import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface sejarahLBKH {
  title: string;
  foto: Express.Multer.File[];
  deskripsi: string;
  tahun: string; //1999
}

interface StatistikSejarahLBKH {
  tahun: string;
  kasus: string;
  advokat: string;
  hukumTerakreditasi: string;
  slogan: string;
  deskripsi: string;
}

class SejarahLBKHService {
  async create(data: sejarahLBKH) {
    try {
      let galeriData: Prisma.JsonArray = [];

      if (data.foto && data.foto.length > 0) {
        const uploadedUrls = await Promise.all(
          data.foto.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      const sejarahLBKH = await prisma.sejarahLBKH.create({
        data: {
          title: data.title,
          foto: galeriData,
          deskripsi: data.deskripsi,
          tahun: data.tahun,
        },
      });
      return sejarahLBKH;
    } catch (error) {
      console.error("Error in createSejarahLBKH:", error);
      throw error;
    }
  }

  async getAllSejarahLBKH() {
    try {
      const sejarahLBKHH = await prisma.sejarahLBKH.findMany();
      return sejarahLBKHH;
    } catch (error) {
      console.error("Error in getAllSejarahLBKH:", error);
      throw error;
    }
  }

  async updateSejarahLBKH(
    id: number,
    data: sejarahLBKH & { foto?: Express.Multer.File[] }
  ) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        tahun: data.tahun,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto[0].buffer);
        updateData.foto = fotoUrl;
      }

      const updatedSejarahLBKH = await prisma.sejarahLBKH.update({
        where: { id },
        data: updateData,
      });

      return updatedSejarahLBKH;
    } catch (error) {
      console.error("Error in updateSejarahLBKH:", error);
      throw error;
    }
  }

  async deleteSejarahLBKH(id: number) {
    try {
      const deletedSejarahLBKH = await prisma.sejarahLBKH.delete({
        where: { id },
      });
      return deletedSejarahLBKH;
    } catch (error) {
      console.error("Error in deleteSejarahLBKH:", error);
      throw error;
    }
  }

  async createStatistik(data: StatistikSejarahLBKH) {
    try {
      const statistikSejarahLBKH = await prisma.statistikSejarahLBKH.create({
        data: {
          tahun: data.tahun,
          kasus: data.kasus,
          advokat: data.advokat,
          hukumTerakreditasi: data.hukumTerakreditasi,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return statistikSejarahLBKH;
    } catch (error) {
      console.error("Error in createStatistik:", error);
      throw error;
    }
  }

  async getAllStatistik() {
    try {
      const statistikSejarahLBKH = await prisma.statistikSejarahLBKH.findMany();
      return statistikSejarahLBKH;
    } catch (error) {
      console.error("Error in getAllStatistik:", error);
      throw error;
    }
  }

  async updateStatistik(id: number, data: StatistikSejarahLBKH) {
    try {
      const updatedStatistikSejarahLBKH =
        await prisma.statistikSejarahLBKH.update({
          where: { id },
          data: data,
        });
      return updatedStatistikSejarahLBKH;
    } catch (error) {
      console.error("Error in updateStatistik:", error);
      throw error;
    }
  }

  async deleteStatistik(id: number) {
    try {
      const deletedStatistikSejarahLBKH =
        await prisma.statistikSejarahLBKH.delete({
          where: { id },
        });
      return deletedStatistikSejarahLBKH;
    } catch (error) {
      console.error("Error in deleteStatistik:", error);
      throw error;
    }
  }
}

export default new SejarahLBKHService();
