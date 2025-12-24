import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface ArsipSuratKeluar {
  title: string;
  deskripsi: string;
  pengirim: string;
  nomorSurat: string;
  tanggalKirim: string;
  file: Express.Multer.File[];
  foto: Express.Multer.File;
  status: string;
  penerima: string;
  note: string;
}

interface StatistikArsipSuratKeluar {
  totalSurat: string;
  terkirim: string;
  suratDalamProses: string;
  draf: string;
  slogan: string;
  deskripsi: string;
}

class SuratKeluarService {
  async createArsipSuratKeluar(arsipSuratKeluar: ArsipSuratKeluar) {
    try {
      const fotoUrl = await uploadToCloudinary(arsipSuratKeluar.foto.buffer);

      // Process gallery if exists
      let galeriData: Prisma.JsonArray = [];

      if (arsipSuratKeluar.file && arsipSuratKeluar.file.length > 0) {
        const uploadedUrls = await Promise.all(
          arsipSuratKeluar.file.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      const arsipSuratKeluark = await prisma.arsipSuratKeluar.create({
        data: {
          ...arsipSuratKeluar,
          foto: fotoUrl,
          file: galeriData,
        },
      });
      return arsipSuratKeluark;
    } catch (error) {
      console.error("Error in createArsipSuratKeluar:", error);
      throw error;
    }
  }

  async getAllArsipSuratKeluar() {
    try {
      const arsipSuratKeluark = await prisma.arsipSuratKeluar.findMany();
      return arsipSuratKeluark;
    } catch (error) {
      console.error("Error in getAllArsipSuratKeluar:", error);
      throw error;
    }
  }

  async updateArsipSuratKeluar(
    id: number,
    arsipSuratKeluar: ArsipSuratKeluar & {
      file?: Express.Multer.File[];
      foto?: Express.Multer.File;
    }
  ) {
    try {
      const existingData = await prisma.arsipSuratKeluar.findUnique({
        where: { id },
      });
      if (!existingData) {
        throw new Error("Data surat keluar tidak ditemukan");
      }

      const updateData: any = {
        title: arsipSuratKeluar.title,
        deskripsi: arsipSuratKeluar.deskripsi,
        pengirim: arsipSuratKeluar.pengirim,
        nomorSurat: arsipSuratKeluar.nomorSurat,
        tanggalKirim: arsipSuratKeluar.tanggalKirim,
        file: arsipSuratKeluar.file,
        foto: arsipSuratKeluar.foto,
        status: arsipSuratKeluar.status,
        penerima: arsipSuratKeluar.penerima,
        note: arsipSuratKeluar.note,
      };

      // Only update photo if a new one is uploaded
      if (arsipSuratKeluar.foto) {
        const fotoUrl = await uploadToCloudinary(arsipSuratKeluar.foto.buffer);
        updateData.foto = fotoUrl;
      }
      // Process gallery if new files are uploaded
      if (arsipSuratKeluar.file && arsipSuratKeluar.file.length > 0) {
        const uploadedUrls = await Promise.all(
          arsipSuratKeluar.file.map((file) => uploadToCloudinary(file.buffer))
        );
        // If there are existing files, combine them with the new ones
        const existingFiles = existingData.file
          ? (existingData.file as string[])
          : [];
        updateData.file = [...existingFiles, ...uploadedUrls];
      }

      const updatedArsipSuratKeluar = await prisma.arsipSuratKeluar.update({
        where: { id },
        data: updateData,
      });
      return updatedArsipSuratKeluar;
    } catch (error) {
      console.error("Error in updateArsipSuratKeluar:", error);
      throw error;
    }
  }

  async deleteArsipSuratKeluar(id: number) {
    try {
      const deletedData = await prisma.arsipSuratKeluar.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createStatistikArsipSuratKeluar(
    statistikArsipSuratKeluar: StatistikArsipSuratKeluar
  ) {
    try {
      const statistikArsipSuratKeluark =
        await prisma.statistikArsipSuratKeluar.create({
          data: statistikArsipSuratKeluar,
        });
      return statistikArsipSuratKeluark;
    } catch (error) {
      console.error("Error in createStatistikArsipSuratKeluar:", error);
      throw error;
    }
  }

  async getAllStatistikArsipSuratKeluar() {
    try {
      const statistikArsipSuratKeluar =
        await prisma.statistikArsipSuratKeluar.findMany();
      return statistikArsipSuratKeluar;
    } catch (error) {
      console.error("Error in getAllStatistikArsipSuratKeluar:", error);
      throw error;
    }
  }

  async updateStatistikArsipSuratKeluar(
    id: number,
    statistikArsipSuratKeluar: StatistikArsipSuratKeluar
  ) {
    try {
      const updatedStatistikArsipSuratKeluar =
        await prisma.statistikArsipSuratKeluar.update({
          where: { id },
          data: statistikArsipSuratKeluar,
        });
      return updatedStatistikArsipSuratKeluar;
    } catch (error) {
      console.error("Error in updateStatistikArsipSuratKeluar:", error);
      throw error;
    }
  }

  async deleteStatistikArsipSuratKeluar(id: number) {
    try {
      const deletedData = await prisma.statistikArsipSuratKeluar.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }
}

export default new SuratKeluarService();
