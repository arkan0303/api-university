import { Request, Response } from "express";
import DataPKPAService from "../services/data-pkpa-service";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}
class DataPKPAController {
  async createDataPKPA(req: MulterRequest, res: Response) {
    try {
      const { foto, title, deskripsi, jumlah } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const dataPKPA = await DataPKPAService.createDataPKPA({
        foto: req.files["foto"][0],
        title,
        deskripsi,
        jumlah,
      });
      res.status(201).json({
        success: true,
        message: "Data PKPA berhasil dibuat",
        data: dataPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getDataPKPA(req: Request, res: Response) {
    try {
      const dataPKPA = await DataPKPAService.getDataPKPA();
      res.status(200).json({
        success: true,
        message: "Data PKPA berhasil diambil",
        data: dataPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateDataPKPA(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const { title, deskripsi, jumlah, foto } = req.body;
      const updateData: any = {
        title,
        deskripsi,
        jumlah,
        foto,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedDataPKPA = await DataPKPAService.updateDataPKPA(
        Number(id),
        updateData
      );
      return res.status(200).json({
        success: true,
        message: "Data PKPA berhasil diupdate",
        data: updatedDataPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteDataPKPA(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const dataPKPA = await DataPKPAService.deleteDataPKPA(id);
      res.status(200).json({
        success: true,
        message: "Data PKPA berhasil dihapus",
        data: dataPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikPKPA(req: Request, res: Response) {
    try {
      const { pesertaPKPA, angkatan, tingkatKelulusan, mitraHukum } = req.body;
      const statistikPKPA = await DataPKPAService.createStatistikPKPA({
        pesertaPKPA,
        angkatan,
        tingkatKelulusan,
        mitraHukum,
      });
      res.status(201).json({
        success: true,
        message: "Statistik PKPA berhasil dibuat",
        data: statistikPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikPKPA(req: Request, res: Response) {
    try {
      const statistikPKPA = await DataPKPAService.getStatistikPKPA();
      res.status(200).json({
        success: true,
        message: "Data PKPA berhasil diambil",
        data: statistikPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikPKPA(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { pesertaPKPA, angkatan, tingkatKelulusan, mitraHukum } = req.body;
      const updateData: any = {
        pesertaPKPA,
        angkatan,
        tingkatKelulusan,
        mitraHukum,
      };

      const updatedStatistikPKPA = await DataPKPAService.updateStatistikPKPA(
        Number(id), // Konversi id ke number
        updateData
      );
      return res.status(200).json({
        success: true,
        message: "Statistik PKPA berhasil diupdate",
        data: updatedStatistikPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikPKPA(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const statistikPKPA = await DataPKPAService.deleteStatistikPKPA(id);
      res.status(200).json({
        success: true,
        message: "Statistik PKPA berhasil dihapus",
        data: statistikPKPA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new DataPKPAController();
