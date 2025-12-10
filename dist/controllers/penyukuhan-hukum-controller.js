"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const penyukuhan_hukum_service_1 = __importDefault(require("../services/penyukuhan-hukum-service"));
class PenyukuhanHukumController {
    async createPenyukuhanHukum(req, res) {
        try {
            const { title, waktu, deskripsi, kategori, type } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const penyukuhanHukum = await penyukuhan_hukum_service_1.default.createPenyukuhanHukum({
                title,
                waktu,
                deskripsi,
                kategori: kategoriJSON,
                type,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Penyukuhan Hukum berhasil dibuat",
                penyukuhanHukum,
            });
        }
        catch (error) {
            console.error("Error in createPenyukuhanHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllPenyukuhanHukum(req, res) {
        try {
            const result = await penyukuhan_hukum_service_1.default.getAllPenyukuhanHukum();
            res.status(200).json({
                success: true,
                message: "Penyukuhan Hukum berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllPenyukuhanHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updatePenyukuhanHukumById(req, res) {
        try {
            const { title, waktu, deskripsi, kategori, type } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                title,
                waktu,
                deskripsi,
                kategori: kategoriJSON,
                type,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedPenyukuhanHukum = await penyukuhan_hukum_service_1.default.updatePenyukuhanHukumById(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Penyukuhan Hukum berhasil diupdate",
                data: updatedPenyukuhanHukum,
            });
        }
        catch (error) {
            console.error("Error in updatePenyukuhanHukumById:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deletePenyukuhanHukumById(req, res) {
        try {
            const result = await penyukuhan_hukum_service_1.default.deletePenyukuhanHukumById(Number(req.params.id));
            res.status(200).json({
                success: true,
                message: "Penyukuhan Hukum berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deletePenyukuhanHukumById:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikPenyuluhanHukum(req, res) {
        try {
            const { kegiatanPenyuluhan, pesertaTeredukasi, institusiMitra, totalPenyuluhan, slogan, deskripsi, } = req.body;
            const statistikPenyuluhanHukum = await penyukuhan_hukum_service_1.default.createStatistikPenyuluhanHukum({
                kegiatanPenyuluhan,
                pesertaTeredukasi,
                institusiMitra,
                totalPenyuluhan,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Penyuluhan Hukum berhasil dibuat",
                statistikPenyuluhanHukum,
            });
        }
        catch (error) {
            console.error("Error in createStatistikPenyuluhanHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikPenyuluhanHukum(req, res) {
        try {
            const result = await penyukuhan_hukum_service_1.default.getAllStatistikPenyuluhanHukum();
            res.status(200).json({
                success: true,
                message: "Statistik Penyuluhan Hukum berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikPenyuluhanHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikPenyuluhanHukumById(req, res) {
        try {
            const { kegiatanPenyuluhan, pesertaTeredukasi, institusiMitra, totalPenyuluhan, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                kegiatanPenyuluhan,
                pesertaTeredukasi,
                institusiMitra,
                totalPenyuluhan,
                slogan,
                deskripsi,
            };
            const updatedStatistikPenyuluhanHukum = await penyukuhan_hukum_service_1.default.updateStatistikPenyuluhanHukumById(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Penyuluhan Hukum berhasil diupdate",
                data: updatedStatistikPenyuluhanHukum,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikPenyuluhanHukumById:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikPenyuluhanHukumById(req, res) {
        try {
            const result = await penyukuhan_hukum_service_1.default.deleteStatistikPenyuluhanHukumById(Number(req.params.id));
            res.status(200).json({
                success: true,
                message: "Statistik Penyuluhan Hukum berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikPenyuluhanHukumById:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new PenyukuhanHukumController();
