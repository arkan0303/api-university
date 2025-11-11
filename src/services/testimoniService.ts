import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface ICreateTestimoni {
  judul: string;
  nama: string;
  jabatan: string;
  foto: Express.Multer.File;
  galeri?: Express.Multer.File[];
  konten: string;
  kategori?: string | null;
  note?: string | null;
  tanggalPublikasi?: string | null;
  aktif?: boolean;
}

class TestimoniService {
  async createTestimoni(data: ICreateTestimoni) {
    try {
      // Upload main photo
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);

      // Process gallery if exists
      let galeriData: Prisma.JsonArray = [];

      if (data.galeri && data.galeri.length > 0) {
        const uploadedUrls = await Promise.all(
          data.galeri.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      // Use the date string as is (matching the database schema)
      const tanggalPublikasi = data.tanggalPublikasi || null;

      // Create testimoni with the uploaded photo URLs
      const testimoni = await prisma.testimoni.create({
        data: {
          judul: data.judul,
          nama: data.nama,
          jabatan: data.jabatan,
          foto: fotoUrl,
          galeri: galeriData.length > 0 ? galeriData : Prisma.JsonNull,
          konten: data.konten,
          kategori: data.kategori,
          note: data.note,
          tanggalPublikasi: tanggalPublikasi,
          aktif: data.aktif !== undefined ? data.aktif : true,
        },
      });

      return testimoni;
    } catch (error) {
      console.error("Error in createTestimoni:", error);
      throw new Error("Failed to create testimoni");
    }
  }

  async getAllTestimoni() {
    try {
      const testimoni = await prisma.testimoni.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return testimoni;
    } catch (error) {
      console.error("Error in getAllTestimoni:", error);
      throw new Error("Failed to get testimoni");
    }
  }
}

export default new TestimoniService();
