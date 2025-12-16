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

  async deleteTestimoni(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const deletedTestimoni = await testimoniSErvice.deleteTestimoni(
        Number(id)
      );
      return res.status(200).json({
        success: true,
        message: "Testimoni berhasil dihapus",
        deletedTestimoni,
      });
    } catch (error) {
      console.error("Error in deleteTestimoni:", error);
      res.status(500).json({
        success: false,
        message: "Gagal menghapus testimoni",
      });
    }
  }
  async update(req: MulterRequest, res: Response) {
    try {
      const { id } = req.params;
      const {
        judul,
        nama,
        jabatan,
        konten,
        kategori,
        note,
        aktif,
        tanggalPublikasi,
      } = req.body;
      const updateData: any = {
        judul,
        nama,
        jabatan,
        konten,
        kategori,
        note,
        aktif,
        tanggalPublikasi,
      };
      // Handle galeri files
      if (req.files?.["galeri"]) {
        updateData.galeri = Array.isArray(req.files["galeri"])
          ? [...req.files["galeri"]]
          : [req.files["galeri"]];
      }
      if (req.files?.["fotoUtama"]?.[0]) {
        updateData.foto = req.files["fotoUtama"][0];
      }

      const updatedBerita = await testimoniSErvice.update(
        Number(id),
        updateData
      );
      console.log("Updated Berita:", updateData);
      res.status(200).json({
        success: true,
        data: updatedBerita,
      });
    } catch (error) {
      console.error("Error in updateBerita:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new TestimoniController();
