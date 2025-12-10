"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class VisMisiService {
    async createVisMisi(visMisi) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(visMisi.gambar.buffer);
            const visMisii = await prisma_1.default.visiMisi.create({
                data: {
                    ...visMisi,
                    gambar: fotoUrl,
                },
            });
            return visMisii;
        }
        catch (error) {
            console.error("Error in createVisMisi:", error);
            throw error;
        }
    }
    async getAllVisMisi() {
        try {
            const visMisi = await prisma_1.default.visiMisi.findMany();
            return visMisi;
        }
        catch (error) {
            console.error("Error in getAllVisMisi:", error);
            throw error;
        }
    }
    async updateVisMisi(id, visMisii) {
        try {
            const updateData = {
                type: visMisii.type,
                title: visMisii.title,
                deskripsi: visMisii.deskripsi,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (visMisii.gambar) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(visMisii.gambar.buffer);
                updateData.gambar = fotoUrl;
            }
            const visMisi = await prisma_1.default.visiMisi.update({
                where: { id: id },
                data: updateData,
            });
            return visMisi;
        }
        catch (error) {
            console.error("Error in updateVisMisi:", error);
            throw error;
        }
    }
    async deleteVisMisi(id) {
        try {
            const visMisi = await prisma_1.default.visiMisi.delete({
                where: {
                    id: id,
                },
            });
            return visMisi;
        }
        catch (error) {
            console.error("Error in deleteVisMisi:", error);
            throw error;
        }
    }
    async createStatistikVisiMisi(statistikVisiMisii) {
        try {
            const statistikVisiMisi = await prisma_1.default.statistikVisiMisi.create({
                data: statistikVisiMisii,
            });
            return statistikVisiMisi;
        }
        catch (error) {
            console.error("Error in createStatistikVisiMisi:", error);
            throw error;
        }
    }
    async getAllStatistikVisiMisi() {
        try {
            const statistikVisiMisi = await prisma_1.default.statistikVisiMisi.findMany();
            return statistikVisiMisi;
        }
        catch (error) {
            console.error("Error in getAllStatistikVisiMisi:", error);
            throw error;
        }
    }
    async updateStatistikVisiMisi(id, statistikVisiMisii) {
        try {
            const statistikVisiMisi = await prisma_1.default.statistikVisiMisi.update({
                where: { id: id },
                data: statistikVisiMisii,
            });
            return statistikVisiMisi;
        }
        catch (error) {
            console.error("Error in updateStatistikVisiMisi:", error);
            throw error;
        }
    }
    async deleteStatistikVisiMisi(id) {
        try {
            const statistikVisiMisi = await prisma_1.default.statistikVisiMisi.delete({
                where: {
                    id: id,
                },
            });
            return statistikVisiMisi;
        }
        catch (error) {
            console.error("Error in deleteStatistikVisiMisi:", error);
            throw error;
        }
    }
}
exports.default = new VisMisiService();
