"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const advokat_paralegal_service_1 = __importDefault(require("../services/advokat-paralegal-service"));
class AdvokatParalegalController {
    async createAdvokatParalegal(req, res) {
        try {
            const { type, nama, jabatan, deskripsi, kategori, email, noTelp, note } = req.body;
            const kategoriJson = JSON.parse(kategori);
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const createAdvokatParalegal = await advokat_paralegal_service_1.default.createAdvokatParalegal({
                type,
                nama,
                jabatan,
                deskripsi,
                kategori: kategoriJson,
                email,
                noTelp,
                note,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Advokat Paralegal berhasil dibuat",
                data: createAdvokatParalegal,
            });
        }
        catch (error) {
            console.error("Error in createAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllAdvokatParalegal(req, res) {
        try {
            const getAllAdvokatParalegal = await advokat_paralegal_service_1.default.getAllAdvokatParalegal();
            return res.status(200).json({
                success: true,
                message: "Advokat Paralegal berhasil diambil",
                data: getAllAdvokatParalegal,
            });
        }
        catch (error) {
            console.error("Error in getAllAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateAdvokatParalegal(req, res) {
        try {
            const { type, nama, jabatan, deskripsi, kategori, email, noTelp, note } = req.body;
            const id = req.params.id;
            const kategoriJson = JSON.parse(kategori);
            const updateData = {
                type,
                nama,
                jabatan,
                deskripsi,
                kategori: kategoriJson,
                email,
                noTelp,
                note,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedAdvokatParalegal = await advokat_paralegal_service_1.default.updateAdvokatParalegal(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Advokat Paralegal berhasil diupdate",
                data: updatedAdvokatParalegal,
            });
        }
        catch (error) {
            console.error("Error in updateAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteAdvokatParalegal(req, res) {
        try {
            const result = await advokat_paralegal_service_1.default.deleteAdvokatParalegal(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Advokat Paralegal berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikAdvokatParalegal(req, res) {
        try {
            const { paralegal, kasusDitangani, advokatAktif, tingkatKepuasan, slogan, deskripsi, } = req.body;
            const createStatistikAdvokatParalegal = await advokat_paralegal_service_1.default.createStatistikAdvokatParalegal({
                paralegal,
                kasusDitangani,
                advokatAktif,
                tingkatKepuasan,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Advokat Paralegal berhasil dibuat",
                data: createStatistikAdvokatParalegal,
            });
        }
        catch (error) {
            console.error("Error in createStatistikAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikAdvokatParalegal(req, res) {
        try {
            const getAllStatistikAdvokatParalegal = await advokat_paralegal_service_1.default.getAllStatistikAdvokatParalegal();
            return res.status(200).json({
                success: true,
                message: "Statistik Advokat Paralegal berhasil diambil",
                data: getAllStatistikAdvokatParalegal,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikAdvokatParalegal(req, res) {
        try {
            const { paralegal, kasusDitangani, advokatAktif, tingkatKepuasan, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                paralegal,
                kasusDitangani,
                advokatAktif,
                tingkatKepuasan,
                slogan,
                deskripsi,
            };
            const updatedStatistikAdvokatParalegal = await advokat_paralegal_service_1.default.updateStatistikAdvokatParalegal(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Advokat Paralegal berhasil diupdate",
                data: updatedStatistikAdvokatParalegal,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikAdvokatParalegal(req, res) {
        try {
            const result = await advokat_paralegal_service_1.default.deleteStatistikAdvokatParalegal(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Advokat Paralegal berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikAdvokatParalegal:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new AdvokatParalegalController();
