import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface PendampinganHukum {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  waktu: string;
}

interface ProsedurPendampinganHukum {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  waktu: string;
}

interface StatistikProsedurPendampinganHukum {
  kasusDidampingi: string;
  tingkatKeberhasilan: string;
  advokatBerpengalaman: string;
  totalPendampingan: string;
  slogan: string;
  deskripsi: string;
}

class PendampinganHukumService {
  async createPendampinganHukum(data: PendampinganHukum) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createPendampinganHukum = await prisma.pendampinganHukum.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          waktu: data.waktu,
        },
      });
      return createPendampinganHukum;
    } catch (error) {
      console.error("Error in createPendampinganHukum:", error);
      return null;
    }
  }

  async getAllPendampinganHukum() {
    try {
      const getAllPendampinganHukum = await prisma.pendampinganHukum.findMany();
      return getAllPendampinganHukum;
    } catch (error) {
      console.error("Error in getAllPendampinganHukum:", error);
      return null;
    }
  }

  async updatePendampinganHukum(id: number, data: PendampinganHukum) {
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

      const updatedPendampinganHukum = await prisma.pendampinganHukum.update({
        where: { id },
        data: updateData,
      });

      return updatedPendampinganHukum;
    } catch (error) {
      console.error("Error in updatePendampinganHukum:", error);
      throw error;
    }
  }

  async deletePendampinganHukum(id: number) {
    try {
      const deletedPendampinganHukum = await prisma.pendampinganHukum.delete({
        where: { id },
      });
      return deletedPendampinganHukum;
    } catch (error) {
      console.error("Error in deletePendampinganHukum:", error);
      throw error;
    }
  }

  async createProsedurPendampinganHukum(data: ProsedurPendampinganHukum) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createProsedurPendampinganHukum =
        await prisma.prosedurPendampinganHukum.create({
          data: {
            foto: fotoUrl,
            title: data.title,
            deskripsi: data.deskripsi,
            waktu: data.waktu,
          },
        });
      return createProsedurPendampinganHukum;
    } catch (error) {
      console.error("Error in createProsedurPendampinganHukum:", error);
      return null;
    }
  }

  async getAllProsedurPendampinganHukum() {
    try {
      const getAllProsedurPendampinganHukum =
        await prisma.prosedurPendampinganHukum.findMany();
      return getAllProsedurPendampinganHukum;
    } catch (error) {
      console.error("Error in getAllProsedurPendampinganHukum:", error);
      return null;
    }
  }

  async updateProsedurPendampinganHukum(
    id: number,
    data: ProsedurPendampinganHukum
  ) {
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

      const updatedProsedurPendampinganHukum =
        await prisma.prosedurPendampinganHukum.update({
          where: { id },
          data: updateData,
        });

      return updatedProsedurPendampinganHukum;
    } catch (error) {
      console.error("Error in updateProsedurPendampinganHukum:", error);
      throw error;
    }
  }

  async deleteProsedurPendampinganHukum(id: number) {
    try {
      const deletedProsedurPendampinganHukum =
        await prisma.prosedurPendampinganHukum.delete({
          where: { id },
        });
      return deletedProsedurPendampinganHukum;
    } catch (error) {
      console.error("Error in deleteProsedurPendampinganHukum:", error);
      throw error;
    }
  }

  async createStatistikProsedurPendampinganHukum(
    data: StatistikProsedurPendampinganHukum
  ) {
    try {
      const createStatistikProsedurPendampinganHukum =
        await prisma.statistikPendampinganHukum.create({
          data: {
            kasusDidampingi: data.kasusDidampingi,
            tingkatKeberhasilan: data.tingkatKeberhasilan,
            advokatBerpengalaman: data.advokatBerpengalaman,
            totalPendampingan: data.totalPendampingan,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createStatistikProsedurPendampinganHukum;
    } catch (error) {
      console.error(
        "Error in createStatistikProsedurPendampinganHukum:",
        error
      );
      return null;
    }
  }

  async getAllStatistikProsedurPendampinganHukum() {
    try {
      const getAllStatistikProsedurPendampinganHukum =
        await prisma.statistikPendampinganHukum.findMany();
      return getAllStatistikProsedurPendampinganHukum;
    } catch (error) {
      console.error(
        "Error in getAllStatistikProsedurPendampinganHukum:",
        error
      );
      return null;
    }
  }

  async updateStatistikProsedurPendampinganHukum(
    id: number,
    data: StatistikProsedurPendampinganHukum
  ) {
    try {
      const updateData: any = {
        kasusDidampingi: data.kasusDidampingi,
        tingkatKeberhasilan: data.tingkatKeberhasilan,
        advokatBerpengalaman: data.advokatBerpengalaman,
        totalPendampingan: data.totalPendampingan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikProsedurPendampinganHukum =
        await prisma.statistikPendampinganHukum.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikProsedurPendampinganHukum;
    } catch (error) {
      console.error(
        "Error in updateStatistikProsedurPendampinganHukum:",
        error
      );
      throw error;
    }
  }

  async deleteStatistikProsedurPendampinganHukum(id: number) {
    try {
      const deletedStatistikProsedurPendampinganHukum =
        await prisma.statistikPendampinganHukum.delete({
          where: { id },
        });
      return deletedStatistikProsedurPendampinganHukum;
    } catch (error) {
      console.error(
        "Error in deleteStatistikProsedurPendampinganHukum:",
        error
      );
      throw error;
    }
  }
}

export default new PendampinganHukumService();
