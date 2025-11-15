import konsultasiHukumService from "../services/konsultasi-hukum-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class KonsultasiHukumController {
  async createKonsultasiHukum(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, kategori, waktu } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const konsultasiHukum =
        await konsultasiHukumService.createKonsultasiHukum({
          title,
          deskripsi,
          kategori: kategoriJSON,
          waktu,
          foto: req.files?.["foto"][0],
        });
      return res.status(200).json({
        success: true,
        message: "Konsultasi Hukum berhasil dibuat",
        data: konsultasiHukum,
      });
    } catch (error) {
      console.error("Error in createKonsultasiHukum:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat konsultasi hukum",
      });
    }
  }

  async getAllKonsultasiHukum(req: Request, res: Response) {
    try {
      const konsultasiHukum =
        await konsultasiHukumService.getAllKonsultasiHukum();
      return res.status(200).json({
        success: true,
        message: "Konsultasi Hukum berhasil diambil",
        data: konsultasiHukum,
      });
    } catch (error) {
      console.error("Error in getAllKonsultasiHukum:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil konsultasi hukum",
      });
    }
  }

  async updateKonsultasiHukum(req: MulterRequest, res: Response) {
    try {
      const { title, kategori, deskripsi, waktu } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        title,
        deskripsi,
        kategori: kategoriJSON,
        waktu,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedKonsultasiHukum =
        await konsultasiHukumService.updateKonsultasiHukum(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Konsultasi Hukum berhasil diupdate",
        data: updatedKonsultasiHukum,
      });
    } catch (error) {
      console.error("Error in updateKonsultasiHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteKonsultasiHukum(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedKonsultasiHukum =
        await konsultasiHukumService.deleteKonsultasiHukum(Number(id));
      return res.status(200).json({
        success: true,
        message: "Konsultasi Hukum berhasil dihapus",
        data: deletedKonsultasiHukum,
      });
    } catch (error) {
      console.error("Error in deleteKonsultasiHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createProsedurKonsultasi(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, waktu } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const prosedurKonsultasi =
        await konsultasiHukumService.createProsedurKonsultasi({
          title,
          deskripsi,
          waktu,
          foto: req.files?.["foto"][0],
        });
      return res.status(200).json({
        success: true,
        message: "Prosedur Konsultasi berhasil dibuat",
        data: prosedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in createProsedurKonsultasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat prosedur konsultasi",
      });
    }
  }

  async getAllProsedurKonsultasi(req: Request, res: Response) {
    try {
      const prosedurKonsultasi =
        await konsultasiHukumService.getAllProsedurKonsultasi();
      return res.status(200).json({
        success: true,
        message: "Prosedur Konsultasi berhasil diambil",
        data: prosedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in getAllProsedurKonsultasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil prosedur konsultasi",
      });
    }
  }

  async updateProsedurKonsultasi(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, waktu } = req.body;
      const id = req.params.id;
      const updateData: any = {
        title,
        deskripsi,
        waktu,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedProsedurKonsultasi =
        await konsultasiHukumService.updateProsedurKonsultasi(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Prosedur Konsultasi berhasil diupdate",
        data: updatedProsedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in updateProsedurKonsultasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProsedurKonsultasi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedProsedurKonsultasi =
        await konsultasiHukumService.deleteProsedurKonsultasi(Number(id));
      return res.status(200).json({
        success: true,
        message: "Prosedur Konsultasi berhasil dihapus",
        data: deletedProsedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in deleteProsedurKonsultasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikProsedurKonsultasi(req: Request, res: Response) {
    try {
      const {
        konsultasiPerBulan,
        tingkatKepuasan,
        konsultasiAktif,
        totalKonsultasi,
        slogan,
        deskripsi,
      } = req.body;
      const statistikProsedurKonsultasi =
        await konsultasiHukumService.createStatistikProsedurKonsultasi({
          konsultasiPerBulan,
          tingkatKepuasan,
          konsultasiAktif,
          totalKonsultasi,
          slogan,
          deskripsi,
        });
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Konsultasi berhasil dibuat",
        data: statistikProsedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in createStatistikProsedurKonsultasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik prosedur konsultasi",
      });
    }
  }

  async getAllStatistikProsedurKonsultasi(req: Request, res: Response) {
    try {
      const statistikProsedurKonsultasi =
        await konsultasiHukumService.getAllStatistikProsedurKonsultasi();
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Konsultasi berhasil diambil",
        data: statistikProsedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in getAllStatistikProsedurKonsultasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik prosedur konsultasi",
      });
    }
  }

  async updateStatistikProsedurKonsultasi(req: Request, res: Response) {
    try {
      const {
        konsultasiPerBulan,
        tingkatKepuasan,
        konsultasiAktif,
        totalKonsultasi,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        konsultasiPerBulan,
        tingkatKepuasan,
        konsultasiAktif,
        totalKonsultasi,
        slogan,
        deskripsi,
      };
      const updatedStatistikProsedurKonsultasi =
        await konsultasiHukumService.updateStatistikProsedurKonsultasi(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Konsultasi berhasil diupdate",
        data: updatedStatistikProsedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in updateStatistikProsedurKonsultasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikProsedurKonsultasi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedStatistikProsedurKonsultasi =
        await konsultasiHukumService.deleteStatistikProsedurKonsultasi(
          Number(id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Konsultasi berhasil dihapus",
        data: deletedStatistikProsedurKonsultasi,
      });
    } catch (error) {
      console.error("Error in deleteStatistikProsedurKonsultasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new KonsultasiHukumController();
