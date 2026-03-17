"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const program_magister_hukum_service_1 = __importDefault(require("../services/program-magister-hukum-service"));
class ProgramMagisterHukumController {
    async createProgramMagisterHukum(req, res) {
        try {
            const { mata_kuliah, semester, kode_matkul, bobot, penyelenggara } = req.body;
            console.log(req.body);
            const dokumenRps = req.files?.["dokumen_rps"] || [];
            const strategis = await program_magister_hukum_service_1.default.createProgramMagisterHukum({
                semester,
                mata_kuliah,
                kode_matkul,
                bobot,
                penyelenggara,
                dokumen_rps: dokumenRps[0],
            });
            res.status(201).json({
                success: true,
                message: "Program magister hukum berhasil dibuat",
                data: strategis,
            });
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllProgramMagisterHukum(req, res) {
        try {
            const programMagisterHukum = await program_magister_hukum_service_1.default.getAllProgramMagisterHukum();
            res.status(200).json({
                success: true,
                message: "Program magister hukum berhasil diambil",
                data: programMagisterHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllProgramMagisterHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateProgramMagisterHukum(req, res) {
        try {
            const { id } = req.params;
            const { mata_kuliah, semester, kode_matkul, bobot, penyelenggara } = req.body;
            const updateData = {
                mata_kuliah,
                semester,
                kode_matkul,
                bobot,
                penyelenggara,
            };
            if (req.files?.["dokumen_rps"]?.[0]) {
                const dokumenRps = req.files["dokumen_rps"][0];
                updateData.dokumen_rps = dokumenRps;
            }
            const updatedProgramMagisterHukum = await program_magister_hukum_service_1.default.updateProgramMagisterHukum(Number(id), updateData);
            res.status(200).json({
                success: true,
                message: "Program magister hukum berhasil diupdate",
                data: updatedProgramMagisterHukum,
            });
        }
        catch (error) {
            console.error("Error in updateProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteProgramMagisterHukum(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await program_magister_hukum_service_1.default.deleteProgramMagisterHukum(Number(id));
            res.status(200).json({
                success: true,
                message: "Program magister hukum berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikProgramMagisterHukum(req, res) {
        try {
            const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } = req.body;
            const statistik = await program_magister_hukum_service_1.default.createStatistikProgramMagisterHukum({
                semester,
                sksTotal,
                akreditasi,
                alumni,
                slogan,
                deskripsi,
            });
            res.status(201).json({
                success: true,
                message: "Statistik program magister hukum berhasil dibuat",
                data: statistik,
            });
        }
        catch (error) {
            console.error("Error in createStatistikProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikProgramMagisterHukum(req, res) {
        try {
            const statistikProgramMagisterHukum = await program_magister_hukum_service_1.default.getAllStatistikProgramMagisterHukum();
            res.status(200).json({
                success: true,
                message: "Statistik program magister hukum berhasil diambil",
                data: statistikProgramMagisterHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikProgramMagisterHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikProgramMagisterHukum(req, res) {
        try {
            const { id } = req.params;
            const { semester, sksTotal, akreditasi, alumni, slogan, deskripsi } = req.body;
            const statistik = await program_magister_hukum_service_1.default.updateStatistikProgramMagisterHukum(Number(id), {
                semester,
                sksTotal,
                akreditasi,
                alumni,
                slogan,
                deskripsi,
            });
            res.status(200).json({
                success: true,
                message: "Statistik program magister hukum berhasil diupdate",
                data: statistik,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikProgramMagisterHukum(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await program_magister_hukum_service_1.default.deleteStatistikProgramMagisterHukum(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik program magister hukum berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikProgramSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createProspekKarirMagisterHukum(req, res) {
        try {
            const { judul, deskripsi } = req.body;
            if (!req.files?.["image"] || req.files["image"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "image harus diupload",
                });
            }
            const prospekKarirMagisterHukum = await program_magister_hukum_service_1.default.createProspekKarirMagisterHukum({
                judul,
                deskripsi,
                image: req.files?.["image"][0],
            });
            res.status(201).json({
                success: true,
                message: "Prospek karir magister hukum berhasil dibuat",
                data: prospekKarirMagisterHukum,
            });
        }
        catch (error) {
            console.error("Error in createProspekKarirSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllProspekKarirMagisterHukum(req, res) {
        try {
            const prospekKarirMagisterHukum = await program_magister_hukum_service_1.default.getAllProspekKarirMagisterHukum();
            res.status(200).json({
                success: true,
                message: "Prospek karir magister hukum berhasil diambil",
                data: prospekKarirMagisterHukum,
            });
        }
        catch (error) {
            console.error("Error in getAllProspekKarirSarjanaHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateProspekKarirMagisterHukum(req, res) {
        try {
            const { id } = req.params;
            const { judul, deskripsi, image } = req.body;
            const updatedData = await program_magister_hukum_service_1.default.updateProspekKarirMagisterHukum(Number(id), {
                judul,
                deskripsi,
                image,
            });
            res.status(200).json({
                success: true,
                message: "Prospek karir magister hukum berhasil diupdate",
                data: updatedData,
            });
        }
        catch (error) {
            console.error("Error in updateProspekKarirMagisterHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteProspekKarirMagisterHukum(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await program_magister_hukum_service_1.default.deleteProspekKarirMagisterHukum(Number(id));
            res.status(200).json({
                success: true,
                message: "Prospek karir magister hukum berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            console.error("Error in deleteProspekKarirMagisterHukum:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new ProgramMagisterHukumController();
