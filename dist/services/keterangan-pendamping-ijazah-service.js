"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class KeteranganPendampingIjazahService {
    async createKeteranganPendampingIjazah(data) {
        try {
            let fotoUrl;
            if (data.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            }
            const keteranganPendampingIjazah = await prisma_1.default.keteranganPendampingIjazah.create({
                data: {
                    foto: fotoUrl || null,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    type: data.type,
                    waktu: data.waktu,
                    kategori: data.kategori,
                },
            });
            return keteranganPendampingIjazah;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getAllKeteranganPendampingIjazah() {
        try {
            const keteranganPendampingIjazah = await prisma_1.default.keteranganPendampingIjazah.findMany();
            return keteranganPendampingIjazah;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async updateKeteranganPendampingIjazah(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                type: data.type,
                waktu: data.waktu,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedKeteranganPendampingIjazah = await prisma_1.default.keteranganPendampingIjazah.update({
                where: { id },
                data: updateData,
            });
            return updatedKeteranganPendampingIjazah;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async deleteKeteranganPendampingIjazah(id) {
        try {
            const deletedData = await prisma_1.default.keteranganPendampingIjazah.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async getStatistikKeteranganPendampingIjazah() {
        try {
            const statistikKeteranganPendampingIjazah = await prisma_1.default.statistikKeteranganPendampingIjazah.findMany();
            return statistikKeteranganPendampingIjazah;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async updateStatistikKeteranganPendampingIjazah(data) {
        try {
            const updatedStatistikKeteranganPendampingIjazah = await prisma_1.default.statistikKeteranganPendampingIjazah.update({
                where: { id: 1 },
                data: data,
            });
            return updatedStatistikKeteranganPendampingIjazah;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async deleteStatistikKeteranganPendampingIjazah() {
        try {
            const deletedData = await prisma_1.default.statistikKeteranganPendampingIjazah.delete({
                where: { id: 1 },
            });
            return deletedData;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async createStatistikKeteranganPendampingIjazah(data) {
        try {
            const createdStatistikKeteranganPendampingIjazah = await prisma_1.default.statistikKeteranganPendampingIjazah.create({
                data: data,
            });
            return createdStatistikKeteranganPendampingIjazah;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
}
exports.default = new KeteranganPendampingIjazahService();
