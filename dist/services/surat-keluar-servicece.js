"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SuratKeluarService {
    async createArsipSuratKeluar(arsipSuratKeluar) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(arsipSuratKeluar.foto.buffer);
            // Process gallery if exists
            let galeriData = [];
            if (arsipSuratKeluar.file && arsipSuratKeluar.file.length > 0) {
                const uploadedUrls = await Promise.all(arsipSuratKeluar.file.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const arsipSuratKeluark = await prisma_1.default.arsipSuratKeluar.create({
                data: {
                    ...arsipSuratKeluar,
                    foto: fotoUrl,
                    file: galeriData,
                },
            });
            return arsipSuratKeluark;
        }
        catch (error) {
            console.error("Error in createArsipSuratKeluar:", error);
            throw error;
        }
    }
    async getAllArsipSuratKeluar() {
        try {
            const arsipSuratKeluark = await prisma_1.default.arsipSuratKeluar.findMany();
            return arsipSuratKeluark;
        }
        catch (error) {
            console.error("Error in getAllArsipSuratKeluar:", error);
            throw error;
        }
    }
    async updateArsipSuratKeluar(id, arsipSuratKeluar) {
        try {
            const existingData = await prisma_1.default.arsipSuratKeluar.findUnique({
                where: { id },
            });
            if (!existingData) {
                throw new Error("Data surat keluar tidak ditemukan");
            }
            const updateData = {
                title: arsipSuratKeluar.title,
                deskripsi: arsipSuratKeluar.deskripsi,
                pengirim: arsipSuratKeluar.pengirim,
                nomorSurat: arsipSuratKeluar.nomorSurat,
                tanggalKirim: arsipSuratKeluar.tanggalKirim,
                file: arsipSuratKeluar.file,
                foto: arsipSuratKeluar.foto,
                status: arsipSuratKeluar.status,
                penerima: arsipSuratKeluar.penerima,
                note: arsipSuratKeluar.note,
            };
            // Only update photo if a new one is uploaded
            if (arsipSuratKeluar.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(arsipSuratKeluar.foto.buffer);
                updateData.foto = fotoUrl;
            }
            // Process gallery if new files are uploaded
            if (arsipSuratKeluar.file && arsipSuratKeluar.file.length > 0) {
                const uploadedUrls = await Promise.all(arsipSuratKeluar.file.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                // If there are existing files, combine them with the new ones
                const existingFiles = existingData.file
                    ? existingData.file
                    : [];
                updateData.file = [...existingFiles, ...uploadedUrls];
            }
            const updatedArsipSuratKeluar = await prisma_1.default.arsipSuratKeluar.update({
                where: { id },
                data: updateData,
            });
            return updatedArsipSuratKeluar;
        }
        catch (error) {
            console.error("Error in updateArsipSuratKeluar:", error);
            throw error;
        }
    }
    async deleteArsipSuratKeluar(id) {
        try {
            const deletedData = await prisma_1.default.arsipSuratKeluar.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createStatistikArsipSuratKeluar(statistikArsipSuratKeluar) {
        try {
            const statistikArsipSuratKeluark = await prisma_1.default.statistikArsipSuratKeluar.create({
                data: statistikArsipSuratKeluar,
            });
            return statistikArsipSuratKeluark;
        }
        catch (error) {
            console.error("Error in createStatistikArsipSuratKeluar:", error);
            throw error;
        }
    }
    async getAllStatistikArsipSuratKeluar() {
        try {
            const statistikArsipSuratKeluar = await prisma_1.default.statistikArsipSuratKeluar.findMany();
            return statistikArsipSuratKeluar;
        }
        catch (error) {
            console.error("Error in getAllStatistikArsipSuratKeluar:", error);
            throw error;
        }
    }
    async updateStatistikArsipSuratKeluar(id, statistikArsipSuratKeluar) {
        try {
            const updatedStatistikArsipSuratKeluar = await prisma_1.default.statistikArsipSuratKeluar.update({
                where: { id },
                data: statistikArsipSuratKeluar,
            });
            return updatedStatistikArsipSuratKeluar;
        }
        catch (error) {
            console.error("Error in updateStatistikArsipSuratKeluar:", error);
            throw error;
        }
    }
    async deleteStatistikArsipSuratKeluar(id) {
        try {
            const deletedData = await prisma_1.default.statistikArsipSuratKeluar.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
}
exports.default = new SuratKeluarService();
