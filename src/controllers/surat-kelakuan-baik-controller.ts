import { Request, Response } from "express";
import suratKelakuanBaikService from "../services/surat-kelakuan-baik-service";

class SuratKelakuanBaikController {
  async createSuratKelakuanBaik(req: Request, res: Response) {
    const {
      idMahasiswa,
      deskripsi,
      catatanAkademik,
      catatanDisiplin,
      catatanOrganisasi,
      penandaTangan,
      note,
      noSurat,
      tanggalTerbit,
      berlakuHingga,
      keperluan,
      status,
    } = req.body;

    try {
      const suratKelakuanBaik =
        await suratKelakuanBaikService.createSuratKelakuanBaik({
          idMahasiswa,
          deskripsi,
          catatanAkademik,
          catatanDisiplin,
          catatanOrganisasi,
          penandaTangan,
          note,
          noSurat,
          tanggalTerbit,
          berlakuHingga,
          keperluan,
          status,
        });

      return res.status(201).json(suratKelakuanBaik);
    } catch (error) {
      console.error("Error creating surat kelakuan baik:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getAllSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const suratKelakuanBaik =
        await suratKelakuanBaikService.getAllSuratKelakuanBaik();
      return res.status(200).json({
        success: true,
        message: "Surat kelakuan baik berhasil diambil",
        data: suratKelakuanBaik,
      });
    } catch (error) {
      console.error("Error getting surat kelakuan baik:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        idMahasiswa,
        deskripsi,
        catatanAkademik,
        catatanDisiplin,
        catatanOrganisasi,
        penandaTangan,
        note,
        noSurat,
        tanggalTerbit,
        berlakuHingga,
        keperluan,
        status,
      } = req.body;
      const updateData: any = {
        idMahasiswa,
        deskripsi,
        catatanAkademik,
        catatanDisiplin,
        catatanOrganisasi,
        penandaTangan,
        note,
        noSurat,
        tanggalTerbit,
        berlakuHingga,
        keperluan,
        status,
      };
      const updatedSuratKelakuanBaik =
        await suratKelakuanBaikService.updateSuratKelakuanBaik(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Surat kelakuan baik berhasil diupdate",
        data: updatedSuratKelakuanBaik,
      });
    } catch (error) {
      console.error("Error in updateSuratKelakuanBaik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await suratKelakuanBaikService.deleteSuratKelakuanBaik(Number(id));
      res.status(200).json({
        success: true,
        message: "Surat kelakuan baik berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteSuratKelakuanBaik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const suratKelakuanBaik =
        await suratKelakuanBaikService.getAllSuratKelakuanBaik();
      res.status(200).json({
        success: true,
        message: "Surat kelakuan baik berhasil diambil",
        data: suratKelakuanBaik,
      });
    } catch (error) {
      console.error("Error in getSuratKelakuanBaik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async getStatistikSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const statistikSuratKelakuanBaik =
        await suratKelakuanBaikService.getStatistikSuratKelakuanBaik();
      res.status(200).json({
        success: true,
        message: "Statistik surat kelakuan baik berhasil diambil",
        data: statistikSuratKelakuanBaik,
      });
    } catch (error) {
      console.error("Error in getStatistikSuratKelakuanBaik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async createStatistikSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const {
        suratDiterbitkan,
        tingkatPersetujuan,
        waktuProses,
        validasiTerjamin,
        slogan,
        deskripsi,
      } = req.body;
      const statistikSuratKelakuanBaik =
        await suratKelakuanBaikService.createStatistikSuratKelakuanBaik({
          suratDiterbitkan,
          tingkatPersetujuan,
          waktuProses,
          validasiTerjamin,
          slogan,
          deskripsi,
        });
      res.status(201).json({
        success: true,
        message: "Statistik surat kelakuan baik berhasil dibuat",
        data: statistikSuratKelakuanBaik,
      });
    } catch (error) {
      console.error("Error in createStatistikSuratKelakuanBaik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async updateStatistikSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        suratDiterbitkan,
        tingkatPersetujuan,
        waktuProses,
        validasiTerjamin,
        slogan,
        deskripsi,
      } = req.body;
      const updateData: any = {
        suratDiterbitkan,
        tingkatPersetujuan,
        waktuProses,
        validasiTerjamin,
        slogan,
        deskripsi,
      };
      const updatedStatistikSuratKelakuanBaik =
        await suratKelakuanBaikService.updateStatistikSuratKelakuanBaik(
          Number(id),
          updateData
        );
      res.status(200).json({
        success: true,
        message: "Statistik surat kelakuan baik berhasil diupdate",
        data: updatedStatistikSuratKelakuanBaik,
      });
    } catch (error) {
      console.error("Error in updateStatistikSuratKelakuanBaik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async deleteStatistikSuratKelakuanBaik(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedData =
        await suratKelakuanBaikService.deleteStatistikSuratKelakuanBaik(
          Number(id)
        );
      res.status(200).json({
        success: true,
        message: "Statistik surat kelakuan baik berhasil dihapus",
        data: deletedData,
      });
    } catch (error) {
      console.error("Error in deleteStatistikSuratKelakuanBaik:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new SuratKelakuanBaikController();
