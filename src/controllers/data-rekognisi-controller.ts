import console from "console";
import dataRekognisiService from "../services/data-rekognisi-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class DataRekognisiController {
  async createDataRekognisi(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        tema,
        tingkat,
        tahun,
        deskripsi,
        dampak,
        kriteriaPenelitian,
        manfaat,
        provider,
        masaBerlaku,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const kriteriaPenelitianJson = JSON.parse(kriteriaPenelitian);
      const manfaatJson = JSON.parse(manfaat);

      const create = await dataRekognisiService.createDataRekognisi({
        title,
        tema,
        tingkat,
        tahun,
        deskripsi,
        dampak,
        kriteriaPenelitian: kriteriaPenelitianJson,
        manfaat: manfaatJson,
        provider,
        masaBerlaku,
        foto: req.files["foto"][0],
      });
      return res.status(201).json({
        success: true,
        data: create,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat data rekognisi",
      });
    }
  }

  async getAllDataRekognisi(req: Request, res: Response) {
    try {
      const getAllDataRekognisi =
        await dataRekognisiService.getAllDataRekognisi();
      return res.status(200).json({
        success: true,
        data: getAllDataRekognisi,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan data rekognisi",
      });
    }
  }

  async updateDataRekognisi(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        tema,
        tingkat,
        tahun,
        deskripsi,
        dampak,
        kriteriaPenelitian,
        manfaat,
        provider,
        masaBerlaku,
      } = req.body;
      const id = req.params.id;

      const kriteriaPenelitianJson = JSON.parse(kriteriaPenelitian);
      const manfaatJson = JSON.parse(manfaat);

      const updateData: any = {
        title,
        tema,
        tingkat,
        tahun,
        deskripsi,
        dampak,
        kriteriaPenelitian: kriteriaPenelitianJson,
        manfaat: manfaatJson,
        provider,
        masaBerlaku,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedDataRekognisi =
        await dataRekognisiService.updateDataRekognisi(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Data Rekognisi berhasil diupdate",
        data: updatedDataRekognisi,
      });
    } catch (error) {
      console.error("Error in updateDataRekognisi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui data rekognisi",
      });
    }
  }

  async deleteDataRekognisi(req: Request, res: Response) {
    try {
      const result = await dataRekognisiService.deleteDataRekognisi(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Data Rekognisi berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteDataRekognisi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus data rekognisi",
      });
    }
  }

  async createStatistikDataRekognisi(req: Request, res: Response) {
    try {
      const {
        penghargaan,
        sertifikasi,
        akreditasi,
        rekognasiInternasional,
        slogan,
        deskripsi,
      } = req.body;

      const create = await dataRekognisiService.createStatistikDataRekognisi({
        penghargaan,
        sertifikasi,
        akreditasi,
        rekognasiInternasional,
        slogan,
        deskripsi,
      });
      return res.status(201).json({
        success: true,
        data: create,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik data rekognisi",
      });
    }
  }

  async getAllStatistikDataRekognisi(req: Request, res: Response) {
    try {
      const getAllStatistikDataRekognisi =
        await dataRekognisiService.getAllStatistikDataRekognisi();
      return res.status(200).json({
        success: true,
        data: getAllStatistikDataRekognisi,
      });
    } catch (error) {
      console.error("Error in getAllStatistikDataRekognisi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik data rekognisi",
      });
    }
  }

  async updateStatistikDataRekognisi(req: Request, res: Response) {
    try {
      const {
        penghargaan,
        sertifikasi,
        akreditasi,
        rekognasiInternasional,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      console.log(req.body);
      console.log(req.params.id);
      const updateData: any = {
        penghargaan,
        sertifikasi,
        akreditasi,
        rekognasiInternasional,
        slogan,
        deskripsi,
      };
      const updatedStatistikDataRekognisi =
        await dataRekognisiService.updateStatistikDataRekognisi(
          Number(id), // Konversi id ke number
          updateData
        );
      console.log(updatedStatistikDataRekognisi);
      return res.status(200).json({
        success: true,
        message: "Statistik data rekognisi berhasil diupdate",
        data: updatedStatistikDataRekognisi,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik daftar ",
      });
    }
  }

  async deleteStatistikDataRekognisi(req: Request, res: Response) {
    try {
      const result = await dataRekognisiService.deleteStatistikDataRekognisi(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Statistik data rekognisi berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikDataRekognisi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik data rekognisi",
      });
    }
  }
}

export default new DataRekognisiController();
