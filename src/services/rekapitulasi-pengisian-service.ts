import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface RekapitulasiPengisian {
  programNama: string;
  angkatan: string;
  totalMahasiswa: string;
  jumlahResponden: string;
  kategori: Prisma.JsonValue[];
  persentasi: string; //(otomatis: jumlah_responden / total_mahasiswa * 100)
}

interface RekapitulasiPerKategori {
  programNama: string;
  totalMahasiswa: string;
  jumlahResponden: string;
  persentasi: string; //(otomatis: jumlah_responden / total_mahasiswa * 100)
}

interface StatistikRekapitulasiPerKategori {
  totalResponden: string;
  tingkatPartisipasi: string;
  formulirLengkap: string;
  dalamProses: string;
  slogan: string;
  deskripsi: string;
}

class RekapitulasiPengisianService {
  async createRekapitulasiPengisian(data: RekapitulasiPengisian) {
    try {
      const result = await prisma.rekapitulasiPengisian.create({
        data: {
          programNama: data.programNama,
          angkatan: data.angkatan,
          totalMahasiswa: data.totalMahasiswa,
          jumlahResponden: data.jumlahResponden,
          kategori: data.kategori,
          persentasi: data.persentasi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createRekapitulasiPengisian:", error);
      throw error;
    }
  }

  async getAllRekapitulasiPengisian() {
    try {
      const rekapitulasiPengisian =
        await prisma.rekapitulasiPengisian.findMany();
      return rekapitulasiPengisian;
    } catch (error) {
      console.error("Error in getAllRekapitulasiPengisian:", error);
      throw error;
    }
  }

  async updateRekapitulasiPengisian(id: number, data: RekapitulasiPengisian) {
    try {
      const updatedData = await prisma.rekapitulasiPengisian.update({
        where: { id },
        data: data,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateRekapitulasiPengisian:", error);
      throw error;
    }
  }

  async deleteRekapitulasiPengisian(id: number) {
    try {
      const deletedData = await prisma.rekapitulasiPengisian.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createRekapitulasiPerKategori(data: RekapitulasiPerKategori) {
    try {
      const result = await prisma.rekapitulasiPerKategori.create({
        data: {
          programNama: data.programNama,
          totalMahasiswa: data.totalMahasiswa,
          jumlahResponden: data.jumlahResponden,
          persentasi: data.persentasi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createRekapitulasiPerKategori:", error);
      throw error;
    }
  }

  async getAllRekapitulasiPerKategori() {
    try {
      const rekapitulasiPerKategori =
        await prisma.rekapitulasiPerKategori.findMany();
      return rekapitulasiPerKategori;
    } catch (error) {
      console.error("Error in getAllRekapitulasiPerKategori:", error);
      throw error;
    }
  }

  async updateRekapitulasiPerKategori(
    id: number,
    data: RekapitulasiPerKategori
  ) {
    try {
      const updatedData = await prisma.rekapitulasiPerKategori.update({
        where: { id },
        data: data,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateRekapitulasiPerKategori:", error);
      throw error;
    }
  }

  async deleteRekapitulasiPerKategori(id: number) {
    try {
      const deletedData = await prisma.rekapitulasiPerKategori.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createStatistikRekapitulasiPerKategori(
    data: StatistikRekapitulasiPerKategori
  ) {
    try {
      const result = await prisma.statistikRekapitulasiPerKategori.create({
        data: {
          totalResponden: data.totalResponden,
          tingkatPartisipasi: data.tingkatPartisipasi,
          formulirLengkap: data.formulirLengkap,
          dalamProses: data.dalamProses,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createStatistikRekapitulasiPerKategori:", error);
      throw error;
    }
  }

  async getAllStatistikRekapitulasiPerKategori() {
    try {
      const statistikRekapitulasiPerKategori =
        await prisma.statistikRekapitulasiPerKategori.findMany();
      return statistikRekapitulasiPerKategori;
    } catch (error) {
      console.error("Error in getAllStatistikRekapitulasiPerKategori:", error);
      throw error;
    }
  }

  async updateStatistikRekapitulasiPerKategori(
    id: number,
    data: StatistikRekapitulasiPerKategori
  ) {
    try {
      const updatedData = await prisma.statistikRekapitulasiPerKategori.update({
        where: { id },
        data: data,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateStatistikRekapitulasiPerKategori:", error);
      throw error;
    }
  }

  async deleteStatistikRekapitulasiPerKategori(id: number) {
    try {
      const deletedData = await prisma.statistikRekapitulasiPerKategori.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }
}

export default new RekapitulasiPengisianService();
