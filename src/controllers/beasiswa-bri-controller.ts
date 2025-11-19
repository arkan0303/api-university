import beasiswaBriService from "../services/beasiswa-bri-service";
import { Request, Response } from "express";

class BeasiswaBriController {
  async createBeasiswaBri(req: Request, res: Response) {
    try {
      const { tentangProgram, manfaat, judulPersyaratan, persyaratan } =
        req.body;

      const manfaatJson = JSON.parse(manfaat);
      const persyaratanJson = JSON.parse(persyaratan);
      const createBeasiswaBri = await beasiswaBriService.createBeasiswaBri({
        tentangProgram,
        manfaat: manfaatJson,
        judulPersyaratan,
        persyaratan: persyaratanJson,
      });
      return res.status(201).json({
        success: true,
        data: createBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat beasiswa BRI",
      });
    }
  }

  async getAllBeasiswaBri(req: Request, res: Response) {
    try {
      const getAllBeasiswaBri = await beasiswaBriService.getAllBeasiswaBri();
      return res.status(200).json({
        success: true,
        data: getAllBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan beasiswa BRI",
      });
    }
  }

  async updateBeasiswaBri(req: Request, res: Response) {
    try {
      const { tentangProgram, manfaat, judulPersyaratan, persyaratan } =
        req.body;

      const manfaatJson = JSON.parse(manfaat);
      const persyaratanJson = JSON.parse(persyaratan);
      const updateBeasiswaBri = await beasiswaBriService.updateBeasiswaBri(
        Number(req.params.id),
        {
          tentangProgram,
          manfaat: manfaatJson,
          judulPersyaratan,
          persyaratan: persyaratanJson,
        }
      );
      return res.status(200).json({
        success: true,
        message: "Beasiswa BRI berhasil diupdate",
        data: updateBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui beasiswa BRI",
      });
    }
  }

  async deleteBeasiswaBri(req: Request, res: Response) {
    try {
      const deleteBeasiswaBri = await beasiswaBriService.deleteBeasiswaBri(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Beasiswa BRI berhasil dihapus",
        data: deleteBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus beasiswa BRI",
      });
    }
  }

  async createTimelineBeasiswaBri(req: Request, res: Response) {
    try {
      const { title, waktu, deskripsi } = req.body;
      const createTimelineBeasiswaBri =
        await beasiswaBriService.createTimelineBeasiswaBri({
          title,
          waktu,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: createTimelineBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat timeline beasiswa BRI",
      });
    }
  }

  async getAllTimelineBeasiswaBri(req: Request, res: Response) {
    try {
      const getAllTimelineBeasiswaBri =
        await beasiswaBriService.getAllTimelineBeasiswaBri();
      return res.status(200).json({
        success: true,
        data: getAllTimelineBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan timeline beasiswa BRI",
      });
    }
  }

  async updateTimelineBeasiswaBri(req: Request, res: Response) {
    try {
      const { title, waktu, deskripsi } = req.body;
      const updateTimelineBeasiswaBri =
        await beasiswaBriService.updateTimelineBeasiswaBri(
          Number(req.params.id),
          {
            title,
            waktu,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Timeline beasiswa BRI berhasil diupdate",
        data: updateTimelineBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui timeline beasiswa BRI",
      });
    }
  }

  async deleteTimelineBeasiswaBri(req: Request, res: Response) {
    try {
      const deleteTimelineBeasiswaBri =
        await beasiswaBriService.deleteTimelineBeasiswaBri(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Timeline beasiswa BRI berhasil dihapus",
        data: deleteTimelineBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus timeline beasiswa BRI",
      });
    }
  }

  async createStatistikBeasiswaBri(req: Request, res: Response) {
    try {
      const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } =
        req.body;
      const createStatistikBeasiswaBri =
        await beasiswaBriService.createStatistikBeasiswaBri({
          nilaiBeasiswa,
          durasi,
          kuota,
          deadline,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: createStatistikBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik beasiswa BRI",
      });
    }
  }

  async getAllStatistikBeasiswaBri(req: Request, res: Response) {
    try {
      const getAllStatistikBeasiswaBri =
        await beasiswaBriService.getAllStatistikBeasiswaBri();
      return res.status(200).json({
        success: true,
        data: getAllStatistikBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik beasiswa BRI",
      });
    }
  }

  async updateStatistikBeasiswaBri(req: Request, res: Response) {
    try {
      const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } =
        req.body;
      const updateStatistikBeasiswaBri =
        await beasiswaBriService.updateStatistikBeasiswaBri(
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
        message: "Statistik beasiswa BRI berhasil diupdate",
        data: updateStatistikBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik beasiswa BRI",
      });
    }
  }

  async deleteStatistikBeasiswaBri(req: Request, res: Response) {
    try {
      const deleteStatistikBeasiswaBri =
        await beasiswaBriService.deleteStatistikBeasiswaBri(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik beasiswa BRI berhasil dihapus",
        data: deleteStatistikBeasiswaBri,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik beasiswa BRI",
      });
    }
  }
}

export default new BeasiswaBriController();
