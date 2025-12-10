"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class UjianKomprehensifService {
    async createUjianKomprehensif(data) {
        let fotoUrl;
        if (data.foto) {
            fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
        }
        return prisma_1.default.ujianKomprehensif.create({
            data: {
                ...data,
                foto: fotoUrl || null,
            },
        });
    }
    async getAllUjianKomprehensif() {
        return prisma_1.default.ujianKomprehensif.findMany();
    }
    async updateUjianKomprehensif(id, data) {
        try {
            const updateData = {
                title: data.title,
                kategori: data.kategori,
                foto: data.foto,
                type: data.type,
                waktu: data.waktu,
                deskripsi: data.deskripsi,
            };
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedUjianKomprehensif = await prisma_1.default.ujianKomprehensif.update({
                where: { id },
                data: updateData,
            });
            return updatedUjianKomprehensif;
        }
        catch (error) {
            console.error("Error in updateUjianKomprehensif:", error);
            throw error;
        }
    }
    async deleteUjianKomprehensif(id) {
        try {
            const deletedUjianKomprehensif = await prisma_1.default.ujianKomprehensif.delete({
                where: { id },
            });
            return deletedUjianKomprehensif;
        }
        catch (error) {
            console.error("Error in deleteUjianKomprehensif:", error);
            throw error;
        }
    }
    async createStatistikUjianKomprehensif(data) {
        return prisma_1.default.statistikUjianKomprehensif.create({
            data,
        });
    }
    async getAllStatistikUjianKomprehensif() {
        return prisma_1.default.statistikUjianKomprehensif.findMany();
    }
    async updateStatistikUjianKomprehensif(id, data) {
        try {
            const updatedStatistikUjianKomprehensif = await prisma_1.default.statistikUjianKomprehensif.update({
                where: { id },
                data,
            });
            return updatedStatistikUjianKomprehensif;
        }
        catch (error) {
            console.error("Error in updateStatistikUjianKomprehensif:", error);
            throw error;
        }
    }
    async deleteStatistikUjianKomprehensif(id) {
        try {
            const deletedStatistikUjianKomprehensif = await prisma_1.default.statistikUjianKomprehensif.delete({
                where: { id },
            });
            return deletedStatistikUjianKomprehensif;
        }
        catch (error) {
            console.error("Error in deleteStatistikUjianKomprehensif:", error);
            throw error;
        }
    }
}
exports.default = new UjianKomprehensifService();
