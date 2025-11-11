import sejarahS2Service from "../services/sejarahS2Service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SejarahS2Controller {
  async createSejarahS2(req: MulterRequest, res: Response) {
    try {
      const { judul, tahun, deskripsi } = req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const sejarahS2 = await sejarahS2Service.createSejarahS2({
        judul,
        tahun,
        deskripsi,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        message: "Sejarah S2 berhasil dibuat",
        sejarahS2,
      });
    } catch (error) {
      console.error("Error in createSejarahS2:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat sejarah S2",
      });
    }
  }

  async getAllSejarahS2(req: Request, res: Response) {
    try {
      const sejarahS2 = await sejarahS2Service.getAllSejarahS2();
      return res.status(200).json({
        success: true,
        message: "Sejarah S2 berhasil diambil",
        sejarahS2,
      });
    } catch (error) {
      console.error("Error in getAllSejarahS2:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil sejarah S2",
      });
    }
  }

  async updateSejarahS2(req: MulterRequest, res: Response) {
    try {
      const { judul, tahun, deskripsi } = req.body;
      const id = req.params.id;

      // Validasi input
      if (!judul || !tahun || !deskripsi) {
        return res.status(400).json({
          success: false,
          message: "Semua field kecuali foto wajib diisi",
        });
      }

      const updateData: any = {
        judul,
        tahun,
        deskripsi,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const sejarahS2 = await sejarahS2Service.updateSejarahS2(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Sejarah S2 berhasil diupdate",
        data: sejarahS2,
      });
    } catch (error) {
      console.error("Error in updateSejarahS2:", error);
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

  async deleteData(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await sejarahS2Service.deleteData(Number(id));
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

  async createSejarahS2Banner(req: MulterRequest, res: Response) {
    try {
      const { konten } = req.body;

      if (!req.files?.["banner"] || req.files["banner"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Banner harus diupload",
        });
      }
      const sejarahS2Banner = await sejarahS2Service.createSejarahS2Banner(
        req.files?.["banner"][0],
        konten
      );
      return res.status(201).json({
        success: true,
        message: "Sejarah S2 Banner berhasil dibuat",
        sejarahS2Banner,
      });
    } catch (error) {
      console.error("Error in createSejarahS2Banner:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat sejarah S2 Banner",
      });
    }
  }

  async updateSejarahS2Banner(req: MulterRequest, res: Response) {
    try {
      const { konten } = req.body;
      const id = req.params.id;

      if (!konten) {
        return res.status(400).json({
          success: false,
          message: "Konten harus diisi",
        });
      }

      const updateData: any = {
        konten,
      };

      // Tambahkan banner ke updateData jika ada file yang diupload
      if (req.files?.["banner"]?.[0]) {
        updateData.banner = req.files["banner"][0];
      }

      const updatedBanner = await sejarahS2Service.updateSejarahS2Banner(
        Number(id),
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Sejarah S2 Banner berhasil diupdate",
        data: updatedBanner,
      });
    } catch (error) {
      console.error("Error in updateSejarahS2Banner:", error);
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat mengupdate banner";
      res.status(500).json({
        success: false,
        message: errorMessage,
      });
    }
  }

  async deleteSejarahS2Banner(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await sejarahS2Service.deleteBanner(Number(id));
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteSejarahS2Banner:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async getDataBanner(req: Request, res: Response) {
    try {
      const dataBanner = await sejarahS2Service.getDataBanner();
      return res.status(200).json({
        success: true,
        message: "Data berhasil diambil",
        data: dataBanner,
      });
    } catch (error) {
      console.error("Error in getDataBanner:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil data",
      });
    }
  }

  async createStatistikSejarahS2(req: Request, res: Response) {
    try {
      const {
        tahunPengalaman,
        alumni,
        akreditasi,
        tingkatKelulusan,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSejarahS2 =
        await sejarahS2Service.createStatistikSejarahS2({
          tahunPengalaman,
          alumni,
          akreditasi,
          tingkatKelulusan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Sejarah S2 berhasil dibuat",
        statistikSejarahS2,
      });
    } catch (error) {
      console.error("Error in createStatistikSejarahS2:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat statistik sejarah S2",
      });
    }
  }

  async updateStatistikSejarahS2(req: Request, res: Response) {
    try {
      const {
        tahunPengalaman,
        alumni,
        akreditasi,
        tingkatKelulusan,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updatedStatistik = await sejarahS2Service.updateStatistikSejarahS2(
        Number(id),
        {
          tahunPengalaman,
          alumni,
          akreditasi,
          tingkatKelulusan,
          slogan,
          deskripsi,
        }
      );
      return res.status(200).json({
        success: true,
        message: "Statistik Sejarah S2 berhasil diupdate",
        data: updatedStatistik,
      });
    } catch (error) {
      console.error("Error in updateStatistikSejarahS2:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik sejarah S2",
      });
    }
  }

  async deleteStatistikSejarahS2(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await sejarahS2Service.deleteStatistikSejarahS2(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSejarahS2:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async getAllStatistikSejarahS2(req: Request, res: Response) {
    try {
      const statistikSejarahS2 =
        await sejarahS2Service.getAllStatistikSejarahS2();
      return res.status(200).json({
        success: true,
        message: "Data berhasil diambil",
        data: statistikSejarahS2,
      });
    } catch (error) {
      console.error("Error in getAllStatistikSejarahS2:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil data",
      });
    }
  }
}

export default new SejarahS2Controller();
