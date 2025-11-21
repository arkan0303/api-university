import { Request, Response } from "express";
import MoAService from "../services/moa-service";

class MOAController {
  async createMOA(req: Request, res: Response) {
    try {
      const {
        title,
        agreementNumber,
        parties,
        signingDate,
        effectiveDate,
        agreementType,
        scope,
        status,
        duration,
        objectives,
        responsibilities,
        financialTerms,
        terminationClause,
        description,
        implementation,
        benefits,
      } = req.body;
      const newMOA = await MoAService.createMoA({
        title,
        agreementNumber,
        parties,
        signingDate,
        effectiveDate,
        agreementType,
        scope,
        status,
        duration,
        objectives,
        responsibilities,
        financialTerms,
        terminationClause,
        description,
        implementation,
        benefits,
      });
      res.status(201).json({
        success: true,
        message: "MOA berhasil dibuat",
        data: newMOA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getMOA(req: Request, res: Response) {
    try {
      const moA = await MoAService.getMoA();
      res.status(200).json({
        success: true,
        message: "MOA berhasil diambil",
        data: moA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateMOA(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        title,
        agreementNumber,
        parties,
        signingDate,
        effectiveDate,
        agreementType,
        scope,
        status,
        duration,
        objectives,
        responsibilities,
        financialTerms,
        terminationClause,
        description,
        implementation,
        benefits,
      } = req.body;
      const updatedMOA = await MoAService.updateMoA(Number(id), {
        title,
        agreementNumber,
        parties,
        signingDate,
        effectiveDate,
        agreementType,
        scope,
        status,
        duration,
        objectives,
        responsibilities,
        financialTerms,
        terminationClause,
        description,
        implementation,
        benefits,
      });
      res.status(200).json({
        success: true,
        message: "MOA berhasil diupdate",
        data: updatedMOA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteMOA(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedMOA = await MoAService.deleteMoA(Number(id));
      res.status(200).json({
        success: true,
        message: "MOA berhasil dihapus",
        data: deletedMOA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikMoA(req: Request, res: Response) {
    try {
      const { totalMoA, aktif, dalamProses, tidakAktif } = req.body;
      const newStatistikMoA = await MoAService.createStatistikMoA({
        totalMoA,
        aktif,
        dalamProses,
        tidakAktif,
      });
      res.status(201).json({
        success: true,
        message: "Statistik MOA berhasil dibuat",
        data: newStatistikMoA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikMoA(req: Request, res: Response) {
    try {
      const statistikMoA = await MoAService.getStatistikMoA();
      res.status(200).json({
        success: true,
        message: "Statistik MOA berhasil diambil",
        data: statistikMoA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikMoA(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { totalMoA, aktif, dalamProses, tidakAktif } = req.body;
      const updatedStatistikMoA = await MoAService.updateStatistikMoA(
        Number(id),
        {
          totalMoA,
          aktif,
          dalamProses,
          tidakAktif,
        }
      );
      res.status(200).json({
        success: true,
        message: "Statistik MOA berhasil diupdate",
        data: updatedStatistikMoA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikMoA(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedStatistikMoA = await MoAService.deleteStatistikMoA(
        Number(id)
      );
      res.status(200).json({
        success: true,
        message: "Statistik MOA berhasil dihapus",
        data: deletedStatistikMoA,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new MOAController();
