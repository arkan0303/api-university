import RencanaStrategisService from "../services/rencanaStrategis";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class RencanaStrategisController {
  async createRencanaStrategis(req: MulterRequest, res: Response) {
    try {
      const { tahun, judul, katagori, deskripsi } = req.body;
      console.log(req.body);

      const galeriFiles = req.files?.["foto"] || [];
      const katagoriJSON = JSON.parse(katagori);
      console.log(katagoriJSON);
      const strategis = await RencanaStrategisService.createStrategis({
        tahun,
        judul,
        katagori: katagoriJSON,
        deskripsi,
        foto: galeriFiles,
      });
      res.status(201).json({
        success: true,
        message: "Strategis berhasil dibuat",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in createRencanaStrategis:", error);
      res.status(500).json({ error: "Failed to create strategis" });
    }
  }

  async getAllRencanaStrategis(req: Request, res: Response) {
    try {
      const strategis = await RencanaStrategisService.getAllStrategis();
      res.status(200).json({
        success: true,
        message: "Strategis berhasil diambil",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in getAllRencanaStrategis:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil strategis",
      });
    }
  }

  async updateRencanaStrategis(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const { tahun, judul, katagori, deskripsi } = req.body;
      const katagoriJSON = JSON.parse(katagori);

      const updateData: any = {
        tahun,
        judul,
        katagori: katagoriJSON,
        deskripsi,
      };
      if (req.files?.["foto"]?.[0]) {
        const foto = req.files["foto"][0];
        updateData.foto = foto;
      }
      const strategis = await RencanaStrategisService.updateStrategis(
        Number(id),
        updateData
      );
      res.status(200).json({
        success: true,
        message: "Strategis berhasil diupdate",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in updateRencanaStrategis:", error);
      res.status(500).json({ error: "Failed to update strategis" });
    }
  }

  async deleteRencanaStrategis(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await RencanaStrategisService.deleteStrategis(
        Number(id)
      );
      res.status(200).json({
        success: true,
        message: "Strategis berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteRencanaStrategis:", error);
      res.status(500).json({ error: "Failed to delete strategis" });
    }
  }

  async createStatistikStrategis(req: Request, res: Response) {
    try {
      const {
        tahunRencana,
        targetStrategis,
        programAksi,
        targetAkreditas,
        slogan,
        deskripsi,
      } = req.body;
      const statistik = await RencanaStrategisService.createStatistikStrategis({
        tahunRencana,
        targetStrategis,
        programAksi,
        targetAkreditas,
        slogan,
        deskripsi,
      });
      res.status(201).json({
        success: true,
        message: "Statistik strategis berhasil dibuat",
        data: statistik,
      });
    } catch (error) {
      console.error("Error in createStatistikStrategis:", error);
      res.status(500).json({ error: "Failed to create statistik strategis" });
    }
  }

  async getAllStatistikStrategis(req: Request, res: Response) {
    try {
      const statistiks =
        await RencanaStrategisService.getAllStatistikStrategis();
      res.status(200).json({
        success: true,
        message: "Statistik strategis berhasil diambil",
        data: statistiks,
      });
    } catch (error) {
      console.error("Error in getAllStatistikStrategis:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik strategis",
      });
    }
  }

  async updateStatistikStrategis(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        tahunRencana,
        targetStrategis,
        programAksi,
        targetAkreditas,
        slogan,
        deskripsi,
      } = req.body;
      const statistik = await RencanaStrategisService.updateStatistikStrategis(
        Number(id),
        {
          tahunRencana,
          targetStrategis,
          programAksi,
          targetAkreditas,
          slogan,
          deskripsi,
        }
      );
      res.status(200).json({
        success: true,
        message: "Statistik strategis berhasil diupdate",
        data: statistik,
      });
    } catch (error) {
      console.error("Error in updateStatistikStrategis:", error);
      res.status(500).json({ error: "Failed to update statistik strategis" });
    }
  }

  async deleteStatistikStrategis(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await RencanaStrategisService.deleteStatistikStrategis(Number(id));
      res.status(200).json({
        success: true,
        message: "Statistik strategis berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikStrategis:", error);
      res.status(500).json({ error: "Failed to delete statistik strategis" });
    }
  }
}

export default new RencanaStrategisController();
