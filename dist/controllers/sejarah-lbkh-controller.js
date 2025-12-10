"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sejarah_lbkh_service_1 = __importDefault(require("../services/sejarah-lbkh-service"));
class SejarahLBKHController {
    async createSejarahLBKH(req, res) {
        try {
            const { title, deskripsi, tahun } = req.body;
            const galeriFiles = req.files?.["foto"] || [];
            const sejarahLBKH = await sejarah_lbkh_service_1.default.create({
                title,
                foto: Array.isArray(galeriFiles) ? galeriFiles : [galeriFiles],
                deskripsi,
                tahun,
            });
            res.status(201).json({
                success: true,
                data: sejarahLBKH,
            });
        }
        catch (error) {
            console.error("Error in createSejarahLBKH:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateSejarahLBKH(req, res) {
        try {
            const { id } = req.params;
            const { title, deskripsi, tahun } = req.body;
            const galeriFiles = req.files?.["foto"] || [];
            const sejarahLBKH = await sejarah_lbkh_service_1.default.updateSejarahLBKH(Number(id), {
                title,
                foto: Array.isArray(galeriFiles) ? galeriFiles : [galeriFiles],
                deskripsi,
                tahun,
            });
            res.status(200).json({
                success: true,
                data: sejarahLBKH,
            });
        }
        catch (error) {
            console.error("Error in updateSejarahLBKH:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteSejarahLBKH(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await sejarah_lbkh_service_1.default.deleteSejarahLBKH(Number(id));
            res.status(200).json({
                success: true,
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteSejarahLBKH:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllSejarahLBKH(req, res) {
        try {
            const sejarahLBKHH = await sejarah_lbkh_service_1.default.getAllSejarahLBKH();
            res.status(200).json({
                success: true,
                data: sejarahLBKHH,
            });
        }
        catch (error) {
            console.error("Error in getAllSejarahLBKH:", error);
            res.status(500).json({ error: "Failed to get sejarah LBKH" });
        }
    }
    async createStatistik(req, res) {
        try {
            const { tahun, kasus, advokat, hukumTerakreditasi, slogan, deskripsi } = req.body;
            const statistikSejarahLBKH = await sejarah_lbkh_service_1.default.createStatistik({
                tahun,
                kasus,
                advokat,
                hukumTerakreditasi,
                slogan,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                data: statistikSejarahLBKH,
            });
        }
        catch (error) {
            console.error("Error in createStatistik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistik(req, res) {
        try {
            const { id } = req.params;
            const { tahun, kasus, advokat, hukumTerakreditasi, slogan, deskripsi } = req.body;
            const statistikSejarahLBKH = await sejarah_lbkh_service_1.default.updateStatistik(Number(id), {
                tahun,
                kasus,
                advokat,
                hukumTerakreditasi,
                slogan,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                data: statistikSejarahLBKH,
            });
        }
        catch (error) {
            console.error("Error in updateStatistik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistik(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await sejarah_lbkh_service_1.default.deleteStatistik(Number(id));
            res.status(200).json({
                success: true,
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistik:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistik(req, res) {
        try {
            const statistikSejarahLBKH = await sejarah_lbkh_service_1.default.getAllStatistik();
            res.status(200).json({
                success: true,
                data: statistikSejarahLBKH,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistik:", error);
            res.status(500).json({ error: "Failed to get statistik sejarah LBKH" });
        }
    }
}
exports.default = new SejarahLBKHController();
