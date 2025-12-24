import suratIjinPenelitianService from "../services/surat-ijin-penelitian-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SuratIjinPenelitianController {
  async createSuratIjinPenelitian(req: MulterRequest, res: Response) {
    try {
      const {
        foto,
        title,
        status,
        noSurat,
        tanggalTerbit,
        periodePenelitian,
        idMahasiswa,
        penelitian,
        temaPenelitian,
        deskripsi,
        tujuanPenelitian,
        metodePenelitian,
        hasilDiharapkan,
      } = req.body;
      console.log(req.body);

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto utama harus diupload",
        });
      }

      const galeriFiles = req.files?.["file"] || [];
      const katagoriJSON = JSON.parse(tujuanPenelitian);
      const metodePenelitianJSON = JSON.parse(metodePenelitian);
      const hasilDiharapkanJSON = JSON.parse(hasilDiharapkan);
      console.log(katagoriJSON);
      const suratIjinPenelitian =
        await suratIjinPenelitianService.createSuratIjinPenelitian({
          foto: req.files?.["foto"][0],
          file: galeriFiles,
          title,
          status,
          noSurat,
          tanggalTerbit,
          periodePenelitian,
          idMahasiswa,
          penelitian,
          temaPenelitian,
          deskripsi,
          tujuanPenelitian: katagoriJSON,
          metodePenelitian: metodePenelitianJSON,
          hasilDiharapkan: hasilDiharapkanJSON,
        });
      res.status(201).json({
        success: true,
        message: "Surat ijin penelitian berhasil dibuat",
        data: suratIjinPenelitian,
      });
    } catch (error) {
      console.error("Error in createProgramSarjanaHukum:", error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async getAllSuratIjinPenelitian(req: Request, res: Response) {
    try {
      const suratIjinPenelitian =
        await suratIjinPenelitianService.getAllSuratIjinPenelitian();
      res.status(200).json({
        success: true,
        message: "Surat ijin penelitian berhasil diambil",
        data: suratIjinPenelitian,
      });
    } catch (error) {
      console.error("Error in getAllSuratIjinPenelitian:", error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }

  async updateSuratIjinPenelitian(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const {
        title,
        status,
        noSurat,
        tanggalTerbit,
        periodePenelitian,
        idMahasiswa,
        penelitian,
        temaPenelitian,
        deskripsi,
        tujuanPenelitian,
        metodePenelitian,
        hasilDiharapkan,
      } = req.body;
      const katagoriJSON = JSON.parse(tujuanPenelitian);
      const metodePenelitianJSON = JSON.parse(metodePenelitian);
      const hasilDiharapkanJSON = JSON.parse(hasilDiharapkan);
      const updateData: any = {
        title,
        status,
        noSurat,
        tanggalTerbit,
        periodePenelitian,
        idMahasiswa,
        penelitian,
        temaPenelitian,
        deskripsi,
        tujuanPenelitian: katagoriJSON,
        metodePenelitian: metodePenelitianJSON,
        hasilDiharapkan: hasilDiharapkanJSON,
      };
      if (req.files?.["foto"]?.[0]) {
        const image = req.files["foto"][0];
        updateData.foto = image;
      }
      const updatedSuratIjinPenelitian =
        await suratIjinPenelitianService.updateSuratIjinPenelitian(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Surat ijin penelitian berhasil diambil",
        data: updatedSuratIjinPenelitian,
      });
    } catch (error) {
      console.error("Error in updateSuratIjinPenelitian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteSuratIjinPenelitian(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await suratIjinPenelitianService.deleteSuratIjinPenelitian(Number(id));
      res.status(200).json({
        success: true,
        message: "Surat ijin penelitian berhasil diambil",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteSuratIjinPenelitian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikSuratIjinPenelitian(req: Request, res: Response) {
    try {
      const { totalSurat, diterima, ditolak, selesai, slogan, deskripsi } =
        req.body;
      const statistikSuratIjinPenelitian =
        await suratIjinPenelitianService.createStatistikSuratIjinPenelitian({
          totalSurat,
          diterima,
          ditolak,
          selesai,
          slogan,
          deskripsi,
        });
      res.status(200).json({
        success: true,
        message: "Surat ijin penelitian berhasil diambil",
        data: statistikSuratIjinPenelitian,
      });
    } catch (error) {
      console.error("Error in createStatistikSuratIjinPenelitian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikSuratIjinPenelitian(req: Request, res: Response) {
    try {
      const statistikSuratIjinPenelitian =
        await suratIjinPenelitianService.getStatistikSuratIjinPenelitian();
      res.status(200).json({
        success: true,
        message: "Statistik surat ijin penelitian berhasil diambil",
        data: statistikSuratIjinPenelitian,
      });
    } catch (error) {
      console.error("Error in getStatistikSuratIjinPenelitian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikSuratIjinPenelitian(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { totalSurat, diterima, ditolak, selesai, slogan, deskripsi } =
        req.body;
      const updateData: any = {
        totalSurat,
        diterima,
        ditolak,
        selesai,
        slogan,
        deskripsi,
      };
      const updatedStatistikSuratIjinPenelitian =
        await suratIjinPenelitianService.updateStatistikSuratIjinPenelitian(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Statistik surat ijin penelitian berhasil diupdate",
        data: updatedStatistikSuratIjinPenelitian,
      });
    } catch (error) {
      console.error("Error in updateStatistikSuratIjinPenelitian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikSuratIjinPenelitian(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await suratIjinPenelitianService.deleteStatistikSuratIjinPenelitian(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik surat ijin penelitian berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSuratIjinPenelitian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new SuratIjinPenelitianController();
