import advokatParalegalService from "../services/advokat-paralegal-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class AdvokatParalegalController {
  async createAdvokatParalegal(req: MulterRequest, res: Response) {
    try {
      const { type, nama, jabatan, deskripsi, kategori, email, noTelp, note } =
        req.body;
      const kategoriJson = JSON.parse(kategori);
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const createAdvokatParalegal =
        await advokatParalegalService.createAdvokatParalegal({
          type,
          nama,
          jabatan,
          deskripsi,
          kategori: kategoriJson,
          email,
          noTelp,
          note,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Advokat Paralegal berhasil dibuat",
        data: createAdvokatParalegal,
      });
    } catch (error) {
      console.error("Error in createAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllAdvokatParalegal(req: Request, res: Response) {
    try {
      const getAllAdvokatParalegal =
        await advokatParalegalService.getAllAdvokatParalegal();
      return res.status(200).json({
        success: true,
        message: "Advokat Paralegal berhasil diambil",
        data: getAllAdvokatParalegal,
      });
    } catch (error) {
      console.error("Error in getAllAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateAdvokatParalegal(req: MulterRequest, res: Response) {
    try {
      const { type, nama, jabatan, deskripsi, kategori, email, noTelp, note } =
        req.body;
      const id = req.params.id;
      const kategoriJson = JSON.parse(kategori);

      const updateData: any = {
        type,
        nama,
        jabatan,
        deskripsi,
        kategori: kategoriJson,
        email,
        noTelp,
        note,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedAdvokatParalegal =
        await advokatParalegalService.updateAdvokatParalegal(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Advokat Paralegal berhasil diupdate",
        data: updatedAdvokatParalegal,
      });
    } catch (error) {
      console.error("Error in updateAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteAdvokatParalegal(req: Request, res: Response) {
    try {
      const result = await advokatParalegalService.deleteAdvokatParalegal(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Advokat Paralegal berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikAdvokatParalegal(req: Request, res: Response) {
    try {
      const {
        paralegal,
        kasusDitangani,
        advokatAktif,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const createStatistikAdvokatParalegal =
        await advokatParalegalService.createStatistikAdvokatParalegal({
          paralegal,
          kasusDitangani,
          advokatAktif,
          tingkatKepuasan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Advokat Paralegal berhasil dibuat",
        data: createStatistikAdvokatParalegal,
      });
    } catch (error) {
      console.error("Error in createStatistikAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikAdvokatParalegal(req: Request, res: Response) {
    try {
      const getAllStatistikAdvokatParalegal =
        await advokatParalegalService.getAllStatistikAdvokatParalegal();
      return res.status(200).json({
        success: true,
        message: "Statistik Advokat Paralegal berhasil diambil",
        data: getAllStatistikAdvokatParalegal,
      });
    } catch (error) {
      console.error("Error in getAllStatistikAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikAdvokatParalegal(req: Request, res: Response) {
    try {
      const {
        paralegal,
        kasusDitangani,
        advokatAktif,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        paralegal,
        kasusDitangani,
        advokatAktif,
        tingkatKepuasan,
        slogan,
        deskripsi,
      };
      const updatedStatistikAdvokatParalegal =
        await advokatParalegalService.updateStatistikAdvokatParalegal(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Advokat Paralegal berhasil diupdate",
        data: updatedStatistikAdvokatParalegal,
      });
    } catch (error) {
      console.error("Error in updateStatistikAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikAdvokatParalegal(req: Request, res: Response) {
    try {
      const result =
        await advokatParalegalService.deleteStatistikAdvokatParalegal(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Advokat Paralegal berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikAdvokatParalegal:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new AdvokatParalegalController();
