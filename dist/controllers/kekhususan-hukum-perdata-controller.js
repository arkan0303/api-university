"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kekhususan_hukum_perdata_1 = __importDefault(require("../services/kekhususan-hukum-perdata"));
class KekhususanHukumPerdataController {
    async createKekhususanHukumPerdata(req, res) {
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
            const kekhususanHukumPerdata = await kekhususan_hukum_perdata_1.default.createKekhususanHukumPerdata({
                semester,
                sks,
                title,
                deskripsi,
                kategori: kategoriJson,
                foto,
            });
            return res.status(201).json({
                success: true,
                data: kekhususanHukumPerdata,
            });
        }
        catch (error) {
            console.error("Error in createKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat kekhususan hukum pidana",
            });
        }
    }
    async getAllKekhususanHukumPerdata(req, res) {
        try {
            const kekhususanHukumPerdata = await kekhususan_hukum_perdata_1.default.getAllKekhususanHukumPerdata();
            return res.status(200).json({
                success: true,
                data: kekhususanHukumPerdata,
            });
        }
        catch (error) {
            console.error("Error in getAllKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan kekhususan hukum pidana",
            });
        }
    }
    async updateKekhususanHukumPerdata(req, res) {
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
            const updatedKekhususanHukumPerdata = await kekhususan_hukum_perdata_1.default.updateKekhususanHukumPerdata(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Kekhususan Hukum Perdata berhasil diupdate",
                data: updatedKekhususanHukumPerdata,
            });
        }
        catch (error) {
            console.error("Error in updateKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui kekhususan hukum pidana",
            });
        }
    }
    async deleteKekhususanHukumPerdata(req, res) {
        try {
            const result = await kekhususan_hukum_perdata_1.default.deleteKekhususanHukumPerdata(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Kekhususan Hukum Perdata berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus kekhususan hukum pidana",
            });
        }
    }
    async createProspekKarirPerdata(req, res) {
        try {
            const { title, deskripsi, kategori } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const prospekKarir = await kekhususan_hukum_perdata_1.default.createProspekKarirPerdata({
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
    async getAllProspekKarirPerdata(req, res) {
        try {
            const prospekKarir = await kekhususan_hukum_perdata_1.default.getAllProspekKarirPerdata();
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
    async updateProspekKarirPerdata(req, res) {
        try {
            const { title, deskripsi, kategori } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const updateData = {
                title,
                deskripsi,
                kategori: kategoriJson,
            };
            const updatedProspekKarir = await kekhususan_hukum_perdata_1.default.updateProspekKarirPerdata(Number(req.params.id), updateData);
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
    async deleteProspekKarirPerdata(req, res) {
        try {
            const result = await kekhususan_hukum_perdata_1.default.deleteProspekKarirPerdata(Number(req.params.id));
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
    async createStatistikKekhususanHukumPerdata(req, res) {
        try {
            const { sks, mahasiswaAktif, tingkatKelulusan, alumniProfesional, slogan, deskripsi, } = req.body;
            const statistikKekhususanHukumPerdata = await kekhususan_hukum_perdata_1.default.createStatistikKekhususanHukumPerdata({
                sks,
                mahasiswaAktif,
                tingkatKelulusan,
                alumniProfesional,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikKekhususanHukumPerdata,
            });
        }
        catch (error) {
            console.error("Error in createStatistikKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik kekhususan hukum pidana",
            });
        }
    }
    async getAllStatistikKekhususanHukumPerdata(req, res) {
        try {
            const statistikKekhususanHukumPerdata = await kekhususan_hukum_perdata_1.default.getAllStatistikKekhususanHukumPerdata();
            return res.status(200).json({
                success: true,
                data: statistikKekhususanHukumPerdata,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik kekhususan hukum perdata",
            });
        }
    }
    async updateStatistikKekhususanHukumPerdata(req, res) {
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
            const updatedStatistikKekhususanHukumPerdata = await kekhususan_hukum_perdata_1.default.updateStatistikKekhususanHukumPerdata(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Kekhususan Hukum Perdata berhasil diupdate",
                data: updatedStatistikKekhususanHukumPerdata,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik kekhususan hukum tata usaha negara",
            });
        }
    }
    async deleteStatistikKekhususanHukumPerdata(req, res) {
        try {
            const result = await kekhususan_hukum_perdata_1.default.deleteStatistikKekhususanHukumPerdata(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Kekhususan Hukum Perdata berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikKekhususanHukumPerdata:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik kekhususan hukum tata usaha negara",
            });
        }
    }
}
exports.default = new KekhususanHukumPerdataController();
