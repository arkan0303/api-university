import saranaPrasaranaService from "../services/saranaPrasaranaService";

import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SaranaPrasaranaController {
  async createSaranaPrasarana(req: MulterRequest, res: Response) {
    try {
      const { judul, katagori, deskripsi } = req.body;
      console.log(req.body);
      const galeriFiles = req.files?.["foto"] || [];

      console.log(galeriFiles);

      const saranaPrasarana =
        await saranaPrasaranaService.createSaranaPrasarana({
          judul,
          katagori,
          deskripsi,
          foto: Array.isArray(galeriFiles) ? galeriFiles : [galeriFiles],
        });
      res.status(201).json(saranaPrasarana);
    } catch (error) {
      console.error("Error in createSaranaPrasarana:", error);
      res.status(500).json({ error: "Failed to create sarana prasarana" });
    }
  }

  async getAllSaranaPrasarana(req: Request, res: Response) {
    try {
      const saranaPrasarana =
        await saranaPrasaranaService.getAllSaranaPrasarana();
      res.status(200).json({
        success: true,
        data: saranaPrasarana,
      });
    } catch (error) {
      console.error("Error in getAllSaranaPrasarana:", error);
      res.status(500).json({ error: "Failed to get sarana prasarana" });
    }
  }

  async updateSaranaPrasarana(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const { judul, katagori, deskripsi } = req.body;
      if (!judul || !katagori || !deskripsi === undefined) {
        return res.status(400).json({
          success: false,
          message: "Semua field kecuali foto wajib diisi",
        });
      }

      const updateData: any = {
        judul,
        katagori,
        deskripsi,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const saranaPrasarana =
        await saranaPrasaranaService.updateSaranaPrasarana(
          Number(id), // Konversi id ke number
          updateData
        );
      res.status(200).json(saranaPrasarana);
    } catch (error) {
      console.error("Error in updateSaranaPrasarana:", error);
      res.status(500).json({ error: "Failed to update sarana prasarana" });
    }
  }

  async deleteSaranaPrasarana(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await saranaPrasaranaService.deleteSaranaPrasarana(
        parseInt(id)
      );
      res.status(200).json(deletedData);
    } catch (error) {
      console.error("Error in deleteSaranaPrasarana:", error);
      res.status(500).json({ error: "Failed to delete sarana prasarana" });
    }
  }

  async createBannerSaranaPrasarana(req: MulterRequest, res: Response) {
    try {
      const { konten } = req.body;
      if (!req.files?.["banner"] || req.files["banner"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "banner harus diupload",
        });
      }
      const bannerSaranaPrasarana =
        await saranaPrasaranaService.createBannerSaranaPrasarana({
          banner: req.files?.["banner"][0],
          konten,
        });
      res.status(201).json(bannerSaranaPrasarana);
    } catch (error) {
      console.error("Error in createBannerSaranaPrasarana:", error);
      res
        .status(500)
        .json({ error: "Failed to create banner sarana prasarana" });
    }
  }

  async updateBannerSaranaPrasarana(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const { konten } = req.body;
      const updateData: any = {
        konten,
      };

      // Hanya upload banner baru jika ada file yang diunggah
      if (req.files?.["banner"]?.[0]) {
        updateData.banner = req.files["banner"][0];
      }

      const updatedBanner =
        await saranaPrasaranaService.updateBannerSaranaPrasarana(
          Number(id), // Konversi id ke number
          updateData
        );
      res.status(200).json(updatedBanner);
    } catch (error) {
      console.error("Error in updateBannerSaranaPrasarana:", error);
      res
        .status(500)
        .json({ error: "Failed to update banner sarana prasarana" });
    }
  }

  async deleteBannerSaranaPrasarana(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await saranaPrasaranaService.deleteBannerSaranaPrasarana(parseInt(id));
      res.status(200).json(deletedData);
    } catch (error) {
      console.error("Error in deleteBannerSaranaPrasarana:", error);
      res
        .status(500)
        .json({ error: "Failed to delete banner sarana prasarana" });
    }
  }

  async getDataBanner(req: Request, res: Response) {
    try {
      const dataBanner = await saranaPrasaranaService.getDataBanner();
      return res.status(200).json({
        success: true,
        message: "Data berhasil diambil",
        data: dataBanner,
      });
    } catch (error) {
      console.error("Error in getDataBanner:", error);
      res.status(500).json({ error: "Gagal mengambil data" });
    }
  }

  async createStatistikSaranaPrasarana(req: Request, res: Response) {
    try {
      const {
        ruangKuliah,
        koleksiBuku,
        unitKomputer,
        lantaiGedung,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSaranaPrasarana =
        await saranaPrasaranaService.createStatistikSaranaPrasarana({
          ruangKuliah,
          koleksiBuku,
          unitKomputer,
          lantaiGedung,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik S  arana Prasarana berhasil dibuat",
        statistikSaranaPrasarana,
      });
    } catch (error) {
      console.error("Error in createStatistikSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat statistik sejarah S1",
      });
    }
  }

  async updateStatistikSaranaPrasarana(req: Request, res: Response) {
    try {
      const {
        ruangKuliah,
        koleksiBuku,
        unitKomputer,
        lantaiGedung,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updatedStatistik =
        await saranaPrasaranaService.updateStatistikSaranaPrasarana(
          Number(id),
          {
            ruangKuliah,
            koleksiBuku,
            unitKomputer,
            lantaiGedung,
            slogan,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Sarana Prasarana berhasil diupdate",
        data: updatedStatistik,
      });
    } catch (error) {
      console.error("Error in updateStatistikSaranaPrasarana:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik sejarah S1",
      });
    }
  }

  async deleteStatistikSaranaPrasarana(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData =
        await saranaPrasaranaService.deleteStatistikSaranaPrasarana(Number(id));
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSaranaPrasarana:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async getAllStatistikSaranaPrasarana(req: Request, res: Response) {
    try {
      const statistikSaranaPrasarana =
        await saranaPrasaranaService.getAllStatistikSaranaPrasarana();
      return res.status(200).json({
        success: true,
        message: "Data berhasil diambil",
        data: statistikSaranaPrasarana,
      });
    } catch (error) {
      console.error("Error in getAllStatistikSaranaPrasarana:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil data",
      });
    }
  }
}

export default new SaranaPrasaranaController();
