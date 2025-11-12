import kelompokRisetService from "../services/kelompok-riset-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class KelompokRisetController {
  async createKelompokRiset(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        fokusPenelitian,
        foto,
        namaMahasiswa,
        anggota,
        publikasi,
        deskripsi,
        status,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const fokusPenelitianJson = JSON.parse(fokusPenelitian);
      const kelompokRiset = await kelompokRisetService.create({
        title,
        fokusPenelitian: fokusPenelitianJson,
        namaMahasiswa,
        anggota,
        publikasi,
        deskripsi,
        status,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        message: "Kelompok Riset berhasil dibuat",
        data: kelompokRiset,
      });
    } catch (error) {
      console.error("Error in createKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllKelompokRiset(req: Request, res: Response) {
    try {
      const kelompokRiset = await kelompokRisetService.getAllKelompokRiset();
      return res.status(200).json({
        success: true,
        message: "Kelompok Riset berhasil diambil",
        data: kelompokRiset,
      });
    } catch (error) {
      console.error("Error in getAllKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateKelompokRiset(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        deskripsi,
        fokusPenelitian,
        namaMahasiswa,
        anggota,
        publikasi,
        status,
      } = req.body;
      const id = req.params.id;
      const fokusPenelitianJson = JSON.parse(fokusPenelitian);

      const updateData: any = {
        title,
        deskripsi,
        fokusPenelitian: fokusPenelitianJson,
        namaMahasiswa,
        anggota,
        publikasi,
        status,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedKelompokRiset =
        await kelompokRisetService.updateKelompokRiset(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Kelompok Riset berhasil diupdate",
        data: updatedKelompokRiset,
      });
    } catch (error) {
      console.error("Error in updateKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteKelompokRiset(req: Request, res: Response) {
    try {
      const result = await kelompokRisetService.deleteKelompokRiset(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Kelompok Riset berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikKelompokRiset(req: Request, res: Response) {
    try {
      const {
        total,
        penelitianAktif,
        publikasiPerTahun,
        jurnalTerAkreditasi,
        slogan,
        deskripsi,
      } = req.body;
      const statistikKelompokRiset =
        await kelompokRisetService.createStatistikKelompokRiset({
          total,
          penelitianAktif,
          publikasiPerTahun,
          jurnalTerAkreditasi,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Kelompok Riset berhasil dibuat",
        data: statistikKelompokRiset,
      });
    } catch (error) {
      console.error("Error in createStatistikKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikKelompokRiset(req: Request, res: Response) {
    try {
      const statistikKelompokRiset =
        await kelompokRisetService.getAllStatistikKelompokRiset();
      return res.status(200).json({
        success: true,
        message: "Statistik Kelompok Riset berhasil diambil",
        data: statistikKelompokRiset,
      });
    } catch (error) {
      console.error("Error in getAllStatistikKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikKelompokRiset(req: Request, res: Response) {
    try {
      const {
        total,
        penelitianAktif,
        publikasiPerTahun,
        jurnalTerAkreditasi,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        total,
        penelitianAktif,
        publikasiPerTahun,
        jurnalTerAkreditasi,
        slogan,
        deskripsi,
      };
      const updatedStatistikKelompokRiset =
        await kelompokRisetService.updateStatistikKelompokRiset(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Kelompok Riset berhasil diupdate",
        data: updatedStatistikKelompokRiset,
      });
    } catch (error) {
      console.error("Error in updateStatistikKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikKelompokRiset(req: Request, res: Response) {
    try {
      const result = await kelompokRisetService.deleteStatistikKelompokRiset(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Statistik Kelompok Riset berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikKelompokRiset:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new KelompokRisetController();
