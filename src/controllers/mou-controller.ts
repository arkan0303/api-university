import { Request, Response } from "express";
import MoUService from "../services/moU-service";

class MOUController {
  async createMOU(req: Request, res: Response) {
    try {
      const {
        title,
        partnerInstitution,
        partnerType,
        signingDate,
        expiryDate,
        mouNumber,
        scope,
        status,
        duration,
        objectives,
        contactPerson,
        description,
        implementation,
        benefits,
      } = req.body;
      const newMOU = await MoUService.createMoU({
        title,
        partnerInstitution,
        partnerType,
        signingDate,
        expiryDate,
        mouNumber,
        scope,
        status,
        duration,
        objectives,
        contactPerson,
        description,
        implementation,
        benefits,
      });
      res.status(201).json({
        success: true,
        message: "MOU berhasil dibuat",
        data: newMOU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getMOU(req: Request, res: Response) {
    try {
      const moU = await MoUService.getMoU();
      res.status(200).json({
        success: true,
        message: "MOU berhasil diambil",
        data: moU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateMOU(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        title,
        partnerInstitution,
        partnerType,
        signingDate,
        expiryDate,
        mouNumber,
        scope,
        status,
        duration,
        objectives,
        contactPerson,
        description,
        implementation,
        benefits,
      } = req.body;
      const updatedMOU = await MoUService.updateMoU(Number(id), {
        title,
        partnerInstitution,
        partnerType,
        signingDate,
        expiryDate,
        mouNumber,
        scope,
        status,
        duration,
        objectives,
        contactPerson,
        description,
        implementation,
        benefits,
      });
      res.status(200).json({
        success: true,
        message: "MOU berhasil diupdate",
        data: updatedMOU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteMOU(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedMOU = await MoUService.deleteMoU(Number(id));
      res.status(200).json({
        success: true,
        message: "MOU berhasil dihapus",
        data: deletedMOU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikMoU(req: Request, res: Response) {
    try {
      const { totalMoU, aktif, dalamProses, tidakAktif } = req.body;
      const newStatistikMoU = await MoUService.createStatistikMoU({
        totalMoU,
        aktif,
        dalamProses,
        tidakAktif,
      });
      res.status(201).json({
        success: true,
        message: "Statistik MOU berhasil dibuat",
        data: newStatistikMoU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikMoU(req: Request, res: Response) {
    try {
      const statistikMoU = await MoUService.getStatistikMoU();
      res.status(200).json({
        success: true,
        message: "Statistik MOU berhasil diambil",
        data: statistikMoU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikMoU(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { totalMoU, aktif, dalamProses, tidakAktif } = req.body;
      const updatedStatistikMoU = await MoUService.updateStatistikMoU(
        Number(id),
        {
          totalMoU,
          aktif,
          dalamProses,
          tidakAktif,
        }
      );
      res.status(200).json({
        success: true,
        message: "Statistik MOU berhasil diupdate",
        data: updatedStatistikMoU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikMoU(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedStatistikMoU = await MoUService.deleteStatistikMoU(
        Number(id)
      );
      res.status(200).json({
        success: true,
        message: "Statistik MOU berhasil dihapus",
        data: deletedStatistikMoU,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new MOUController();
