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
  async deleteTestimoni(id: number) {
    try {
      const deletedTestimoni = await prisma.testimoni.delete({
        where: { id },
      });
      return deletedTestimoni;
    } catch (error) {
      console.error("Error in deleteTestimoni:", error);
      throw new Error("Failed to delete testimoni");
    }
  }
  async update(
    id: number,
    data: ICreateTestimoni & { galeri?: Express.Multer.File[] }
  ) {
    try {
      const updateData: any = {
        judul: data.judul,
        nama: data.nama,
        jabatan: data.jabatan,
        foto: data.foto,
        galeri: data.galeri,
        konten: data.konten,
        kategori: data.kategori,
        note: data.note,
        aktif:
          data.aktif !== undefined
            ? typeof data.aktif === "string"
              ? data.aktif === "true"
              : data.aktif
            : false,
        tanggalPublikasi: data.tanggalPublikasi
          ? new Date(data.tanggalPublikasi).toISOString().split("T")[0] // YYYY-MM-DD
          : null,
      };

      // const tanggalPublikasi = data.tanggalPublikasi
      //   ? new Date(data.tanggalPublikasi)
      //   : null;

      // updateData.tanggalPublikasi = tanggalPublikasi;

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }
      // Hanya upload galeri baru jika ada file yang diunggah
      if (data.galeri && data.galeri.length > 0) {
        const uploadedUrls = await Promise.all(
          data.galeri.map((file) => uploadToCloudinary(file.buffer))
        );
        updateData.galeri = uploadedUrls as Prisma.JsonArray;
      }

      const updatedBerita = await prisma.testimoni.update({
        where: { id },
        data: updateData,
      });
      console.log("Updated Berita Data :", updatedBerita);

      return updatedBerita;
    } catch (error) {
      console.error("Error in updateBerita:", error);
      throw new Error("Failed to update berita");
    }
  }
}

export default new TestimoniService();
