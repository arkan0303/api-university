"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const daftar_dosen_service_1 = __importDefault(require("../services/daftar-dosen-service"));
class DaftarDosenController {
    async createDaftarDosen(req, res) {
        try {
            const { nama, jabatan, nidn, deskripsi, riwayatPendidikan, keahlian, prestasi, publikasi, email, noTelp, nuptk, nik, id_sinta, tahun_publikasi, jabatan_akademik, link_sinta, link_ppdikti, urutan, jabatan_struktural, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const keahlianJson = JSON.parse(keahlian);
            const prestasiJson = JSON.parse(prestasi);
            const publikasiJson = JSON.parse(publikasi);
            const riwayatPendidikanJson = JSON.parse(riwayatPendidikan);
            const foto = req.files["foto"][0];
            const ahli = req.files?.["ahli"]?.[0] ?? null;
            const daftarDosen = await daftar_dosen_service_1.default.createDaftarDosen({
                nama,
                jabatan,
                nidn,
                deskripsi,
                riwayatPendidikan: riwayatPendidikanJson,
                keahlian: keahlianJson,
                prestasi: prestasiJson,
                publikasi: publikasiJson,
                email,
                noTelp,
                foto,
                nuptk,
                nik,
                id_sinta,
                tahun_publikasi,
                ahli,
                jabatan_akademik,
                link_sinta,
                link_ppdikti,
                urutan,
                jabatan_struktural,
            });
            return res.status(201).json({
                success: true,
                data: daftarDosen,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat daftar dosen",
            });
        }
    }
    async getAllDaftarDosen(req, res) {
        try {
            const daftarDosen = await daftar_dosen_service_1.default.getAllDaftarDosen();
            return res.status(200).json({
                success: true,
                data: daftarDosen,
            });
        }
        catch (error) {
            console.error("ERROR getAllDaftarDosen:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan daftar dosen",
            });
        }
    }
    async updateDaftarDosen(req, res) {
        try {
            const { nama, jabatan, nidn, deskripsi, riwayatPendidikan, keahlian, prestasi, publikasi, email, noTelp, nuptk, nik, id_sinta, tahun_publikasi, jabatan_akademik, link_sinta, link_ppdikti, urutan, jabatan_struktural, } = req.body;
            const id = req.params.id;
            const keahlianJson = JSON.parse(keahlian);
            const prestasiJson = JSON.parse(prestasi);
            const publikasiJson = JSON.parse(publikasi);
            const riwayatPendidikanJson = JSON.parse(riwayatPendidikan);
            const updateData = {
                nama,
                jabatan,
                nidn,
                deskripsi,
                riwayatPendidikan: riwayatPendidikanJson,
                keahlian: keahlianJson,
                prestasi: prestasiJson,
                publikasi: publikasiJson,
                email,
                noTelp,
                nuptk,
                nik,
                id_sinta,
                tahun_publikasi,
                jabatan_akademik,
                link_sinta,
                link_ppdikti,
                urutan,
                jabatan_struktural,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            if (req.files?.["ahli"]?.[0]) {
                updateData.ahli = req.files["ahli"][0];
            }
            const updatedDaftarDosen = await daftar_dosen_service_1.default.updateDaftarDosen(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Daftar Dosen berhasil diupdate",
                data: updatedDaftarDosen,
            });
        }
        catch (error) {
            console.error("Error in updateDaftarDosen:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui kekhususan hukum pidana",
            });
        }
    }
    async deleteDaftarDosen(req, res) {
        try {
            const result = await daftar_dosen_service_1.default.deleteDaftarDosenById(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Daftar Dosen berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteDaftarDosen:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus daftar dosen",
            });
        }
    }
    async getStatistikDaftarDosen(req, res) {
        try {
            const statistikDaftarDosen = await daftar_dosen_service_1.default.getStatistikDaftarDosen();
            return res.status(200).json({
                success: true,
                data: statistikDaftarDosen,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik daftar dosen",
            });
        }
    }
    async createStatistikDaftarDosen(req, res) {
        try {
            const { totalDosen, profesor, doktor, publiikasiPerTahun, slogan, deskripsi, } = req.body;
            console.log(req.body);
            const statistikDaftarDosen = await daftar_dosen_service_1.default.createStatistikDaftarDosen({
                totalDosen,
                profesor,
                doktor,
                publiikasiPerTahun,
                slogan,
                deskripsi,
            });
            console.log(statistikDaftarDosen);
            return res.status(201).json({
                success: true,
                data: statistikDaftarDosen,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik daftar dosen",
            });
        }
    }
    async updateStatistikDaftarDosen(req, res) {
        try {
            const { totalDosen, profesor, doktor, publiikasiPerTahun, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            console.log(req.body);
            console.log(req.params.id);
            const updateData = {
                totalDosen,
                profesor,
                doktor,
                publiikasiPerTahun,
                slogan,
                deskripsi,
            };
            const updatedStatistikDaftarDosen = await daftar_dosen_service_1.default.updateStatistikDaftarDosen(Number(id), // Konversi id ke number
            updateData);
            console.log(updatedStatistikDaftarDosen);
            return res.status(200).json({
                success: true,
                message: "Statistik daftar dosen berhasil diupdate",
                data: updatedStatistikDaftarDosen,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik daftar dosen",
            });
        }
    }
    async deleteStatistikDaftarDosen(req, res) {
        try {
            const result = await daftar_dosen_service_1.default.deleteStatistikDaftarDosenById(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik daftar dosen berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikDaftarDosen:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik daftar dosen",
            });
        }
    }
}
exports.default = new DaftarDosenController();
