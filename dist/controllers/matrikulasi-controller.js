"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const matrikulasi_service_1 = __importDefault(require("../services/matrikulasi-service"));
class MatrikulasiController {
    async createMatrikulasi(req, res) {
        try {
            const { title, kategori, deskripsi, type, waktu, sks } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const matrikulasi = await matrikulasi_service_1.default.create({
                title,
                deskripsi,
                type,
                waktu,
                sks,
                kategori: kategoriJSON,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Matrikulasi berhasil dibuat",
                matrikulasi,
            });
        }
        catch (error) {
            console.error("Error in createMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllMatrikulasi(req, res) {
        try {
            const matrikulasi = await matrikulasi_service_1.default.getAllMatrikulasi();
            return res.status(200).json({
                success: true,
                message: "Matrikulasi berhasil diambil",
                data: matrikulasi,
            });
        }
        catch (error) {
            console.error("Error in getAllMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateMatrikulasi(req, res) {
        try {
            const { title, kategori, deskripsi, type, waktu, sks } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                title,
                deskripsi,
                type,
                waktu,
                sks,
                kategori: kategoriJSON,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedMatrikulasi = await matrikulasi_service_1.default.updateMatrikulasi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Matrikulasi berhasil diupdate",
                data: updatedMatrikulasi,
            });
        }
        catch (error) {
            console.error("Error in updateMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteMatrikulasi(req, res) {
        try {
            const id = req.params.id;
            const deletedMatrikulasi = await matrikulasi_service_1.default.deleteMatrikulasi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Matrikulasi berhasil dihapus",
                data: deletedMatrikulasi,
            });
        }
        catch (error) {
            console.error("Error in deleteMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikMatrikulasi(req, res) {
        try {
            const { durasi, sks, totalMataKuliah, kelulusan, slogan, deskripsi } = req.body;
            const statistikMatrikulasi = await matrikulasi_service_1.default.createStatistikMatrikulasi({
                durasi,
                sks,
                totalMataKuliah,
                kelulusan,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik matrikulasi berhasil dibuat",
                statistikMatrikulasi,
            });
        }
        catch (error) {
            console.error("Error in createStatistikMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikMatrikulasi(req, res) {
        try {
            const statistikMatrikulasi = await matrikulasi_service_1.default.getAllStatistikMatrikulasi();
            return res.status(200).json({
                success: true,
                message: "Statistik matrikulasi berhasil diambil",
                data: statistikMatrikulasi,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikMatrikulasi(req, res) {
        try {
            const { durasi, sks, totalMataKuliah, kelulusan, slogan, deskripsi } = req.body;
            const id = req.params.id;
            const updateData = {
                durasi,
                sks,
                totalMataKuliah,
                kelulusan,
                slogan,
                deskripsi,
            };
            const updatedStatistikMatrikulasi = await matrikulasi_service_1.default.updateStatistikMatrikulasi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik matrikulasi berhasil diupdate",
                data: updatedStatistikMatrikulasi,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikMatrikulasi(req, res) {
        try {
            const id = req.params.id;
            const deletedStatistikMatrikulasi = await matrikulasi_service_1.default.deleteStatistikMatrikulasi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik matrikulasi berhasil dihapus",
                data: deletedStatistikMatrikulasi,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikMatrikulasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new MatrikulasiController();
