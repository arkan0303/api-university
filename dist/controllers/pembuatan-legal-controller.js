"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pembuatan_legal_service_1 = __importDefault(require("../services/pembuatan-legal-service"));
class PembuatanLegalController {
    async createPembuatanLegal(req, res) {
        try {
            const { title, deskripsi, kategori, waktu } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const pendampinganHukum = await pembuatan_legal_service_1.default.createPembuatanLegal({
                title,
                deskripsi,
                kategori: kategoriJSON,
                waktu,
                foto: req.files?.["foto"][0],
            });
            return res.status(200).json({
                success: true,
                message: "Pendampingan Hukum berhasil dibuat",
                data: pendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in createPendampinganHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat konsultasi hukum",
            });
        }
    }
    async getAllPembuatanLegal(req, res) {
        try {
            const pembuatanLegal = await pembuatan_legal_service_1.default.getAllPembuatanLegal();
            return res.status(200).json({
                success: true,
                message: "Pembuatan Legal berhasil diambil",
                data: pembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in getAllPembuatanLegal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil konsultasi hukum",
            });
        }
    }
    async updatePembuatanLegal(req, res) {
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
            const updatedPembuatanLegal = await pembuatan_legal_service_1.default.updatePembuatanLegal(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Pembuatan Legal berhasil diupdate",
                data: updatedPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in updatePembuatanLegal:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deletePembuatanLegal(req, res) {
        try {
            const id = req.params.id;
            const deletedPembuatanLegal = await pembuatan_legal_service_1.default.deletePembuatanLegal(Number(id));
            return res.status(200).json({
                success: true,
                message: "Pembuatan Legal berhasil dihapus",
                data: deletedPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in deletePembuatanLegal:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createProsedurPembuatanLegal(req, res) {
        try {
            const { title, deskripsi, waktu } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const prosedurPembuatanLegal = await pembuatan_legal_service_1.default.createProsedurPembuatanLegal({
                title,
                deskripsi,
                waktu,
                foto: req.files?.["foto"][0],
            });
            return res.status(200).json({
                success: true,
                message: "Prosedur Pembuatan Legal berhasil dibuat",
                data: prosedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in createProsedurPembuatanLegal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat prosedur pembuatan legal",
            });
        }
    }
    async getAllProsedurPembuatanLegal(req, res) {
        try {
            const prosedurPembuatanLegal = await pembuatan_legal_service_1.default.getAllProsedurPembuatanLegal();
            return res.status(200).json({
                success: true,
                message: "Prosedur Pembuatan Legal berhasil diambil",
                data: prosedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in getAllProsedurPembuatanLegal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil prosedur pendampingan hukum",
            });
        }
    }
    async updateProsedurPembuatanLegal(req, res) {
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
            const updatedProsedurPembuatanLegal = await pembuatan_legal_service_1.default.updateProsedurPembuatanLegal(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Prosedur Pembuatan Legal berhasil diupdate",
                data: updatedProsedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in updateProsedurPembuatanLegal:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteProsedurPembuatanLegal(req, res) {
        try {
            const id = req.params.id;
            const deletedProsedurPembuatanLegal = await pembuatan_legal_service_1.default.deleteProsedurPembuatanLegal(Number(id));
            return res.status(200).json({
                success: true,
                message: "Prosedur Pembuatan Legal berhasil dihapus",
                data: deletedProsedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in deleteProsedurPembuatanLegal:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikProsedurPembuatanLegal(req, res) {
        try {
            const { legalOpinianPerTahun, tingkatKepuasan, ahliHukum, totalPembuatan, slogan, deskripsi, } = req.body;
            console.log(req.body);
            const statistikProsedurPembuatanLegal = await pembuatan_legal_service_1.default.createStatistikProsedurPembuatanLegal({
                legalOpinianPerTahun,
                tingkatKepuasan,
                ahliHukum,
                totalPembuatan,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pembuatan Legal berhasil dibuat",
                data: statistikProsedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in createStatistikProsedurPembuatanLegal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik prosedur konsultasi",
            });
        }
    }
    async getAllStatistikProsedurPembuatanLegal(req, res) {
        try {
            const statistikProsedurPembuatanLegal = await pembuatan_legal_service_1.default.getAllStatistikProsedurPembuatanLegal();
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pembuatan Legal berhasil diambil",
                data: statistikProsedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikProsedurPembuatanLegal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik prosedur konsultasi",
            });
        }
    }
    async updateStatistikProsedurPembuatanLegal(req, res) {
        try {
            const { legalOpinianPerTahun, tingkatKepuasan, ahliHukum, totalPembuatan, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                legalOpinianPerTahun,
                tingkatKepuasan,
                ahliHukum,
                totalPembuatan,
                slogan,
                deskripsi,
            };
            const updatedStatistikProsedurPembuatanLegal = await pembuatan_legal_service_1.default.updateStatistikProsedurPembuatanLegal(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pembuatan Legal berhasil diupdate",
                data: updatedStatistikProsedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikProsedurPembuatanLegal:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikProsedurPembuatanLegal(req, res) {
        try {
            const id = req.params.id;
            const deletedStatistikProsedurPembuatanLegal = await pembuatan_legal_service_1.default.deleteStatistikProsedurPembuatanLegal(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pembuatan Legal berhasil dihapus",
                data: deletedStatistikProsedurPembuatanLegal,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikProsedurPembuatanLegal:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new PembuatanLegalController();
