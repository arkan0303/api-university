import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { BadanEksikutifMahasiswa, Prisma } from "@prisma/client";

interface AlumniBerPrestasi {
  foto: Express.Multer.File;
  nama: string;
  nim: string;
  lulusan: string; //2023
  posisi: string;
  perusahaan: string;
  ipk: string;
  gaji: string;
  waktuTunggu: string;
  email: string;
  noTelp: string;
  linkedin: string;
  instagram: string;
  testimonial: string;
  perjalananKarir: Prisma.JsonValue[];
  keahlian: Prisma.JsonValue[];
  pencapaian: Prisma.JsonValue[];
  bidang: string; //korporat, pemerintahan, swasta
}

interface StatistikAlumniBerprestasi {
  totalAlumni: string;
  tingkatPenempatan: string;
  rataGajih: string;
  WaktuTunggu: string;
  slogan: string;
  deskripsi: string;
}
class AlumniBerprestasiService {
  async create(data: AlumniBerPrestasi) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const cewateAlumniBerprestasi = await prisma.alumniBerPrestasi.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return cewateAlumniBerprestasi;
    } catch (error) {
      console.error("Error in create:", error);
      return null;
    }
  }

  async getAll() {
    try {
      const getAllAlumniBerprestasi = await prisma.alumniBerPrestasi.findMany();
      return getAllAlumniBerprestasi;
    } catch (error) {
      console.error("Error in getAllAlumniBerprestasi:", error);
      return null;
    }
  }

  async update(id: number, data: AlumniBerPrestasi) {
    try {
      const updateData: any = {
        nama: data.nama,
        nim: data.nim,
        lulusan: data.lulusan,
        posisi: data.posisi,
        perusahaan: data.perusahaan,
        ipk: data.ipk,
        gaji: data.gaji,
        waktuTunggu: data.waktuTunggu,
        email: data.email,
        noTelp: data.noTelp,
        linkedin: data.linkedin,
        instagram: data.instagram,
        testimonial: data.testimonial,
        perjalananKarir: data.perjalananKarir,
        keahlian: data.keahlian,
        pencapaian: data.pencapaian,
        bidang: data.bidang,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updateAlumniBerprestasi = await prisma.alumniBerPrestasi.update({
        where: { id },
        data: updateData,
      });

      return updateAlumniBerprestasi;
    } catch (error) {
      console.error("Error in updateBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async delete(id: number) {
    try {
      const deleteAlumniBerprestasi = await prisma.alumniBerPrestasi.delete({
        where: {
          id,
        },
      });
      return deleteAlumniBerprestasi;
    } catch (error) {
      console.error("Error in deleteAlumniBerprestasi:", error);
      return null;
    }
  }

  async createStatistik(data: StatistikAlumniBerprestasi) {
    try {
      const createStatistikAlumniBerPrestasi =
        await prisma.statistikAlumniBerprestasi.create({
          data: {
            ...data,
          },
        });
      return createStatistikAlumniBerPrestasi;
    } catch (error) {
      console.error("Error in createStatistikAlumniBerprestasi:", error);
      return null;
    }
  }

  async getAllStatistik() {
    try {
      const getAllStatistikAlumniBerprestasi =
        await prisma.statistikAlumniBerprestasi.findMany();
      return getAllStatistikAlumniBerprestasi;
    } catch (error) {
      console.error("Error in getAllStatistikAlumniBerprestasi:", error);
      return null;
    }
  }

  async updateStatistik(id: number, data: StatistikAlumniBerprestasi) {
    try {
      const updateData: any = {
        totalAlumni: data.totalAlumni,
        tingkatPenempatan: data.tingkatPenempatan,
        rataGajih: data.rataGajih,
        WaktuTunggu: data.WaktuTunggu,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikAlumniBerprestasi =
        await prisma.statistikAlumniBerprestasi.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikAlumniBerprestasi;
    } catch (error) {
      console.error("Error in updateStatistikAlumniBerprestasi:", error);
      return null;
    }
  }

  async deleteStatistik(id: number) {
    try {
      const deleteStatistikAlumniBerprestasi =
        await prisma.statistikAlumniBerprestasi.delete({
          where: {
            id,
          },
        });
      return deleteStatistikAlumniBerprestasi;
    } catch (error) {
      console.error("Error in deleteStatistikAlumniBerprestasi:", error);
      return null;
    }
  }
}
export default new AlumniBerprestasiService();
