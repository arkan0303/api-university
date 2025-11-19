import dewanPerwakilanMahasiswaService from "../services/dewan-perwakilan-mahasiswa-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class DewanPerwakilanMahasiswaController {
  async createDewanPerwakilan(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        jabatan,
        tugas,
        visi,
        misi,
        programKerja,
        pencapaian,
        email,
        noTelp,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }
      const createDewanPerwakilanMahasiswa =
        await dewanPerwakilanMahasiswaService.create({
          nama,
          jabatan,
          tugas,
          visi,
          misi,
          programKerja,
          pencapaian,
          email,
          noTelp,
          foto: req.files["foto"][0],
        });
      return res.status(201).json({
        success: true,
        data: createDewanPerwakilanMahasiswa,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat dewan perwakilan mahasiswa",
      });
    }
  }

  async getAllDewanPerwakilanMahasiswa(req: Request, res: Response) {
    try {
      const getAllDewanPerwakilanMahasiswa =
        await dewanPerwakilanMahasiswaService.getAll();
      return res.status(200).json({
        success: true,
        data: getAllDewanPerwakilanMahasiswa,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan dewan perwakilan mahasiswa",
      });
    }
  }

  async updateDewanPerwakilan(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        jabatan,
        tugas,
        visi,
        misi,
        programKerja,
        pencapaian,
        email,
        noTelp,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        nama,
        jabatan,
        tugas,
        visi,
        misi,
        programKerja,
        pencapaian,
        email,
        noTelp,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedDewanPerwakilanMahasiswa =
        await dewanPerwakilanMahasiswaService.update(Number(id), updateData);
      return res.status(200).json({
        success: true,
        message: "Dewan perwakilan mahasiswa berhasil diupdate",
        data: updatedDewanPerwakilanMahasiswa,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui dewan perwakilan mahasiswa",
      });
    }
  }

  async deleteDewanPerwakilan(req: Request, res: Response) {
    try {
      const result = await dewanPerwakilanMahasiswaService.delete(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Dewan perwakilan mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteDewanPerwakilanMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus dewan perwakilan mahasiswa",
      });
    }
  }

  async createStatistik(req: Request, res: Response) {
    try {
      const {
        anggotaAktif,
        aspirasiDitampung,
        praturanDisusun,
        akuntabel,
        slogan,
        deskripsi,
      } = req.body;
      const createStatistikDewanPerwakilanMahasiswa =
        await dewanPerwakilanMahasiswaService.createStatistik({
          anggotaAktif,
          aspirasiDitampung,
          praturanDisusun,
          akuntabel,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: createStatistikDewanPerwakilanMahasiswa,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik dewan perwakilan mahasiswa",
      });
    }
  }

  async getAllStatistik(req: Request, res: Response) {
    try {
      const getAllStatistikDewanPerwakilanMahasiswa =
        await dewanPerwakilanMahasiswaService.getAllStatistik();
      return res.status(200).json({
        success: true,
        data: getAllStatistikDewanPerwakilanMahasiswa,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik dewan perwakilan mahasiswa",
      });
    }
  }

  async updateStatistik(req: Request, res: Response) {
    try {
      const {
        anggotaAktif,
        aspirasiDitampung,
        praturanDisusun,
        akuntabel,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        anggotaAktif,
        aspirasiDitampung,
        praturanDisusun,
        akuntabel,
        slogan,
        deskripsi,
      };
      const updatedStatistikDewanPerwakilanMahasiswa =
        await dewanPerwakilanMahasiswaService.updateStatistik(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik dewan perwakilan mahasiswa berhasil diupdate",
        data: updatedStatistikDewanPerwakilanMahasiswa,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik dewan perwakilan mahasiswa",
      });
    }
  }

  async deleteStatistik(req: Request, res: Response) {
    try {
      const result = await dewanPerwakilanMahasiswaService.deleteStatistik(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Statistik dewan perwakilan mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistikDewanPerwakilanMahasiswa:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik dewan perwakilan mahasiswa",
      });
    }
  }
}

export default new DewanPerwakilanMahasiswaController();
