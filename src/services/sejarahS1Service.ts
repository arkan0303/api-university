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

class SejarahS1Service {
  async createSejarahS1(sejarah: Sejarah) {
    try {
      const fotoUrl = await uploadToCloudinary(sejarah.foto.buffer);
      const sejarahS1 = await prisma.sejarah_S1.create({
        data: {
          judul: sejarah.judul,
          tahun: sejarah.tahun,
          deskripsi: sejarah.deskripsi,
          foto: fotoUrl,
        },
      });
      return sejarahS1;
    } catch (error) {
      console.error("Error in createSejarahS1:", error);
      throw error;
    }
  }

  async getAllSejarahS1() {
    try {
      const sejarahS1 = await prisma.sejarah_S1.findMany();
      return sejarahS1;
    } catch (error) {
      console.error("Error in getAllSejarahS1:", error);
      throw error;
    }
  }

  async updateSejarahS1(
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

      const sejarahS1 = await prisma.sejarah_S1.update({
        where: { id },
        data: updateData,
      });

      return sejarahS1;
    } catch (error) {
      console.error("Error in updateSejarahS1:", error);
      throw error;
    }
  }

  async deleteData(id: number) {
    try {
      const deletedData = await prisma.sejarah_S1.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createSejarahS1Banner(banner: Express.Multer.File, konten: string) {
    try {
      const fotoUrl = await uploadToCloudinary(banner.buffer);
      const sejarahS1Banner = await prisma.sejarahS1.create({
        data: {
          banner: fotoUrl,
          konten: konten,
        },
      });
      return sejarahS1Banner;
    } catch (error) {
      console.error("Error in createSejarahS1Banner:", error);
      throw error;
    }
  }

  async updateSejarahS1Banner(
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

      const updatedBanner = await prisma.sejarahS1.update({
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
      const deletedData = await prisma.sejarahS1.delete({
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
      const dataBanner = await prisma.sejarahS1.findMany();
      return dataBanner;
    } catch (error) {
      console.error("Error in getDataBanner:", error);
      throw error;
    }
  }

  async createStatistikSejarahS1(statistik: Statistik) {
    try {
      const statistikSejarahS1 = await prisma.statistikSejarahS1.create({
        data: {
          tahunPengalaman: String(statistik.tahunPengalaman),
          alumni: String(statistik.alumni),
          akreditasi: String(statistik.akreditasi),
          tingkatKelulusan: String(statistik.tingkatKelulusan),
          slogan: String(statistik.slogan),
          deskripsi: String(statistik.deskripsi),
        },
      });
      return statistikSejarahS1;
    } catch (error) {
      console.error("Error in createStatistikSejarahS1:", error);
      throw error;
    }
  }

  async updateStatistikSejarahS1(id: number, statistik: Statistik) {
    try {
      const updateData: any = {
        tahunPengalaman: String(statistik.tahunPengalaman),
        alumni: String(statistik.alumni),
        akreditasi: String(statistik.akreditasi),
        tingkatKelulusan: String(statistik.tingkatKelulusan),
        slogan: String(statistik.slogan),
        deskripsi: String(statistik.deskripsi),
      };

      const updatedStatistik = await prisma.statistikSejarahS1.update({
        where: { id },
        data: updateData,
      });

      return updatedStatistik;
    } catch (error) {
      console.error("Error in updateStatistikSejarahS1:", error);
      throw error;
    }
  }

  async deleteStatistikSejarahS1(id: number) {
    try {
      const deletedData = await prisma.statistikSejarahS1.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikSejarahS1:", error);
      throw error;
    }
  }

  async getAllStatistikSejarahS1() {
    try {
      const statistikSejarahS1 = await prisma.statistikSejarahS1.findMany();
      return statistikSejarahS1;
    } catch (error) {
      console.error("Error in getAllStatistikSejarahS1:", error);
      throw error;
    }
  }
}

export default new SejarahS1Service();
