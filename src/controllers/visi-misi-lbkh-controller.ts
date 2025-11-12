import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

import visiMisiLBKHService from "../services/visi-misi-lbkh";

class VisiMisiLBKHController {
  async createVisiMisiLBKH(req: MulterRequest, res: Response) {
    try {
      const { type, title, deskripsi, kategori } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const kategoriJSON = JSON.parse(kategori);
      const visMisiLBKH = await visiMisiLBKHService.createVisiMisiLBKH({
        type,
        title,
        deskripsi,
        kategori: kategoriJSON,
        foto: req.files?.["foto"][0],
      });
      res.status(201).json({
        success: true,
        message: "Vis Misi LBKH berhasil dibuat",
        data: visMisiLBKH,
      });
    } catch (error) {
      console.error("Error in createVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat vis misi lbkh",
      });
    }
  }

  async getAllVisiMisiLBKH(req: Request, res: Response) {
    try {
      const visiMisiLBKH = await visiMisiLBKHService.getAllVisiMisiLBKH();
      return res.status(200).json({
        success: true,
        message: "Vis Misi LBKH berhasil diambil",
        data: visiMisiLBKH,
      });
    } catch (error) {
      console.error("Error in getAllVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil vis misi lbkh",
      });
    }
  }

  async updateVisiMisiLBKH(req: MulterRequest, res: Response) {
    try {
      const { type, title, deskripsi, kategori } = req.body;
      const id = req.params.id;

      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        type,
        title,
        deskripsi,
        kategori: kategoriJSON,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const visMisiLBKH = await visiMisiLBKHService.updateVisiMisiLBKH(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Vis Misi LBKH berhasil diupdate",
        data: visMisiLBKH,
      });
    } catch (error) {
      console.error("Error in updateVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate vis misi lbkh",
      });
    }
  }

  async deleteVisiMisiLBKH(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await visiMisiLBKHService.deleteVisiMisiLBKH(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async createStatistikVisiMisiLBKH(req: Request, res: Response) {
    try {
      const {
        paralegaf,
        kasusDitangani,
        advokatAktif,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const statistikVisiMisiLBKH =
        await visiMisiLBKHService.createStatistikVisiMisiLBKH({
          paralegaf,
          kasusDitangani,
          advokatAktif,
          tingkatKepuasan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik vis misi lbkh berhasil dibuat",
        data: statistikVisiMisiLBKH,
      });
    } catch (error) {
      console.error("Error in createStatistikVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat statistik vis misi lbkh",
      });
    }
  }

  async getAllStatistikVisiMisiLBKH(req: Request, res: Response) {
    try {
      const statistikVisiMisiLBKH =
        await visiMisiLBKHService.getAllStatistikVisiMisiLBKH();
      return res.status(200).json({
        success: true,
        message: "Statistik vis misi lbkh berhasil diambil",
        data: statistikVisiMisiLBKH,
      });
    } catch (error) {
      console.error("Error in getAllStatistikVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik vis misi lbkh",
      });
    }
  }

  async updateStatistikVisiMisiLBKH(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        paralegaf,
        kasusDitangani,
        advokatAktif,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const updatedData = await visiMisiLBKHService.updateStatistikVisiMisiLBKH(
        Number(id),
        {
          paralegaf,
          kasusDitangani,
          advokatAktif,
          tingkatKepuasan,
          slogan,
          deskripsi,
        }
      );
      return res.status(200).json({
        success: true,
        message: "Statistik vis misi lbkh berhasil diupdate",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error in updateStatistikVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik vis misi lbkh",
      });
    }
  }

  async deleteStatistikVisiMisiLBKH(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await visiMisiLBKHService.deleteStatistikVisiMisiLBKH(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikVisiMisiLBKH:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }
}

export default new VisiMisiLBKHController();
