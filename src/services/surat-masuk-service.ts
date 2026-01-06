import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface ArsipSuratMasuk {
  title: string;
  deskripsi: string;
  pengirim: string;
  nomorSurat: string;
  tanggalDiterima: string;
  file: Express.Multer.File[];
  foto: Express.Multer.File;
  fileMetadata: any[];
  status: string;
  penerima: string;
}

interface StatistikArsipSuratMasuk {
  totalSurat: string;
  suratBaru: string;
  suratDalamProses: string;
  suratSelesai: string;
  slogan: string;
  deskripsi: string;
}

class SuratMasukService {
  async createArsipSuratMasuk(arsipSuratMasuk: ArsipSuratMasuk) {
    try {
      const fotoUrl = await uploadToCloudinary(arsipSuratMasuk.foto.buffer);

      let galeriData: Prisma.JsonArray = [];

      if (arsipSuratMasuk.file && arsipSuratMasuk.file.length > 0) {
        // Upload all files to Cloudinary
        const uploadedUrls = await Promise.all(
          arsipSuratMasuk.file.map((file) => uploadToCloudinary(file.buffer))
        );

        galeriData = uploadedUrls.map((url, index) => {
          const metadata = arsipSuratMasuk.fileMetadata?.[index];
          return {
            fileName: metadata?.fileName || `file-${index + 1}`,
            fileUrl: url,
            status_file: metadata?.status_file || "public",
          };
        }) as Prisma.JsonArray;
      }

      const arsipSuratMasukk = await prisma.arsipSuratMasuk.create({
        data: {
          title: arsipSuratMasuk.title,
          deskripsi: arsipSuratMasuk.deskripsi,
          pengirim: arsipSuratMasuk.pengirim,
          nomorSurat: arsipSuratMasuk.nomorSurat,
          tanggalDiterima: arsipSuratMasuk.tanggalDiterima,
          status: arsipSuratMasuk.status,
          penerima: arsipSuratMasuk.penerima,
          foto: fotoUrl,
          file: galeriData, // Now saves as JSON array of objects
        },
      });

      return arsipSuratMasukk;
    } catch (error) {
      console.error("Error in createArsipSuratMasuk:", error);
      throw error;
    }
  }

  async getAllArsipSuratMasuk() {
    try {
      const arsipSuratMasukk = await prisma.arsipSuratMasuk.findMany();
      return arsipSuratMasukk;
    } catch (error) {
      console.error("Error in getAllArsipSuratMasuk:", error);
      throw error;
    }
  }

  async updateArsipSuratMasuk(
    id: number,
    arsipSuratMasuk: ArsipSuratMasuk & {
      file?: Express.Multer.File[];
      foto?: Express.Multer.File;
    }
  ) {
    try {
      const updateData: any = {
        title: arsipSuratMasuk.title,
        deskripsi: arsipSuratMasuk.deskripsi,
        pengirim: arsipSuratMasuk.pengirim,
        nomorSurat: arsipSuratMasuk.nomorSurat,
        tanggalDiterima: arsipSuratMasuk.tanggalDiterima,
        file: arsipSuratMasuk.file,
        foto: arsipSuratMasuk.foto,
        status: arsipSuratMasuk.status,
        penerima: arsipSuratMasuk.penerima,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (arsipSuratMasuk.foto) {
        const fotoUrl = await uploadToCloudinary(arsipSuratMasuk.foto.buffer);
        updateData.foto = fotoUrl;
      }

      // Process gallery if exists
      let galeriData: Prisma.JsonArray = [];

      if (arsipSuratMasuk.file && arsipSuratMasuk.file.length > 0) {
        const uploadedUrls = await Promise.all(
          arsipSuratMasuk.file.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      updateData.file = galeriData;

      const updatedArsipSuratMasuk = await prisma.arsipSuratMasuk.update({
        where: { id },
        data: updateData,
      });
      return updatedArsipSuratMasuk;
    } catch (error) {
      console.error("Error in updateArsipSuratMasuk:", error);
      throw error;
    }
  }

  async deleteArsipSuratMasuk(id: number) {
    try {
      const deletedData = await prisma.arsipSuratMasuk.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createStatistikArsipSuratMasuk(
    statistikArsipSuratMasuk: StatistikArsipSuratMasuk
  ) {
    try {
      const statistikArsipSuratMasukk =
        await prisma.statistikArsipSuratMasuk.create({
          data: statistikArsipSuratMasuk,
        });
      return statistikArsipSuratMasukk;
    } catch (error) {
      console.error("Error in createStatistikArsipSuratMasuk:", error);
      throw error;
    }
  }

  async getAllStatistikArsipSuratMasuk() {
    try {
      const statistikArsipSuratMasuk =
        await prisma.statistikArsipSuratMasuk.findMany();
      return statistikArsipSuratMasuk;
    } catch (error) {
      console.error("Error in getAllStatistikArsipSuratMasuk:", error);
      throw error;
    }
  }

  async updateStatistikArsipSuratMasuk(
    id: number,
    statistikArsipSuratMasuk: StatistikArsipSuratMasuk
  ) {
    try {
      const updatedStatistikArsipSuratMasuk =
        await prisma.statistikArsipSuratMasuk.update({
          where: { id },
          data: statistikArsipSuratMasuk,
        });
      return updatedStatistikArsipSuratMasuk;
    } catch (error) {
      console.error("Error in updateStatistikArsipSuratMasuk:", error);
      throw error;
    }
  }

  async deleteStatistikArsipSuratMasuk(id: number) {
    try {
      const deletedData = await prisma.statistikArsipSuratMasuk.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }
}

export default new SuratMasukService();
