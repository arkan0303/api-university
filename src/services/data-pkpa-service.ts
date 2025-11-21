import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";

interface DataPKPA {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  jumlah: string; //3,847 Mahasiswa, 94.2% Kehadiran
}

interface statistikPKPA {
  pesertaPKPA: string;
  angkatan: string;
  tingkatKelulusan: string;
  mitraHukum: string;
}

class DataPKPAService {
  async createDataPKPA(data: DataPKPA) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const newDataPKPA = await prisma.dataPKPA.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return newDataPKPA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getDataPKPA() {
    try {
      const dataPKPA = await prisma.dataPKPA.findMany();
      return dataPKPA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateDataPKPA(id: number, data: DataPKPA) {
    try {
      try {
        const updateData: any = {
          title: data.title,
          deskripsi: data.deskripsi,
          jumlah: data.jumlah,
        };

        // Hanya upload foto baru jika ada file yang diunggah
        if (data.foto) {
          const fotoUrl = await uploadToCloudinary(data.foto.buffer);
          updateData.foto = fotoUrl;
        }

        const updatedDataPKPA = await prisma.dataPKPA.update({
          where: { id },
          data: updateData,
        });

        return updatedDataPKPA;
      } catch (error) {
        console.error("Error in updateDataPKPA:", error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteDataPKPA(id: number) {
    try {
      const deletedDataPKPA = await prisma.dataPKPA.delete({
        where: {
          id: id,
        },
      });
      return deletedDataPKPA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createStatistikPKPA(data: statistikPKPA) {
    try {
      const newStatistikPKPA = await prisma.statistikPKPA.create({
        data: data,
      });
      return newStatistikPKPA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStatistikPKPA() {
    try {
      const statistikPKPA = await prisma.statistikPKPA.findMany();
      return statistikPKPA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStatistikPKPA(id: number, data: statistikPKPA) {
    try {
      const updatedStatistikPKPA = await prisma.statistikPKPA.update({
        where: {
          id: id,
        },
        data: data,
      });
      return updatedStatistikPKPA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteStatistikPKPA(id: number) {
    try {
      const deletedStatistikPKPA = await prisma.statistikPKPA.delete({
        where: {
          id: id,
        },
      });
      return deletedStatistikPKPA;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new DataPKPAService();
