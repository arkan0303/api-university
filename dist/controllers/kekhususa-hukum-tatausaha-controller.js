"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const kekhususa_hukum_tatausaha_service_1 = __importDefault(require("../services/kekhususa-hukum-tatausaha-service"));
class KekhususanHukumTatausahaController {
    async createKekhususanHukumTatausaha(req, res) {
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
            const kekhususanHukumTataUsahaNegara = await kekhususa_hukum_tatausaha_service_1.default.createKekhususanHukumTataUsahaNegara({
                semester,
                sks,
                title,
                deskripsi,
                kategori: kategoriJson,
                foto,
            });
            return res.status(201).json({
                success: true,
                data: kekhususanHukumTataUsahaNegara,
            });
        }
        catch (error) {
            console.error("Error in createKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat kekhususan hukum pidana",
            });
        }
    }
    async getAllKekhususanHukumTataUsahaNegara(req, res) {
        try {
            const kekhususanHukumTataUsahaNegara = await kekhususa_hukum_tatausaha_service_1.default.getAllKekhususanHukumTataUsahaNegara();
            return res.status(200).json({
                success: true,
                data: kekhususanHukumTataUsahaNegara,
            });
        }
        catch (error) {
            console.error("Error in getAllKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan kekhususan hukum pidana",
            });
        }
    }
    async updateKekhususanHukumTataUsahaNegara(req, res) {
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
            const updatedKekhususanHukumTataUsahaNegara = await kekhususa_hukum_tatausaha_service_1.default.updateKekhususanHukumTataUsahaNegara(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Kekhususan Hukum Tata Usaha Negara berhasil diupdate",
                data: updatedKekhususanHukumTataUsahaNegara,
            });
        }
        catch (error) {
            console.error("Error in updateKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui kekhususan hukum pidana",
            });
        }
    }
    async deleteKekhususanHukumTataUsahaNegara(req, res) {
        try {
            const result = await kekhususa_hukum_tatausaha_service_1.default.deleteKekhususanHukumTataUsahaNegara(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Kekhususan Hukum Tata Usaha Negara berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus kekhususan hukum pidana",
            });
        }
    }
    async createProspekKarirTataUsahaNegara(req, res) {
        try {
            const { title, deskripsi, kategori } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const prospekKarir = await kekhususa_hukum_tatausaha_service_1.default.createProspekKarirTataUsahaNegara({
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
    async getAllProspekKarirTataUsahaNegara(req, res) {
        try {
            const prospekKarir = await kekhususa_hukum_tatausaha_service_1.default.getAllProspekKarirTataUsahaNegara();
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
    async updateProspekKarirTataUsahaNegara(req, res) {
        try {
            const { title, deskripsi, kategori } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const updateData = {
                title,
                deskripsi,
                kategori: kategoriJson,
            };
            const updatedProspekKarir = await kekhususa_hukum_tatausaha_service_1.default.updateProspekKarirTataUsahaNegara(Number(req.params.id), updateData);
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
    async deleteProspekKarirTataUsahaNegara(req, res) {
        try {
            const result = await kekhususa_hukum_tatausaha_service_1.default.deleteProspekKarirTataUsahaNegara(Number(req.params.id));
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
    async createStatistikKekhususanHukumTataUsahaNegara(req, res) {
        try {
            const { sks, mahasiswaAktif, tingkatKelulusan, alumniProfesional, slogan, deskripsi, } = req.body;
            const statistikKekhususanHukumTataUsahaNegara = await kekhususa_hukum_tatausaha_service_1.default.createStatistikKekhususanHukumTataUsahaNegara({
                sks,
                mahasiswaAktif,
                tingkatKelulusan,
                alumniProfesional,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikKekhususanHukumTataUsahaNegara,
            });
        }
        catch (error) {
            console.error("Error in createStatistikKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik kekhususan hukum pidana",
            });
        }
    }
    async getAllStatistikKekhususanHukumTataUsahaNegara(req, res) {
        try {
            const statistikKekhususanHukumTataUsahaNegara = await kekhususa_hukum_tatausaha_service_1.default.getAllStatistikKekhususanHukumTataUsahaNegara();
            return res.status(200).json({
                success: true,
                data: statistikKekhususanHukumTataUsahaNegara,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik kekhususan hukum pidana",
            });
        }
    }
    async updateStatistikKekhususanHukumTataUsahaNegara(req, res) {
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
            const updatedStatistikKekhususanHukumTataUsahaNegara = await kekhususa_hukum_tatausaha_service_1.default.updateStatistikKekhususanHukumTataUsahaNegara(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Kekhususan Hukum Tata Usaha Negara berhasil diupdate",
                data: updatedStatistikKekhususanHukumTataUsahaNegara,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik kekhususan hukum tata usaha negara",
            });
        }
    }
    async deleteStatistikKekhususanHukumTataUsahaNegara(req, res) {
        try {
            const result = await kekhususa_hukum_tatausaha_service_1.default.deleteStatistikKekhususanHukumTataUsahaNegara(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Kekhususan Hukum Tata Usaha Negara berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikKekhususanHukumTataUsahaNegara:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik kekhususan hukum tata usaha negara",
            });
        }
    }
}
exports.default = new KekhususanHukumTatausahaController();
