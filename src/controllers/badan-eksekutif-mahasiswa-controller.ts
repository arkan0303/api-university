import badanEksikutifMahasiswaService from "../services/badan-eksekutif-mahasiswa-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class BadanEksikutifMahasiswaController {
  async createBEM(req: MulterRequest, res: Response) {
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

      const programKerjaJson = JSON.parse(programKerja);
      const pencapaianJson = JSON.parse(pencapaian);
      const createBEM = await badanEksikutifMahasiswaService.create({
        nama,
        jabatan,
        tugas,
        visi,
        misi,
        programKerja: programKerjaJson,
        pencapaian: pencapaianJson,
        email,
        noTelp,
        foto: req.files["foto"][0],
      });
      return res.status(201).json({
        success: true,
        data: createBEM,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat badan eksekutif mahasiswa",
      });
    }
  }

  async getAllBEM(req: Request, res: Response) {
    try {
      const getAllBEM = await badanEksikutifMahasiswaService.getAll();
      return res.status(200).json({
        success: true,
        data: getAllBEM,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan badan eksekutif mahasiswa",
      });
    }
  }

  async updateBEM(req: MulterRequest, res: Response) {
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
      const updatedBEM = await badanEksikutifMahasiswaService.update(
        Number(id),
        updateData
      );
      return res.status(200).json({
        success: true,
        message: "Badan eksekutif mahasiswa berhasil diupdate",
        data: updatedBEM,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui badan eksekutif mahasiswa",
      });
    }
  }

  async deleteBEM(req: Request, res: Response) {
    try {
      const result = await badanEksikutifMahasiswaService.delete(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Badan eksekutif mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteBEM:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus badan eksekutif mahasiswa",
      });
    }
  }

  async createStatistik(req: Request, res: Response) {
    try {
      const {
        pengurusInti,
        programKerja,
        mahasiswaTerlayani,
        komitmen,
        slogan,
        deskripsi,
      } = req.body;
      const createStatistik =
        await badanEksikutifMahasiswaService.createStatistik({
          pengurusInti,
          programKerja,
          mahasiswaTerlayani,
          komitmen,
          slogan,
          deskripsi,
        });
      return res.status(201).json({
        success: true,
        data: createStatistik,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal membuat statistik badan eksekutif mahasiswa",
      });
    }
  }

  async getAllStatistik(req: Request, res: Response) {
    try {
      const getAllStatistik =
        await badanEksikutifMahasiswaService.getAllStatistik();
      return res.status(200).json({
        success: true,
        data: getAllStatistik,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan statistik badan eksekutif mahasiswa",
      });
    }
  }

  async updateStatistik(req: Request, res: Response) {
    try {
      const {
        pengurusInti,
        programKerja,
        mahasiswaTerlayani,
        komitmen,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        pengurusInti,
        programKerja,
        mahasiswaTerlayani,
        komitmen,
        slogan,
        deskripsi,
      };
      const updatedStatistik =
        await badanEksikutifMahasiswaService.updateStatistik(
          Number(id),
          updateData
        );
      return res.status(200).json({
        success: true,
        message: "Statistik badan eksekutif mahasiswa berhasil diupdate",
        data: updatedStatistik,
      });
    } catch (error) {
      console.error("Error in updateStatistik:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik badan eksekutif mahasiswa",
      });
    }
  }

  async deleteStatistik(req: Request, res: Response) {
    try {
      const result = await badanEksikutifMahasiswaService.deleteStatistik(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Statistik badan eksekutif mahasiswa berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistik:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik badan eksekutif mahasiswa",
      });
    }
  }
}

export default new BadanEksikutifMahasiswaController();
