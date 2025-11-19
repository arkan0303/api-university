import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface DataRekognisi {
  foto: Express.Multer.File;
  title: string;
  tema: string; // Akreditasi , Pascakelulusan,
  tingkat: string; // Nasional, Internasional
  tahun: string;
  deskripsi: string;
  dampak: string;
  kriteriaPenelitian: Prisma.JsonValue[];
  manfaat: Prisma.JsonValue[];
  provider: string;
  masaBerlaku: string;
}

interface StatistikDataRekognisi {
  penghargaan: string;
  sertifikasi: string;
  akreditasi: string;
  rekognasiInternasional: string;
  slogan: string;
  deskripsi: string;
}

class DataRekognisiService {
  async createDataRekognisi(data: DataRekognisi) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const result = await prisma.dataRekognisi.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllDataRekognisi() {
    try {
      const result = await prisma.dataRekognisi.findMany();
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateDataRekognisi(id: number, data: DataRekognisi) {
    try {
      const updateData: any = {
        title: data.title,
        tema: data.tema,
        tingkat: data.tingkat,
        tahun: data.tahun,
        deskripsi: data.deskripsi,
        dampak: data.dampak,
        kriteriaPenelitian: data.kriteriaPenelitian,
        manfaat: data.manfaat,
        provider: data.provider,
        masaBerlaku: data.masaBerlaku,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedDataRekognisi = await prisma.dataRekognisi.update({
        where: { id },
        data: updateData,
      });

      return updatedDataRekognisi;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteDataRekognisi(id: number) {
    try {
      const result = await prisma.dataRekognisi.delete({
        where: {
          id,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createStatistikDataRekognisi(data: StatistikDataRekognisi) {
    try {
      const result = await prisma.statistikDataRekognisi.create({
        data,
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllStatistikDataRekognisi() {
    try {
      const result = await prisma.statistikDataRekognisi.findMany();
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateStatistikDataRekognisi(id: number, data: StatistikDataRekognisi) {
    try {
      const updateData: any = {
        penghargaan: data.penghargaan,
        sertifikasi: data.sertifikasi,
        akreditasi: data.akreditasi,
        rekognasiInternasional: data.rekognasiInternasional,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikDataRekognisi =
        await prisma.statistikDataRekognisi.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikDataRekognisi;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteStatistikDataRekognisi(id: number) {
    try {
      const result = await prisma.statistikDataRekognisi.delete({
        where: {
          id,
        },
      });
      return result;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new DataRekognisiService();
