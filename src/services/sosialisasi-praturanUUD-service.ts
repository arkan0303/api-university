import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";

interface SosialisasiPraturanUUD {
  foto: Express.Multer.File;
  title: string;
  waktu: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  type: string;
}

interface StatistikSosialisasiPraturanUUD {
  kegiatanOrginsasi: string;
  pesertaTeredukasi: string;
  institusiMitra: string;
  totalSosialisasi: string;
  slogan: string;
  deskripsi: string;
}

class SosialisasiPraturanUUDService {
  async createSosialisasiPraturanUUD(data: SosialisasiPraturanUUD) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const sosialisasiPraturanUUD = await prisma.sosialisasiPraturanUUD.create(
        {
          data: {
            foto: fotoUrl,
            title: data.title,
            waktu: data.waktu,
            deskripsi: data.deskripsi,
            kategori: data.kategori,
            type: data.type,
          },
        }
      );
      return sosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllSosialisasiPraturanUUD() {
    try {
      const sosialisasiPraturanUUD =
        await prisma.sosialisasiPraturanUUD.findMany();
      return sosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateSosialisasiPraturanUUDById(
    id: number,
    data: SosialisasiPraturanUUD
  ) {
    try {
      const updateData: any = {
        title: data.title,
        waktu: data.waktu,
        deskripsi: data.deskripsi,
        kategori: data.kategori,
        type: data.type,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedSosialisasiPraturanUUD =
        await prisma.sosialisasiPraturanUUD.update({
          where: { id },
          data: updateData,
        });

      return updatedSosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteSosialisasiPraturanUUDById(id: number) {
    try {
      const deletedSosialisasiPraturanUUD =
        await prisma.sosialisasiPraturanUUD.delete({
          where: { id },
        });
      return deletedSosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createStatistikSosialisasiPraturanUUD(
    data: StatistikSosialisasiPraturanUUD
  ) {
    try {
      const statistikSosialisasiPraturanUUD =
        await prisma.statistikSosialisasiPraturanUUD.create({
          data: {
            kegiatanOrginsasi: data.kegiatanOrginsasi,
            pesertaTeredukasi: data.pesertaTeredukasi,
            institusiMitra: data.institusiMitra,
            totalSosialisasi: data.totalSosialisasi,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return statistikSosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllStatistikSosialisasiPraturanUUD() {
    try {
      const statistikSosialisasiPraturanUUD =
        await prisma.statistikSosialisasiPraturanUUD.findMany();
      return statistikSosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateStatistikSosialisasiPraturanUUDById(
    id: number,
    data: StatistikSosialisasiPraturanUUD
  ) {
    try {
      const updateData: any = {
        kegiatanOrginsasi: data.kegiatanOrginsasi,
        pesertaTeredukasi: data.pesertaTeredukasi,
        institusiMitra: data.institusiMitra,
        totalSosialisasi: data.totalSosialisasi,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikSosialisasiPraturanUUD =
        await prisma.statistikSosialisasiPraturanUUD.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikSosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteStatistikSosialisasiPraturanUUDById(id: number) {
    try {
      const deletedStatistikSosialisasiPraturanUUD =
        await prisma.statistikSosialisasiPraturanUUD.delete({
          where: { id },
        });
      return deletedStatistikSosialisasiPraturanUUD;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new SosialisasiPraturanUUDService();
