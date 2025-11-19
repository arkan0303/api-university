import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface TrackerStudy {
  foto: Express.Multer.File;
  title: string;
  tugas: Prisma.JsonValue[];
  gajihRata: string;
  persentasi: string; //25%
  institusi: Prisma.JsonValue[];
  keahlian: Prisma.JsonValue[];
}

interface waktuTungguKerja {
  kategoriWaktu: string; // < 3 bulan
  persentasi: string; // 25%
  deskripsi: string;
}

interface StatistikTrackerStudy {
  tingkatKeterserapan: string;
  rataGaji: string;
  waktuTungguKerja: string;
  kesesuaianBidang: string;
  slogan: string;
  deskripsi: string;
}

class TrackerStudyService {
  async createTrackerStudy(data: TrackerStudy) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const trackerStudy = await prisma.trackerStudy.create({
        data: {
          foto: fotoUrl,
          title: data.title,
          tugas: data.tugas,
          gajihRata: data.gajihRata,
          persentasi: data.persentasi,
          institusi: data.institusi,
          keahlian: data.keahlian,
        },
      });
      return trackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async getAllTrackerStudy() {
    try {
      const trackerStudy = await prisma.trackerStudy.findMany();
      return trackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async updateTrackerStudy(id: number, data: TrackerStudy) {
    try {
      const updateData: any = {
        title: data.title,
        foto: data.foto,
        tugas: data.tugas,
        gajihRata: data.gajihRata,
        persentasi: data.persentasi,
        institusi: data.institusi,
        keahlian: data.keahlian,
      };
      if (data.foto) {
        const fotoUrl = await uploadToCloudinary(data.foto.buffer);
        updateData.foto = fotoUrl;
      }
      const updatedTrackerStudy = await prisma.trackerStudy.update({
        where: { id },
        data: updateData,
      });
      return updatedTrackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async deleteTrackerStudy(id: number) {
    try {
      const deletedTrackerStudy = await prisma.trackerStudy.delete({
        where: { id },
      });
      return deletedTrackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async createWaktuTungguKerja(data: waktuTungguKerja) {
    try {
      const waktuTungguKerja = await prisma.waktuTungguKerja.create({
        data: {
          kategoriWaktu: data.kategoriWaktu,
          persentasi: data.persentasi,
          deskripsi: data.deskripsi,
        },
      });
      return waktuTungguKerja;
    } catch (error) {
      throw error;
    }
  }

  async getAllWaktuTungguKerja() {
    try {
      const waktuTungguKerja = await prisma.waktuTungguKerja.findMany();
      return waktuTungguKerja;
    } catch (error) {
      throw error;
    }
  }

  async updateWaktuTungguKerja(id: number, data: waktuTungguKerja) {
    try {
      const updateData: any = {
        kategoriWaktu: data.kategoriWaktu,
        persentasi: data.persentasi,
        deskripsi: data.deskripsi,
      };
      const updatedWaktuTungguKerja = await prisma.waktuTungguKerja.update({
        where: { id },
        data: updateData,
      });
      return updatedWaktuTungguKerja;
    } catch (error) {
      throw error;
    }
  }

  async deleteWaktuTungguKerja(id: number) {
    try {
      const deletedWaktuTungguKerja = await prisma.waktuTungguKerja.delete({
        where: { id },
      });
      return deletedWaktuTungguKerja;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikTrackerStudy(data: StatistikTrackerStudy) {
    try {
      const statistikTrackerStudy = await prisma.statistikTrackerStudy.create({
        data: {
          tingkatKeterserapan: data.tingkatKeterserapan,
          rataGaji: data.rataGaji,
          waktuTungguKerja: data.waktuTungguKerja,
          kesesuaianBidang: data.kesesuaianBidang,
          slogan: data.slogan,
          deskripsi: data.deskripsi,
        },
      });
      return statistikTrackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async getAllStatistikTrackerStudy() {
    try {
      const statistikTrackerStudy =
        await prisma.statistikTrackerStudy.findMany();
      return statistikTrackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikTrackerStudy(id: number, data: StatistikTrackerStudy) {
    try {
      const updateData: any = {
        tingkatKeterserapan: data.tingkatKeterserapan,
        rataGaji: data.rataGaji,
        waktuTungguKerja: data.waktuTungguKerja,
        kesesuaianBidang: data.kesesuaianBidang,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };
      const updatedStatistikTrackerStudy =
        await prisma.statistikTrackerStudy.update({
          where: { id },
          data: updateData,
        });
      return updatedStatistikTrackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async deleteStatistikTrackerStudy(id: number) {
    try {
      const deletedStatistikTrackerStudys =
        await prisma.statistikTrackerStudy.delete({
          where: { id },
        });
      return deletedStatistikTrackerStudys;
    } catch (error) {
      throw error;
    }
  }
}

export default new TrackerStudyService();
