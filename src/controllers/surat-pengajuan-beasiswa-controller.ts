import suratPengajuanBeasiswaService from "../services/surat-pengajuan-beasiswa-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SuratPengajuanBeasiswaController {
  async createSuratPengajuanBeasiswa(req: MulterRequest, res: Response) {
    try {
      const {
        idMahasiswa,
        beasiswa,
        noSurat,
        tanggalPengajuan,
        provider,
        nominalPerSemester,
        alasanPengajuan,
        prestasi,
        namaAyah,
        namaIbu,
        penghasilanOrangtua,
        alamat,
        email,
        kontak,
        note,
        status,
      } = req.body;
      console.log(req.body);

      const galeriFiles = req.files?.["dokumen"] || [];

      const prestasiJSON = JSON.parse(prestasi);
      console.log(prestasiJSON);
      const strategis =
        await suratPengajuanBeasiswaService.createSuratPengajuanBeasiswa({
          idMahasiswa,
          beasiswa,
          noSurat,
          tanggalPengajuan,
          provider,
          nominalPerSemester,
          alasanPengajuan,
          prestasi: prestasiJSON,
          namaAyah,
          namaIbu,
          penghasilanOrangtua,
          alamat,
          email,
          kontak,
          note,
          status,
          dokumen: galeriFiles,
        });
      res.status(201).json(strategis);
    } catch (error) {
      console.error("Error in createRencanaStrategis:", error);
      res.status(500).json({ error: "Failed to create strategis" });
    }
  }

  async getAllSuratPengajuanBeasiswa(req: Request, res: Response) {
    try {
      const strategis =
        await suratPengajuanBeasiswaService.getAllSuratPengajuanBeasiswa();
      res.status(200).json({
        success: true,
        message: "Surat pengajuan beasiswa berhasil diambil",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in getAllSuratPengajuanBeasiswa:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil surat pengajuan beasiswa",
      });
    }
  }

  async updateSuratPengajuanBeasiswa(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const {
        idMahasiswa,
        beasiswa,
        noSurat,
        tanggalPengajuan,
        provider,
        nominalPerSemester,
        alasanPengajuan,
        prestasi,
        namaAyah,
        namaIbu,
        penghasilanOrangtua,
        alamat,
        email,
        kontak,
        note,
        status,
      } = req.body;
      const prestasiJSON = JSON.parse(prestasi);

      const updateData: any = {
        idMahasiswa,
        beasiswa,
        noSurat,
        tanggalPengajuan,
        provider,
        nominalPerSemester,
        alasanPengajuan,
        prestasi: prestasiJSON,
        namaAyah,
        namaIbu,
        penghasilanOrangtua,
        alamat,
        email,
        kontak,
        note,
        status,
      };
      // Hanya tambahkan file jika ada file yang diunggah
      const galeriFiles = req.files?.["dokumen"] || [];
      if (galeriFiles.length > 0) {
        updateData.dokumen = galeriFiles;
      }

      console.log(updateData);
      const strategis =
        await suratPengajuanBeasiswaService.updateSuratPengajuanBeasiswa(
          Number(id),
          updateData
        );
      res.status(200).json(strategis);
    } catch (error) {
      console.error("Error in updateSuratPengajuanBeasiswa:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate surat pengajuan beasiswa",
      });
    }
  }

  async deleteSuratPengajuanBeasiswa(req: Request, res: Response) {
    try {
      const { id } = req.params;
      console.log(id);
      const strategis =
        await suratPengajuanBeasiswaService.deleteSuratPengajuanBeasiswa(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Surat pengajuan beasiswa berhasil dihapus",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in deleteSuratPengajuanBeasiswa:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus surat pengajuan beasiswa",
      });
    }
  }

  async getStatistikSuratPengajuanBeasiswa(req: Request, res: Response) {
    try {
      const statistikSuratPengajuanBeasiswa =
        await suratPengajuanBeasiswaService.getStatistikSuratPengajuanBeasiswa();
      res.status(200).json({
        success: true,
        message: "Statistik surat pengajuan beasiswa berhasil diambil",
        data: statistikSuratPengajuanBeasiswa,
      });
    } catch (error) {
      console.error("Error in getStatistikSuratPengajuanBeasiswa:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik surat pengajuan beasiswa",
      });
    }
  }

  async updateStatistikSuratPengajuanBeasiswa(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        totalPengajuan,
        disetujui,
        menunggu,
        ditolak,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSuratPengajuanBeasiswa =
        await suratPengajuanBeasiswaService.updateStatistikSuratPengajuanBeasiswa(
          Number(id),
          {
            totalPengajuan,
            disetujui,
            menunggu,
            ditolak,
            slogan,
            deskripsi,
          }
        );
      res.status(200).json({
        success: true,
        message: "Statistik surat pengajuan beasiswa berhasil diupdate",
        data: statistikSuratPengajuanBeasiswa,
      });
    } catch (error) {
      console.error("Error in updateStatistikSuratPengajuanBeasiswa:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik surat pengajuan beasiswa",
      });
    }
  }

  async deleteStatistikSuratPengajuanBeasiswa(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const statistikSuratPengajuanBeasiswa =
        await suratPengajuanBeasiswaService.deleteStatistikSuratPengajuanBeasiswa(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik surat pengajuan beasiswa berhasil dihapus",
        data: statistikSuratPengajuanBeasiswa,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSuratPengajuanBeasiswa:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik surat pengajuan beasiswa",
      });
    }
  }

  async createStatistikSuratPengajuanBeasiswa(req: Request, res: Response) {
    try {
      const {
        totalPengajuan,
        disetujui,
        menunggu,
        ditolak,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSuratPengajuanBeasiswa =
        await suratPengajuanBeasiswaService.createStatistikSuratPengajuanBeasiswa(
          {
            totalPengajuan,
            disetujui,
            menunggu,
            ditolak,
            slogan,
            deskripsi,
          }
        );
      res.status(200).json({
        success: true,
        message: "Statistik surat pengajuan beasiswa berhasil dibuat",
        data: statistikSuratPengajuanBeasiswa,
      });
    } catch (error) {
      console.error("Error in createStatistikSuratPengajuanBeasiswa:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat statistik surat pengajuan beasiswa",
      });
    }
  }
}
export default new SuratPengajuanBeasiswaController();
