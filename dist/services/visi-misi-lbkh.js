"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class VisiMisiLBKHService {
    async createVisiMisiLBKH(visiMisiLBKH) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(visiMisiLBKH.foto.buffer);
            const visiMisiLBKHH = await prisma_1.default.visiMisiLBKH.create({
                data: {
                    type: visiMisiLBKH.type,
                    title: visiMisiLBKH.title,
                    deskripsi: visiMisiLBKH.deskripsi,
                    kategori: visiMisiLBKH.kategori,
                    foto: fotoUrl,
                },
            });
            return visiMisiLBKHH;
        }
        catch (error) {
            console.error("Error in createVisiMisiLBKH:", error);
            throw error;
        }
    }
    async updateVisiMisiLBKH(id, visiMisiLBKH) {
        try {
            const updateData = {
                type: visiMisiLBKH.type,
                title: visiMisiLBKH.title,
                deskripsi: visiMisiLBKH.deskripsi,
                kategori: visiMisiLBKH.kategori,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (visiMisiLBKH.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(visiMisiLBKH.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const visiMisiLBKHH = await prisma_1.default.visiMisiLBKH.update({
                where: { id: id },
                data: updateData,
            });
            return visiMisiLBKHH;
        }
        catch (error) {
            console.error("Error in updateVisiMisiLBKH:", error);
            throw error;
        }
    }
    async deleteVisiMisiLBKH(id) {
        try {
            const deletedData = await prisma_1.default.visiMisiLBKH.delete({
                where: { id: id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteVisiMisiLBKH:", error);
            throw error;
        }
    }
    async getAllVisiMisiLBKH() {
        try {
            const visiMisiLBKH = await prisma_1.default.visiMisiLBKH.findMany();
            return visiMisiLBKH;
        }
        catch (error) {
            console.error("Error in getAllVisiMisiLBKH:", error);
            throw error;
        }
    }
    async createStatistikVisiMisiLBKH(statistikVisiMisiLBKH) {
        try {
            const statistikVisiMisiLBKHH = await prisma_1.default.statistikVisiMisiLBKH.create({
                data: statistikVisiMisiLBKH,
            });
            return statistikVisiMisiLBKHH;
        }
        catch (error) {
            console.error("Error in createStatistikVisiMisiLBKH:", error);
            throw error;
        }
    }
    async updateStatistikVisiMisiLBKH(id, statistikVisiMisiLBKH) {
        try {
            const updateData = {
                paralegaf: statistikVisiMisiLBKH.paralegaf,
                kasusDitangani: statistikVisiMisiLBKH.kasusDitangani,
                advokatAktif: statistikVisiMisiLBKH.advokatAktif,
                tingkatKepuasan: statistikVisiMisiLBKH.tingkatKepuasan,
                slogan: statistikVisiMisiLBKH.slogan,
                deskripsi: statistikVisiMisiLBKH.deskripsi,
            };
            const statistikVisiMisiLBKHH = await prisma_1.default.statistikVisiMisiLBKH.update({
                where: { id: id },
                data: updateData,
            });
            return statistikVisiMisiLBKHH;
        }
        catch (error) {
            console.error("Error in updateStatistikVisiMisiLBKH:", error);
            throw error;
        }
    }
    async deleteStatistikVisiMisiLBKH(id) {
        try {
            const deletedData = await prisma_1.default.statistikVisiMisiLBKH.delete({
                where: { id: id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikVisiMisiLBKH:", error);
            throw error;
        }
    }
    async getAllStatistikVisiMisiLBKH() {
        try {
            const statistikVisiMisiLBKH = await prisma_1.default.statistikVisiMisiLBKH.findMany();
            return statistikVisiMisiLBKH;
        }
        catch (error) {
            console.error("Error in getAllStatistikVisiMisiLBKH:", error);
            throw error;
        }
    }
}
exports.default = new VisiMisiLBKHService();
