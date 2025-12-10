"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const surat_kelakuan_baik_service_1 = __importDefault(require("../services/surat-kelakuan-baik-service"));
class SuratKelakuanBaikController {
    async createSuratKelakuanBaik(req, res) {
        const { idMahasiswa, deskripsi, catatanAkademik, catatanDisiplin, catatanOrganisasi, penandaTangan, note, noSurat, tanggalTerbit, berlakuHingga, keperluan, status, } = req.body;
        try {
            const suratKelakuanBaik = await surat_kelakuan_baik_service_1.default.createSuratKelakuanBaik({
                idMahasiswa,
                deskripsi,
                catatanAkademik,
                catatanDisiplin,
                catatanOrganisasi,
                penandaTangan,
                note,
                noSurat,
                tanggalTerbit,
                berlakuHingga,
                keperluan,
                status,
            });
            return res.status(201).json(suratKelakuanBaik);
        }
        catch (error) {
            console.error("Error creating surat kelakuan baik:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllSuratKelakuanBaik(req, res) {
        try {
            const suratKelakuanBaik = await surat_kelakuan_baik_service_1.default.getAllSuratKelakuanBaik();
            return res.status(200).json({
                success: true,
                message: "Surat kelakuan baik berhasil diambil",
                data: suratKelakuanBaik,
            });
        }
        catch (error) {
            console.error("Error getting surat kelakuan baik:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateSuratKelakuanBaik(req, res) {
        try {
            const { id } = req.params;
            const { idMahasiswa, deskripsi, catatanAkademik, catatanDisiplin, catatanOrganisasi, penandaTangan, note, noSurat, tanggalTerbit, berlakuHingga, keperluan, status, } = req.body;
            const updateData = {
                idMahasiswa,
                deskripsi,
                catatanAkademik,
                catatanDisiplin,
                catatanOrganisasi,
                penandaTangan,
                note,
                noSurat,
                tanggalTerbit,
                berlakuHingga,
                keperluan,
                status,
            };
            const updatedSuratKelakuanBaik = await surat_kelakuan_baik_service_1.default.updateSuratKelakuanBaik(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Surat kelakuan baik berhasil diupdate",
                data: updatedSuratKelakuanBaik,
            });
        }
        catch (error) {
            console.error("Error in updateSuratKelakuanBaik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteSuratKelakuanBaik(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_kelakuan_baik_service_1.default.deleteSuratKelakuanBaik(Number(id));
            res.status(200).json({
                success: true,
                message: "Surat kelakuan baik berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteSuratKelakuanBaik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getSuratKelakuanBaik(req, res) {
        try {
            const suratKelakuanBaik = await surat_kelakuan_baik_service_1.default.getAllSuratKelakuanBaik();
            res.status(200).json({
                success: true,
                message: "Surat kelakuan baik berhasil diambil",
                data: suratKelakuanBaik,
            });
        }
        catch (error) {
            console.error("Error in getSuratKelakuanBaik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikSuratKelakuanBaik(req, res) {
        try {
            const statistikSuratKelakuanBaik = await surat_kelakuan_baik_service_1.default.getStatistikSuratKelakuanBaik();
            res.status(200).json({
                success: true,
                message: "Statistik surat kelakuan baik berhasil diambil",
                data: statistikSuratKelakuanBaik,
            });
        }
        catch (error) {
            console.error("Error in getStatistikSuratKelakuanBaik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikSuratKelakuanBaik(req, res) {
        try {
            const { suratDiterbitkan, tingkatPersetujuan, waktuProses, validasiTerjamin, slogan, deskripsi, } = req.body;
            const statistikSuratKelakuanBaik = await surat_kelakuan_baik_service_1.default.createStatistikSuratKelakuanBaik({
                suratDiterbitkan,
                tingkatPersetujuan,
                waktuProses,
                validasiTerjamin,
                slogan,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik surat kelakuan baik berhasil dibuat",
                data: statistikSuratKelakuanBaik,
            });
        }
        catch (error) {
            console.error("Error in createStatistikSuratKelakuanBaik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikSuratKelakuanBaik(req, res) {
        try {
            const { id } = req.params;
            const { suratDiterbitkan, tingkatPersetujuan, waktuProses, validasiTerjamin, slogan, deskripsi, } = req.body;
            const updateData = {
                suratDiterbitkan,
                tingkatPersetujuan,
                waktuProses,
                validasiTerjamin,
                slogan,
                deskripsi,
            };
            const updatedStatistikSuratKelakuanBaik = await surat_kelakuan_baik_service_1.default.updateStatistikSuratKelakuanBaik(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Statistik surat kelakuan baik berhasil diupdate",
                data: updatedStatistikSuratKelakuanBaik,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikSuratKelakuanBaik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikSuratKelakuanBaik(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_kelakuan_baik_service_1.default.deleteStatistikSuratKelakuanBaik(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik surat kelakuan baik berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikSuratKelakuanBaik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new SuratKelakuanBaikController();
