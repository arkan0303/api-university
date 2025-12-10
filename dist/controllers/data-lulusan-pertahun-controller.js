"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_lulusan_pertahun_service_1 = __importDefault(require("../services/data-lulusan-pertahun-service"));
class DataLulusanPertahunController {
    async createDataLulusanPertahun(req, res) {
        try {
            const { foto, title, deskripsi, jumlah } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const dataLulusanPertahun = await data_lulusan_pertahun_service_1.default.createDataLulusanPertahun({
                foto: req.files["foto"][0],
                title,
                deskripsi,
                jumlah,
            });
            res.status(201).json({
                success: true,
                message: "Data Lulusan Pertahun berhasil dibuat",
                data: dataLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getDataLulusanPertahun(req, res) {
        try {
            const dataLulusanPertahun = await data_lulusan_pertahun_service_1.default.getDataLulusanPertahun();
            res.status(200).json({
                success: true,
                message: "Data Lulusan Pertahun berhasil diambil",
                data: dataLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateDataLulusanPertahun(req, res) {
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
            const updatedDataLulusanPertahun = await data_lulusan_pertahun_service_1.default.updateDataLulusanPertahun(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Data Lulusan Pertahun berhasil diupdate",
                data: updatedDataLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteDataLulusanPertahun(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dataLulusanPertahun = await data_lulusan_pertahun_service_1.default.deleteDataLulusanPertahun(id);
            res.status(200).json({
                success: true,
                message: "Data Lulusan Pertahun berhasil dihapus",
                data: dataLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikLulusanPertahun(req, res) {
        try {
            const { totalLulusan, tahun1, tahun2, tingkatKelulusan } = req.body;
            const statistikLulusanPertahun = await data_lulusan_pertahun_service_1.default.createStatistikLulusanPertahun({
                totalLulusan,
                tahun1,
                tahun2,
                tingkatKelulusan,
            });
            res.status(201).json({
                success: true,
                message: "Statistik Lulusan Pertahun berhasil dibuat",
                data: statistikLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikLulusanPertahun(req, res) {
        try {
            const statistikLulusanPertahun = await data_lulusan_pertahun_service_1.default.getStatistikLulusanPertahun();
            res.status(200).json({
                success: true,
                message: "Data Lulusan Pertahun berhasil diambil",
                data: statistikLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikLulusanPertahun(req, res) {
        try {
            const { id } = req.params;
            const { totalLulusan, tahun1, tahun2, tingkatKelulusan } = req.body;
            const updateData = {
                totalLulusan,
                tahun1,
                tahun2,
                tingkatKelulusan,
            };
            const updatedStatistikLulusanPertahun = await data_lulusan_pertahun_service_1.default.updateStatistikLulusanPertahun(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Lulusan Pertahun berhasil diupdate",
                data: updatedStatistikLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikLulusanPertahun(req, res) {
        try {
            const id = parseInt(req.params.id);
            const statistikLulusanPertahun = await data_lulusan_pertahun_service_1.default.deleteStatistikLulusanPertahun(id);
            res.status(200).json({
                success: true,
                message: "Statistik Lulusan Pertahun berhasil dihapus",
                data: statistikLulusanPertahun,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new DataLulusanPertahunController();
