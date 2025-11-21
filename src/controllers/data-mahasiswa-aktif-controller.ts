import { Request, Response } from "express";
import DataMahasiswaAktifService from "../services/data-mahasiswa-aktif-service";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}
class DataMahasiswaAktifController {
  async createDataMahasiswaAktif(req: MulterRequest, res: Response) {
    try {
      const { foto, title, deskripsi, jumlah } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const dataMahasiswaAktif =
        await DataMahasiswaAktifService.createDataMahasiswaAktif({
          foto: req.files["foto"][0],
          title,
          deskripsi,
          jumlah,
        });
      res.status(201).json({
        success: true,
        message: "Data Mahasiswa Aktif berhasil dibuat",
        data: dataMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getDataMahasiswaAktif(req: Request, res: Response) {
    try {
      const dataMahasiswaAktif =
        await DataMahasiswaAktifService.getDataMahasiswaAktif();
      res.status(200).json({
        success: true,
        message: "Data Mahasiswa Aktif berhasil diambil",
        data: dataMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateDataMahasiswaAktif(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const { title, deskripsi, jumlah, foto } = req.body;
      const updateData: any = {
        title,
        deskripsi,
        jumlah,
        foto,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedDataMahasiswaAktif =
        await DataMahasiswaAktifService.updateDataMahasiswaAktif(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Data Mahasiswa Aktif berhasil diupdate",
        data: updatedDataMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteDataMahasiswaAktif(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const dataMahasiswaAktif =
        await DataMahasiswaAktifService.deleteDataMahasiswaAktif(id);
      res.status(200).json({
        success: true,
        message: "Data Mahasiswa Aktif berhasil dihapus",
        data: dataMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikMahasiswaAktif(req: Request, res: Response) {
    try {
      const {
        mahasiswaAktif,
        tingkatKehadiran,
        ipkRataRata,
        mahasiswaBerprestasi,
      } = req.body;
      const statistikMahasiswaAktif =
        await DataMahasiswaAktifService.createStatistikMahasiswaAktif({
          mahasiswaAktif,
          tingkatKehadiran,
          ipkRataRata,
          mahasiswaBerprestasi,
        });
      res.status(201).json({
        success: true,
        message: "Statistik Mahasiswa Aktif berhasil dibuat",
        data: statistikMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikMahasiswaAktif(req: Request, res: Response) {
    try {
      const statistikMahasiswaAktif =
        await DataMahasiswaAktifService.getStatistikMahasiswaAktif();
      res.status(200).json({
        success: true,
        message: "Data Mahasiswa Aktif berhasil diambil",
        data: statistikMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikMahasiswaAktif(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        mahasiswaAktif,
        tingkatKehadiran,
        ipkRataRata,
        mahasiswaBerprestasi,
      } = req.body;
      const updateData: any = {
        mahasiswaAktif,
        tingkatKehadiran,
        ipkRataRata,
        mahasiswaBerprestasi,
      };

      const updatedStatistikMahasiswaAktif =
        await DataMahasiswaAktifService.updateStatistikMahasiswaAktif(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Mahasiswa Aktif berhasil diupdate",
        data: updatedStatistikMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikMahasiswaAktif(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const statistikMahasiswaAktif =
        await DataMahasiswaAktifService.deleteStatistikMahasiswaAktif(id);
      res.status(200).json({
        success: true,
        message: "Statistik Mahasiswa Aktif berhasil dihapus",
        data: statistikMahasiswaAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new DataMahasiswaAktifController();
