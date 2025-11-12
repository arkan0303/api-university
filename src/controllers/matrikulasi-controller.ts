import matrikulasiService from "../services/matrikulasi-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class MatrikulasiController {
  async createMatrikulasi(req: MulterRequest, res: Response) {
    try {
      const { title, kategori, deskripsi, type, waktu, sks } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const matrikulasi = await matrikulasiService.create({
        title,
        deskripsi,
        type,
        waktu,
        sks,
        kategori: kategoriJSON,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        message: "Matrikulasi berhasil dibuat",
        matrikulasi,
      });
    } catch (error) {
      console.error("Error in createMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllMatrikulasi(req: Request, res: Response) {
    try {
      const matrikulasi = await matrikulasiService.getAllMatrikulasi();
      return res.status(200).json({
        success: true,
        message: "Matrikulasi berhasil diambil",
        data: matrikulasi,
      });
    } catch (error) {
      console.error("Error in getAllMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async updateMatrikulasi(req: MulterRequest, res: Response) {
    try {
      const { title, kategori, deskripsi, type, waktu, sks } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        title,
        deskripsi,
        type,
        waktu,
        sks,
        kategori: kategoriJSON,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedMatrikulasi = await matrikulasiService.updateMatrikulasi(
        Number(id),
        updateData
      );
      return res.status(200).json({
        success: true,
        message: "Matrikulasi berhasil diupdate",
        data: updatedMatrikulasi,
      });
    } catch (error) {
      console.error("Error in updateMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteMatrikulasi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedMatrikulasi = await matrikulasiService.deleteMatrikulasi(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Matrikulasi berhasil dihapus",
        data: deletedMatrikulasi,
      });
    } catch (error) {
      console.error("Error in deleteMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikMatrikulasi(req: Request, res: Response) {
    try {
      const { durasi, sks, totalMataKuliah, kelulusan, slogan, deskripsi } =
        req.body;
      const statistikMatrikulasi =
        await matrikulasiService.createStatistikMatrikulasi({
          durasi,
          sks,
          totalMataKuliah,
          kelulusan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik matrikulasi berhasil dibuat",
        statistikMatrikulasi,
      });
    } catch (error) {
      console.error("Error in createStatistikMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikMatrikulasi(req: Request, res: Response) {
    try {
      const statistikMatrikulasi =
        await matrikulasiService.getAllStatistikMatrikulasi();
      return res.status(200).json({
        success: true,
        message: "Statistik matrikulasi berhasil diambil",
        data: statistikMatrikulasi,
      });
    } catch (error) {
      console.error("Error in getAllStatistikMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async updateStatistikMatrikulasi(req: Request, res: Response) {
    try {
      const { durasi, sks, totalMataKuliah, kelulusan, slogan, deskripsi } =
        req.body;
      const id = req.params.id;
      const updateData: any = {
        durasi,
        sks,
        totalMataKuliah,
        kelulusan,
        slogan,
        deskripsi,
      };
      const updatedStatistikMatrikulasi =
        await matrikulasiService.updateStatistikMatrikulasi(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik matrikulasi berhasil diupdate",
        data: updatedStatistikMatrikulasi,
      });
    } catch (error) {
      console.error("Error in updateStatistikMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikMatrikulasi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedStatistikMatrikulasi =
        await matrikulasiService.deleteStatistikMatrikulasi(Number(id));
      return res.status(200).json({
        success: true,
        message: "Statistik matrikulasi berhasil dihapus",
        data: deletedStatistikMatrikulasi,
      });
    } catch (error) {
      console.error("Error in deleteStatistikMatrikulasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new MatrikulasiController();
