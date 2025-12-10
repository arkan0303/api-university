"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class PendampinganHukumService {
    async createPendampinganHukum(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createPendampinganHukum = await prisma_1.default.pendampinganHukum.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    waktu: data.waktu,
                },
            });
            return createPendampinganHukum;
        }
        catch (error) {
            console.error("Error in createPendampinganHukum:", error);
            return null;
        }
    }
    async getAllPendampinganHukum() {
        try {
            const getAllPendampinganHukum = await prisma_1.default.pendampinganHukum.findMany();
            return getAllPendampinganHukum;
        }
        catch (error) {
            console.error("Error in getAllPendampinganHukum:", error);
            return null;
        }
    }
    async updatePendampinganHukum(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                waktu: data.waktu,
                kategori: data.kategori,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedPendampinganHukum = await prisma_1.default.pendampinganHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedPendampinganHukum;
        }
        catch (error) {
            console.error("Error in updatePendampinganHukum:", error);
            throw error;
        }
    }
    async deletePendampinganHukum(id) {
        try {
            const deletedPendampinganHukum = await prisma_1.default.pendampinganHukum.delete({
                where: { id },
            });
            return deletedPendampinganHukum;
        }
        catch (error) {
            console.error("Error in deletePendampinganHukum:", error);
            throw error;
        }
    }
    async createProsedurPendampinganHukum(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createProsedurPendampinganHukum = await prisma_1.default.prosedurPendampinganHukum.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    waktu: data.waktu,
                },
            });
            return createProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in createProsedurPendampinganHukum:", error);
            return null;
        }
    }
    async getAllProsedurPendampinganHukum() {
        try {
            const getAllProsedurPendampinganHukum = await prisma_1.default.prosedurPendampinganHukum.findMany();
            return getAllProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in getAllProsedurPendampinganHukum:", error);
            return null;
        }
    }
    async updateProsedurPendampinganHukum(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                waktu: data.waktu,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedProsedurPendampinganHukum = await prisma_1.default.prosedurPendampinganHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in updateProsedurPendampinganHukum:", error);
            throw error;
        }
    }
    async deleteProsedurPendampinganHukum(id) {
        try {
            const deletedProsedurPendampinganHukum = await prisma_1.default.prosedurPendampinganHukum.delete({
                where: { id },
            });
            return deletedProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in deleteProsedurPendampinganHukum:", error);
            throw error;
        }
    }
    async createStatistikProsedurPendampinganHukum(data) {
        try {
            const createStatistikProsedurPendampinganHukum = await prisma_1.default.statistikPendampinganHukum.create({
                data: {
                    kasusDidampingi: data.kasusDidampingi,
                    tingkatKeberhasilan: data.tingkatKeberhasilan,
                    advokatBerpengalaman: data.advokatBerpengalaman,
                    totalPendampingan: data.totalPendampingan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistikProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in createStatistikProsedurPendampinganHukum:", error);
            return null;
        }
    }
    async getAllStatistikProsedurPendampinganHukum() {
        try {
            const getAllStatistikProsedurPendampinganHukum = await prisma_1.default.statistikPendampinganHukum.findMany();
            return getAllStatistikProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in getAllStatistikProsedurPendampinganHukum:", error);
            return null;
        }
    }
    async updateStatistikProsedurPendampinganHukum(id, data) {
        try {
            const updateData = {
                kasusDidampingi: data.kasusDidampingi,
                tingkatKeberhasilan: data.tingkatKeberhasilan,
                advokatBerpengalaman: data.advokatBerpengalaman,
                totalPendampingan: data.totalPendampingan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikProsedurPendampinganHukum = await prisma_1.default.statistikPendampinganHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in updateStatistikProsedurPendampinganHukum:", error);
            throw error;
        }
    }
    async deleteStatistikProsedurPendampinganHukum(id) {
        try {
            const deletedStatistikProsedurPendampinganHukum = await prisma_1.default.statistikPendampinganHukum.delete({
                where: { id },
            });
            return deletedStatistikProsedurPendampinganHukum;
        }
        catch (error) {
            console.error("Error in deleteStatistikProsedurPendampinganHukum:", error);
            throw error;
        }
    }
}
exports.default = new PendampinganHukumService();
