import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";
import { uploadToCloudinary } from "../utils/cloudinary";
import { title } from "process";

interface SaksiAhli {
  nama: string;
  foto: Express.Multer.File;
  deskripsi: string;
  keahlian: Prisma.JsonValue[];
  bidangKeahlian: string; //Hukum Pidana, Hukum Perdata, Hukum Kommerial, Hukum Perdata
  kasusDitangani: string;
  email: string;
  noTelp: string;
}

interface ProsedurSaksiAhli {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  waktu: string;
}

interface StatistikSaksiAhli {
  keteranganAhli: string;
  tingkatPenerimaan: string;
  ahliBerpengalaman: string;
  profesional: string;
  slogan: string;
  deskripsi: string;
}
class SaksiAhliService {
  async createSaksiAhli(data: SaksiAhli) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createSaksiAhli = await prisma.saksiAhli.create({
        data: {
          nama: data.nama,
          foto: fotoUrl,
          deskripsi: data.deskripsi,
          keahlian: data.keahlian,
          bidangKeahlian: data.bidangKeahlian,
          kasusDitangani: data.kasusDitangani,
          email: data.email,
          noTelp: data.noTelp,
        },
      });
      return createSaksiAhli;
    } catch (error) {
      console.error("Error in createSaksiAhli:", error);
      return null;
    }
  }

  async getAllSaksiAhli() {
    try {
      const saksiAhli = await prisma.saksiAhli.findMany();
      return saksiAhli;
    } catch (error) {
      console.error("Error in getAllSaksiAhli:", error);
      return null;
    }
  }

  async updateSaksiAhli(id: number, data: SaksiAhli) {
    try {
      const updateData: any = {
        nama: data.nama,
        deskripsi: data.deskripsi,
        keahlian: data.keahlian,
        bidangKeahlian: data.bidangKeahlian,
        kasusDitangani: data.kasusDitangani,
        email: data.email,
        noTelp: data.noTelp,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const saksiAhli = await prisma.saksiAhli.update({
        where: { id },
        data: updateData,
      });

      return saksiAhli;
    } catch (error) {
      console.error("Error in updateSaksiAhli:", error);
      return null;
    }
  }

  async deleteSaksiAhli(id: number) {
    try {
      const deletedData = await prisma.saksiAhli.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      return null;
    }
  }

  async createProsedurSaksiAhli(data: ProsedurSaksiAhli) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const createProsedurSaksiAhli = await prisma.prosedurSaksiAhli.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          deskripsi: data.deskripsi,
          waktu: data.waktu,
        },
      });
      return createProsedurSaksiAhli;
    } catch (error) {
      console.error("Error in createProsedurSaksiAhli:", error);
      return null;
    }
  }

  async getAllProsedurSaksiAhli() {
    try {
      const prosedurSaksiAhli = await prisma.prosedurSaksiAhli.findMany();
      return prosedurSaksiAhli;
    } catch (error) {
      console.error("Error in getAllProsedurSaksiAhli:", error);
      return null;
    }
  }

  async updateProsedurSaksiAhli(id: number, data: ProsedurSaksiAhli) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        waktu: data.waktu,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const prosedurSaksiAhli = await prisma.prosedurSaksiAhli.update({
        where: { id },
        data: updateData,
      });

      return prosedurSaksiAhli;
    } catch (error) {
      console.error("Error in updateProsedurSaksiAhli:", error);
      return null;
    }
  }

  async deleteProsedurSaksiAhli(id: number) {
    try {
      const deletedData = await prisma.prosedurSaksiAhli.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      return null;
    }
  }

  async createStatistikSaksiAhli(data: StatistikSaksiAhli) {
    try {
      const createStatistikSaksiAhli = await prisma.statistikSaksiAhli.create({
        data: {
          keteranganAhli: data.keteranganAhli,
          tingkatPenerimaan: data.tingkatPenerimaan,
          ahliBerpengalaman: data.ahliBerpengalaman,
          profesional: data.profesional,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return createStatistikSaksiAhli;
    } catch (error) {
      console.error("Error in createStatistikSaksiAhli:", error);
      return null;
    }
  }

  async getAllStatistikSaksiAhli() {
    try {
      const statistikSaksiAhli = await prisma.statistikSaksiAhli.findMany();
      return statistikSaksiAhli;
    } catch (error) {
      console.error("Error in getAllStatistikSaksiAhli:", error);
      return null;
    }
  }

  async updateStatistikSaksiAhli(id: number, data: StatistikSaksiAhli) {
    try {
      const updateData: any = {
        keteranganAhli: data.keteranganAhli,
        tingkatPenerimaan: data.tingkatPenerimaan,
        ahliBerpengalaman: data.ahliBerpengalaman,
        profesional: data.profesional,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const statistikSaksiAhli = await prisma.statistikSaksiAhli.update({
        where: { id },
        data: updateData,
      });

      return statistikSaksiAhli;
    } catch (error) {
      console.error("Error in updateStatistikSaksiAhli:", error);
      return null;
    }
  }

  async deleteStatistikSaksiAhli(id: number) {
    try {
      const deletedData = await prisma.statistikSaksiAhli.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      return null;
    }
  }
}

export default new SaksiAhliService();
