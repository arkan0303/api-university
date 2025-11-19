import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface BeasiswaIndonesia {
  foto: Express.Multer.File;
  title: string;
  oleh: Prisma.JsonValue[]; //Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi
  nominal: string;
  waktu: string; // 4 tahun
  sebanyak: string; // 100
  tentang: string;
  persyaratan: Prisma.JsonValue[];
  manfaat: Prisma.JsonValue[];
  batasWaktu: string; // 30 Juni 2025
  email: string;
  noTelp: string;
}

interface StatistikBeasiswaIndonesia {
  totalPenerima: string; // Total penerima beasiswa (misal: 1200 orang sejak 2020)
  durasiBeasiswa: string; // Durasi program beasiswa secara ringkas (misal: "4 tahun" atau "2 semester")
  tingkatKompetitif: string; // Tingkat kesulitan beasiswa (misal: "Sangat Kompetitif", "Mudah Diakses")
  pendaftarTahunan: string; // Jumlah rata-rata pendaftar setiap tahun (misal: 5000 pendaftar)
  slogan: string;
  deskripsi: string;
}

class BeasiswaIndonesiaService {
  async createBeasiswaIndonesia(data: BeasiswaIndonesia) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const beasiswaIndonesia = await prisma.beasiswaIndonesia.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          oleh: data.oleh,
          nominal: data.nominal,
          waktu: data.waktu,
          sebanyak: data.sebanyak,
          tentang: data.tentang,
          persyaratan: data.persyaratan,
          manfaat: data.manfaat,
          batasWaktu: data.batasWaktu,
          email: data.email,
          noTelp: data.noTelp,
        },
      });
      return beasiswaIndonesia;
    } catch (error) {
      console.error("Error in createBeasiswaIndonesia:", error);
      return null;
    }
  }

  async getAllBeasiswaIndonesia() {
    const beasiswaIndonesia = await prisma.beasiswaIndonesia.findMany();
    return beasiswaIndonesia;
  }

  async updateBeasiswaIndonesia(id: number, data: BeasiswaIndonesia) {
    try {
      const updateData: any = {
        title: data.title,
        oleh: data.oleh,
        nominal: data.nominal,
        waktu: data.waktu,
        sebanyak: data.sebanyak,
        tentang: data.tentang,
        persyaratan: data.persyaratan,
        manfaat: data.manfaat,
        batasWaktu: data.batasWaktu,
        email: data.email,
        noTelp: data.noTelp,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedBeasiswaIndonesia = await prisma.beasiswaIndonesia.update({
        where: { id },
        data: updateData,
      });

      return updatedBeasiswaIndonesia;
    } catch (error) {
      console.error("Error in updateBeasiswaIndonesia:", error);
      return null;
    }
  }

  async deleteBeasiswaIndonesia(id: number) {
    try {
      const beasiswaIndonesia = await prisma.beasiswaIndonesia.delete({
        where: {
          id: id,
        },
      });
      return beasiswaIndonesia;
    } catch (error) {
      console.error("Error in deleteBeasiswaIndonesia:", error);
      return null;
    }
  }

  async createStatistikBeasiswaIndonesia(data: StatistikBeasiswaIndonesia) {
    try {
      const statistikBeasiswaIndonesia =
        await prisma.statistikBeasiswaIndonesia.create({
          data: {
            totalPenerima: data.totalPenerima,
            durasiBeasiswa: data.durasiBeasiswa,
            tingkatKompetitif: data.tingkatKompetitif,
            pendaftarTahunan: data.pendaftarTahunan,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return statistikBeasiswaIndonesia;
    } catch (error) {
      console.error("Error in createStatistikBeasiswaIndonesia:", error);
      return null;
    }
  }

  async getAllStatistikBeasiswaIndonesia() {
    const statistikBeasiswaIndonesia =
      await prisma.statistikBeasiswaIndonesia.findMany();
    return statistikBeasiswaIndonesia;
  }

  async updateStatistikBeasiswaIndonesia(
    id: number,
    data: StatistikBeasiswaIndonesia
  ) {
    try {
      const updateData: any = {
        totalPenerima: data.totalPenerima,
        durasiBeasiswa: data.durasiBeasiswa,
        tingkatKompetitif: data.tingkatKompetitif,
        pendaftarTahunan: data.pendaftarTahunan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikBeasiswaIndonesia =
        await prisma.statistikBeasiswaIndonesia.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikBeasiswaIndonesia;
    } catch (error) {
      console.error("Error in updateStatistikBeasiswaIndonesia:", error);
      return null;
    }
  }

  async deleteStatistikBeasiswaIndonesia(id: number) {
    try {
      const statistikBeasiswaIndonesia =
        await prisma.statistikBeasiswaIndonesia.delete({
          where: {
            id: id,
          },
        });
      return statistikBeasiswaIndonesia;
    } catch (error) {
      console.error("Error in deleteStatistikBeasiswaIndonesia:", error);
      return null;
    }
  }
}

export default new BeasiswaIndonesiaService();
