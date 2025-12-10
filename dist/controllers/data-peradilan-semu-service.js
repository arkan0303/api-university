"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_peradilan_semu_service_1 = __importDefault(require("../services/data-peradilan-semu-service"));
class DataPeradilanSemuController {
    async createDataPeradilanSemu(req, res) {
        try {
            const { foto, title, deskripsi, jumlah } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const dataPeradilanSemu = await data_peradilan_semu_service_1.default.createDataPeradilanSemu({
                foto: req.files["foto"][0],
                title,
                deskripsi,
                jumlah,
            });
            res.status(201).json({
                success: true,
                message: "Data Peradilan Semu berhasil dibuat",
                data: dataPeradilanSemu,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getDataPeradilanSemu(req, res) {
        try {
            const dataPeradilanSemu = await data_peradilan_semu_service_1.default.getDataPeradilanSemu();
            res.status(200).json({
                success: true,
                message: "Data Peradilan Semu berhasil diambil",
                data: dataPeradilanSemu,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateDataPeradilanSemu(req, res) {
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
            const updatedDataPeradilanSemu = await data_peradilan_semu_service_1.default.updateDataPeradilanSemu(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Data Peradilan Semu berhasil diupdate",
                data: updatedDataPeradilanSemu,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteDataPeradilanSemu(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dataPeradilanSemu = await data_peradilan_semu_service_1.default.deleteDataPeradilanSemu(id);
            res.status(200).json({
                success: true,
                message: "Data Peradilan Semu berhasil dihapus",
                data: dataPeradilanSemu,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikPeradilanSemu(req, res) {
        try {
            const { sidangSemu, peserta, tingkatKepuasan, kasusSimulasi } = req.body;
            const statistikPeradilanSemu = await data_peradilan_semu_service_1.default.createStatistikPeradilanSemu({
                sidangSemu,
                peserta,
                tingkatKepuasan,
                kasusSimulasi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik Peradilan Semu berhasil dibuat",
                data: statistikPeradilanSemu,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikPeradilanSemu(req, res) {
        try {
            const statistikPeradilanSemu = await data_peradilan_semu_service_1.default.getStatistikPeradilanSemu();
            res.status(200).json({
                success: true,
                message: "Data Peradilan Semu berhasil diambil",
                data: statistikPeradilanSemu,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikPeradilanSemu(req, res) {
        try {
            const { id } = req.params;
            const { sidangSemu, peserta, tingkatKepuasan, kasusSimulasi } = req.body;
            const updateData = {
                sidangSemu,
                peserta,
                tingkatKepuasan,
                kasusSimulasi,
            };
            const updatedStatistikPKPA = await data_peradilan_semu_service_1.default.updateStatistikPeradilanSemu(Number(id), // Konversi id ke number
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
    async deleteStatistikPeradilanSemu(req, res) {
        try {
            const id = parseInt(req.params.id);
            const statistikPeradilanSemu = await data_peradilan_semu_service_1.default.deleteStatistikPeradilanSemu(id);
            res.status(200).json({
                success: true,
                message: "Statistik Peradilan Semu berhasil dihapus",
                data: statistikPeradilanSemu,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new DataPeradilanSemuController();
