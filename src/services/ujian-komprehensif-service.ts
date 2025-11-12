import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";

interface UjianKomprehensif {
  title: string;
  kategori: Prisma.JsonValue[];
  foto: Express.Multer.File;
  type: string; // "persyaratan", "prosedur" atau "Ruang Lingkup Materi"
  waktu: string; // 2 Bulan Sebelum Ujian
  deskripsi: string;
}

interface StatistikUjianKomprehensif {
  perTahun: string;
  tingkatKelulusan: string;
  penguji: string;
  menitUjian: string;
  slogan: string;
  deskripsi: string;
}
class UjianKomprehensifService {
  async createUjianKomprehensif(data: UjianKomprehensif) {
    let fotoUrl;
    if (data.foto) {
      fotoUrl = await uploadToCloudinary(data.foto.buffer);
    }

    return prisma.ujianKomprehensif.create({
      data: {
        ...data,
        foto: fotoUrl || null,
      },
    });
  }

  async getAllUjianKomprehensif() {
    return prisma.ujianKomprehensif.findMany();
  }

  async updateUjianKomprehensif(id: number, data: UjianKomprehensif) {
    try {
      const updateData: any = {
        title: data.title,
        kategori: data.kategori,
        foto: data.foto,
        type: data.type,
        waktu: data.waktu,
        deskripsi: data.deskripsi,
      };
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }
      const updatedUjianKomprehensif = await prisma.ujianKomprehensif.update({
        where: { id },
        data: updateData,
      });
      return updatedUjianKomprehensif;
    } catch (error) {
      console.error("Error in updateUjianKomprehensif:", error);
      throw error;
    }
  }

  async deleteUjianKomprehensif(id: number) {
    try {
      const deletedUjianKomprehensif = await prisma.ujianKomprehensif.delete({
        where: { id },
      });
      return deletedUjianKomprehensif;
    } catch (error) {
      console.error("Error in deleteUjianKomprehensif:", error);
      throw error;
    }
  }

  async createStatistikUjianKomprehensif(data: StatistikUjianKomprehensif) {
    return prisma.statistikUjianKomprehensif.create({
      data,
    });
  }

  async getAllStatistikUjianKomprehensif() {
    return prisma.statistikUjianKomprehensif.findMany();
  }

  async updateStatistikUjianKomprehensif(
    id: number,
    data: StatistikUjianKomprehensif
  ) {
    try {
      const updatedStatistikUjianKomprehensif =
        await prisma.statistikUjianKomprehensif.update({
          where: { id },
          data,
        });
      return updatedStatistikUjianKomprehensif;
    } catch (error) {
      console.error("Error in updateStatistikUjianKomprehensif:", error);
      throw error;
    }
  }

  async deleteStatistikUjianKomprehensif(id: number) {
    try {
      const deletedStatistikUjianKomprehensif =
        await prisma.statistikUjianKomprehensif.delete({
          where: { id },
        });
      return deletedStatistikUjianKomprehensif;
    } catch (error) {
      console.error("Error in deleteStatistikUjianKomprehensif:", error);
      throw error;
    }
  }
}

export default new UjianKomprehensifService();
