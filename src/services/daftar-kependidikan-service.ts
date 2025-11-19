import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma, StatistikTenagaKependidikan } from "@prisma/client";

interface DaftarKependidikan {
  foto: Express.Multer.File;
  nama: string;
  jabatan: string;
  nip: string;
  deskripsi: string;
  riwayatPendidikan: Prisma.JsonValue[];
  tanggungJawab: Prisma.JsonValue[];
  keahlian: Prisma.JsonValue[];
  prestasi: Prisma.JsonValue[];
  pelatihan: Prisma.JsonValue[];
  email: string;
  noTelp: string;
  pengalaman: Prisma.JsonValue[];
}
interface StatistikDaftarDosen {
  totalTenagaKependidikan: string;
  administrasi: string;
  teknis: string;
  pustakawan: string;
  slogan: string;
  deskripsi: string;
}

class DaftarKependidikanService {
  async createDaftarKependidikan(data: DaftarKependidikan) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createKependidikan = await prisma.tenagaKependidikan.create({
        data: {
          foto: fotoUrl,
          nama: data.nama,
          jabatan: data.jabatan,
          nip: data.nip,
          deskripsi: data.deskripsi,
          riwayatPendidikan: data.riwayatPendidikan,
          keahlian: data.keahlian,
          tanggungJawab: data.tanggungJawab,
          prestasi: data.prestasi,
          pelatihan: data.pelatihan,
          email: data.email,
          noTelp: data.noTelp,
          pengalaman: data.pengalaman,
        },
      });
      return createKependidikan;
    } catch (error) {
      throw error;
    }
  }

  async getAllDaftarKependidikan() {
    try {
      const getAllKependidikan = await prisma.tenagaKependidikan.findMany();
      return getAllKependidikan;
    } catch (error) {
      throw error;
    }
  }

  async updateDaftarKependidikan(id: number, data: DaftarKependidikan) {
    try {
      const updateData: any = {
        nama: data.nama,
        jabatan: data.jabatan,
        nip: data.nip,
        deskripsi: data.deskripsi,
        riwayatPendidikan: data.riwayatPendidikan,
        keahlian: data.keahlian,
        prestasi: data.prestasi,
        pelatihan: data.pelatihan,
        email: data.email,
        noTelp: data.noTelp,
        pengalaman: data.pengalaman,
        tanggungJawab: data.tanggungJawab,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedDaftarKependidikan = await prisma.tenagaKependidikan.update({
        where: { id },
        data: updateData,
      });

      return updatedDaftarKependidikan;
    } catch (error) {
      throw error;
    }
  }

  async deleteDaftarKependidikanById(id: number) {
    try {
      const deletedDaftarKependidikan = await prisma.tenagaKependidikan.delete({
        where: { id },
      });
      return deletedDaftarKependidikan;
    } catch (error) {
      throw error;
    }
  }

  async getStatistikDaftarKependidikan() {
    try {
      const getAllDosen = await prisma.statistikTenagaKependidikan.findMany();
      return getAllDosen;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikTenagaKependidikan(data: StatistikDaftarDosen) {
    try {
      const createStatistik = await prisma.statistikTenagaKependidikan.create({
        data: {
          totalTenagaKependidikan: data.totalTenagaKependidikan,
          administrasi: data.administrasi,
          teknis: data.teknis,
          pustakawan: data.pustakawan,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return createStatistik;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikTenagaKependidikan(
    id: number,
    data: StatistikDaftarDosen
  ) {
    // Gunakan any untuk sementara
    try {
      const updateData: any = {
        totalTenagaKependidikan: data.totalTenagaKependidikan,
        administrasi: data.administrasi,
        teknis: data.teknis,
        pustakawan: data.pustakawan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistik = await prisma.statistikTenagaKependidikan.update({
        where: { id },
        data: updateData,
      });

      return updatedStatistik;
    } catch (error) {
      console.error("Error in updateStatistikDaftarDosen:", error); // Tambahkan log error
      throw error;
    }
  }

  async deleteStatistikTenagaKependidikanById(id: number) {
    try {
      const deletedStatistik = await prisma.statistikTenagaKependidikan.delete({
        where: { id },
      });
      return deletedStatistik;
    } catch (error) {
      throw error;
    }
  }
}

export default new DaftarKependidikanService();
