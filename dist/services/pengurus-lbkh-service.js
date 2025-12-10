"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class PengurusLBKHService {
    async createPengurusLBKH(data) {
        try {
            let fotoUrl;
            if (data.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            }
            const pengurusLBKH = await prisma_1.default.pengurusLBKH.create({
                data: {
                    ...data,
                    foto: fotoUrl || null,
                },
            });
            return pengurusLBKH;
        }
        catch (error) {
            console.error("Error in createPengurusLBKH:", error);
            throw error;
        }
    }
    async getAllPengurusLBKH() {
        try {
            const pengurusLBKH = await prisma_1.default.pengurusLBKH.findMany();
            return pengurusLBKH;
        }
        catch (error) {
            console.error("Error in getAllPengurusLBKH:", error);
            throw error;
        }
    }
    async updatePengurusLBKH(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                deskripsi: data.deskripsi,
                jabatan: data.jabatan,
                kategori: data.kategori,
                email: data.email,
                noTelp: data.noTelp,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedPengurusLBKH = await prisma_1.default.pengurusLBKH.update({
                where: { id },
                data: updateData,
            });
            return updatedPengurusLBKH;
        }
        catch (error) {
            console.error("Error in updatePengurusLBKH:", error);
            throw error;
        }
    }
    async deletePengurusLBKH(id) {
        try {
            const deletedPengurusLBKH = await prisma_1.default.pengurusLBKH.delete({
                where: { id },
            });
            return deletedPengurusLBKH;
        }
        catch (error) {
            console.error("Error in deletePengurusLBKH:", error);
            throw error;
        }
    }
    async createStatistikPengurusLBKH(data) {
        try {
            const statistikPengurusLBKH = await prisma_1.default.statistikPengurusLBKH.create({
                data,
            });
            return statistikPengurusLBKH;
        }
        catch (error) {
            console.error("Error in createStatistikPengurusLBKH:", error);
            throw error;
        }
    }
    async getAllStatistikPengurusLBKH() {
        try {
            const statistikPengurusLBKH = await prisma_1.default.statistikPengurusLBKH.findMany();
            return statistikPengurusLBKH;
        }
        catch (error) {
            console.error("Error in getAllStatistikPengurusLBKH:", error);
            throw error;
        }
    }
    async updateStatistikPengurusLBKH(id, data) {
        try {
            const updatedStatistikPengurusLBKH = await prisma_1.default.statistikPengurusLBKH.update({
                where: { id },
                data,
            });
            return updatedStatistikPengurusLBKH;
        }
        catch (error) {
            console.error("Error in updateStatistikPengurusLBKH:", error);
            throw error;
        }
    }
    async deleteStatistikPengurusLBKH(id) {
        try {
            const deletedStatistikPengurusLBKH = await prisma_1.default.statistikPengurusLBKH.delete({
                where: { id },
            });
            return deletedStatistikPengurusLBKH;
        }
        catch (error) {
            console.error("Error in deleteStatistikPengurusLBKH:", error);
            throw error;
        }
    }
}
exports.default = new PengurusLBKHService();
