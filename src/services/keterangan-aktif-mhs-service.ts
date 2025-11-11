import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";

interface KeteranganAktifMahasiswa {
  foto: Express.Multer.File;
  nama: string;
  nim: string;
  jurusan: string;
  semester: string;
  status: string;
  ipk: string;
  keperluan: string;
  noSurat: string;
  tanggalTerbit: string;
  tahunAkademik: string;
  diTerbitkan: string;
  note: string;
  deskripsi: string;
}

interface StatistikKeteranganAktifMahasiswa {
  totalMahasiswa: string;
  aktif: string;
  tidakAktif: string;
  selesai: string;
  slogan: string;
  deskripsi: string;
}

class KeteranganAktifMahasiswaService {
  async createKeteranganAktifMahasiswa(data: KeteranganAktifMahasiswa) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const result = await prisma.keteranganAktifMahasiswa.create({
        data: {
          foto: fotoUrl,
          nama: data.nama,
          nim: data.nim,
          jurusan: data.jurusan,
          semester: data.semester,
          status: data.status,
          ipk: data.ipk,
          keperluan: data.keperluan,
          noSurat: data.noSurat,
          tanggalTerbit: data.tanggalTerbit,
          tahunAkademik: data.tahunAkademik,
          diTerbitkan: data.diTerbitkan,
          note: data.note,
          deskripsi: data.deskripsi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async getAllKeteranganAktifMahasiswa() {
    try {
      const result = await prisma.keteranganAktifMahasiswa.findMany();
      return result;
    } catch (error) {
      console.error("Error in getAllKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async updateKeteranganAktifMahasiswa(
    id: number,
    data: KeteranganAktifMahasiswa
  ) {
    try {
      const updateData: any = {
        nama: data.nama,
        nim: data.nim,
        jurusan: data.jurusan,
        semester: data.semester,
        status: data.status,
        ipk: data.ipk,
        keperluan: data.keperluan,
        noSurat: data.noSurat,
        tanggalTerbit: data.tanggalTerbit,
        tahunAkademik: data.tahunAkademik,
        diTerbitkan: data.diTerbitkan,
        note: data.note,
        deskripsi: data.deskripsi,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedPimpinan = await prisma.keteranganAktifMahasiswa.update({
        where: { id },
        data: updateData,
      });

      return updatedPimpinan;
    } catch (error) {
      console.error("Error in updateKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async deleteKeteranganAktifMahasiswa(id: number) {
    try {
      const deletedData = await prisma.keteranganAktifMahasiswa.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async createStatistikKeteranganAktifMahasiswa(
    data: StatistikKeteranganAktifMahasiswa
  ) {
    try {
      const result = await prisma.statistikKeteranganAktifMahasiswa.create({
        data: {
          totalMahasiswa: data.totalMahasiswa,
          aktif: data.aktif,
          tidakAktif: data.tidakAktif,
          selesai: data.selesai,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createStatistikKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async getAllStatistikKeteranganAktifMahasiswa() {
    try {
      const result = await prisma.statistikKeteranganAktifMahasiswa.findMany();
      return result;
    } catch (error) {
      console.error("Error in getAllStatistikKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async updateStatistikKeteranganAktifMahasiswa(
    id: number,
    data: StatistikKeteranganAktifMahasiswa
  ) {
    try {
      const updateData: any = {
        totalMahasiswa: data.totalMahasiswa,
        aktif: data.aktif,
        tidakAktif: data.tidakAktif,
        selesai: data.selesai,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistik =
        await prisma.statistikKeteranganAktifMahasiswa.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistik;
    } catch (error) {
      console.error("Error in updateStatistikKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async deleteStatistikKeteranganAktifMahasiswa(id: number) {
    try {
      const deletedData = await prisma.statistikKeteranganAktifMahasiswa.delete(
        {
          where: { id },
        }
      );
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }

  async getDataKeteranganAktifMahasiswa() {
    try {
      const result = await prisma.keteranganAktifMahasiswa.findMany({
        select: {
          id: true,
          nama: true,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in getDataKeteranganAktifMahasiswa:", error);
      throw error;
    }
  }
}

export default new KeteranganAktifMahasiswaService();
