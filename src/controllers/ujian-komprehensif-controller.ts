import UjianKomprehensifService from "../services/ujian-komprehensif-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class UjianKomprehensifController {
  async createUjianKomprehensif(req: MulterRequest, res: Response) {
    try {
      const { title, kategori, type, waktu, deskripsi } = req.body;
      const kategoriJson = JSON.parse(kategori);
      const ujianKomprehensif =
        await UjianKomprehensifService.createUjianKomprehensif({
          title,
          kategori: kategoriJson,
          foto: req.files!["foto"]?.[0] || null,
          type,
          waktu,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: ujianKomprehensif,
      });
    } catch (error) {
      console.error("Error in createUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat ujian komprehensif",
      });
    }
  }

  async getAllUjianKomprehensif(req: Request, res: Response) {
    try {
      const ujianKomprehensif =
        await UjianKomprehensifService.getAllUjianKomprehensif();
      return res.status(200).json({
        success: true,
        data: ujianKomprehensif,
      });
    } catch (error) {
      console.error("Error in getAllUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil ujian komprehensif",
      });
    }
  }

  async updateUjianKomprehensif(req: MulterRequest, res: Response) {
    try {
      const { title, kategori, type, waktu, deskripsi } = req.body;
      const id = req.params.id;
      const kategoriJson = JSON.parse(kategori);
      const updateData: any = {
        title,
        kategori: kategoriJson,
        type,
        waktu,
        deskripsi,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedUjianKomprehensif =
        await UjianKomprehensifService.updateUjianKomprehensif(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Ujian komprehensif berhasil diupdate",
        data: updatedUjianKomprehensif,
      });
    } catch (error) {
      console.error("Error in updateUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate ujian komprehensif",
      });
    }
  }

  async deleteUjianKomprehensif(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData =
        await UjianKomprehensifService.deleteUjianKomprehensif(Number(id));
      return res.status(200).json({
        success: true,
        message: "Ujian komprehensif berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus ujian komprehensif",
      });
    }
  }

  async createStatistikUjianKomprehensif(req: Request, res: Response) {
    try {
      const {
        perTahun,
        tingkatKelulusan,
        penguji,
        menitUjian,
        slogan,
        deskripsi,
      } = req.body;
      const statistikUjianKomprehensif =
        await UjianKomprehensifService.createStatistikUjianKomprehensif({
          perTahun,
          tingkatKelulusan,
          penguji,
          menitUjian,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: statistikUjianKomprehensif,
      });
    } catch (error) {
      console.error("Error in createStatistikUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik ujian komprehensif",
      });
    }
  }

  async getAllStatistikUjianKomprehensif(req: Request, res: Response) {
    try {
      const statistikUjianKomprehensif =
        await UjianKomprehensifService.getAllStatistikUjianKomprehensif();
      return res.status(200).json({
        success: true,
        data: statistikUjianKomprehensif,
      });
    } catch (error) {
      console.error("Error in getAllStatistikUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik ujian komprehensif",
      });
    }
  }
  async updateStatistikUjianKomprehensif(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        perTahun,
        tingkatKelulusan,
        penguji,
        menitUjian,
        slogan,
        deskripsi,
      } = req.body;
      const updatedStatistikUjianKomprehensif =
        await UjianKomprehensifService.updateStatistikUjianKomprehensif(
          Number(id),
          {
            perTahun,
            tingkatKelulusan,
            penguji,
            menitUjian,
            slogan,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Statistik ujian komprehensif berhasil diupdate",
        data: updatedStatistikUjianKomprehensif,
      });
    } catch (error) {
      console.error("Error in updateStatistikUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik ujian komprehensif",
      });
    }
  }

  async deleteStatistikUjianKomprehensif(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedStatistikUjianKomprehensif =
        await UjianKomprehensifService.deleteStatistikUjianKomprehensif(
          Number(id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik ujian komprehensif berhasil dihapus",
        data: deletedStatistikUjianKomprehensif,
      });
    } catch (error) {
      console.error("Error in deleteStatistikUjianKomprehensif:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik ujian komprehensif",
      });
    }
  }
}

export default new UjianKomprehensifController();
