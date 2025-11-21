import { Request, Response } from "express";
import DataLulusanPertahunService from "../services/data-lulusan-pertahun-service";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}
class DataLulusanPertahunController {
  async createDataLulusanPertahun(req: MulterRequest, res: Response) {
    try {
      const { foto, title, deskripsi, jumlah } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const dataLulusanPertahun =
        await DataLulusanPertahunService.createDataLulusanPertahun({
          foto: req.files["foto"][0],
          title,
          deskripsi,
          jumlah,
        });
      res.status(201).json({
        success: true,
        message: "Data Lulusan Pertahun berhasil dibuat",
        data: dataLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getDataLulusanPertahun(req: Request, res: Response) {
    try {
      const dataLulusanPertahun =
        await DataLulusanPertahunService.getDataLulusanPertahun();
      res.status(200).json({
        success: true,
        message: "Data Lulusan Pertahun berhasil diambil",
        data: dataLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateDataLulusanPertahun(req: MulterRequest, res: Response) {
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

      const updatedDataLulusanPertahun =
        await DataLulusanPertahunService.updateDataLulusanPertahun(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Data Lulusan Pertahun berhasil diupdate",
        data: updatedDataLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteDataLulusanPertahun(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const dataLulusanPertahun =
        await DataLulusanPertahunService.deleteDataLulusanPertahun(id);
      res.status(200).json({
        success: true,
        message: "Data Lulusan Pertahun berhasil dihapus",
        data: dataLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikLulusanPertahun(req: Request, res: Response) {
    try {
      const { totalLulusan, tahun1, tahun2, tingkatKelulusan } = req.body;
      const statistikLulusanPertahun =
        await DataLulusanPertahunService.createStatistikLulusanPertahun({
          totalLulusan,
          tahun1,
          tahun2,
          tingkatKelulusan,
        });
      res.status(201).json({
        success: true,
        message: "Statistik Lulusan Pertahun berhasil dibuat",
        data: statistikLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikLulusanPertahun(req: Request, res: Response) {
    try {
      const statistikLulusanPertahun =
        await DataLulusanPertahunService.getStatistikLulusanPertahun();
      res.status(200).json({
        success: true,
        message: "Data Lulusan Pertahun berhasil diambil",
        data: statistikLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikLulusanPertahun(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { totalLulusan, tahun1, tahun2, tingkatKelulusan } = req.body;
      const updateData: any = {
        totalLulusan,
        tahun1,
        tahun2,
        tingkatKelulusan,
      };

      const updatedStatistikLulusanPertahun =
        await DataLulusanPertahunService.updateStatistikLulusanPertahun(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Lulusan Pertahun berhasil diupdate",
        data: updatedStatistikLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikLulusanPertahun(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const statistikLulusanPertahun =
        await DataLulusanPertahunService.deleteStatistikLulusanPertahun(id);
      res.status(200).json({
        success: true,
        message: "Statistik Lulusan Pertahun berhasil dihapus",
        data: statistikLulusanPertahun,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new DataLulusanPertahunController();
