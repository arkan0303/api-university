"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const program_sarjana_hukum_service_1 = __importDefault(require("../services/program-sarjana-hukum-service"));
class ProgramSarjanaHukumController {
    async createProgramSarjanaHukum(req, res) {
        try {
            const { semester, judul, kategori, deskripsi } = req.body;
            console.log(req.body);
            const galeriFiles = req.files?.["image"] || [];
            const katagoriJSON = JSON.parse(kategori);
            console.log(katagoriJSON);
            const strategis = await program_sarjana_hukum_service_1.default.createProgramSarjanaHukum({
                semester,
                judul,
                kategori: katagoriJSON,
                deskripsi,
                image: galeriFiles,
            });
            res.status(201).json({
                success: true,
                message: "Program sarjana hukum berhasil dibuat",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllProgramSarjanaHukum(req, res) {
        try {
            const programSarjanaHukum = await program_sarjana_hukum_service_1.default.getAllProgramSarjanaHukum();
            res.status(200).json({
                success: true,
                message: "Program sarjana hukum berhasil diambil",
                data: programSarjanaHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateProgramSarjanaHukum(req, res) {
        try {
            const { id } = req.params;
            const { semester, judul, kategori, deskripsi } = req.body;
            const katagoriJSON = JSON.parse(kategori);
            const updateData = {
                semester,
                judul,
                kategori: katagoriJSON,
                deskripsi,
            };
            if (req.files?.["image"]?.[0]) {
                const image = req.files["image"][0];
                updateData.image = image;
            }
            const updatedProgramSarjanaHukum = await program_sarjana_hukum_service_1.default.updateProgramSarjanaHukum(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Program sarjana hukum berhasil diupdate",
                data: updatedProgramSarjanaHukum,
            });
        }
        catch (error) {
            console.error("Error in updateProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteProgramSarjanaHukum(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await program_sarjana_hukum_service_1.default.deleteProgramSarjanaHukum(Number(id));
            res.status(200).json({
                success: true,
                message: "Program sarjana hukum berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikProgramSarjanaHukum(req, res) {
        try {
            const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } = req.body;
            const statistik = await program_sarjana_hukum_service_1.default.createStatistikProgramSarjanaHukum({
                semester,
                sksTotal,
                akreditasi,
                alumni,
                slogan,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik program sarjana hukum berhasil dibuat",
                data: statistik,
            });
        }
        catch (error) {
            console.error("Error in createStatistikProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikProgramSarjanaHukum(req, res) {
        try {
            const statistikProgramSarjanaHukum = await program_sarjana_hukum_service_1.default.getAllStatistikProgramSarjanaHukum();
            res.status(200).json({
                success: true,
                message: "Statistik program sarjana hukum berhasil diambil",
                data: statistikProgramSarjanaHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikProgramSarjanaHukum(req, res) {
        try {
            const { id } = req.params;
            const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } = req.body;
            const statistik = await program_sarjana_hukum_service_1.default.updateStatistikProgramSarjanaHukum(Number(id), {
                semester,
                sksTotal,
                akreditasi,
                alumni,
                slogan,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                message: "Statistik program sarjana hukum berhasil diupdate",
                data: statistik,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikProgramSarjanaHukum(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await program_sarjana_hukum_service_1.default.deleteStatistikProgramSarjanaHukum(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik program sarjana hukum berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createProspekKarirSarjanaHukum(req, res) {
        try {
            const { judul, deskripsi } = req.body;
            const prospekKarirSarjanaHukum = await program_sarjana_hukum_service_1.default.createProspekKarirSarjanaHukum({
                judul,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Prospek karir sarjana hukum berhasil dibuat",
                data: prospekKarirSarjanaHukum,
            });
        }
        catch (error) {
            console.error("Error in createProspekKarirSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllProspekKarirSarjanaHukum(req, res) {
        try {
            const prospekKarirSarjanaHukum = await program_sarjana_hukum_service_1.default.getAllProspekKarirSarjanaHukum();
            res.status(200).json({
                success: true,
                message: "Prospek karir sarjana hukum berhasil diambil",
                data: prospekKarirSarjanaHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllProspekKarirSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateProspekKarirSarjanaHukum(req, res) {
        try {
            const { id } = req.params;
            const { judul, deskripsi } = req.body;
            const updatedData = await program_sarjana_hukum_service_1.default.updateProspekKarirSarjanaHukum(Number(id), {
                judul,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                message: "Prospek karir sarjana hukum berhasil diupdate",
                data: updatedData,
            });
        }
        catch (error) {
            console.error("Error in updateProspekKarirSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteProspekKarirSarjanaHukum(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await program_sarjana_hukum_service_1.default.deleteProspekKarirSarjanaHukum(Number(id));
            res.status(200).json({
                success: true,
                message: "Prospek karir sarjana hukum berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteProspekKarirSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new ProgramSarjanaHukumController();
