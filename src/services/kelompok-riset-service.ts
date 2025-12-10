import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface KelompokRiset {
  title: string;
  fokusPenelitian: Prisma.JsonValue[];
  foto: Express.Multer.File;
  namaMahasiswa: string;
  anggota: string;
  publikasi: string; // 2b publikasi
  deskripsi: string;
  status: string; // "Aktif", "Tidak Aktif"
}

interface StatistikKelompokRiset {
  total: string;
  penelitianAktif: string;
  publikasiPerTahun: string;
  jurnalTerAkreditasi: string;
  slogan: string;
  deskripsi: string;
}

class KelompokRisetService {
  async create(data: KelompokRiset) {
    try {
      let fotoUrl;
      if (data.foto) {
        fotoUrl = await uploadToCloudinary(data.foto.buffer);
      }
      const kelompokRiset = await prisma.kelompokRiset.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return kelompokRiset;
    } catch (error) {
      console.error("Error in createKelompokRiset:", error);
      throw error;
    }
  }

  async getAllKelompokRiset() {
    try {
      const kelompokRiset = await prisma.kelompokRiset.findMany();
      return kelompokRiset;
    } catch (error) {
      console.error("Error in getAllKelompokRiset:", error);
      throw error;
    }
  }

  async updateKelompokRiset(id: number, data: KelompokRiset) {
    try {
      const updateData: any = {
        title: data.title,
        fokusPenelitian: data.fokusPenelitian,
        namaMahasiswa: data.namaMahasiswa,
        anggota: data.anggota,
        publikasi: data.publikasi,
        deskripsi: data.deskripsi,
        status: data.status,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedKelompokRiset = await prisma.kelompokRiset.update({
        where: { id },
        data: updateData,
      });

      return updatedKelompokRiset;
    } catch (error) {
      console.error("Error in updateKelompokRiset:", error);
      throw error;
    }
  }

  async deleteKelompokRiset(id: number) {
    try {
      const deletedKelompokRiset = await prisma.kelompokRiset.delete({
        where: { id },
      });
      return deletedKelompokRiset;
    } catch (error) {
      console.error("Error in deleteKelompokRiset:", error);
      throw error;
    }
  }

  async createStatistikKelompokRiset(data: StatistikKelompokRiset) {
    try {
      const statistikKelompokRiset = await prisma.statistikKelompokRiset.create(
        {
          data: {
            ...data,
          },
        }
      );
      return statistikKelompokRiset;
    } catch (error) {
      console.error("Error in createStatistikKelompokRiset:", error);
      throw error;
    }
  }

  async getAllStatistikKelompokRiset() {
    try {
      const statistikKelompokRiset =
        await prisma.statistikKelompokRiset.findMany();
      return statistikKelompokRiset;
    } catch (error) {
      console.error("Error in getAllStatistikKelompokRiset:", error);
      throw error;
    }
  }

  async updateStatistikKelompokRiset(id: number, data: StatistikKelompokRiset) {
    try {
      const updateData: any = {
        total: data.total,
        penelitianAktif: data.penelitianAktif,
        publikasiPerTahun: data.publikasiPerTahun,
        jurnalTerAkreditasi: data.jurnalTerAkreditasi,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikKelompokRiset =
        await prisma.statistikKelompokRiset.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikKelompokRiset;
    } catch (error) {
      console.error("Error in updateStatistikKelompokRiset:", error);
      throw error;
    }
  }

  async deleteStatistikKelompokRiset(id: number) {
    try {
      const deletedStatistikKelompokRiset =
        await prisma.statistikKelompokRiset.delete({
          where: { id },
        });
      return deletedStatistikKelompokRiset;
    } catch (error) {
      console.error("Error in deleteStatistikKelompokRiset:", error);
      throw error;
    }
  }
}

export default new KelompokRisetService();
