"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class MatrikulasiService {
    async create(data) {
        try {
            let fotoUrl;
            if (data.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            }
            const matrikulasi = await prisma_1.default.matrikulasi.create({
                data: {
                    ...data,
                    foto: fotoUrl || null,
                },
            });
            return matrikulasi;
        }
        catch (error) {
            console.error("Error in createMatrikulasi:", error);
            throw error;
        }
    }
    async getAllMatrikulasi() {
        try {
            const matrikulasi = await prisma_1.default.matrikulasi.findMany();
            return matrikulasi;
        }
        catch (error) {
            console.error("Error in getAllMatrikulasi:", error);
            throw error;
        }
    }
    async updateMatrikulasi(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                type: data.type,
                waktu: data.waktu,
                sks: data.sks,
                kategori: data.kategori,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedMatrikulasi = await prisma_1.default.matrikulasi.update({
                where: { id },
                data: updateData,
            });
            return updatedMatrikulasi;
        }
        catch (error) {
            console.error("Error in updateMatrikulasi:", error);
            throw error;
        }
    }
    async deleteMatrikulasi(id) {
        try {
            const deletedMatrikulasi = await prisma_1.default.matrikulasi.delete({
                where: { id },
            });
            return deletedMatrikulasi;
        }
        catch (error) {
            console.error("Error in deleteMatrikulasi:", error);
            throw error;
        }
    }
    async createStatistikMatrikulasi(data) {
        try {
            const statistikMatrikulasi = await prisma_1.default.statistikMatrikulasi.create({
                data,
            });
            return statistikMatrikulasi;
        }
        catch (error) {
            console.error("Error in createStatistikMatrikulasi:", error);
            throw error;
        }
    }
    async getAllStatistikMatrikulasi() {
        try {
            const statistikMatrikulasi = await prisma_1.default.statistikMatrikulasi.findMany();
            return statistikMatrikulasi;
        }
        catch (error) {
            console.error("Error in getAllStatistikMatrikulasi:", error);
            throw error;
        }
    }
    async updateStatistikMatrikulasi(id, data) {
        try {
            const updateData = {
                durasi: data.durasi,
                sks: data.sks,
                totalMataKuliah: data.totalMataKuliah,
                kelulusan: data.kelulusan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikMatrikulasi = await prisma_1.default.statistikMatrikulasi.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikMatrikulasi;
        }
        catch (error) {
            console.error("Error in updateStatistikMatrikulasi:", error);
            throw error;
        }
    }
    async deleteStatistikMatrikulasi(id) {
        try {
            const deletedStatistikMatrikulasi = await prisma_1.default.statistikMatrikulasi.delete({
                where: { id },
            });
            return deletedStatistikMatrikulasi;
        }
        catch (error) {
            console.error("Error in deleteStatistikMatrikulasi:", error);
            throw error;
        }
    }
}
exports.default = new MatrikulasiService();
