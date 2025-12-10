"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const visi_misi_lbkh_1 = __importDefault(require("../services/visi-misi-lbkh"));
class VisiMisiLBKHController {
    async createVisiMisiLBKH(req, res) {
        try {
            const { type, title, deskripsi, kategori } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const visMisiLBKH = await visi_misi_lbkh_1.default.createVisiMisiLBKH({
                type,
                title,
                deskripsi,
                kategori: kategoriJSON,
                foto: req.files?.["foto"][0],
            });
            res.status(201).json({
                success: true,
                message: "Vis Misi LBKH berhasil dibuat",
                data: visMisiLBKH,
            });
        }
        catch (error) {
            console.error("Error in createVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal membuat vis misi lbkh",
            });
        }
    }
    async getAllVisiMisiLBKH(req, res) {
        try {
            const visiMisiLBKH = await visi_misi_lbkh_1.default.getAllVisiMisiLBKH();
            return res.status(200).json({
                success: true,
                message: "Vis Misi LBKH berhasil diambil",
                data: visiMisiLBKH,
            });
        }
        catch (error) {
            console.error("Error in getAllVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil vis misi lbkh",
            });
        }
    }
    async updateVisiMisiLBKH(req, res) {
        try {
            const { type, title, deskripsi, kategori } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                type,
                title,
                deskripsi,
                kategori: kategoriJSON,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const visMisiLBKH = await visi_misi_lbkh_1.default.updateVisiMisiLBKH(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Vis Misi LBKH berhasil diupdate",
                data: visMisiLBKH,
            });
        }
        catch (error) {
            console.error("Error in updateVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengupdate vis misi lbkh",
            });
        }
    }
    async deleteVisiMisiLBKH(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await visi_misi_lbkh_1.default.deleteVisiMisiLBKH(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus data",
            });
        }
    }
    async createStatistikVisiMisiLBKH(req, res) {
        try {
            const { paralegaf, kasusDitangani, advokatAktif, tingkatKepuasan, slogan, deskripsi, } = req.body;
            const statistikVisiMisiLBKH = await visi_misi_lbkh_1.default.createStatistikVisiMisiLBKH({
                paralegaf,
                kasusDitangani,
                advokatAktif,
                tingkatKepuasan,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik vis misi lbkh berhasil dibuat",
                data: statistikVisiMisiLBKH,
            });
        }
        catch (error) {
            console.error("Error in createStatistikVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal membuat statistik vis misi lbkh",
            });
        }
    }
    async getAllStatistikVisiMisiLBKH(req, res) {
        try {
            const statistikVisiMisiLBKH = await visi_misi_lbkh_1.default.getAllStatistikVisiMisiLBKH();
            return res.status(200).json({
                success: true,
                message: "Statistik vis misi lbkh berhasil diambil",
                data: statistikVisiMisiLBKH,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik vis misi lbkh",
            });
        }
    }
    async updateStatistikVisiMisiLBKH(req, res) {
        try {
            const { id } = req.params;
            const { paralegaf, kasusDitangani, advokatAktif, tingkatKepuasan, slogan, deskripsi, } = req.body;
            const updatedData = await visi_misi_lbkh_1.default.updateStatistikVisiMisiLBKH(Number(id), {
                paralegaf,
                kasusDitangani,
                advokatAktif,
                tingkatKepuasan,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik vis misi lbkh berhasil diupdate",
                data: updatedData,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengupdate statistik vis misi lbkh",
            });
        }
    }
    async deleteStatistikVisiMisiLBKH(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await visi_misi_lbkh_1.default.deleteStatistikVisiMisiLBKH(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikVisiMisiLBKH:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus data",
            });
        }
    }
}
exports.default = new VisiMisiLBKHController();
