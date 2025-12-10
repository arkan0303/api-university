"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_mahasiswa_nonaktif_sevice_1 = __importDefault(require("../services/data-mahasiswa-nonaktif-sevice"));
class DataMahasiswaNonAktifController {
    async createDataMahasiswaNonAktif(req, res) {
        try {
            const { foto, title, deskripsi, jumlah } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const dataMahasiswaAktif = await data_mahasiswa_nonaktif_sevice_1.default.createDataMahasiswaNonAktif({
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
    async getDataMahasiswaNonAktif(req, res) {
        try {
            const dataMahasiswaNonAktif = await data_mahasiswa_nonaktif_sevice_1.default.getDataMahasiswaNonAktif();
            res.status(200).json({
                success: true,
                message: "Data Mahasiswa NonAktif berhasil diambil",
                data: dataMahasiswaNonAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateDataMahasiswaNonAktif(req, res) {
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
            const updatedDataMahasiswaNonAktif = await data_mahasiswa_nonaktif_sevice_1.default.updateDataMahasiswaNonAktif(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Data Mahasiswa NonAktif berhasil diupdate",
                data: updatedDataMahasiswaNonAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteDataMahasiswaNonAktif(req, res) {
        try {
            const id = parseInt(req.params.id);
            const dataMahasiswaNonAktif = await data_mahasiswa_nonaktif_sevice_1.default.deleteDataMahasiswaNonAktif(id);
            res.status(200).json({
                success: true,
                message: "Data Mahasiswa NonAktif berhasil dihapus",
                data: dataMahasiswaNonAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikMahasiswaNonAktif(req, res) {
        try {
            const { mahasiswaNonAktif, tingkatKehadiran, ipkRataRata, mahasiswaBerprestasi, } = req.body;
            const statistikMahasiswaNonAktif = await data_mahasiswa_nonaktif_sevice_1.default.createStatistikMahasiswaNonAktif({
                mahasiswaNonAktif,
                tingkatKehadiran,
                ipkRataRata,
                mahasiswaBerprestasi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik Mahasiswa NonAktif berhasil dibuat",
                data: statistikMahasiswaNonAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikMahasiswaNonAktif(req, res) {
        try {
            const statistikMahasiswaNonAktif = await data_mahasiswa_nonaktif_sevice_1.default.getStatistikMahasiswaNonAktif();
            res.status(200).json({
                success: true,
                message: "Data Mahasiswa NonAktif berhasil diambil",
                data: statistikMahasiswaNonAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikMahasiswaNonAktif(req, res) {
        try {
            const { id } = req.params;
            const { mahasiswaNonAktif, tingkatKehadiran, ipkRataRata, mahasiswaBerprestasi, } = req.body;
            const updateData = {
                mahasiswaNonAktif,
                tingkatKehadiran,
                ipkRataRata,
                mahasiswaBerprestasi,
            };
            const updatedStatistikMahasiswaNonAktif = await data_mahasiswa_nonaktif_sevice_1.default.updateStatistikMahasiswaNonAktif(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Mahasiswa NonAktif berhasil diupdate",
                data: updatedStatistikMahasiswaNonAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikMahasiswaNonAktif(req, res) {
        try {
            const id = parseInt(req.params.id);
            const statistikMahasiswaNonAktif = await data_mahasiswa_nonaktif_sevice_1.default.deleteStatistikMahasiswaNonAktif(id);
            res.status(200).json({
                success: true,
                message: "Statistik Mahasiswa NonAktif berhasil dihapus",
                data: statistikMahasiswaNonAktif,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new DataMahasiswaNonAktifController();
