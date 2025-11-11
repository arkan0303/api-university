import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface SuratPengajuanBeasiswa {
  idMahasiswa: number;
  beasiswa: string;
  noSurat: string;
  tanggalPengajuan: string;
  provider: string;
  nominalPerSemester: string;
  alasanPengajuan: string;
  prestasi: Prisma.JsonValue[];
  namaAyah: string;
  namaIbu: string;
  penghasilanOrangtua: string;
  dokumen: Express.Multer.File[];
  alamat: string;
  email: string;
  kontak: string;
  note: string;
  status: string;
}

interface StatistikSuratPengajuanBeasiswa {
  totalPengajuan: string;
  disetujui: string;
  menunggu: string;
  ditolak: string;
  slogan: string;
  deskripsi: string;
}

class SuratPengajuanBeasiswaService {
  async createSuratPengajuanBeasiswa(data: SuratPengajuanBeasiswa) {
    try {
      let galeriData: Prisma.JsonArray = [];

      if (data.dokumen && data.dokumen.length > 0) {
        const uploadedUrls = await Promise.all(
          data.dokumen.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      const suratPengajuanBeasiswa = await prisma.suratPengajuanBeasiswa.create(
        {
          data: {
            idMahasiswa: Number(data.idMahasiswa),
            beasiswa: data.beasiswa,
            noSurat: data.noSurat,
            tanggalPengajuan: data.tanggalPengajuan,
            provider: data.provider,
            nominalPerSemester: data.nominalPerSemester,
            alasanPengajuan: data.alasanPengajuan,
            prestasi: data.prestasi,
            namaAyah: data.namaAyah,
            namaIbu: data.namaIbu,
            penghasilanOrangtua: data.penghasilanOrangtua,
            dokumen: galeriData,
            alamat: data.alamat,
            email: data.email,
            kontak: data.kontak,
            note: data.note,
            status: data.status,
          },
        }
      );
      return suratPengajuanBeasiswa;
    } catch (error) {
      console.error("Error creating surat pengajuan beasiswa:", error);
      throw error;
    }
  }

  async getAllSuratPengajuanBeasiswa() {
    try {
      const suratPengajuanBeasiswa =
        await prisma.suratPengajuanBeasiswa.findMany();
      // Ambil semua data mahasiswa
      const mahasiswa = await prisma.keteranganAktifMahasiswa.findMany();

      // Lakukan mapping manual
      const hasilMapping = suratPengajuanBeasiswa.map((surat: any) => {
        const dataMahasiswa = mahasiswa.find(
          (mhs) => mhs.id === surat.idMahasiswa
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
                ipk: dataMahasiswa.ipk,
                foto: dataMahasiswa.foto,
                tahunAkademik: dataMahasiswa.tahunAkademik,
              }
            : null,
        };
      });
      return hasilMapping;
    } catch (error) {
      console.error("Error fetching surat pengajuan beasiswa:", error);
      throw error;
    }
  }

  async updateSuratPengajuanBeasiswa(
    id: number,
    suratPengajuanBeasiswa: SuratPengajuanBeasiswa & {
      dokumen?: Express.Multer.File[];
    }
  ) {
    try {
      const updateData: any = {
        idMahasiswa: Number(suratPengajuanBeasiswa.idMahasiswa),
        beasiswa: suratPengajuanBeasiswa.beasiswa,
        noSurat: suratPengajuanBeasiswa.noSurat,
        tanggalPengajuan: suratPengajuanBeasiswa.tanggalPengajuan,
        provider: suratPengajuanBeasiswa.provider,
        nominalPerSemester: suratPengajuanBeasiswa.nominalPerSemester,
        alasanPengajuan: suratPengajuanBeasiswa.alasanPengajuan,
        prestasi: suratPengajuanBeasiswa.prestasi,
        namaAyah: suratPengajuanBeasiswa.namaAyah,
        namaIbu: suratPengajuanBeasiswa.namaIbu,
        penghasilanOrangtua: suratPengajuanBeasiswa.penghasilanOrangtua,
        alamat: suratPengajuanBeasiswa.alamat,
        email: suratPengajuanBeasiswa.email,
        kontak: suratPengajuanBeasiswa.kontak,
        note: suratPengajuanBeasiswa.note,
        status: suratPengajuanBeasiswa.status,
        dokumen: suratPengajuanBeasiswa.dokumen,
      };

      let galeriData: Prisma.JsonArray = [];

      if (
        suratPengajuanBeasiswa.dokumen &&
        suratPengajuanBeasiswa.dokumen.length > 0
      ) {
        const uploadedUrls = await Promise.all(
          suratPengajuanBeasiswa.dokumen.map((file) =>
            uploadToCloudinary(file.buffer)
          )
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      updateData.dokumen = galeriData;

      console.log(updateData);

      const updatedSuratPengajuanBeasiswa =
        await prisma.suratPengajuanBeasiswa.update({
          where: { id },
          data: updateData,
        });
      return updatedSuratPengajuanBeasiswa;
    } catch (error) {
      console.error("Error in updateSuratPengajuanBeasiswa:", error);
      throw error;
    }
  }

  async deleteSuratPengajuanBeasiswa(id: number) {
    try {
      const deletedData = await prisma.suratPengajuanBeasiswa.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async getStatistikSuratPengajuanBeasiswa() {
    try {
      const statistikSuratPengajuanBeasiswa =
        await prisma.statistikSuratPengajuanBeasiswa.findMany();
      return statistikSuratPengajuanBeasiswa;
    } catch (error) {
      console.error("Error getting statistik surat pengajuan beasiswa:", error);
      throw error;
    }
  }

  async updateStatistikSuratPengajuanBeasiswa(
    id: number,
    statistikSuratPengajuanBeasiswa: StatistikSuratPengajuanBeasiswa
  ) {
    try {
      const updatedStatistikSuratPengajuanBeasiswa =
        await prisma.statistikSuratPengajuanBeasiswa.update({
          where: { id },
          data: statistikSuratPengajuanBeasiswa,
        });
      return updatedStatistikSuratPengajuanBeasiswa;
    } catch (error) {
      console.error("Error in updateStatistikSuratPengajuanBeasiswa:", error);
      throw error;
    }
  }

  async deleteStatistikSuratPengajuanBeasiswa(id: number) {
    try {
      const deletedData = await prisma.statistikSuratPengajuanBeasiswa.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }
  async createStatistikSuratPengajuanBeasiswa(
    statistikSuratPengajuanBeasiswa: StatistikSuratPengajuanBeasiswa
  ) {
    try {
      const createdStatistikSuratPengajuanBeasiswa =
        await prisma.statistikSuratPengajuanBeasiswa.create({
          data: statistikSuratPengajuanBeasiswa,
        });
      return createdStatistikSuratPengajuanBeasiswa;
    } catch (error) {
      console.error("Error in createStatistikSuratPengajuanBeasiswa:", error);
      throw error;
    }
  }
}

export default new SuratPengajuanBeasiswaService();
