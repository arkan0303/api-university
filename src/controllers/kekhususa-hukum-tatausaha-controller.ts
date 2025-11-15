import kekhususanHukumTatausahaService from "../services/kekhususa-hukum-tatausaha-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class KekhususanHukumTatausahaController {
  async createKekhususanHukumTatausaha(req: MulterRequest, res: Response) {
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
      const kekhususanHukumTataUsahaNegara =
        await kekhususanHukumTatausahaService.createKekhususanHukumTataUsahaNegara(
          {
            semester,
            sks,
            title,
            deskripsi,
            kategori: kategoriJson,
            foto,
          }
        );
      return res.status(201).json({
        success: true,
        data: kekhususanHukumTataUsahaNegara,
      });
    } catch (error) {
      console.error("Error in createKekhususanHukumTataUsahaNegara:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat kekhususan hukum pidana",
      });
    }
  }

  async getAllKekhususanHukumTataUsahaNegara(req: Request, res: Response) {
    try {
      const kekhususanHukumTataUsahaNegara =
        await kekhususanHukumTatausahaService.getAllKekhususanHukumTataUsahaNegara();
      return res.status(200).json({
        success: true,
        data: kekhususanHukumTataUsahaNegara,
      });
    } catch (error) {
      console.error("Error in getAllKekhususanHukumTataUsahaNegara:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan kekhususan hukum pidana",
      });
    }
  }

  async updateKekhususanHukumTataUsahaNegara(
    req: MulterRequest,
    res: Response
  ) {
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

      const updatedKekhususanHukumTataUsahaNegara =
        await kekhususanHukumTatausahaService.updateKekhususanHukumTataUsahaNegara(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Kekhususan Hukum Tata Usaha Negara berhasil diupdate",
        data: updatedKekhususanHukumTataUsahaNegara,
      });
    } catch (error) {
      console.error("Error in updateKekhususanHukumTataUsahaNegara:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui kekhususan hukum pidana",
      });
    }
  }

  async deleteKekhususanHukumTataUsahaNegara(req: Request, res: Response) {
    try {
      const result =
        await kekhususanHukumTatausahaService.deleteKekhususanHukumTataUsahaNegara(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Kekhususan Hukum Tata Usaha Negara berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteKekhususanHukumTataUsahaNegara:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus kekhususan hukum pidana",
      });
    }
  }

  async createProspekKarirTataUsahaNegara(req: Request, res: Response) {
    try {
      const { title, deskripsi, kategori } = req.body;
      const kategoriJson = JSON.parse(kategori);
      const prospekKarir =
        await kekhususanHukumTatausahaService.createProspekKarirTataUsahaNegara(
          {
            title,
            deskripsi,
            kategori: kategoriJson,
          }
        );
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

  async getAllProspekKarirTataUsahaNegara(req: Request, res: Response) {
    try {
      const prospekKarir =
        await kekhususanHukumTatausahaService.getAllProspekKarirTataUsahaNegara();
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

  async updateProspekKarirTataUsahaNegara(req: Request, res: Response) {
    try {
      const { title, deskripsi, kategori } = req.body;
      const kategoriJson = JSON.parse(kategori);
      const updateData: any = {
        title,
        deskripsi,
        kategori: kategoriJson,
      };
      const updatedProspekKarir =
        await kekhususanHukumTatausahaService.updateProspekKarirTataUsahaNegara(
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

  async deleteProspekKarirTataUsahaNegara(req: Request, res: Response) {
    try {
      const result =
        await kekhususanHukumTatausahaService.deleteProspekKarirTataUsahaNegara(
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

  async createStatistikKekhususanHukumTataUsahaNegara(
    req: Request,
    res: Response
  ) {
    try {
      const {
        sks,
        mahasiswaAktif,
        tingkatKelulusan,
        alumniProfesional,
        slogan,
        deskripsi,
      } = req.body;
      const statistikKekhususanHukumTataUsahaNegara =
        await kekhususanHukumTatausahaService.createStatistikKekhususanHukumTataUsahaNegara(
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
        data: statistikKekhususanHukumTataUsahaNegara,
      });
    } catch (error) {
      console.error(
        "Error in createStatistikKekhususanHukumTataUsahaNegara:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik kekhususan hukum pidana",
      });
    }
  }

  async getAllStatistikKekhususanHukumTataUsahaNegara(
    req: Request,
    res: Response
  ) {
    try {
      const statistikKekhususanHukumTataUsahaNegara =
        await kekhususanHukumTatausahaService.getAllStatistikKekhususanHukumTataUsahaNegara();
      return res.status(200).json({
        success: true,
        data: statistikKekhususanHukumTataUsahaNegara,
      });
    } catch (error) {
      console.error(
        "Error in getAllStatistikKekhususanHukumTataUsahaNegara:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik kekhususan hukum pidana",
      });
    }
  }

  async updateStatistikKekhususanHukumTataUsahaNegara(
    req: Request,
    res: Response
  ) {
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
      const updatedStatistikKekhususanHukumTataUsahaNegara =
        await kekhususanHukumTatausahaService.updateStatistikKekhususanHukumTataUsahaNegara(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message:
          "Statistik Kekhususan Hukum Tata Usaha Negara berhasil diupdate",
        data: updatedStatistikKekhususanHukumTataUsahaNegara,
      });
    } catch (error) {
      console.error(
        "Error in updateStatistikKekhususanHukumTataUsahaNegara:",
        error
      );
      return res.status(500).json({
        success: false,
        message:
          "Gagal memperbarui statistik kekhususan hukum tata usaha negara",
      });
    }
  }

  async deleteStatistikKekhususanHukumTataUsahaNegara(
    req: Request,
    res: Response
  ) {
    try {
      const result =
        await kekhususanHukumTatausahaService.deleteStatistikKekhususanHukumTataUsahaNegara(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message:
          "Statistik Kekhususan Hukum Tata Usaha Negara berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error(
        "Error in deleteStatistikKekhususanHukumTataUsahaNegara:",
        error
      );
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik kekhususan hukum tata usaha negara",
      });
    }
  }
}

export default new KekhususanHukumTatausahaController();
