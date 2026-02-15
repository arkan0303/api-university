import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface ProgramMagisterHukum {
  mata_kuliah: string;
  semester: string;
  kode_matkul: string;
  bobot: string;
  dokumen_rps: Express.Multer.File;
  penyelenggara: string;
}

interface StatistikProgramMagisterHukum {
  semester: string;
  sksTotal: string;
  akreditasi: string;
  alumni: string;
  slogan: string;
  deskripsi: string;
}

interface ProspekKarirMagisterHukum {
  judul: string;
  deskripsi: string;
  image: Express.Multer.File;
}

class ProgramMagisterHukumService {
  async createProgramMagisterHukum(data: ProgramMagisterHukum) {
    try {
      let dokumenRpsUrl = null;
      if (data.dokumen_rps) {
        dokumenRpsUrl = await uploadToCloudinary(data.dokumen_rps.buffer);
      }
      const result = await prisma.programMagisterHukum.create({
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

  async getAllProgramMagisterHukum() {
    try {
      const programMagisterHukum = await prisma.programMagisterHukum.findMany();
      return programMagisterHukum;
    } catch (error) {
      console.error("Error in getAllProgramMagisterHukum:", error);
      throw error;
    }
  }

  async updateProgramMagisterHukum(
    id: number,
    data: ProgramMagisterHukum & { image?: Express.Multer.File[] },
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
      const updatedStrategis = await prisma.programMagisterHukum.update({
        where: { id },
        data: updateData,
      });

      return updatedStrategis;
    } catch (error) {
      console.error("Error in updateProgramSarjanaHukum:", error);
      throw error;
    }
  }

  async deleteProgramMagisterHukum(id: number) {
    try {
      const deletedData = await prisma.programMagisterHukum.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createStatistikProgramMagisterHukum(
    data: StatistikProgramMagisterHukum,
  ) {
    try {
      const result = await prisma.statistikProgramMagisterHukum.create({
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
      console.error("Error in createStatistikProgramMagisterHukum:", error);
      throw error;
    }
  }

  async getAllStatistikProgramMagisterHukum() {
    try {
      const statistikProgramMagisterHukum =
        await prisma.statistikProgramMagisterHukum.findMany();
      return statistikProgramMagisterHukum;
    } catch (error) {
      console.error("Error in getAllStatistikProgramMagisterHukum:", error);
      throw error;
    }
  }

  async updateStatistikProgramMagisterHukum(
    id: number,
    data: StatistikProgramMagisterHukum,
  ) {
    try {
      const updatedData = await prisma.statistikProgramMagisterHukum.update({
        where: { id },
        data: data,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateStatistikProgramMagisterHukum:", error);
      throw error;
    }
  }

  async deleteStatistikProgramMagisterHukum(id: number) {
    try {
      const deletedData = await prisma.statistikProgramMagisterHukum.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createProspekKarirMagisterHukum(data: ProspekKarirMagisterHukum) {
    try {
      const fotoUrl = await uploadToCloudinary(data.image.buffer);
      const result = await prisma.prospekKarirMagisterHukum.create({
        data: {
          judul: data.judul,
          deskripsi: data.deskripsi,
          image: fotoUrl,
        },
      });
      return result;
    } catch (error) {
      console.error("Error in createProspekKarirMagisterHukum:", error);
      throw error;
    }
  }

  async getAllProspekKarirMagisterHukum() {
    try {
      const prospekKarirMagisterHukum =
        await prisma.prospekKarirMagisterHukum.findMany();
      return prospekKarirMagisterHukum;
    } catch (error) {
      console.error("Error in getAllProspekKarirMagisterHukum:", error);
      throw error;
    }
  }

  async updateProspekKarirMagisterHukum(
    id: number,
    data: ProspekKarirMagisterHukum & { image?: Express.Multer.File },
  ) {
    try {
      const updateData: any = {
        judul: data.judul,
        deskripsi: data.deskripsi,
        image: data.image,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.image) {
        const fotoUrl = await uploadToCloudinary(data.image.buffer);
        updateData.image = fotoUrl;
      }

      const updatedData = await prisma.prospekKarirMagisterHukum.update({
        where: { id },
        data: updateData,
      });
      return updatedData;
    } catch (error) {
      console.error("Error in updateProspekKarirMagisterHukum:", error);
      throw error;
    }
  }

  async deleteProspekKarirMagisterHukum(id: number) {
    try {
      const deletedData = await prisma.prospekKarirMagisterHukum.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }
}

export default new ProgramMagisterHukumService();
