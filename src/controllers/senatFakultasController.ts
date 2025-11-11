import senatFakultasService from "../services/senatFakultasService";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SenatFakultasController {
  async createSenatFakultas(req: MulterRequest, res: Response) {
    try {
      const { nama, jabatan, keahlian, periode, tugas, deskripsi } = req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto utama harus diupload",
        });
      }

      const galeriFiles = req.files?.["galeri"] || [];

      const senatFakultas = await senatFakultasService.createSenatFakultas({
        nama,
        jabatan,
        foto: req.files?.["foto"][0],
        keahlian,
        periode,
        tugas,
        deskripsi,
        galeri: galeriFiles,
      });
      return res.status(201).json({
        success: true,
        message: "Senat Fakultas berhasil ditambahkan",
        data: senatFakultas,
      });
    } catch (error) {
      console.error("Error in createSenatFakultas:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menambahkan Senat Fakultas",
      });
    }
  }

  async getAllSenatFakultas(req: Request, res: Response) {
    try {
      const senatFakultas = await senatFakultasService.getAllSenatFakultas();
      return res.status(200).json({
        success: true,
        message: "Senat Fakultas berhasil diambil",
        data: senatFakultas,
      });
    } catch (error) {
      console.error("Error in getAllSenatFakultas:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil Senat Fakultas",
      });
    }
  }

  async updateSenatFakultas(req: MulterRequest, res: Response) {
    try {
      const { nama, jabatan, keahlian, periode, tugas, deskripsi } = req.body;
      const id = req.params.id;

      // Validasi input
      if (!nama || !jabatan || !keahlian || !periode || !tugas || !deskripsi) {
        return res.status(400).json({
          success: false,
          message: "Semua field wajib diisi",
        });
      }

      const updateData: any = {
        nama,
        jabatan,
        keahlian,
        periode,
        tugas,
        deskripsi,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      const fotoFile = req.files?.["foto"]?.[0];
      if (fotoFile) {
        updateData.foto = fotoFile;
      }

      // Hanya tambahkan galeri jika ada file yang diunggah
      const galeriFiles = req.files?.["galeri"] || [];
      if (galeriFiles.length > 0) {
        updateData.galeri = galeriFiles;
      }

      const senatFakultas = await senatFakultasService.updateSenatFakultas(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Senat Fakultas berhasil diupdate",
        data: senatFakultas,
      });
    } catch (error) {
      console.error("Error in updateSenatFakultas:", error);
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

  async deleteSenatFakultas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData = await senatFakultasService.deleteSenatFakultas(
        Number(id)
      );
      res.status(200).json(deletedData);
    } catch (error) {
      console.error("Error in deleteSenatFakultas:", error);
      res.status(500).json({ error: "Failed to delete Senat Fakultas" });
    }
  }

  async createStatistikSenatFakultas(req: Request, res: Response) {
    try {
      const {
        anggotaSenat,
        tahunPeriode,
        rapatPerTahun,
        keputusan,
        slogan,
        deskripsi,
      } = req.body;

      const statistikSenatFakultas =
        await senatFakultasService.createStatistikSenatFakultas({
          anggotaSenat,
          tahunPeriode,
          rapatPerTahun,
          keputusan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Senat Fakultas berhasil ditambahkan",
        data: statistikSenatFakultas,
      });
    } catch (error) {
      console.error("Error in createStatistikSenatFakultas:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menambahkan Statistik Senat Fakultas",
      });
    }
  }

  async getAllStatistikSenatFakultas(req: Request, res: Response) {
    try {
      const statistikSenatFakultas =
        await senatFakultasService.getAllStatistikSenatFakultas();
      return res.status(200).json({
        success: true,
        message: "Statistik Senat Fakultas berhasil diambil",
        data: statistikSenatFakultas,
      });
    } catch (error) {
      console.error("Error in getAllStatistikSenatFakultas:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil Statistik Senat Fakultas",
      });
    }
  }
  async updateStatistikSenatFakultas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        anggotaSenat,
        tahunPeriode,
        rapatPerTahun,
        keputusan,
        slogan,
        deskripsi,
      } = req.body;

      const updatedData =
        await senatFakultasService.updateStatistikSenatFakultas(Number(id), {
          anggotaSenat,
          tahunPeriode,
          rapatPerTahun,
          keputusan,
          slogan,
          deskripsi,
        });
      return res.status(200).json({
        success: true,
        message: "Statistik Senat Fakultas berhasil diupdate",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error in updateStatistikSenatFakultas:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate Statistik Senat Fakultas",
      });
    }
  }

  async deleteStatistikSenatFakultas(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await senatFakultasService.deleteStatistikSenatFakultas(Number(id));
      return res.status(200).json(deletedData);
    } catch (error) {
      console.error("Error in deleteStatistikSenatFakultas:", error);
      return res
        .status(500)
        .json({ error: "Failed to delete Statistik Senat Fakultas" });
    }
  }
}

export default new SenatFakultasController();
