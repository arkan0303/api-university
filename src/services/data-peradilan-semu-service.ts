import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";

interface DataPeradilanSemu {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  jumlah: string; //3,847 Mahasiswa, 94.2% Kehadiran
}

interface statistikPeradilanSemu {
  sidangSemu: string;
  peserta: string;
  tingkatKepuasan: string;
  kasusSimulasi: string;
}

class DataPeradilanSemuService {
  async createDataPeradilanSemu(data: DataPeradilanSemu) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const newDataPeradilanSemu = await prisma.dataPeradilanSemu.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return newDataPeradilanSemu;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getDataPeradilanSemu() {
    try {
      const dataPeradilanSemu = await prisma.dataPeradilanSemu.findMany();
      return dataPeradilanSemu;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateDataPeradilanSemu(id: number, data: DataPeradilanSemu) {
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

        const updatedDataPeradilanSemu = await prisma.dataPeradilanSemu.update({
          where: { id },
          data: updateData,
        });

        return updatedDataPeradilanSemu;
      } catch (error) {
        console.error("Error in updateDataPeradilanSemu:", error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteDataPeradilanSemu(id: number) {
    try {
      const deletedDataPeradilanSemu = await prisma.dataPeradilanSemu.delete({
        where: {
          id: id,
        },
      });
      return deletedDataPeradilanSemu;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createStatistikPeradilanSemu(data: statistikPeradilanSemu) {
    try {
      const newStatistikPeradilanSemu =
        await prisma.statistikPeradilanSemu.create({
          data: data,
        });
      return newStatistikPeradilanSemu;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStatistikPeradilanSemu() {
    try {
      const statistikPeradilanSemu =
        await prisma.statistikPeradilanSemu.findMany();
      return statistikPeradilanSemu;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStatistikPeradilanSemu(id: number, data: statistikPeradilanSemu) {
    try {
      const updatedStatistikPeradilanSemu =
        await prisma.statistikPeradilanSemu.update({
          where: {
            id: id,
          },
          data: data,
        });
      return updatedStatistikPeradilanSemu;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteStatistikPeradilanSemu(id: number) {
    try {
      const deletedStatistikPeradilanSemu =
        await prisma.statistikPeradilanSemu.delete({
          where: {
            id: id,
          },
        });
      return deletedStatistikPeradilanSemu;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new DataPeradilanSemuService();
