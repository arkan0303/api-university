import dataMagangMahasiswaService from "../services/data-magang-mahasiswa-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class DataMagangMahasiswaController {
  async createDataMagangMahasiswa(req: MulterRequest, res: Response) {
    try {
      const {
        title,
        terkait,
        tentangMagang,
        tanggungJawab,
        keahlian,
        pencapaian,
        perusahaanMagang,
        posisiMagang,
        periodeMagang,
        lokasiMagang,
        superVisorMagang,
        emailSuperVisorMagang,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const keahlianJson = JSON.parse(keahlian);
      const pencapaianJson = JSON.parse(pencapaian);
      const tanggungJawabJson = JSON.parse(tanggungJawab);
      const create = await dataMagangMahasiswaService.createDataMagangMahasiswa(
        {
          title,
          terkait,
          tentangMagang,
          tanggungJawab: tanggungJawabJson,
          keahlian: keahlianJson,
          pencapaian: pencapaianJson,
          perusahaanMagang,
          posisiMagang,
          periodeMagang,
          lokasiMagang,
          superVisorMagang,
          emailSuperVisorMagang,
          foto: req.files["foto"][0],
        }
      );
      return res.status(201).json({
        success: true,
        data: create,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat data magang mahasiswa",
      });
    }
  }

  async getAllDataMagangMahasiswa(req: Request, res: Response) {
    try {
      const getAllDataMagangMahasiswa =
        await dataMagangMahasiswaService.getAllDataMagangMahasiswa();
      return res.status(200).json({
        success: true,
        data: getAllDataMagangMahasiswa,
      });
    } catch (error) {
      console.error("Error in getAllDataMagangMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan data magang mahasiswa",
      });
    }
  }

  async updateDataMagangMahasiswa(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const {
        title,
        terkait,
        tentangMagang,
        tanggungJawab,
        keahlian,
        pencapaian,
        perusahaanMagang,
        posisiMagang,
        periodeMagang,
        lokasiMagang,
        superVisorMagang,
        emailSuperVisorMagang,
      } = req.body;
      //   if (!req.files?.["foto"] || req.files["foto"].length === 0) {
      //     return res.status(400).json({
      //       success: false,
      //       message: "Foto harus diupload",
      //     });
      //   }

      const tanggungJawabJson = JSON.parse(tanggungJawab);
      const keahlianJson = JSON.parse(keahlian);
      const pencapaianJson = JSON.parse(pencapaian);
      const updateData: any = {
        title,
        terkait,
        tentangMagang,
        tanggungJawab: tanggungJawabJson,
        keahlian: keahlianJson,
        pencapaian: pencapaianJson,
        perusahaanMagang,
        posisiMagang,
        periodeMagang,
        lokasiMagang,
        superVisorMagang,
        emailSuperVisorMagang,
      };

      // Hanya upload foto baru jika ada file yang diunggah
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }

      const updatedDataMagangMahasiswa =
        await dataMagangMahasiswaService.updateDataMagangMahasiswa(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Data Magang Mahasiswa berhasil diupdate",
        data: updatedDataMagangMahasiswa,
      });
    } catch (error) {
      console.error("Error in updateDataMagangMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui data magang mahasiswa",
      });
    }
  }

  async deleteDataMagangMahasiswa(req: Request, res: Response) {
    try {
      const result = await dataMagangMahasiswaService.deleteDataMagangMahasiswa(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Data Magang Mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteDataMagangMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus data magang mahasiswa",
      });
    }
  }

  async createStatistikDataMagangMahasiswa(req: Request, res: Response) {
    try {
      const {
        totalMagang,
        mitraInstitusi,
        rataDurasiMagang,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const create =
        await dataMagangMahasiswaService.createStatistikDataMagangMahasiswa({
          totalMagang,
          mitraInstitusi,
          rataDurasiMagang,
          tingkatKepuasan,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: create,
      });
    } catch (error) {
      console.error("Error in createStatistikDataMagangMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik data magang mahasiswa",
      });
    }
  }

  async getAllStatistikDataMagangMahasiswa(req: Request, res: Response) {
    try {
      const getAllStatistikDataMagangMahasiswa =
        await dataMagangMahasiswaService.getAllStatistikDataMagangMahasiswa();
      return res.status(200).json({
        success: true,
        data: getAllStatistikDataMagangMahasiswa,
      });
    } catch (error) {
      console.error("Error in getAllStatistikDataMagangMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik data magang mahasiswa",
      });
    }
  }

  async updateStatistikDataMagangMahasiswa(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const {
        totalMagang,
        mitraInstitusi,
        rataDurasiMagang,
        tingkatKepuasan,
        slogan,
        deskripsi,
      } = req.body;
      const updateData: any = {
        totalMagang,
        mitraInstitusi,
        rataDurasiMagang,
        tingkatKepuasan,
        slogan,
        deskripsi,
      };
      const updatedStatistikDataMagangMahasiswa =
        await dataMagangMahasiswaService.updateStatistikDataMagangMahasiswa(
          Number(id), // Konversi id ke number
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Data Magang Mahasiswa berhasil diupdate",
        data: updatedStatistikDataMagangMahasiswa,
      });
    } catch (error) {
      console.error("Error in updateStatistikDataMagangMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik data magang mahasiswa",
      });
    }
  }

  async deleteStatistikDataMagangMahasiswa(req: Request, res: Response) {
    try {
      const result =
        await dataMagangMahasiswaService.deleteStatistikDataMagangMahasiswa(
          Number(req.params.id)
        );
      return res.status(200).json({
        success: true,
        message: "Statistik Data Magang Mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikDataMagangMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik data magang mahasiswa",
      });
    }
  }
}

export default new DataMagangMahasiswaController();
