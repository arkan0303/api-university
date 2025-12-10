"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const himpunan_mahasiswa_prodi_hukum_1 = __importDefault(require("../services/himpunan-mahasiswa-prodi-hukum"));
class HimpunanMahasiswaProdiHukumController {
    async CreateHimpunanMahasiswaProdiHukum(req, res) {
        try {
            const { bidang, jabatan, anggota, tentang, note, namaKetua, email, noTelp, programKerja, prestasi, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const prestasiJson = JSON.parse(prestasi);
            const programKerjaJson = JSON.parse(programKerja);
            const foto = req.files["foto"][0];
            const himpunanMahasiswaProdiHukum = await himpunan_mahasiswa_prodi_hukum_1.default.create({
                bidang,
                jabatan,
                anggota,
                tentang,
                note,
                namaKetua,
                email,
                noTelp,
                programKerja: programKerjaJson,
                prestasi: prestasiJson,
                foto,
            });
            return res.status(201).json({
                success: true,
                data: himpunanMahasiswaProdiHukum,
            });
        }
        catch (error) {
            console.error("Error in createHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat himpunan mahasiswa prodi hukum",
            });
        }
    }
    async getAllHimpunanMahasiswaProdiHukum(req, res) {
        try {
            const himpunanMahasiswaProdiHukum = await himpunan_mahasiswa_prodi_hukum_1.default.getAll();
            return res.status(200).json({
                success: true,
                data: himpunanMahasiswaProdiHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan himpunan mahasiswa prodi hukum",
            });
        }
    }
    async updateHimpunan(req, res) {
        try {
            const { bidang, jabatan, anggota, tentang, note, namaKetua, email, noTelp, programKerja, prestasi, } = req.body;
            const id = req.params.id;
            const prestasiJson = JSON.parse(prestasi);
            const programKerjaJson = JSON.parse(programKerja);
            const updateData = {
                bidang,
                jabatan,
                anggota,
                tentang,
                note,
                namaKetua,
                email,
                noTelp,
                programKerja: programKerjaJson,
                prestasi: prestasiJson,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedHimpunanMahasiswaProdiHukum = await himpunan_mahasiswa_prodi_hukum_1.default.update(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Himpunan Mahasiswa Prodi Hukum berhasil diupdate",
                data: updatedHimpunanMahasiswaProdiHukum,
            });
        }
        catch (error) {
            console.error("Error in updateHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui himpunan mahasiswa prodi hukum",
            });
        }
    }
    async deleteHimpunan(req, res) {
        try {
            const result = await himpunan_mahasiswa_prodi_hukum_1.default.delete(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Himpunan Mahasiswa Prodi Hukum berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus himpunan mahasiswa prodi hukum",
            });
        }
    }
    async createStatistik(req, res) {
        try {
            const { bidangOrganisasi, anggotaAktif, programKerja, prestasi, slogan, deskripsi, } = req.body;
            const statistikHimpunanMahasiswaProdiHukum = await himpunan_mahasiswa_prodi_hukum_1.default.createStatistik({
                bidangOrganisasi,
                anggotaAktif,
                programKerja,
                prestasi,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikHimpunanMahasiswaProdiHukum,
            });
        }
        catch (error) {
            console.error("Error in createStatistikHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik himpunan mahasiswa prodi hukum",
            });
        }
    }
    async getAllStatistik(req, res) {
        try {
            const statistikHimpunanMahasiswaProdiHukum = await himpunan_mahasiswa_prodi_hukum_1.default.getAllStatistik();
            return res.status(200).json({
                success: true,
                data: statistikHimpunanMahasiswaProdiHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik himpunan mahasiswa prodi hukum",
            });
        }
    }
    async updateStatistik(req, res) {
        try {
            const { bidangOrganisasi, anggotaAktif, programKerja, prestasi, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                bidangOrganisasi,
                anggotaAktif,
                programKerja,
                prestasi,
                slogan,
                deskripsi,
            };
            const updatedStatistikHimpunanMahasiswaProdiHukum = await himpunan_mahasiswa_prodi_hukum_1.default.updateStatistik(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Himpunan Mahasiswa Prodi Hukum berhasil diupdate",
                data: updatedStatistikHimpunanMahasiswaProdiHukum,
            });
        }
        catch (error) {
            console.error("Error in updateHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui himpunan mahasiswa prodi hukum",
            });
        }
    }
    async deleteStatistik(req, res) {
        try {
            const result = await himpunan_mahasiswa_prodi_hukum_1.default.deleteStatistik(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Himpunan Mahasiswa Prodi Hukum berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikHimpunanMahasiswaProdiHukum:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik himpunan mahasiswa prodi hukum",
            });
        }
    }
}
exports.default = new HimpunanMahasiswaProdiHukumController();
