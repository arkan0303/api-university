import rekapitulasiPengisianService from "../services/rekapitulasi-pengisian-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}
class RekapitulasiPengisianController {
  async createRekapitulasiPengisian(req: Request, res: Response) {
    try {
      const {
        programNama,
        angkatan,
        totalMahasiswa,
        jumlahResponden,
        kategori,
        persentasi,
      } = req.body;
      console.log(req.body);

      const katagoriJSON = JSON.parse(kategori);
      console.log(katagoriJSON);
      const strategis =
        await rekapitulasiPengisianService.createRekapitulasiPengisian({
          programNama,
          angkatan,
          totalMahasiswa,
          jumlahResponden,
          kategori: katagoriJSON,
          persentasi,
        });
      res.status(201).json({
        success: true,
        message: "Rekapitulasi pengisian berhasil ditambahkan",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in createProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllRekapitulasiPengisian(req: Request, res: Response) {
    try {
      const rekapitulasiPengisian =
        await rekapitulasiPengisianService.getAllRekapitulasiPengisian();
      res.status(200).json({
        success: true,
        message: "Rekapitulasi pengisian berhasil diambil",
        data: rekapitulasiPengisian,
      });
    } catch (error) {
      console.error("Error in getAllRekapitulasiPengisian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateRekapitulasiPengisian(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        programNama,
        angkatan,
        totalMahasiswa,
        jumlahResponden,
        kategori,
        persentasi,
      } = req.body;
      const katagoriJSON = JSON.parse(kategori);
      const updateData: any = {
        programNama,
        angkatan,
        totalMahasiswa,
        jumlahResponden,
        kategori: katagoriJSON,
        persentasi,
      };
      const updatedRekapitulasiPengisian =
        await rekapitulasiPengisianService.updateRekapitulasiPengisian(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Rekapitulasi pengisian berhasil diupdate",
        data: updatedRekapitulasiPengisian,
      });
    } catch (error) {
      console.error("Error in updateRekapitulasiPengisian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteRekapitulasiPengisian(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await rekapitulasiPengisianService.deleteRekapitulasiPengisian(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Rekapitulasi pengisian berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteRekapitulasiPengisian:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const { programNama, totalMahasiswa, jumlahResponden, persentasi } =
        req.body;
      console.log(req.body);
      const strategis =
        await rekapitulasiPengisianService.createRekapitulasiPerKategori({
          programNama,
          totalMahasiswa,
          jumlahResponden,
          persentasi,
        });
      res.status(201).json({
        success: true,
        message: "Rekapitulasi per kategori berhasil ditambahkan",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in createProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const rekapitulasiPerKategori =
        await rekapitulasiPengisianService.getAllRekapitulasiPerKategori();
      res.status(200).json({
        success: true,
        message: "Rekapitulasi per kategori berhasil diambil",
        data: rekapitulasiPerKategori,
      });
    } catch (error) {
      console.error("Error in getAllRekapitulasiPerKategori:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { programNama, totalMahasiswa, jumlahResponden, persentasi } =
        req.body;
      const updateData: any = {
        programNama,
        totalMahasiswa,
        jumlahResponden,
        persentasi,
      };
      const updatedRekapitulasiPerKategori =
        await rekapitulasiPengisianService.updateRekapitulasiPerKategori(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Rekapitulasi per kategori berhasil diupdate",
        data: updatedRekapitulasiPerKategori,
      });
    } catch (error) {
      console.error("Error in updateRekapitulasiPerKategori:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await rekapitulasiPengisianService.deleteRekapitulasiPerKategori(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Rekapitulasi per kategori berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteRekapitulasiPerKategori:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const {
        totalResponden,
        tingkatPartisipasi,
        formulirLengkap,
        dalamProses,
        slogan,
        deskripsi,
      } = req.body;
      console.log(req.body);
      const strategis =
        await rekapitulasiPengisianService.createStatistikRekapitulasiPerKategori(
          {
            totalResponden,
            tingkatPartisipasi,
            formulirLengkap,
            dalamProses,
            slogan,
            deskripsi,
          }
        );
      res.status(201).json({
        success: true,
        message: "Statistik rekapitulasi per kategori berhasil ditambahkan",
        data: strategis,
      });
    } catch (error) {
      console.error("Error in createProgramSarjanaHukum:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const statistikRekapitulasiPerKategori =
        await rekapitulasiPengisianService.getAllStatistikRekapitulasiPerKategori();
      res.status(200).json({
        success: true,
        message: "Statistik rekapitulasi per kategori berhasil diambil",
        data: statistikRekapitulasiPerKategori,
      });
    } catch (error) {
      console.error("Error in getAllStatistikRekapitulasiPerKategori:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        totalResponden,
        tingkatPartisipasi,
        formulirLengkap,
        dalamProses,
        slogan,
        deskripsi,
      } = req.body;
      const updateData: any = {
        totalResponden,
        tingkatPartisipasi,
        formulirLengkap,
        dalamProses,
        slogan,
        deskripsi,
      };
      const updatedStatistikRekapitulasiPerKategori =
        await rekapitulasiPengisianService.updateStatistikRekapitulasiPerKategori(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Statistik rekapitulasi per kategori berhasil diupdate",
        data: updatedStatistikRekapitulasiPerKategori,
      });
    } catch (error) {
      console.error("Error in updateStatistikRekapitulasiPerKategori:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikRekapitulasiPerKategori(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await rekapitulasiPengisianService.deleteStatistikRekapitulasiPerKategori(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik rekapitulasi per kategori berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikRekapitulasiPerKategori:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new RekapitulasiPengisianController();
