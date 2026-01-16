import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface VisMisi {
  type: string;
  title: string;
  deskripsi: string;
  gambar: Express.Multer.File | null;
  misi: Prisma.JsonValue[];
  tujuan: Prisma.JsonValue[];
  sasaran: Prisma.JsonValue[];
}

interface StatistikVisiMisi {
  tahunPengalaman: string;
  alumni: string;
  dosenBerkualitas: string;
  ProgramUnggula: string;
  slogan: string;
  deskripsi: string;
}

class VisMisiService {
  async createVisMisi(visMisi: VisMisi) {
    try {
      let fotoUrl: string | undefined = undefined;
      if (visMisi.gambar) {
        fotoUrl = await uploadToCloudinary(visMisi.gambar.buffer);
      }

      const visMisii = await prisma.visiMisi.create({
        data: {
          ...visMisi,
          gambar: fotoUrl,
        },
      });
      return visMisii;
    } catch (error) {
      console.error("Error in createVisMisi:", error);
      throw error;
    }
  }

  async getAllVisMisi() {
    try {
      const visMisi = await prisma.visiMisi.findMany();
      return visMisi;
    } catch (error) {
      console.error("Error in getAllVisMisi:", error);
      throw error;
    }
  }

  async updateVisMisi(
    id: number,
    visMisii: VisMisi & { gambar?: Express.Multer.File }
  ) {
    try {
      const updateData: any = {
        type: visMisii.type,
        title: visMisii.title,
        deskripsi: visMisii.deskripsi,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (visMisii.gambar) {
        const fotoUrl = await uploadToCloudinary(visMisii.gambar.buffer);
        updateData.gambar = fotoUrl;
      }

      const visMisi = await prisma.visiMisi.update({
        where: { id: id },
        data: updateData,
      });
      return visMisi;
    } catch (error) {
      console.error("Error in updateVisMisi:", error);
      throw error;
    }
  }

  async deleteVisMisi(id: number) {
    try {
      const visMisi = await prisma.visiMisi.delete({
        where: {
          id: id,
        },
      });
      return visMisi;
    } catch (error) {
      console.error("Error in deleteVisMisi:", error);
      throw error;
    }
  }

  async createStatistikVisiMisi(statistikVisiMisii: StatistikVisiMisi) {
    try {
      const statistikVisiMisi = await prisma.statistikVisiMisi.create({
        data: statistikVisiMisii,
      });
      return statistikVisiMisi;
    } catch (error) {
      console.error("Error in createStatistikVisiMisi:", error);
      throw error;
    }
  }

  async getAllStatistikVisiMisi() {
    try {
      const statistikVisiMisi = await prisma.statistikVisiMisi.findMany();
      return statistikVisiMisi;
    } catch (error) {
      console.error("Error in getAllStatistikVisiMisi:", error);
      throw error;
    }
  }

  async updateStatistikVisiMisi(
    id: number,
    statistikVisiMisii: StatistikVisiMisi
  ) {
    try {
      const statistikVisiMisi = await prisma.statistikVisiMisi.update({
        where: { id: id },
        data: statistikVisiMisii,
      });
      return statistikVisiMisi;
    } catch (error) {
      console.error("Error in updateStatistikVisiMisi:", error);
      throw error;
    }
  }

  async deleteStatistikVisiMisi(id: number) {
    try {
      const statistikVisiMisi = await prisma.statistikVisiMisi.delete({
        where: {
          id: id,
        },
      });
      return statistikVisiMisi;
    } catch (error) {
      console.error("Error in deleteStatistikVisiMisi:", error);
      throw error;
    }
  }
}

export default new VisMisiService();
