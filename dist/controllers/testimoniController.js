"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testimoniService_1 = __importDefault(require("../services/testimoniService"));
class TestimoniController {
    async createTestimoni(req, res) {
        try {
            const { judul, nama, jabatan, konten, kategori, note, tanggalPublikasi, aktif, } = req.body;
            if (!req.files?.["fotoUtama"] || req.files["fotoUtama"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto utama harus diupload",
                });
            }
            const galeriFiles = req.files?.["galeri"] || [];
            const testimoni = await testimoniService_1.default.createTestimoni({
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
        }
        catch (error) {
            console.error("Error in createTestimoni:", error);
            res.status(500).json({
                success: false,
                message: "Gagal membuat testimoni",
            });
        }
    }
    async getAllTestimoni(req, res) {
        try {
            const testimoni = await testimoniService_1.default.getAllTestimoni();
            return res.status(200).json({
                success: true,
                message: "Testimoni berhasil diambil",
                testimoni,
            });
        }
        catch (error) {
            console.error("Error in getAllTestimoni:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil testimoni",
            });
        }
    }
    async deleteTestimoni(req, res) {
        try {
            const { id } = req.params;
            const deletedTestimoni = await testimoniService_1.default.deleteTestimoni(Number(id));
            return res.status(200).json({
                success: true,
                message: "Testimoni berhasil dihapus",
                deletedTestimoni,
            });
        }
        catch (error) {
            console.error("Error in deleteTestimoni:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus testimoni",
            });
        }
    }
}
exports.default = new TestimoniController();
