import sejarahS1Service from "../services/sejarahS1Service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SejarahS1Controller {
  async createSejarahS1(req: MulterRequest, res: Response) {
    try {
      const { judul, tahun, deskripsi } = req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const sejarahS1 = await sejarahS1Service.createSejarahS1({
        judul,
        tahun,
        deskripsi,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        message: "Sejarah S1 berhasil dibuat",
        sejarahS1,
      });
    } catch (error) {
      console.error("Error in createSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat sejarah S1",
      });
    }
  }

  async getAllSejarahS1(req: Request, res: Response) {
    try {
      const sejarahS1 = await sejarahS1Service.getAllSejarahS1();
      return res.status(200).json({
        success: true,
        message: "Sejarah S1 berhasil diambil",
        sejarahS1,
      });
    } catch (error) {
      console.error("Error in getAllSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil sejarah S1",
      });
    }
  }

  async updateSejarahS1(req: MulterRequest, res: Response) {
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

      const sejarahS1 = await sejarahS1Service.updateSejarahS1(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Sejarah S1 berhasil diupdate",
        data: sejarahS1,
      });
    } catch (error) {
      console.error("Error in updateSejarahS1:", error);
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
      const deletedData = await sejarahS1Service.deleteData(Number(id));
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

  async createSejarahS1Banner(req: MulterRequest, res: Response) {
    try {
      const { konten } = req.body;

      if (!req.files?.["banner"] || req.files["banner"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Banner harus diupload",
        });
      }
      const sejarahS1Banner = await sejarahS1Service.createSejarahS1Banner(
        req.files?.["banner"][0],
        konten
      );
      return res.status(201).json({
        success: true,
        message: "Sejarah S1 Banner berhasil dibuat",
        sejarahS1Banner,
      });
    } catch (error) {
      console.error("Error in createSejarahS1Banner:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat sejarah S1 Banner",
      });
    }
  }

  async updateSejarahS1Banner(req: MulterRequest, res: Response) {
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

      const updatedBanner = await sejarahS1Service.updateSejarahS1Banner(
        Number(id),
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Sejarah S1 Banner berhasil diupdate",
        data: updatedBanner,
      });
    } catch (error) {
      console.error("Error in updateSejarahS1Banner:", error);
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

  async deleteBanner(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await sejarahS1Service.deleteBanner(Number(id));
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteBanner:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async getDataBanner(req: Request, res: Response) {
    try {
      const dataBanner = await sejarahS1Service.getDataBanner();
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

  async createStatistikSejarahS1(req: Request, res: Response) {
    try {
      const {
        tahunPengalaman,
        alumni,
        akreditasi,
        tingkatKelulusan,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSejarahS1 =
        await sejarahS1Service.createStatistikSejarahS1({
          tahunPengalaman,
          alumni,
          akreditasi,
          tingkatKelulusan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Sejarah S1 berhasil dibuat",
        statistikSejarahS1,
      });
    } catch (error) {
      console.error("Error in createStatistikSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat statistik sejarah S1",
      });
    }
  }

  async updateStatistikSejarahS1(req: Request, res: Response) {
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
      const updatedStatistik = await sejarahS1Service.updateStatistikSejarahS1(
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
        message: "Statistik Sejarah S1 berhasil diupdate",
        data: updatedStatistik,
      });
    } catch (error) {
      console.error("Error in updateStatistikSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik sejarah S1",
      });
    }
  }

  async deleteStatistikSejarahS1(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await sejarahS1Service.deleteStatistikSejarahS1(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Data berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus data",
      });
    }
  }

  async getAllStatistikSejarahS1(req: Request, res: Response) {
    try {
      const statistikSejarahS1 =
        await sejarahS1Service.getAllStatistikSejarahS1();
      return res.status(200).json({
        success: true,
        message: "Data berhasil diambil",
        data: statistikSejarahS1,
      });
    } catch (error) {
      console.error("Error in getAllStatistikSejarahS1:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil data",
      });
    }
  }
}

export default new SejarahS1Controller();
