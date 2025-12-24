import SuratKeluarService from "../services/surat-keluar-servicece";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SuratKeluarController {
  async createSuratKeluar(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalKirim,
        status,
        penerima,
        note,
      } = req.body;

      console.log(req.body);

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto utama harus diupload",
        });
      }

      //   if (!req.files?.["file"] || req.files["file"].length === 0) {
      //     return res.status(400).json({
      //       success: false,
      //       message: "File harus diupload",
      //     });
      //   }

      const galeriFiles = req.files?.["file"] || [];

      console.log(galeriFiles);
      console.log(req.files?.["foto"]);
      console.log(req.files?.["file"]);

      const suratKeluar = await SuratKeluarService.createArsipSuratKeluar({
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalKirim,
        foto: req.files?.["foto"][0],
        file: galeriFiles,
        status,
        penerima,
        note,
      });
      return res.status(201).json({
        success: true,
        data: suratKeluar,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAllSuratKeluar(req: Request, res: Response) {
    try {
      const suratKeluar = await SuratKeluarService.getAllArsipSuratKeluar();
      return res.status(200).json({
        success: true,
        data: suratKeluar,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async updateSuratKeluar(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalKirim,
        status,
        penerima,
        note,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalKirim,
        status,
        penerima,
        note,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      // Hanya tambahkan file jika ada file yang diunggah
      const galeriFiles = req.files?.["file"] || [];
      if (galeriFiles.length > 0) {
        updateData.file = galeriFiles;
      }

      const suratKeluar = await SuratKeluarService.updateArsipSuratKeluar(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Surat Keluar berhasil diupdate",
        data: suratKeluar,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async deleteSuratKeluar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await SuratKeluarService.deleteArsipSuratKeluar(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async createStatistikArsipSuratKeluar(req: Request, res: Response) {
    try {
      const {
        totalSurat,
        terkirim,
        suratDalamProses,
        draf,
        slogan,
        deskripsi,
      } = req.body;
      const statistikArsipSuratKeluar =
        await SuratKeluarService.createStatistikArsipSuratKeluar({
          totalSurat,
          terkirim,
          suratDalamProses,
          draf,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: statistikArsipSuratKeluar,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAllStatistikArsipSuratKeluar(req: Request, res: Response) {
    try {
      const statistikArsipSuratKeluar =
        await SuratKeluarService.getAllStatistikArsipSuratKeluar();
      return res.status(200).json({
        success: true,
        data: statistikArsipSuratKeluar,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async updateStatistikArsipSuratKeluar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        totalSurat,
        terkirim,
        suratDalamProses,
        draf,
        slogan,
        deskripsi,
      } = req.body;
      const updatedStatistikArsipSuratKeluar =
        await SuratKeluarService.updateStatistikArsipSuratKeluar(Number(id), {
          totalSurat,
          terkirim,
          suratDalamProses,
          draf,
          slogan,
          deskripsi,
        });
      return res.status(200).json({
        success: true,
        message: "Statistik Arsip Surat Keluar berhasil diupdate",
        data: updatedStatistikArsipSuratKeluar,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async deleteStatistikArsipSuratKeluar(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await SuratKeluarService.deleteStatistikArsipSuratKeluar(Number(id));
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }
}

export default new SuratKeluarController();
