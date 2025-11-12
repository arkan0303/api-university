import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface KeteranganPendampingIjazah {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  type: string; // "komponen", "prosedur"
  waktu?: string; //minggu 1
}

interface StatistikKeteranganPendampingIjazah {
  totalData: number; // jumlah total data KeteranganPendampingIjazah
  totalKomponen: number; // jumlah data dengan type = "komponen"
  totalProsedur: number; // jumlah data dengan type = "prosedur"
  mingguAktif: string; // minggu paling aktif (misal: "minggu 3")
  slogan: string;
  deskripsi: string;
}
class KeteranganPendampingIjazahService {
  async createKeteranganPendampingIjazah(data: KeteranganPendampingIjazah) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const keteranganPendampingIjazah =
        await prisma.keteranganPendampingIjazah.create({
          data: {
            foto: fotoUrl,
            title: data.title,
            deskripsi: data.deskripsi,
            type: data.type,
            waktu: data.waktu,
          },
        });
      return keteranganPendampingIjazah;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getAllKeteranganPendampingIjazah() {
    try {
      const keteranganPendampingIjazah =
        await prisma.keteranganPendampingIjazah.findMany();
      return keteranganPendampingIjazah;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateKeteranganPendampingIjazah(
    id: number,
    data: KeteranganPendampingIjazah
  ) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        type: data.type,
        waktu: data.waktu,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedKeteranganPendampingIjazah =
        await prisma.keteranganPendampingIjazah.update({
          where: { id },
          data: updateData,
        });

      return updatedKeteranganPendampingIjazah;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteKeteranganPendampingIjazah(id: number) {
    try {
      const deletedData = await prisma.keteranganPendampingIjazah.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async getStatistikKeteranganPendampingIjazah() {
    try {
      const statistikKeteranganPendampingIjazah =
        await prisma.statistikKeteranganPendampingIjazah.findMany();
      return statistikKeteranganPendampingIjazah;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async updateStatistikKeteranganPendampingIjazah(
    data: StatistikKeteranganPendampingIjazah
  ) {
    try {
      const updatedStatistikKeteranganPendampingIjazah =
        await prisma.statistikKeteranganPendampingIjazah.update({
          where: { id: 1 },
          data: data,
        });
      return updatedStatistikKeteranganPendampingIjazah;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async deleteStatistikKeteranganPendampingIjazah() {
    try {
      const deletedData =
        await prisma.statistikKeteranganPendampingIjazah.delete({
          where: { id: 1 },
        });
      return deletedData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createStatistikKeteranganPendampingIjazah(
    data: StatistikKeteranganPendampingIjazah
  ) {
    try {
      const createdStatistikKeteranganPendampingIjazah =
        await prisma.statistikKeteranganPendampingIjazah.create({
          data: data,
        });
      return createdStatistikKeteranganPendampingIjazah;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new KeteranganPendampingIjazahService();
