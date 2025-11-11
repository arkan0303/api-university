import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface Sejarah {
  judul: string;
  tahun: string;
  deskripsi: string;
  foto: Express.Multer.File;
}

interface Statistik {
  tahunPengalaman: string;
  alumni: string;
  akreditasi: string;
  tingkatKelulusan: string;
  slogan: string;
  deskripsi: string;
}

class SejarahS2Service {
  async createSejarahS2(sejarah: Sejarah) {
    try {
      const fotoUrl = await uploadToCloudinary(sejarah.foto.buffer);
      const sejarahS2 = await prisma.sejarah_S2.create({
        data: {
          judul: sejarah.judul,
          tahun: sejarah.tahun,
          deskripsi: sejarah.deskripsi,
          foto: fotoUrl,
          // urutan: parseInt(sejarah.urutan),
        },
      });
      return sejarahS2;
    } catch (error) {
      console.error("Error in createSejarahS2:", error);
      throw error;
    }
  }

  async getAllSejarahS2() {
    try {
      const sejarahS2 = await prisma.sejarah_S2.findMany();
      return sejarahS2;
    } catch (error) {
      console.error("Error in getAllSejarahS2:", error);
      throw error;
    }
  }

  async updateSejarahS2(
    id: number,
    sejarah: Sejarah & { foto?: Express.Multer.File }
  ) {
    try {
      const updateData: any = {
        judul: sejarah.judul,
        tahun: sejarah.tahun,
        deskripsi: sejarah.deskripsi,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (sejarah.foto) {
        const fotoUrl = await uploadToCloudinary(sejarah.foto.buffer);
        updateData.foto = fotoUrl;
      }

      const sejarahS2 = await prisma.sejarah_S2.update({
        where: { id },
        data: updateData,
      });

      return sejarahS2;
    } catch (error) {
      console.error("Error in updateSejarahS1:", error);
      throw error;
    }
  }

  async deleteData(id: number) {
    try {
      const deletedData = await prisma.sejarah_S2.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createSejarahS2Banner(banner: Express.Multer.File, konten: string) {
    try {
      const fotoUrl = await uploadToCloudinary(banner.buffer);
      const sejarahS2Banner = await prisma.sejarahS2.create({
        data: {
          banner: fotoUrl,
          konten: konten,
        },
      });
      return sejarahS2Banner;
    } catch (error) {
      console.error("Error in createSejarahS2Banner:", error);
      throw error;
    }
  }

  async updateSejarahS2Banner(
    id: number,
    data: {
      banner?: Express.Multer.File;
      konten: string;
    }
  ) {
    try {
      const updateData: any = {
        konten: data.konten,
      };

      // Hanya upload banner baru jika ada file yang diunggah
      if (data.banner) {
        const bannerUrl = await uploadToCloudinary(data.banner.buffer);
        updateData.banner = bannerUrl;
      }

      const updatedBanner = await prisma.sejarahS2.update({
        where: { id },
        data: updateData,
      });

      return updatedBanner;
    } catch (error) {
      console.error("Error in updateSejarahS1Banner:", error);
      throw error;
    }
  }

  async deleteBanner(id: number) {
    try {
      const deletedData = await prisma.sejarahS2.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteBanner:", error);
      throw error;
    }
  }

  async getDataBanner() {
    try {
      const dataBanner = await prisma.sejarahS2.findMany();
      return dataBanner;
    } catch (error) {
      console.error("Error in getDataBanner:", error);
      throw error;
    }
  }

  async createStatistikSejarahS2(statistik: Statistik) {
    try {
      const statistikSejarahS2 = await prisma.statistikSejarahS2.create({
        data: {
          tahunPengalaman: String(statistik.tahunPengalaman),
          alumni: String(statistik.alumni),
          akreditasi: String(statistik.akreditasi),
          tingkatKelulusan: String(statistik.tingkatKelulusan),
          slogan: String(statistik.slogan),
          deskripsi: String(statistik.deskripsi),
        },
      });
      return statistikSejarahS2;
    } catch (error) {
      console.error("Error in createStatistikSejarahS2:", error);
      throw error;
    }
  }

  async updateStatistikSejarahS2(id: number, statistik: Statistik) {
    try {
      const updateData: any = {
        tahunPengalaman: String(statistik.tahunPengalaman),
        alumni: String(statistik.alumni),
        akreditasi: String(statistik.akreditasi),
        tingkatKelulusan: String(statistik.tingkatKelulusan),
        slogan: String(statistik.slogan),
        deskripsi: String(statistik.deskripsi),
      };

      const updatedStatistik = await prisma.statistikSejarahS2.update({
        where: { id },
        data: updateData,
      });

      return updatedStatistik;
    } catch (error) {
      console.error("Error in updateStatistikSejarahS1:", error);
      throw error;
    }
  }

  async deleteStatistikSejarahS2(id: number) {
    try {
      const deletedData = await prisma.statistikSejarahS2.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikSejarahS1:", error);
      throw error;
    }
  }

  async getAllStatistikSejarahS2() {
    try {
      const statistikSejarahS2 = await prisma.statistikSejarahS2.findMany();
      return statistikSejarahS2;
    } catch (error) {
      console.error("Error in getAllStatistikSejarahS1:", error);
      throw error;
    }
  }
}

export default new SejarahS2Service();
