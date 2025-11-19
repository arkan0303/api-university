import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface DataSeminarMahasiswa {
  foto: Express.Multer.File;
  title: string;
  terkait: string; // hukun perdata , hukum pidana
  deskripsiSeminar: string;
  tujuanPembelajaran: Prisma.JsonValue[];
  materiDibahas: Prisma.JsonValue[];
  hasilDIharapkan: Prisma.JsonValue[];
  tanggalSeminar: string;
  waktuSeminar: string; //09:00 - 12:00 WIB
  lokasi: string;
  peserta: string; //150
  namaNarasumber: string;
  tentangNarasumber: string;
  emailNarasumber: string;
  noTelpNarasumber: string;
}

interface StatistikDataSeminarMahasiswa {
  totalSeminar: string;
  totalPeserta: string;
  totalNarasumber: string;
  tingkatKepuasan: string;
  slogan: string;
  deskripsi: string;
}

class DataSeminarMahasiswaService {
  async createDataSeminarMahasiswa(data: DataSeminarMahasiswa) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const create = await prisma.dataSeminarMahasiswa.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return create;
    } catch (error) {
      console.error("Error in createDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async getAllDataSeminarMahasiswa() {
    try {
      const getAllDataSeminarMahasiswa =
        await prisma.dataSeminarMahasiswa.findMany();
      return getAllDataSeminarMahasiswa;
    } catch (error) {
      console.error("Error in getAllDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async updateDataSeminarMahasiswa(id: number, data: DataSeminarMahasiswa) {
    try {
      const updateData: any = {
        title: data.title,
        terkait: data.terkait,
        deskripsiSeminar: data.deskripsiSeminar,
        tujuanPembelajaran: data.tujuanPembelajaran,
        materiDibahas: data.materiDibahas,
        hasilDIharapkan: data.hasilDIharapkan,
        tanggalSeminar: data.tanggalSeminar,
        waktuSeminar: data.waktuSeminar,
        lokasi: data.lokasi,
        peserta: data.peserta,
        namaNarasumber: data.namaNarasumber,
        tentangNarasumber: data.tentangNarasumber,
        emailNarasumber: data.emailNarasumber,
        noTelpNarasumber: data.noTelpNarasumber,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedDataSeminarMahasiswa =
        await prisma.dataSeminarMahasiswa.update({
          where: { id },
          data: updateData,
        });

      return updatedDataSeminarMahasiswa;
    } catch (error) {
      console.error("Error in updateDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async deleteDataSeminarMahasiswa(id: number) {
    try {
      const deleteDataSeminarMahasiswa =
        await prisma.dataSeminarMahasiswa.delete({
          where: {
            id,
          },
        });
      return deleteDataSeminarMahasiswa;
    } catch (error) {
      console.error("Error in deleteDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async createStatistikDataSeminarMahasiswa(
    data: StatistikDataSeminarMahasiswa
  ) {
    try {
      const create = await prisma.statistikDataSeminarMahasiswa.create({
        data: {
          ...data,
        },
      });
      return create;
    } catch (error) {
      console.error("Error in createStatistikDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async getAllStatistikDataSeminarMahasiswa() {
    try {
      const getAllStatistikDataSeminarMahasiswa =
        await prisma.statistikDataSeminarMahasiswa.findMany();
      return getAllStatistikDataSeminarMahasiswa;
    } catch (error) {
      console.error("Error in getAllStatistikDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async updateStatistikDataSeminarMahasiswa(
    id: number,
    data: StatistikDataSeminarMahasiswa
  ) {
    try {
      const updateData: any = {
        totalSeminar: data.totalSeminar,
        totalPeserta: data.totalPeserta,
        totalNarasumber: data.totalNarasumber,
        tingkatKepuasan: data.tingkatKepuasan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikDataSeminarMahasiswa =
        await prisma.statistikDataSeminarMahasiswa.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikDataSeminarMahasiswa;
    } catch (error) {
      console.error("Error in updateStatistikDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async deleteStatistikDataSeminarMahasiswa(id: number) {
    try {
      const deleteStatistikDataSeminarMahasiswa =
        await prisma.statistikDataSeminarMahasiswa.delete({
          where: {
            id,
          },
        });
      return deleteStatistikDataSeminarMahasiswa;
    } catch (error) {
      console.error("Error in deleteStatistikDataSeminarMahasiswa:", error);
      throw error;
    }
  }
}

export default new DataSeminarMahasiswaService();
