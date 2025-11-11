import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";
import { Prisma } from "@prisma/client";

interface SaranaPrasarana {
  judul: string;
  katagori: string;
  deskripsi: string;
  foto: Express.Multer.File[];
}

interface BannerSaranaPrasarana {
  banner: Express.Multer.File;
  konten: string;
}

interface StatistikSaranaPrasarana {
  ruangKuliah: string;
  koleksiBuku: string;
  unitKomputer: string;
  lantaiGedung: string;
  slogan: string;
  deskripsi: string;
}
class SaranaPrasaranaService {
  async createSaranaPrasarana(saranaPrasarana: SaranaPrasarana) {
    try {
      let galeriData: Prisma.JsonArray = [];

      if (saranaPrasarana.foto && saranaPrasarana.foto.length > 0) {
        const uploadedUrls = await Promise.all(
          saranaPrasarana.foto.map((file) => uploadToCloudinary(file.buffer))
        );
        galeriData = uploadedUrls as Prisma.JsonArray;
      }

      const saranaPrasaranaa = await prisma.saranaPrasarana.create({
        data: {
          judul: saranaPrasarana.judul,
          katagori: saranaPrasarana.katagori,
          deskripsi: saranaPrasarana.deskripsi,
          foto: galeriData,
        },
      });
      return saranaPrasaranaa;
    } catch (error) {
      console.error("Error in createSaranaPrasarana:", error);
      throw error;
    }
  }

  async getAllSaranaPrasarana() {
    try {
      const saranaPrasarana = await prisma.saranaPrasarana.findMany();
      return saranaPrasarana;
    } catch (error) {
      console.error("Error in getAllSaranaPrasarana:", error);
      throw error;
    }
  }

  async updateSaranaPrasarana(
    id: number,
    saranaPrasarana: SaranaPrasarana & { foto?: Express.Multer.File }
  ) {
    try {
      const updateData: any = {
        judul: saranaPrasarana.judul,
        katagori: saranaPrasarana.katagori,
        deskripsi: saranaPrasarana.deskripsi,
        foto: saranaPrasarana.foto,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (saranaPrasarana.foto) {
        const fotoUrl = await uploadToCloudinary(saranaPrasarana.foto.buffer);
        updateData.foto = fotoUrl;
      }
      const updatedSaranaPrasarana = await prisma.saranaPrasarana.update({
        where: { id },
        data: updateData,
      });
      return updatedSaranaPrasarana;
    } catch (error) {
      console.error("Error in updateSaranaPrasarana:", error);
      throw error;
    }
  }

  async deleteSaranaPrasarana(id: number) {
    try {
      const deletedData = await prisma.saranaPrasarana.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteData:", error);
      throw error;
    }
  }

  async createBannerSaranaPrasarana(
    bannerSaranaPrasarana: BannerSaranaPrasarana
  ) {
    try {
      const fotoUrl = await uploadToCloudinary(
        bannerSaranaPrasarana.banner.buffer
      );
      const bannerSaranaPrasaranaa = await prisma.saranaPrasaranaBanner.create({
        data: {
          banner: fotoUrl,
          konten: bannerSaranaPrasarana.konten,
        },
      });
      return bannerSaranaPrasaranaa;
    } catch (error) {
      console.error("Error in createBannerSaranaPrasarana:", error);
      throw error;
    }
  }

  async updateBannerSaranaPrasarana(
    id: number,
    bannerSaranaPrasarana: BannerSaranaPrasarana
  ) {
    try {
      const updateData: any = {
        konten: bannerSaranaPrasarana.konten,
      };

      // Hanya upload banner baru jika ada file yang diunggah
      if (bannerSaranaPrasarana.banner) {
        const bannerUrl = await uploadToCloudinary(
          bannerSaranaPrasarana.banner.buffer
        );
        updateData.banner = bannerUrl;
      }

      const updatedBanner = await prisma.saranaPrasaranaBanner.update({
        where: { id },
        data: updateData,
      });

      return updatedBanner;
    } catch (error) {
      console.error("Error in updateBannerSaranaPrasarana:", error);
      throw error;
    }
  }

  async deleteBannerSaranaPrasarana(id: number) {
    try {
      const deletedData = await prisma.saranaPrasaranaBanner.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteBannerSaranaPrasarana:", error);
      throw error;
    }
  }

  async getDataBanner() {
    try {
      const dataBanner = await prisma.saranaPrasaranaBanner.findMany();
      return dataBanner;
    } catch (error) {
      console.error("Error in getDataBanner:", error);
      throw error;
    }
  }

  async createStatistikSaranaPrasarana(statistik: StatistikSaranaPrasarana) {
    try {
      const statistikSejarahS1 = await prisma.statistikSaranaPrasarana.create({
        data: {
          ruangKuliah: String(statistik.ruangKuliah),
          koleksiBuku: String(statistik.koleksiBuku),
          unitKomputer: String(statistik.unitKomputer),
          lantaiGedung: String(statistik.lantaiGedung),
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

  async updateStatistikSaranaPrasarana(
    id: number,
    statistik: StatistikSaranaPrasarana
  ) {
    try {
      const updateData: any = {
        ruangKuliah: String(statistik.ruangKuliah),
        koleksiBuku: String(statistik.koleksiBuku),
        unitKomputer: String(statistik.unitKomputer),
        lantaiGedung: String(statistik.lantaiGedung),
        slogan: String(statistik.slogan),
        deskripsi: String(statistik.deskripsi),
      };

      const updatedStatistik = await prisma.statistikSaranaPrasarana.update({
        where: { id },
        data: updateData,
      });

      return updatedStatistik;
    } catch (error) {
      console.error("Error in updateStatistikSejarahS1:", error);
      throw error;
    }
  }

  async deleteStatistikSaranaPrasarana(id: number) {
    try {
      const deletedData = await prisma.statistikSaranaPrasarana.delete({
        where: { id },
      });
      return deletedData;
    } catch (error) {
      console.error("Error in deleteStatistikSejarahS1:", error);
      throw error;
    }
  }

  async getAllStatistikSaranaPrasarana() {
    try {
      const statistikSejarahS1 =
        await prisma.statistikSaranaPrasarana.findMany();
      return statistikSejarahS1;
    } catch (error) {
      console.error("Error in getAllStatistikSejarahS1:", error);
      throw error;
    }
  }
}

export default new SaranaPrasaranaService();
