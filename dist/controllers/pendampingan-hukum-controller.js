"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pendampingan_hukum_service_1 = __importDefault(require("../services/pendampingan-hukum-service"));
class PendampinganHukumController {
    async createPendampinganHukum(req, res) {
        try {
            const { title, deskripsi, kategori, waktu } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const pendampinganHukum = await pendampingan_hukum_service_1.default.createPendampinganHukum({
                title,
                deskripsi,
                kategori: kategoriJSON,
                waktu,
                foto: req.files?.["foto"][0],
            });
            console.log(pendampinganHukum);
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
    async getAllPendampinganHukum(req, res) {
        try {
            const pendampinganHukum = await pendampingan_hukum_service_1.default.getAllPendampinganHukum();
            return res.status(200).json({
                success: true,
                message: "Pendampingan Hukum berhasil diambil",
                data: pendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllPendampinganHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil konsultasi hukum",
            });
        }
    }
    async updatePendampinganHukum(req, res) {
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
            const updatedPendampinganHukum = await pendampingan_hukum_service_1.default.updatePendampinganHukum(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Pendampingan Hukum berhasil diupdate",
                data: updatedPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in updatePendampinganHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deletePendampinganHukum(req, res) {
        try {
            const id = req.params.id;
            const deletedPendampinganHukum = await pendampingan_hukum_service_1.default.deletePendampinganHukum(Number(id));
            return res.status(200).json({
                success: true,
                message: "Pendampingan Hukum berhasil dihapus",
                data: deletedPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in deletePendampinganHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createProsedurPendampinganHukum(req, res) {
        try {
            const { title, deskripsi, waktu } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const prosedurPendampinganHukum = await pendampingan_hukum_service_1.default.createProsedurPendampinganHukum({
                title,
                deskripsi,
                waktu,
                foto: req.files?.["foto"][0],
            });
            return res.status(200).json({
                success: true,
                message: "Prosedur Pendampingan Hukum berhasil dibuat",
                data: prosedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in createProsedurPendampinganHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat prosedur konsultasi",
            });
        }
    }
    async getAllProsedurPendampinganHukum(req, res) {
        try {
            const prosedurPendampinganHukum = await pendampingan_hukum_service_1.default.getAllProsedurPendampinganHukum();
            return res.status(200).json({
                success: true,
                message: "Prosedur Pendampingan Hukum berhasil diambil",
                data: prosedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllProsedurPendampinganHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil prosedur pendampingan hukum",
            });
        }
    }
    async updateProsedurPendampinganHukum(req, res) {
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
            const updatedProsedurPendampinganHukum = await pendampingan_hukum_service_1.default.updateProsedurPendampinganHukum(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Prosedur Pendampingan Hukum berhasil diupdate",
                data: updatedProsedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in updateProsedurPendampinganHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteProsedurPendampinganHukum(req, res) {
        try {
            const id = req.params.id;
            const deletedProsedurPendampinganHukum = await pendampingan_hukum_service_1.default.deleteProsedurPendampinganHukum(Number(id));
            return res.status(200).json({
                success: true,
                message: "Prosedur Pendampingan Hukum berhasil dihapus",
                data: deletedProsedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in deleteProsedurPendampinganHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikProsedurPendampinganHukum(req, res) {
        try {
            const { kasusDidampingi, tingkatKeberhasilan, advokatBerpengalaman, totalPendampingan, slogan, deskripsi, } = req.body;
            console.log(req.body);
            const statistikProsedurPendampinganHukum = await pendampingan_hukum_service_1.default.createStatistikProsedurPendampinganHukum({
                kasusDidampingi,
                tingkatKeberhasilan,
                advokatBerpengalaman,
                totalPendampingan,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pendampingan Hukum berhasil dibuat",
                data: statistikProsedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in createStatistikProsedurPendampinganHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik prosedur konsultasi",
            });
        }
    }
    async getAllStatistikProsedurPendampinganHukum(req, res) {
        try {
            const statistikProsedurPendampinganHukum = await pendampingan_hukum_service_1.default.getAllStatistikProsedurPendampinganHukum();
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pendampingan Hukum berhasil diambil",
                data: statistikProsedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikProsedurPendampinganHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik prosedur konsultasi",
            });
        }
    }
    async updateStatistikProsedurPendampinganHukum(req, res) {
        try {
            const { kasusDidampingi, tingkatKeberhasilan, advokatBerpengalaman, totalPendampingan, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                kasusDidampingi,
                tingkatKeberhasilan,
                advokatBerpengalaman,
                totalPendampingan,
                slogan,
                deskripsi,
            };
            const updatedStatistikProsedurPendampinganHukum = await pendampingan_hukum_service_1.default.updateStatistikProsedurPendampinganHukum(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pendampingan Hukum berhasil diupdate",
                data: updatedStatistikProsedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikProsedurPendampinganHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikProsedurPendampinganHukum(req, res) {
        try {
            const id = req.params.id;
            const deletedStatistikProsedurPendampinganHukum = await pendampingan_hukum_service_1.default.deleteStatistikProsedurPendampinganHukum(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik Prosedur Pendampingan Hukum berhasil dihapus",
                data: deletedStatistikProsedurPendampinganHukum,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikProsedurPendampinganHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new PendampinganHukumController();
