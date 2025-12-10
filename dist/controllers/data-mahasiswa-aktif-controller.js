"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_mahasiswa_aktif_service_1 = __importDefault(require("../services/data-mahasiswa-aktif-service"));
class DataMahasiswaAktifController {
    async createDataMahasiswaAktif(req, res) {
        try {
            const { foto, title, deskripsi, jumlah } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const dataMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.createDataMahasiswaAktif({
                foto: req.files["foto"][0],
                title,
                deskripsi,
                jumlah,
            });
            res.status(201).json({
                success: true,
                message: "Data Mahasiswa Aktif berhasil dibuat",
                data: dataMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getDataMahasiswaAktif(req, res) {
        try {
            const dataMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.getDataMahasiswaAktif();
            res.status(200).json({
                success: true,
                message: "Data Mahasiswa Aktif berhasil diambil",
                data: dataMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateDataMahasiswaAktif(req, res) {
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
            const updatedDataMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.updateDataMahasiswaAktif(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Data Mahasiswa Aktif berhasil diupdate",
                data: updatedDataMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteDataMahasiswaAktif(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dataMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.deleteDataMahasiswaAktif(id);
            res.status(200).json({
                success: true,
                message: "Data Mahasiswa Aktif berhasil dihapus",
                data: dataMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikMahasiswaAktif(req, res) {
        try {
            const { mahasiswaAktif, tingkatKehadiran, ipkRataRata, mahasiswaBerprestasi, } = req.body;
            const statistikMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.createStatistikMahasiswaAktif({
                mahasiswaAktif,
                tingkatKehadiran,
                ipkRataRata,
                mahasiswaBerprestasi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik Mahasiswa Aktif berhasil dibuat",
                data: statistikMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikMahasiswaAktif(req, res) {
        try {
            const statistikMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.getStatistikMahasiswaAktif();
            res.status(200).json({
                success: true,
                message: "Data Mahasiswa Aktif berhasil diambil",
                data: statistikMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikMahasiswaAktif(req, res) {
        try {
            const { id } = req.params;
            const { mahasiswaAktif, tingkatKehadiran, ipkRataRata, mahasiswaBerprestasi, } = req.body;
            const updateData = {
                mahasiswaAktif,
                tingkatKehadiran,
                ipkRataRata,
                mahasiswaBerprestasi,
            };
            const updatedStatistikMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.updateStatistikMahasiswaAktif(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Mahasiswa Aktif berhasil diupdate",
                data: updatedStatistikMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikMahasiswaAktif(req, res) {
        try {
            const id = parseInt(req.params.id);
            const statistikMahasiswaAktif = await data_mahasiswa_aktif_service_1.default.deleteStatistikMahasiswaAktif(id);
            res.status(200).json({
                success: true,
                message: "Statistik Mahasiswa Aktif berhasil dihapus",
                data: statistikMahasiswaAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new DataMahasiswaAktifController();
