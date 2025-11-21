import { Request, Response } from "express";
import DataPeradilanSemuService from "../services/data-peradilan-semu-service";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}
class DataPeradilanSemuController {
  async createDataPeradilanSemu(req: MulterRequest, res: Response) {
    try {
      const { foto, title, deskripsi, jumlah } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const dataPeradilanSemu =
        await DataPeradilanSemuService.createDataPeradilanSemu({
          foto: req.files["foto"][0],
          title,
          deskripsi,
          jumlah,
        });
      res.status(201).json({
        success: true,
        message: "Data Peradilan Semu berhasil dibuat",
        data: dataPeradilanSemu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getDataPeradilanSemu(req: Request, res: Response) {
    try {
      const dataPeradilanSemu =
        await DataPeradilanSemuService.getDataPeradilanSemu();
      res.status(200).json({
        success: true,
        message: "Data Peradilan Semu berhasil diambil",
        data: dataPeradilanSemu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateDataPeradilanSemu(req: MulterRequest, res: Response) {
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

      const updatedDataPeradilanSemu =
        await DataPeradilanSemuService.updateDataPeradilanSemu(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Data Peradilan Semu berhasil diupdate",
        data: updatedDataPeradilanSemu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteDataPeradilanSemu(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const dataPeradilanSemu =
        await DataPeradilanSemuService.deleteDataPeradilanSemu(id);
      res.status(200).json({
        success: true,
        message: "Data Peradilan Semu berhasil dihapus",
        data: dataPeradilanSemu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikPeradilanSemu(req: Request, res: Response) {
    try {
      const { sidangSemu, peserta, tingkatKepuasan, kasusSimulasi } = req.body;
      const statistikPeradilanSemu =
        await DataPeradilanSemuService.createStatistikPeradilanSemu({
          sidangSemu,
          peserta,
          tingkatKepuasan,
          kasusSimulasi,
        });
      res.status(201).json({
        success: true,
        message: "Statistik Peradilan Semu berhasil dibuat",
        data: statistikPeradilanSemu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikPeradilanSemu(req: Request, res: Response) {
    try {
      const statistikPeradilanSemu =
        await DataPeradilanSemuService.getStatistikPeradilanSemu();
      res.status(200).json({
        success: true,
        message: "Data Peradilan Semu berhasil diambil",
        data: statistikPeradilanSemu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikPeradilanSemu(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { sidangSemu, peserta, tingkatKepuasan, kasusSimulasi } = req.body;
      const updateData: any = {
        sidangSemu,
        peserta,
        tingkatKepuasan,
        kasusSimulasi,
      };

      const updatedStatistikPKPA =
        await DataPeradilanSemuService.updateStatistikPeradilanSemu(
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

  async deleteStatistikPeradilanSemu(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const statistikPeradilanSemu =
        await DataPeradilanSemuService.deleteStatistikPeradilanSemu(id);
      res.status(200).json({
        success: true,
        message: "Statistik Peradilan Semu berhasil dihapus",
        data: statistikPeradilanSemu,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new DataPeradilanSemuController();
