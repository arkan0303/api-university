import alumniBerprestasiService from "../services/alumni-berprestasi-service";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class AlumniBerprestasiController {
  async createAlumniBerprestasi(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        nim,
        lulusan,
        posisi,
        perusahaan,
        ipk,
        gaji,
        waktuTunggu,
        email,
        noTelp,
        linkedin,
        instagram,
        testimonial,
        perjalananKarir,
        keahlian,
        pencapaian,
        bidang,
      } = req.body;
      if (!req.files?.["foto"] || req.files["foto"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto harus diupload",
        });
      }

      const pencapaianJson = JSON.parse(pencapaian);
      const perjalananKarirJson = JSON.parse(perjalananKarir);
      const keahlianJson = JSON.parse(keahlian);
      const createBEM = await alumniBerprestasiService.create({
        nama,
        nim,
        lulusan,
        posisi,
        perusahaan,
        ipk,
        gaji,
        waktuTunggu,
        email,
        noTelp,
        linkedin,
        instagram,
        testimonial,
        perjalananKarir: perjalananKarirJson,
        keahlian: keahlianJson,
        pencapaian: pencapaianJson,
        bidang,
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

  async getAllAlumniBerprestasi(req: Request, res: Response) {
    try {
      const getAllAlumniBerprestasi = await alumniBerprestasiService.getAll();
      return res.status(200).json({
        success: true,
        data: getAllAlumniBerprestasi,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal mendapatkan badan eksekutif mahasiswa",
      });
    }
  }

  async updateAlumniBerprestasi(req: MulterRequest, res: Response) {
    try {
      const {
        nama,
        nim,
        lulusan,
        posisi,
        perusahaan,
        ipk,
        gaji,
        waktuTunggu,
        email,
        noTelp,
        linkedin,
        instagram,
        testimonial,
        perjalananKarir,
        keahlian,
        pencapaian,
        bidang,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        nama,
        nim,
        lulusan,
        posisi,
        perusahaan,
        ipk,
        gaji,
        waktuTunggu,
        email,
        noTelp,
        linkedin,
        instagram,
        testimonial,
        perjalananKarir,
        keahlian,
        pencapaian,
        bidang,
      };
      if (req.files?.["foto"]?.[0]) {
        updateData.foto = req.files["foto"][0];
      }
      const updatedAlumniBerprestasi = await alumniBerprestasiService.update(
        Number(id),
        updateData
      );
      return res.status(200).json({
        success: true,
        message: "Alumni berprestasi berhasil diupdate",
        data: updatedAlumniBerprestasi,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui alumni berprestasi",
      });
    }
  }

  async deleteAlumniBerprestasi(req: Request, res: Response) {
    try {
      const result = await alumniBerprestasiService.delete(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Alumni berprestasi berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteAlumniBerprestasi:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus alumni berprestasi",
      });
    }
  }

  async createStatistik(req: Request, res: Response) {
    try {
      const {
        totalAlumni,
        tingkatPenempatan,
        rataGajih,
        WaktuTunggu,
        slogan,
        deskripsi,
      } = req.body;
      const createStatistik = await alumniBerprestasiService.createStatistik({
        totalAlumni,
        tingkatPenempatan,
        rataGajih,
        WaktuTunggu,
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
        message: "Gagal membuat statistik alumni berprestasi",
      });
    }
  }

  async getAllStatistik(req: Request, res: Response) {
    try {
      const getAllStatistik = await alumniBerprestasiService.getAllStatistik();
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
        totalAlumni,
        tingkatPenempatan,
        rataGajih,
        WaktuTunggu,
        slogan,
        deskripsi,
      } = req.body;
      const id = req.params.id;
      const updateData: any = {
        totalAlumni,
        tingkatPenempatan,
        rataGajih,
        WaktuTunggu,
        slogan,
        deskripsi,
      };
      const updatedStatistik = await alumniBerprestasiService.updateStatistik(
        Number(id),
        updateData
      );
      return res.status(200).json({
        success: true,
        message: "Statistik alumni berprestasi berhasil diupdate",
        data: updatedStatistik,
      });
    } catch (error) {
      console.error("Error in updateStatistik:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal memperbarui statistik alumni berprestasi",
      });
    }
  }

  async deleteStatistik(req: Request, res: Response) {
    try {
      const result = await alumniBerprestasiService.deleteStatistik(
        Number(req.params.id)
      );
      return res.status(200).json({
        success: true,
        message: "Statistik alumni berprestasi berhasil dihapus",
        data: result,
      });
    } catch (error) {
      console.error("Error in deleteStatistik:", error);
      return res.status(500).json({
        success: false,
        message: "Gagal menghapus statistik alumni berprestasi",
      });
    }
  }
}

export default new AlumniBerprestasiController();
