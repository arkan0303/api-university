import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface ProgramSarjanaHukum {
  mata_kuliah: string;
  semester: string;
  kode_matkul: string;
  bobot: string;
  dokumen_rps: Express.Multer.File;
  penyelenggara: string;
}

interface StatistikProgramSarjanaHukum {
  semester: string;
  sksTotal: string;
  akreditasi: string;
  alumni: string;
  slogan: string;
  deskripsi: string;
}

interface ProspekKarirSarjanaHukum {
  judul: string;
  deskripsi: string;
}

class ProgramSarjanaHukumService {
  async createProgramSarjanaHukum(data: ProgramSarjanaHukum) {
    try {
      const dokumenRpsUrl = await uploadToCloudinary(data.dokumen_rps.buffer);

      const result = await prisma.programSarjanaHukum.create({
        data: {
          mata_kuliah: data.mata_kuliah,
          semester: data.semester,
          kode_matkul: data.kode_matkul,
          bobot: data.bobot,
          penyelenggara: data.penyelenggara,
          dokumen_rps: dokumenRpsUrl,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createProgramSarjanaHukum:", error);
      throw error;
    }
  }

  async getAllProgramSarjanaHukum() {
    try {
      const programSarjanaHukum = await prisma.programSarjanaHukum.findMany();
      return programSarjanaHukum;
    } catch (error) {
      console.error("Error in getAllProgramSarjanaHukum:", error);
      throw error;
    }
  }

  async updateProgramSarjanaHukum(
    id: number,
    data: ProgramSarjanaHukum & { dokumen_rps?: Express.Multer.File }
  ) {
    try {
      const updateData: any = {
        mata_kuliah: data.mata_kuliah,
        semester: data.semester,
        kode_matkul: data.kode_matkul,
        bobot: data.bobot,
        penyelenggara: data.penyelenggara,
        dokumen_rps: data.dokumen_rps,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.dokumen_rps) {
        const dokumenRpsUrl = await uploadToCloudinary(data.dokumen_rps.buffer);
        updateData.dokumen_rps = dokumenRpsUrl;
      }

      const updatedProgramSarjanaHukum =
        await prisma.programSarjanaHukum.update({
          where: { id },
          data: updateData,
        });

      return updatedProgramSarjanaHukum;
    } catch (error) {
      console.error("Error in updateProgramSarjanaHukum:", error);
      throw error;
    }
  }

  async deleteProgramSarjanaHukum(id: number) {
    try {
      const deletedData = await prisma.programSarjanaHukum.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createStatistikProgramSarjanaHukum(data: StatistikProgramSarjanaHukum) {
    try {
      const result = await prisma.statistikProgramSarjanaHukum.create({
        data: {
          semester: data.semester,
          sksTotal: data.sksTotal,
          akreditasi: data.akreditasi,
          alumni: data.alumni,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createStatistikProgramSarjanaHukum:", error);
      throw error;
    }
  }

  async getAllStatistikProgramSarjanaHukum() {
    try {
      const statistikProgramSarjanaHukum =
        await prisma.statistikProgramSarjanaHukum.findMany();
      return statistikProgramSarjanaHukum;
    } catch (error) {
      console.error("Error in getAllStatistikProgramSarjanaHukum:", error);
      throw error;
    }
  }

  async updateStatistikProgramSarjanaHukum(
    id: number,
    data: StatistikProgramSarjanaHukum
  ) {
    try {
      const updatedData = await prisma.statistikProgramSarjanaHukum.update({
        where: { id },
        data: data,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateStatistikProgramSarjanaHukum:", error);
      throw error;
    }
  }

  async deleteStatistikProgramSarjanaHukum(id: number) {
    try {
      const deletedData = await prisma.statistikProgramSarjanaHukum.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createProspekKarirSarjanaHukum(data: ProspekKarirSarjanaHukum) {
    try {
      const result = await prisma.prospekKarirSarjanaHukum.create({
        data: {
          judul: data.judul,
          deskripsi: data.deskripsi,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createProspekKarirSarjanaHukum:", error);
      throw error;
    }
  }

  async getAllProspekKarirSarjanaHukum() {
    try {
      const prospekKarirSarjanaHukum =
        await prisma.prospekKarirSarjanaHukum.findMany();
      return prospekKarirSarjanaHukum;
    } catch (error) {
      console.error("Error in getAllProspekKarirSarjanaHukum:", error);
      throw error;
    }
  }

  async updateProspekKarirSarjanaHukum(
    id: number,
    data: ProspekKarirSarjanaHukum
  ) {
    try {
      const updatedData = await prisma.prospekKarirSarjanaHukum.update({
        where: { id },
        data: data,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateProspekKarirSarjanaHukum:", error);
      throw error;
    }
  }

  async deleteProspekKarirSarjanaHukum(id: number) {
    try {
      const deletedData = await prisma.prospekKarirSarjanaHukum.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }
}

export default new ProgramSarjanaHukumService();
