import sosialisasiPraturanUUDService from "../services/sosialisasi-praturanUUD-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SosialisasiPraturanUUDController {
  async createSosialisasiPraturanUUD(req: MulterRequest, res: Response) {
    try {
      const { title, waktu, deskripsi, kategori, type } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const sosialisasiPraturanUUD =
        await sosialisasiPraturanUUDService.createSosialisasiPraturanUUD({
          title,
          waktu,
          deskripsi,
          kategori: kategoriJSON,
          type,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Sosialisasi Praturan UUD berhasil dibuat",
        sosialisasiPraturanUUD,
      });
    } catch (error) {
      console.error("Error in createSosialisasiPraturanUUD:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllSosialisasiPraturanUUD(req: Request, res: Response) {
    try {
      const result =
        await sosialisasiPraturanUUDService.getAllSosialisasiPraturanUUD();
      res.status(200).json({
        success: true,
        message: "Sosialisasi Praturan UUD berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllPenyukuhanHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateSosialisasiPraturanUUDById(req: MulterRequest, res: Response) {
    try {
      const { title, waktu, deskripsi, kategori, type } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);

      const updateData: any = {
        title,
        waktu,
        deskripsi,
        kategori: kategoriJSON,
        type,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedSosialisasiPraturanUUD =
        await sosialisasiPraturanUUDService.updateSosialisasiPraturanUUDById(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Sosialisasi Praturan UUD berhasil diupdate",
        data: updatedSosialisasiPraturanUUD,
      });
    } catch (error) {
      console.error("Error in updateSosialisasiPraturanUUDById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteSosialisasiPraturanUUDById(req: Request, res: Response) {
    try {
      const result =
        await sosialisasiPraturanUUDService.deleteSosialisasiPraturanUUDById(
          Number(req.params.id)
        );
      res.status(200).json({
        success: true,
        message: "Sosialisasi Praturan UUD berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteSosialisasiPraturanUUDById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikSosialisasiPraturanUUD(req: Request, res: Response) {
    try {
      const {
        kegiatanOrginsasi,
        pesertaTeredukasi,
        institusiMitra,
        totalSosialisasi,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSosialisasiPraturanUUD =
        await sosialisasiPraturanUUDService.createStatistikSosialisasiPraturanUUD(
          {
            kegiatanOrginsasi,
            pesertaTeredukasi,
            institusiMitra,
            totalSosialisasi,
            slogan,
            deskripsi,
          }
        );
      return res.status(201).json({
        success: true,
        message: "Statistik Sosialisasi Praturan UUD berhasil dibuat",
        statistikSosialisasiPraturanUUD,
      });
    } catch (error) {
      console.error("Error in createStatistikPenyuluhanHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikSosialisasiPraturanUUD(req: Request, res: Response) {
    try {
      const result =
        await sosialisasiPraturanUUDService.getAllStatistikSosialisasiPraturanUUD();
      res.status(200).json({
        success: true,
        message: "Statistik Sosialisasi Praturan UUD berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllStatistikPenyuluhanHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikSosialisasiPraturanUUDById(req: Request, res: Response) {
    try {
      const {
        kegiatanOrginsasi,
        pesertaTeredukasi,
        institusiMitra,
        totalSosialisasi,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        kegiatanOrginsasi,
        pesertaTeredukasi,
        institusiMitra,
        totalSosialisasi,
        slogan,
        deskripsi,
      };
      const updatedStatistikPenyuluhanHukum =
        await sosialisasiPraturanUUDService.updateStatistikSosialisasiPraturanUUDById(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Sosialisasi Praturan UUD berhasil diupdate",
        data: updatedStatistikPenyuluhanHukum,
      });
    } catch (error) {
      console.error("Error in updateStatistikPenyuluhanHukumById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikSosialisasiPraturanUUDById(req: Request, res: Response) {
    try {
      const result =
        await sosialisasiPraturanUUDService.deleteStatistikSosialisasiPraturanUUDById(
          Number(req.params.id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik Sosialisasi Praturan UUD berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikPenyuluhanHukumById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new SosialisasiPraturanUUDController();
