"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sidang_skripsi_service_1 = __importDefault(require("../services/sidang-skripsi-service"));
class SidangSkripsiController {
    async createSidangSkripsi(req, res) {
        try {
            const { title, kategori } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJson = JSON.parse(kategori);
            const sidangSkripsi = await sidang_skripsi_service_1.default.createSidangSkripsi({
                title,
                kategori: kategoriJson,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Sidang skripsi berhasil dibuat",
                data: sidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in createSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat sidang skripsi",
            });
        }
    }
    async getAllSidangSkripsi(req, res) {
        try {
            const sidangSkripsi = await sidang_skripsi_service_1.default.getAllSidangSkripsi();
            return res.status(200).json({
                success: true,
                message: "Sidang skripsi berhasil diambil",
                data: sidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in getAllSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil sidang skripsi",
            });
        }
    }
    async updateSidangSkripsi(req, res) {
        try {
            const { title, kategori } = req.body;
            const id = req.params.id;
            const kategoriJson = JSON.parse(kategori);
            const updateData = {
                title,
                kategori: kategoriJson,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedSidangSkripsi = await sidang_skripsi_service_1.default.updateSidangSkripsi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Sidang skripsi berhasil diupdate",
                data: updatedSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in updateSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate sidang skripsi",
            });
        }
    }
    async deleteSidangSkripsi(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await sidang_skripsi_service_1.default.deleteSidangSkripsi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Sidang skripsi berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus sidang skripsi",
            });
        }
    }
    async createProsedurSidangSkripsi(req, res) {
        try {
            const { title, tahapan, waktu, deskripsi } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const prosedurSidangSkripsi = await sidang_skripsi_service_1.default.createProsedurSidangSkripsi({
                title,
                tahapan,
                waktu,
                deskripsi,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Prosedur sidang skripsi berhasil dibuat",
                data: prosedurSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in createProsedurSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat prosedur pelaksanaan",
            });
        }
    }
    async getAllProsedurSidangSkripsi(req, res) {
        try {
            const prosedurSidangSkripsi = await sidang_skripsi_service_1.default.getAllProsedurSidangSkripsi();
            return res.status(200).json({
                success: true,
                message: "Prosedur sidang skripsi berhasil diambil",
                data: prosedurSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in getAllProsedurSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil prosedur pelaksanaan",
            });
        }
    }
    async updateProsedurSidangSkripsi(req, res) {
        try {
            const { title, tahapan, waktu, deskripsi } = req.body;
            const id = req.params.id;
            const updateData = {
                title,
                tahapan,
                waktu,
                deskripsi,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedProsedurSidangSkripsi = await sidang_skripsi_service_1.default.updateProsedurSidangSkripsi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Prosedur sidang skripsi berhasil diupdate",
                data: updatedProsedurSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in updateProsedurSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate prosedur pelaksanaan",
            });
        }
    }
    async deleteProsedurSidangSkripsi(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await sidang_skripsi_service_1.default.deleteProsedurSidangSkripsi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Prosedur sidang skripsi berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteProsedurSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus prosedur sidang skripsi",
            });
        }
    }
    async createStatistikSidangSkripsi(req, res) {
        try {
            const { sidangPerTahun, tingkatKelulusan, durasiSidang, timPenguji, slogan, deskripsi, } = req.body;
            const statistikSidangSkripsi = await sidang_skripsi_service_1.default.createStatistikSidangSkripsi({
                sidangPerTahun,
                tingkatKelulusan,
                durasiSidang,
                timPenguji,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik sidang skripsi berhasil dibuat",
                data: statistikSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in createStatistikSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik sidang skripsi",
            });
        }
    }
    async getAllStatistikSidangSkripsi(req, res) {
        try {
            const statistikSidangSkripsi = await sidang_skripsi_service_1.default.getAllStatistikSidangSkripsi();
            return res.status(200).json({
                success: true,
                message: "Statistik sidang skripsi berhasil diambil",
                data: statistikSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik seminar proposal",
            });
        }
    }
    async updateStatistikSidangSkripsi(req, res) {
        try {
            const { id } = req.params;
            const { sidangPerTahun, tingkatKelulusan, durasiSidang, timPenguji, slogan, deskripsi, } = req.body;
            const statistikSidangSkripsi = await sidang_skripsi_service_1.default.updateStatistikSidangSkripsi(Number(id), {
                sidangPerTahun,
                tingkatKelulusan,
                durasiSidang,
                timPenguji,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik sidang skripsi berhasil diupdate",
                data: statistikSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate statistik seminar proposal",
            });
        }
    }
    async deleteStatistikSidangSkripsi(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await sidang_skripsi_service_1.default.deleteStatistikSidangSkripsi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik sidang skripsi berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik seminar proposal",
            });
        }
    }
    async createKriteriaSidangSkripsi(req, res) {
        try {
            const { title, kriteria, skor } = req.body;
            const kriteriaJson = JSON.parse(kriteria);
            const kriteriaSidangSkripsi = await sidang_skripsi_service_1.default.createKriteriaSidangSkripsi({
                title,
                kriteria: kriteriaJson,
                skor,
            });
            return res.status(201).json({
                success: true,
                message: "Kriteria sidang skripsi berhasil dibuat",
                data: kriteriaSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in createKriteriaSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat kriteria sidang skripsi",
            });
        }
    }
    async getAllKriteriaSidangSkripsi(req, res) {
        try {
            const kriteriaSidangSkripsi = await sidang_skripsi_service_1.default.getAllKriteriaSidangSkripsi();
            return res.status(200).json({
                success: true,
                message: "Kriteria sidang skripsi berhasil diambil",
                data: kriteriaSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in getAllKriteriaSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil kriteria sidang skripsi",
            });
        }
    }
    async updateKriteriaSidangSkripsi(req, res) {
        try {
            const { id } = req.params;
            const { title, kriteria, skor } = req.body;
            const kriteriaJson = JSON.parse(kriteria);
            const kriteriaSidangSkripsi = await sidang_skripsi_service_1.default.updateKriteriaSidangSkripsi(Number(id), {
                title,
                kriteria: kriteriaJson,
                skor,
            });
            return res.status(200).json({
                success: true,
                message: "Kriteria sidang skripsi berhasil diupdate",
                data: kriteriaSidangSkripsi,
            });
        }
        catch (error) {
            console.error("Error in updateKriteriaSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate kriteria sidang skripsi",
            });
        }
    }
    async deleteKriteriaSidangSkripsi(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await sidang_skripsi_service_1.default.deleteKriteriaSidangSkripsi(Number(id));
            return res.status(200).json({
                success: true,
                message: "Kriteria sidang skripsi berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteKriteriaSidangSkripsi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus kriteria sidang skripsi",
            });
        }
    }
}
exports.default = new SidangSkripsiController();
