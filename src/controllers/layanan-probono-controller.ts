import layananProbonoService from "../services/layanan-probono-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class LayananProbonoController {
  async createLayananProbono(req: MulterRequest, res: Response) {
    try {
      const { title, deskripsi, kategori, waktu, type } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const layananProbono = await layananProbonoService.createLayananProbono({
        title,
        deskripsi,
        kategori: kategoriJSON,
        waktu,
        foto: req.files?.["foto"][0],
        type,
      });
      return res.status(201).json({
        success: true,
        data: layananProbono,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat layanan probono",
      });
    }
  }

  async getAllLayananProbono(req: Request, res: Response) {
    try {
      const layananProbono = await layananProbonoService.getAllLayananProbono();
      return res.status(200).json({
        success: true,
        data: layananProbono,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil layanan probono",
      });
    }
  }

  async updateLayananProbono(req: MulterRequest, res: Response) {
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
      const updatedLayananProbono =
        await layananProbonoService.updateLayananProbono(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        data: updatedLayananProbono,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteLayananProbono(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedLayananProbono =
        await layananProbonoService.deleteLayananProbono(Number(id));
      return res.status(200).json({
        success: true,
        data: deletedLayananProbono,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikLayananProbono(req: Request, res: Response) {
    try {
      const {
        kasusProbono,
        tingkatKesepakatan,
        mediatorBersetifikat,
        totalMediasi,
        slogan,
        deskripsi,
      } = req.body;
      const statistikLayananProbono =
        await layananProbonoService.createStatistikLayananProbono({
          kasusProbono,
          tingkatKesepakatan,
          mediatorBersetifikat,
          totalMediasi,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: statistikLayananProbono,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik layanan probono",
      });
    }
  }

  async getAllStatistikLayananProbono(req: Request, res: Response) {
    try {
      const statistikLayananProbono =
        await layananProbonoService.getAllStatistikLayananProbono();
      return res.status(200).json({
        success: true,
        data: statistikLayananProbono,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik layanan probono",
      });
    }
  }

  async updateStatistikLayananProbono(req: Request, res: Response) {
    try {
      const {
        kasusProbono,
        tingkatKesepakatan,
        mediatorBersetifikat,
        totalMediasi,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        kasusProbono,
        tingkatKesepakatan,
        mediatorBersetifikat,
        totalMediasi,
        slogan,
        deskripsi,
      };
      const updatedStatistikLayananProbono =
        await layananProbonoService.updateStatistikLayananProbono(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        data: updatedStatistikLayananProbono,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik layanan probono",
      });
    }
  }

  async deleteStatistikLayananProbono(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedStatistikLayananProbono =
        await layananProbonoService.deleteStatistikLayananProbono(Number(id));
      return res.status(200).json({
        success: true,
        data: deletedStatistikLayananProbono,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik layanan probono",
      });
    }
  }

  async createKriteriaPenerima(req: MulterRequest, res: Response) {
    try {
      const { title, kategori } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const kategoriJSON = JSON.parse(kategori);
      const kriteriaPenerima =
        await layananProbonoService.createKriteriaPenerima({
          title,
          kategori: kategoriJSON,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        data: kriteriaPenerima,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat kriteria penerima",
      });
    }
  }

  async getAllKriteriaPenerima(req: Request, res: Response) {
    try {
      const kriteriaPenerima =
        await layananProbonoService.getAllKriteriaPenerima();
      return res.status(200).json({
        success: true,
        data: kriteriaPenerima,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil kriteria penerima",
      });
    }
  }

  async updateKriteriaPenerima(req: MulterRequest, res: Response) {
    try {
      const { title, kategori } = req.body;
      const id = req.params.id;
      const kategoriJSON = JSON.parse(kategori);
      const updateData: any = {
        title,
        kategori: kategoriJSON,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedKriteriaPenerima =
        await layananProbonoService.updateKriteriaPenerima(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        data: updatedKriteriaPenerima,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate kriteria penerima",
      });
    }
  }

  async deleteKriteriaPenerima(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedKriteriaPenerima =
        await layananProbonoService.deleteKriteriaPenerima(Number(id));
      return res.status(200).json({
        success: true,
        data: deletedKriteriaPenerima,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus kriteria penerima",
      });
    }
  }
}

export default new LayananProbonoController();
