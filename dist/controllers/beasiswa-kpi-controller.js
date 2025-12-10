"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const beasiswa_kip_service_1 = __importDefault(require("../services/beasiswa-kip-service"));
class BeasiswaKipController {
    async createBeasiswaKip(req, res) {
        try {
            const { manfaat, judulPersyaratan, persyaratan } = req.body;
            const manfaatJson = JSON.parse(manfaat);
            const persyaratanJson = JSON.parse(persyaratan);
            const createBeasiswaKip = await beasiswa_kip_service_1.default.createBeasiswaKIP({
                manfaat: manfaatJson,
                judulPersyaratan,
                persyaratan: persyaratanJson,
            });
            return res.status(201).json({
                success: true,
                data: createBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat beasiswa KIP",
            });
        }
    }
    async getAllBeasiswaKip(req, res) {
        try {
            const getAllBeasiswaKip = await beasiswa_kip_service_1.default.getAllBeasiswaKIP();
            return res.status(200).json({
                success: true,
                data: getAllBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan beasiswa KIP",
            });
        }
    }
    async updateBeasiswaKip(req, res) {
        try {
            const { manfaat, judulPersyaratan, persyaratan } = req.body;
            const manfaatJson = JSON.parse(manfaat);
            const persyaratanJson = JSON.parse(persyaratan);
            const updateBeasiswaKip = await beasiswa_kip_service_1.default.updateBeasiswaKIP(Number(req.params.id), {
                manfaat: manfaatJson,
                judulPersyaratan,
                persyaratan: persyaratanJson,
            });
            return res.status(200).json({
                success: true,
                message: "Beasiswa KIP berhasil diupdate",
                data: updateBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui beasiswa KIP",
            });
        }
    }
    async deleteBeasiswaKip(req, res) {
        try {
            const deleteBeasiswaKip = await beasiswa_kip_service_1.default.deleteBeasiswaKIP(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Beasiswa KIP berhasil dihapus",
                data: deleteBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus beasiswa KIP",
            });
        }
    }
    async createTimelineBeasiswaKip(req, res) {
        try {
            const { title, waktu, deskripsi } = req.body;
            const createTimelineBeasiswaKip = await beasiswa_kip_service_1.default.createTimelineBeasiswaKIP({
                title,
                waktu,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: createTimelineBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat timeline beasiswa KIP",
            });
        }
    }
    async getAllTimelineBeasiswaKip(req, res) {
        try {
            const getAllTimelineBeasiswaKip = await beasiswa_kip_service_1.default.getAllTimelineBeasiswaKIP();
            return res.status(200).json({
                success: true,
                data: getAllTimelineBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan timeline beasiswa KIP",
            });
        }
    }
    async updateTimelineBeasiswaKip(req, res) {
        try {
            const { title, waktu, deskripsi } = req.body;
            const updateTimelineBeasiswaKip = await beasiswa_kip_service_1.default.updateTimelineBeasiswaKIP(Number(req.params.id), {
                title,
                waktu,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Timeline beasiswa KIP berhasil diupdate",
                data: updateTimelineBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui timeline beasiswa KIP",
            });
        }
    }
    async deleteTimelineBeasiswaKip(req, res) {
        try {
            const deleteTimelineBeasiswaKip = await beasiswa_kip_service_1.default.deleteTimelineBeasiswaKIP(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Timeline beasiswa KIP berhasil dihapus",
                data: deleteTimelineBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus timeline beasiswa KIP",
            });
        }
    }
    async createStatistikBeasiswaKip(req, res) {
        try {
            const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } = req.body;
            const createStatistikBeasiswaKip = await beasiswa_kip_service_1.default.createStatistikBeasiswaKIP({
                nilaiBeasiswa,
                durasi,
                kuota,
                deadline,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: createStatistikBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik beasiswa KIP",
            });
        }
    }
    async getAllStatistikBeasiswaKip(req, res) {
        try {
            const getAllStatistikBeasiswaKip = await beasiswa_kip_service_1.default.getAllStatistikBeasiswaKIP();
            return res.status(200).json({
                success: true,
                data: getAllStatistikBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik beasiswa KIP",
            });
        }
    }
    async updateStatistikBeasiswaKip(req, res) {
        try {
            const { nilaiBeasiswa, durasi, kuota, deadline, slogan, deskripsi } = req.body;
            const updateStatistikBeasiswaKip = await beasiswa_kip_service_1.default.updateStatistikBeasiswaKIP(Number(req.params.id), {
                nilaiBeasiswa,
                durasi,
                kuota,
                deadline,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik beasiswa KIP berhasil diupdate",
                data: updateStatistikBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik beasiswa KIP",
            });
        }
    }
    async deleteStatistikBeasiswaKip(req, res) {
        try {
            const deleteStatistikBeasiswaKip = await beasiswa_kip_service_1.default.deleteStatistikBeasiswaKIP(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik beasiswa KIP berhasil dihapus",
                data: deleteStatistikBeasiswaKip,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik beasiswa KIP",
            });
        }
    }
}
exports.default = new BeasiswaKipController();
