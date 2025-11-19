import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface HimpunanMahasiswaProdiHukum {
  foto: Express.Multer.File;
  bidang: string;
  jabatan: string; //ketua bidang
  anggota: string; // 15 anggota aktif
  tentang: string;
  note: string;
  namaKetua: string;
  email: string;
  noTelp: string;
  programKerja: Prisma.JsonValue[];
  prestasi: Prisma.JsonValue[];
}

interface StatistikHimpunanMahasiswaProdiHukum {
  bidangOrganisasi: string;
  anggotaAktif: string;
  programKerja: string;
  prestasi: string;
  slogan: string;
  deskripsi: string;
}
class HimpunanMahasiswaProdiHukumService {
  async create(data: HimpunanMahasiswaProdiHukum) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createHimpunanMahasiswaProdiHukum =
        await prisma.himpunanMahasiswaProdiHukum.create({
          data: {
            foto: fotoUrl,
            bidang: data.bidang,
            jabatan: data.jabatan,
            anggota: data.anggota,
            tentang: data.tentang,
            note: data.note,
            namaKetua: data.namaKetua,
            email: data.email,
            noTelp: data.noTelp,
            programKerja: data.programKerja,
            prestasi: data.prestasi,
          },
        });
      return createHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAll() {
    try {
      const getAllHimpunanMahasiswaProdiHukum =
        await prisma.himpunanMahasiswaProdiHukum.findMany({
          orderBy: {
            createdAt: "desc",
          },
        });
      return getAllHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async update(id: number, data: HimpunanMahasiswaProdiHukum) {
    try {
      const updateData: any = {
        bidang: data.bidang,
        jabatan: data.jabatan,
        anggota: data.anggota,
        tentang: data.tentang,
        note: data.note,
        namaKetua: data.namaKetua,
        email: data.email,
        noTelp: data.noTelp,
        programKerja: data.programKerja,
        prestasi: data.prestasi,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedHimpunanMahasiswaProdiHukum =
        await prisma.himpunanMahasiswaProdiHukum.update({
          where: { id },
          data: updateData,
        });

      return updatedHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async delete(id: number) {
    try {
      const deleteHimpunanMahasiswaProdiHukum =
        await prisma.himpunanMahasiswaProdiHukum.delete({
          where: {
            id: id,
          },
        });
      return deleteHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createStatistik(data: StatistikHimpunanMahasiswaProdiHukum) {
    try {
      const createStatistikHimpunanMahasiswaProdiHukum =
        await prisma.statistikHimpunanMahasiswaProdiHukum.create({
          data: {
            bidangOrganisasi: data.bidangOrganisasi,
            anggotaAktif: data.anggotaAktif,
            programKerja: data.programKerja,
            prestasi: data.prestasi,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createStatistikHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllStatistik() {
    try {
      const getAllStatistikHimpunanMahasiswaProdiHukum =
        await prisma.statistikHimpunanMahasiswaProdiHukum.findMany();
      return getAllStatistikHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateStatistik(
    id: number,
    data: StatistikHimpunanMahasiswaProdiHukum
  ) {
    try {
      const updateData: any = {
        bidangOrganisasi: data.bidangOrganisasi,
        anggotaAktif: data.anggotaAktif,
        programKerja: data.programKerja,
        prestasi: data.prestasi,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikHimpunanMahasiswaProdiHukum =
        await prisma.statistikHimpunanMahasiswaProdiHukum.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteStatistik(id: number) {
    try {
      const deleteStatistikHimpunanMahasiswaProdiHukum =
        await prisma.statistikHimpunanMahasiswaProdiHukum.delete({
          where: {
            id: id,
          },
        });
      return deleteStatistikHimpunanMahasiswaProdiHukum;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new HimpunanMahasiswaProdiHukumService();
