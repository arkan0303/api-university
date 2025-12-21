import programSarjanaHukumService from "../services/program-sarjana-hukum-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class ProgramSarjanaHukumController {
  async createProgramSarjanaHukum(req: MulterRequest, res: Response) {
    try {
      const { semester, judul, kategori, deskripsi } = req.body;
      console.log(req.body);

      const galeriFiles = req.files?.["image"] || [];
      const katagoriJSON = JSON.parse(kategori);
      console.log(katagoriJSON);
      const strategis =
        await programSarjanaHukumService.createProgramSarjanaHukum({
          semester,
          judul,
          kategori: katagoriJSON,
          deskripsi,
          image: galeriFiles,
        });
      res.status(201).json({
        success: true,
        message: "Program sarjana hukum berhasil dibuat",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in createProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllProgramSarjanaHukum(req: Request, res: Response) {
    try {
      const programSarjanaHukum =
        await programSarjanaHukumService.getAllProgramSarjanaHukum();
      res.status(200).json({
        success: true,
        message: "Program sarjana hukum berhasil diambil",
        data: programSarjanaHukum,
      });
    } catch (error) {
      console.error("Error in getAllProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateProgramSarjanaHukum(req: MulterRequest, res: Response) {
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
      const updatedProgramSarjanaHukum =
        await programSarjanaHukumService.updateProgramSarjanaHukum(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Program sarjana hukum berhasil diupdate",
        data: updatedProgramSarjanaHukum,
      });
    } catch (error) {
      console.error("Error in updateProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProgramSarjanaHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await programSarjanaHukumService.deleteProgramSarjanaHukum(Number(id));
      res.status(200).json({
        success: true,
        message: "Program sarjana hukum berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikProgramSarjanaHukum(req: Request, res: Response) {
    try {
      const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } =
        req.body;
      const statistik =
        await programSarjanaHukumService.createStatistikProgramSarjanaHukum({
          semester,
          sksTotal,
          akreditasi,
          alumni,
          slogan,
          deskripsi,
        });
      res.status(201).json({
        success: true,
        message: "Statistik program sarjana hukum berhasil dibuat",
        data: statistik,
      });
    } catch (error) {
      console.error("Error in createStatistikProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikProgramSarjanaHukum(req: Request, res: Response) {
    try {
      const statistikProgramSarjanaHukum =
        await programSarjanaHukumService.getAllStatistikProgramSarjanaHukum();
      res.status(200).json({
        success: true,
        message: "Statistik program sarjana hukum berhasil diambil",
        data: statistikProgramSarjanaHukum,
      });
    } catch (error) {
      console.error("Error in getAllStatistikProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikProgramSarjanaHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } =
        req.body;
      const statistik =
        await programSarjanaHukumService.updateStatistikProgramSarjanaHukum(
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
        message: "Statistik program sarjana hukum berhasil diupdate",
        data: statistik,
      });
    } catch (error) {
      console.error("Error in updateStatistikProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikProgramSarjanaHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await programSarjanaHukumService.deleteStatistikProgramSarjanaHukum(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik program sarjana hukum berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createProspekKarirSarjanaHukum(req: Request, res: Response) {
    try {
      const { judul, deskripsi } = req.body;
      const prospekKarirSarjanaHukum =
        await programSarjanaHukumService.createProspekKarirSarjanaHukum({
          judul,
          deskripsi,
        });
      res.status(201).json({
        success: true,
        message: "Prospek karir sarjana hukum berhasil dibuat",
        data: prospekKarirSarjanaHukum,
      });
    } catch (error) {
      console.error("Error in createProspekKarirSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllProspekKarirSarjanaHukum(req: Request, res: Response) {
    try {
      const prospekKarirSarjanaHukum =
        await programSarjanaHukumService.getAllProspekKarirSarjanaHukum();
      res.status(200).json({
        success: true,
        message: "Prospek karir sarjana hukum berhasil diambil",
        data: prospekKarirSarjanaHukum,
      });
    } catch (error) {
      console.error("Error in getAllProspekKarirSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateProspekKarirSarjanaHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { judul, deskripsi } = req.body;
      const updatedData =
        await programSarjanaHukumService.updateProspekKarirSarjanaHukum(
          Number(id),
          {
            judul,
            deskripsi,
          }
        );
      res.status(200).json({
        success: true,
        message: "Prospek karir sarjana hukum berhasil diupdate",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error in updateProspekKarirSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProspekKarirSarjanaHukum(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await programSarjanaHukumService.deleteProspekKarirSarjanaHukum(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Prospek karir sarjana hukum berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteProspekKarirSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new ProgramSarjanaHukumController();
