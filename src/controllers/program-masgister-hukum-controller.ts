import ProgramMagisterHukumService from "../services/program-magister-hukum-service";

import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class ProgramMagisterHukumController {
  async createProgramMagisterHukum(req: MulterRequest, res: Response) {
    try {
      const { semester, judul, kategori, deskripsi } = req.body;
      console.log(req.body);

      const galeriFiles = req.files?.["image"] || [];
      const katagoriJSON = JSON.parse(kategori);
      console.log(katagoriJSON);
      const strategis =
        await ProgramMagisterHukumService.createProgramMagisterHukum({
          semester,
          judul,
          kategori: katagoriJSON,
          deskripsi,
          image: galeriFiles,
        });
      res.status(201).json({
        success: true,
        message: "Program magister hukum berhasil dibuat",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in createProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllProgramMagisterHukum(req: Request, res: Response) {
    try {
      const programMagisterHukum =
        await ProgramMagisterHukumService.getAllProgramMagisterHukum();
      res.status(200).json({
        success: true,
        message: "Program magister hukum berhasil diambil",
        data: programMagisterHukum,
      });
    } catch (error) {
      console.error("Error in getAllProgramMagisterHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateProgramMagisterHukum(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const { semester, judul, kategori, deskripsi } = req.body;
      const katagoriJSON = JSON.parse(kategori);
      const updateData: any = {
        semester,
        judul,
        kategori: katagoriJSON,
        deskripsi,
      };
      if (req.files?.["image"]?.[0]) {
        const image = req.files["image"][0];
        updateData.image = image;
      }
      const updatedProgramMagisterHukum =
        await ProgramMagisterHukumService.updateProgramMagisterHukum(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Program magister hukum berhasil diupdate",
        data: updatedProgramMagisterHukum,
      });
    } catch (error) {
      console.error("Error in updateProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProgramMagisterHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await ProgramMagisterHukumService.deleteProgramMagisterHukum(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Program magister hukum berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikProgramMagisterHukum(req: Request, res: Response) {
    try {
      const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } =
        req.body;
      const statistik =
        await ProgramMagisterHukumService.createStatistikProgramMagisterHukum({
          semester,
          sksTotal,
          akreditasi,
          alumni,
          slogan,
          deskripsi,
        });
      res.status(201).json({
        success: true,
        message: "Statistik program magister hukum berhasil dibuat",
        data: statistik,
      });
    } catch (error) {
      console.error("Error in createStatistikProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikProgramMagisterHukum(req: Request, res: Response) {
    try {
      const statistikProgramMagisterHukum =
        await ProgramMagisterHukumService.getAllStatistikProgramMagisterHukum();
      res.status(200).json({
        success: true,
        message: "Statistik program magister hukum berhasil diambil",
        data: statistikProgramMagisterHukum,
      });
    } catch (error) {
      console.error("Error in getAllStatistikProgramMagisterHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikProgramMagisterHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } =
        req.body;
      const statistik =
        await ProgramMagisterHukumService.updateStatistikProgramMagisterHukum(
          Number(id),
          {
            semester,
            sksTotal,
            akreditasi,
            alumni,
            slogan,
            deskripsi,
          }
        );
      res.status(200).json({
        success: true,
        message: "Statistik program magister hukum berhasil diupdate",
        data: statistik,
      });
    } catch (error) {
      console.error("Error in updateStatistikProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikProgramMagisterHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await ProgramMagisterHukumService.deleteStatistikProgramMagisterHukum(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik program magister hukum berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createProspekKarirMagisterHukum(req: MulterRequest, res: Response) {
    try {
      const { judul, deskripsi } = req.body;

      if (!req.files?.["image"] || req.files["image"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "image harus diupload",
        });
      }
      const prospekKarirMagisterHukum =
        await ProgramMagisterHukumService.createProspekKarirMagisterHukum({
          judul,
          deskripsi,
          image: req.files?.["image"][0],
        });
      res.status(201).json({
        success: true,
        message: "Prospek karir magister hukum berhasil dibuat",
        data: prospekKarirMagisterHukum,
      });
    } catch (error) {
      console.error("Error in createProspekKarirSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllProspekKarirMagisterHukum(req: Request, res: Response) {
    try {
      const prospekKarirMagisterHukum =
        await ProgramMagisterHukumService.getAllProspekKarirMagisterHukum();
      res.status(200).json({
        success: true,
        message: "Prospek karir magister hukum berhasil diambil",
        data: prospekKarirMagisterHukum,
      });
    } catch (error) {
      console.error("Error in getAllProspekKarirSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateProspekKarirMagisterHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { judul, deskripsi, image } = req.body;
      const updatedData =
        await ProgramMagisterHukumService.updateProspekKarirMagisterHukum(
          Number(id),
          {
            judul,
            deskripsi,
            image,
          }
        );
      res.status(200).json({
        success: true,
        message: "Prospek karir magister hukum berhasil diupdate",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error in updateProspekKarirMagisterHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProspekKarirMagisterHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await ProgramMagisterHukumService.deleteProspekKarirMagisterHukum(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Prospek karir magister hukum berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteProspekKarirMagisterHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ProgramMagisterHukumController();
