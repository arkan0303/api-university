"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const beasiswa_bri_service_1 = __importDefault(require("../services/beasiswa-bri-service"));
class BeasiswaBriController {
    async createBeasiswaBri(req, res) {
        try {
            const { tentangProgram, manfaat, judulPersyaratan, persyaratan } = req.body;
            const manfaatJson = JSON.parse(manfaat);
            const persyaratanJson = JSON.parse(persyaratan);
            const createBeasiswaBri = await beasiswa_bri_service_1.default.createBeasiswaBri({
                tentangProgram,
                manfaat: manfaatJson,
                judulPersyaratan,
                persyaratan: persyaratanJson,
            });
            return res.status(201).json({
                success: true,
                data: createBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat beasiswa BRI",
            });
        }
    }
    async getAllBeasiswaBri(req, res) {
        try {
            const getAllBeasiswaBri = await beasiswa_bri_service_1.default.getAllBeasiswaBri();
            return res.status(200).json({
                success: true,
                data: getAllBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan beasiswa BRI",
            });
        }
    }
    async updateBeasiswaBri(req, res) {
        try {
            const { tentangProgram, manfaat, judulPersyaratan, persyaratan } = req.body;
            const manfaatJson = JSON.parse(manfaat);
            const persyaratanJson = JSON.parse(persyaratan);
            const updateBeasiswaBri = await beasiswa_bri_service_1.default.updateBeasiswaBri(Number(req.params.id), {
                tentangProgram,
                manfaat: manfaatJson,
                judulPersyaratan,
                persyaratan: persyaratanJson,
            });
            return res.status(200).json({
                success: true,
                message: "Beasiswa BRI berhasil diupdate",
                data: updateBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui beasiswa BRI",
            });
        }
    }
    async deleteBeasiswaBri(req, res) {
        try {
            const deleteBeasiswaBri = await beasiswa_bri_service_1.default.deleteBeasiswaBri(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Beasiswa BRI berhasil dihapus",
                data: deleteBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus beasiswa BRI",
            });
        }
    }
    async createTimelineBeasiswaBri(req, res) {
        try {
            const { title, waktu, deskripsi } = req.body;
            const createTimelineBeasiswaBri = await beasiswa_bri_service_1.default.createTimelineBeasiswaBri({
                title,
                waktu,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: createTimelineBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat timeline beasiswa BRI",
            });
        }
    }
    async getAllTimelineBeasiswaBri(req, res) {
        try {
            const getAllTimelineBeasiswaBri = await beasiswa_bri_service_1.default.getAllTimelineBeasiswaBri();
            return res.status(200).json({
                success: true,
                data: getAllTimelineBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan timeline beasiswa BRI",
            });
        }
    }
    async updateTimelineBeasiswaBri(req, res) {
        try {
            const { title, waktu, deskripsi } = req.body;
            const updateTimelineBeasiswaBri = await beasiswa_bri_service_1.default.updateTimelineBeasiswaBri(Number(req.params.id), {
                title,
                waktu,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Timeline beasiswa BRI berhasil diupdate",
                data: updateTimelineBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui timeline beasiswa BRI",
            });
        }
    }
    async deleteTimelineBeasiswaBri(req, res) {
        try {
            const deleteTimelineBeasiswaBri = await beasiswa_bri_service_1.default.deleteTimelineBeasiswaBri(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Timeline beasiswa BRI berhasil dihapus",
                data: deleteTimelineBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus timeline beasiswa BRI",
            });
        }
    }
    async createStatistikBeasiswaBri(req, res) {
        try {
            const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } = req.body;
            const createStatistikBeasiswaBri = await beasiswa_bri_service_1.default.createStatistikBeasiswaBri({
                nilaiBeasiswa,
                durasi,
                kuota,
                deadline,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: createStatistikBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik beasiswa BRI",
            });
        }
    }
    async getAllStatistikBeasiswaBri(req, res) {
        try {
            const getAllStatistikBeasiswaBri = await beasiswa_bri_service_1.default.getAllStatistikBeasiswaBri();
            return res.status(200).json({
                success: true,
                data: getAllStatistikBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik beasiswa BRI",
            });
        }
    }
    async updateStatistikBeasiswaBri(req, res) {
        try {
            const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } = req.body;
            const updateStatistikBeasiswaBri = await beasiswa_bri_service_1.default.updateStatistikBeasiswaBri(Number(req.params.id), {
                nilaiBeasiswa,
                durasi,
                kuota,
                deadline,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik beasiswa BRI berhasil diupdate",
                data: updateStatistikBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik beasiswa BRI",
            });
        }
    }
    async deleteStatistikBeasiswaBri(req, res) {
        try {
            const deleteStatistikBeasiswaBri = await beasiswa_bri_service_1.default.deleteStatistikBeasiswaBri(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik beasiswa BRI berhasil dihapus",
                data: deleteStatistikBeasiswaBri,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik beasiswa BRI",
            });
        }
    }
}
exports.default = new BeasiswaBriController();
