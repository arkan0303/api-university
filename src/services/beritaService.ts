import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface ICreateBerita {
  judul: string;
  konten: string;
  kategori?: string | null;
  penulis?: string | null;
  foto: Express.Multer.File;
  galeri?: Express.Multer.File[];
  aktif?: boolean;
  tanggalPublikasi?: Date | string | null;
}

class BeritaService {
  async createBerita(data: ICreateBerita) {
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

      // Handle date parsing if provided
      const tanggalPublikasi = data.tanggalPublikasi
        ? new Date(data.tanggalPublikasi)
        : null;

      // Create berita with the uploaded photo URLs
      const berita = await prisma.berita.create({
        data: {
          judul: data.judul,
          konten: data.konten,
          kategori: data.kategori,
          penulis: data.penulis,
          foto: fotoUrl,
          galeri: galeriData.length > 0 ? galeriData : Prisma.JsonNull,
          aktif: data.aktif !== undefined ? data.aktif : true,
          tanggalPublikasi: tanggalPublikasi,
        },
      });

      return berita;
    } catch (error) {
      console.error("Error in createBerita:", error);
      throw new Error("Failed to create berita");
    }
  }

  async getDataBerita() {
    try {
      const berita = await prisma.berita.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });
      return berita;
    } catch (error) {
      console.error("Error in getDataBerita:", error);
      throw new Error("Failed to get data berita");
    }
  }

  async updateBerita(
    id: number,
    data: ICreateBerita & { galeri?: Express.Multer.File[] }
  ) {
    try {
      const updateData: any = {
        judul: data.judul,
        konten: data.konten,
        kategori: data.kategori,
        penulis: data.penulis,
        foto: data.foto,
        galeri: data.galeri,
        aktif:
          data.aktif !== undefined
            ? typeof data.aktif === "string"
              ? data.aktif === "true"
              : data.aktif
            : false,
        tanggalPublikasi: data.tanggalPublikasi,
      };

      const tanggalPublikasi = data.tanggalPublikasi
        ? new Date(data.tanggalPublikasi)
        : null;

      updateData.tanggalPublikasi = tanggalPublikasi;

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

      const updatedBerita = await prisma.berita.update({
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

  async deleteBerita(id: number) {
    try {
      const deletedBerita = await prisma.berita.delete({
        where: { id },
      });
      return deletedBerita;
    } catch (error) {
      console.error("Error in deleteBerita:", error);
      throw new Error("Failed to delete berita");
    }
  }
}

export default new BeritaService();
