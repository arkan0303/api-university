import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface KekhususanHukumPerdata {
  foto: Express.Multer.File;
  semester: string;
  sks: string;
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
}

interface ProspekKarirPerdata {
  title: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
}

interface StatistikKekhususanHukumPerdata {
  sks: string;
  mahasiswaAktif: string;
  tingkatKelulusan: string;
  alumniProfesional: string;
  slogan: string;
  deskripsi: string;
}

class KekhususanHukumPerdataService {
  async createKekhususanHukumPerdata(data: KekhususanHukumPerdata) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const kekhususanHukumPerdata = await prisma.kekhususanHukumPerdata.create(
        {
          data: {
            foto: fotoUrl,
            semester: data.semester,
            sks: data.sks,
            title: data.title,
            deskripsi: data.deskripsi,
            kategori: data.kategori,
          },
        }
      );

      return kekhususanHukumPerdata;
    } catch (error) {
      throw error;
    }
  }

  async getAllKekhususanHukumPerdata() {
    try {
      const kekhususanHukumPerdataa =
        await prisma.kekhususanHukumPerdata.findMany();
      return kekhususanHukumPerdataa;
    } catch (error) {
      throw error;
    }
  }

  async updateKekhususanHukumPerdata(id: number, data: KekhususanHukumPerdata) {
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

      const updatedKekhususanHukumPerdata =
        await prisma.kekhususanHukumPerdata.update({
          where: { id },
          data: updateData,
        });

      return updatedKekhususanHukumPerdata;
    } catch (error) {
      throw error;
    }
  }

  async deleteKekhususanHukumPerdata(id: number) {
    try {
      const deletedKekhususanHukumPerdata =
        await prisma.kekhususanHukumPerdata.delete({
          where: { id },
        });
      return deletedKekhususanHukumPerdata;
    } catch (error) {
      throw error;
    }
  }

  async createProspekKarirPerdata(data: ProspekKarirPerdata) {
    try {
      const createdProspekKarir = await prisma.prospekKarirPerdata.create({
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

  async getAllProspekKarirPerdata() {
    try {
      const prospekKarir = await prisma.prospekKarirPerdata.findMany();
      return prospekKarir;
    } catch (error) {
      throw error;
    }
  }

  async updateProspekKarirPerdata(id: number, data: ProspekKarirPerdata) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        kategori: data.kategori,
      };

      const updatedProspekKarir = await prisma.prospekKarirPerdata.update({
        where: { id },
        data: updateData,
      });

      return updatedProspekKarir;
    } catch (error) {
      throw error;
    }
  }

  async deleteProspekKarirPerdata(id: number) {
    try {
      const deletedProspekKarir = await prisma.prospekKarirPerdata.delete({
        where: { id },
      });
      return deletedProspekKarir;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikKekhususanHukumPerdata(
    data: StatistikKekhususanHukumPerdata
  ) {
    try {
      const createdStatistikKekhususanHukumPerdata =
        await prisma.statistikKekhususanHukumPerdata.create({
          data: {
            sks: data.sks,
            mahasiswaAktif: data.mahasiswaAktif,
            tingkatKelulusan: data.tingkatKelulusan,
            alumniProfesional: data.alumniProfesional,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return createdStatistikKekhususanHukumPerdata;
    } catch (error) {
      throw error;
    }
  }

  async getAllStatistikKekhususanHukumPerdata() {
    try {
      const statistikKekhususanHukumPerdata =
        await prisma.statistikKekhususanHukumPerdata.findMany();
      return statistikKekhususanHukumPerdata;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikKekhususanHukumPerdata(
    id: number,
    data: StatistikKekhususanHukumPerdata
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

      const updatedStatistikKekhususanHukumPerdata =
        await prisma.statistikKekhususanHukumPerdata.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikKekhususanHukumPerdata;
    } catch (error) {
      throw error;
    }
  }

  async deleteStatistikKekhususanHukumPerdata(id: number) {
    try {
      const deletedStatistikKekhususanHukumPerdata =
        await prisma.statistikKekhususanHukumPerdata.delete({
          where: { id },
        });
      return deletedStatistikKekhususanHukumPerdata;
    } catch (error) {
      throw error;
    }
  }
}

export default new KekhususanHukumPerdataService();
