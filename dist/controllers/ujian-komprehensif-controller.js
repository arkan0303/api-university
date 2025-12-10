"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ujian_komprehensif_service_1 = __importDefault(require("../services/ujian-komprehensif-service"));
class UjianKomprehensifController {
    async createUjianKomprehensif(req, res) {
        try {
            const { title, kategori, type, waktu, deskripsi } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const ujianKomprehensif = await ujian_komprehensif_service_1.default.createUjianKomprehensif({
                title,
                kategori: kategoriJson,
                foto: req.files["foto"]?.[0] || null,
                type,
                waktu,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: ujianKomprehensif,
            });
        }
        catch (error) {
            console.error("Error in createUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat ujian komprehensif",
            });
        }
    }
    async getAllUjianKomprehensif(req, res) {
        try {
            const ujianKomprehensif = await ujian_komprehensif_service_1.default.getAllUjianKomprehensif();
            return res.status(200).json({
                success: true,
                data: ujianKomprehensif,
            });
        }
        catch (error) {
            console.error("Error in getAllUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil ujian komprehensif",
            });
        }
    }
    async updateUjianKomprehensif(req, res) {
        try {
            const { title, kategori, type, waktu, deskripsi } = req.body;
            const id = req.params.id;
            const kategoriJson = JSON.parse(kategori);
            const updateData = {
                title,
                kategori: kategoriJson,
                type,
                waktu,
                deskripsi,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedUjianKomprehensif = await ujian_komprehensif_service_1.default.updateUjianKomprehensif(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Ujian komprehensif berhasil diupdate",
                data: updatedUjianKomprehensif,
            });
        }
        catch (error) {
            console.error("Error in updateUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate ujian komprehensif",
            });
        }
    }
    async deleteUjianKomprehensif(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await ujian_komprehensif_service_1.default.deleteUjianKomprehensif(Number(id));
            return res.status(200).json({
                success: true,
                message: "Ujian komprehensif berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus ujian komprehensif",
            });
        }
    }
    async createStatistikUjianKomprehensif(req, res) {
        try {
            const { perTahun, tingkatKelulusan, penguji, menitUjian, slogan, deskripsi, } = req.body;
            const statistikUjianKomprehensif = await ujian_komprehensif_service_1.default.createStatistikUjianKomprehensif({
                perTahun,
                tingkatKelulusan,
                penguji,
                menitUjian,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikUjianKomprehensif,
            });
        }
        catch (error) {
            console.error("Error in createStatistikUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik ujian komprehensif",
            });
        }
    }
    async getAllStatistikUjianKomprehensif(req, res) {
        try {
            const statistikUjianKomprehensif = await ujian_komprehensif_service_1.default.getAllStatistikUjianKomprehensif();
            return res.status(200).json({
                success: true,
                data: statistikUjianKomprehensif,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik ujian komprehensif",
            });
        }
    }
    async updateStatistikUjianKomprehensif(req, res) {
        try {
            const { id } = req.params;
            const { perTahun, tingkatKelulusan, penguji, menitUjian, slogan, deskripsi, } = req.body;
            const updatedStatistikUjianKomprehensif = await ujian_komprehensif_service_1.default.updateStatistikUjianKomprehensif(Number(id), {
                perTahun,
                tingkatKelulusan,
                penguji,
                menitUjian,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik ujian komprehensif berhasil diupdate",
                data: updatedStatistikUjianKomprehensif,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate statistik ujian komprehensif",
            });
        }
    }
    async deleteStatistikUjianKomprehensif(req, res) {
        try {
            const { id } = req.params;
            const deletedStatistikUjianKomprehensif = await ujian_komprehensif_service_1.default.deleteStatistikUjianKomprehensif(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik ujian komprehensif berhasil dihapus",
                data: deletedStatistikUjianKomprehensif,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikUjianKomprehensif:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik ujian komprehensif",
            });
        }
    }
}
exports.default = new UjianKomprehensifController();
