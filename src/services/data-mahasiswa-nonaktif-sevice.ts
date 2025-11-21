import { uploadToCloudinary } from "../utils/cloudinary";
import prisma from "../db/prisma";

interface DataMahasiswaNonAktif {
  foto: Express.Multer.File;
  title: string;
  deskripsi: string;
  jumlah: string; //3,847 Mahasiswa, 94.2% Kehadiran
}

interface statistikMahasiswaNonAktif {
  mahasiswaNonAktif: string;
  tingkatKehadiran: string;
  ipkRataRata: string;
  mahasiswaBerprestasi: string;
}

class DataMahasiswaNonAktifService {
  async createDataMahasiswaNonAktif(data: DataMahasiswaNonAktif) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const newDataMahasiswaNonAktif =
        await prisma.dataMahasiswaNonAktif.create({
          data: {
            ...data,
            foto: fotoUrl,
          },
        });
      return newDataMahasiswaNonAktif;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getDataMahasiswaNonAktif() {
    try {
      const dataMahasiswaNonAktiff =
        await prisma.dataMahasiswaNonAktif.findMany();
      return dataMahasiswaNonAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateDataMahasiswaNonAktif(id: number, data: DataMahasiswaNonAktif) {
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

        const updatedDataMahasiswaNonAktif =
          await prisma.dataMahasiswaNonAktif.update({
            where: { id },
            data: updateData,
          });

        return updatedDataMahasiswaNonAktif;
      } catch (error) {
        console.error("Error in updateDataMahasiswaNonAktif:", error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteDataMahasiswaNonAktif(id: number) {
    try {
      const deletedDataMahasiswaNonAktiff =
        await prisma.dataMahasiswaNonAktif.delete({
          where: {
            id: id,
          },
        });
      return deletedDataMahasiswaNonAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async createStatistikMahasiswaNonAktif(data: statistikMahasiswaNonAktif) {
    try {
      const newStatistikMahasiswaNonAktiff =
        await prisma.statistikMahasiswaNonAktif.create({
          data: data,
        });
      return newStatistikMahasiswaNonAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async getStatistikMahasiswaNonAktif() {
    try {
      const statistikMahasiswaNonAktiff =
        await prisma.statistikMahasiswaNonAktif.findMany();
      return statistikMahasiswaNonAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async updateStatistikMahasiswaNonAktif(
    id: number,
    data: statistikMahasiswaNonAktif
  ) {
    try {
      const updatedStatistikMahasiswaNonAktiff =
        await prisma.statistikMahasiswaNonAktif.update({
          where: {
            id: id,
          },
          data: data,
        });
      return updatedStatistikMahasiswaNonAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async deleteStatistikMahasiswaNonAktif(id: number) {
    try {
      const deletedStatistikMahasiswaNonAktiff =
        await prisma.statistikMahasiswaNonAktif.delete({
          where: {
            id: id,
          },
        });
      return deletedStatistikMahasiswaNonAktiff;
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}

export default new DataMahasiswaNonAktifService();
