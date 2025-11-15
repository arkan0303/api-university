import kekhususanHukumPidanaService from "../services/kekhususan-hukum-pidana-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class KekhususanHukumPidanaController {
  async createKekhususanHukumPidana(req: MulterRequest, res: Response) {
    try {
      const { semester, sks, title, deskripsi, kategori } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJson = JSON.parse(kategori);
      const foto = req.files["foto"][0];
      const kekhususanHukumPidana =
        await kekhususanHukumPidanaService.createKekhususanHukumPidana({
          semester,
          sks,
          title,
          deskripsi,
          kategori: kategoriJson,
          foto,
        });
      return res.status(201).json({
        success: true,
        data: kekhususanHukumPidana,
      });
    } catch (error) {
      console.error("Error in createKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat kekhususan hukum pidana",
      });
    }
  }

  async getAllKekhususanHukumPidana(req: Request, res: Response) {
    try {
      const kekhususanHukumPidana =
        await kekhususanHukumPidanaService.getAllKekhususanHukumPidana();
      return res.status(200).json({
        success: true,
        data: kekhususanHukumPidana,
      });
    } catch (error) {
      console.error("Error in getAllKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan kekhususan hukum pidana",
      });
    }
  }

  async updateKekhususanHukumPidana(req: MulterRequest, res: Response) {
    try {
      const { semester, sks, title, deskripsi, kategori } = req.body;
      const id = req.params.id;

      const kategoriJson = JSON.parse(kategori);

      const updateData: any = {
        semester,
        sks,
        title,
        deskripsi,
        kategori: kategoriJson,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedKekhususanHukumPidana =
        await kekhususanHukumPidanaService.updateKekhususanHukumPidana(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Kekhususan Hukum Pidana berhasil diupdate",
        data: updatedKekhususanHukumPidana,
      });
    } catch (error) {
      console.error("Error in updateKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui kekhususan hukum pidana",
      });
    }
  }

  async deleteKekhususanHukumPidana(req: Request, res: Response) {
    try {
      const result =
        await kekhususanHukumPidanaService.deleteKekhususanHukumPidana(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Kekhususan Hukum Pidana berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus kekhususan hukum pidana",
      });
    }
  }

  async createProspekKarir(req: Request, res: Response) {
    try {
      const { title, deskripsi, kategori } = req.body;
      const kategoriJson = JSON.parse(kategori);
      const prospekKarir =
        await kekhususanHukumPidanaService.createProspekKarir({
          title,
          deskripsi,
          kategori: kategoriJson,
        });
      return res.status(201).json({
        success: true,
        data: prospekKarir,
      });
    } catch (error) {
      console.error("Error in createProspekKarir:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat prospek karir",
      });
    }
  }

  async getAllProspekKarir(req: Request, res: Response) {
    try {
      const prospekKarir =
        await kekhususanHukumPidanaService.getAllProspekKarir();
      return res.status(200).json({
        success: true,
        data: prospekKarir,
      });
    } catch (error) {
      console.error("Error in getAllProspekKarir:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan prospek karir",
      });
    }
  }

  async updateProspekKarir(req: Request, res: Response) {
    try {
      const { title, deskripsi, kategori } = req.body;
      const kategoriJson = JSON.parse(kategori);
      const updateData: any = {
        title,
        deskripsi,
        kategori: kategoriJson,
      };
      const updatedProspekKarir =
        await kekhususanHukumPidanaService.updateProspekKarir(
          Number(req.params.id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Prospek Karir berhasil diupdate",
        data: updatedProspekKarir,
      });
    } catch (error) {
      console.error("Error in updateProspekKarir:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui prospek karir",
      });
    }
  }

  async deleteProspekKarir(req: Request, res: Response) {
    try {
      const result = await kekhususanHukumPidanaService.deleteProspekKarir(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Prospek Karir berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteProspekKarir:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus prospek karir",
      });
    }
  }

  async createStatistikKekhususanHukumPidana(req: Request, res: Response) {
    try {
      const {
        sks,
        mahasiswaAktif,
        tingkatKelulusan,
        alumniProfesional,
        slogan,
        deskripsi,
      } = req.body;
      const statistikKekhususanHukumPidana =
        await kekhususanHukumPidanaService.createStatistikKekhususanHukumPidana(
          {
            sks,
            mahasiswaAktif,
            tingkatKelulusan,
            alumniProfesional,
            slogan,
            deskripsi,
          }
        );
      return res.status(201).json({
        success: true,
        data: statistikKekhususanHukumPidana,
      });
    } catch (error) {
      console.error("Error in createStatistikKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik kekhususan hukum pidana",
      });
    }
  }

  async getAllStatistikKekhususanHukumPidana(req: Request, res: Response) {
    try {
      const statistikKekhususanHukumPidana =
        await kekhususanHukumPidanaService.getAllStatistikKekhususanHukumPidana();
      return res.status(200).json({
        success: true,
        data: statistikKekhususanHukumPidana,
      });
    } catch (error) {
      console.error("Error in getAllStatistikKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik kekhususan hukum pidana",
      });
    }
  }

  async updateStatistikKekhususanHukumPidana(req: Request, res: Response) {
    try {
      const {
        sks,
        mahasiswaAktif,
        tingkatKelulusan,
        alumniProfesional,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        sks,
        mahasiswaAktif,
        tingkatKelulusan,
        alumniProfesional,
        slogan,
        deskripsi,
      };
      const updatedStatistikKekhususanHukumPidana =
        await kekhususanHukumPidanaService.updateStatistikKekhususanHukumPidana(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Kekhususan Hukum Pidana berhasil diupdate",
        data: updatedStatistikKekhususanHukumPidana,
      });
    } catch (error) {
      console.error("Error in updateStatistikKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik kekhususan hukum pidana",
      });
    }
  }

  async deleteStatistikKekhususanHukumPidana(req: Request, res: Response) {
    try {
      const result =
        await kekhususanHukumPidanaService.deleteStatistikKekhususanHukumPidana(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Kekhususan Hukum Pidana berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikKekhususanHukumPidana:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik kekhususan hukum pidana",
      });
    }
  }
}

export default new KekhususanHukumPidanaController();
