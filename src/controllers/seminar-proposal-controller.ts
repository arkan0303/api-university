import seminarProposalService from "../services/seminar-proposal-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class SeminarProposalController {
  async createSeminarProposal(req: MulterRequest, res: Response) {
    try {
      const { title, kategori } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const kategoriJson = JSON.parse(kategori);
      const seminarProposal =
        await seminarProposalService.createSeminarProposal({
          title,
          kategori: kategoriJson,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Seminar proposal berhasil dibuat",
        data: seminarProposal,
      });
    } catch (error) {
      console.error("Error in createSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat seminar proposal",
      });
    }
  }

  async getAllSeminarProposal(req: Request, res: Response) {
    try {
      const seminarProposal =
        await seminarProposalService.getAllSeminarProposal();
      return res.status(200).json({
        success: true,
        message: "Seminar proposal berhasil diambil",
        data: seminarProposal,
      });
    } catch (error) {
      console.error("Error in getAllSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil seminar proposal",
      });
    }
  }

  async updateSeminarProposal(req: MulterRequest, res: Response) {
    try {
      const { title, kategori } = req.body;
      const id = req.params.id;
      const kategoriJson = JSON.parse(kategori);
      const updateData: any = {
        title,
        kategori: kategoriJson,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedSeminarProposal =
        await seminarProposalService.updateSeminarProposal(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Seminar proposal berhasil diupdate",
        data: updatedSeminarProposal,
      });
    } catch (error) {
      console.error("Error in updateSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate seminar proposal",
      });
    }
  }

  async deleteSeminarProposal(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData = await seminarProposalService.deleteSeminarProposal(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Seminar proposal berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus seminar proposal",
      });
    }
  }

  async createProsedurPelaksanaan(req: MulterRequest, res: Response) {
    try {
      const { title, tahapan, waktu, deskripsi } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const prosedurPelaksanaan =
        await seminarProposalService.createProsedurPelaksanaan({
          title,
          tahapan,
          waktu,
          deskripsi,
          foto: req.files?.["foto"][0],
        });
      return res.status(201).json({
        success: true,
        message: "Prosedur pelaksanaan berhasil dibuat",
        data: prosedurPelaksanaan,
      });
    } catch (error) {
      console.error("Error in createProsedurPelaksanaan:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat prosedur pelaksanaan",
      });
    }
  }

  async getAllProsedurPelaksanaan(req: Request, res: Response) {
    try {
      const prosedurPelaksanaan =
        await seminarProposalService.getAllProsedurPelaksanaan();
      return res.status(200).json({
        success: true,
        message: "Prosedur pelaksanaan berhasil diambil",
        data: prosedurPelaksanaan,
      });
    } catch (error) {
      console.error("Error in getAllProsedurPelaksanaan:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil prosedur pelaksanaan",
      });
    }
  }

  async updateProsedurPelaksanaan(req: MulterRequest, res: Response) {
    try {
      const { title, tahapan, waktu, deskripsi } = req.body;
      const id = req.params.id;
      const updateData: any = {
        title,
        tahapan,
        waktu,
        deskripsi,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedProsedurPelaksanaan =
        await seminarProposalService.updateProsedurPelaksanaan(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Prosedur pelaksanaan berhasil diupdate",
        data: updatedProsedurPelaksanaan,
      });
    } catch (error) {
      console.error("Error in updateProsedurPelaksanaan:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate prosedur pelaksanaan",
      });
    }
  }

  async deleteProsedurPelaksanaan(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const deletedData =
        await seminarProposalService.deleteProsedurPelaksanaan(Number(id));
      return res.status(200).json({
        success: true,
        message: "Prosedur pelaksanaan berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteProsedurPelaksanaan:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus prosedur pelaksanaan",
      });
    }
  }

  async createStatistikSeminarProposal(req: Request, res: Response) {
    try {
      const {
        seminarPerTahun,
        tingkatKelulusan,
        bulanPersiapan,
        timPenguji,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSeminarProposal =
        await seminarProposalService.createStatistikSeminarProposal({
          seminarPerTahun,
          tingkatKelulusan,
          bulanPersiapan,
          timPenguji,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        message: "Statistik seminar proposal berhasil dibuat",
        data: statistikSeminarProposal,
      });
    } catch (error) {
      console.error("Error in createStatistikSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik seminar proposal",
      });
    }
  }

  async getAllStatistikSeminarProposal(req: Request, res: Response) {
    try {
      const statistikSeminarProposal =
        await seminarProposalService.getAllStatistikSeminarProposal();
      return res.status(200).json({
        success: true,
        message: "Statistik seminar proposal berhasil diambil",
        data: statistikSeminarProposal,
      });
    } catch (error) {
      console.error("Error in getAllStatistikSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil statistik seminar proposal",
      });
    }
  }

  async updateStatistikSeminarProposal(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        seminarPerTahun,
        tingkatKelulusan,
        bulanPersiapan,
        timPenguji,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSeminarProposal =
        await seminarProposalService.updateStatistikSeminarProposal(
          Number(id),
          {
            seminarPerTahun,
            tingkatKelulusan,
            bulanPersiapan,
            timPenguji,
            slogan,
            deskripsi,
          }
        );
      return res.status(200).json({
        success: true,
        message: "Statistik seminar proposal berhasil diupdate",
        data: statistikSeminarProposal,
      });
    } catch (error) {
      console.error("Error in updateStatistikSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengupdate statistik seminar proposal",
      });
    }
  }

  async deleteStatistikSeminarProposal(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await seminarProposalService.deleteStatistikSeminarProposal(Number(id));
      return res.status(200).json({
        success: true,
        message: "Statistik seminar proposal berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSeminarProposal:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik seminar proposal",
      });
    }
  }
}

export default new SeminarProposalController();
