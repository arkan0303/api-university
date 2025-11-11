import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface suratIjinPenelitian {
  foto: Express.Multer.File;
  file: Express.Multer.File[];
  title: string;
  status: string;
  noSurat: string;
  tanggalTerbit: string;
  periodePenelitian: string;
  idMahasiswa: string;
  penelitian: string;
  temaPenelitian: string;
  deskripsi: string;
  tujuanPenelitian: Prisma.JsonValue[];
  metodePenelitian: Prisma.JsonValue[];
  hasilDiharapkan: Prisma.JsonValue[];
}

interface StatistikSuratIjinPenelitian {
  totalSurat: string;
  diterima: string;
  ditolak: string;
  selesai: string;
  slogan: string;
  deskripsi: string;
}

class SuratIjinPenelitianService {
  async createSuratIjinPenelitian(data: suratIjinPenelitian) {
    try {
      const uploadImage = await uploadToCloudinary(data.foto.buffer);
      // Process gallery if exists
      let galeriData: Prisma.JsonArray = [];

      if (data.file && data.file.length > 0) {
        const uploadedUrls = await Promise.all(
          data.file.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }
      const suratIjinPenelitian = await prisma.suratIjinPenelitian.create({
        data: {
          foto: uploadImage,
          file: galeriData,
          title: data.title,
          status: data.status,
          noSurat: data.noSurat,
          tanggalTerbit: data.tanggalTerbit,
          periodePenelitian: data.periodePenelitian,
          idMahasiswa: data.idMahasiswa,
          penelitian: data.penelitian,
          temaPenelitian: data.temaPenelitian,
          deskripsi: data.deskripsi,
          tujuanPenelitian: data.tujuanPenelitian,
          metodePenelitian: data.metodePenelitian,
          hasilDiharapkan: data.hasilDiharapkan,
        },
      });
      return suratIjinPenelitian;
    } catch (error) {
      console.error("Error creating surat ijin penelitian:", error);
      throw error;
    }
  }

  async getAllSuratIjinPenelitian() {
    try {
      // Ambil semua data surat
      const suratIjinPenelitian = await prisma.suratIjinPenelitian.findMany();

      // Ambil semua data mahasiswa
      const mahasiswa = await prisma.keteranganAktifMahasiswa.findMany();

      // Lakukan mapping manual
      const hasilMapping = suratIjinPenelitian.map((surat) => {
        const dataMahasiswa = mahasiswa.find(
          (mhs) => mhs.id.toString() === surat.idMahasiswa
        );

        return {
          ...surat,
          mahasiswa: dataMahasiswa
            ? {
                id: dataMahasiswa.id,
                nama: dataMahasiswa.nama,
                nim: dataMahasiswa.nim,
                jurusan: dataMahasiswa.jurusan,
                semester: dataMahasiswa.semester,
                // ipk: dataMahasiswa.ipk,
                // status: dataMahasiswa.status,
              }
            : null,
        };
      });

      return hasilMapping;
    } catch (error) {
      console.error("Error getting surat ijin penelitian:", error);
      throw error;
    }
  }

  async updateSuratIjinPenelitian(id: number, data: suratIjinPenelitian) {
    try {
      const updateData: any = {
        foto: data.foto,
        file: data.file,
        title: data.title,
        status: data.status,
        noSurat: data.noSurat,
        tanggalTerbit: data.tanggalTerbit,
        periodePenelitian: data.periodePenelitian,
        idMahasiswa: data.idMahasiswa,
        penelitian: data.penelitian,
        temaPenelitian: data.temaPenelitian,
        deskripsi: data.deskripsi,
        tujuanPenelitian: data.tujuanPenelitian,
        metodePenelitian: data.metodePenelitian,
        hasilDiharapkan: data.hasilDiharapkan,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      // Process gallery if exists
      let galeriData: Prisma.JsonArray = [];

      if (data.file && data.file.length > 0) {
        const uploadedUrls = await Promise.all(
          data.file.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }
      const updatedSuratIjinPenelitian =
        await prisma.suratIjinPenelitian.update({
          where: { id },
          data: updateData,
        });

      return updatedSuratIjinPenelitian;
    } catch (error) {
      console.error("Error updating surat ijin penelitian:", error);
      throw error;
    }
  }

  async deleteSuratIjinPenelitian(id: number) {
    try {
      const suratIjinPenelitian = await prisma.suratIjinPenelitian.delete({
        where: { id },
      });
      return suratIjinPenelitian;
    } catch (error) {
      console.error("Error deleting surat ijin penelitian:", error);
      throw error;
    }
  }

  async getStatistikSuratIjinPenelitian() {
    try {
      const statistikSuratIjinPenelitian =
        await prisma.statistikSuratIjinPenelitian.findMany();
      return statistikSuratIjinPenelitian;
    } catch (error) {
      console.error("Error getting statistik surat ijin penelitian:", error);
      throw error;
    }
  }

  async updateStatistikSuratIjinPenelitian(
    id: number,
    data: StatistikSuratIjinPenelitian
  ) {
    try {
      const updateData: any = {
        totalSurat: data.totalSurat,
        diterima: data.diterima,
        ditolak: data.ditolak,
        selesai: data.selesai,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };
      const updatedStatistikSuratIjinPenelitian =
        await prisma.statistikSuratIjinPenelitian.update({
          where: { id },
          data: updateData,
        });
      return updatedStatistikSuratIjinPenelitian;
    } catch (error) {
      console.error("Error updating statistik surat ijin penelitian:", error);
      throw error;
    }
  }

  async deleteStatistikSuratIjinPenelitian(id: number) {
    try {
      const statistikSuratIjinPenelitian =
        await prisma.statistikSuratIjinPenelitian.delete({
          where: { id },
        });
      return statistikSuratIjinPenelitian;
    } catch (error) {
      console.error("Error deleting statistik surat ijin penelitian:", error);
      throw error;
    }
  }

  async createStatistikSuratIjinPenelitian(data: StatistikSuratIjinPenelitian) {
    try {
      const statistikSuratIjinPenelitian =
        await prisma.statistikSuratIjinPenelitian.create({
          data: data,
        });
      return statistikSuratIjinPenelitian;
    } catch (error) {
      console.error("Error creating statistik surat ijin penelitian:", error);
      throw error;
    }
  }
}

export default new SuratIjinPenelitianService();
