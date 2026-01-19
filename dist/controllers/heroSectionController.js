"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const heroSectionService_1 = __importDefault(require("../services/heroSectionService"));
const multer_1 = __importDefault(require("../config/multer"));
class HeroSectionController {
    // Middleware for handling file upload
    static uploadImage() {
        return multer_1.default.single("image");
    }
    async createHeroSection(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ error: "No image file provided" });
            }
            const { ururtan, status } = req.body;
            console.log(ururtan);
            // Ensure buffer exists before proceeding
            if (!req.file.buffer) {
                throw new Error("Failed to process the uploaded file");
            }
            const heroSection = await heroSectionService_1.default.createHeroSection(ururtan, req.file.buffer, status);
            res.status(201).json({
                success: true,
                data: heroSection,
            });
        }
        catch (error) {
            console.error("Error in createHeroSection:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Failed to create hero section",
            });
        }
    }
    async update(req, res) {
        try {
            const id = Number(req.params.id);
            const { ururtan, status } = req.body;
            let imageBuffer = undefined;
            if (req.file) {
                imageBuffer = req.file.buffer;
            }
            const heroSection = await heroSectionService_1.default.update(id, ururtan, imageBuffer, status);
            res.status(200).json({
                success: true,
                data: heroSection,
            });
        }
        catch (error) {
            console.error("Error in updateHeroSection:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Failed to update hero section",
            });
        }
    }
    async getDataHeroSection(req, res) {
        try {
            const heroSection = await heroSectionService_1.default.getDataHeroSection();
            res.status(200).json({
                success: true,
                data: heroSection,
            });
        }
        catch (error) {
            console.error("Error in getDataHeroSection:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Failed to get hero section data",
            });
        }
    }
    async delete(req, res) {
        try {
            const result = await heroSectionService_1.default.delete(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: " berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in delete:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus ",
            });
        }
    }
}
exports.default = HeroSectionController;
