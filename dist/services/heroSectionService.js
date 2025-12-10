"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class HeroSectionService {
    async createHeroSection(judul, deskripsi, imageBuffer) {
        try {
            // Upload image to Cloudinary
            const imageUrl = await (0, cloudinary_1.uploadToCloudinary)(imageBuffer);
            // Save to database
            const heroSection = await prisma_1.default.heroSection.create({
                data: {
                    judul: judul,
                    deskripsi: deskripsi,
                    image: imageUrl,
                },
            });
            return heroSection;
        }
        catch (error) {
            console.error("Error in createHeroSection:", error);
            throw new Error("Failed to create hero section");
        }
    }
    async getDataHeroSection() {
        try {
            const heroSection = await prisma_1.default.heroSection.findMany();
            return heroSection;
        }
        catch (error) {
            console.error("Error in getDataHeroSection:", error);
            throw new Error("Failed to get hero section data");
        }
    }
}
exports.default = new HeroSectionService();
