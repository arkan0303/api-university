import pembuatanLegalService from "../services/pembuatan-legal-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class PembuatanLegalController {
  async createPembuatanLegal(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, kategori, waktu } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const pendampinganHukum =
        await pembuatanLegalService.createPembuatanLegal({
          title,
          deskripsi,
          kategori: kategoriJSON,
          waktu,
          foto: req.files?.["foto"][0],
        });
      return res.status(200).json({
        success: true,
        message: "Pendampingan Hukum berhasil dibuat",
        data: pendampinganHukum,
      });
    } catch (error) {
      console.error("Error in createPendampinganHukum:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat konsultasi hukum",
      });
    }
  }

  async getAllPembuatanLegal(req: Request, res: Response) {
    try {
      const pembuatanLegal = await pembuatanLegalService.getAllPembuatanLegal();
      return res.status(200).json({
        success: true,
        message: "Pembuatan Legal berhasil diambil",
        data: pembuatanLegal,
      });
    } catch (error) {
      console.error("Error in getAllPembuatanLegal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil konsultasi hukum",
      });
    }
  }

  async updatePembuatanLegal(req: MulterRequest, res: Response) {
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
      const updatedPembuatanLegal =
        await pembuatanLegalService.updatePembuatanLegal(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Pembuatan Legal berhasil diupdate",
        data: updatedPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in updatePembuatanLegal:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deletePembuatanLegal(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedPembuatanLegal =
        await pembuatanLegalService.deletePembuatanLegal(Number(id));
      return res.status(200).json({
        success: true,
        message: "Pembuatan Legal berhasil dihapus",
        data: deletedPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in deletePembuatanLegal:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createProsedurPembuatanLegal(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, waktu } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const prosedurPembuatanLegal =
        await pembuatanLegalService.createProsedurPembuatanLegal({
          title,
          deskripsi,
          waktu,
          foto: req.files?.["foto"][0],
        });
      return res.status(200).json({
        success: true,
        message: "Prosedur Pembuatan Legal berhasil dibuat",
        data: prosedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in createProsedurPembuatanLegal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat prosedur pembuatan legal",
      });
    }
  }

  async getAllProsedurPembuatanLegal(req: Request, res: Response) {
    try {
      const prosedurPembuatanLegal =
        await pembuatanLegalService.getAllProsedurPembuatanLegal();
      return res.status(200).json({
        success: true,
        message: "Prosedur Pembuatan Legal berhasil diambil",
        data: prosedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in getAllProsedurPembuatanLegal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil prosedur pendampingan hukum",
      });
    }
  }

  async updateProsedurPembuatanLegal(req: MulterRequest, res: Response) {
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
      const updatedProsedurPembuatanLegal =
        await pembuatanLegalService.updateProsedurPembuatanLegal(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Prosedur Pembuatan Legal berhasil diupdate",
        data: updatedProsedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in updateProsedurPembuatanLegal:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProsedurPembuatanLegal(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedProsedurPembuatanLegal =
        await pembuatanLegalService.deleteProsedurPembuatanLegal(Number(id));
      return res.status(200).json({
        success: true,
        message: "Prosedur Pembuatan Legal berhasil dihapus",
        data: deletedProsedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in deleteProsedurPembuatanLegal:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikProsedurPembuatanLegal(req: Request, res: Response) {
    try {
      const {
        legalOpinianPerTahun,
        tingkatKepuasan,
        ahliHukum,
        totalPembuatan,
        slogan,
        deskripsi,
      } = req.body;

      console.log(req.body);
      const statistikProsedurPembuatanLegal =
        await pembuatanLegalService.createStatistikProsedurPembuatanLegal({
          legalOpinianPerTahun,
          tingkatKepuasan,
          ahliHukum,
          totalPembuatan,
          slogan,
          deskripsi,
        });
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pembuatan Legal berhasil dibuat",
        data: statistikProsedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in createStatistikProsedurPembuatanLegal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik prosedur konsultasi",
      });
    }
  }

  async getAllStatistikProsedurPembuatanLegal(req: Request, res: Response) {
    try {
      const statistikProsedurPembuatanLegal =
        await pembuatanLegalService.getAllStatistikProsedurPembuatanLegal();
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pembuatan Legal berhasil diambil",
        data: statistikProsedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in getAllStatistikProsedurPembuatanLegal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik prosedur konsultasi",
      });
    }
  }

  async updateStatistikProsedurPembuatanLegal(req: Request, res: Response) {
    try {
      const {
        legalOpinianPerTahun,
        tingkatKepuasan,
        ahliHukum,
        totalPembuatan,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        legalOpinianPerTahun,
        tingkatKepuasan,
        ahliHukum,
        totalPembuatan,
        slogan,
        deskripsi,
      };
      const updatedStatistikProsedurPembuatanLegal =
        await pembuatanLegalService.updateStatistikProsedurPembuatanLegal(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pembuatan Legal berhasil diupdate",
        data: updatedStatistikProsedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in updateStatistikProsedurPembuatanLegal:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikProsedurPembuatanLegal(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedStatistikProsedurPembuatanLegal =
        await pembuatanLegalService.deleteStatistikProsedurPembuatanLegal(
          Number(id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pembuatan Legal berhasil dihapus",
        data: deletedStatistikProsedurPembuatanLegal,
      });
    } catch (error) {
      console.error("Error in deleteStatistikProsedurPembuatanLegal:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new PembuatanLegalController();
