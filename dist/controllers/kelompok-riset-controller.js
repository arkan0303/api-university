"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kelompok_riset_service_1 = __importDefault(require("../services/kelompok-riset-service"));
class KelompokRisetController {
    async createKelompokRiset(req, res) {
        try {
            const { title, fokusPenelitian, foto, namaMahasiswa, anggota, publikasi, deskripsi, status, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const fokusPenelitianJson = JSON.parse(fokusPenelitian);
            const kelompokRiset = await kelompok_riset_service_1.default.create({
                title,
                fokusPenelitian: fokusPenelitianJson,
                namaMahasiswa,
                anggota,
                publikasi,
                deskripsi,
                status,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Kelompok Riset berhasil dibuat",
                data: kelompokRiset,
            });
        }
        catch (error) {
            console.error("Error in createKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllKelompokRiset(req, res) {
        try {
            const kelompokRiset = await kelompok_riset_service_1.default.getAllKelompokRiset();
            return res.status(200).json({
                success: true,
                message: "Kelompok Riset berhasil diambil",
                data: kelompokRiset,
            });
        }
        catch (error) {
            console.error("Error in getAllKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateKelompokRiset(req, res) {
        try {
            const { title, deskripsi, fokusPenelitian, namaMahasiswa, anggota, publikasi, status, } = req.body;
            const id = req.params.id;
            const fokusPenelitianJson = JSON.parse(fokusPenelitian);
            const updateData = {
                title,
                deskripsi,
                fokusPenelitian: fokusPenelitianJson,
                namaMahasiswa,
                anggota,
                publikasi,
                status,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedKelompokRiset = await kelompok_riset_service_1.default.updateKelompokRiset(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Kelompok Riset berhasil diupdate",
                data: updatedKelompokRiset,
            });
        }
        catch (error) {
            console.error("Error in updateKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteKelompokRiset(req, res) {
        try {
            const result = await kelompok_riset_service_1.default.deleteKelompokRiset(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Kelompok Riset berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikKelompokRiset(req, res) {
        try {
            const { total, penelitianAktif, publikasiPerTahun, jurnalTerAkreditasi, slogan, deskripsi, } = req.body;
            const statistikKelompokRiset = await kelompok_riset_service_1.default.createStatistikKelompokRiset({
                total,
                penelitianAktif,
                publikasiPerTahun,
                jurnalTerAkreditasi,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Kelompok Riset berhasil dibuat",
                data: statistikKelompokRiset,
            });
        }
        catch (error) {
            console.error("Error in createStatistikKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikKelompokRiset(req, res) {
        try {
            const statistikKelompokRiset = await kelompok_riset_service_1.default.getAllStatistikKelompokRiset();
            return res.status(200).json({
                success: true,
                message: "Statistik Kelompok Riset berhasil diambil",
                data: statistikKelompokRiset,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikKelompokRiset(req, res) {
        try {
            const { total, penelitianAktif, publikasiPerTahun, jurnalTerAkreditasi, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                total,
                penelitianAktif,
                publikasiPerTahun,
                jurnalTerAkreditasi,
                slogan,
                deskripsi,
            };
            const updatedStatistikKelompokRiset = await kelompok_riset_service_1.default.updateStatistikKelompokRiset(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Kelompok Riset berhasil diupdate",
                data: updatedStatistikKelompokRiset,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikKelompokRiset(req, res) {
        try {
            const result = await kelompok_riset_service_1.default.deleteStatistikKelompokRiset(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Kelompok Riset berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikKelompokRiset:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new KelompokRisetController();
