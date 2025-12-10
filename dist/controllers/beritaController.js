"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const beritaService_1 = __importDefault(require("../services/beritaService"));
class BeritaController {
    async createBerita(req, res) {
        try {
            const { judul, konten, kategori, penulis, aktif, tanggalPublikasi } = req.body;
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
            const berita = await beritaService_1.default.createBerita({
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
        }
        catch (error) {
            console.error("Error in createBerita:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Gagal membuat berita",
            });
        }
    }
    async getAllBerita(req, res) {
        try {
            const berita = await beritaService_1.default.getDataBerita();
            res.json({
                success: true,
                data: berita,
            });
        }
        catch (error) {
            console.error("Error in getAllBerita:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil data berita",
            });
        }
    }
    async deleteDataBerita(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await beritaService_1.default.deleteBerita(Number(id));
            res.json({
                success: true,
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteDataBerita:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus data berita",
            });
        }
    }
    async updateBerita(req, res) {
        try {
            const { id } = req.params;
            const { judul, konten, kategori, penulis, aktif, tanggalPublikasi } = req.body;
            const updateData = {
                judul,
                kategori,
                konten,
                penulis,
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
            const updatedBerita = await beritaService_1.default.updateBerita(Number(id), updateData);
            console.log("Updated Berita:", updateData);
            res.status(200).json({
                success: true,
                data: updatedBerita,
            });
        }
        catch (error) {
            console.error("Error in updateBerita:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new BeritaController();
