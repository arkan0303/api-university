"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const beasiswa_indonesia_service_1 = __importDefault(require("../services/beasiswa-indonesia-service"));
class BeasiswaIndonesiaController {
    async createBeasiswaIndonesia(req, res) {
        try {
            const { title, oleh, nominal, waktu, sebanyak, tentang, persyaratan, manfaat, batasWaktu, email, noTelp, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const olehJson = JSON.parse(oleh);
            const persyaratanJson = JSON.parse(persyaratan);
            const manfaatJson = JSON.parse(manfaat);
            const createBeasiswaIndonesia = await beasiswa_indonesia_service_1.default.createBeasiswaIndonesia({
                foto: req.files["foto"][0],
                title,
                oleh: olehJson,
                nominal,
                waktu,
                sebanyak,
                tentang,
                persyaratan: persyaratanJson,
                manfaat: manfaatJson,
                batasWaktu,
                email,
                noTelp,
            });
            return res.status(201).json({
                success: true,
                data: createBeasiswaIndonesia,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat beasiswa Indonesia",
            });
        }
    }
    async getAllBeasiswaIndonesia(req, res) {
        try {
            const getAllBeasiswaIndonesia = await beasiswa_indonesia_service_1.default.getAllBeasiswaIndonesia();
            return res.status(200).json({
                success: true,
                data: getAllBeasiswaIndonesia,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan beasiswa Indonesia",
            });
        }
    }
    async updateBeasiswaIndonesia(req, res) {
        try {
            const { title, oleh, nominal, waktu, sebanyak, tentang, persyaratan, manfaat, batasWaktu, email, noTelp, } = req.body;
            const id = req.params.id;
            const olehJson = JSON.parse(oleh);
            const persyaratanJson = JSON.parse(persyaratan);
            const manfaatJson = JSON.parse(manfaat);
            const updateData = {
                title,
                oleh: olehJson,
                nominal,
                waktu,
                sebanyak,
                tentang,
                persyaratan: persyaratanJson,
                manfaat: manfaatJson,
                batasWaktu,
                email,
                noTelp,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedBeasiswaIndonesia = await beasiswa_indonesia_service_1.default.updateBeasiswaIndonesia(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Beasiswa Indonesia berhasil diupdate",
                data: updatedBeasiswaIndonesia,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui beasiswa Indonesia",
            });
        }
    }
    async deleteBeasiswaIndonesia(req, res) {
        try {
            const result = await beasiswa_indonesia_service_1.default.deleteBeasiswaIndonesia(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Beasiswa Indonesia berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteBeasiswaIndonesia:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus beasiswa Indonesia",
            });
        }
    }
    async createStatistikBeasiswaIndonesia(req, res) {
        try {
            const { totalPenerima, durasiBeasiswa, tingkatKompetitif, pendaftarTahunan, slogan, deskripsi, } = req.body;
            const createStatistikBeasiswaIndonesia = await beasiswa_indonesia_service_1.default.createStatistikBeasiswaIndonesia({
                totalPenerima,
                durasiBeasiswa,
                tingkatKompetitif,
                pendaftarTahunan,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: createStatistikBeasiswaIndonesia,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik beasiswa Indonesia",
            });
        }
    }
    async getAllStatistikBeasiswaIndonesia(req, res) {
        try {
            const getAllStatistikBeasiswaIndonesia = await beasiswa_indonesia_service_1.default.getAllStatistikBeasiswaIndonesia();
            return res.status(200).json({
                success: true,
                data: getAllStatistikBeasiswaIndonesia,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik beasiswa Indonesia",
                error,
            });
        }
    }
    async updateStatistikBeasiswaIndonesia(req, res) {
        try {
            const { totalPenerima, durasiBeasiswa, tingkatKompetitif, pendaftarTahunan, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                totalPenerima,
                durasiBeasiswa,
                tingkatKompetitif,
                pendaftarTahunan,
                slogan,
                deskripsi,
            };
            const updatedStatistik = await beasiswa_indonesia_service_1.default.updateStatistikBeasiswaIndonesia(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik beasiswa Indonesia berhasil diupdate",
                data: updatedStatistik,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikBeasiswaIndonesia:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik beasiswa Indonesia",
            });
        }
    }
    async deleteStatistikBeasiswaIndonesia(req, res) {
        try {
            const result = await beasiswa_indonesia_service_1.default.deleteStatistikBeasiswaIndonesia(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik beasiswa Indonesia berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikBeasiswaIndonesia:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik beasiswa Indonesia",
            });
        }
    }
}
exports.default = new BeasiswaIndonesiaController();
