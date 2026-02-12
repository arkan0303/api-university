import { title } from "process";
import { Prisma } from "prisma/prisma-client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface SeminarProposal {
  title: string;
  kategori: Prisma.JsonValue[];
  foto?: Express.Multer.File;
}

interface SopPendaftaran {
  tahapan: string;
  deskripsi: string;
}

interface StatistikSeminarProposal {
  seminarPerTahun: string;
  tingkatKelulusan: string;
  bulanPersiapan: string;
  timPenguji: string;
  slogan: string;
  deskripsi: string;
}

class SeminarProposalService {
  async createSeminarProposal(seminarProposal: SeminarProposal) {
    try {
      let fotoUrl = null;
      if (seminarProposal.foto) {
        fotoUrl = await uploadToCloudinary(seminarProposal.foto.buffer);
      }
      const createdSeminarProposal = await prisma.seminarProposal.create({
        data: {
          title: seminarProposal.title,
          kategori: seminarProposal.kategori,
          foto: fotoUrl,
        },
      });
      return createdSeminarProposal;
    } catch (error) {
      console.error("Error in createSeminarProposal:", error);
      throw error;
    }
  }

  async getAllSeminarProposal() {
    try {
      const seminarProposal = await prisma.seminarProposal.findMany();
      return seminarProposal;
    } catch (error) {
      console.error("Error in getAllSeminarProposal:", error);
      throw error;
    }
  }

  async updateSeminarProposal(id: number, data: SeminarProposal) {
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
      const updatedSeminarProposal = await prisma.seminarProposal.update({
        where: { id },
        data: updateData,
      });
      return updatedSeminarProposal;
    } catch (error) {
      console.error("Error in updateSeminarProposal:", error);
      throw error;
    }
  }

  async deleteSeminarProposal(id: number) {
    try {
      const deletedSeminarProposal = await prisma.seminarProposal.delete({
        where: { id },
      });
      return deletedSeminarProposal;
    } catch (error) {
      console.error("Error in deleteSeminarProposal:", error);
      throw error;
    }
  }

  async createProsedurPelaksanaan(sopPendaftaran: SopPendaftaran) {
    try {
      const createdProsedurPelaksanaan = await prisma.soppendaftaran.create({
        data: {
          tahapan: sopPendaftaran.tahapan,
          deskripsi: sopPendaftaran.deskripsi,
          updatedAt: new Date(),
          createdAt: new Date(),
        },
      });
      return createdProsedurPelaksanaan;
    } catch (error) {
      console.error("Error in createProsedurPelaksanaan:", error);
      throw error;
    }
  }

  async getAllProsedurPelaksanaan() {
    try {
      const prosedurPelaksanaan = await prisma.soppendaftaran.findMany();
      return prosedurPelaksanaan;
    } catch (error) {
      console.error("Error in getAllProsedurPelaksanaan:", error);
      throw error;
    }
  }

  async updateProsedurPelaksanaan(id: number, data: SopPendaftaran) {
    try {
      const updateData: any = {
        tahapan: data.tahapan,
        deskripsi: data.deskripsi,
      };
      const updatedProsedurPelaksanaan = await prisma.soppendaftaran.update({
        where: { id },
        data: updateData,
      });
      return updatedProsedurPelaksanaan;
    } catch (error) {
      console.error("Error in updateProsedurPelaksanaan:", error);
      throw error;
    }
  }

  async deleteProsedurPelaksanaan(id: number) {
    try {
      const deletedProsedurPelaksanaan = await prisma.soppendaftaran.delete({
        where: { id },
      });
      return deletedProsedurPelaksanaan;
    } catch (error) {
      console.error("Error in deleteProsedurPelaksanaan:", error);
      throw error;
    }
  }

  async createStatistikSeminarProposal(
    statistikSeminarProposal: StatistikSeminarProposal,
  ) {
    try {
      const createdStatistikSeminarProposal =
        await prisma.statistikSeminarProposal.create({
          data: {
            seminarPerTahun: statistikSeminarProposal.seminarPerTahun,
            tingkatKelulusan: statistikSeminarProposal.tingkatKelulusan,
            bulanPersiapan: statistikSeminarProposal.bulanPersiapan,
            timPenguji: statistikSeminarProposal.timPenguji,
            slogan: statistikSeminarProposal.slogan,
            deskripsi: statistikSeminarProposal.deskripsi,
          },
        });
      return createdStatistikSeminarProposal;
    } catch (error) {
      console.error("Error in createStatistikSeminarProposal:", error);
      throw error;
    }
  }

  async getAllStatistikSeminarProposal() {
    try {
      const statistikSeminarProposal =
        await prisma.statistikSeminarProposal.findMany();
      return statistikSeminarProposal;
    } catch (error) {
      console.error("Error in getAllStatistikSeminarProposal:", error);
      throw error;
    }
  }

  async updateStatistikSeminarProposal(
    id: number,
    data: StatistikSeminarProposal,
  ) {
    try {
      const updateData: any = {
        seminarPerTahun: data.seminarPerTahun,
        tingkatKelulusan: data.tingkatKelulusan,
        bulanPersiapan: data.bulanPersiapan,
        timPenguji: data.timPenguji,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };
      const updatedStatistikSeminarProposal =
        await prisma.statistikSeminarProposal.update({
          where: { id },
          data: updateData,
        });
      return updatedStatistikSeminarProposal;
    } catch (error) {
      console.error("Error in updateStatistikSeminarProposal:", error);
      throw error;
    }
  }

  async deleteStatistikSeminarProposal(id: number) {
    try {
      const deletedStatistikSeminarProposal =
        await prisma.statistikSeminarProposal.delete({
          where: { id },
        });
      return deletedStatistikSeminarProposal;
    } catch (error) {
      console.error("Error in deleteStatistikSeminarProposal:", error);
      throw error;
    }
  }
}

export default new SeminarProposalService();
