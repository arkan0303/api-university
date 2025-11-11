import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
interface StrukturOrganisasi {
  jabatan: string;
  nama: string;
  foto: Express.Multer.File;
  note: string;
  type: string;
}

interface StatistikStrukturOrganisasi {
  pimpinan: string;
  bagianUtama: string;
  tenagaPendidikan: string;
  dosenTetap: string;
  slogan: string;
  deskripsi: string;
}

class StrukturOrganisasiService {
  async createStrukturOrganisasi(strukturOrganisasi: StrukturOrganisasi) {
    try {
      const fotoUrl = await uploadToCloudinary(strukturOrganisasi.foto.buffer);
      const strukturOrganisasii = await prisma.strukturOrganisasi.create({
        data: {
          ...strukturOrganisasi,
          foto: fotoUrl,
        },
      });
      return strukturOrganisasii;
    } catch (error) {
      console.error("Error in createStrukturOrganisasi:", error);
      throw error;
    }
  }

  async getAllStrukturOrganisasi() {
    try {
      const strukturOrganisasii = await prisma.strukturOrganisasi.findMany();
      return strukturOrganisasii;
    } catch (error) {
      console.error("Error in getAllStrukturOrganisasi:", error);
      throw error;
    }
  }

  async updateStrukturOrganisasi(
    id: number,
    strukturOrganisasi: StrukturOrganisasi & { foto?: Express.Multer.File }
  ) {
    try {
      const updateData: any = {
        jabatan: strukturOrganisasi.jabatan,
        nama: strukturOrganisasi.nama,
        note: strukturOrganisasi.note,
        type: strukturOrganisasi.type,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (strukturOrganisasi.foto) {
        const fotoUrl = await uploadToCloudinary(
          strukturOrganisasi.foto.buffer
        );
        updateData.foto = fotoUrl;
      }

      const strukturOrganisasii = await prisma.strukturOrganisasi.update({
        where: { id },
        data: updateData,
      });

      return strukturOrganisasii;
    } catch (error) {
      console.error("Error in updateStrukturOrganisasi:", error);
      throw error;
    }
  }

  async deleteStrukturOrganisasi(id: number) {
    try {
      const deletedData = await prisma.strukturOrganisasi.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStrukturOrganisasi:", error);
      throw error;
    }
  }

  async createStatistikStrukturOrganisasi(
    statistikStrukturOrganisasi: StatistikStrukturOrganisasi
  ) {
    try {
      const statistikStrukturOrganisasii =
        await prisma.statistikStrukturOrganisasi.create({
          data: {
            ...statistikStrukturOrganisasi,
          },
        });
      return statistikStrukturOrganisasii;
    } catch (error) {
      console.error("Error in createStatistikStrukturOrganisasi:", error);
      throw error;
    }
  }

  async getAllStatistikStrukturOrganisasi() {
    try {
      const statistikStrukturOrganisasii =
        await prisma.statistikStrukturOrganisasi.findMany();
      return statistikStrukturOrganisasii;
    } catch (error) {
      console.error("Error in getAllStatistikStrukturOrganisasi:", error);
      throw error;
    }
  }

  async updateStatistikStrukturOrganisasi(
    id: number,
    statistikStrukturOrganisasi: StatistikStrukturOrganisasi
  ) {
    try {
      const updateData: any = {
        ...statistikStrukturOrganisasi,
      };

      const statistikStrukturOrganisasii =
        await prisma.statistikStrukturOrganisasi.update({
          where: { id },
          data: updateData,
        });

      return statistikStrukturOrganisasii;
    } catch (error) {
      console.error("Error in updateStatistikStrukturOrganisasi:", error);
      throw error;
    }
  }

  async deleteStatistikStrukturOrganisasi(id: number) {
    try {
      const deletedData = await prisma.statistikStrukturOrganisasi.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikStrukturOrganisasi:", error);
      throw error;
    }
  }
}

export default new StrukturOrganisasiService();
