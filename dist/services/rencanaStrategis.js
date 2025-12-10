"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class RencanaStrategisService {
    async createStrategis(strategis) {
        try {
            let galeriData = [];
            if (strategis.foto && strategis.foto.length > 0) {
                const uploadedUrls = await Promise.all(strategis.foto.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const strategisData = await prisma_1.default.rencanaStrategis.create({
                data: {
                    tahun: strategis.tahun,
                    judul: strategis.judul,
                    katagori: strategis.katagori,
                    deskripsi: strategis.deskripsi,
                    foto: galeriData,
                },
            });
            return strategisData;
        }
        catch (error) {
            console.error("Error in createStrategis:", error);
            throw error;
        }
    }
    async getAllStrategis() {
        try {
            const strategis = await prisma_1.default.rencanaStrategis.findMany();
            return strategis;
        }
        catch (error) {
            console.error("Error in getAllStrategis:", error);
            throw error;
        }
    }
    async updateStrategis(id, strategis) {
        try {
            const updateData = {
                tahun: strategis.tahun,
                judul: strategis.judul,
                katagori: strategis.katagori,
                deskripsi: strategis.deskripsi,
                foto: strategis.foto,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (strategis.foto && strategis.foto.length > 0) {
                const fotoUrl = await Promise.all(strategis.foto.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                updateData.foto = fotoUrl;
            }
            const updatedStrategis = await prisma_1.default.rencanaStrategis.update({
                where: { id },
                data: updateData,
            });
            return updatedStrategis;
        }
        catch (error) {
            console.error("Error in updateStrategis:", error);
            throw error;
        }
    }
    async deleteStrategis(id) {
        try {
            const deletedData = await prisma_1.default.rencanaStrategis.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createStatistikStrategis(statistik) {
        try {
            const statistiks = await prisma_1.default.statistikRencanaStrategis.create({
                data: {
                    tahunRencana: statistik.tahunRencana,
                    targetStrategis: statistik.targetStrategis,
                    programAksi: statistik.programAksi,
                    targetAkreditas: statistik.targetAkreditas,
                    slogan: statistik.slogan,
                    deskripsi: statistik.deskripsi,
                },
            });
            return statistiks;
        }
        catch (error) {
            console.error("Error in createStatistikStrategis:", error);
            throw error;
        }
    }
    async getAllStatistikStrategis() {
        try {
            const statistiks = await prisma_1.default.statistikRencanaStrategis.findMany();
            return statistiks;
        }
        catch (error) {
            console.error("Error in getAllStatistikStrategis:", error);
            throw error;
        }
    }
    async updateStatistikStrategis(id, statistik) {
        try {
            const updateData = {
                tahunRencana: statistik.tahunRencana,
                targetStrategis: statistik.targetStrategis,
                programAksi: statistik.programAksi,
                targetAkreditas: statistik.targetAkreditas,
                slogan: statistik.slogan,
                deskripsi: statistik.deskripsi,
            };
            const updatedStatistik = await prisma_1.default.statistikRencanaStrategis.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistik;
        }
        catch (error) {
            console.error("Error in updateStatistikStrategis:", error);
            throw error;
        }
    }
    async deleteStatistikStrategis(id) {
        try {
            const deletedData = await prisma_1.default.statistikRencanaStrategis.delete({
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
exports.default = new RencanaStrategisService();
