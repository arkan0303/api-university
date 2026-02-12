"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const seminar_proposal_service_1 = __importDefault(require("../services/seminar-proposal-service"));
class SeminarProposalController {
    async createSeminarProposal(req, res) {
        try {
            const { title, kategori } = req.body;
            const kategoriJson = JSON.parse(kategori);
            const seminarProposal = await seminar_proposal_service_1.default.createSeminarProposal({
                title,
                kategori: kategoriJson,
                foto: req.files?.["foto"]?.[0],
            });
            return res.status(201).json({
                success: true,
                message: "Seminar proposal berhasil dibuat",
                data: seminarProposal,
            });
        }
        catch (error) {
            console.error("Error in createSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat seminar proposal",
            });
        }
    }
    async getAllSeminarProposal(req, res) {
        try {
            const seminarProposal = await seminar_proposal_service_1.default.getAllSeminarProposal();
            return res.status(200).json({
                success: true,
                message: "Seminar proposal berhasil diambil",
                data: seminarProposal,
            });
        }
        catch (error) {
            console.error("Error in getAllSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil seminar proposal",
            });
        }
    }
    async updateSeminarProposal(req, res) {
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
            const updatedSeminarProposal = await seminar_proposal_service_1.default.updateSeminarProposal(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Seminar proposal berhasil diupdate",
                data: updatedSeminarProposal,
            });
        }
        catch (error) {
            console.error("Error in updateSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate seminar proposal",
            });
        }
    }
    async deleteSeminarProposal(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await seminar_proposal_service_1.default.deleteSeminarProposal(Number(id));
            return res.status(200).json({
                success: true,
                message: "Seminar proposal berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus seminar proposal",
            });
        }
    }
    async createProsedurPelaksanaan(req, res) {
        try {
            const { tahapan, deskripsi } = req.body;
            const prosedurPelaksanaan = await seminar_proposal_service_1.default.createProsedurPelaksanaan({
                tahapan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Prosedur pelaksanaan berhasil dibuat",
                data: prosedurPelaksanaan,
            });
        }
        catch (error) {
            console.error("Error in createProsedurPelaksanaan:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat prosedur pelaksanaan",
            });
        }
    }
    async getAllProsedurPelaksanaan(req, res) {
        try {
            const prosedurPelaksanaan = await seminar_proposal_service_1.default.getAllProsedurPelaksanaan();
            return res.status(200).json({
                success: true,
                message: "Prosedur pelaksanaan berhasil diambil",
                data: prosedurPelaksanaan,
            });
        }
        catch (error) {
            console.error("ERROR PROSEDUR:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil prosedur pelaksanaan",
                error: error.message, // sementara buat debug
            });
        }
    }
    async updateProsedurPelaksanaan(req, res) {
        try {
            const { tahapan, deskripsi } = req.body;
            const id = req.params.id;
            const updateData = {
                tahapan,
                deskripsi,
            };
            const updatedProsedurPelaksanaan = await seminar_proposal_service_1.default.updateProsedurPelaksanaan(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Prosedur pelaksanaan berhasil diupdate",
                data: updatedProsedurPelaksanaan,
            });
        }
        catch (error) {
            console.error("Error in updateProsedurPelaksanaan:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate prosedur pelaksanaan",
            });
        }
    }
    async deleteProsedurPelaksanaan(req, res) {
        try {
            const id = req.params.id;
            const deletedData = await seminar_proposal_service_1.default.deleteProsedurPelaksanaan(Number(id));
            return res.status(200).json({
                success: true,
                message: "Prosedur pelaksanaan berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteProsedurPelaksanaan:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus prosedur pelaksanaan",
            });
        }
    }
    async createStatistikSeminarProposal(req, res) {
        try {
            const { seminarPerTahun, tingkatKelulusan, bulanPersiapan, timPenguji, slogan, deskripsi, } = req.body;
            const statistikSeminarProposal = await seminar_proposal_service_1.default.createStatistikSeminarProposal({
                seminarPerTahun,
                tingkatKelulusan,
                bulanPersiapan,
                timPenguji,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik seminar proposal berhasil dibuat",
                data: statistikSeminarProposal,
            });
        }
        catch (error) {
            console.error("Error in createStatistikSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik seminar proposal",
            });
        }
    }
    async getAllStatistikSeminarProposal(req, res) {
        try {
            const statistikSeminarProposal = await seminar_proposal_service_1.default.getAllStatistikSeminarProposal();
            return res.status(200).json({
                success: true,
                message: "Statistik seminar proposal berhasil diambil",
                data: statistikSeminarProposal,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik seminar proposal",
            });
        }
    }
    async updateStatistikSeminarProposal(req, res) {
        try {
            const { id } = req.params;
            const { seminarPerTahun, tingkatKelulusan, bulanPersiapan, timPenguji, slogan, deskripsi, } = req.body;
            const statistikSeminarProposal = await seminar_proposal_service_1.default.updateStatistikSeminarProposal(Number(id), {
                seminarPerTahun,
                tingkatKelulusan,
                bulanPersiapan,
                timPenguji,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik seminar proposal berhasil diupdate",
                data: statistikSeminarProposal,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate statistik seminar proposal",
            });
        }
    }
    async deleteStatistikSeminarProposal(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await seminar_proposal_service_1.default.deleteStatistikSeminarProposal(Number(id));
            return res.status(200).json({
                success: true,
                message: "Statistik seminar proposal berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikSeminarProposal:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik seminar proposal",
            });
        }
    }
}
exports.default = new SeminarProposalController();
