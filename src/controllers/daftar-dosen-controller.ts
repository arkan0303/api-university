import daftarDosenService from "../services/daftar-dosen-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class DaftarDosenController {
  async createDaftarDosen(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        jabatan,
        nidn,
        deskripsi,
        riwayatPendidikan,
        keahlian,
        prestasi,
        publikasi,
        email,
        noTelp,
        nuptk,
        nik,
        id_sinta,
        tahun_publikasi,
        jabatan_akademik,
        link_sinta,
        link_ppdikti,
        urutan,
        jabatan_struktural,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const keahlianJson = JSON.parse(keahlian);
      const prestasiJson = JSON.parse(prestasi);
      const publikasiJson = JSON.parse(publikasi);
      const riwayatPendidikanJson = JSON.parse(riwayatPendidikan);
      const foto = req.files["foto"][0];
      const ahli = req.files?.["ahli"]?.[0] ?? null;
      const daftarDosen = await daftarDosenService.createDaftarDosen({
        nama,
        jabatan,
        nidn,
        deskripsi,
        riwayatPendidikan: riwayatPendidikanJson,
        keahlian: keahlianJson,
        prestasi: prestasiJson,
        publikasi: publikasiJson,
        email,
        noTelp,
        foto,
        nuptk,
        nik,
        id_sinta,
        tahun_publikasi,
        ahli,
        jabatan_akademik,
        link_sinta,
        link_ppdikti,
        urutan,
        jabatan_struktural,
      });
      return res.status(201).json({
        success: true,
        data: daftarDosen,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat daftar dosen",
      });
    }
  }

  async getAllDaftarDosen(req: Request, res: Response) {
    try {
      const daftarDosen = await daftarDosenService.getAllDaftarDosen();
      return res.status(200).json({
        success: true,
        data: daftarDosen,
      });
    } catch (error) {
      console.error("ERROR getAllDaftarDosen:", error);

      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan daftar dosen",
      });
    }
  }

  async updateDaftarDosen(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        jabatan,
        nidn,
        deskripsi,
        riwayatPendidikan,
        keahlian,
        prestasi,
        publikasi,
        email,
        noTelp,
        nuptk,
        nik,
        id_sinta,
        tahun_publikasi,
        jabatan_akademik,
        link_sinta,
        link_ppdikti,
        urutan,
        jabatan_struktural,
      } = req.body;
      const id = req.params.id;

      const keahlianJson = JSON.parse(keahlian);
      const prestasiJson = JSON.parse(prestasi);
      const publikasiJson = JSON.parse(publikasi);
      const riwayatPendidikanJson = JSON.parse(riwayatPendidikan);

      const updateData: any = {
        nama,
        jabatan,
        nidn,
        deskripsi,
        riwayatPendidikan: riwayatPendidikanJson,
        keahlian: keahlianJson,
        prestasi: prestasiJson,
        publikasi: publikasiJson,
        email,
        noTelp,
        nuptk,
        nik,
        id_sinta,
        tahun_publikasi,
        jabatan_akademik,
        link_sinta,
        link_ppdikti,
        urutan,
        jabatan_struktural,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      if (req.files?.["ahli"]?.[0]) {
        updateData.ahli = req.files["ahli"][0];
      }

      const updatedDaftarDosen = await daftarDosenService.updateDaftarDosen(
        Number(id), // Konversi id ke number
        updateData
      );

      return res.status(200).json({
        success: true,
        message: "Daftar Dosen berhasil diupdate",
        data: updatedDaftarDosen,
      });
    } catch (error) {
      console.error("Error in updateDaftarDosen:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui kekhususan hukum pidana",
      });
    }
  }

  async deleteDaftarDosen(req: Request, res: Response) {
    try {
      const result = await daftarDosenService.deleteDaftarDosenById(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Daftar Dosen berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteDaftarDosen:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus daftar dosen",
      });
    }
  }

  async getStatistikDaftarDosen(req: Request, res: Response) {
    try {
      const statistikDaftarDosen =
        await daftarDosenService.getStatistikDaftarDosen();
      return res.status(200).json({
        success: true,
        data: statistikDaftarDosen,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik daftar dosen",
      });
    }
  }

  async createStatistikDaftarDosen(req: Request, res: Response) {
    try {
      const {
        totalDosen,
        profesor,
        doktor,
        publiikasiPerTahun,
        slogan,
        deskripsi,
      } = req.body;
      console.log(req.body);
      const statistikDaftarDosen =
        await daftarDosenService.createStatistikDaftarDosen({
          totalDosen,
          profesor,
          doktor,
          publiikasiPerTahun,
          slogan,
          deskripsi,
        });
      console.log(statistikDaftarDosen);
      return res.status(201).json({
        success: true,
        data: statistikDaftarDosen,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik daftar dosen",
      });
    }
  }

  async updateStatistikDaftarDosen(req: Request, res: Response) {
    try {
      const {
        totalDosen,
        profesor,
        doktor,
        publiikasiPerTahun,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      console.log(req.body);
      console.log(req.params.id);
      const updateData: any = {
        totalDosen,
        profesor,
        doktor,
        publiikasiPerTahun,
        slogan,
        deskripsi,
      };
      const updatedStatistikDaftarDosen =
        await daftarDosenService.updateStatistikDaftarDosen(
          Number(id), // Konversi id ke number
          updateData
        );
      console.log(updatedStatistikDaftarDosen);
      return res.status(200).json({
        success: true,
        message: "Statistik daftar dosen berhasil diupdate",
        data: updatedStatistikDaftarDosen,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik daftar dosen",
      });
    }
  }

  async deleteStatistikDaftarDosen(req: Request, res: Response) {
    try {
      const result = await daftarDosenService.deleteStatistikDaftarDosenById(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Statistik daftar dosen berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikDaftarDosen:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik daftar dosen",
      });
    }
  }
}

export default new DaftarDosenController();
