"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const surat_ijin_penelitian_service_1 = __importDefault(require("../services/surat-ijin-penelitian-service"));
class SuratIjinPenelitianController {
    async createSuratIjinPenelitian(req, res) {
        try {
            const { foto, title, status, noSurat, tanggalTerbit, periodePenelitian, idMahasiswa, penelitian, temaPenelitian, deskripsi, tujuanPenelitian, metodePenelitian, hasilDiharapkan, } = req.body;
            console.log(req.body);
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto utama harus diupload",
                });
            }
            const galeriFiles = req.files?.["file"] || [];
            const katagoriJSON = JSON.parse(tujuanPenelitian);
            const metodePenelitianJSON = JSON.parse(metodePenelitian);
            const hasilDiharapkanJSON = JSON.parse(hasilDiharapkan);
            console.log(katagoriJSON);
            const suratIjinPenelitian = await surat_ijin_penelitian_service_1.default.createSuratIjinPenelitian({
                foto: req.files?.["foto"][0],
                file: galeriFiles,
                title,
                status,
                noSurat,
                tanggalTerbit,
                periodePenelitian,
                idMahasiswa,
                penelitian,
                temaPenelitian,
                deskripsi,
                tujuanPenelitian: katagoriJSON,
                metodePenelitian: metodePenelitianJSON,
                hasilDiharapkan: hasilDiharapkanJSON,
            });
            res.status(201).json({
                success: true,
                message: "Surat ijin penelitian berhasil dibuat",
                data: suratIjinPenelitian,
            });
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }
    async getAllSuratIjinPenelitian(req, res) {
        try {
            const suratIjinPenelitian = await surat_ijin_penelitian_service_1.default.getAllSuratIjinPenelitian();
            res.status(200).json({
                success: true,
                message: "Surat ijin penelitian berhasil diambil",
                data: suratIjinPenelitian,
            });
        }
        catch (error) {
            console.error("Error in getAllSuratIjinPenelitian:", error);
            res.status(500).json({
                success: false,
                message: "Internal Server Error",
            });
        }
    }
    async updateSuratIjinPenelitian(req, res) {
        try {
            const { id } = req.params;
            const { title, status, noSurat, tanggalTerbit, periodePenelitian, idMahasiswa, penelitian, temaPenelitian, deskripsi, tujuanPenelitian, metodePenelitian, hasilDiharapkan, } = req.body;
            const katagoriJSON = JSON.parse(tujuanPenelitian);
            const metodePenelitianJSON = JSON.parse(metodePenelitian);
            const hasilDiharapkanJSON = JSON.parse(hasilDiharapkan);
            const updateData = {
                title,
                status,
                noSurat,
                tanggalTerbit,
                periodePenelitian,
                idMahasiswa,
                penelitian,
                temaPenelitian,
                deskripsi,
                tujuanPenelitian: katagoriJSON,
                metodePenelitian: metodePenelitianJSON,
                hasilDiharapkan: hasilDiharapkanJSON,
            };
            if (req.files?.["foto"]?.[0]) {
                const image = req.files["foto"][0];
                updateData.foto = image;
            }
            const updatedSuratIjinPenelitian = await surat_ijin_penelitian_service_1.default.updateSuratIjinPenelitian(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Surat ijin penelitian berhasil diambil",
                data: updatedSuratIjinPenelitian,
            });
        }
        catch (error) {
            console.error("Error in updateSuratIjinPenelitian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteSuratIjinPenelitian(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_ijin_penelitian_service_1.default.deleteSuratIjinPenelitian(Number(id));
            res.status(200).json({
                success: true,
                message: "Surat ijin penelitian berhasil diambil",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteSuratIjinPenelitian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikSuratIjinPenelitian(req, res) {
        try {
            const { totalSurat, diterima, ditolak, selesai, slogan, deskripsi } = req.body;
            const statistikSuratIjinPenelitian = await surat_ijin_penelitian_service_1.default.createStatistikSuratIjinPenelitian({
                totalSurat,
                diterima,
                ditolak,
                selesai,
                slogan,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                message: "Surat ijin penelitian berhasil diambil",
                data: statistikSuratIjinPenelitian,
            });
        }
        catch (error) {
            console.error("Error in createStatistikSuratIjinPenelitian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikSuratIjinPenelitian(req, res) {
        try {
            const statistikSuratIjinPenelitian = await surat_ijin_penelitian_service_1.default.getStatistikSuratIjinPenelitian();
            res.status(200).json({
                success: true,
                message: "Statistik surat ijin penelitian berhasil diambil",
                data: statistikSuratIjinPenelitian,
            });
        }
        catch (error) {
            console.error("Error in getStatistikSuratIjinPenelitian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikSuratIjinPenelitian(req, res) {
        try {
            const { id } = req.params;
            const { totalSurat, diterima, ditolak, selesai, slogan, deskripsi } = req.body;
            const updateData = {
                totalSurat,
                diterima,
                ditolak,
                selesai,
                slogan,
                deskripsi,
            };
            const updatedStatistikSuratIjinPenelitian = await surat_ijin_penelitian_service_1.default.updateStatistikSuratIjinPenelitian(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Statistik surat ijin penelitian berhasil diupdate",
                data: updatedStatistikSuratIjinPenelitian,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikSuratIjinPenelitian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikSuratIjinPenelitian(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_ijin_penelitian_service_1.default.deleteStatistikSuratIjinPenelitian(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik surat ijin penelitian berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikSuratIjinPenelitian:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new SuratIjinPenelitianController();
