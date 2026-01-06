"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class HeroSectionService {
    async createHeroSection(judul, deskripsi, imageBuffer, status) {
        try {
            // Upload image to Cloudinary
            const imageUrl = await (0, cloudinary_1.uploadToCloudinary)(imageBuffer);
            // Save to database
            const heroSection = await prisma_1.default.heroSection.create({
                data: {
                    judul: judul,
                    deskripsi: deskripsi,
                    image: imageUrl,
                    status: status,
                },
            });
            return heroSection;
        }
        catch (error) {
            console.error("Error in createHeroSection:", error);
            throw new Error("Failed to create hero section");
        }
    }
    async update(id, judul, deskripsi, imageBuffer, status) {
        try {
            let imageUrl = undefined;
            if (imageBuffer) {
                imageUrl = await (0, cloudinary_1.uploadToCloudinary)(imageBuffer);
            }
            const updateData = {};
            if (judul !== undefined)
                updateData.judul = judul;
            if (deskripsi !== undefined)
                updateData.deskripsi = deskripsi;
            if (imageUrl)
                updateData.image = imageUrl;
            if (status !== undefined)
                updateData.status = status;
            const heroSection = await prisma_1.default.heroSection.update({
                where: { id },
                data: updateData,
            });
            return heroSection;
        }
        catch (error) {
            console.error("Error in updateHeroSection:", error);
            throw new Error("Failed to update hero section");
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
    async delete(id) {
        try {
            const heroSections = await prisma_1.default.heroSection.delete({
                where: {
                    id,
                },
            });
            return heroSections;
        }
        catch (error) {
            console.error("Error in deleteStatistikDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
}
exports.default = new HeroSectionService();
