import beasiswaKipService from "../services/beasiswa-kip-service";
import { Request, Response } from "express";

class BeasiswaKipController {
  async createBeasiswaKip(req: Request, res: Response) {
    try {
      const { manfaat, judulPersyaratan, persyaratan } = req.body;

      const manfaatJson = JSON.parse(manfaat);
      const persyaratanJson = JSON.parse(persyaratan);
      const createBeasiswaKip = await beasiswaKipService.createBeasiswaKIP({
        manfaat: manfaatJson,
        judulPersyaratan,
        persyaratan: persyaratanJson,
      });
      return res.status(201).json({
        success: true,
        data: createBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat beasiswa KIP",
      });
    }
  }

  async getAllBeasiswaKip(req: Request, res: Response) {
    try {
      const getAllBeasiswaKip = await beasiswaKipService.getAllBeasiswaKIP();
      return res.status(200).json({
        success: true,
        data: getAllBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan beasiswa KIP",
      });
    }
  }

  async updateBeasiswaKip(req: Request, res: Response) {
    try {
      const { manfaat, judulPersyaratan, persyaratan } = req.body;

      const manfaatJson = JSON.parse(manfaat);
      const persyaratanJson = JSON.parse(persyaratan);
      const updateBeasiswaKip = await beasiswaKipService.updateBeasiswaKIP(
        Number(req.params.id),
        {
          manfaat: manfaatJson,
          judulPersyaratan,
          persyaratan: persyaratanJson,
        }
      );
      return res.status(200).json({
        success: true,
        message: "Beasiswa KIP berhasil diupdate",
        data: updateBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui beasiswa KIP",
      });
    }
  }

  async deleteBeasiswaKip(req: Request, res: Response) {
    try {
      const deleteBeasiswaKip = await beasiswaKipService.deleteBeasiswaKIP(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Beasiswa KIP berhasil dihapus",
        data: deleteBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus beasiswa KIP",
      });
    }
  }

  async createTimelineBeasiswaKip(req: Request, res: Response) {
    try {
      const { title, waktu, deskripsi } = req.body;
      const createTimelineBeasiswaKip =
        await beasiswaKipService.createTimelineBeasiswaKIP({
          title,
          waktu,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: createTimelineBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat timeline beasiswa KIP",
      });
    }
  }

  async getAllTimelineBeasiswaKip(req: Request, res: Response) {
    try {
      const getAllTimelineBeasiswaKip =
        await beasiswaKipService.getAllTimelineBeasiswaKIP();
      return res.status(200).json({
        success: true,
        data: getAllTimelineBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan timeline beasiswa KIP",
      });
    }
  }

  async updateTimelineBeasiswaKip(req: Request, res: Response) {
    try {
      const { title, waktu, deskripsi } = req.body;
      const updateTimelineBeasiswaKip =
        await beasiswaKipService.updateTimelineBeasiswaKIP(
          Number(req.params.id),
          {
            title,
            waktu,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Timeline beasiswa KIP berhasil diupdate",
        data: updateTimelineBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui timeline beasiswa KIP",
      });
    }
  }

  async deleteTimelineBeasiswaKip(req: Request, res: Response) {
    try {
      const deleteTimelineBeasiswaKip =
        await beasiswaKipService.deleteTimelineBeasiswaKIP(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Timeline beasiswa KIP berhasil dihapus",
        data: deleteTimelineBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus timeline beasiswa KIP",
      });
    }
  }

  async createStatistikBeasiswaKip(req: Request, res: Response) {
    try {
      const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } =
        req.body;
      const createStatistikBeasiswaKip =
        await beasiswaKipService.createStatistikBeasiswaKIP({
          nilaiBeasiswa,
          durasi,
          kuota,
          deadline,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: createStatistikBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik beasiswa KIP",
      });
    }
  }

  async getAllStatistikBeasiswaKip(req: Request, res: Response) {
    try {
      const getAllStatistikBeasiswaKip =
        await beasiswaKipService.getAllStatistikBeasiswaKIP();
      return res.status(200).json({
        success: true,
        data: getAllStatistikBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik beasiswa KIP",
      });
    }
  }

  async updateStatistikBeasiswaKip(req: Request, res: Response) {
    try {
      const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } =
        req.body;
      const updateStatistikBeasiswaKip =
        await beasiswaKipService.updateStatistikBeasiswaKIP(
          Number(req.params.id),
          {
            nilaiBeasiswa,
            durasi,
            kuota,
            deadline,
            slogan,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Statistik beasiswa KIP berhasil diupdate",
        data: updateStatistikBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik beasiswa KIP",
      });
    }
  }

  async deleteStatistikBeasiswaKip(req: Request, res: Response) {
    try {
      const deleteStatistikBeasiswaKip =
        await beasiswaKipService.deleteStatistikBeasiswaKIP(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik beasiswa KIP berhasil dihapus",
        data: deleteStatistikBeasiswaKip,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik beasiswa KIP",
      });
    }
  }
}

export default new BeasiswaKipController();
