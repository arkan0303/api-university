"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rekapitulasi_pengisian_service_1 = __importDefault(require("../services/rekapitulasi-pengisian-service"));
class RekapitulasiPengisianController {
    async createRekapitulasiPengisian(req, res) {
        try {
            const { programNama, angkatan, totalMahasiswa, jumlahResponden, kategori, persentasi, } = req.body;
            console.log(req.body);
            const katagoriJSON = JSON.parse(kategori);
            console.log(katagoriJSON);
            const strategis = await rekapitulasi_pengisian_service_1.default.createRekapitulasiPengisian({
                programNama,
                angkatan,
                totalMahasiswa,
                jumlahResponden,
                kategori: katagoriJSON,
                persentasi,
            });
            res.status(201).json({
                success: true,
                message: "Rekapitulasi pengisian berhasil ditambahkan",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllRekapitulasiPengisian(req, res) {
        try {
            const rekapitulasiPengisian = await rekapitulasi_pengisian_service_1.default.getAllRekapitulasiPengisian();
            res.status(200).json({
                success: true,
                message: "Rekapitulasi pengisian berhasil diambil",
                data: rekapitulasiPengisian,
            });
        }
        catch (error) {
            console.error("Error in getAllRekapitulasiPengisian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateRekapitulasiPengisian(req, res) {
        try {
            const { id } = req.params;
            const { programNama, angkatan, totalMahasiswa, jumlahResponden, kategori, persentasi, } = req.body;
            const katagoriJSON = JSON.parse(kategori);
            const updateData = {
                programNama,
                angkatan,
                totalMahasiswa,
                jumlahResponden,
                kategori: katagoriJSON,
                persentasi,
            };
            const updatedRekapitulasiPengisian = await rekapitulasi_pengisian_service_1.default.updateRekapitulasiPengisian(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Rekapitulasi pengisian berhasil diupdate",
                data: updatedRekapitulasiPengisian,
            });
        }
        catch (error) {
            console.error("Error in updateRekapitulasiPengisian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteRekapitulasiPengisian(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await rekapitulasi_pengisian_service_1.default.deleteRekapitulasiPengisian(Number(id));
            res.status(200).json({
                success: true,
                message: "Rekapitulasi pengisian berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteRekapitulasiPengisian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createRekapitulasiPerKategori(req, res) {
        try {
            const { programNama, totalMahasiswa, jumlahResponden, persentasi } = req.body;
            console.log(req.body);
            const strategis = await rekapitulasi_pengisian_service_1.default.createRekapitulasiPerKategori({
                programNama,
                totalMahasiswa,
                jumlahResponden,
                persentasi,
            });
            res.status(201).json({
                success: true,
                message: "Rekapitulasi per kategori berhasil ditambahkan",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllRekapitulasiPerKategori(req, res) {
        try {
            const rekapitulasiPerKategori = await rekapitulasi_pengisian_service_1.default.getAllRekapitulasiPerKategori();
            res.status(200).json({
                success: true,
                message: "Rekapitulasi per kategori berhasil diambil",
                data: rekapitulasiPerKategori,
            });
        }
        catch (error) {
            console.error("Error in getAllRekapitulasiPerKategori:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateRekapitulasiPerKategori(req, res) {
        try {
            const { id } = req.params;
            const { programNama, totalMahasiswa, jumlahResponden, persentasi } = req.body;
            const updateData = {
                programNama,
                totalMahasiswa,
                jumlahResponden,
                persentasi,
            };
            const updatedRekapitulasiPerKategori = await rekapitulasi_pengisian_service_1.default.updateRekapitulasiPerKategori(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Rekapitulasi per kategori berhasil diupdate",
                data: updatedRekapitulasiPerKategori,
            });
        }
        catch (error) {
            console.error("Error in updateRekapitulasiPerKategori:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteRekapitulasiPerKategori(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await rekapitulasi_pengisian_service_1.default.deleteRekapitulasiPerKategori(Number(id));
            res.status(200).json({
                success: true,
                message: "Rekapitulasi per kategori berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteRekapitulasiPerKategori:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikRekapitulasiPerKategori(req, res) {
        try {
            const { totalResponden, tingkatPartisipasi, formulirLengkap, dalamProses, slogan, deskripsi, } = req.body;
            console.log(req.body);
            const strategis = await rekapitulasi_pengisian_service_1.default.createStatistikRekapitulasiPerKategori({
                totalResponden,
                tingkatPartisipasi,
                formulirLengkap,
                dalamProses,
                slogan,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik rekapitulasi per kategori berhasil ditambahkan",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikRekapitulasiPerKategori(req, res) {
        try {
            const statistikRekapitulasiPerKategori = await rekapitulasi_pengisian_service_1.default.getAllStatistikRekapitulasiPerKategori();
            res.status(200).json({
                success: true,
                message: "Statistik rekapitulasi per kategori berhasil diambil",
                data: statistikRekapitulasiPerKategori,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikRekapitulasiPerKategori:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikRekapitulasiPerKategori(req, res) {
        try {
            const { id } = req.params;
            const { totalResponden, tingkatPartisipasi, formulirLengkap, dalamProses, slogan, deskripsi, } = req.body;
            const updateData = {
                totalResponden,
                tingkatPartisipasi,
                formulirLengkap,
                dalamProses,
                slogan,
                deskripsi,
            };
            const updatedStatistikRekapitulasiPerKategori = await rekapitulasi_pengisian_service_1.default.updateStatistikRekapitulasiPerKategori(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Statistik rekapitulasi per kategori berhasil diupdate",
                data: updatedStatistikRekapitulasiPerKategori,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikRekapitulasiPerKategori:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikRekapitulasiPerKategori(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await rekapitulasi_pengisian_service_1.default.deleteStatistikRekapitulasiPerKategori(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik rekapitulasi per kategori berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikRekapitulasiPerKategori:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new RekapitulasiPengisianController();
