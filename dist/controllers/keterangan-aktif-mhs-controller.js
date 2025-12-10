"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keterangan_aktif_mhs_service_1 = __importDefault(require("../services/keterangan-aktif-mhs-service"));
class KeteranganAktifMahasiswaController {
    async createKeteranganAktifMahasiswa(req, res) {
        try {
            const { nama, nim, jurusan, semester, status, ipk, keperluan, noSurat, tanggalTerbit, tahunAkademik, diTerbitkan, note, deskripsi, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const data = await keterangan_aktif_mhs_service_1.default.createKeteranganAktifMahasiswa({
                nama,
                nim,
                jurusan,
                semester,
                status,
                ipk,
                keperluan,
                noSurat,
                tanggalTerbit,
                tahunAkademik,
                diTerbitkan,
                note,
                deskripsi,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Keterangan Aktif Mahasiswa berhasil dibuat",
                data,
            });
        }
        catch (error) {
            console.error("Error in createKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllKeteranganAktifMahasiswa(req, res) {
        try {
            const result = await keterangan_aktif_mhs_service_1.default.getAllKeteranganAktifMahasiswa();
            res.status(200).json({
                success: true,
                message: "Keterangan Aktif Mahasiswa berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateKeteranganAktifMahasiswa(req, res) {
        try {
            const { nama, nim, jurusan, semester, status, ipk, keperluan, noSurat, tanggalTerbit, tahunAkademik, diTerbitkan, note, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                nama,
                nim,
                jurusan,
                semester,
                status,
                ipk,
                keperluan,
                noSurat,
                tanggalTerbit,
                tahunAkademik,
                diTerbitkan,
                note,
                deskripsi,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedKeteranganAktifMahasiswa = await keterangan_aktif_mhs_service_1.default.updateKeteranganAktifMahasiswa(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Keterangan Aktif Mahasiswa berhasil diupdate",
                data: updatedKeteranganAktifMahasiswa,
            });
        }
        catch (error) {
            console.error("Error in updateKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteKeteranganAktifMahasiswa(req, res) {
        try {
            const result = await keterangan_aktif_mhs_service_1.default.deleteKeteranganAktifMahasiswa(Number(req.params.id));
            res.status(200).json({
                success: true,
                message: "Keterangan Aktif Mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikKeteranganAktifMahasiswa(req, res) {
        try {
            const { totalMahasiswa, aktif, tidakAktif, selesai, slogan, deskripsi } = req.body;
            const data = await keterangan_aktif_mhs_service_1.default.createStatistikKeteranganAktifMahasiswa({
                totalMahasiswa,
                aktif,
                tidakAktif,
                selesai,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Keterangan Aktif Mahasiswa berhasil dibuat",
                data,
            });
        }
        catch (error) {
            console.error("Error in createStatistikKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikKeteranganAktifMahasiswa(req, res) {
        try {
            const result = await keterangan_aktif_mhs_service_1.default.getAllStatistikKeteranganAktifMahasiswa();
            res.status(200).json({
                success: true,
                message: "Statistik Keterangan Aktif Mahasiswa berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikKeteranganAktifMahasiswa(req, res) {
        try {
            const { totalMahasiswa, aktif, tidakAktif, selesai, slogan, deskripsi } = req.body;
            const id = req.params.id;
            const statistikKeteranganAktifMahasiswa = await keterangan_aktif_mhs_service_1.default.updateStatistikKeteranganAktifMahasiswa(Number(id), {
                totalMahasiswa,
                aktif,
                tidakAktif,
                selesai,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Keterangan Aktif Mahasiswa berhasil diupdate",
                statistikKeteranganAktifMahasiswa,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikKeteranganAktifMahasiswa(req, res) {
        try {
            const result = await keterangan_aktif_mhs_service_1.default.deleteStatistikKeteranganAktifMahasiswa(Number(req.params.id));
            res.status(200).json({
                success: true,
                message: "Statistik Keterangan Aktif Mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllDataKeteranganAktifMahasiswa(req, res) {
        try {
            const result = await keterangan_aktif_mhs_service_1.default.getDataKeteranganAktifMahasiswa();
            res.status(200).json({
                success: true,
                message: "Data Keterangan Aktif Mahasiswa berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllDataKeteranganAktifMahasiswa:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new KeteranganAktifMahasiswaController();
