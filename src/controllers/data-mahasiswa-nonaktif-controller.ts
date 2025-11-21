import { Request, Response } from "express";
import DataMahasiswaNonAktifService from "../services/data-mahasiswa-nonaktif-sevice";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}
class DataMahasiswaNonAktifController {
  async createDataMahasiswaNonAktif(req: MulterRequest, res: Response) {
    try {
      const { foto, title, deskripsi, jumlah } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const dataMahasiswaAktif =
        await DataMahasiswaNonAktifService.createDataMahasiswaNonAktif({
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

  async getDataMahasiswaNonAktif(req: Request, res: Response) {
    try {
      const dataMahasiswaNonAktif =
        await DataMahasiswaNonAktifService.getDataMahasiswaNonAktif();
      res.status(200).json({
        success: true,
        message: "Data Mahasiswa NonAktif berhasil diambil",
        data: dataMahasiswaNonAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateDataMahasiswaNonAktif(req: MulterRequest, res: Response) {
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

      const updatedDataMahasiswaNonAktif =
        await DataMahasiswaNonAktifService.updateDataMahasiswaNonAktif(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Data Mahasiswa NonAktif berhasil diupdate",
        data: updatedDataMahasiswaNonAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteDataMahasiswaNonAktif(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const dataMahasiswaNonAktif =
        await DataMahasiswaNonAktifService.deleteDataMahasiswaNonAktif(id);
      res.status(200).json({
        success: true,
        message: "Data Mahasiswa NonAktif berhasil dihapus",
        data: dataMahasiswaNonAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikMahasiswaNonAktif(req: Request, res: Response) {
    try {
      const {
        mahasiswaNonAktif,
        tingkatKehadiran,
        ipkRataRata,
        mahasiswaBerprestasi,
      } = req.body;
      const statistikMahasiswaNonAktif =
        await DataMahasiswaNonAktifService.createStatistikMahasiswaNonAktif({
          mahasiswaNonAktif,
          tingkatKehadiran,
          ipkRataRata,
          mahasiswaBerprestasi,
        });
      res.status(201).json({
        success: true,
        message: "Statistik Mahasiswa NonAktif berhasil dibuat",
        data: statistikMahasiswaNonAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikMahasiswaNonAktif(req: Request, res: Response) {
    try {
      const statistikMahasiswaNonAktif =
        await DataMahasiswaNonAktifService.getStatistikMahasiswaNonAktif();
      res.status(200).json({
        success: true,
        message: "Data Mahasiswa NonAktif berhasil diambil",
        data: statistikMahasiswaNonAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikMahasiswaNonAktif(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        mahasiswaNonAktif,
        tingkatKehadiran,
        ipkRataRata,
        mahasiswaBerprestasi,
      } = req.body;
      const updateData: any = {
        mahasiswaNonAktif,
        tingkatKehadiran,
        ipkRataRata,
        mahasiswaBerprestasi,
      };

      const updatedStatistikMahasiswaNonAktif =
        await DataMahasiswaNonAktifService.updateStatistikMahasiswaNonAktif(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Mahasiswa NonAktif berhasil diupdate",
        data: updatedStatistikMahasiswaNonAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikMahasiswaNonAktif(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const statistikMahasiswaNonAktif =
        await DataMahasiswaNonAktifService.deleteStatistikMahasiswaNonAktif(id);
      res.status(200).json({
        success: true,
        message: "Statistik Mahasiswa NonAktif berhasil dihapus",
        data: statistikMahasiswaNonAktif,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new DataMahasiswaNonAktifController();
