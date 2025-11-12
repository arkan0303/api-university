import { title } from "process";
import { Prisma } from "prisma/prisma-client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface SidangSkripsi {
  title: string;
  kategori: Prisma.JsonValue[];
  foto: Express.Multer.File;
}

interface ProsedurSidangSkripsi {
  title: string;
  tahapan: string;
  waktu: string;
  deskripsi: string;
  foto: Express.Multer.File;
}

interface StatistikSidangSkripsi {
  sidangPerTahun: string;
  tingkatKelulusan: string;
  durasiSidang: string;
  timPenguji: string;
  slogan: string;
  deskripsi: string;
}

interface KriteriaSidangSkripsi {
  title: string;
  kriteria: Prisma.JsonValue[];
  skor: string;
}

class SidangSkripsiService {
  async createSidangSkripsi(sidangSkripsi: SidangSkripsi) {
    try {
      const fotoUrl = await uploadToCloudinary(sidangSkripsi.foto.buffer);
      const createdSidangSkripsi = await prisma.sidangSkripsi.create({
        data: {
          title: sidangSkripsi.title,
          kategori: sidangSkripsi.kategori,
          foto: fotoUrl,
        },
      });
      return createdSidangSkripsi;
    } catch (error) {
      console.error("Error in createSidangSkripsi:", error);
      throw error;
    }
  }

  async getAllSidangSkripsi() {
    try {
      const sidangSkripsi = await prisma.sidangSkripsi.findMany();
      return sidangSkripsi;
    } catch (error) {
      console.error("Error in getAllSidangSkripsi:", error);
      throw error;
    }
  }

