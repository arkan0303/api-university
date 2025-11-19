import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface BeasiswaKIP {
  manfaat: Prisma.JsonValue[];
  judulPersyaratan: string;
  persyaratan: Prisma.JsonValue[];
}

interface TimelineBeasiswaKIP {
  title: string;
  waktu: string; // 1 Mei - 30 Juni 2025
  deskripsi: string;
}

interface StatistikBeasiswaKIP {
  nilaiBeasiswa: string;
  durasi: string;
  kuota: string;
  deadline: string;
  slogan: string;
  deskripsi: string;
}

class BeasiswaKIPService {
  async createBeasiswaKIP(data: BeasiswaKIP) {
    try {
      const createBeasiswaKIPi = await prisma.beasiswaKIPKemendiksaintek.create(
        {
          data: {
            manfaat: data.manfaat,
            judulPersyaratan: data.judulPersyaratan,
            persyaratan: data.persyaratan,
          },
        }
      );
      return createBeasiswaKIPi;
    } catch (error) {
      console.error("Error in createBeasiswaKIP:", error);
      throw error;
    }
  }

  async getAllBeasiswaKIP() {
    try {
      const getAllBeasiswaKIP =
        await prisma.beasiswaKIPKemendiksaintek.findMany();
      return getAllBeasiswaKIP;
    } catch (error) {
      console.error("Error in getAllBeasiswaKIP:", error);
      throw error;
    }
  }

  async updateBeasiswaKIP(id: number, data: BeasiswaKIP) {
    try {
      const updateBeasiswaKIPi = await prisma.beasiswaKIPKemendiksaintek.update(
        {
          where: {
            id,
          },
          data: {
            manfaat: data.manfaat,
            judulPersyaratan: data.judulPersyaratan,
            persyaratan: data.persyaratan,
          },
        }
      );
      return updateBeasiswaKIPi;
    } catch (error) {
      console.error("Error in updateBeasiswaKIP:", error);
      throw error;
    }
  }

  async deleteBeasiswaKIP(id: number) {
    try {
      const deleteBeasiswaKIPi = await prisma.beasiswaKIPKemendiksaintek.delete(
        {
          where: {
            id,
          },
        }
      );
      return deleteBeasiswaKIPi;
    } catch (error) {
      console.error("Error in deleteBeasiswaKIP:", error);
      throw error;
    }
  }

  async createTimelineBeasiswaKIP(data: TimelineBeasiswaKIP) {
    try {
      const createTimelineBeasiswaKIPi =
        await prisma.timelineBeasiswaKIPKemendiksaintek.create({
          data,
        });
      return createTimelineBeasiswaKIPi;
    } catch (error) {
      console.error("Error in createTimelineBeasiswaKIP:", error);
      throw error;
    }
  }

  async getAllTimelineBeasiswaKIP() {
    try {
      const getAllTimelineBeasiswaKIP =
        await prisma.timelineBeasiswaKIPKemendiksaintek.findMany();
      return getAllTimelineBeasiswaKIP;
    } catch (error) {
      console.error("Error in getAllTimelineBeasiswaKIP:", error);
      throw error;
    }
  }

  async updateTimelineBeasiswaKIP(id: number, data: TimelineBeasiswaKIP) {
    try {
      const updateTimelineBeasiswaKIPi =
        await prisma.timelineBeasiswaKIPKemendiksaintek.update({
          where: {
            id,
          },
          data,
        });
      return updateTimelineBeasiswaKIPi;
    } catch (error) {
      console.error("Error in updateTimelineBeasiswaKIP:", error);
      throw error;
    }
  }

  async deleteTimelineBeasiswaKIP(id: number) {
    try {
      const deleteTimelineBeasiswaKIPi =
        await prisma.timelineBeasiswaKIPKemendiksaintek.delete({
          where: {
            id,
          },
        });
      return deleteTimelineBeasiswaKIPi;
    } catch (error) {
      console.error("Error in deleteTimelineBeasiswaKIP:", error);
      throw error;
    }
  }

  async createStatistikBeasiswaKIP(data: StatistikBeasiswaKIP) {
    try {
      const createStatistikBeasiswaKIPi =
        await prisma.statistikBeasiswaKIPKemendiksaintek.create({
          data,
        });
      return createStatistikBeasiswaKIPi;
    } catch (error) {
      console.error("Error in createStatistikBeasiswaKIP:", error);
      throw error;
    }
  }

  async getAllStatistikBeasiswaKIP() {
    try {
      const getAllStatistikBeasiswaKIP =
        await prisma.statistikBeasiswaKIPKemendiksaintek.findMany();
      return getAllStatistikBeasiswaKIP;
    } catch (error) {
      console.error("Error in getAllStatistikBeasiswaKIP:", error);
      throw error;
    }
  }

  async updateStatistikBeasiswaKIP(id: number, data: StatistikBeasiswaKIP) {
    try {
      const updateStatistikBeasiswaKIPi =
        await prisma.statistikBeasiswaKIPKemendiksaintek.update({
          where: {
            id,
          },
          data,
        });
      return updateStatistikBeasiswaKIPi;
    } catch (error) {
      console.error("Error in updateStatistikBeasiswaKIP:", error);
      throw error;
    }
  }

  async deleteStatistikBeasiswaKIP(id: number) {
    try {
      const deleteStatistikBeasiswaKIPi =
        await prisma.statistikBeasiswaKIPKemendiksaintek.delete({
          where: {
            id,
          },
        });
      return deleteStatistikBeasiswaKIPi;
    } catch (error) {
      console.error("Error in deleteStatistikBeasiswaKIP:", error);
      throw error;
    }
  }
}

export default new BeasiswaKIPService();
