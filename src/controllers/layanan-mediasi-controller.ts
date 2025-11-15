import layananMediasiService from "../services/layanan-mediasi-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class LayananMediasiController {
  async createLayananMediasi(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, kategori, waktu, type } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const layananMediasi = await layananMediasiService.createLayananMediasi({
        title,
        deskripsi,
        kategori: kategoriJSON,
        waktu,
        foto: req.files?.["foto"][0],
        type,
      });
      return res.status(201).json({
        success: true,
        data: layananMediasi,
      });
    } catch (error) {
      console.error("Error in createLayananMediasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat layanan mediasi",
      });
    }
  }

  async getAllLayananMediasi(req: Request, res: Response) {
    try {
      const layananMediasi = await layananMediasiService.getAllLayananMediasi();
      return res.status(200).json({
        success: true,
        data: layananMediasi,
      });
    } catch (error) {
      console.error("Error in getAllLayananMediasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil layanan mediasi",
      });
    }
  }
  async updateLayananMediasi(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, kategori, waktu, type } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        title,
        deskripsi,
        kategori: kategoriJSON,
        waktu,
        type,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedLayananMediasi =
        await layananMediasiService.updateLayananMediasi(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        data: updatedLayananMediasi,
      });
    } catch (error) {
      console.error("Error in updateLayananMediasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteLayananMediasi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedLayananMediasi =
        await layananMediasiService.deleteLayananMediasi(Number(id));
      return res.status(200).json({
        success: true,
        data: deletedLayananMediasi,
      });
    } catch (error) {
      console.error("Error in deleteLayananMediasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikLayananMediasi(req: Request, res: Response) {
    try {
      const {
        mediasiBerhasil,
        tingkatKesepakatan,
        mediatorBersetifikat,
        totalMediasi,
        slogan,
        deskripsi,
      } = req.body;
      const create = await layananMediasiService.createStatistikLayananMediasi({
        mediasiBerhasil,
        tingkatKesepakatan,
        mediatorBersetifikat,
        totalMediasi,
        slogan,
        deskripsi,
      });
      return res.status(201).json({
        success: true,
        data: create,
      });
    } catch (error) {
      console.error("Error in createStatistikLayananMediasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik layanan mediasi",
      });
    }
  }

  async getAllStatistikLayananMediasi(req: Request, res: Response) {
    try {
      const statistikLayananMediasi =
        await layananMediasiService.getAllStatistikLayananMediasi();
      return res.status(200).json({
        success: true,
        data: statistikLayananMediasi,
      });
    } catch (error) {
      console.error("Error in getAllStatistikLayananMediasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik layanan mediasi",
      });
    }
  }

  async updateStatistikLayananMediasi(req: Request, res: Response) {
    try {
      const {
        mediasiBerhasil,
        tingkatKesepakatan,
        mediatorBersetifikat,
        totalMediasi,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        mediasiBerhasil,
        tingkatKesepakatan,
        mediatorBersetifikat,
        totalMediasi,
        slogan,
        deskripsi,
      };
      const updatedStatistikLayananMediasi =
        await layananMediasiService.updateStatistikLayananMediasi(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        data: updatedStatistikLayananMediasi,
      });
    } catch (error) {
      console.error("Error in updateStatistikLayananMediasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikLayananMediasi(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedStatistikLayananMediasi =
        await layananMediasiService.deleteStatistikLayananMediasi(Number(id));
      return res.status(200).json({
        success: true,
        data: deletedStatistikLayananMediasi,
      });
    } catch (error) {
      console.error("Error in deleteStatistikLayananMediasi:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
  async createTimMediator(req: MulterRequest, res: Response) {
    try {
      const { nama, deskripsi, kategori, kasusDitangani, email, noTelp } =
        req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const timMediator = await layananMediasiService.createTimMediator({
        nama,
        deskripsi,
        kategori: kategoriJSON,
        kasusDitangani,
        email,
        noTelp,
        foto: req.files?.["foto"][0],
      });
      return res.status(201).json({
        success: true,
        data: timMediator,
      });
    } catch (error) {
      console.error("Error in createTimMediator:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat tim mediator",
      });
    }
  }

  async getAllTimMediator(req: Request, res: Response) {
    try {
      const timMediator = await layananMediasiService.getAllTimMediator();
      return res.status(200).json({
        success: true,
        data: timMediator,
      });
    } catch (error) {
      console.error("Error in getAllTimMediator:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil tim mediator",
      });
    }
  }

  async updateTimMediator(req: MulterRequest, res: Response) {
    try {
      const { nama, deskripsi, kategori, kasusDitangani, email, noTelp } =
        req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        nama,
        deskripsi,
        kategori: kategoriJSON,
        kasusDitangani,
        email,
        noTelp,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedTimMediator = await layananMediasiService.updateTimMediator(
        Number(id),
        updateData
      );
      return res.status(200).json({
        success: true,
        data: updatedTimMediator,
      });
    } catch (error) {
      console.error("Error in updateTimMediator:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteTimMediator(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedTimMediator = await layananMediasiService.deleteTimMediator(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        data: deletedTimMediator,
      });
    } catch (error) {
      console.error("Error in deleteTimMediator:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new LayananMediasiController();
