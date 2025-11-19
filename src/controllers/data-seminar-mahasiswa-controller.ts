import dataSeminarMahasiswaService from "../services/data-seminar-mahasiswa-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class DataSeminarMahasiswaController {
  async createDataSeminarMahasiswa(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        terkait,
        deskripsiSeminar,
        tujuanPembelajaran,
        materiDibahas,
        hasilDIharapkan,
        tanggalSeminar,
        waktuSeminar,
        lokasi,
        peserta,
        namaNarasumber,
        tentangNarasumber,
        emailNarasumber,
        noTelpNarasumber,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const tujuanPembelajaranJson = JSON.parse(tujuanPembelajaran);
      const materiDibahasJson = JSON.parse(materiDibahas);
      const hasilDIharapkanJson = JSON.parse(hasilDIharapkan);
      const create =
        await dataSeminarMahasiswaService.createDataSeminarMahasiswa({
          title,
          terkait,
          deskripsiSeminar,
          tujuanPembelajaran: tujuanPembelajaranJson,
          materiDibahas: materiDibahasJson,
          hasilDIharapkan: hasilDIharapkanJson,
          tanggalSeminar,
          waktuSeminar,
          lokasi,
          peserta,
          namaNarasumber,
          tentangNarasumber,
          emailNarasumber,
          noTelpNarasumber,
          foto: req.files["foto"][0],
        });
      return res.status(201).json({
        success: true,
        data: create,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat data seminar mahasiswa",
      });
    }
  }

  async getAllDataSeminarMahasiswa(req: Request, res: Response) {
    try {
      const getAllDataSeminarMahasiswa =
        await dataSeminarMahasiswaService.getAllDataSeminarMahasiswa();
      return res.status(200).json({
        success: true,
        data: getAllDataSeminarMahasiswa,
      });
    } catch (error) {
      console.error("Error in getAllDataSeminarMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan data seminar mahasiswa",
      });
    }
  }

  async updateDataSeminarMahasiswa(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const {
        title,
        terkait,
        deskripsiSeminar,
        tujuanPembelajaran,
        materiDibahas,
        hasilDIharapkan,
        tanggalSeminar,
        waktuSeminar,
        lokasi,
        peserta,
        namaNarasumber,
        tentangNarasumber,
        emailNarasumber,
        noTelpNarasumber,
      } = req.body;
      //   if (!req.files?.["foto"] || req.files["foto"].length === 0) {
      //     return res.status(400).json({
      //       success: false,
      //       message: "Foto harus diupload",
      //     });
      //   }

      const tujuanPembelajaranJson = JSON.parse(tujuanPembelajaran);
      const materiDibahasJson = JSON.parse(materiDibahas);
      const hasilDIharapkanJson = JSON.parse(hasilDIharapkan);
      const updateData: any = {
        title,
        terkait,
        deskripsiSeminar,
        tujuanPembelajaran: tujuanPembelajaranJson,
        materiDibahas: materiDibahasJson,
        hasilDIharapkan: hasilDIharapkanJson,
        tanggalSeminar,
        waktuSeminar,
        lokasi,
        peserta,
        namaNarasumber,
        tentangNarasumber,
        emailNarasumber,
        noTelpNarasumber,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedDataSeminarMahasiswa =
        await dataSeminarMahasiswaService.updateDataSeminarMahasiswa(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Data Seminar Mahasiswa berhasil diupdate",
        data: updatedDataSeminarMahasiswa,
      });
    } catch (error) {
      console.error("Error in updateDataSeminarMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui data seminar mahasiswa",
      });
    }
  }

  async deleteDataSeminarMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await dataSeminarMahasiswaService.deleteDataSeminarMahasiswa(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Data Seminar Mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteDataSeminarMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus data seminar mahasiswa",
      });
    }
  }

  async createStatistikDataSeminarMahasiswa(req: Request, res: Response) {
    try {
      const {
        totalSeminar,
        totalPeserta,
        totalNarasumber,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const create =
        await dataSeminarMahasiswaService.createStatistikDataSeminarMahasiswa({
          totalSeminar,
          totalPeserta,
          totalNarasumber,
          tingkatKepuasan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: create,
      });
    } catch (error) {
      console.error("Error in createStatistikDataSeminarMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik data seminar mahasiswa",
      });
    }
  }

  async getAllStatistikDataSeminarMahasiswa(req: Request, res: Response) {
    try {
      const getAllStatistikDataSeminarMahasiswa =
        await dataSeminarMahasiswaService.getAllStatistikDataSeminarMahasiswa();
      return res.status(200).json({
        success: true,
        data: getAllStatistikDataSeminarMahasiswa,
      });
    } catch (error) {
      console.error("Error in getAllStatistikDataSeminarMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik data seminar mahasiswa",
      });
    }
  }

  async updateStatistikDataSeminarMahasiswa(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        totalSeminar,
        totalPeserta,
        totalNarasumber,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const updateData: any = {
        totalSeminar,
        totalPeserta,
        totalNarasumber,
        tingkatKepuasan,
        slogan,
        deskripsi,
      };
      const updatedStatistikDataSeminarMahasiswa =
        await dataSeminarMahasiswaService.updateStatistikDataSeminarMahasiswa(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Data Seminar Mahasiswa berhasil diupdate",
        data: updatedStatistikDataSeminarMahasiswa,
      });
    } catch (error) {
      console.error("Error in updateStatistikDataSeminarMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik data seminar mahasiswa",
      });
    }
  }

  async deleteStatistikDataSeminarMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await dataSeminarMahasiswaService.deleteStatistikDataSeminarMahasiswa(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Data Seminar Mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikDataSeminarMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik data seminar mahasiswa",
      });
    }
  }
}

export default new DataSeminarMahasiswaController();
