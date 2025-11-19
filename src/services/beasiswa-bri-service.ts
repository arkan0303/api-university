import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface BeasiswaBri {
  tentangProgram: string;
  manfaat: Prisma.JsonValue[];
  judulPersyaratan: string;
  persyaratan: Prisma.JsonValue[];
}

interface TimelineBeasiswaBri {
  title: string;
  waktu: string; // 1 Mei - 30 Juni 2025
  deskripsi: string;
}

interface StatistikBeasiswaBri {
  nilaiBeasiswa: string;
  durasi: string;
  kuota: string;
  deadline: string;
  slogan: string;
  deskripsi: string;
}

class BeasiswaBriService {
  async createBeasiswaBri(data: BeasiswaBri) {
    try {
      const createBeasiswaBrii = await prisma.beasiswaBri.create({
        data: {
          tentangProgram: data.tentangProgram,
          manfaat: data.manfaat,
          judulPersyaratan: data.judulPersyaratan,
          persyaratan: data.persyaratan,
        },
      });
      return createBeasiswaBrii;
    } catch (error) {
      console.error("Error in createBeasiswaBri:", error);
      throw error;
    }
  }

  async getAllBeasiswaBri() {
    try {
      const getAllBeasiswaBri = await prisma.beasiswaBri.findMany();
      return getAllBeasiswaBri;
    } catch (error) {
      console.error("Error in getAllBeasiswaBri:", error);
      throw error;
    }
  }

  async updateBeasiswaBri(id: number, data: BeasiswaBri) {
    try {
      const updateBeasiswaBrii = await prisma.beasiswaBri.update({
        where: {
          id,
        },
        data: {
          tentangProgram: data.tentangProgram,
          manfaat: data.manfaat,
          judulPersyaratan: data.judulPersyaratan,
          persyaratan: data.persyaratan,
        },
      });
      return updateBeasiswaBrii;
    } catch (error) {
      console.error("Error in updateBeasiswaBri:", error);
      throw error;
    }
  }

  async deleteBeasiswaBri(id: number) {
    try {
      const deleteBeasiswaBrii = await prisma.beasiswaBri.delete({
        where: {
          id,
        },
      });
      return deleteBeasiswaBrii;
    } catch (error) {
      console.error("Error in deleteBeasiswaBri:", error);
      throw error;
    }
  }

  async createTimelineBeasiswaBri(data: TimelineBeasiswaBri) {
    try {
      const createTimelineBeasiswaBrii =
        await prisma.timelineBeasiswaBri.create({
          data,
        });
      return createTimelineBeasiswaBrii;
    } catch (error) {
      console.error("Error in createTimelineBeasiswaBri:", error);
      throw error;
    }
  }

  async getAllTimelineBeasiswaBri() {
    try {
      const getAllTimelineBeasiswaBri =
        await prisma.timelineBeasiswaBri.findMany();
      return getAllTimelineBeasiswaBri;
    } catch (error) {
      console.error("Error in getAllTimelineBeasiswaBri:", error);
      throw error;
    }
  }

  async updateTimelineBeasiswaBri(id: number, data: TimelineBeasiswaBri) {
    try {
      const updateTimelineBeasiswaBrii =
        await prisma.timelineBeasiswaBri.update({
          where: {
            id,
          },
          data,
        });
      return updateTimelineBeasiswaBrii;
    } catch (error) {
      console.error("Error in updateTimelineBeasiswaBri:", error);
      throw error;
    }
  }

  async deleteTimelineBeasiswaBri(id: number) {
    try {
      const deleteTimelineBeasiswaBrii =
        await prisma.timelineBeasiswaBri.delete({
          where: {
            id,
          },
        });
      return deleteTimelineBeasiswaBrii;
    } catch (error) {
      console.error("Error in deleteTimelineBeasiswaBri:", error);
      throw error;
    }
  }

  async createStatistikBeasiswaBri(data: StatistikBeasiswaBri) {
    try {
      const createStatistikBeasiswaBrii =
        await prisma.statistikBeasiswaBri.create({
          data,
        });
      return createStatistikBeasiswaBrii;
    } catch (error) {
      console.error("Error in createStatistikBeasiswaBri:", error);
      throw error;
    }
  }

  async getAllStatistikBeasiswaBri() {
    try {
      const getAllStatistikBeasiswaBri =
        await prisma.statistikBeasiswaBri.findMany();
      return getAllStatistikBeasiswaBri;
    } catch (error) {
      console.error("Error in getAllStatistikBeasiswaBri:", error);
      throw error;
    }
  }

  async updateStatistikBeasiswaBri(id: number, data: StatistikBeasiswaBri) {
    try {
      const updateStatistikBeasiswaBrii =
        await prisma.statistikBeasiswaBri.update({
          where: {
            id,
          },
          data,
        });
      return updateStatistikBeasiswaBrii;
    } catch (error) {
      console.error("Error in updateStatistikBeasiswaBri:", error);
      throw error;
    }
  }

  async deleteStatistikBeasiswaBri(id: number) {
    try {
      const deleteStatistikBeasiswaBrii =
        await prisma.statistikBeasiswaBri.delete({
          where: {
            id,
          },
        });
      return deleteStatistikBeasiswaBrii;
    } catch (error) {
      console.error("Error in deleteStatistikBeasiswaBri:", error);
      throw error;
    }
  }
}

export default new BeasiswaBriService();
