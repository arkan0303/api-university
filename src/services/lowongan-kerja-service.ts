import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface LowonganKerja {
  foto: Express.Multer.File;
  title: string; //Legal Officer
  perusahaan: string;
  lokasi: string;
  tipePekerjaan: string; // Full Time, Part Time
  gaji: string;
  pengalaman: string;
  pendidikan: string;
  batasLama: string;
  tentangPerusahaan: string;
  deskripsi: string;
  tanggungJawab: Prisma.JsonValue[];
  persyaratan: Prisma.JsonValue[];
  keahlian: Prisma.JsonValue[];
  benefit: Prisma.JsonValue[];
  email: string;
  link: string;
}

interface StatistikLowonganKerja {
  lowonganAktif: string;
  partner: string;
  tingkatPenempatan: string;
  gajihRata: string;
  slogan: string;
  deskripsi: string;
}

class LowonganKerjaService {
  async createLowonganKerja(lowonganKerja: LowonganKerja) {
    try {
      const fotoUrl = await uploadToCloudinary(lowonganKerja.foto.buffer);
      const lowonganKerjaCreated = await prisma.lowonganKerja.create({
        data: {
          ...lowonganKerja,
          foto: fotoUrl,
        },
      });
      return lowonganKerjaCreated;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllLowonganKerja() {
    try {
      const lowonganKerjaaa = await prisma.lowonganKerja.findMany();
      return lowonganKerjaaa;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateLowonganKerja(id: number, lowonganKerja: LowonganKerja) {
    try {
      const updateData: any = {
        title: lowonganKerja.title,
        perusahaan: lowonganKerja.perusahaan,
        lokasi: lowonganKerja.lokasi,
        tipePekerjaan: lowonganKerja.tipePekerjaan,
        gaji: lowonganKerja.gaji,
        pengalaman: lowonganKerja.pengalaman,
        pendidikan: lowonganKerja.pendidikan,
        batasLama: lowonganKerja.batasLama,
        tentangPerusahaan: lowonganKerja.tentangPerusahaan,
        deskripsi: lowonganKerja.deskripsi,
        tanggungJawab: lowonganKerja.tanggungJawab,
        persyaratan: lowonganKerja.persyaratan,
        keahlian: lowonganKerja.keahlian,
        benefit: lowonganKerja.benefit,
        email: lowonganKerja.email,
        link: lowonganKerja.link,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (lowonganKerja.foto) {
        const uploadImage = await uploadToCloudinary(lowonganKerja.foto.buffer);
        updateData.foto = uploadImage;
      }

      const updatedLowonganKerja = await prisma.lowonganKerja.update({
        where: { id },
        data: updateData,
      });

      return updatedLowonganKerja;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteLowonganKerja(id: number) {
    try {
      const deletedLowonganKerja = await prisma.lowonganKerja.delete({
        where: { id },
      });
      return deletedLowonganKerja;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createStatistikLowonganKerja(
    statistikLowonganKerja: StatistikLowonganKerja
  ) {
    try {
      const statistikLowonganKerjaCreated =
        await prisma.statistikLowonganKerja.create({
          data: statistikLowonganKerja,
        });
      return statistikLowonganKerjaCreated;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllStatistikLowonganKerja() {
    try {
      const statistikLowonganKerja =
        await prisma.statistikLowonganKerja.findMany();
      return statistikLowonganKerja;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateStatistikLowonganKerja(
    id: number,
    statistikLowonganKerja: StatistikLowonganKerja
  ) {
    try {
      const updateData: any = {
        lowonganAktif: statistikLowonganKerja.lowonganAktif,
        partner: statistikLowonganKerja.partner,
        tingkatPenempatan: statistikLowonganKerja.tingkatPenempatan,
        gajihRata: statistikLowonganKerja.gajihRata,
        slogan: statistikLowonganKerja.slogan,
        deskripsi: statistikLowonganKerja.deskripsi,
      };

      const updatedStatistikLowonganKerja =
        await prisma.statistikLowonganKerja.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikLowonganKerja;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteStatistikLowonganKerja(id: number) {
    try {
      const deletedStatistikLowonganKerja =
        await prisma.statistikLowonganKerja.delete({
          where: { id },
        });
      return deletedStatistikLowonganKerja;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new LowonganKerjaService();
