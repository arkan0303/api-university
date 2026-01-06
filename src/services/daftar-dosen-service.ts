import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface DaftarDosen {
  foto: Express.Multer.File;
  nama: string;
  jabatan: string;
  nidn: string;
  deskripsi: string;
  riwayatPendidikan: Prisma.JsonValue[];
  keahlian: Prisma.JsonValue[];
  prestasi: Prisma.JsonValue[];
  publikasi: Prisma.JsonValue[];
  email: string;
  noTelp: string;
  nuptk: string;
  nik: string;
  id_sinta: string;
  tahun_publikasi: string;
  ahli: Express.Multer.File;
  jabatan_akademik: string;
  link_sinta: string;
  link_ppdikti: string;
  urutan: string;
  jabatan_struktural: string;
}
interface StatistikDaftarDosen {
  totalDosen: string;
  profesor: string;
  doktor: string;
  publiikasiPerTahun: string;
  slogan: string;
  deskripsi: string;
}

class DaftarDosenService {
  async createDaftarDosen(data: DaftarDosen) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const ahliUrl = data.ahli
        ? await uploadToCloudinary(data.ahli.buffer)
        : null;
      const createDosen = await prisma.daftarDosen.create({
        data: {
          foto: fotoUrl,
          nama: data.nama,
          jabatan: data.jabatan,
          nidn: data.nidn,
          deskripsi: data.deskripsi,
          riwayatPendidikan: data.riwayatPendidikan,
          keahlian: data.keahlian,
          prestasi: data.prestasi,
          publikasi: data.publikasi,
          email: data.email,
          noTelp: data.noTelp,
          nuptk: data.nuptk,
          nik: data.nik,
          id_sinta: data.id_sinta,
          tahun_publikasi: data.tahun_publikasi,
          ahli: ahliUrl,
          jabatan_akademik: data.jabatan_akademik,
          link_sinta: data.link_sinta,
          link_ppdikti: data.link_ppdikti,
          urutan: data.urutan,
          jabatan_struktural: data.jabatan_struktural,
        },
      });
      return createDosen;
    } catch (error) {
      throw error;
    }
  }

  async getAllDaftarDosen() {
    try {
      const getAllDosen = await prisma.daftarDosen.findMany();
      return getAllDosen;
    } catch (error) {
      throw error;
    }
  }

  async updateDaftarDosen(id: number, data: DaftarDosen) {
    try {
      const updateData: any = {
        nama: data.nama,
        jabatan: data.jabatan,
        nidn: data.nidn,
        deskripsi: data.deskripsi,
        riwayatPendidikan: data.riwayatPendidikan,
        keahlian: data.keahlian,
        prestasi: data.prestasi,
        publikasi: data.publikasi,
        email: data.email,
        noTelp: data.noTelp,
        nuptk: data.nuptk,
        nik: data.nik,
        id_sinta: data.id_sinta,
        tahun_publikasi: data.tahun_publikasi,
        jabatan_akademik: data.jabatan_akademik,
        link_sinta: data.link_sinta,
        link_ppdikti: data.link_ppdikti,
        urutan: data.urutan,
        jabatan_struktural: data.jabatan_struktural,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }
      if (data.ahli) {
        const ahliUrl = await uploadToCloudinary(data.ahli.buffer);
        updateData.ahli = ahliUrl;
      }

      const updatedDaftarDosen = await prisma.daftarDosen.update({
        where: { id },
        data: updateData,
      });

      return updatedDaftarDosen;
    } catch (error) {
      throw error;
    }
  }

  async deleteDaftarDosenById(id: number) {
    try {
      const deletedDaftarDosen = await prisma.daftarDosen.delete({
        where: { id },
      });
      return deletedDaftarDosen;
    } catch (error) {
      throw error;
    }
  }

  async getStatistikDaftarDosen() {
    try {
      const getAllDosen = await prisma.statistikDaftarDosen.findMany();
      return getAllDosen;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikDaftarDosen(data: StatistikDaftarDosen) {
    try {
      const createStatistik = await prisma.statistikDaftarDosen.create({
        data: {
          totalDosen: data.totalDosen,
          profesor: data.profesor,
          doktor: data.doktor,
          publiikasiPerTahun: data.publiikasiPerTahun,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return createStatistik;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikDaftarDosen(id: number, data: any) {
    // Gunakan any untuk sementara
    try {
      const updateData: any = {
        totalDosen: data.totalDosen,
        profesor: data.profesor,
        doktor: data.doktor,
        // Perbaiki ejaan disini
        publiikasiPerTahun: data.publiikasiPerTahun, // Sesuaikan dengan ejaan di frontend
        // Atau ubah di frontend untuk menggunakan 'publikasiPerTahun' (dengan satu 'i')
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistik = await prisma.statistikDaftarDosen.update({
        where: { id },
        data: updateData,
      });

      return updatedStatistik;
    } catch (error) {
      console.error("Error in updateStatistikDaftarDosen:", error); // Tambahkan log error
      throw error;
    }
  }

  async deleteStatistikDaftarDosenById(id: number) {
    try {
      const deletedStatistik = await prisma.statistikDaftarDosen.delete({
        where: { id },
      });
      return deletedStatistik;
    } catch (error) {
      throw error;
    }
  }
}

export default new DaftarDosenService();