  async updateSidangSkripsi(id: number, data: SidangSkripsi) {
    try {
      const updateData: any = {
        title: data.title,
        kategori: data.kategori,
        foto: data.foto,
      };
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }
      const updatedSidangSkripsi = await prisma.sidangSkripsi.update({
        where: { id },
        data: updateData,
      });
      return updatedSidangSkripsi;
    } catch (error) {
      console.error("Error in updateSeminarProposal:", error);
      throw error;
    }
  }

  async deleteSidangSkripsi(id: number) {
    try {
      const deletedSidangSkripsi = await prisma.sidangSkripsi.delete({
        where: { id },
      });
      return deletedSidangSkripsi;
    } catch (error) {
      console.error("Error in deleteSidangSkripsi:", error);
      throw error;
    }
  }

  async createProsedurSidangSkripsi(
    prosedurSidangSkripsi: ProsedurSidangSkripsi
  ) {
    try {
      const fotoUrl = await uploadToCloudinary(
        prosedurSidangSkripsi.foto.buffer
      );
      const createdProsedurSidangSkripsi =
        await prisma.prosedurSidangSkripsi.create({
          data: {
            title: prosedurSidangSkripsi.title,
            tahapan: prosedurSidangSkripsi.tahapan,
            deskripsi: prosedurSidangSkripsi.deskripsi,
            foto: fotoUrl,
          },
        });
      return createdProsedurSidangSkripsi;
    } catch (error) {
      console.error("Error in createProsedurSidangSkripsi:", error);
      throw error;
    }
  }

  async getAllProsedurSidangSkripsi() {
    try {
      const prosedurSidangSkripsi =
        await prisma.prosedurSidangSkripsi.findMany();
      return prosedurSidangSkripsi;
    } catch (error) {
      console.error("Error in getAllProsedurSidangSkripsi:", error);
      throw error;
    }
  }

  async updateProsedurSidangSkripsi(id: number, data: ProsedurSidangSkripsi) {
    try {
      const updateData: any = {
        title: data.title,
        tahapan: data.tahapan,
        deskripsi: data.deskripsi,
        foto: data.foto,
      };
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }
      const updatedProsedurSidangSkripsi =
        await prisma.prosedurSidangSkripsi.update({
          where: { id },
          data: updateData,
        });
      return updatedProsedurSidangSkripsi;
    } catch (error) {
      console.error("Error in updateProsedurSidangSkripsi:", error);
      throw error;
    }
  }

  async deleteProsedurSidangSkripsi(id: number) {
    try {
      const deletedProsedurSidangSkripsi =
        await prisma.prosedurSidangSkripsi.delete({
          where: { id },
        });
      return deletedProsedurSidangSkripsi;
    } catch (error) {
      console.error("Error in deleteProsedurSidangSkripsi:", error);
      throw error;
    }
  }

  async createStatistikSidangSkripsi(
    statistikSidangSkripsi: StatistikSidangSkripsi
  ) {
    try {
      const createdStatistikSidangSkripsi =
        await prisma.statistikSidangSkripsi.create({
          data: {
            sidangPerTahun: statistikSidangSkripsi.sidangPerTahun,
            tingkatKelulusan: statistikSidangSkripsi.tingkatKelulusan,
            durasiSidang: statistikSidangSkripsi.durasiSidang,
            timPenguji: statistikSidangSkripsi.timPenguji,
            slogan: statistikSidangSkripsi.slogan,
            deskripsi: statistikSidangSkripsi.deskripsi,
          },
        });
      return createdStatistikSidangSkripsi;
    } catch (error) {
      console.error("Error in createStatistikSidangSkripsi:", error);
      throw error;
    }
  }

  async getAllStatistikSidangSkripsi() {
    try {
      const statistikSidangSkripsi =
        await prisma.statistikSidangSkripsi.findMany();
      return statistikSidangSkripsi;
    } catch (error) {
      console.error("Error in getAllStatistikSidangSkripsi:", error);
      throw error;
    }
  }

  async updateStatistikSidangSkripsi(id: number, data: StatistikSidangSkripsi) {
    try {
      const updateData: any = {
        sidangPerTahun: data.sidangPerTahun,
        tingkatKelulusan: data.tingkatKelulusan,
        durasiSidang: data.durasiSidang,
        timPenguji: data.timPenguji,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };
      const updatedStatistikSidangSkripsi =
        await prisma.statistikSidangSkripsi.update({
          where: { id },
          data: updateData,
        });
      return updatedStatistikSidangSkripsi;
    } catch (error) {
      console.error("Error in updateStatistikSidangSkripsi:", error);
      throw error;
    }
  }

  async deleteStatistikSidangSkripsi(id: number) {
    try {
      const deletedStatistikSidangSkripsi =
        await prisma.statistikSidangSkripsi.delete({
          where: { id },
        });
      return deletedStatistikSidangSkripsi;
    } catch (error) {
      console.error("Error in deleteStatistikSidangSkripsi:", error);
      throw error;
    }
  }

  async createKriteriaSidangSkripsi(
    kriteriaSidangSkripsi: KriteriaSidangSkripsi
  ) {
    try {
      const createdKriteriaSidangSkripsi =
        await prisma.kriteriaSidangSkripsi.create({
          data: {
            title: kriteriaSidangSkripsi.title,
            kriteria: kriteriaSidangSkripsi.kriteria,
            skor: kriteriaSidangSkripsi.skor,
          },
        });
      return createdKriteriaSidangSkripsi;
    } catch (error) {
      console.error("Error in createKriteriaSidangSkripsi:", error);
      throw error;
    }
  }

  async getAllKriteriaSidangSkripsi() {
    try {
      const kriteriaSidangSkripsi =
        await prisma.kriteriaSidangSkripsi.findMany();
      return kriteriaSidangSkripsi;
    } catch (error) {
      console.error("Error in getAllKriteriaSidangSkripsi:", error);
      throw error;
    }
  }

  async updateKriteriaSidangSkripsi(id: number, data: KriteriaSidangSkripsi) {
    try {
      const updateData: any = {
        title: data.title,
        kriteria: data.kriteria,
        skor: data.skor,
      };
      const updatedKriteriaSidangSkripsi =
        await prisma.kriteriaSidangSkripsi.update({
          where: { id },
          data: updateData,
        });
      return updatedKriteriaSidangSkripsi;
    } catch (error) {
      console.error("Error in updateKriteriaSidangSkripsi:", error);
      throw error;
    }
  }

  async deleteKriteriaSidangSkripsi(id: number) {
    try {
      const deletedKriteriaSidangSkripsi =
        await prisma.kriteriaSidangSkripsi.delete({
          where: { id },
        });
      return deletedKriteriaSidangSkripsi;
    } catch (error) {
      console.error("Error in deleteKriteriaSidangSkripsi:", error);
      throw error;
    }
  }
}

export default new SidangSkripsiService();
