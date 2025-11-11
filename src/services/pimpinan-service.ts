import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface Pimpinan {
  nama: string;
  jabatan: string;
  foto: Express.Multer.File;
  pendidikan?: Prisma.JsonValue[];
  keahlian?: Prisma.JsonValue[];
  periode?: string;
  email?: string;
  kontak?: string;
}

interface StatistikPimpinan {
  pimpinan: string;
  tahunPengalaman: string;
  publikasiIlmiah: string;
  slogan: string;
  deskripsi: string;
}

class PimpinanService {
  async createPimpinan(data: Pimpinan) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);

      const result = await prisma.pimpinan.create({
        data: {
          nama: data.nama,
          jabatan: data.jabatan,
          foto: fotoUrl,
          pendidikan: data.pendidikan,
          keahlian: data.keahlian,
          periode: data.periode,
          email: data.email,
          kontak: data.kontak,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createPimpinan:", error);
      throw error;
    }
  }

  async getAllPimpinan() {
    try {
      const result = await prisma.pimpinan.findMany();
      return result;
    } catch (error) {
      console.error("Error in getAllPimpinan:", error);
      throw error;
    }
  }

  async updatePimpinan(
    id: number,
    data: Pimpinan & { foto?: Express.Multer.File }
  ) {
    try {
      const updateData: any = {
        nama: data.nama,
        jabatan: data.jabatan,
        pendidikan: data.pendidikan,
        keahlian: data.keahlian,
        periode: data.periode,
        email: data.email,
        kontak: data.kontak,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedPimpinan = await prisma.pimpinan.update({
        where: { id },
        data: updateData,
      });

      return updatedPimpinan;
    } catch (error) {
      console.error("Error in updatePimpinan:", error);
      throw error;
    }
  }

  async deletePimpinan(id: number) {
    try {
      const deletedData = await prisma.pimpinan.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deletePimpinan:", error);
      throw error;
    }
  }

  async createStatistikPimpinan(data: StatistikPimpinan) {
    try {
      const result = await prisma.statistikPimpinan.create({
        data: {
          pimpinan: data.pimpinan,
          tahunPengalaman: data.tahunPengalaman,
          publikasiIlmiah: data.publikasiIlmiah,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createStatistikPimpinan:", error);
      throw error;
    }
  }

  async getAllStatistikPimpinan() {
    try {
      const result = await prisma.statistikPimpinan.findMany();
      return result;
    } catch (error) {
      console.error("Error in getAllStatistikPimpinan:", error);
      throw error;
    }
  }

  async updateStatistikPimpinan(id: number, data: StatistikPimpinan) {
    try {
      const updatedData = await prisma.statistikPimpinan.update({
        where: { id },
        data: data,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateStatistikPimpinan:", error);
      throw error;
    }
  }

  async deleteStatistikPimpinan(id: number) {
    try {
      const deletedData = await prisma.statistikPimpinan.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikPimpinan:", error);
      throw error;
    }
  }
}

export default new PimpinanService();
