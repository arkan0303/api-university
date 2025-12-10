"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const struktur_organisasi_service_1 = __importDefault(require("../services/struktur-organisasi-service"));
class StrukturOrganisasiController {
    async createStrukturOrganisasi(req, res) {
        try {
            const { jabatan, nama, note, type } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const strukturOrganisasi = await struktur_organisasi_service_1.default.createStrukturOrganisasi({
                jabatan,
                nama,
                note,
                type,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Struktur Organisasi berhasil dibuat",
                strukturOrganisasi,
            });
        }
        catch (error) {
            console.error("Error in createStrukturOrganisasi:", error);
            res.status(500).json({ error: "Failed to create struktur organisasi" });
        }
    }
    async getAllStrukturOrganisasi(req, res) {
        try {
            const strukturOrganisasi = await struktur_organisasi_service_1.default.getAllStrukturOrganisasi();
            res.status(200).json({
                success: true,
                message: "Struktur Organisasi berhasil diambil",
                data: strukturOrganisasi,
            });
        }
        catch (error) {
            console.error("Error in getAllStrukturOrganisasi:", error);
            res.status(500).json({ error: "Failed to get struktur organisasi" });
        }
    }
    async updateStrukturOrganisasi(req, res) {
        try {
            const { jabatan, nama, note, type } = req.body;
            const id = req.params.id;
            // Validasi input
            if (!jabatan || !nama || !note || !type) {
                return res.status(400).json({
                    success: false,
                    message: "Semua field kecuali foto wajib diisi",
                });
            }
            const updateData = {
                jabatan,
                nama,
                note,
                type,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const strukturOrganisasi = await struktur_organisasi_service_1.default.updateStrukturOrganisasi(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Struktur Organisasi berhasil diupdate",
                data: strukturOrganisasi,
            });
        }
        catch (error) {
            console.error("Error in updateStrukturOrganisasi:", error);
            const errorMessage = error instanceof Error
                ? error.message
                : "Terjadi kesalahan saat mengupdate data";
            res.status(500).json({
                success: false,
                message: errorMessage,
            });
        }
    }
    async deleteStrukturOrganisasi(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await struktur_organisasi_service_1.default.deleteStrukturOrganisasi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStrukturOrganisasi:", error);
            res.status(500).json({
                success: false,
                message: "Gagal menghapus data",
            });
        }
    }
    async createStatistikStrukturOrganisasi(req, res) {
        try {
            const { pimpinan, bagianUtama, tenagaPendidikan, dosenTetap, slogan, deskripsi, } = req.body;
            const statistikStrukturOrganisasii = await struktur_organisasi_service_1.default.createStatistikStrukturOrganisasi({
                pimpinan,
                bagianUtama,
                tenagaPendidikan,
                dosenTetap,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Struktur Organisasi berhasil dibuat",
                statistikStrukturOrganisasii,
            });
        }
        catch (error) {
            console.error("Error in createStatistikStrukturOrganisasi:", error);
            res
                .status(500)
                .json({ error: "Failed to create statistik struktur organisasi" });
        }
    }
    async getAllStatistikStrukturOrganisasi(req, res) {
        try {
            const statistikStrukturOrganisasii = await struktur_organisasi_service_1.default.getAllStatistikStrukturOrganisasi();
            return res.status(200).json({
                success: true,
                message: "Statistik Struktur Organisasi berhasil diambil",
                data: statistikStrukturOrganisasii,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikStrukturOrganisasi:", error);
            res
                .status(500)
                .json({ error: "Failed to get statistik struktur organisasi" });
        }
    }
    async updateStatistikStrukturOrganisasi(req, res) {
        try {
            const { id } = req.params;
            const { pimpinan, bagianUtama, tenagaPendidikan, dosenTetap, slogan, deskripsi, } = req.body;
            const updateData = {
                pimpinan,
                bagianUtama,
                tenagaPendidikan,
                dosenTetap,
                slogan,
                deskripsi,
            };
            const statistikStrukturOrganisasii = await struktur_organisasi_service_1.default.updateStatistikStrukturOrganisasi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Struktur Organisasi berhasil diupdate",
                data: statistikStrukturOrganisasii,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikStrukturOrganisasi:", error);
            res
                .status(500)
                .json({ error: "Failed to update statistik struktur organisasi" });
        }
    }
    async deleteStatistikStrukturOrganisasi(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await struktur_organisasi_service_1.default.deleteStatistikStrukturOrganisasi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikStrukturOrganisasi:", error);
            res
                .status(500)
                .json({ error: "Failed to delete statistik struktur organisasi" });
        }
    }
}
exports.default = new StrukturOrganisasiController();
