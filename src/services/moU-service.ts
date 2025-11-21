import prisma from "../db/prisma";

interface MoU {
  title: string;
  partnerInstitution: string;
  partnerType: string;
  signingDate: string;
  expiryDate: string;
  mouNumber: string;
  scope: string;
  status: string;
  duration: string;
  objectives: string;
  contactPerson: string;
  description: string;
  implementation: string;
  benefits: string;
}

interface statistikMoU {
  totalMoU: string;
  aktif: string;
  dalamProses: string;
  tidakAktif: string;
}

class MoUService {
  async createMoU(data: MoU) {
    try {
      const newMoU = await prisma.moU.create({
        data: data,
      });
      return newMoU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getMoU() {
    try {
      const moU = await prisma.moU.findMany();
      return moU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateMoU(id: number, data: MoU) {
    try {
      const updatedMoU = await prisma.moU.update({
        where: {
          id: id,
        },
        data: data,
      });
      return updatedMoU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteMoU(id: number) {
    try {
      const deletedMoU = await prisma.moU.delete({
        where: {
          id: id,
        },
      });
      return deletedMoU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createStatistikMoU(data: statistikMoU) {
    try {
      const newStatistikMoU = await prisma.statistikMoU.create({
        data: data,
      });
      return newStatistikMoU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStatistikMoU() {
    try {
      const statistikMoU = await prisma.statistikMoU.findMany();
      return statistikMoU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStatistikMoU(id: number, data: statistikMoU) {
    try {
      const updatedStatistikMoU = await prisma.statistikMoU.update({
        where: {
          id: id,
        },
        data: data,
      });
      return updatedStatistikMoU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteStatistikMoU(id: number) {
    try {
      const deletedStatistikMoU = await prisma.statistikMoU.delete({
        where: {
          id: id,
        },
      });
      return deletedStatistikMoU;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new MoUService();
