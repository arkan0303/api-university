import prisma from "../db/prisma";

interface MoA {
  title: string;
  agreementNumber: string;
  parties: string;
  signingDate: string;
  effectiveDate: string;
  agreementType: string;
  scope: string;
  status: string;
  duration: string;
  objectives: string;
  responsibilities: string;
  financialTerms: string;
  terminationClause: string;
  description: string;
  implementation: string;
  benefits: string;
}

interface statistikMoA {
  totalMoA: string;
  aktif: string;
  dalamProses: string;
  tidakAktif: string;
}

class MoAService {
  async createMoA(data: MoA) {
    try {
      const newMoA = await prisma.moA.create({
        data: data,
      });
      return newMoA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getMoA() {
    try {
      const moA = await prisma.moA.findMany();
      return moA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateMoA(id: number, data: MoA) {
    try {
      const updatedMoA = await prisma.moA.update({
        where: {
          id: id,
        },
        data: data,
      });
      return updatedMoA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteMoA(id: number) {
    try {
      const deletedMoA = await prisma.moA.delete({
        where: {
          id: id,
        },
      });
      return deletedMoA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createStatistikMoA(data: statistikMoA) {
    try {
      const newStatistikMoA = await prisma.statistikMoA.create({
        data: data,
      });
      return newStatistikMoA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStatistikMoA() {
    try {
      const statistikMoA = await prisma.statistikMoA.findMany();
      return statistikMoA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStatistikMoA(id: number, data: statistikMoA) {
    try {
      const updatedStatistikMoA = await prisma.statistikMoA.update({
        where: {
          id: id,
        },
        data: data,
      });
      return updatedStatistikMoA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteStatistikMoA(id: number) {
    try {
      const deletedStatistikMoA = await prisma.statistikMoA.delete({
        where: {
          id: id,
        },
      });
      return deletedStatistikMoA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new MoAService();
