import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
interface DewanPerwakilanMahasiswa {
  foto: Express.Multer.File;
  nama: string;
  jabatan: string;
  tugas: string;
  visi: string;
  misi: string;
  programKerja: Prisma.JsonValue[];
  pencapaian: Prisma.JsonValue[];
  email: string;
  noTelp: string;
}

interface StatistikDewanPerwakilanMahasiswa {
  anggotaAktif: string;
  aspirasiDitampung: string;
  praturanDisusun: string;
  akuntabel: string;
  slogan: string;
  deskripsi: string;
}
class DewanPerwakilanMahasiswaService {
  async create(data: DewanPerwakilanMahasiswa) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createDewanPerwakilanMahasiswa =
        await prisma.dewanPerwakilanMahasiswa.create({
          data: {
            foto: fotoUrl,
            nama: data.nama,
            jabatan: data.jabatan,
            tugas: data.tugas,
            visi: data.visi,
            misi: data.misi,
            programKerja: data.programKerja,
            pencapaian: data.pencapaian,
            email: data.email,
            noTelp: data.noTelp,
          },
        });
      return createDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in createDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
  async getAll() {
    try {
      const getAllDewanPerwakilanMahasiswa =
        await prisma.dewanPerwakilanMahasiswa.findMany();
      return getAllDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in getAllDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
  async update(id: number, data: DewanPerwakilanMahasiswa) {
    try {
      const updateData: any = {
        nama: data.nama,
        jabatan: data.jabatan,
        tugas: data.tugas,
        visi: data.visi,
        misi: data.misi,
        programKerja: data.programKerja,
        pencapaian: data.pencapaian,
        email: data.email,
        noTelp: data.noTelp,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedDewanPerwakilanMahasiswa =
        await prisma.dewanPerwakilanMahasiswa.update({
          where: { id },
          data: updateData,
        });

      return updatedDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in updateDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
  async delete(id: number) {
    try {
      const deleteDewanPerwakilanMahasiswa =
        await prisma.dewanPerwakilanMahasiswa.delete({
          where: {
            id,
          },
        });
      return deleteDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in deleteDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }

  async createStatistik(data: StatistikDewanPerwakilanMahasiswa) {
    try {
      const createStatistikDewanPerwakilanMahasiswa =
        await prisma.statistikDewanPerwakilanMahasiswa.create({
          data,
        });
      return createStatistikDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in createStatistikDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
  async getAllStatistik() {
    try {
      const getAllStatistikDewanPerwakilanMahasiswa =
        await prisma.statistikDewanPerwakilanMahasiswa.findMany();
      return getAllStatistikDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in getAllStatistikDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
  async updateStatistik(id: number, data: StatistikDewanPerwakilanMahasiswa) {
    try {
      const updateData: any = {
        anggotaAktif: data.anggotaAktif,
        aspirasiDitampung: data.aspirasiDitampung,
        praturanDisusun: data.praturanDisusun,
        akuntabel: data.akuntabel,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikDewanPerwakilanMahasiswa =
        await prisma.statistikDewanPerwakilanMahasiswa.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in updateStatistikDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
  async deleteStatistik(id: number) {
    try {
      const deleteStatistikDewanPerwakilanMahasiswa =
        await prisma.statistikDewanPerwakilanMahasiswa.delete({
          where: {
            id,
          },
        });
      return deleteStatistikDewanPerwakilanMahasiswa;
    } catch (error) {
      console.error("Error in deleteStatistikDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
}

export default new DewanPerwakilanMahasiswaService();
