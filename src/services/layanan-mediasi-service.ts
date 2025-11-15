import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface LayananMediasi {
  foto: Express.Multer.File;
  title: string;
  waktu: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  type: string;
}

interface StatistikLayananMediasi {
  mediasiBerhasil: string;
  tingkatKesepakatan: string;
  mediatorBersetifikat: string;
  totalMediasi: string;
  slogan: string;
  deskripsi: string;
}

interface TimMediator {
  foto: Express.Multer.File;
  nama: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  kasusDitangani: string;
  email: string;
  noTelp: string;
}

class LayananMediasiService {
  async createLayananMediasi(data: LayananMediasi) {
    try {
      const uploadImage = await uploadToCloudinary(data.foto.buffer);
      const create = await prisma.layananMediasi.create({
        data: {
          foto: uploadImage,
          title: data.title,
          waktu: data.waktu,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          type: data.type,
        },
      });
      return create;
    } catch (error) {
      throw error;
    }
  }

  async getAllLayananMediasi() {
    try {
      const getAll = await prisma.layananMediasi.findMany();
      return getAll;
    } catch (error) {
      throw error;
    }
  }

  async updateLayananMediasi(id: number, data: LayananMediasi) {
    try {
      const updateData: any = {
        title: data.title,
        deskripsi: data.deskripsi,
        waktu: data.waktu,
        kategori: data.kategori,
        type: data.type,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const uploadImage = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = uploadImage;
      }

      const updatedLayananMediasi = await prisma.layananMediasi.update({
        where: { id },
        data: updateData,
      });

      return updatedLayananMediasi;
    } catch (error) {
      console.error("Error in updateLayananMediasi:", error);
      throw error;
    }
  }

  async deleteLayananMediasi(id: number) {
    try {
      const deletedLayananMediasi = await prisma.layananMediasi.delete({
        where: { id },
      });
      return deletedLayananMediasi;
    } catch (error) {
      console.error("Error in deleteLayananMediasi:", error);
      throw error;
    }
  }

  async createStatistikLayananMediasi(data: StatistikLayananMediasi) {
    try {
      const create = await prisma.statistikLayananMediasi.create({
        data: {
          mediasiBerhasil: data.mediasiBerhasil,
          tingkatKesepakatan: data.tingkatKesepakatan,
          mediatorBersetifikat: data.mediatorBersetifikat,
          totalMediasi: data.totalMediasi,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return create;
    } catch (error) {
      throw error;
    }
  }

  async getAllStatistikLayananMediasi() {
    try {
      const getAll = await prisma.statistikLayananMediasi.findMany();
      return getAll;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikLayananMediasi(
    id: number,
    data: StatistikLayananMediasi
  ) {
    try {
      const updateData: any = {
        mediasiBerhasil: data.mediasiBerhasil,
        tingkatKesepakatan: data.tingkatKesepakatan,
        mediatorBersetifikat: data.mediatorBersetifikat,
        totalMediasi: data.totalMediasi,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikLayananMediasi =
        await prisma.statistikLayananMediasi.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikLayananMediasi;
    } catch (error) {
      console.error("Error in updateStatistikLayananMediasi:", error);
      throw error;
    }
  }

  async deleteStatistikLayananMediasi(id: number) {
    try {
      const deletedStatistikLayananMediasi =
        await prisma.statistikLayananMediasi.delete({
          where: { id },
        });
      return deletedStatistikLayananMediasi;
    } catch (error) {
      console.error("Error in deleteStatistikLayananMediasi:", error);
      throw error;
    }
  }

  async createTimMediator(data: TimMediator) {
    try {
      const uploadImage = await uploadToCloudinary(data.foto.buffer);
      const create = await prisma.timMediator.create({
        data: {
          foto: uploadImage,
          nama: data.nama,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          kasusDitangani: data.kasusDitangani,
          email: data.email,
          noTelp: data.noTelp,
        },
      });
      return create;
    } catch (error) {
      throw error;
    }
  }

  async getAllTimMediator() {
    try {
      const getAll = await prisma.timMediator.findMany();
      return getAll;
    } catch (error) {
      throw error;
    }
  }

  async updateTimMediator(id: number, data: TimMediator) {
    try {
      const updateData: any = {
        nama: data.nama,
        deskripsi: data.deskripsi,
        kategori: data.kategori,
        kasusDitangani: data.kasusDitangani,
        email: data.email,
        noTelp: data.noTelp,
      };

      if (data.foto) {
        const uploadImage = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = uploadImage;
      }

      const updatedTimMediator = await prisma.timMediator.update({
        where: { id },
        data: updateData,
      });

      return updatedTimMediator;
    } catch (error) {
      console.error("Error in updateTimMediator:", error);
      throw error;
    }
  }

  async deleteTimMediator(id: number) {
    try {
      const deletedTimMediator = await prisma.timMediator.delete({
        where: { id },
      });
      return deletedTimMediator;
    } catch (error) {
      console.error("Error in deleteTimMediator:", error);
      throw error;
    }
  }
}

export default new LayananMediasiService();
