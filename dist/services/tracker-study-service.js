"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class TrackerStudyService {
    async createTrackerStudy(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const trackerStudy = await prisma_1.default.trackerStudy.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    tugas: data.tugas,
                    gajihRata: data.gajihRata,
                    persentasi: data.persentasi,
                    institusi: data.institusi,
                    keahlian: data.keahlian,
                },
            });
            return trackerStudy;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllTrackerStudy() {
        try {
            const trackerStudy = await prisma_1.default.trackerStudy.findMany();
            return trackerStudy;
        }
        catch (error) {
            throw error;
        }
    }
    async updateTrackerStudy(id, data) {
        try {
            const updateData = {
                title: data.title,
                foto: data.foto,
                tugas: data.tugas,
                gajihRata: data.gajihRata,
                persentasi: data.persentasi,
                institusi: data.institusi,
                keahlian: data.keahlian,
            };
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedTrackerStudy = await prisma_1.default.trackerStudy.update({
                where: { id },
                data: updateData,
            });
            return updatedTrackerStudy;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteTrackerStudy(id) {
        try {
            const deletedTrackerStudy = await prisma_1.default.trackerStudy.delete({
                where: { id },
            });
            return deletedTrackerStudy;
        }
        catch (error) {
            throw error;
        }
    }
    async createWaktuTungguKerja(data) {
        try {
            const waktuTungguKerja = await prisma_1.default.waktuTungguKerja.create({
                data: {
                    kategoriWaktu: data.kategoriWaktu,
                    persentasi: data.persentasi,
                    deskripsi: data.deskripsi,
                },
            });
            return waktuTungguKerja;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllWaktuTungguKerja() {
        try {
            const waktuTungguKerja = await prisma_1.default.waktuTungguKerja.findMany();
            return waktuTungguKerja;
        }
        catch (error) {
            throw error;
        }
    }
    async updateWaktuTungguKerja(id, data) {
        try {
            const updateData = {
                kategoriWaktu: data.kategoriWaktu,
                persentasi: data.persentasi,
                deskripsi: data.deskripsi,
            };
            const updatedWaktuTungguKerja = await prisma_1.default.waktuTungguKerja.update({
                where: { id },
                data: updateData,
            });
            return updatedWaktuTungguKerja;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteWaktuTungguKerja(id) {
        try {
            const deletedWaktuTungguKerja = await prisma_1.default.waktuTungguKerja.delete({
                where: { id },
            });
            return deletedWaktuTungguKerja;
        }
        catch (error) {
            throw error;
        }
    }
    async createStatistikTrackerStudy(data) {
        try {
            const statistikTrackerStudy = await prisma_1.default.statistikTrackerStudy.create({
                data: {
                    tingkatKeterserapan: data.tingkatKeterserapan,
                    rataGaji: data.rataGaji,
                    waktuTungguKerja: data.waktuTungguKerja,
                    kesesuaianBidang: data.kesesuaianBidang,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikTrackerStudy;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllStatistikTrackerStudy() {
        try {
            const statistikTrackerStudy = await prisma_1.default.statistikTrackerStudy.findMany();
            return statistikTrackerStudy;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikTrackerStudy(id, data) {
        try {
            const updateData = {
                tingkatKeterserapan: data.tingkatKeterserapan,
                rataGaji: data.rataGaji,
                waktuTungguKerja: data.waktuTungguKerja,
                kesesuaianBidang: data.kesesuaianBidang,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikTrackerStudy = await prisma_1.default.statistikTrackerStudy.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikTrackerStudy;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteStatistikTrackerStudy(id) {
        try {
            const deletedStatistikTrackerStudys = await prisma_1.default.statistikTrackerStudy.delete({
                where: { id },
            });
            return deletedStatistikTrackerStudys;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new TrackerStudyService();
