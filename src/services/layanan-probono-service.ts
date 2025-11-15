import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";
import { Prisma } from "@prisma/client";

interface LayananProBono {
  foto: Express.Multer.File;
  title: string;
  waktu: string;
  deskripsi: string;
  kategori: Prisma.JsonValue[];
  type: string;
}

interface StatistikLayananProbono {
  kasusProbono: string;
  tingkatKesepakatan: string;
  mediatorBersetifikat: string;
  totalMediasi: string;
  slogan: string;
  deskripsi: string;
}

interface KriteriaPenerima {
  foto: Express.Multer.File;
  title: string;
  kategori: Prisma.JsonValue[];
}

class LayananProbonoService {
  async createLayananProbono(data: LayananProBono) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const layananProbono = await prisma.layananProBono.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          waktu: data.waktu,
          deskripsi: data.deskripsi,
          kategori: data.kategori,
          type: data.type,
        },
      });
      return layananProbono;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllLayananProbono() {
    try {
      const layananProbono = await prisma.layananProBono.findMany();
      return layananProbono;
    } catch (error) {
      console.error("Error in getAllLayananProbono:", error);
      return error;
    }
  }

  async updateLayananProbono(id: number, data: LayananProBono) {
    try {
      const updateData: any = {
        title: data.title,
        waktu: data.waktu,
        deskripsi: data.deskripsi,
        kategori: data.kategori,
        type: data.type,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (data.foto) {
        const uploadImage = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = uploadImage;
      }

      const updatedLayananProbono = await prisma.layananProBono.update({
        where: { id },
        data: updateData,
      });

      return updatedLayananProbono;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteLayananProbono(id: number) {
    try {
      const deletedLayananProbono = await prisma.layananProBono.delete({
        where: { id },
      });
      return deletedLayananProbono;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createStatistikLayananProbono(data: StatistikLayananProbono) {
    try {
      const statistikLayananProbono =
        await prisma.statistikLayananProbono.create({
          data: {
            kasusProbono: data.kasusProbono,
            tingkatKesepakatan: data.tingkatKesepakatan,
            mediatorBersetifikat: data.mediatorBersetifikat,
            totalMediasi: data.totalMediasi,
            slogan: data.slogan,
            deskripsi: data.deskripsi,
          },
        });
      return statistikLayananProbono;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllStatistikLayananProbono() {
    try {
      const statistikLayananProbono =
        await prisma.statistikLayananProbono.findMany();
      return statistikLayananProbono;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateStatistikLayananProbono(
    id: number,
    data: StatistikLayananProbono
  ) {
    try {
      const updateData: any = {
        kasusProbono: data.kasusProbono,
        tingkatKesepakatan: data.tingkatKesepakatan,
        mediatorBersetifikat: data.mediatorBersetifikat,
        totalMediasi: data.totalMediasi,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };

      const updatedStatistikLayananProbono =
        await prisma.statistikLayananProbono.update({
          where: { id },
          data: updateData,
        });

      return updatedStatistikLayananProbono;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteStatistikLayananProbono(id: number) {
    try {
      const deletedStatistikLayananProbono =
        await prisma.statistikLayananProbono.delete({
          where: { id },
        });
      return deletedStatistikLayananProbono;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async createKriteriaPenerima(data: KriteriaPenerima) {
    try {
      const uploadImage = await uploadToCloudinary(data.foto.buffer);
      const kriteriaPenerima = await prisma.kriteriaPenerima.create({
        data: {
          foto: uploadImage,
          title: data.title,
          kategori: data.kategori,
        },
      });
      return kriteriaPenerima;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async getAllKriteriaPenerima() {
    try {
      const kriteriaPenerima = await prisma.kriteriaPenerima.findMany();
      return kriteriaPenerima;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async updateKriteriaPenerima(id: number, data: KriteriaPenerima) {
    try {
      const updateData: any = {
        title: data.title,
        kategori: data.kategori,
      };

      const updatedKriteriaPenerima = await prisma.kriteriaPenerima.update({
        where: { id },
        data: updateData,
      });

      return updatedKriteriaPenerima;
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async deleteKriteriaPenerima(id: number) {
    try {
      const deletedKriteriaPenerima = await prisma.kriteriaPenerima.delete({
        where: { id },
      });
      return deletedKriteriaPenerima;
    } catch (error) {
      console.log(error);
      return error;
    }
  }
}

export default new LayananProbonoService();
