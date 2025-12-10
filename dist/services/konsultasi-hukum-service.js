"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class KonsultasiHukumService {
    async createKonsultasiHukum(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createKonsultasiHukum = await prisma_1.default.konsultasiHukum.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    waktu: data.waktu,
                },
            });
            return createKonsultasiHukum;
        }
        catch (error) {
            console.error("Error in createKonsultasiHukum:", error);
            return null;
        }
    }
    async getAllKonsultasiHukum() {
        try {
            const getAllKonsultasiHukum = await prisma_1.default.konsultasiHukum.findMany();
            return getAllKonsultasiHukum;
        }
        catch (error) {
            console.error("Error in getAllKonsultasiHukum:", error);
            return null;
        }
    }
    async updateKonsultasiHukum(id, data) {
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
            const updatedKonsultasiHukum = await prisma_1.default.konsultasiHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedKonsultasiHukum;
        }
        catch (error) {
            console.error("Error in updateKonsultasiHukum:", error);
            throw error;
        }
    }
    async deleteKonsultasiHukum(id) {
        try {
            const deletedKonsultasiHukum = await prisma_1.default.konsultasiHukum.delete({
                where: { id },
            });
            return deletedKonsultasiHukum;
        }
        catch (error) {
            console.error("Error in deleteKonsultasiHukum:", error);
            throw error;
        }
    }
    async createProsedurKonsultasi(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createProsedurKonsultasi = await prisma_1.default.prosedurKonsultasi.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    waktu: data.waktu,
                },
            });
            return createProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in createProsedurKonsultasi:", error);
            return null;
        }
    }
    async getAllProsedurKonsultasi() {
        try {
            const getAllProsedurKonsultasi = await prisma_1.default.prosedurKonsultasi.findMany();
            return getAllProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in getAllProsedurKonsultasi:", error);
            return null;
        }
    }
    async updateProsedurKonsultasi(id, data) {
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
            const updatedProsedurKonsultasi = await prisma_1.default.prosedurKonsultasi.update({
                where: { id },
                data: updateData,
            });
            return updatedProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in updateProsedurKonsultasi:", error);
            throw error;
        }
    }
    async deleteProsedurKonsultasi(id) {
        try {
            const deletedProsedurKonsultasi = await prisma_1.default.prosedurKonsultasi.delete({
                where: { id },
            });
            return deletedProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in deleteProsedurKonsultasi:", error);
            throw error;
        }
    }
    async createStatistikProsedurKonsultasi(data) {
        try {
            const createStatistikProsedurKonsultasi = await prisma_1.default.statistikProsedurKonsultasi.create({
                data: {
                    konsultasiPerBulan: data.konsultasiPerBulan,
                    tingkatKepuasan: data.tingkatKepuasan,
                    konsultasiAktif: data.konsultasiAktif,
                    totalKonsultasi: data.totalKonsultasi,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistikProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in createStatistikProsedurKonsultasi:", error);
            return null;
        }
    }
    async getAllStatistikProsedurKonsultasi() {
        try {
            const getAllStatistikProsedurKonsultasi = await prisma_1.default.statistikProsedurKonsultasi.findMany();
            return getAllStatistikProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in getAllStatistikProsedurKonsultasi:", error);
            return null;
        }
    }
    async updateStatistikProsedurKonsultasi(id, data) {
        try {
            const updateData = {
                konsultasiPerBulan: data.konsultasiPerBulan,
                tingkatKepuasan: data.tingkatKepuasan,
                konsultasiAktif: data.konsultasiAktif,
                totalKonsultasi: data.totalKonsultasi,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikProsedurKonsultasi = await prisma_1.default.statistikProsedurKonsultasi.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in updateStatistikProsedurKonsultasi:", error);
            throw error;
        }
    }
    async deleteStatistikProsedurKonsultasi(id) {
        try {
            const deletedStatistikProsedurKonsultasi = await prisma_1.default.statistikProsedurKonsultasi.delete({
                where: { id },
            });
            return deletedStatistikProsedurKonsultasi;
        }
        catch (error) {
            console.error("Error in deleteStatistikProsedurKonsultasi:", error);
            throw error;
        }
    }
}
exports.default = new KonsultasiHukumService();
