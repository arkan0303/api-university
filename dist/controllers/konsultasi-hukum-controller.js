"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const konsultasi_hukum_service_1 = __importDefault(require("../services/konsultasi-hukum-service"));
class KonsultasiHukumController {
    async createKonsultasiHukum(req, res) {
        try {
            const { title, deskripsi, kategori, waktu } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const konsultasiHukum = await konsultasi_hukum_service_1.default.createKonsultasiHukum({
                title,
                deskripsi,
                kategori: kategoriJSON,
                waktu,
                foto: req.files?.["foto"][0],
            });
            return res.status(200).json({
                success: true,
                message: "Konsultasi Hukum berhasil dibuat",
                data: konsultasiHukum,
            });
        }
        catch (error) {
            console.error("Error in createKonsultasiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat konsultasi hukum",
            });
        }
    }
    async getAllKonsultasiHukum(req, res) {
        try {
            const konsultasiHukum = await konsultasi_hukum_service_1.default.getAllKonsultasiHukum();
            return res.status(200).json({
                success: true,
                message: "Konsultasi Hukum berhasil diambil",
                data: konsultasiHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllKonsultasiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil konsultasi hukum",
            });
        }
    }
    async updateKonsultasiHukum(req, res) {
        try {
            const { title, kategori, deskripsi, waktu } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                title,
                deskripsi,
                kategori: kategoriJSON,
                waktu,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedKonsultasiHukum = await konsultasi_hukum_service_1.default.updateKonsultasiHukum(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Konsultasi Hukum berhasil diupdate",
                data: updatedKonsultasiHukum,
            });
        }
        catch (error) {
            console.error("Error in updateKonsultasiHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteKonsultasiHukum(req, res) {
        try {
            const id = req.params.id;
            const deletedKonsultasiHukum = await konsultasi_hukum_service_1.default.deleteKonsultasiHukum(Number(id));
            return res.status(200).json({
                success: true,
                message: "Konsultasi Hukum berhasil dihapus",
                data: deletedKonsultasiHukum,
            });
        }
        catch (error) {
            console.error("Error in deleteKonsultasiHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createProsedurKonsultasi(req, res) {
        try {
            const { title, deskripsi, waktu } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const prosedurKonsultasi = await konsultasi_hukum_service_1.default.createProsedurKonsultasi({
                title,
                deskripsi,
                waktu,
                foto: req.files?.["foto"][0],
            });
            return res.status(200).json({
                success: true,
                message: "Prosedur Konsultasi berhasil dibuat",
                data: prosedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in createProsedurKonsultasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat prosedur konsultasi",
            });
        }
    }
    async getAllProsedurKonsultasi(req, res) {
        try {
            const prosedurKonsultasi = await konsultasi_hukum_service_1.default.getAllProsedurKonsultasi();
            return res.status(200).json({
                success: true,
                message: "Prosedur Konsultasi berhasil diambil",
                data: prosedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in getAllProsedurKonsultasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil prosedur konsultasi",
            });
        }
    }
    async updateProsedurKonsultasi(req, res) {
        try {
            const { title, deskripsi, waktu } = req.body;
            const id = req.params.id;
            const updateData = {
                title,
                deskripsi,
                waktu,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedProsedurKonsultasi = await konsultasi_hukum_service_1.default.updateProsedurKonsultasi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Prosedur Konsultasi berhasil diupdate",
                data: updatedProsedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in updateProsedurKonsultasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteProsedurKonsultasi(req, res) {
        try {
            const id = req.params.id;
            const deletedProsedurKonsultasi = await konsultasi_hukum_service_1.default.deleteProsedurKonsultasi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Prosedur Konsultasi berhasil dihapus",
                data: deletedProsedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in deleteProsedurKonsultasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikProsedurKonsultasi(req, res) {
        try {
            const { konsultasiPerBulan, tingkatKepuasan, konsultasiAktif, totalKonsultasi, slogan, deskripsi, } = req.body;
            const statistikProsedurKonsultasi = await konsultasi_hukum_service_1.default.createStatistikProsedurKonsultasi({
                konsultasiPerBulan,
                tingkatKepuasan,
                konsultasiAktif,
                totalKonsultasi,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Konsultasi berhasil dibuat",
                data: statistikProsedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in createStatistikProsedurKonsultasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik prosedur konsultasi",
            });
        }
    }
    async getAllStatistikProsedurKonsultasi(req, res) {
        try {
            const statistikProsedurKonsultasi = await konsultasi_hukum_service_1.default.getAllStatistikProsedurKonsultasi();
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Konsultasi berhasil diambil",
                data: statistikProsedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikProsedurKonsultasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik prosedur konsultasi",
            });
        }
    }
    async updateStatistikProsedurKonsultasi(req, res) {
        try {
            const { konsultasiPerBulan, tingkatKepuasan, konsultasiAktif, totalKonsultasi, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                konsultasiPerBulan,
                tingkatKepuasan,
                konsultasiAktif,
                totalKonsultasi,
                slogan,
                deskripsi,
            };
            const updatedStatistikProsedurKonsultasi = await konsultasi_hukum_service_1.default.updateStatistikProsedurKonsultasi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Konsultasi berhasil diupdate",
                data: updatedStatistikProsedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikProsedurKonsultasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikProsedurKonsultasi(req, res) {
        try {
            const id = req.params.id;
            const deletedStatistikProsedurKonsultasi = await konsultasi_hukum_service_1.default.deleteStatistikProsedurKonsultasi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Konsultasi berhasil dihapus",
                data: deletedStatistikProsedurKonsultasi,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikProsedurKonsultasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new KonsultasiHukumController();
