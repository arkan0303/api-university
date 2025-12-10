"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class PenyukuhanHukumService {
    async createPenyukuhanHukum(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const penyukuhanHukum = await prisma_1.default.penyuluhanHukum.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    waktu: data.waktu,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    type: data.type,
                },
            });
            return penyukuhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllPenyukuhanHukum() {
        try {
            const penyukuhanHukum = await prisma_1.default.penyuluhanHukum.findMany();
            return penyukuhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updatePenyukuhanHukumById(id, data) {
        try {
            const updateData = {
                title: data.title,
                waktu: data.waktu,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
                type: data.type,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedPenyukuhanHukum = await prisma_1.default.penyuluhanHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedPenyukuhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deletePenyukuhanHukumById(id) {
        try {
            const deletedPenyukuhanHukum = await prisma_1.default.penyuluhanHukum.delete({
                where: { id },
            });
            return deletedPenyukuhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async createStatistikPenyuluhanHukum(data) {
        try {
            const statistikPenyuluhanHukum = await prisma_1.default.statistikPenyuluhanHukum.create({
                data: {
                    kegiatanPenyuluhan: data.kegiatanPenyuluhan,
                    pesertaTeredukasi: data.pesertaTeredukasi,
                    institusiMitra: data.institusiMitra,
                    totalPenyuluhan: data.totalPenyuluhan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikPenyuluhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllStatistikPenyuluhanHukum() {
        try {
            const statistikPenyuluhanHukum = await prisma_1.default.statistikPenyuluhanHukum.findMany();
            return statistikPenyuluhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateStatistikPenyuluhanHukumById(id, data) {
        try {
            const updateData = {
                kegiatanPenyuluhan: data.kegiatanPenyuluhan,
                pesertaTeredukasi: data.pesertaTeredukasi,
                institusiMitra: data.institusiMitra,
                totalPenyuluhan: data.totalPenyuluhan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikPenyuluhanHukum = await prisma_1.default.statistikPenyuluhanHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikPenyuluhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteStatistikPenyuluhanHukumById(id) {
        try {
            const deletedStatistikPenyuluhanHukum = await prisma_1.default.statistikPenyuluhanHukum.delete({
                where: { id },
            });
            return deletedStatistikPenyuluhanHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = new PenyukuhanHukumService();
