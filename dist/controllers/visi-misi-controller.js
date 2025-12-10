"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vis_misi_service_1 = __importDefault(require("../services/vis-misi-service"));
class VisMisiController {
    async createVisMisi(req, res) {
        try {
            const { type, title, deskripsi } = req.body;
            if (!req.files?.["gambar"] || req.files["gambar"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Gambar harus diupload",
                });
            }
            const visMisi = await vis_misi_service_1.default.createVisMisi({
                type,
                title,
                deskripsi,
                gambar: req.files?.["gambar"][0],
            });
            res.status(201).json(visMisi);
        }
        catch (error) {
            console.error("Error in createVisMisi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllVisMisi(req, res) {
        try {
            const visMisi = await vis_misi_service_1.default.getAllVisMisi();
            return res.status(200).json({
                success: true,
                message: "Vis Misi berhasil diambil",
                data: visMisi,
            });
        }
        catch (error) {
            console.error("Error in getAllVisMisi:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil vis misi",
            });
        }
    }
    async updateVisMisi(req, res) {
        try {
            const { type, title, deskripsi } = req.body;
            const id = req.params.id;
            const updateData = {
                type,
                title,
                deskripsi,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["gambar"]?.[0]) {
                updateData.gambar = req.files["gambar"][0];
            }
            const visMisi = await vis_misi_service_1.default.updateVisMisi(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Vis Misi berhasil diupdate",
                data: visMisi,
            });
        }
        catch (error) {
            console.error("Error in updateVisMisi:", error);
            const errorMessage = error instanceof Error
                ? error.message
                : "Terjadi kesalahan saat mengupdate data";
            res.status(500).json({
                success: false,
                message: errorMessage,
            });
        }
    }
    async deleteVisMisi(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await vis_misi_service_1.default.deleteVisMisi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteVisMisi:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus data",
            });
        }
    }
    async createStatistikVisiMisi(req, res) {
        try {
            const { tahunPengalaman, alumni, dosenBerkualitas, ProgramUnggula, slogan, deskripsi, } = req.body;
            const statistikVisiMisi = await vis_misi_service_1.default.createStatistikVisiMisi({
                tahunPengalaman,
                alumni,
                dosenBerkualitas,
                ProgramUnggula,
                slogan,
                deskripsi,
            });
            return res.status(201).json(statistikVisiMisi);
        }
        catch (error) {
            console.error("Error in createStatistikVisiMisi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikVisiMisi(req, res) {
        try {
            const statistikVisiMisi = await vis_misi_service_1.default.getAllStatistikVisiMisi();
            return res.status(200).json({
                success: true,
                message: "Statistik Vis Misi berhasil diambil",
                data: statistikVisiMisi,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikVisiMisi:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik vis misi",
            });
        }
    }
    async updateStatistikVisiMisi(req, res) {
        try {
            const { id } = req.params;
            const { tahunPengalaman, alumni, dosenBerkualitas, ProgramUnggula, slogan, deskripsi, } = req.body;
            const statistikVisiMisi = await vis_misi_service_1.default.updateStatistikVisiMisi(Number(id), {
                tahunPengalaman,
                alumni,
                dosenBerkualitas,
                ProgramUnggula,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Vis Misi berhasil diupdate",
                data: statistikVisiMisi,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikVisiMisi:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengupdate statistik vis misi",
            });
        }
    }
    async deleteStatistikVisiMisi(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await vis_misi_service_1.default.deleteStatistikVisiMisi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikVisiMisi:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus data",
            });
        }
    }
}
exports.default = new VisMisiController();
