import penyukuhanHukumService from "../services/penyukuhan-hukum-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class PenyukuhanHukumController {
  async createPenyukuhanHukum(req: MulterRequest, res: Response) {
    try {
      const { title, waktu, deskripsi, kategori, type } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const penyukuhanHukum =
        await penyukuhanHukumService.createPenyukuhanHukum({
          title,
          waktu,
          deskripsi,
          kategori: kategoriJSON,
          type,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Penyukuhan Hukum berhasil dibuat",
        penyukuhanHukum,
      });
    } catch (error) {
      console.error("Error in createPenyukuhanHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllPenyukuhanHukum(req: Request, res: Response) {
    try {
      const result = await penyukuhanHukumService.getAllPenyukuhanHukum();
      res.status(200).json({
        success: true,
        message: "Penyukuhan Hukum berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllPenyukuhanHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updatePenyukuhanHukumById(req: MulterRequest, res: Response) {
    try {
      const { title, waktu, deskripsi, kategori, type } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);

      const updateData: any = {
        title,
        waktu,
        deskripsi,
        kategori: kategoriJSON,
        type,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedPenyukuhanHukum =
        await penyukuhanHukumService.updatePenyukuhanHukumById(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Penyukuhan Hukum berhasil diupdate",
        data: updatedPenyukuhanHukum,
      });
    } catch (error) {
      console.error("Error in updatePenyukuhanHukumById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deletePenyukuhanHukumById(req: Request, res: Response) {
    try {
      const result = await penyukuhanHukumService.deletePenyukuhanHukumById(
        Number(req.params.id)
      );
      res.status(200).json({
        success: true,
        message: "Penyukuhan Hukum berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deletePenyukuhanHukumById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikPenyuluhanHukum(req: Request, res: Response) {
    try {
      const {
        kegiatanPenyuluhan,
        pesertaTeredukasi,
        institusiMitra,
        totalPenyuluhan,
        slogan,
        deskripsi,
      } = req.body;
      const statistikPenyuluhanHukum =
        await penyukuhanHukumService.createStatistikPenyuluhanHukum({
          kegiatanPenyuluhan,
          pesertaTeredukasi,
          institusiMitra,
          totalPenyuluhan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Penyuluhan Hukum berhasil dibuat",
        statistikPenyuluhanHukum,
      });
    } catch (error) {
      console.error("Error in createStatistikPenyuluhanHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikPenyuluhanHukum(req: Request, res: Response) {
    try {
      const result =
        await penyukuhanHukumService.getAllStatistikPenyuluhanHukum();
      res.status(200).json({
        success: true,
        message: "Statistik Penyuluhan Hukum berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllStatistikPenyuluhanHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikPenyuluhanHukumById(req: Request, res: Response) {
    try {
      const {
        kegiatanPenyuluhan,
        pesertaTeredukasi,
        institusiMitra,
        totalPenyuluhan,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        kegiatanPenyuluhan,
        pesertaTeredukasi,
        institusiMitra,
        totalPenyuluhan,
        slogan,
        deskripsi,
      };
      const updatedStatistikPenyuluhanHukum =
        await penyukuhanHukumService.updateStatistikPenyuluhanHukumById(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Penyuluhan Hukum berhasil diupdate",
        data: updatedStatistikPenyuluhanHukum,
      });
    } catch (error) {
      console.error("Error in updateStatistikPenyuluhanHukumById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikPenyuluhanHukumById(req: Request, res: Response) {
    try {
      const result =
        await penyukuhanHukumService.deleteStatistikPenyuluhanHukumById(
          Number(req.params.id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik Penyuluhan Hukum berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikPenyuluhanHukumById:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new PenyukuhanHukumController();
