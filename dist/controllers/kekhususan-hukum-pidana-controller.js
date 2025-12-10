"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kekhususan_hukum_pidana_service_1 = __importDefault(require("../services/kekhususan-hukum-pidana-service"));
class KekhususanHukumPidanaController {
    async createKekhususanHukumPidana(req, res) {
        try {
            const { semester, sks, title, deskripsi, kategori } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJson = JSON.parse(kategori);
            const foto = req.files["foto"][0];
            const kekhususanHukumPidana = await kekhususan_hukum_pidana_service_1.default.createKekhususanHukumPidana({
                semester,
                sks,
                title,
                deskripsi,
                kategori: kategoriJson,
                foto,
            });
            return res.status(201).json({
                success: true,
                data: kekhususanHukumPidana,
            });
        }
        catch (error) {
            console.error("Error in createKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat kekhususan hukum pidana",
            });
        }
    }
    async getAllKekhususanHukumPidana(req, res) {
        try {
            const kekhususanHukumPidana = await kekhususan_hukum_pidana_service_1.default.getAllKekhususanHukumPidana();
            return res.status(200).json({
                success: true,
                data: kekhususanHukumPidana,
            });
        }
        catch (error) {
            console.error("Error in getAllKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan kekhususan hukum pidana",
            });
        }
    }
    async updateKekhususanHukumPidana(req, res) {
        try {
            const { semester, sks, title, deskripsi, kategori } = req.body;
            const id = req.params.id;
            const kategoriJson = JSON.parse(kategori);
            const updateData = {
                semester,
                sks,
                title,
                deskripsi,
                kategori: kategoriJson,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedKekhususanHukumPidana = await kekhususan_hukum_pidana_service_1.default.updateKekhususanHukumPidana(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Kekhususan Hukum Pidana berhasil diupdate",
                data: updatedKekhususanHukumPidana,
            });
        }
        catch (error) {
            console.error("Error in updateKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui kekhususan hukum pidana",
            });
        }
    }
    async deleteKekhususanHukumPidana(req, res) {
        try {
            const result = await kekhususan_hukum_pidana_service_1.default.deleteKekhususanHukumPidana(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Kekhususan Hukum Pidana berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus kekhususan hukum pidana",
            });
        }
    }
    async createProspekKarir(req, res) {
        try {
            const { title, deskripsi, kategori } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const prospekKarir = await kekhususan_hukum_pidana_service_1.default.createProspekKarir({
                title,
                deskripsi,
                kategori: kategoriJson,
            });
            return res.status(201).json({
                success: true,
                data: prospekKarir,
            });
        }
        catch (error) {
            console.error("Error in createProspekKarir:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat prospek karir",
            });
        }
    }
    async getAllProspekKarir(req, res) {
        try {
            const prospekKarir = await kekhususan_hukum_pidana_service_1.default.getAllProspekKarir();
            return res.status(200).json({
                success: true,
                data: prospekKarir,
            });
        }
        catch (error) {
            console.error("Error in getAllProspekKarir:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan prospek karir",
            });
        }
    }
    async updateProspekKarir(req, res) {
        try {
            const { title, deskripsi, kategori } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const updateData = {
                title,
                deskripsi,
                kategori: kategoriJson,
            };
            const updatedProspekKarir = await kekhususan_hukum_pidana_service_1.default.updateProspekKarir(Number(req.params.id), updateData);
            return res.status(200).json({
                success: true,
                message: "Prospek Karir berhasil diupdate",
                data: updatedProspekKarir,
            });
        }
        catch (error) {
            console.error("Error in updateProspekKarir:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui prospek karir",
            });
        }
    }
    async deleteProspekKarir(req, res) {
        try {
            const result = await kekhususan_hukum_pidana_service_1.default.deleteProspekKarir(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Prospek Karir berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteProspekKarir:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus prospek karir",
            });
        }
    }
    async createStatistikKekhususanHukumPidana(req, res) {
        try {
            const { sks, mahasiswaAktif, tingkatKelulusan, alumniProfesional, slogan, deskripsi, } = req.body;
            const statistikKekhususanHukumPidana = await kekhususan_hukum_pidana_service_1.default.createStatistikKekhususanHukumPidana({
                sks,
                mahasiswaAktif,
                tingkatKelulusan,
                alumniProfesional,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikKekhususanHukumPidana,
            });
        }
        catch (error) {
            console.error("Error in createStatistikKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik kekhususan hukum pidana",
            });
        }
    }
    async getAllStatistikKekhususanHukumPidana(req, res) {
        try {
            const statistikKekhususanHukumPidana = await kekhususan_hukum_pidana_service_1.default.getAllStatistikKekhususanHukumPidana();
            return res.status(200).json({
                success: true,
                data: statistikKekhususanHukumPidana,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik kekhususan hukum pidana",
            });
        }
    }
    async updateStatistikKekhususanHukumPidana(req, res) {
        try {
            const { sks, mahasiswaAktif, tingkatKelulusan, alumniProfesional, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                sks,
                mahasiswaAktif,
                tingkatKelulusan,
                alumniProfesional,
                slogan,
                deskripsi,
            };
            const updatedStatistikKekhususanHukumPidana = await kekhususan_hukum_pidana_service_1.default.updateStatistikKekhususanHukumPidana(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Kekhususan Hukum Pidana berhasil diupdate",
                data: updatedStatistikKekhususanHukumPidana,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik kekhususan hukum pidana",
            });
        }
    }
    async deleteStatistikKekhususanHukumPidana(req, res) {
        try {
            const result = await kekhususan_hukum_pidana_service_1.default.deleteStatistikKekhususanHukumPidana(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Kekhususan Hukum Pidana berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikKekhususanHukumPidana:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik kekhususan hukum pidana",
            });
        }
    }
}
exports.default = new KekhususanHukumPidanaController();
