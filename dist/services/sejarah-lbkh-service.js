"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SejarahLBKHService {
    async create(data) {
        try {
            let galeriData = [];
            if (data.foto && data.foto.length > 0) {
                const uploadedUrls = await Promise.all(data.foto.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const sejarahLBKH = await prisma_1.default.sejarahLBKH.create({
                data: {
                    title: data.title,
                    foto: galeriData,
                    deskripsi: data.deskripsi,
                    tahun: data.tahun,
                },
            });
            return sejarahLBKH;
        }
        catch (error) {
            console.error("Error in createSejarahLBKH:", error);
            throw error;
        }
    }
    async getAllSejarahLBKH() {
        try {
            const sejarahLBKHH = await prisma_1.default.sejarahLBKH.findMany();
            return sejarahLBKHH;
        }
        catch (error) {
            console.error("Error in getAllSejarahLBKH:", error);
            throw error;
        }
    }
    async updateSejarahLBKH(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                tahun: data.tahun,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto[0].buffer);
                updateData.foto = fotoUrl;
            }
            const updatedSejarahLBKH = await prisma_1.default.sejarahLBKH.update({
                where: { id },
                data: updateData,
            });
            return updatedSejarahLBKH;
        }
        catch (error) {
            console.error("Error in updateSejarahLBKH:", error);
            throw error;
        }
    }
    async deleteSejarahLBKH(id) {
        try {
            const deletedSejarahLBKH = await prisma_1.default.sejarahLBKH.delete({
                where: { id },
            });
            return deletedSejarahLBKH;
        }
        catch (error) {
            console.error("Error in deleteSejarahLBKH:", error);
            throw error;
        }
    }
    async createStatistik(data) {
        try {
            const statistikSejarahLBKH = await prisma_1.default.statistikSejarahLBKH.create({
                data: {
                    tahun: data.tahun,
                    kasus: data.kasus,
                    advokat: data.advokat,
                    hukumTerakreditasi: data.hukumTerakreditasi,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikSejarahLBKH;
        }
        catch (error) {
            console.error("Error in createStatistik:", error);
            throw error;
        }
    }
    async getAllStatistik() {
        try {
            const statistikSejarahLBKH = await prisma_1.default.statistikSejarahLBKH.findMany();
            return statistikSejarahLBKH;
        }
        catch (error) {
            console.error("Error in getAllStatistik:", error);
            throw error;
        }
    }
    async updateStatistik(id, data) {
        try {
            const updatedStatistikSejarahLBKH = await prisma_1.default.statistikSejarahLBKH.update({
                where: { id },
                data: data,
            });
            return updatedStatistikSejarahLBKH;
        }
        catch (error) {
            console.error("Error in updateStatistik:", error);
            throw error;
        }
    }
    async deleteStatistik(id) {
        try {
            const deletedStatistikSejarahLBKH = await prisma_1.default.statistikSejarahLBKH.delete({
                where: { id },
            });
            return deletedStatistikSejarahLBKH;
        }
        catch (error) {
            console.error("Error in deleteStatistik:", error);
            throw error;
        }
    }
}
exports.default = new SejarahLBKHService();
