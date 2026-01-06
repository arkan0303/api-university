import daftarKependidikanService from "../services/daftar-kependidikan-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class DaftarKependidikanController {
  async createDaftarKependidikan(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        jabatan,
        nip,
        deskripsi,
        riwayatPendidikan,
        keahlian,
        tanggungJawab,
        prestasi,
        pelatihan,
        email,
        noTelp,
        pengalaman,
        nik,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const keahlianJson = JSON.parse(keahlian);
      const prestasiJson = JSON.parse(prestasi);
      const pelatihanJson = JSON.parse(pelatihan);
      const pengalamanJson = JSON.parse(pengalaman);
      const tanggungJawabJson = JSON.parse(tanggungJawab);
      const riwayatPendidikanJson = JSON.parse(riwayatPendidikan);

      console.log(req.body);
      const daftarKependidikan =
        await daftarKependidikanService.createDaftarKependidikan({
          nama,
          jabatan,
          nip,
          deskripsi,
          riwayatPendidikan: riwayatPendidikanJson,
          keahlian: keahlianJson,
          tanggungJawab: tanggungJawabJson,
          prestasi: prestasiJson,
          pelatihan: pelatihanJson,
          email,
          noTelp,
          pengalaman: pengalamanJson,
          foto: req.files["foto"][0],
          nik,
        });

      console.log(daftarKependidikan);
      return res.status(201).json({
        success: true,
        data: daftarKependidikan,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat daftar kependidikan",
      });
    }
  }

  async getAllDaftarKependidikan(req: Request, res: Response) {
    try {
      const daftarKependidikan =
        await daftarKependidikanService.getAllDaftarKependidikan();
      return res.status(200).json({
        success: true,
        data: daftarKependidikan,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan daftar dosen",
      });
    }
  }

  async updateDaftarKependidikan(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        jabatan,
        nip,
        deskripsi,
        riwayatPendidikan,
        keahlian,
        prestasi,
        pelatihan,
        pengalaman,
        tanggungJawab,
        email,
        noTelp,
        nik,
      } = req.body;
      const id = req.params.id;

      const keahlianJson = JSON.parse(keahlian);
      const prestasiJson = JSON.parse(prestasi);
      const pelatihanJson = JSON.parse(pelatihan);
      const pengalamanJson = JSON.parse(pengalaman);
      const tanggungJawabJson = JSON.parse(tanggungJawab);
      const riwayatPendidikanJson = JSON.parse(riwayatPendidikan);

      const updateData: any = {
        nama,
        jabatan,
        nip,
        deskripsi,
        riwayatPendidikan: riwayatPendidikanJson,
        keahlian: keahlianJson,
        prestasi: prestasiJson,
        pelatihan: pelatihanJson,
        pengalaman: pengalamanJson,
        tanggungJawab: tanggungJawabJson,
        email,
        noTelp,
        nik,
      };

      // Hanya tambahkan foto jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedDaftarKependidikan =
        await daftarKependidikanService.updateDaftarKependidikan(
          Number(id), // Konversi id ke number
          updateData
        );

      return res.status(200).json({
        success: true,
        message: "Daftar Kependidikan berhasil diupdate",
        data: updatedDaftarKependidikan,
      });
    } catch (error) {
      console.error("Error in updateDaftarKependidikan:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui kekhususan hukum pidana",
      });
    }
  }

  async deleteDaftarKependidikan(req: Request, res: Response) {
    try {
      const result =
        await daftarKependidikanService.deleteDaftarKependidikanById(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Daftar Kependidikan berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteDaftarKependidikan:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus daftar dosen",
      });
    }
  }

  async getStatistikDaftarKependidikan(req: Request, res: Response) {
    try {
      const statistikDaftarKependidikan =
        await daftarKependidikanService.getStatistikDaftarKependidikan();
      return res.status(200).json({
        success: true,
        data: statistikDaftarKependidikan,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik daftar dosen",
      });
    }
  }

  async createStatistikTenagaKependidikan(req: Request, res: Response) {
    try {
      const {
        totalTenagaKependidikan,
        administrasi,
        teknis,
        pustakawan,
        slogan,
        deskripsi,
      } = req.body;
      console.log(req.body);
      const statistikDaftarKependidikan =
        await daftarKependidikanService.createStatistikTenagaKependidikan({
          totalTenagaKependidikan,
          administrasi,
          teknis,
          pustakawan,
          slogan,
          deskripsi,
        });
      console.log(statistikDaftarKependidikan);
      return res.status(201).json({
        success: true,
        data: statistikDaftarKependidikan,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik daftar dosen",
      });
    }
  }

  async updateStatistikTenagaKependidikan(req: Request, res: Response) {
    try {
      const {
        totalTenagaKependidikan,
        administrasi,
        teknis,
        pustakawan,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      console.log(req.body);
      console.log(req.params.id);
      const updateData: any = {
        totalTenagaKependidikan,
        administrasi,
        teknis,
        pustakawan,
        slogan,
        deskripsi,
      };
      const updatedStatistikDaftarDosen =
        await daftarKependidikanService.updateStatistikTenagaKependidikan(
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

  async deleteStatistikTenagaKependidikan(req: Request, res: Response) {
    try {
      const result =
        await daftarKependidikanService.deleteStatistikTenagaKependidikanById(
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

export default new DaftarKependidikanController();
