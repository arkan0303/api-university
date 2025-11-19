import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

interface TrackerStudyUnigal {
  foto: Express.Multer.File;
  title: string;
  tugas: Prisma.JsonValue[];
  gajihRata: string;
  persentasi: string; //25%
  institusi: Prisma.JsonValue[];
  keahlian: Prisma.JsonValue[];
}

interface waktuTungguKerjaUnigal {
  kategoriWaktu: string; // < 3 bulan
  persentasi: string; // 25%
  deskripsi: string;
}

interface StatistikTrackerStudyUnigal {
  tingkatKeterserapan: string;
  rataGaji: string;
  waktuTungguKerja: string;
  kesesuaianBidang: string;
  slogan: string;
  deskripsi: string;
}

class TrackerStudyUnigalService {
  async createTrackerStudy(data: TrackerStudyUnigal) {
    try {
      const fotoUrl = await uploadToCloudinary(data.foto.buffer);
      const trackerStudy = await prisma.trackerStudyUnigal.create({
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
      const trackerStudy = await prisma.trackerStudyUnigal.findMany();
      return trackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async updateTrackerStudy(id: number, data: TrackerStudyUnigal) {
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
      const updatedTrackerStudy = await prisma.trackerStudyUnigal.update({
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
      const deletedTrackerStudy = await prisma.trackerStudyUnigal.delete({
        where: { id },
      });
      return deletedTrackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async createWaktuTungguKerja(data: waktuTungguKerjaUnigal) {
    try {
      const waktuTungguKerja = await prisma.waktuTungguKerjaUnigal.create({
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
      const waktuTungguKerja = await prisma.waktuTungguKerjaUnigal.findMany();
      return waktuTungguKerja;
    } catch (error) {
      throw error;
    }
  }

  async updateWaktuTungguKerja(id: number, data: waktuTungguKerjaUnigal) {
    try {
      const updateData: any = {
        kategoriWaktu: data.kategoriWaktu,
        persentasi: data.persentasi,
        deskripsi: data.deskripsi,
      };
      const updatedWaktuTungguKerja =
        await prisma.waktuTungguKerjaUnigal.update({
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
      const deletedWaktuTungguKerja =
        await prisma.waktuTungguKerjaUnigal.delete({
          where: { id },
        });
      return deletedWaktuTungguKerja;
    } catch (error) {
      throw error;
    }
  }

  async createStatistikTrackerStudy(data: StatistikTrackerStudyUnigal) {
    try {
      const statistikTrackerStudy =
        await prisma.statistikTrackerStudyUnigal.create({
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
        await prisma.statistikTrackerStudyUnigal.findMany();
      return statistikTrackerStudy;
    } catch (error) {
      throw error;
    }
  }

  async updateStatistikTrackerStudy(
    id: number,
    data: StatistikTrackerStudyUnigal
  ) {
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
        await prisma.statistikTrackerStudyUnigal.update({
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
        await prisma.statistikTrackerStudyUnigal.delete({
          where: { id },
        });
      return deletedStatistikTrackerStudys;
    } catch (error) {
      throw error;
    }
  }
}

export default new TrackerStudyUnigalService();
