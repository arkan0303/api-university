import KeteranganAktifMahasiswaService from "../services/keterangan-aktif-mhs-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class KeteranganAktifMahasiswaController {
  async createKeteranganAktifMahasiswa(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        nim,
        jurusan,
        semester,
        status,
        ipk,
        keperluan,
        noSurat,
        tanggalTerbit,
        tahunAkademik,
        diTerbitkan,
        note,
        deskripsi,
      } = req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const data =
        await KeteranganAktifMahasiswaService.createKeteranganAktifMahasiswa({
          nama,
          nim,
          jurusan,
          semester,
          status,
          ipk,
          keperluan,
          noSurat,
          tanggalTerbit,
          tahunAkademik,
          diTerbitkan,
          note,
          deskripsi,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Keterangan Aktif Mahasiswa berhasil dibuat",
        data,
      });
    } catch (error) {
      console.error("Error in createKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllKeteranganAktifMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await KeteranganAktifMahasiswaService.getAllKeteranganAktifMahasiswa();
      res.status(200).json({
        success: true,
        message: "Keterangan Aktif Mahasiswa berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateKeteranganAktifMahasiswa(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        nim,
        jurusan,
        semester,
        status,
        ipk,
        keperluan,
        noSurat,
        tanggalTerbit,
        tahunAkademik,
        diTerbitkan,
        note,
        deskripsi,
      } = req.body;
      const id = req.params.id;

      const updateData: any = {
        nama,
        nim,
        jurusan,
        semester,
        status,
        ipk,
        keperluan,
        noSurat,
        tanggalTerbit,
        tahunAkademik,
        diTerbitkan,
        note,
        deskripsi,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedKeteranganAktifMahasiswa =
        await KeteranganAktifMahasiswaService.updateKeteranganAktifMahasiswa(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Keterangan Aktif Mahasiswa berhasil diupdate",
        data: updatedKeteranganAktifMahasiswa,
      });
    } catch (error) {
      console.error("Error in updateKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteKeteranganAktifMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await KeteranganAktifMahasiswaService.deleteKeteranganAktifMahasiswa(
          Number(req.params.id)
        );
      res.status(200).json({
        success: true,
        message: "Keterangan Aktif Mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikKeteranganAktifMahasiswa(req: Request, res: Response) {
    try {
      const { totalMahasiswa, aktif, tidakAktif, selesai, slogan, deskripsi } =
        req.body;

      const data =
        await KeteranganAktifMahasiswaService.createStatistikKeteranganAktifMahasiswa(
          {
            totalMahasiswa,
            aktif,
            tidakAktif,
            selesai,
            slogan,
            deskripsi,
          }
        );
      return res.status(201).json({
        success: true,
        message: "Statistik Keterangan Aktif Mahasiswa berhasil dibuat",
        data,
      });
    } catch (error) {
      console.error("Error in createStatistikKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikKeteranganAktifMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await KeteranganAktifMahasiswaService.getAllStatistikKeteranganAktifMahasiswa();
      res.status(200).json({
        success: true,
        message: "Statistik Keterangan Aktif Mahasiswa berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllStatistikKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikKeteranganAktifMahasiswa(req: Request, res: Response) {
    try {
      const { totalMahasiswa, aktif, tidakAktif, selesai, slogan, deskripsi } =
        req.body;
      const id = req.params.id;
      const statistikKeteranganAktifMahasiswa =
        await KeteranganAktifMahasiswaService.updateStatistikKeteranganAktifMahasiswa(
          Number(id),
          {
            totalMahasiswa,
            aktif,
            tidakAktif,
            selesai,
            slogan,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Keterangan Aktif Mahasiswa berhasil diupdate",
        statistikKeteranganAktifMahasiswa,
      });
    } catch (error) {
      console.error("Error in updateStatistikKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikKeteranganAktifMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await KeteranganAktifMahasiswaService.deleteStatistikKeteranganAktifMahasiswa(
          Number(req.params.id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik Keterangan Aktif Mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllDataKeteranganAktifMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await KeteranganAktifMahasiswaService.getDataKeteranganAktifMahasiswa();
      res.status(200).json({
        success: true,
        message: "Data Keterangan Aktif Mahasiswa berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllDataKeteranganAktifMahasiswa:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new KeteranganAktifMahasiswaController();
