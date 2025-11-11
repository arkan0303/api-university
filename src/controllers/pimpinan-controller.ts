import pimpinanService from "../services/pimpinan-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class PimpinanController {
  async createPimpinan(req: MulterRequest, res: Response) {
    try {
      const { nama, jabatan, pendidikan, keahlian, periode, email, kontak } =
        req.body;

      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const pendidikanJSON = JSON.parse(pendidikan);
      const keahlianJSON = JSON.parse(keahlian);
      const pimpinan = await pimpinanService.createPimpinan({
        nama,
        jabatan,
        pendidikan: pendidikanJSON,
        keahlian: keahlianJSON,
        periode,
        email,
        kontak,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        message: "Pimpinan berhasil dibuat",
        pimpinan,
      });
    } catch (error) {
      console.error("Error in createPimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllPimpinan(req: Request, res: Response) {
    try {
      const result = await pimpinanService.getAllPimpinan();
      res.status(200).json({
        success: true,
        message: "Pimpinan berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllPimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updatePimpinan(req: MulterRequest, res: Response) {
    try {
      const { nama, jabatan, pendidikan, keahlian, periode, email, kontak } =
        req.body;
      const id = req.params.id;
      const pendidikanJSON = JSON.parse(pendidikan);
      const keahlianJSON = JSON.parse(keahlian);

      const updateData: any = {
        nama,
        jabatan,
        pendidikan: pendidikanJSON,
        keahlian: keahlianJSON,
        periode,
        email,
        kontak,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedPimpinan = await pimpinanService.updatePimpinan(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Pimpinan berhasil diupdate",
        data: updatedPimpinan,
      });
    } catch (error) {
      console.error("Error in updatePimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deletePimpinan(req: Request, res: Response) {
    try {
      const result = await pimpinanService.deletePimpinan(
        Number(req.params.id)
      );
      res.status(200).json({
        success: true,
        message: "Pimpinan berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deletePimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikPimpinan(req: Request, res: Response) {
    try {
      const { pimpinan, tahunPengalaman, publikasiIlmiah, slogan, deskripsi } =
        req.body;
      const statistikPimpinan = await pimpinanService.createStatistikPimpinan({
        pimpinan,
        tahunPengalaman,
        publikasiIlmiah,
        slogan,
        deskripsi,
      });
      return res.status(201).json({
        success: true,
        message: "Statistik Pimpinan berhasil dibuat",
        statistikPimpinan,
      });
    } catch (error) {
      console.error("Error in createStatistikPimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllStatistikPimpinan(req: Request, res: Response) {
    try {
      const result = await pimpinanService.getAllStatistikPimpinan();
      res.status(200).json({
        success: true,
        message: "Statistik Pimpinan berhasil diambil",
        data: result,
      });
    } catch (error) {
      console.error("Error in getAllStatistikPimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikPimpinan(req: Request, res: Response) {
    try {
      const { pimpinan, tahunPengalaman, publikasiIlmiah, slogan, deskripsi } =
        req.body;
      const id = req.params.id;
      const statistikPimpinan = await pimpinanService.updateStatistikPimpinan(
        Number(id),
        {
          pimpinan,
          tahunPengalaman,
          publikasiIlmiah,
          slogan,
          deskripsi,
        }
      );
      return res.status(200).json({
        success: true,
        message: "Statistik Pimpinan berhasil diupdate",
        statistikPimpinan,
      });
    } catch (error) {
      console.error("Error in updateStatistikPimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikPimpinan(req: Request, res: Response) {
    try {
      const result = await pimpinanService.deleteStatistikPimpinan(
        Number(req.params.id)
      );
      res.status(200).json({
        success: true,
        message: "Statistik Pimpinan berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikPimpinan:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new PimpinanController();
