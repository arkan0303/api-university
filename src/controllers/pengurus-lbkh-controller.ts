import pengurusLbkhService from "../services/pengurus-lbkh-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class PengurusLBKHController {
  async createPengurusLbkh(req: MulterRequest, res: Response) {
    try {
      const { nama, deskripsi, jabatan, kategori, email, noTelp } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const pengurusLbkh = await pengurusLbkhService.createPengurusLBKH({
        nama,
        deskripsi,
        jabatan,
        kategori: kategoriJSON,
        email,
        noTelp,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        message: "Pengurus LBKH berhasil dibuat",
        pengurusLbkh,
      });
    } catch (error) {
      console.error("Error in createPengurusLbkh:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllPengurusLbkh(req: Request, res: Response) {
    try {
      const pengurusLbkh = await pengurusLbkhService.getAllPengurusLBKH();
      return res.status(200).json({
        success: true,
        message: "Pengurus LBKH berhasil diambil",
        data: pengurusLbkh,
      });
    } catch (error) {
      console.error("Error in getAllPengurusLbkh:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updatePengurusLbkh(req: MulterRequest, res: Response) {
    try {
      const { nama, deskripsi, jabatan, kategori, email, noTelp } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        nama,
        deskripsi,
        jabatan,
        kategori: kategoriJSON,
        email,
        noTelp,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedPengurusLbkh = await pengurusLbkhService.updatePengurusLBKH(
        Number(id),
        updateData
      );
      return res.status(200).json({
        success: true,
        message: "Pengurus LBKH berhasil diupdate",
        data: updatedPengurusLbkh,
      });
    } catch (error) {
      console.error("Error in updatePengurusLbkh:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deletePengurusLbkh(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedPengurusLbkh = await pengurusLbkhService.deletePengurusLBKH(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Pengurus LBKH berhasil dihapus",
        data: deletedPengurusLbkh,
      });
    } catch (error) {
      console.error("Error in deletePengurusLbkh:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikPengurusLBKH(req: Request, res: Response) {
    try {
      const {
        total,
        kasusDitangani,
        advokatAktif,
        tahunPengalaman,
        slogan,
        deskripsi,
      } = req.body;
      const statistikPengurusLBKH =
        await pengurusLbkhService.createStatistikPengurusLBKH({
          total,
          kasusDitangani,
          advokatAktif,
          tahunPengalaman,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik Pengurus LBKH berhasil dibuat",
        statistikPengurusLBKH,
      });
    } catch (error) {
      console.error("Error in createStatistikPengurusLBKH:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikPengurusLBKH(req: Request, res: Response) {
    try {
      const statistikPengurusLBKH =
        await pengurusLbkhService.getAllStatistikPengurusLBKH();
      return res.status(200).json({
        success: true,
        message: "Statistik Pengurus LBKH berhasil diambil",
        data: statistikPengurusLBKH,
      });
    } catch (error) {
      console.error("Error in getAllStatistikPengurusLBKH:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikPengurusLBKH(req: Request, res: Response) {
    try {
      const {
        total,
        kasusDitangani,
        advokatAktif,
        tahunPengalaman,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        total,
        kasusDitangani,
        advokatAktif,
        tahunPengalaman,
        slogan,
        deskripsi,
      };
      const updatedStatistikPengurusLBKH =
        await pengurusLbkhService.updateStatistikPengurusLBKH(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Pengurus LBKH berhasil diupdate",
        data: updatedStatistikPengurusLBKH,
      });
    } catch (error) {
      console.error("Error in updateStatistikPengurusLBKH:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikPengurusLBKH(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedStatistikPengurusLBKH =
        await pengurusLbkhService.deleteStatistikPengurusLBKH(Number(id));
      return res.status(200).json({
        success: true,
        message: "Statistik Pengurus LBKH berhasil dihapus",
        data: deletedStatistikPengurusLBKH,
      });
    } catch (error) {
      console.error("Error in deleteStatistikPengurusLBKH:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new PengurusLBKHController();
