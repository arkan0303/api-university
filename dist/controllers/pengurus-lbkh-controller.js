"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pengurus_lbkh_service_1 = __importDefault(require("../services/pengurus-lbkh-service"));
class PengurusLBKHController {
    async createPengurusLbkh(req, res) {
        try {
            const { nama, deskripsi, jabatan, kategori, email, noTelp } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const pengurusLbkh = await pengurus_lbkh_service_1.default.createPengurusLBKH({
                nama,
                deskripsi,
                jabatan,
                kategori: kategoriJSON,
                email,
                noTelp,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Pengurus LBKH berhasil dibuat",
                pengurusLbkh,
            });
        }
        catch (error) {
            console.error("Error in createPengurusLbkh:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllPengurusLbkh(req, res) {
        try {
            const pengurusLbkh = await pengurus_lbkh_service_1.default.getAllPengurusLBKH();
            return res.status(200).json({
                success: true,
                message: "Pengurus LBKH berhasil diambil",
                data: pengurusLbkh,
            });
        }
        catch (error) {
            console.error("Error in getAllPengurusLbkh:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updatePengurusLbkh(req, res) {
        try {
            const { nama, deskripsi, jabatan, kategori, email, noTelp } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                nama,
                deskripsi,
                jabatan,
                kategori: kategoriJSON,
                email,
                noTelp,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedPengurusLbkh = await pengurus_lbkh_service_1.default.updatePengurusLBKH(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Pengurus LBKH berhasil diupdate",
                data: updatedPengurusLbkh,
            });
        }
        catch (error) {
            console.error("Error in updatePengurusLbkh:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deletePengurusLbkh(req, res) {
        try {
            const id = req.params.id;
            const deletedPengurusLbkh = await pengurus_lbkh_service_1.default.deletePengurusLBKH(Number(id));
            return res.status(200).json({
                success: true,
                message: "Pengurus LBKH berhasil dihapus",
                data: deletedPengurusLbkh,
            });
        }
        catch (error) {
            console.error("Error in deletePengurusLbkh:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikPengurusLBKH(req, res) {
        try {
            const { total, kasusDitangani, advokatAktif, tahunPengalaman, slogan, deskripsi, } = req.body;
            const statistikPengurusLBKH = await pengurus_lbkh_service_1.default.createStatistikPengurusLBKH({
                total,
                kasusDitangani,
                advokatAktif,
                tahunPengalaman,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Pengurus LBKH berhasil dibuat",
                statistikPengurusLBKH,
            });
        }
        catch (error) {
            console.error("Error in createStatistikPengurusLBKH:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikPengurusLBKH(req, res) {
        try {
            const statistikPengurusLBKH = await pengurus_lbkh_service_1.default.getAllStatistikPengurusLBKH();
            return res.status(200).json({
                success: true,
                message: "Statistik Pengurus LBKH berhasil diambil",
                data: statistikPengurusLBKH,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikPengurusLBKH:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikPengurusLBKH(req, res) {
        try {
            const { total, kasusDitangani, advokatAktif, tahunPengalaman, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                total,
                kasusDitangani,
                advokatAktif,
                tahunPengalaman,
                slogan,
                deskripsi,
            };
            const updatedStatistikPengurusLBKH = await pengurus_lbkh_service_1.default.updateStatistikPengurusLBKH(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Pengurus LBKH berhasil diupdate",
                data: updatedStatistikPengurusLBKH,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikPengurusLBKH:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikPengurusLBKH(req, res) {
        try {
            const id = req.params.id;
            const deletedStatistikPengurusLBKH = await pengurus_lbkh_service_1.default.deleteStatistikPengurusLBKH(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik Pengurus LBKH berhasil dihapus",
                data: deletedStatistikPengurusLBKH,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikPengurusLBKH:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new PengurusLBKHController();
