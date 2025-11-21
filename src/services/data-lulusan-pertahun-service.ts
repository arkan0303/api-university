import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";

interface DataLulusanPertahun {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  jumlah: string; //3,847 Mahasiswa, 94.2% Kehadiran
}

interface statistikLulusanPertahun {
  totalLulusan: string;
  tahun1: string;
  tahun2: string;
  tingkatKelulusan: string;
}

class DataLulusanPertahunService {
  async createDataLulusanPertahun(data: DataLulusanPertahun) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const newDataLulusanPertahun = await prisma.dataLulusanPertahun.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return newDataLulusanPertahun;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getDataLulusanPertahun() {
    try {
      const dataLulusanPertahun = await prisma.dataLulusanPertahun.findMany();
      return dataLulusanPertahun;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateDataLulusanPertahun(id: number, data: DataLulusanPertahun) {
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

        const updatedDataLulusanPertahun =
          await prisma.dataLulusanPertahun.update({
            where: { id },
            data: updateData,
          });

        return updatedDataLulusanPertahun;
      } catch (error) {
        console.error("Error in updateDataLulusanPertahun:", error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteDataLulusanPertahun(id: number) {
    try {
      const deletedDataLulusanPertahun =
        await prisma.dataLulusanPertahun.delete({
          where: {
            id: id,
          },
        });
      return deletedDataLulusanPertahun;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createStatistikLulusanPertahun(data: statistikLulusanPertahun) {
    try {
      const newStatistikLulusanPertahun =
        await prisma.statistikLulusanPertahun.create({
          data: data,
        });
      return newStatistikLulusanPertahun;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStatistikLulusanPertahun() {
    try {
      const statistikLulusanPertahun =
        await prisma.statistikLulusanPertahun.findMany();
      return statistikLulusanPertahun;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStatistikLulusanPertahun(
    id: number,
    data: statistikLulusanPertahun
  ) {
    try {
      const updatedStatistikLulusanPertahun =
        await prisma.statistikLulusanPertahun.update({
          where: {
            id: id,
          },
          data: data,
        });
      return updatedStatistikLulusanPertahun;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteStatistikLulusanPertahun(id: number) {
    try {
      const deletedStatistikLulusanPertahun =
        await prisma.statistikLulusanPertahun.delete({
          where: {
            id: id,
          },
        });
      return deletedStatistikLulusanPertahun;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new DataLulusanPertahunService();
