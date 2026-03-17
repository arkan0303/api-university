import SuratMasukService from "../services/surat-masuk-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SuratMasukController {
  async createSuratMasuk(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalDiterima,
        status,
        penerima,
        fileMetadata, // Added fileMetadata from frontend
      } = req.body;

      console.log(req.body);

      const galeriFiles = req.files?.["file"] || [];

      let parsedFileMetadata: Array<{ fileName: string; status_file: string }> =
        [];
      if (fileMetadata) {
        try {
          parsedFileMetadata = JSON.parse(fileMetadata);
        } catch (e) {
          console.error("Error parsing fileMetadata:", e);
        }
      }

      const suratMasuk = await SuratMasukService.createArsipSuratMasuk({
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalDiterima,
        foto: req.files?.["foto"]?.[0],
        file: galeriFiles,
        fileMetadata: parsedFileMetadata,
        status,
        penerima,
      });

      return res.status(201).json({
        success: true,
        data: suratMasuk,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAllSuratMasuk(req: Request, res: Response) {
    try {
      const suratMasuk = await SuratMasukService.getAllArsipSuratMasuk();
      return res.status(200).json({
        success: true,
        data: suratMasuk,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async updateSuratMasuk(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalDiterima,
        status,
        penerima,
      } = req.body;
      const id = req.params.id;

      // Validasi input
      if (
        !title ||
        !deskripsi ||
        !pengirim ||
        !nomorSurat ||
        !tanggalDiterima ||
        !status
      ) {
        return res.status(400).json({
          success: false,
          message: "Semua field kecuali foto wajib diisi",
        });
      }

      const updateData: any = {
        title,
        deskripsi,
        pengirim,
        nomorSurat,
        tanggalDiterima,
        status,
        penerima,
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

      const suratMasuk = await SuratMasukService.updateArsipSuratMasuk(
        Number(id), // Konversi id ke number
        updateData,
      );

      return res.status(200).json({
        success: true,
        message: "Surat Masuk berhasil diupdate",
        data: suratMasuk,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async deleteSuratMasuk(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await SuratMasukService.deleteArsipSuratMasuk(
        Number(id),
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

  async createStatistikArsipSuratMasuk(req: Request, res: Response) {
    try {
      const {
        totalSurat,
        suratBaru,
        suratDalamProses,
        suratSelesai,
        slogan,
        deskripsi,
      } = req.body;
      const statistikArsipSuratMasuk =
        await SuratMasukService.createStatistikArsipSuratMasuk({
          totalSurat,
          suratBaru,
          suratDalamProses,
          suratSelesai,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: statistikArsipSuratMasuk,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async getAllStatistikArsipSuratMasuk(req: Request, res: Response) {
    try {
      const statistikArsipSuratMasuk =
        await SuratMasukService.getAllStatistikArsipSuratMasuk();
      return res.status(200).json({
        success: true,
        data: statistikArsipSuratMasuk,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async updateStatistikArsipSuratMasuk(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        totalSurat,
        suratBaru,
        suratDalamProses,
        suratSelesai,
        slogan,
        deskripsi,
      } = req.body;
      const updatedStatistikArsipSuratMasuk =
        await SuratMasukService.updateStatistikArsipSuratMasuk(Number(id), {
          totalSurat,
          suratBaru,
          suratDalamProses,
          suratSelesai,
          slogan,
          deskripsi,
        });
      return res.status(200).json({
        success: true,
        message: "Statistik Arsip Surat Masuk berhasil diupdate",
        data: updatedStatistikArsipSuratMasuk,
      });
    } catch (error: any) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  }

  async deleteStatistikArsipSuratMasuk(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await SuratMasukService.deleteStatistikArsipSuratMasuk(Number(id));
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

export default new SuratMasukController();
