"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class PembuatanLegalService {
    async createPembuatanLegal(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createPembuatanLegal = await prisma_1.default.pembuatanLegal.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    waktu: data.waktu,
                },
            });
            return createPembuatanLegal;
        }
        catch (error) {
            console.error("Error in createPembuatanLegal:", error);
            return null;
        }
    }
    async getAllPembuatanLegal() {
        try {
            const getAllPembuatanLegal = await prisma_1.default.pembuatanLegal.findMany();
            return getAllPembuatanLegal;
        }
        catch (error) {
            console.error("Error in getAllPembuatanLegal:", error);
            return null;
        }
    }
    async updatePembuatanLegal(id, data) {
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
            const updatedPembuatanLegal = await prisma_1.default.pembuatanLegal.update({
                where: { id },
                data: updateData,
            });
            return updatedPembuatanLegal;
        }
        catch (error) {
            console.error("Error in updatePendampinganHukum:", error);
            throw error;
        }
    }
    async deletePembuatanLegal(id) {
        try {
            const deletedPembuatanLegal = await prisma_1.default.pembuatanLegal.delete({
                where: { id },
            });
            return deletedPembuatanLegal;
        }
        catch (error) {
            console.error("Error in deletePembuatanLegal:", error);
            throw error;
        }
    }
    async createProsedurPembuatanLegal(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createProsedurPembuatanLegal = await prisma_1.default.prosedurPembuatanLegal.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    waktu: data.waktu,
                },
            });
            return createProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in createProsedurPembuatanLegal:", error);
            return null;
        }
    }
    async getAllProsedurPembuatanLegal() {
        try {
            const getAllProsedurPembuatanLegal = await prisma_1.default.prosedurPembuatanLegal.findMany();
            return getAllProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in getAllProsedurPendampinganHukum:", error);
            return null;
        }
    }
    async updateProsedurPembuatanLegal(id, data) {
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
            const updatedProsedurPembuatanLegal = await prisma_1.default.prosedurPembuatanLegal.update({
                where: { id },
                data: updateData,
            });
            return updatedProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in updateProsedurPembuatanLegal:", error);
            throw error;
        }
    }
    async deleteProsedurPembuatanLegal(id) {
        try {
            const deletedProsedurPembuatanLegal = await prisma_1.default.prosedurPembuatanLegal.delete({
                where: { id },
            });
            return deletedProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in deleteProsedurPembuatanLegal:", error);
            throw error;
        }
    }
    async createStatistikProsedurPembuatanLegal(data) {
        try {
            const createStatistikProsedurPembuatanLegal = await prisma_1.default.statistikPembuatanLegal.create({
                data: {
                    legalOpinianPerTahun: data.legalOpinianPerTahun,
                    tingkatKepuasan: data.tingkatKepuasan,
                    ahliHukum: data.ahliHukum,
                    totalPembuatan: data.totalPembuatan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistikProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in createStatistikProsedurPembuatanLegal:", error);
            return null;
        }
    }
    async getAllStatistikProsedurPembuatanLegal() {
        try {
            const getAllStatistikProsedurPembuatanLegal = await prisma_1.default.statistikPembuatanLegal.findMany();
            return getAllStatistikProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in getAllStatistikProsedurPembuatanLegal:", error);
            return null;
        }
    }
    async updateStatistikProsedurPembuatanLegal(id, data) {
        try {
            const updateData = {
                legalOpinianPerTahun: data.legalOpinianPerTahun,
                tingkatKepuasan: data.tingkatKepuasan,
                ahliHukum: data.ahliHukum,
                totalPembuatan: data.totalPembuatan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikProsedurPembuatanLegal = await prisma_1.default.statistikPembuatanLegal.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in updateStatistikProsedurPembuatanLegal:", error);
            throw error;
        }
    }
    async deleteStatistikProsedurPembuatanLegal(id) {
        try {
            const deletedStatistikProsedurPembuatanLegal = await prisma_1.default.statistikPembuatanLegal.delete({
                where: { id },
            });
            return deletedStatistikProsedurPembuatanLegal;
        }
        catch (error) {
            console.error("Error in deleteStatistikProsedurPembuatanLegal:", error);
            throw error;
        }
    }
}
exports.default = new PembuatanLegalService();
