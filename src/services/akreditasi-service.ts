import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface ICreateAkreditasi {
  type: string;
  title: string;
  document?: Express.Multer.File[];
  documentNames?: string[];
  existingDocuments?: Array<{ name: string; url: string }>; // Tambahkan ini
}

class AkreditasiService {
  async createAkreditasi(data: ICreateAkreditasi) {
    try {
      let documentData: Prisma.JsonArray = [];

      // Process gallery if exists
      if (data.document && data.document.length > 0) {
        const uploadedUrls = await Promise.all(
          data.document.map((file) => uploadToCloudinary(file.buffer)),
        );

        // Gabungkan nama file dengan URL
        documentData = uploadedUrls.map((url, index) => ({
          name:
            data.documentNames?.[index] || data.document![index].originalname, // Gunakan nama dari frontend atau fallback ke original filename
          url: url,
        })) as Prisma.JsonArray;
      }
      // Create akreditasi with the uploaded photo URLs
      const akreditasi = await prisma.akreditasi.create({
        data: {
          type: data.type,
          title: data.title,
          document: documentData.length > 0 ? documentData : Prisma.JsonNull,
        },
      });
      return akreditasi;
    } catch (error) {
      console.error("Error in createAkreditasi:", error);
      throw new Error("Failed to create akreditasi");
    }
  }

  async getAllAkreditasi() {
    try {
      const akreditasi = await prisma.akreditasi.findMany();
      return akreditasi;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateAkreditasi(
    id: number,
    data: ICreateAkreditasi & {
      document?: Express.Multer.File[];
      existingDocuments?: Array<{ name: string; url: string }>;
    },
  ) {
    try {
      const updateData: any = {
        title: data.title,
        type: data.type,
      };

      // ===============================
      // DOCUMENT → GUNAKAN existingDocuments dari frontend
      // ===============================

      // Ambil dokumen lama yang sudah diedit dari frontend
      let finalDocuments = data.existingDocuments || [];

      // Jika ada dokumen baru yang diupload
      if (data.document && data.document.length > 0) {
        // Upload dokumen baru
        const uploadedUrls = await Promise.all(
          data.document.map((file) => uploadToCloudinary(file.buffer)),
        );

        // Gabungkan URL dengan nama
        const documentBaru = uploadedUrls.map((url, index) => ({
          name:
            data.documentNames?.[index] || data.document![index].originalname,
          url: url,
        }));

        // Gabungkan dokumen lama (yang sudah diedit) + dokumen baru
        finalDocuments = [...finalDocuments, ...documentBaru];
      }

      updateData.document =
        finalDocuments.length > 0 ? finalDocuments : Prisma.JsonNull;

      const updatedAkreditasi = await prisma.akreditasi.update({
        where: { id },
        data: updateData,
      });

      return updatedAkreditasi;
    } catch (error) {
      console.error("Error in updateAkreditasi:", error);
      throw new Error("Failed to update akreditasi");
    }
  }
  async deleteAkreditasi(id: number) {
    try {
      const deletedAkreditasi = await prisma.akreditasi.delete({
        where: { id },
      });
      return deletedAkreditasi;
    } catch (error) {
      console.error("Error in deleteAkreditasi:", error);
      throw new Error("Failed to delete akreditasi");
    }
  }
}

export default new AkreditasiService();
