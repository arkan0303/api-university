import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";

interface BadanEksikutifMahasiswa {
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

interface StatistikBadanEksikutifMahasiswa {
  pengurusInti: string;
  programKerja: string;
  mahasiswaTerlayani: string;
  komitmen: string;
  slogan: string;
  deskripsi: string;
}

class BadanEksikutifMahasiswaService {
  async create(data: BadanEksikutifMahasiswa) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createBadanEksikutifMahasiswa =
        await prisma.badanEksikutifMahasiswa.create({
          data: {
            ...data,
            foto: fotoUrl,
          },
        });
      return createBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in createBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async getAll() {
    try {
      const getAllBadanEksikutifMahasiswa =
        await prisma.badanEksikutifMahasiswa.findMany();
      return getAllBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in getAllBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async update(id: number, data: BadanEksikutifMahasiswa) {
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

      const updatedBadanEksikutifMahasiswa =
        await prisma.badanEksikutifMahasiswa.update({
          where: { id },
          data: updateData,
        });

      return updatedBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in updateBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async delete(id: number) {
    try {
      const deleteBadanEksikutifMahasiswa =
        await prisma.badanEksikutifMahasiswa.delete({
          where: {
            id,
          },
        });
      return deleteBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in deleteBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async createStatistik(data: StatistikBadanEksikutifMahasiswa) {
    try {
      const createStatistikBadanEksikutifMahasiswa =
        await prisma.statistikBadanEksikutifMahasiswa.create({
          data: {
            ...data,
          },
        });
      return createStatistikBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in createStatistikBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async getAllStatistik() {
    try {
      const getAllStatistikBadanEksikutifMahasiswa =
        await prisma.statistikBadanEksikutifMahasiswa.findMany();
      return getAllStatistikBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in getAllStatistikBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async updateStatistik(id: number, data: StatistikBadanEksikutifMahasiswa) {
    try {
      const updateData: any = {
        pengurusInti: data.pengurusInti,
        programKerja: data.programKerja,
        mahasiswaTerlayani: data.mahasiswaTerlayani,
        komitmen: data.komitmen,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikBadanEksikutifMahasiswa =
        await prisma.statistikBadanEksikutifMahasiswa.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in updateStatistikBadanEksikutifMahasiswa:", error);
      return null;
    }
  }

  async deleteStatistik(id: number) {
    try {
      const deleteStatistikBadanEksikutifMahasiswa =
        await prisma.statistikBadanEksikutifMahasiswa.delete({
          where: {
            id,
          },
        });
      return deleteStatistikBadanEksikutifMahasiswa;
    } catch (error) {
      console.error("Error in deleteStatistikBadanEksikutifMahasiswa:", error);
      return null;
    }
  }
}

export default new BadanEksikutifMahasiswaService();
