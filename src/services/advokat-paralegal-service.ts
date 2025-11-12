import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface AdvokatParalegal {
  type: string; // "Advokat", "Paralegal"
  nama: string;
  foto: Express.Multer.File;
  jabatan: string;
  deskripsi: string;
  kategori: Prisma.JsonValue;
  email: string;
  noTelp: string;
  note: string;
}

interface StatistikAdvokatParalegal {
  paralegal: string;
  kasusDitangani: string;
  advokatAktif: string;
  tingkatKepuasan: string;
  slogan: string;
  deskripsi: string;
}

class AdvokatParalegalService {
  async createAdvokatParalegal(data: AdvokatParalegal) {
    try {
      let fotoUrl;
      if (data.foto) {
        fotoUrl = await uploadToCloudinary(data.foto.buffer);
      }
      const createAdvokatParalegal = await prisma.advokatParalegal.create({
        data: {
          type: data.type,
          nama: data.nama,
          foto: fotoUrl,
          jabatan: data.jabatan,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          email: data.email,
          noTelp: data.noTelp,
          note: data.note,
        },
      });
      return createAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }

  async getAllAdvokatParalegal() {
    try {
      const getAllAdvokatParalegal = await prisma.advokatParalegal.findMany();
      return getAllAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }

  async updateAdvokatParalegal(id: number, data: AdvokatParalegal) {
    try {
      const updateAdvokatParalegal = await prisma.advokatParalegal.update({
        where: { id },
        data: {
          type: data.type,
          nama: data.nama,
          foto: data.foto,
          jabatan: data.jabatan,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          email: data.email,
          noTelp: data.noTelp,
          note: data.note,
        },
      });
      return updateAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }

  async deleteAdvokatParalegal(id: number) {
    try {
      const deleteAdvokatParalegal = await prisma.advokatParalegal.delete({
        where: { id },
      });
      return deleteAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikAdvokatParalegal(data: StatistikAdvokatParalegal) {
    try {
      const createStatistikAdvokatParalegal =
        await prisma.statistikAdvokatParalegal.create({
          data: {
            paralegal: data.paralegal,
            kasusDitangani: data.kasusDitangani,
            advokatAktif: data.advokatAktif,
            tingkatKepuasan: data.tingkatKepuasan,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createStatistikAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }

  async getAllStatistikAdvokatParalegal() {
    try {
      const getAllStatistikAdvokatParalegal =
        await prisma.statistikAdvokatParalegal.findMany();
      return getAllStatistikAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikAdvokatParalegal(
    id: number,
    data: StatistikAdvokatParalegal
  ) {
    try {
      const updateStatistikAdvokatParalegal =
        await prisma.statistikAdvokatParalegal.update({
          where: { id },
          data: {
            paralegal: data.paralegal,
            kasusDitangani: data.kasusDitangani,
            advokatAktif: data.advokatAktif,
            tingkatKepuasan: data.tingkatKepuasan,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return updateStatistikAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }

  async deleteStatistikAdvokatParalegal(id: number) {
    try {
      const deleteStatistikAdvokatParalegal =
        await prisma.statistikAdvokatParalegal.delete({
          where: { id },
        });
      return deleteStatistikAdvokatParalegal;
    } catch (error) {
      throw error;
    }
  }
}

export default new AdvokatParalegalService();
