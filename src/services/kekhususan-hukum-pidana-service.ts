import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface KekhususanHukumPidana {
  foto: Express.Multer.File;
  semester: string;
  sks: string;
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
}

interface ProspekKarir {
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
}

interface StatistikKekhususanHukumPidana {
  sks: string;
  mahasiswaAktif: string;
  tingkatKelulusan: string;
  alumniProfesional: string;
  slogan: string;
  deskripsi: string;
}

class KekhususanHukumPidanaService {
  async createKekhususanHukumPidana(data: KekhususanHukumPidana) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const kekhususanHukumPidana = await prisma.kekhususanHukumPidana.create({
        data: {
          foto: fotoUrl,
          semester: data.semester,
          sks: data.sks,
          title: data.title,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
        },
      });

      return kekhususanHukumPidana;
    } catch (error) {
      throw error;
    }
  }

  async getAllKekhususanHukumPidana() {
    try {
      const kekhususanHukumPidanaa =
        await prisma.kekhususanHukumPidana.findMany();
      return kekhususanHukumPidanaa;
    } catch (error) {
      throw error;
    }
  }

  async updateKekhususanHukumPidana(id: number, data: KekhususanHukumPidana) {
    try {
      const updateData: any = {
        semester: data.semester,
        sks: data.sks,
        title: data.title,
        deskripsi: data.deskripsi,
        kategori: data.kategori,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedKekhususanHukumPidana =
        await prisma.kekhususanHukumPidana.update({
          where: { id },
          data: updateData,
        });

      return updatedKekhususanHukumPidana;
    } catch (error) {
      throw error;
    }
  }

  async deleteKekhususanHukumPidana(id: number) {
    try {
      const deletedKekhususanHukumPidana =
        await prisma.kekhususanHukumPidana.delete({
          where: { id },
        });
      return deletedKekhususanHukumPidana;
    } catch (error) {
      throw error;
    }
  }

  async createProspekKarir(data: ProspekKarir) {
    try {
      const createdProspekKarir = await prisma.prospekKarir.create({
        data: {
          title: data.title,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
        },
      });
      return createdProspekKarir;
    } catch (error) {
      throw error;
    }
  }

  async getAllProspekKarir() {
    try {
      const prospekKarir = await prisma.prospekKarir.findMany();
      return prospekKarir;
    } catch (error) {
      throw error;
    }
  }

  async updateProspekKarir(id: number, data: ProspekKarir) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        kategori: data.kategori,
      };

      const updatedProspekKarir = await prisma.prospekKarir.update({
        where: { id },
        data: updateData,
      });

      return updatedProspekKarir;
    } catch (error) {
      throw error;
    }
  }

  async deleteProspekKarir(id: number) {
    try {
      const deletedProspekKarir = await prisma.prospekKarir.delete({
        where: { id },
      });
      return deletedProspekKarir;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikKekhususanHukumPidana(
    data: StatistikKekhususanHukumPidana
  ) {
    try {
      const createdStatistikKekhususanHukumPidana =
        await prisma.statistikKekhususanHukumPidana.create({
          data: {
            sks: data.sks,
            mahasiswaAktif: data.mahasiswaAktif,
            tingkatKelulusan: data.tingkatKelulusan,
            alumniProfesional: data.alumniProfesional,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createdStatistikKekhususanHukumPidana;
    } catch (error) {
      throw error;
    }
  }

  async getAllStatistikKekhususanHukumPidana() {
    try {
      const statistikKekhususanHukumPidana =
        await prisma.statistikKekhususanHukumPidana.findMany();
      return statistikKekhususanHukumPidana;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikKekhususanHukumPidana(
    id: number,
    data: StatistikKekhususanHukumPidana
  ) {
    try {
      const updateData: any = {
        sks: data.sks,
        mahasiswaAktif: data.mahasiswaAktif,
        tingkatKelulusan: data.tingkatKelulusan,
        alumniProfesional: data.alumniProfesional,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikKekhususanHukumPidana =
        await prisma.statistikKekhususanHukumPidana.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikKekhususanHukumPidana;
    } catch (error) {
      throw error;
    }
  }

  async deleteStatistikKekhususanHukumPidana(id: number) {
    try {
      const deletedStatistikKekhususanHukumPidana =
        await prisma.statistikKekhususanHukumPidana.delete({
          where: { id },
        });
      return deletedStatistikKekhususanHukumPidana;
    } catch (error) {
      throw error;
    }
  }
}

export default new KekhususanHukumPidanaService();
