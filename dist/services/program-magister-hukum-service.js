"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class ProgramMagisterHukumService {
    async createProgramMagisterHukum(data) {
        try {
            let galeriData = [];
            if (data.image && data.image.length > 0) {
                const uploadedUrls = await Promise.all(data.image.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const result = await prisma_1.default.programMagisterHukum.create({
                data: {
                    image: galeriData,
                    semester: data.semester,
                    judul: data.judul,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async getAllProgramMagisterHukum() {
        try {
            const programMagisterHukum = await prisma_1.default.programMagisterHukum.findMany();
            return programMagisterHukum;
        }
        catch (error) {
            console.error("Error in getAllProgramMagisterHukum:", error);
            throw error;
        }
    }
    async updateProgramMagisterHukum(id, data) {
        try {
            const updateData = {
                semester: data.semester,
                judul: data.judul,
                kategori: data.kategori,
                deskripsi: data.deskripsi,
                image: data.image,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.image) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.image[0].buffer);
                updateData.image = fotoUrl;
            }
            const updatedStrategis = await prisma_1.default.programMagisterHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedStrategis;
        }
        catch (error) {
            console.error("Error in updateProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async deleteProgramMagisterHukum(id) {
        try {
            const deletedData = await prisma_1.default.programMagisterHukum.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createStatistikProgramMagisterHukum(data) {
        try {
            const result = await prisma_1.default.statistikProgramMagisterHukum.create({
                data: {
                    semester: data.semester,
                    sksTotal: data.sksTotal,
                    akreditasi: data.akreditasi,
                    alumni: data.alumni,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createStatistikProgramMagisterHukum:", error);
            throw error;
        }
    }
    async getAllStatistikProgramMagisterHukum() {
        try {
            const statistikProgramMagisterHukum = await prisma_1.default.statistikProgramMagisterHukum.findMany();
            return statistikProgramMagisterHukum;
        }
        catch (error) {
            console.error("Error in getAllStatistikProgramMagisterHukum:", error);
            throw error;
        }
    }
    async updateStatistikProgramMagisterHukum(id, data) {
        try {
            const updatedData = await prisma_1.default.statistikProgramMagisterHukum.update({
                where: { id },
                data: data,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateStatistikProgramMagisterHukum:", error);
            throw error;
        }
    }
    async deleteStatistikProgramMagisterHukum(id) {
        try {
            const deletedData = await prisma_1.default.statistikProgramMagisterHukum.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createProspekKarirMagisterHukum(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.image.buffer);
            const result = await prisma_1.default.prospekKarirMagisterHukum.create({
                data: {
                    judul: data.judul,
                    deskripsi: data.deskripsi,
                    image: fotoUrl,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createProspekKarirMagisterHukum:", error);
            throw error;
        }
    }
    async getAllProspekKarirMagisterHukum() {
        try {
            const prospekKarirMagisterHukum = await prisma_1.default.prospekKarirMagisterHukum.findMany();
            return prospekKarirMagisterHukum;
        }
        catch (error) {
            console.error("Error in getAllProspekKarirMagisterHukum:", error);
            throw error;
        }
    }
    async updateProspekKarirMagisterHukum(id, data) {
        try {
            const updateData = {
                judul: data.judul,
                deskripsi: data.deskripsi,
                image: data.image,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.image) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.image.buffer);
                updateData.image = fotoUrl;
            }
            const updatedData = await prisma_1.default.prospekKarirMagisterHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateProspekKarirMagisterHukum:", error);
            throw error;
        }
    }
    async deleteProspekKarirMagisterHukum(id) {
        try {
            const deletedData = await prisma_1.default.prospekKarirMagisterHukum.delete({
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
exports.default = new ProgramMagisterHukumService();
