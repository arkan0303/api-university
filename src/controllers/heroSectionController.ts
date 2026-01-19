import HeroSectionService from "../services/heroSectionService";
import { Request, Response } from "express";
import upload from "../config/multer";
import { log } from "console";

class HeroSectionController {
  // Middleware for handling file upload
  static uploadImage() {
    return upload.single("image");
  }

  async createHeroSection(req: Request, res: Response) {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No image file provided" });
      }

      const { ururtan, status } = req.body;
      console.log(ururtan);

      // Ensure buffer exists before proceeding
      if (!req.file.buffer) {
        throw new Error("Failed to process the uploaded file");
      }

      const heroSection = await HeroSectionService.createHeroSection(
        ururtan,
        req.file.buffer,
        status
      );

      res.status(201).json({
        success: true,
        data: heroSection,
      });
    } catch (error: any) {
      console.error("Error in createHeroSection:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to create hero section",
      });
    }
  }

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const { ururtan, status } = req.body;

      let imageBuffer: Buffer | undefined = undefined;
      if (req.file) {
        imageBuffer = req.file.buffer;
      }

      const heroSection = await HeroSectionService.update(
        id,
        ururtan,
        imageBuffer,
        status
      );

      res.status(200).json({
        success: true,
        data: heroSection,
      });
    } catch (error: any) {
      console.error("Error in updateHeroSection:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to update hero section",
      });
    }
  }

  async getDataHeroSection(req: Request, res: Response) {
    try {
      const heroSection = await HeroSectionService.getDataHeroSection();
      res.status(200).json({
        success: true,
        data: heroSection,
      });
    } catch (error: any) {
      console.error("Error in getDataHeroSection:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to get hero section data",
      });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const result = await HeroSectionService.delete(Number(req.params.id));
      return res.status(200).json({
        success: true,
        message: " berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in delete:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus ",
      });
    }
  }
}

export default HeroSectionController;
