import { Request, Response } from "express";
import beritaService from "../services/beritaService";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}

class BeritaController {
  async createBerita(req: MulterRequest, res: Response) {
    try {
      const { judul, konten, kategori, penulis, aktif, tanggalPublikasi } =
        req.body;

      console.log("req.body", req.body);

      console.log("Uploaded files:", {
        fotoUtama: req.files?.["fotoUtama"]?.map((f) => f.originalname),
        galeri: req.files?.["galeri"]?.map((f) => f.originalname),
      });

      if (!req.files?.["fotoUtama"] || req.files["fotoUtama"].length === 0) {
        return res.status(400).json({
          success: false,
          message: "Foto utama harus diupload",
        });
      }

      const galeriFiles = req.files?.["galeri"] || [];

      const berita = await beritaService.createBerita({
        judul,
        konten,
        kategori: kategori || null,
        penulis: penulis || null,
        foto: req.files?.["fotoUtama"][0],
        galeri: Array.isArray(galeriFiles) ? galeriFiles : [galeriFiles],
        aktif: aktif ? aktif === "true" : true,
        tanggalPublikasi: tanggalPublikasi || null,
      });

      res.status(201).json({
        success: true,
        data: berita,
      });
    } catch (error: any) {
      console.error("Error in createBerita:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Gagal membuat berita",
      });
    }
  }

  async getAllBerita(req: Request, res: Response) {
    try {
      const berita = await beritaService.getDataBerita();
      res.json({
        success: true,
        data: berita,
      });
    } catch (error) {
      console.error("Error in getAllBerita:", error);
      res.status(500).json({
        success: false,
        message: "Gagal mengambil data berita",
      });
    }
  }

  //   async getBeritaById(req: Request, res: Response) {
  //     try {
  //       const { id } = req.params;
  //       const berita = await prisma.berita.findUnique({
  //         where: { id: Number(id) },
  //       });

  //       if (!berita) {
  //         return res.status(404).json({
  //           success: false,
  //           message: "Berita tidak ditemukan",
  //         });
  //       }

  //       res.json({
  //         success: true,
  //         data: berita,
  //       });
  //     } catch (error) {
  //       console.error("Error in getBeritaById:", error);
  //       res.status(500).json({
  //         success: false,
  //         message: "Gagal mengambil detail berita",
  //       });
  //     }
  //   }
}

export default new BeritaController();
