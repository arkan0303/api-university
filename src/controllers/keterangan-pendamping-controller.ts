import keteranganPendampingIjazahService from "../services/keterangan-pendamping-ijazah-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class KeteranganPendampingController {
  async createKeteranganPendampingIjazah(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, type, waktu, kategori } = req.body;
      const foto = req.files?.["foto"]?.[0];
      const kategoriJSON = JSON.parse(kategori);
      const keteranganPendampingIjazah =
        await keteranganPendampingIjazahService.createKeteranganPendampingIjazah(
          {
            title,
            deskripsi,
            type,
            waktu,
            foto,
            kategori: kategoriJSON,
          },
        );
      return res.status(201).json({
        success: true,
        message: "Keterangan Pendamping Ijazah berhasil dibuat",
        keteranganPendampingIjazah,
      });
    } catch (error) {
      console.error("Error in createKeteranganPendampingIjazah:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllKeteranganPendampingIjazah(req: Request, res: Response) {
    try {
      const result =
        await keteranganPendampingIjazahService.getAllKeteranganPendampingIjazah();
      return res.status(200).json({
        success: true,
        message: "Keterangan Pendamping Ijazah berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllKeteranganPendampingIjazah:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateKeteranganPendampingIjazah(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, type, waktu } = req.body;
      const id = req.params.id;

      const updateData: any = {
        title,
        deskripsi,
        type,
        waktu,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedKeteranganPendampingIjazah =
        await keteranganPendampingIjazahService.updateKeteranganPendampingIjazah(
          Number(id), // Konversi id ke number
          updateData,
        );

      return res.status(200).json({
        success: true,
        message: "Keterangan Pendamping Ijazah berhasil diupdate",
        data: updatedKeteranganPendampingIjazah,
      });
    } catch (error) {
      console.error("Error in updateKeteranganPendampingIjazah:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteKeteranganPendampingIjazah(req: Request, res: Response) {
    try {
      const result =
        await keteranganPendampingIjazahService.deleteKeteranganPendampingIjazah(
          Number(req.params.id),
        );
      return res.status(200).json({
        success: true,
        message: "Keterangan Pendamping Ijazah berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteKeteranganPendampingIjazah:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikKeteranganPendampingIjazah(req: Request, res: Response) {
    try {
      const {
        totalData,
        totalKomponen,
        totalProsedur,
        mingguAktif,
        slogan,
        deskripsi,
      } = req.body;
      const statistikKeteranganPendampingIjazah =
        await keteranganPendampingIjazahService.createStatistikKeteranganPendampingIjazah(
          {
            totalData,
            totalKomponen,
            totalProsedur,
            mingguAktif,
            slogan,
            deskripsi,
          },
        );
      return res.status(201).json({
        success: true,
        message: "Statistik Keterangan Pendamping Ijazah berhasil dibuat",
        statistikKeteranganPendampingIjazah,
      });
    } catch (error) {
      console.error(
        "Error in createStatistikKeteranganPendampingIjazah:",
        error,
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikKeteranganPendampingIjazah(req: Request, res: Response) {
    try {
      const result =
        await keteranganPendampingIjazahService.getStatistikKeteranganPendampingIjazah();
      return res.status(200).json({
        success: true,
        message: "Statistik Keterangan Pendamping Ijazah berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getStatistikKeteranganPendampingIjazah:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikKeteranganPendampingIjazah(req: Request, res: Response) {
    try {
      const {
        totalData,
        totalKomponen,
        totalProsedur,
        mingguAktif,
        slogan,
        deskripsi,
      } = req.body;
      const statistikKeteranganPendampingIjazah =
        await keteranganPendampingIjazahService.updateStatistikKeteranganPendampingIjazah(
          {
            totalData,
            totalKomponen,
            totalProsedur,
            mingguAktif,
            slogan,
            deskripsi,
          },
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Keterangan Pendamping Ijazah berhasil diupdate",
        statistikKeteranganPendampingIjazah,
      });
    } catch (error) {
      console.error(
        "Error in updateStatistikKeteranganPendampingIjazah:",
        error,
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikKeteranganPendampingIjazah(req: Request, res: Response) {
    try {
      const result =
        await keteranganPendampingIjazahService.deleteStatistikKeteranganPendampingIjazah();
      return res.status(200).json({
        success: true,
        message: "Statistik Keterangan Pendamping Ijazah berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error(
        "Error in deleteStatistikKeteranganPendampingIjazah:",
        error,
      );
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new KeteranganPendampingController();
