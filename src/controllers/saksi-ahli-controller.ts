import saksiAhliService from "../services/saksi-ahli-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SaksiAhliController {
  async createSaksiAhli(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        deskripsi,
        keahlian,
        bidangKeahlian,
        kasusDitangani,
        email,
        noTelp,
      } = req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const keahlianJson = JSON.parse(keahlian);
      const saksiAhli = await saksiAhliService.createSaksiAhli({
        nama,
        deskripsi,
        foto: req.files?.["foto"][0],
        keahlian: keahlianJson,
        bidangKeahlian,
        kasusDitangani,
        email,
        noTelp,
      });
      return res.status(201).json({
        success: true,
        message: "Saksi Ahli berhasil ditambahkan",
        data: saksiAhli,
      });
    } catch (error) {
      console.error("Error in createSaksiAhli:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menambahkan saksi ahli",
      });
    }
  }

  async getAllSaksiAhli(req: Request, res: Response) {
    try {
      const saksiAhli = await saksiAhliService.getAllSaksiAhli();
      return res.status(200).json({
        success: true,
        message: "Saksi Ahli berhasil diambil",
        data: saksiAhli,
      });
    } catch (error) {
      console.error("Error in getAllSaksiAhli:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil saksi ahli",
      });
    }
  }

  async updateSaksiAhli(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        deskripsi,
        keahlian,
        bidangKeahlian,
        kasusDitangani,
        email,
        noTelp,
      } = req.body;
      const id = req.params.id;

      // Validasi input
      if (
        !nama ||
        !deskripsi ||
        !keahlian ||
        !bidangKeahlian ||
        !kasusDitangani ||
        !email ||
        !noTelp
      ) {
        return res.status(400).json({
          success: false,
          message: "Semua field kecuali foto wajib diisi",
        });
      }
      const keahlianJson = JSON.parse(keahlian);

      const updateData: any = {
        nama,
        deskripsi,
        keahlian: keahlianJson,
        bidangKeahlian,
        kasusDitangani,
        email,
        noTelp,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const saksiAhli = await saksiAhliService.updateSaksiAhli(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Saksi Ahli berhasil diupdate",
        data: saksiAhli,
      });
    } catch (error) {
      console.error("Error in updateSaksiAhli:", error);
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

  async deleteSaksiAhli(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await saksiAhliService.deleteSaksiAhli(Number(id));
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteData:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async createProsedurSaksiAhli(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, waktu } = req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const prosedurSaksiAhli = await saksiAhliService.createProsedurSaksiAhli({
        foto: req.files?.["foto"][0],
        title,
        deskripsi,
        waktu,
      });
      return res.status(201).json({
        success: true,
        message: "Prosedur Saksi Ahli berhasil dibuat",
        prosedurSaksiAhli,
      });
    } catch (error) {
      console.error("Error in createStatistikSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat statistik sejarah S1",
      });
    }
  }

  async getProsedurSaksiAhli(req: Request, res: Response) {
    try {
      const prosedurSaksiAhli =
        await saksiAhliService.getAllProsedurSaksiAhli();
      return res.status(200).json({
        success: true,
        message: "Prosedur Saksi Ahli berhasil diambil",
        data: prosedurSaksiAhli,
      });
    } catch (error) {
      console.error("Error in getProsedurSaksiAhli:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil prosedur saksi ahli",
      });
    }
  }

  async updateProsedurSaksiAhli(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, waktu } = req.body;
      const id = req.params.id;

      // Validasi input
      if (!title || !deskripsi || !waktu) {
        return res.status(400).json({
          success: false,
          message: "Semua field kecuali foto wajib diisi",
        });
      }

      const updateData: any = {
        title,
        deskripsi,
        waktu,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const prosedurSaksiAhli = await saksiAhliService.updateProsedurSaksiAhli(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Prosedur Saksi Ahli berhasil diupdate",
        data: prosedurSaksiAhli,
      });
    } catch (error) {
      console.error("Error in updateProsedurSaksiAhli:", error);
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

  async deleteProsedurSaksiAhli(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await saksiAhliService.deleteProsedurSaksiAhli(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteData:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async createStatistikSaksiAhli(req: Request, res: Response) {
    try {
      const {
        keteranganAhli,
        tingkatPenerimaan,
        ahliBerpengalaman,
        profesional,
        slogan,
        deskripsi,
      } = req.body;

      const statistikSaksiAhli =
        await saksiAhliService.createStatistikSaksiAhli({
          keteranganAhli,
          tingkatPenerimaan,
          ahliBerpengalaman,
          profesional,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Saksi Ahli berhasil dibuat",
        statistikSaksiAhli,
      });
    } catch (error) {
      console.error("Error in createStatistikSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat statistik sejarah S1",
      });
    }
  }

  async getAllStatistikSaksiAhli(req: Request, res: Response) {
    try {
      const statistikSaksiAhli =
        await saksiAhliService.getAllStatistikSaksiAhli();
      return res.status(200).json({
        success: true,
        message: "Statistik Saksi Ahli berhasil diambil",
        data: statistikSaksiAhli,
      });
    } catch (error) {
      console.error("Error in getAllStatistikSaksiAhli:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik saksi ahli",
      });
    }
  }

  async updateStatistikSaksiAhli(req: Request, res: Response) {
    try {
      const {
        keteranganAhli,
        tingkatPenerimaan,
        ahliBerpengalaman,
        profesional,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;

      // Validasi input
      if (
        !keteranganAhli ||
        !deskripsi ||
        !tingkatPenerimaan ||
        !ahliBerpengalaman ||
        !profesional ||
        !slogan
      ) {
        return res.status(400).json({
          success: false,
          message: "Semua field wajib diisi",
        });
      }

      const updateData: any = {
        keteranganAhli,
        deskripsi,
        tingkatPenerimaan,
        ahliBerpengalaman,
        profesional,
        slogan,
      };

      const statistikSaksiAhli =
        await saksiAhliService.updateStatistikSaksiAhli(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Statistik Saksi Ahli berhasil diupdate",
        data: statistikSaksiAhli,
      });
    } catch (error) {
      console.error("Error in updateStatistikSaksiAhli:", error);
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

  async deleteStatistikSaksiAhli(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await saksiAhliService.deleteStatistikSaksiAhli(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteData:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }
}

export default new SaksiAhliController();
