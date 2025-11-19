import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface DataMagangMahasiswa {
  foto: Express.Multer.File;
  title: string;
  terkait: string; // Legal & Compliance , Legal Division
  tentangMagang: string;
  tanggungJawab: Prisma.JsonValue[];
  keahlian: Prisma.JsonValue[];
  pencapaian: Prisma.JsonValue[];
  perusahaanMagang: string;
  posisiMagang: string;
  periodeMagang: string;
  lokasiMagang: string;
  superVisorMagang: string;
  emailSuperVisorMagang: string;
}

interface StatistikDataMagangMahasiswa {
  totalMagang: string;
  mitraInstitusi: string;
  rataDurasiMagang: string;
  tingkatKepuasan: string;
  slogan: string;
  deskripsi: string;
}

class DataMagangMahasiswaService {
  async createDataMagangMahasiswa(data: DataMagangMahasiswa) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const create = await prisma.dataMahasiswaMagang.create({
        data: {
          title: data.title,
          terkait: data.terkait,
          tentangMagang: data.tentangMagang,
          tanggungJawab: data.tanggungJawab,
          keahlian: data.keahlian,
          pencapaian: data.pencapaian,
          perusahaanMagang: data.perusahaanMagang,
          posisiMagang: data.posisiMagang,
          periodeMagang: data.periodeMagang,
          lokasiMagang: data.lokasiMagang,
          superVisorMagang: data.superVisorMagang,
          emailSuperVisorMagang: data.emailSuperVisorMagang,
          foto: fotoUrl,
        },
      });
      return create;
    } catch (error) {
      console.error("Error in createDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async getAllDataMagangMahasiswa() {
    try {
      const getAllDataMagangMahasiswa =
        await prisma.dataMahasiswaMagang.findMany();
      return getAllDataMagangMahasiswa;
    } catch (error) {
      console.error("Error in getAllDataSeminarMahasiswa:", error);
      throw error;
    }
  }

  async updateDataMagangMahasiswa(id: number, data: DataMagangMahasiswa) {
    try {
      const updateData: any = {
        title: data.title,
        terkait: data.terkait,
        tentangMagang: data.tentangMagang,
        tanggungJawab: data.tanggungJawab,
        keahlian: data.keahlian,
        pencapaian: data.pencapaian,
        perusahaanMagang: data.perusahaanMagang,
        posisiMagang: data.posisiMagang,
        periodeMagang: data.periodeMagang,
        lokasiMagang: data.lokasiMagang,
        superVisorMagang: data.superVisorMagang,
        emailSuperVisorMagang: data.emailSuperVisorMagang,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const updatedDataMagangMahasiswa =
        await prisma.dataMahasiswaMagang.update({
          where: { id },
          data: updateData,
        });

      return updatedDataMagangMahasiswa;
    } catch (error) {
      console.error("Error in updateDataMagangMahasiswa:", error);
      throw error;
    }
  }

  async deleteDataMagangMahasiswa(id: number) {
    try {
      const deleteDataMagangMahasiswa = await prisma.dataMahasiswaMagang.delete(
        {
          where: {
            id,
          },
        }
      );
      return deleteDataMagangMahasiswa;
    } catch (error) {
      console.error("Error in deleteDataMagangMahasiswa:", error);
      throw error;
    }
  }

  async createStatistikDataMagangMahasiswa(data: StatistikDataMagangMahasiswa) {
    try {
      const create = await prisma.statistikDataMahasiswaMagang.create({
        data: {
          ...data,
        },
      });
      return create;
    } catch (error) {
      console.error("Error in createStatistikDataMagangMahasiswa:", error);
      throw error;
    }
  }

  async getAllStatistikDataMagangMahasiswa() {
    try {
      const getAllStatistikDataMagangMahasiswa =
        await prisma.statistikDataMahasiswaMagang.findMany();
      return getAllStatistikDataMagangMahasiswa;
    } catch (error) {
      console.error("Error in getAllStatistikDataMagangMahasiswa:", error);
      throw error;
    }
  }

  async updateStatistikDataMagangMahasiswa(
    id: number,
    data: StatistikDataMagangMahasiswa
  ) {
    try {
      const updateData: any = {
        totalMagang: data.totalMagang,
        mitraInstitusi: data.mitraInstitusi,
        rataDurasiMagang: data.rataDurasiMagang,
        tingkatKepuasan: data.tingkatKepuasan,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikDataMagangMahasiswa =
        await prisma.statistikDataMahasiswaMagang.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikDataMagangMahasiswa;
    } catch (error) {
      console.error("Error in updateStatistikDataMagangMahasiswa:", error);
      throw error;
    }
  }

  async deleteStatistikDataMagangMahasiswa(id: number) {
    try {
      const deleteStatistikDataMagangMahasiswa =
        await prisma.statistikDataMahasiswaMagang.delete({
          where: {
            id,
          },
        });
      return deleteStatistikDataMagangMahasiswa;
    } catch (error) {
      console.error("Error in deleteStatistikDataMagangMahasiswa:", error);
      throw error;
    }
  }
}

export default new DataMagangMahasiswaService();
