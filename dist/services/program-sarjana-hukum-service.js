"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class ProgramSarjanaHukumService {
    async createProgramSarjanaHukum(data) {
        try {
            let dokumenRpsUrl = null;
            if (data.dokumen_rps) {
                dokumenRpsUrl = await (0, cloudinary_1.uploadToCloudinary)(data.dokumen_rps.buffer);
            }
            const result = await prisma_1.default.programSarjanaHukum.create({
                data: {
                    mata_kuliah: data.mata_kuliah,
                    semester: data.semester,
                    kode_matkul: data.kode_matkul,
                    bobot: data.bobot,
                    penyelenggara: data.penyelenggara,
                    dokumen_rps: dokumenRpsUrl,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async getAllProgramSarjanaHukum() {
        try {
            const programSarjanaHukum = await prisma_1.default.programSarjanaHukum.findMany();
            return programSarjanaHukum;
        }
        catch (error) {
            console.error("Error in getAllProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async updateProgramSarjanaHukum(id, data) {
        try {
            const updateData = {
                mata_kuliah: data.mata_kuliah,
                semester: data.semester,
                kode_matkul: data.kode_matkul,
                bobot: data.bobot,
                penyelenggara: data.penyelenggara,
                dokumen_rps: data.dokumen_rps,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.dokumen_rps) {
                const dokumenRpsUrl = await (0, cloudinary_1.uploadToCloudinary)(data.dokumen_rps.buffer);
                updateData.dokumen_rps = dokumenRpsUrl;
            }
            const updatedProgramSarjanaHukum = await prisma_1.default.programSarjanaHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedProgramSarjanaHukum;
        }
        catch (error) {
            console.error("Error in updateProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async deleteProgramSarjanaHukum(id) {
        try {
            const deletedData = await prisma_1.default.programSarjanaHukum.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createStatistikProgramSarjanaHukum(data) {
        try {
            const result = await prisma_1.default.statistikProgramSarjanaHukum.create({
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
            console.error("Error in createStatistikProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async getAllStatistikProgramSarjanaHukum() {
        try {
            const statistikProgramSarjanaHukum = await prisma_1.default.statistikProgramSarjanaHukum.findMany();
            return statistikProgramSarjanaHukum;
        }
        catch (error) {
            console.error("Error in getAllStatistikProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async updateStatistikProgramSarjanaHukum(id, data) {
        try {
            const updatedData = await prisma_1.default.statistikProgramSarjanaHukum.update({
                where: { id },
                data: data,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateStatistikProgramSarjanaHukum:", error);
            throw error;
        }
    }
    async deleteStatistikProgramSarjanaHukum(id) {
        try {
            const deletedData = await prisma_1.default.statistikProgramSarjanaHukum.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createProspekKarirSarjanaHukum(data) {
        try {
            const result = await prisma_1.default.prospekKarirSarjanaHukum.create({
                data: {
                    judul: data.judul,
                    deskripsi: data.deskripsi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createProspekKarirSarjanaHukum:", error);
            throw error;
        }
    }
    async getAllProspekKarirSarjanaHukum() {
        try {
            const prospekKarirSarjanaHukum = await prisma_1.default.prospekKarirSarjanaHukum.findMany();
            return prospekKarirSarjanaHukum;
        }
        catch (error) {
            console.error("Error in getAllProspekKarirSarjanaHukum:", error);
            throw error;
        }
    }
    async updateProspekKarirSarjanaHukum(id, data) {
        try {
            const updatedData = await prisma_1.default.prospekKarirSarjanaHukum.update({
                where: { id },
                data: data,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateProspekKarirSarjanaHukum:", error);
            throw error;
        }
    }
    async deleteProspekKarirSarjanaHukum(id) {
        try {
            const deletedData = await prisma_1.default.prospekKarirSarjanaHukum.delete({
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
exports.default = new ProgramSarjanaHukumService();
