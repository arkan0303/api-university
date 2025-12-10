"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tracker_study_unigal_service_1 = __importDefault(require("../services/tracker-study-unigal-service"));
class TrackerStudyUnigalController {
    async createTrackerStudyUnigal(req, res) {
        try {
            const { title, tugas, gajihRata, persentasi, institusi, keahlian } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto utama harus diupload",
                });
            }
            const tugasJson = JSON.parse(tugas);
            const keahlianJson = JSON.parse(keahlian);
            const institusiJson = JSON.parse(institusi);
            const trackerStudy = await tracker_study_unigal_service_1.default.createTrackerStudy({
                title,
                foto: req.files?.["foto"]?.[0],
                tugas: tugasJson,
                gajihRata,
                persentasi,
                institusi: institusiJson,
                keahlian: keahlianJson,
            });
            res.status(201).json({
                success: true,
                message: "Tracker Study berhasil dibuat",
                data: trackerStudy,
            });
        }
        catch (error) {
            console.error("Error in createTrackerStudy:", error);
            res.status(500).json({ error: "Failed to create tracker study" });
        }
    }
    async getAllTrackerStudyUnigal(req, res) {
        try {
            const trackerStudy = await tracker_study_unigal_service_1.default.getAllTrackerStudy();
            res.status(200).json({
                success: true,
                message: "Tracker Study berhasil diambil",
                data: trackerStudy,
            });
        }
        catch (error) {
            console.error("Error in getAllTrackerStudy:", error);
            res.status(500).json({ error: "Failed to get tracker study" });
        }
    }
    async updateTrackerStudyUnigal(req, res) {
        try {
            const { id } = req.params;
            const { title, tugas, gajihRata, persentasi, institusi, keahlian } = req.body;
            const tugasJson = JSON.parse(tugas);
            const keahlianJson = JSON.parse(keahlian);
            const institusiJson = JSON.parse(institusi);
            const updateData = {
                title,
                tugas: tugasJson,
                gajihRata,
                persentasi,
                institusi: institusiJson,
                keahlian: keahlianJson,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedTrackerStudy = await tracker_study_unigal_service_1.default.updateTrackerStudy(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Tracker Study berhasil diupdate",
                data: updatedTrackerStudy,
            });
        }
        catch (error) {
            console.error("Error in updateTrackerStudy:", error);
            res.status(500).json({ error: "Failed to update tracker study" });
        }
    }
    async deleteTrackerStudyUnigal(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await tracker_study_unigal_service_1.default.deleteTrackerStudy(Number(id));
            res.status(200).json({
                success: true,
                message: "Tracker Study berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteTrackerStudy:", error);
            res.status(500).json({ error: "Failed to delete tracker study" });
        }
    }
    async createWaktuTungguKerja(req, res) {
        try {
            const { kategoriWaktu, persentasi, deskripsi } = req.body;
            const waktuTungguKerja = await tracker_study_unigal_service_1.default.createWaktuTungguKerja({
                kategoriWaktu,
                persentasi,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Waktu Tunggu Kerja berhasil dibuat",
                data: waktuTungguKerja,
            });
        }
        catch (error) {
            console.error("Error in createWaktuTungguKerja:", error);
            res.status(500).json({ error: "Failed to create waktu tunggu kerja" });
        }
    }
    async getAllWaktuTungguKerja(req, res) {
        try {
            const waktuTungguKerja = await tracker_study_unigal_service_1.default.getAllWaktuTungguKerja();
            res.status(200).json({
                success: true,
                message: "Waktu Tunggu Kerja berhasil diambil",
                data: waktuTungguKerja,
            });
        }
        catch (error) {
            console.error("Error in getAllWaktuTungguKerja:", error);
            res.status(500).json({ error: "Failed to get waktu tunggu kerja" });
        }
    }
    async updateWaktuTungguKerjaUnigal(req, res) {
        try {
            const { id } = req.params;
            const { kategoriWaktu, persentasi, deskripsi } = req.body;
            const updateData = {
                kategoriWaktu,
                persentasi,
                deskripsi,
            };
            const updatedWaktuTungguKerja = await tracker_study_unigal_service_1.default.updateWaktuTungguKerja(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Waktu Tunggu Kerja berhasil diupdate",
                data: updatedWaktuTungguKerja,
            });
        }
        catch (error) {
            console.error("Error in updateWaktuTungguKerja:", error);
            res.status(500).json({ error: "Failed to update waktu tunggu kerja" });
        }
    }
    async deleteWaktuTungguKerjaUnigal(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await tracker_study_unigal_service_1.default.deleteWaktuTungguKerja(Number(id));
            res.status(200).json({
                success: true,
                message: "Waktu Tunggu Kerja berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteWaktuTungguKerja:", error);
            res.status(500).json({ error: "Failed to delete waktu tunggu kerja" });
        }
    }
    async createStatistikTrackerStudyUnigal(req, res) {
        try {
            const { tingkatKeterserapan, rataGaji, waktuTungguKerja, kesesuaianBidang, slogan, deskripsi, } = req.body;
            const statistikTrackerStudy = await tracker_study_unigal_service_1.default.createStatistikTrackerStudy({
                tingkatKeterserapan,
                rataGaji,
                waktuTungguKerja,
                kesesuaianBidang,
                slogan,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik Tracker Study berhasil dibuat",
                data: statistikTrackerStudy,
            });
        }
        catch (error) {
            console.error("Error in createStatistikTrackerStudy:", error);
            res
                .status(500)
                .json({ error: "Failed to create statistik tracker study" });
        }
    }
    async getAllStatistikTrackerStudyUnigal(req, res) {
        try {
            const statistikTrackerStudy = await tracker_study_unigal_service_1.default.getAllStatistikTrackerStudy();
            res.status(200).json({
                success: true,
                message: "Statistik Tracker Study berhasil diambil",
                data: statistikTrackerStudy,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikTrackerStudy:", error);
            res.status(500).json({ error: "Failed to get statistik tracker study" });
        }
    }
    async updateStatistikTrackerStudyUnigal(req, res) {
        try {
            const { id } = req.params;
            const { tingkatKeterserapan, rataGaji, waktuTungguKerja, kesesuaianBidang, slogan, deskripsi, } = req.body;
            const updateData = {
                tingkatKeterserapan,
                rataGaji,
                waktuTungguKerja,
                kesesuaianBidang,
                slogan,
                deskripsi,
            };
            const updatedStatistikTrackerStudy = await tracker_study_unigal_service_1.default.updateStatistikTrackerStudy(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Tracker Study berhasil diupdate",
                data: updatedStatistikTrackerStudy,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikTrackerStudy:", error);
            res
                .status(500)
                .json({ error: "Failed to update statistik tracker study" });
        }
    }
    async deleteStatistikTrackerStudyUnigal(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await tracker_study_unigal_service_1.default.deleteStatistikTrackerStudy(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik Tracker Study berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikTrackerStudy:", error);
            res
                .status(500)
                .json({ error: "Failed to delete statistik tracker study" });
        }
    }
}
exports.default = new TrackerStudyUnigalController();
