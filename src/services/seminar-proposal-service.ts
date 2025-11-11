import { title } from "process";
import { Prisma } from "prisma/prisma-client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface SeminarProposal {
  title: string;
  kategori: Prisma.JsonValue[];
  foto: Express.Multer.File;
}

interface ProsedurPelaksanaan {
  title: string;
  tahapan: string;
  waktu: string;
  deskripsi: string;
  foto: Express.Multer.File;
}

class SeminarProposalService {
  async createSeminarProposal(seminarProposal: SeminarProposal) {
    try {
      const fotoUrl = await uploadToCloudinary(seminarProposal.foto.buffer);
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

  async createProsedurPelaksanaan(prosedurPelaksanaan: ProsedurPelaksanaan) {
    try {
      const fotoUrl = await uploadToCloudinary(prosedurPelaksanaan.foto.buffer);
      const createdProsedurPelaksanaan =
        await prisma.prosedurPelaksanaan.create({
          data: {
            title: prosedurPelaksanaan.title,
            tahapan: prosedurPelaksanaan.tahapan,
            waktu: prosedurPelaksanaan.waktu,
            deskripsi: prosedurPelaksanaan.deskripsi,
            foto: fotoUrl,
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
      const prosedurPelaksanaan = await prisma.prosedurPelaksanaan.findMany();
      return prosedurPelaksanaan;
    } catch (error) {
      console.error("Error in getAllProsedurPelaksanaan:", error);
      throw error;
    }
  }

  async updateProsedurPelaksanaan(id: number, data: ProsedurPelaksanaan) {
    try {
      const updateData: any = {
        title: data.title,
        tahapan: data.tahapan,
        waktu: data.waktu,
        deskripsi: data.deskripsi,
        foto: data.foto,
      };
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }
      const updatedProsedurPelaksanaan =
        await prisma.prosedurPelaksanaan.update({
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
      const deletedProsedurPelaksanaan =
        await prisma.prosedurPelaksanaan.delete({
          where: { id },
        });
      return deletedProsedurPelaksanaan;
    } catch (error) {
      console.error("Error in deleteProsedurPelaksanaan:", error);
      throw error;
    }
  }
}

export default new SeminarProposalService();
