"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rencanaStrategis_1 = __importDefault(require("../services/rencanaStrategis"));
class RencanaStrategisController {
    async createRencanaStrategis(req, res) {
        try {
            const { tahun, judul, katagori, deskripsi } = req.body;
            console.log(req.body);
            const galeriFiles = req.files?.["foto"] || [];
            const katagoriJSON = JSON.parse(katagori);
            console.log(katagoriJSON);
            const strategis = await rencanaStrategis_1.default.createStrategis({
                tahun,
                judul,
                katagori: katagoriJSON,
                deskripsi,
                foto: galeriFiles,
            });
            res.status(201).json({
                success: true,
                message: "Strategis berhasil dibuat",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in createRencanaStrategis:", error);
            res.status(500).json({ error: "Failed to create strategis" });
        }
    }
    async getAllRencanaStrategis(req, res) {
        try {
            const strategis = await rencanaStrategis_1.default.getAllStrategis();
            res.status(200).json({
                success: true,
                message: "Strategis berhasil diambil",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in getAllRencanaStrategis:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil strategis",
            });
        }
    }
    async updateRencanaStrategis(req, res) {
        try {
            const { id } = req.params;
            const { tahun, judul, katagori, deskripsi } = req.body;
            const katagoriJSON = JSON.parse(katagori);
            const updateData = {
                tahun,
                judul,
                katagori: katagoriJSON,
                deskripsi,
            };
            if (req.files?.["foto"]?.[0]) {
                const foto = req.files["foto"][0];
                updateData.foto = foto;
            }
            const strategis = await rencanaStrategis_1.default.updateStrategis(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Strategis berhasil diupdate",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in updateRencanaStrategis:", error);
            res.status(500).json({ error: "Failed to update strategis" });
        }
    }
    async deleteRencanaStrategis(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await rencanaStrategis_1.default.deleteStrategis(Number(id));
            res.status(200).json({
                success: true,
                message: "Strategis berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteRencanaStrategis:", error);
            res.status(500).json({ error: "Failed to delete strategis" });
        }
    }
    async createStatistikStrategis(req, res) {
        try {
            const { tahunRencana, targetStrategis, programAksi, targetAkreditas, slogan, deskripsi, } = req.body;
            const statistik = await rencanaStrategis_1.default.createStatistikStrategis({
                tahunRencana,
                targetStrategis,
                programAksi,
                targetAkreditas,
                slogan,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik strategis berhasil dibuat",
                data: statistik,
            });
        }
        catch (error) {
            console.error("Error in createStatistikStrategis:", error);
            res.status(500).json({ error: "Failed to create statistik strategis" });
        }
    }
    async getAllStatistikStrategis(req, res) {
        try {
            const statistiks = await rencanaStrategis_1.default.getAllStatistikStrategis();
            res.status(200).json({
                success: true,
                message: "Statistik strategis berhasil diambil",
                data: statistiks,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikStrategis:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik strategis",
            });
        }
    }
    async updateStatistikStrategis(req, res) {
        try {
            const { id } = req.params;
            const { tahunRencana, targetStrategis, programAksi, targetAkreditas, slogan, deskripsi, } = req.body;
            const statistik = await rencanaStrategis_1.default.updateStatistikStrategis(Number(id), {
                tahunRencana,
                targetStrategis,
                programAksi,
                targetAkreditas,
                slogan,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                message: "Statistik strategis berhasil diupdate",
                data: statistik,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikStrategis:", error);
            res.status(500).json({ error: "Failed to update statistik strategis" });
        }
    }
    async deleteStatistikStrategis(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await rencanaStrategis_1.default.deleteStatistikStrategis(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik strategis berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikStrategis:", error);
            res.status(500).json({ error: "Failed to delete statistik strategis" });
        }
    }
}
exports.default = new RencanaStrategisController();
