import pendampinganHukumService from "../services/pendampingan-hukum-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class PendampinganHukumController {
  async createPendampinganHukum(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, kategori, waktu } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const pendampinganHukum =
        await pendampinganHukumService.createPendampinganHukum({
          title,
          deskripsi,
          kategori: kategoriJSON,
          waktu,
          foto: req.files?.["foto"][0],
        });
      console.log(pendampinganHukum);
      return res.status(200).json({
        success: true,
        message: "Pendampingan Hukum berhasil dibuat",
        data: pendampinganHukum,
      });
    } catch (error) {
      console.error("Error in createPendampinganHukum:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat konsultasi hukum",
      });
    }
  }

  async getAllPendampinganHukum(req: Request, res: Response) {
    try {
      const pendampinganHukum =
        await pendampinganHukumService.getAllPendampinganHukum();
      return res.status(200).json({
        success: true,
        message: "Pendampingan Hukum berhasil diambil",
        data: pendampinganHukum,
      });
    } catch (error) {
      console.error("Error in getAllPendampinganHukum:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil konsultasi hukum",
      });
    }
  }

  async updatePendampinganHukum(req: MulterRequest, res: Response) {
    try {
      const { title, kategori, deskripsi, waktu } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        title,
        deskripsi,
        kategori: kategoriJSON,
        waktu,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedPendampinganHukum =
        await pendampinganHukumService.updatePendampinganHukum(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Pendampingan Hukum berhasil diupdate",
        data: updatedPendampinganHukum,
      });
    } catch (error) {
      console.error("Error in updatePendampinganHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deletePendampinganHukum(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedPendampinganHukum =
        await pendampinganHukumService.deletePendampinganHukum(Number(id));
      return res.status(200).json({
        success: true,
        message: "Pendampingan Hukum berhasil dihapus",
        data: deletedPendampinganHukum,
      });
    } catch (error) {
      console.error("Error in deletePendampinganHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createProsedurPendampinganHukum(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, waktu } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const prosedurPendampinganHukum =
        await pendampinganHukumService.createProsedurPendampinganHukum({
          title,
          deskripsi,
          waktu,
          foto: req.files?.["foto"][0],
        });
      return res.status(200).json({
        success: true,
        message: "Prosedur Pendampingan Hukum berhasil dibuat",
        data: prosedurPendampinganHukum,
      });
    } catch (error) {
      console.error("Error in createProsedurPendampinganHukum:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat prosedur konsultasi",
      });
    }
  }

  async getAllProsedurPendampinganHukum(req: Request, res: Response) {
    try {
      const prosedurPendampinganHukum =
        await pendampinganHukumService.getAllProsedurPendampinganHukum();
      return res.status(200).json({
        success: true,
        message: "Prosedur Pendampingan Hukum berhasil diambil",
        data: prosedurPendampinganHukum,
      });
    } catch (error) {
      console.error("Error in getAllProsedurPendampinganHukum:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil prosedur pendampingan hukum",
      });
    }
  }

  async updateProsedurPendampinganHukum(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, waktu } = req.body;
      const id = req.params.id;
      const updateData: any = {
        title,
        deskripsi,
        waktu,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedProsedurPendampinganHukum =
        await pendampinganHukumService.updateProsedurPendampinganHukum(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Prosedur Pendampingan Hukum berhasil diupdate",
        data: updatedProsedurPendampinganHukum,
      });
    } catch (error) {
      console.error("Error in updateProsedurPendampinganHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteProsedurPendampinganHukum(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedProsedurPendampinganHukum =
        await pendampinganHukumService.deleteProsedurPendampinganHukum(
          Number(id)
        );
      return res.status(200).json({
        success: true,
        message: "Prosedur Pendampingan Hukum berhasil dihapus",
        data: deletedProsedurPendampinganHukum,
      });
    } catch (error) {
      console.error("Error in deleteProsedurPendampinganHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikProsedurPendampinganHukum(req: Request, res: Response) {
    try {
      const {
        kasusDidampingi,
        tingkatKeberhasilan,
        advokatBerpengalaman,
        totalPendampingan,
        slogan,
        deskripsi,
      } = req.body;

      console.log(req.body);
      const statistikProsedurPendampinganHukum =
        await pendampinganHukumService.createStatistikProsedurPendampinganHukum(
          {
            kasusDidampingi,
            tingkatKeberhasilan,
            advokatBerpengalaman,
            totalPendampingan,
            slogan,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pendampingan Hukum berhasil dibuat",
        data: statistikProsedurPendampinganHukum,
      });
    } catch (error) {
      console.error(
        "Error in createStatistikProsedurPendampinganHukum:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik prosedur konsultasi",
      });
    }
  }

  async getAllStatistikProsedurPendampinganHukum(req: Request, res: Response) {
    try {
      const statistikProsedurPendampinganHukum =
        await pendampinganHukumService.getAllStatistikProsedurPendampinganHukum();
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pendampingan Hukum berhasil diambil",
        data: statistikProsedurPendampinganHukum,
      });
    } catch (error) {
      console.error(
        "Error in getAllStatistikProsedurPendampinganHukum:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik prosedur konsultasi",
      });
    }
  }

  async updateStatistikProsedurPendampinganHukum(req: Request, res: Response) {
    try {
      const {
        kasusDidampingi,
        tingkatKeberhasilan,
        advokatBerpengalaman,
        totalPendampingan,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        kasusDidampingi,
        tingkatKeberhasilan,
        advokatBerpengalaman,
        totalPendampingan,
        slogan,
        deskripsi,
      };
      const updatedStatistikProsedurPendampinganHukum =
        await pendampinganHukumService.updateStatistikProsedurPendampinganHukum(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pendampingan Hukum berhasil diupdate",
        data: updatedStatistikProsedurPendampinganHukum,
      });
    } catch (error) {
      console.error(
        "Error in updateStatistikProsedurPendampinganHukum:",
        error
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikProsedurPendampinganHukum(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedStatistikProsedurPendampinganHukum =
        await pendampinganHukumService.deleteStatistikProsedurPendampinganHukum(
          Number(id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Prosedur Pendampingan Hukum berhasil dihapus",
        data: deletedStatistikProsedurPendampinganHukum,
      });
    } catch (error) {
      console.error(
        "Error in deleteStatistikProsedurPendampinganHukum:",
        error
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new PendampinganHukumController();
