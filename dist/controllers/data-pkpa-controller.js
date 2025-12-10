"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_pkpa_service_1 = __importDefault(require("../services/data-pkpa-service"));
class DataPKPAController {
    async createDataPKPA(req, res) {
        try {
            const { foto, title, deskripsi, jumlah } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const dataPKPA = await data_pkpa_service_1.default.createDataPKPA({
                foto: req.files["foto"][0],
                title,
                deskripsi,
                jumlah,
            });
            res.status(201).json({
                success: true,
                message: "Data PKPA berhasil dibuat",
                data: dataPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getDataPKPA(req, res) {
        try {
            const dataPKPA = await data_pkpa_service_1.default.getDataPKPA();
            res.status(200).json({
                success: true,
                message: "Data PKPA berhasil diambil",
                data: dataPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateDataPKPA(req, res) {
        try {
            const { id } = req.params;
            const { title, deskripsi, jumlah, foto } = req.body;
            const updateData = {
                title,
                deskripsi,
                jumlah,
                foto,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedDataPKPA = await data_pkpa_service_1.default.updateDataPKPA(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Data PKPA berhasil diupdate",
                data: updatedDataPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteDataPKPA(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dataPKPA = await data_pkpa_service_1.default.deleteDataPKPA(id);
            res.status(200).json({
                success: true,
                message: "Data PKPA berhasil dihapus",
                data: dataPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikPKPA(req, res) {
        try {
            const { pesertaPKPA, angkatan, tingkatKelulusan, mitraHukum } = req.body;
            const statistikPKPA = await data_pkpa_service_1.default.createStatistikPKPA({
                pesertaPKPA,
                angkatan,
                tingkatKelulusan,
                mitraHukum,
            });
            res.status(201).json({
                success: true,
                message: "Statistik PKPA berhasil dibuat",
                data: statistikPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikPKPA(req, res) {
        try {
            const statistikPKPA = await data_pkpa_service_1.default.getStatistikPKPA();
            res.status(200).json({
                success: true,
                message: "Data PKPA berhasil diambil",
                data: statistikPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikPKPA(req, res) {
        try {
            const { id } = req.params;
            const { pesertaPKPA, angkatan, tingkatKelulusan, mitraHukum } = req.body;
            const updateData = {
                pesertaPKPA,
                angkatan,
                tingkatKelulusan,
                mitraHukum,
            };
            const updatedStatistikPKPA = await data_pkpa_service_1.default.updateStatistikPKPA(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik PKPA berhasil diupdate",
                data: updatedStatistikPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikPKPA(req, res) {
        try {
            const id = parseInt(req.params.id);
            const statistikPKPA = await data_pkpa_service_1.default.deleteStatistikPKPA(id);
            res.status(200).json({
                success: true,
                message: "Statistik PKPA berhasil dihapus",
                data: statistikPKPA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new DataPKPAController();
