import strukturOrganisasiService from "../services/struktur-organisasi-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class StrukturOrganisasiController {
  async createStrukturOrganisasi(req: MulterRequest, res: Response) {
    try {
      const { jabatan, nama, note, type } = req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const strukturOrganisasi =
        await strukturOrganisasiService.createStrukturOrganisasi({
          jabatan,
          nama,
          note,
          type,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Struktur Organisasi berhasil dibuat",
        strukturOrganisasi,
      });
    } catch (error) {
      console.error("Error in createStrukturOrganisasi:", error);
      res.status(500).json({ error: "Failed to create struktur organisasi" });
    }
  }

  async getAllStrukturOrganisasi(req: Request, res: Response) {
    try {
      const strukturOrganisasi =
        await strukturOrganisasiService.getAllStrukturOrganisasi();
      res.status(200).json({
        success: true,
        message: "Struktur Organisasi berhasil diambil",
        data: strukturOrganisasi,
      });
    } catch (error) {
      console.error("Error in getAllStrukturOrganisasi:", error);
      res.status(500).json({ error: "Failed to get struktur organisasi" });
    }
  }

  async updateStrukturOrganisasi(req: MulterRequest, res: Response) {
    try {
      const { jabatan, nama, note, type } = req.body;
      const id = req.params.id;

      // Validasi input
      if (!jabatan || !nama || !note || !type) {
        return res.status(400).json({
          success: false,
          message: "Semua field kecuali foto wajib diisi",
        });
      }

      const updateData: any = {
        jabatan,
        nama,
        note,
        type,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const strukturOrganisasi =
        await strukturOrganisasiService.updateStrukturOrganisasi(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Struktur Organisasi berhasil diupdate",
        data: strukturOrganisasi,
      });
    } catch (error) {
      console.error("Error in updateStrukturOrganisasi:", error);
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

  async deleteStrukturOrganisasi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData =
        await strukturOrganisasiService.deleteStrukturOrganisasi(Number(id));
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStrukturOrganisasi:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async createStatistikStrukturOrganisasi(req: Request, res: Response) {
    try {
      const {
        pimpinan,
        bagianUtama,
        tenagaPendidikan,
        dosenTetap,
        slogan,
        deskripsi,
      } = req.body;

      const statistikStrukturOrganisasii =
        await strukturOrganisasiService.createStatistikStrukturOrganisasi({
          pimpinan,
          bagianUtama,
          tenagaPendidikan,
          dosenTetap,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Struktur Organisasi berhasil dibuat",
        statistikStrukturOrganisasii,
      });
    } catch (error) {
      console.error("Error in createStatistikStrukturOrganisasi:", error);
      res
        .status(500)
        .json({ error: "Failed to create statistik struktur organisasi" });
    }
  }

  async getAllStatistikStrukturOrganisasi(req: Request, res: Response) {
    try {
      const statistikStrukturOrganisasii =
        await strukturOrganisasiService.getAllStatistikStrukturOrganisasi();
      return res.status(200).json({
        success: true,
        message: "Statistik Struktur Organisasi berhasil diambil",
        data: statistikStrukturOrganisasii,
      });
    } catch (error) {
      console.error("Error in getAllStatistikStrukturOrganisasi:", error);
      res
        .status(500)
        .json({ error: "Failed to get statistik struktur organisasi" });
    }
  }

  async updateStatistikStrukturOrganisasi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        pimpinan,
        bagianUtama,
        tenagaPendidikan,
        dosenTetap,
        slogan,
        deskripsi,
      } = req.body;

      const updateData: any = {
        pimpinan,
        bagianUtama,
        tenagaPendidikan,
        dosenTetap,
        slogan,
        deskripsi,
      };

      const statistikStrukturOrganisasii =
        await strukturOrganisasiService.updateStatistikStrukturOrganisasi(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Struktur Organisasi berhasil diupdate",
        data: statistikStrukturOrganisasii,
      });
    } catch (error) {
      console.error("Error in updateStatistikStrukturOrganisasi:", error);
      res
        .status(500)
        .json({ error: "Failed to update statistik struktur organisasi" });
    }
  }

  async deleteStatistikStrukturOrganisasi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await strukturOrganisasiService.deleteStatistikStrukturOrganisasi(
          Number(id)
        );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikStrukturOrganisasi:", error);
      res
        .status(500)
        .json({ error: "Failed to delete statistik struktur organisasi" });
    }
  }
}

export default new StrukturOrganisasiController();
