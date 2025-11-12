import sidangSkripsiService from "../services/sidang-skripsi-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SidangSkripsiController {
  async createSidangSkripsi(req: MulterRequest, res: Response) {
    try {
      const { title, kategori } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const kategoriJson = JSON.parse(kategori);
      const sidangSkripsi = await sidangSkripsiService.createSidangSkripsi({
        title,
        kategori: kategoriJson,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        message: "Sidang skripsi berhasil dibuat",
        data: sidangSkripsi,
      });
    } catch (error) {
      console.error("Error in createSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat sidang skripsi",
      });
    }
  }

  async getAllSidangSkripsi(req: Request, res: Response) {
    try {
      const sidangSkripsi = await sidangSkripsiService.getAllSidangSkripsi();
      return res.status(200).json({
        success: true,
        message: "Sidang skripsi berhasil diambil",
        data: sidangSkripsi,
      });
    } catch (error) {
      console.error("Error in getAllSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil sidang skripsi",
      });
    }
  }

  async updateSidangSkripsi(req: MulterRequest, res: Response) {
    try {
      const { title, kategori } = req.body;
      const id = req.params.id;
      const kategoriJson = JSON.parse(kategori);
      const updateData: any = {
        title,
        kategori: kategoriJson,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedSidangSkripsi =
        await sidangSkripsiService.updateSidangSkripsi(Number(id), updateData);
      return res.status(200).json({
        success: true,
        message: "Sidang skripsi berhasil diupdate",
        data: updatedSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in updateSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate sidang skripsi",
      });
    }
  }

  async deleteSidangSkripsi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await sidangSkripsiService.deleteSidangSkripsi(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Sidang skripsi berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus sidang skripsi",
      });
    }
  }

  async createProsedurSidangSkripsi(req: MulterRequest, res: Response) {
    try {
      const { title, tahapan, waktu, deskripsi } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const prosedurSidangSkripsi =
        await sidangSkripsiService.createProsedurSidangSkripsi({
          title,
          tahapan,
          waktu,
          deskripsi,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Prosedur sidang skripsi berhasil dibuat",
        data: prosedurSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in createProsedurSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat prosedur pelaksanaan",
      });
    }
  }

  async getAllProsedurSidangSkripsi(req: Request, res: Response) {
    try {
      const prosedurSidangSkripsi =
        await sidangSkripsiService.getAllProsedurSidangSkripsi();
      return res.status(200).json({
        success: true,
        message: "Prosedur sidang skripsi berhasil diambil",
        data: prosedurSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in getAllProsedurSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil prosedur pelaksanaan",
      });
    }
  }

  async updateProsedurSidangSkripsi(req: MulterRequest, res: Response) {
    try {
      const { title, tahapan, waktu, deskripsi } = req.body;
      const id = req.params.id;
      const updateData: any = {
        title,
        tahapan,
        waktu,
        deskripsi,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedProsedurSidangSkripsi =
        await sidangSkripsiService.updateProsedurSidangSkripsi(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Prosedur sidang skripsi berhasil diupdate",
        data: updatedProsedurSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in updateProsedurSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate prosedur pelaksanaan",
      });
    }
  }

  async deleteProsedurSidangSkripsi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData =
        await sidangSkripsiService.deleteProsedurSidangSkripsi(Number(id));
      return res.status(200).json({
        success: true,
        message: "Prosedur sidang skripsi berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteProsedurSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus prosedur sidang skripsi",
      });
    }
  }

  async createStatistikSidangSkripsi(req: Request, res: Response) {
    try {
      const {
        sidangPerTahun,
        tingkatKelulusan,
        durasiSidang,
        timPenguji,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSidangSkripsi =
        await sidangSkripsiService.createStatistikSidangSkripsi({
          sidangPerTahun,
          tingkatKelulusan,
          durasiSidang,
          timPenguji,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik sidang skripsi berhasil dibuat",
        data: statistikSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in createStatistikSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik sidang skripsi",
      });
    }
  }

  async getAllStatistikSidangSkripsi(req: Request, res: Response) {
    try {
      const statistikSidangSkripsi =
        await sidangSkripsiService.getAllStatistikSidangSkripsi();
      return res.status(200).json({
        success: true,
        message: "Statistik sidang skripsi berhasil diambil",
        data: statistikSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in getAllStatistikSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik seminar proposal",
      });
    }
  }

  async updateStatistikSidangSkripsi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        sidangPerTahun,
        tingkatKelulusan,
        durasiSidang,
        timPenguji,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSidangSkripsi =
        await sidangSkripsiService.updateStatistikSidangSkripsi(Number(id), {
          sidangPerTahun,
          tingkatKelulusan,
          durasiSidang,
          timPenguji,
          slogan,
          deskripsi,
        });
      return res.status(200).json({
        success: true,
        message: "Statistik sidang skripsi berhasil diupdate",
        data: statistikSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in updateStatistikSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik seminar proposal",
      });
    }
  }

  async deleteStatistikSidangSkripsi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await sidangSkripsiService.deleteStatistikSidangSkripsi(Number(id));
      return res.status(200).json({
        success: true,
        message: "Statistik sidang skripsi berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik seminar proposal",
      });
    }
  }

  async createKriteriaSidangSkripsi(req: Request, res: Response) {
    try {
      const { title, kriteria, skor } = req.body;
      const kriteriaJson = JSON.parse(kriteria);
      const kriteriaSidangSkripsi =
        await sidangSkripsiService.createKriteriaSidangSkripsi({
          title,
          kriteria: kriteriaJson,
          skor,
        });
      return res.status(201).json({
        success: true,
        message: "Kriteria sidang skripsi berhasil dibuat",
        data: kriteriaSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in createKriteriaSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat kriteria sidang skripsi",
      });
    }
  }

  async getAllKriteriaSidangSkripsi(req: Request, res: Response) {
    try {
      const kriteriaSidangSkripsi =
        await sidangSkripsiService.getAllKriteriaSidangSkripsi();
      return res.status(200).json({
        success: true,
        message: "Kriteria sidang skripsi berhasil diambil",
        data: kriteriaSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in getAllKriteriaSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil kriteria sidang skripsi",
      });
    }
  }

  async updateKriteriaSidangSkripsi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { title, kriteria, skor } = req.body;
      const kriteriaJson = JSON.parse(kriteria);
      const kriteriaSidangSkripsi =
        await sidangSkripsiService.updateKriteriaSidangSkripsi(Number(id), {
          title,
          kriteria: kriteriaJson,
          skor,
        });
      return res.status(200).json({
        success: true,
        message: "Kriteria sidang skripsi berhasil diupdate",
        data: kriteriaSidangSkripsi,
      });
    } catch (error) {
      console.error("Error in updateKriteriaSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate kriteria sidang skripsi",
      });
    }
  }

  async deleteKriteriaSidangSkripsi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await sidangSkripsiService.deleteKriteriaSidangSkripsi(Number(id));
      return res.status(200).json({
        success: true,
        message: "Kriteria sidang skripsi berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteKriteriaSidangSkripsi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus kriteria sidang skripsi",
      });
    }
  }
}

export default new SidangSkripsiController();
