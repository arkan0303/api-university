"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const surat_pengajuan_beasiswa_service_1 = __importDefault(require("../services/surat-pengajuan-beasiswa-service"));
class SuratPengajuanBeasiswaController {
    async createSuratPengajuanBeasiswa(req, res) {
        try {
            const { idMahasiswa, beasiswa, noSurat, tanggalPengajuan, provider, nominalPerSemester, alasanPengajuan, prestasi, namaAyah, namaIbu, penghasilanOrangtua, alamat, email, kontak, note, status, } = req.body;
            console.log(req.body);
            const galeriFiles = req.files?.["dokumen"] || [];
            const prestasiJSON = JSON.parse(prestasi);
            console.log(prestasiJSON);
            const strategis = await surat_pengajuan_beasiswa_service_1.default.createSuratPengajuanBeasiswa({
                idMahasiswa,
                beasiswa,
                noSurat,
                tanggalPengajuan,
                provider,
                nominalPerSemester,
                alasanPengajuan,
                prestasi: prestasiJSON,
                namaAyah,
                namaIbu,
                penghasilanOrangtua,
                alamat,
                email,
                kontak,
                note,
                status,
                dokumen: galeriFiles,
            });
            res.status(201).json(strategis);
        }
        catch (error) {
            console.error("Error in createRencanaStrategis:", error);
            res.status(500).json({ error: "Failed to create strategis" });
        }
    }
    async getAllSuratPengajuanBeasiswa(req, res) {
        try {
            const strategis = await surat_pengajuan_beasiswa_service_1.default.getAllSuratPengajuanBeasiswa();
            res.status(200).json({
                success: true,
                message: "Surat pengajuan beasiswa berhasil diambil",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in getAllSuratPengajuanBeasiswa:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil surat pengajuan beasiswa",
            });
        }
    }
    async updateSuratPengajuanBeasiswa(req, res) {
        try {
            const { id } = req.params;
            const { idMahasiswa, beasiswa, noSurat, tanggalPengajuan, provider, nominalPerSemester, alasanPengajuan, prestasi, namaAyah, namaIbu, penghasilanOrangtua, alamat, email, kontak, note, status, } = req.body;
            const prestasiJSON = JSON.parse(prestasi);
            const updateData = {
                idMahasiswa,
                beasiswa,
                noSurat,
                tanggalPengajuan,
                provider,
                nominalPerSemester,
                alasanPengajuan,
                prestasi: prestasiJSON,
                namaAyah,
                namaIbu,
                penghasilanOrangtua,
                alamat,
                email,
                kontak,
                note,
                status,
            };
            // Hanya tambahkan file jika ada file yang diunggah
            const galeriFiles = req.files?.["dokumen"] || [];
            if (galeriFiles.length > 0) {
                updateData.dokumen = galeriFiles;
            }
            console.log(updateData);
            const strategis = await surat_pengajuan_beasiswa_service_1.default.updateSuratPengajuanBeasiswa(Number(id), updateData);
            res.status(200).json(strategis);
        }
        catch (error) {
            console.error("Error in updateSuratPengajuanBeasiswa:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengupdate surat pengajuan beasiswa",
            });
        }
    }
    async deleteSuratPengajuanBeasiswa(req, res) {
        try {
            const { id } = req.params;
            console.log(id);
            const strategis = await surat_pengajuan_beasiswa_service_1.default.deleteSuratPengajuanBeasiswa(Number(id));
            res.status(200).json({
                success: true,
                message: "Surat pengajuan beasiswa berhasil dihapus",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in deleteSuratPengajuanBeasiswa:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus surat pengajuan beasiswa",
            });
        }
    }
    async getStatistikSuratPengajuanBeasiswa(req, res) {
        try {
            const statistikSuratPengajuanBeasiswa = await surat_pengajuan_beasiswa_service_1.default.getStatistikSuratPengajuanBeasiswa();
            res.status(200).json({
                success: true,
                message: "Statistik surat pengajuan beasiswa berhasil diambil",
                data: statistikSuratPengajuanBeasiswa,
            });
        }
        catch (error) {
            console.error("Error in getStatistikSuratPengajuanBeasiswa:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik surat pengajuan beasiswa",
            });
        }
    }
    async updateStatistikSuratPengajuanBeasiswa(req, res) {
        try {
            const { id } = req.params;
            const { totalPengajuan, disetujui, menunggu, ditolak, slogan, deskripsi, } = req.body;
            const statistikSuratPengajuanBeasiswa = await surat_pengajuan_beasiswa_service_1.default.updateStatistikSuratPengajuanBeasiswa(Number(id), {
                totalPengajuan,
                disetujui,
                menunggu,
                ditolak,
                slogan,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                message: "Statistik surat pengajuan beasiswa berhasil diupdate",
                data: statistikSuratPengajuanBeasiswa,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikSuratPengajuanBeasiswa:", error);
            res.status(500).json({
                success: false,
                message: "Gagal mengupdate statistik surat pengajuan beasiswa",
            });
        }
    }
    async deleteStatistikSuratPengajuanBeasiswa(req, res) {
        try {
            const { id } = req.params;
            const statistikSuratPengajuanBeasiswa = await surat_pengajuan_beasiswa_service_1.default.deleteStatistikSuratPengajuanBeasiswa(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik surat pengajuan beasiswa berhasil dihapus",
                data: statistikSuratPengajuanBeasiswa,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikSuratPengajuanBeasiswa:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik surat pengajuan beasiswa",
            });
        }
    }
    async createStatistikSuratPengajuanBeasiswa(req, res) {
        try {
            const { totalPengajuan, disetujui, menunggu, ditolak, slogan, deskripsi, } = req.body;
            const statistikSuratPengajuanBeasiswa = await surat_pengajuan_beasiswa_service_1.default.createStatistikSuratPengajuanBeasiswa({
                totalPengajuan,
                disetujui,
                menunggu,
                ditolak,
                slogan,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                message: "Statistik surat pengajuan beasiswa berhasil dibuat",
                data: statistikSuratPengajuanBeasiswa,
            });
        }
        catch (error) {
            console.error("Error in createStatistikSuratPengajuanBeasiswa:", error);
            res.status(500).json({
                success: false,
                message: "Gagal membuat statistik surat pengajuan beasiswa",
            });
        }
    }
}
exports.default = new SuratPengajuanBeasiswaController();
