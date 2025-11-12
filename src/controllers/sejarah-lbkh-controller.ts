import sejarahLbkhService from "../services/sejarah-lbkh-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SejarahLBKHController {
  async createSejarahLBKH(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, tahun } = req.body;
      const galeriFiles = req.files?.["foto"] || [];
      const sejarahLBKH = await sejarahLbkhService.create({
        title,
        foto: Array.isArray(galeriFiles) ? galeriFiles : [galeriFiles],
        deskripsi,
        tahun,
      });
      res.status(201).json({
        success: true,
        data: sejarahLBKH,
      });
    } catch (error) {
      console.error("Error in createSejarahLBKH:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateSejarahLBKH(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const { title, deskripsi, tahun } = req.body;
      const galeriFiles = req.files?.["foto"] || [];
      const sejarahLBKH = await sejarahLbkhService.updateSejarahLBKH(
        Number(id),
        {
          title,
          foto: Array.isArray(galeriFiles) ? galeriFiles : [galeriFiles],
          deskripsi,
          tahun,
        }
      );
      res.status(200).json({
        success: true,
        data: sejarahLBKH,
      });
    } catch (error) {
      console.error("Error in updateSejarahLBKH:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteSejarahLBKH(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await sejarahLbkhService.deleteSejarahLBKH(
        Number(id)
      );
      res.status(200).json({
        success: true,
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteSejarahLBKH:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllSejarahLBKH(req: Request, res: Response) {
    try {
      const sejarahLBKHH = await sejarahLbkhService.getAllSejarahLBKH();
      res.status(200).json({
        success: true,
        data: sejarahLBKHH,
      });
    } catch (error) {
      console.error("Error in getAllSejarahLBKH:", error);
      res.status(500).json({ error: "Failed to get sejarah LBKH" });
    }
  }

  async createStatistik(req: Request, res: Response) {
    try {
      const { tahun, kasus, advokat, hukumTerakreditasi, slogan, deskripsi } =
        req.body;
      const statistikSejarahLBKH = await sejarahLbkhService.createStatistik({
        tahun,
        kasus,
        advokat,
        hukumTerakreditasi,
        slogan,
        deskripsi,
      });
      res.status(201).json({
        success: true,
        data: statistikSejarahLBKH,
      });
    } catch (error) {
      console.error("Error in createStatistik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistik(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { tahun, kasus, advokat, hukumTerakreditasi, slogan, deskripsi } =
        req.body;
      const statistikSejarahLBKH = await sejarahLbkhService.updateStatistik(
        Number(id),
        {
          tahun,
          kasus,
          advokat,
          hukumTerakreditasi,
          slogan,
          deskripsi,
        }
      );
      res.status(200).json({
        success: true,
        data: statistikSejarahLBKH,
      });
    } catch (error) {
      console.error("Error in updateStatistik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistik(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await sejarahLbkhService.deleteStatistik(Number(id));
      res.status(200).json({
        success: true,
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistik(req: Request, res: Response) {
    try {
      const statistikSejarahLBKH = await sejarahLbkhService.getAllStatistik();
      res.status(200).json({
        success: true,
        data: statistikSejarahLBKH,
      });
    } catch (error) {
      console.error("Error in getAllStatistik:", error);
      res.status(500).json({ error: "Failed to get statistik sejarah LBKH" });
    }
  }
}

export default new SejarahLBKHController();
