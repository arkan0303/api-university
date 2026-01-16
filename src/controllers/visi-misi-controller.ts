import visMisiService from "../services/vis-misi-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class VisMisiController {
  async createVisMisi(req: MulterRequest, res: Response) {
    try {
      const { type, title, deskripsi, misi, tujuan, sasaran } = req.body;

      // Parse JSON untuk field misi, tujuan, sasaran
      const misiJSON = misi ? JSON.parse(misi) : [];
      const tujuanJSON = tujuan ? JSON.parse(tujuan) : [];
      const sasaranJSON = sasaran ? JSON.parse(sasaran) : [];

      // Ambil file gambar jika ada, tapi opsional
      const gambarFile = req.files?.["gambar"]?.[0] || null;

      const visMisi = await visMisiService.createVisMisi({
        type,
        title,
        deskripsi,
        gambar: gambarFile,
        misi: misiJSON,
        tujuan: tujuanJSON,
        sasaran: sasaranJSON,
      });

      res.status(201).json({
        success: true,
        message: "Vis Misi berhasil dibuat",
        data: visMisi,
      });
    } catch (error) {
      console.error("Error in createVisMisi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllVisMisi(req: Request, res: Response) {
    try {
      const visMisi = await visMisiService.getAllVisMisi();
      return res.status(200).json({
        success: true,
        message: "Vis Misi berhasil diambil",
        data: visMisi,
      });
    } catch (error) {
      console.error("Error in getAllVisMisi:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil vis misi",
      });
    }
  }

  async updateVisMisi(req: MulterRequest, res: Response) {
    try {
      const { type, title, deskripsi } = req.body;
      const id = req.params.id;

      const updateData: any = {
        type,
        title,
        deskripsi,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["gambar"]?.[0]) {
        updateData.gambar = req.files["gambar"][0];
      }

      const visMisi = await visMisiService.updateVisMisi(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Vis Misi berhasil diupdate",
        data: visMisi,
      });
    } catch (error) {
      console.error("Error in updateVisMisi:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat mengupdate data";
      res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }
  }
  async deleteVisMisi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await visMisiService.deleteVisMisi(Number(id));
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteVisMisi:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async createStatistikVisiMisi(req: Request, res: Response) {
    try {
      const {
        tahunPengalaman,
        alumni,
        dosenBerkualitas,
        ProgramUnggula,
        slogan,
        deskripsi,
      } = req.body;
      const statistikVisiMisi = await visMisiService.createStatistikVisiMisi({
        tahunPengalaman,
        alumni,
        dosenBerkualitas,
        ProgramUnggula,
        slogan,
        deskripsi,
      });
      return res.status(201).json({
        success: true,
        message: "Vis Misi berhasil diambil",
        data: statistikVisiMisi,
      });
    } catch (error) {
      console.error("Error in createStatistikVisiMisi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikVisiMisi(req: Request, res: Response) {
    try {
      const statistikVisiMisi = await visMisiService.getAllStatistikVisiMisi();
      return res.status(200).json({
        success: true,
        message: "Statistik Vis Misi berhasil diambil",
        data: statistikVisiMisi,
      });
    } catch (error) {
      console.error("Error in getAllStatistikVisiMisi:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik vis misi",
      });
    }
  }

  async updateStatistikVisiMisi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        tahunPengalaman,
        alumni,
        dosenBerkualitas,
        ProgramUnggula,
        slogan,
        deskripsi,
      } = req.body;
      const statistikVisiMisi = await visMisiService.updateStatistikVisiMisi(
        Number(id),
        {
          tahunPengalaman,
          alumni,
          dosenBerkualitas,
          ProgramUnggula,
          slogan,
          deskripsi,
        }
      );
      return res.status(200).json({
        success: true,
        message: "Statistik Vis Misi berhasil diupdate",
        data: statistikVisiMisi,
      });
    } catch (error) {
      console.error("Error in updateStatistikVisiMisi:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik vis misi",
      });
    }
  }

  async deleteStatistikVisiMisi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await visMisiService.deleteStatistikVisiMisi(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikVisiMisi:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }
}

export default new VisMisiController();
