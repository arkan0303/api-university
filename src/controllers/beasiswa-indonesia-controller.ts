import beasiswaIndonesiaService from "../services/beasiswa-indonesia-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class BeasiswaIndonesiaController {
  async createBeasiswaIndonesia(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        oleh,
        nominal,
        waktu,
        sebanyak,
        tentang,
        persyaratan,
        manfaat,
        batasWaktu,
        email,
        noTelp,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const olehJson = JSON.parse(oleh);
      const persyaratanJson = JSON.parse(persyaratan);
      const manfaatJson = JSON.parse(manfaat);

      const createBeasiswaIndonesia =
        await beasiswaIndonesiaService.createBeasiswaIndonesia({
          foto: req.files["foto"][0],
          title,
          oleh: olehJson,
          nominal,
          waktu,
          sebanyak,
          tentang,
          persyaratan: persyaratanJson,
          manfaat: manfaatJson,
          batasWaktu,
          email,
          noTelp,
        });
      return res.status(201).json({
        success: true,
        data: createBeasiswaIndonesia,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat beasiswa Indonesia",
      });
    }
  }

  async getAllBeasiswaIndonesia(req: Request, res: Response) {
    try {
      const getAllBeasiswaIndonesia =
        await beasiswaIndonesiaService.getAllBeasiswaIndonesia();
      return res.status(200).json({
        success: true,
        data: getAllBeasiswaIndonesia,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan beasiswa Indonesia",
      });
    }
  }

  async updateBeasiswaIndonesia(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        oleh,
        nominal,
        waktu,
        sebanyak,
        tentang,
        persyaratan,
        manfaat,
        batasWaktu,
        email,
        noTelp,
      } = req.body;
      const id = req.params.id;
      const olehJson = JSON.parse(oleh);
      const persyaratanJson = JSON.parse(persyaratan);
      const manfaatJson = JSON.parse(manfaat);
      const updateData: any = {
        title,
        oleh: olehJson,
        nominal,
        waktu,
        sebanyak,
        tentang,
        persyaratan: persyaratanJson,
        manfaat: manfaatJson,
        batasWaktu,
        email,
        noTelp,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedBeasiswaIndonesia =
        await beasiswaIndonesiaService.updateBeasiswaIndonesia(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Beasiswa Indonesia berhasil diupdate",
        data: updatedBeasiswaIndonesia,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui beasiswa Indonesia",
      });
    }
  }

  async deleteBeasiswaIndonesia(req: Request, res: Response) {
    try {
      const result = await beasiswaIndonesiaService.deleteBeasiswaIndonesia(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Beasiswa Indonesia berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteBeasiswaIndonesia:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus beasiswa Indonesia",
      });
    }
  }

  async createStatistikBeasiswaIndonesia(req: Request, res: Response) {
    try {
      const {
        totalPenerima,
        durasiBeasiswa,
        tingkatKompetitif,
        pendaftarTahunan,
        slogan,
        deskripsi,
      } = req.body;
      const createStatistikBeasiswaIndonesia =
        await beasiswaIndonesiaService.createStatistikBeasiswaIndonesia({
          totalPenerima,
          durasiBeasiswa,
          tingkatKompetitif,
          pendaftarTahunan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: createStatistikBeasiswaIndonesia,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik beasiswa Indonesia",
      });
    }
  }

  async getAllStatistikBeasiswaIndonesia(req: Request, res: Response) {
    try {
      const getAllStatistikBeasiswaIndonesia =
        await beasiswaIndonesiaService.getAllStatistikBeasiswaIndonesia();
      return res.status(200).json({
        success: true,
        data: getAllStatistikBeasiswaIndonesia,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik beasiswa Indonesia",
      });
    }
  }

  async updateStatistikBeasiswaIndonesia(req: Request, res: Response) {
    try {
      const {
        totalPenerima,
        durasiBeasiswa,
        tingkatKompetitif,
        pendaftarTahunan,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        totalPenerima,
        durasiBeasiswa,
        tingkatKompetitif,
        pendaftarTahunan,
        slogan,
        deskripsi,
      };
      const updatedStatistik =
        await beasiswaIndonesiaService.updateStatistikBeasiswaIndonesia(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik beasiswa Indonesia berhasil diupdate",
        data: updatedStatistik,
      });
    } catch (error) {
      console.error("Error in updateStatistikBeasiswaIndonesia:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik beasiswa Indonesia",
      });
    }
  }

  async deleteStatistikBeasiswaIndonesia(req: Request, res: Response) {
    try {
      const result =
        await beasiswaIndonesiaService.deleteStatistikBeasiswaIndonesia(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik beasiswa Indonesia berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikBeasiswaIndonesia:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik beasiswa Indonesia",
      });
    }
  }
}

export default new BeasiswaIndonesiaController();
