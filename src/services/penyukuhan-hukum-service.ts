import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";

interface PenyuluhanHukum {
  foto: Express.Multer.File;
  title: string;
  waktu: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  type: string;
}

interface StatistikPenyuluhanHukum {
  kegiatanPenyuluhan: string;
  pesertaTeredukasi: string;
  institusiMitra: string;
  totalPenyuluhan: string;
  slogan: string;
  deskripsi: string;
}

class PenyukuhanHukumService {
  async createPenyukuhanHukum(data: PenyuluhanHukum) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const penyukuhanHukum = await prisma.penyuluhanHukum.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          waktu: data.waktu,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          type: data.type,
        },
      });
      return penyukuhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllPenyukuhanHukum() {
    try {
      const penyukuhanHukum = await prisma.penyuluhanHukum.findMany();
      return penyukuhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updatePenyukuhanHukumById(id: number, data: PenyuluhanHukum) {
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

      const updatedPenyukuhanHukum = await prisma.penyuluhanHukum.update({
        where: { id },
        data: updateData,
      });

      return updatedPenyukuhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deletePenyukuhanHukumById(id: number) {
    try {
      const deletedPenyukuhanHukum = await prisma.penyuluhanHukum.delete({
        where: { id },
      });
      return deletedPenyukuhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createStatistikPenyuluhanHukum(data: StatistikPenyuluhanHukum) {
    try {
      const statistikPenyuluhanHukum =
        await prisma.statistikPenyuluhanHukum.create({
          data: {
            kegiatanPenyuluhan: data.kegiatanPenyuluhan,
            pesertaTeredukasi: data.pesertaTeredukasi,
            institusiMitra: data.institusiMitra,
            totalPenyuluhan: data.totalPenyuluhan,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return statistikPenyuluhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllStatistikPenyuluhanHukum() {
    try {
      const statistikPenyuluhanHukum =
        await prisma.statistikPenyuluhanHukum.findMany();
      return statistikPenyuluhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateStatistikPenyuluhanHukumById(
    id: number,
    data: StatistikPenyuluhanHukum
  ) {
    try {
      const updateData: any = {
        kegiatanPenyuluhan: data.kegiatanPenyuluhan,
        pesertaTeredukasi: data.pesertaTeredukasi,
        institusiMitra: data.institusiMitra,
        totalPenyuluhan: data.totalPenyuluhan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikPenyuluhanHukum =
        await prisma.statistikPenyuluhanHukum.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikPenyuluhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteStatistikPenyuluhanHukumById(id: number) {
    try {
      const deletedStatistikPenyuluhanHukum =
        await prisma.statistikPenyuluhanHukum.delete({
          where: { id },
        });
      return deletedStatistikPenyuluhanHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new PenyukuhanHukumService();
