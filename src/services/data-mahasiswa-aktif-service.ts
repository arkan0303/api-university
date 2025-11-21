import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";

interface DataMahasiswaAktif {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  jumlah: string; //3,847 Mahasiswa, 94.2% Kehadiran
}

interface statistikMahasiswaAktif {
  mahasiswaAktif: string;
  tingkatKehadiran: string;
  ipkRataRata: string;
  mahasiswaBerprestasi: string;
}

class DataMahasiswaAktifService {
  async createDataMahasiswaAktif(data: DataMahasiswaAktif) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const newDataMahasiswaAktif = await prisma.dataMahasiswaAktif.create({
        data: {
          ...data,
          foto: fotoUrl,
        },
      });
      return newDataMahasiswaAktif;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getDataMahasiswaAktif() {
    try {
      const dataMahasiswaAktiff = await prisma.dataMahasiswaAktif.findMany();
      return dataMahasiswaAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateDataMahasiswaAktif(id: number, data: DataMahasiswaAktif) {
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

        const updatedDataMahasiswaAktif =
          await prisma.dataMahasiswaAktif.update({
            where: { id },
            data: updateData,
          });

        return updatedDataMahasiswaAktif;
      } catch (error) {
        console.error("Error in updateDataMahasiswaAktif:", error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteDataMahasiswaAktif(id: number) {
    try {
      const deletedDataMahasiswaAktiff = await prisma.dataMahasiswaAktif.delete(
        {
          where: {
            id: id,
          },
        }
      );
      return deletedDataMahasiswaAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createStatistikMahasiswaAktif(data: statistikMahasiswaAktif) {
    try {
      const newStatistikMahasiswaAktiff =
        await prisma.statistikMahasiswaAktif.create({
          data: data,
        });
      return newStatistikMahasiswaAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStatistikMahasiswaAktif() {
    try {
      const statistikMahasiswaAktiff =
        await prisma.statistikMahasiswaAktif.findMany();
      return statistikMahasiswaAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStatistikMahasiswaAktif(
    id: number,
    data: statistikMahasiswaAktif
  ) {
    try {
      const updatedStatistikMahasiswaAktiff =
        await prisma.statistikMahasiswaAktif.update({
          where: {
            id: id,
          },
          data: data,
        });
      return updatedStatistikMahasiswaAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteStatistikMahasiswaAktif(id: number) {
    try {
      const deletedStatistikMahasiswaAktiff =
        await prisma.statistikMahasiswaAktif.delete({
          where: {
            id: id,
          },
        });
      return deletedStatistikMahasiswaAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new DataMahasiswaAktifService();
