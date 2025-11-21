import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";

interface DataMahasiswaBerwirausaha {
  foto: Express.Multer.File;
  title: string;
  namaMahasiswa: string;
  nimMahasiswa: string;
  tentangBisnis: string;
  produkLayanan: Prisma.JsonValue[];
  pencapaian: Prisma.JsonValue[];
  tantangan: string;
  rencanaMasaDeoan: string;
  kategori: string;
  tahunBerdiri: string;
  jumlahKaryawan: string;
  pendapatan: string;
  lokasi: string;
  noTelp: string;
  email: string;
  lokasiMahasiswa: string;
}

interface StatistikDataMahasiswaBerwirausaha {
  totalMahasiswaBerwirausaha: string;
  lapanganKerja: string;
  tingkatKeberhasilan: string;
  bisnisAktif: string;
  slogan: string;
  deskripsi: string;
}

class DataMahasiswaBerwirausahaService {
  async createDataMahasiswaBerwirausaha(data: DataMahasiswaBerwirausaha) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const create = await prisma.dataMahasiswaBerwirausaha.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return create;
    } catch (error) {
      console.error("Error in createDataMahasiswaBerwirausaha:", error);
      throw error;
    }
  }

  async getAllDataMahasiswaBerwirausaha() {
    try {
      const getAllDataMahasiswaBerwirausaha =
        await prisma.dataMahasiswaBerwirausaha.findMany();
      return getAllDataMahasiswaBerwirausaha;
    } catch (error) {
      console.error("Error in getAllDataMahasiswaBerwirausaha:", error);
      throw error;
    }
  }

  async updateDataMahasiswaBerwirausaha(
    id: number,
    data: DataMahasiswaBerwirausaha
  ) {
    try {
      const updateData: any = {
        title: data.title,
        namaMahasiswa: data.namaMahasiswa,
        nimMahasiswa: data.nimMahasiswa,
        tentangBisnis: data.tentangBisnis,
        produkLayanan: data.produkLayanan,
        pencapaian: data.pencapaian,
        tantangan: data.tantangan,
        rencanaMasaDeoan: data.rencanaMasaDeoan,
        kategori: data.kategori,
        tahunBerdiri: data.tahunBerdiri,
        jumlahKaryawan: data.jumlahKaryawan,
        pendapatan: data.pendapatan,
        lokasi: data.lokasi,
        noTelp: data.noTelp,
        email: data.email,
        lokasiMahasiswa: data.lokasiMahasiswa,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedDataMahasiswaBerwirausaha =
        await prisma.dataMahasiswaBerwirausaha.update({
          where: { id },
          data: updateData,
        });

      return updatedDataMahasiswaBerwirausaha;
    } catch (error) {
      console.error("Error in updateDataMahasiswaBerwirausaha:", error);
      throw error;
    }
  }

  async deleteDataMahasiswaBerwirausaha(id: number) {
    try {
      const deleteDataMahasiswaBerwirausaha =
        await prisma.dataMahasiswaBerwirausaha.delete({
          where: {
            id,
          },
        });
      return deleteDataMahasiswaBerwirausaha;
    } catch (error) {
      console.error("Error in deleteDataMahasiswaBerwirausaha:", error);
      throw error;
    }
  }

  async createStatistikDataMahasiswaBerwirausaha(
    data: StatistikDataMahasiswaBerwirausaha
  ) {
    try {
      const create = await prisma.statistikDataMahasiswaBerwirausaha.create({
        data: {
          ...data,
        },
      });
      return create;
    } catch (error) {
      console.error(
        "Error in createStatistikDataMahasiswaBerwirausaha:",
        error
      );
      throw error;
    }
  }

  async getAllStatistikDataMahasiswaBerwirausaha() {
    try {
      const getAllStatistikDataMahasiswaBerwirausaha =
        await prisma.statistikDataMahasiswaBerwirausaha.findMany();
      return getAllStatistikDataMahasiswaBerwirausaha;
    } catch (error) {
      console.error(
        "Error in getAllStatistikDataMahasiswaBerwirausaha:",
        error
      );
      throw error;
    }
  }

  async updateStatistikDataMahasiswaBerwirausaha(
    id: number,
    data: StatistikDataMahasiswaBerwirausaha
  ) {
    try {
      const updateData: any = {
        totalMahasiswaBerwirausaha: data.totalMahasiswaBerwirausaha,
        lapanganKerja: data.lapanganKerja,
        tingkatKeberhasilan: data.tingkatKeberhasilan,
        bisnisAktif: data.bisnisAktif,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikDataMahasiswaBerwirausaha =
        await prisma.statistikDataMahasiswaBerwirausaha.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikDataMahasiswaBerwirausaha;
    } catch (error) {
      console.error(
        "Error in updateStatistikDataMahasiswaBerwirausaha:",
        error
      );
      throw error;
    }
  }

  async deleteStatistikDataMahasiswaBerwirausaha(id: number) {
    try {
      const deleteStatistikDataMahasiswaBerwirausaha =
        await prisma.statistikDataMahasiswaBerwirausaha.delete({
          where: {
            id,
          },
        });
      return deleteStatistikDataMahasiswaBerwirausaha;
    } catch (error) {
      console.error(
        "Error in deleteStatistikDataMahasiswaBerwirausaha:",
        error
      );
      throw error;
    }
  }
}

export default new DataMahasiswaBerwirausahaService();
