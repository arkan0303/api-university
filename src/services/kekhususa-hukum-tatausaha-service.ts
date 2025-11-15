import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface KekhususanHukumTataUsahaNegara {
  foto: Express.Multer.File;
  semester: string;
  sks: string;
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
}

interface ProspekKarirTataUsahaNegara {
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
}

interface StatistikKekhususanHukumTataUsahaNegara {
  sks: string;
  mahasiswaAktif: string;
  tingkatKelulusan: string;
  alumniProfesional: string;
  slogan: string;
  deskripsi: string;
}

class KekhususanHukumTataUsahaNegaraService {
  async createKekhususanHukumTataUsahaNegara(
    data: KekhususanHukumTataUsahaNegara
  ) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const kekhususanHukumTataUsahaNegara =
        await prisma.kekhususanHukumTataUsahaNegara.create({
          data: {
            foto: fotoUrl,
            semester: data.semester,
            sks: data.sks,
            title: data.title,
            deskripsi: data.deskripsi,
            kategori: data.kategori,
          },
        });

      return kekhususanHukumTataUsahaNegara;
    } catch (error) {
      throw error;
    }
  }

  async getAllKekhususanHukumTataUsahaNegara() {
    try {
      const kekhususanHukumTataUsahaNegaraa =
        await prisma.kekhususanHukumTataUsahaNegara.findMany();
      return kekhususanHukumTataUsahaNegaraa;
    } catch (error) {
      throw error;
    }
  }

  async updateKekhususanHukumTataUsahaNegara(
    id: number,
    data: KekhususanHukumTataUsahaNegara
  ) {
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

      const updatedKekhususanHukumTataUsahaNegara =
        await prisma.kekhususanHukumTataUsahaNegara.update({
          where: { id },
          data: updateData,
        });

      return updatedKekhususanHukumTataUsahaNegara;
    } catch (error) {
      throw error;
    }
  }

  async deleteKekhususanHukumTataUsahaNegara(id: number) {
    try {
      const deletedKekhususanHukumTataUsahaNegara =
        await prisma.kekhususanHukumTataUsahaNegara.delete({
          where: { id },
        });
      return deletedKekhususanHukumTataUsahaNegara;
    } catch (error) {
      throw error;
    }
  }

  async createProspekKarirTataUsahaNegara(data: ProspekKarirTataUsahaNegara) {
    try {
      const createdProspekKarir =
        await prisma.prospekKarirTataUsahaNegara.create({
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

  async getAllProspekKarirTataUsahaNegara() {
    try {
      const prospekKarir = await prisma.prospekKarirTataUsahaNegara.findMany();
      return prospekKarir;
    } catch (error) {
      throw error;
    }
  }

  async updateProspekKarirTataUsahaNegara(
    id: number,
    data: ProspekKarirTataUsahaNegara
  ) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        kategori: data.kategori,
      };

      const updatedProspekKarir =
        await prisma.prospekKarirTataUsahaNegara.update({
          where: { id },
          data: updateData,
        });

      return updatedProspekKarir;
    } catch (error) {
      throw error;
    }
  }

  async deleteProspekKarirTataUsahaNegara(id: number) {
    try {
      const deletedProspekKarir =
        await prisma.prospekKarirTataUsahaNegara.delete({
          where: { id },
        });
      return deletedProspekKarir;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikKekhususanHukumTataUsahaNegara(
    data: StatistikKekhususanHukumTataUsahaNegara
  ) {
    try {
      const createdStatistikKekhususanHukumTataUsahaNegara =
        await prisma.statistikKekhususanHukumTataUsahaNegara.create({
          data: {
            sks: data.sks,
            mahasiswaAktif: data.mahasiswaAktif,
            tingkatKelulusan: data.tingkatKelulusan,
            alumniProfesional: data.alumniProfesional,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createdStatistikKekhususanHukumTataUsahaNegara;
    } catch (error) {
      throw error;
    }
  }

  async getAllStatistikKekhususanHukumTataUsahaNegara() {
    try {
      const statistikKekhususanHukumTataUsahaNegara =
        await prisma.statistikKekhususanHukumTataUsahaNegara.findMany();
      return statistikKekhususanHukumTataUsahaNegara;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikKekhususanHukumTataUsahaNegara(
    id: number,
    data: StatistikKekhususanHukumTataUsahaNegara
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

      const updatedStatistikKekhususanHukumTataUsahaNegara =
        await prisma.statistikKekhususanHukumTataUsahaNegara.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikKekhususanHukumTataUsahaNegara;
    } catch (error) {
      throw error;
    }
  }

  async deleteStatistikKekhususanHukumTataUsahaNegara(id: number) {
    try {
      const deletedStatistikKekhususanHukumTataUsahaNegara =
        await prisma.statistikKekhususanHukumTataUsahaNegara.delete({
          where: { id },
        });
      return deletedStatistikKekhususanHukumTataUsahaNegara;
    } catch (error) {
      throw error;
    }
  }
}

export default new KekhususanHukumTataUsahaNegaraService();
