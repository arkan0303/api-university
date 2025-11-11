import testimoniSErvice from "../services/testimoniService";
import { Request, Response } from "express";
interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class TestimoniController {
  async createTestimoni(req: MulterRequest, res: Response) {
    try {
      const {
        judul,
        nama,
        jabatan,
        konten,
        kategori,
        note,
        tanggalPublikasi,
        aktif,
      } = req.body;
      if (!req.files?.["fotoUtama"] || req.files["fotoUtama"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto utama harus diupload",
        });
      }

      const galeriFiles = req.files?.["galeri"] || [];
      const testimoni = await testimoniSErvice.createTestimoni({
        judul,
        nama,
        jabatan,
        foto: req.files?.["fotoUtama"][0],
        galeri: Array.isArray(galeriFiles) ? galeriFiles : [galeriFiles],
        konten,
        kategori: kategori || null,
        note: note || null,
        aktif: aktif ? aktif === "true" : true,
        tanggalPublikasi: tanggalPublikasi || null,
      });
      return res.status(201).json({
        success: true,
        message: "Testimoni berhasil dibuat",
        testimoni,
      });
    } catch (error) {
      console.error("Error in createTestimoni:", error);
      res.status(500).json({
        success: false,
        message: "Gagal membuat testimoni",
      });
    }
  }

  async getAllTestimoni(req: Request, res: Response) {
    try {
      const testimoni = await testimoniSErvice.getAllTestimoni();
      return res.status(200).json({
        success: true,
        message: "Testimoni berhasil diambil",
        testimoni,
      });
    } catch (error) {
      console.error("Error in getAllTestimoni:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil testimoni",
      });
    }
  }
}

export default new TestimoniController();
