"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class PimpinanService {
    async createPimpinan(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const result = await prisma_1.default.pimpinan.create({
                data: {
                    nama: data.nama,
                    jabatan: data.jabatan,
                    foto: fotoUrl,
                    pendidikan: data.pendidikan,
                    keahlian: data.keahlian,
                    periode: data.periode,
                    email: data.email,
                    kontak: data.kontak,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createPimpinan:", error);
            throw error;
        }
    }
    async getAllPimpinan() {
        try {
            const result = await prisma_1.default.pimpinan.findMany();
            return result;
        }
        catch (error) {
            console.error("Error in getAllPimpinan:", error);
            throw error;
        }
    }
    async updatePimpinan(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                jabatan: data.jabatan,
                pendidikan: data.pendidikan,
                keahlian: data.keahlian,
                periode: data.periode,
                email: data.email,
                kontak: data.kontak,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedPimpinan = await prisma_1.default.pimpinan.update({
                where: { id },
                data: updateData,
            });
            return updatedPimpinan;
        }
        catch (error) {
            console.error("Error in updatePimpinan:", error);
            throw error;
        }
    }
    async deletePimpinan(id) {
        try {
            const deletedData = await prisma_1.default.pimpinan.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deletePimpinan:", error);
            throw error;
        }
    }
    async createStatistikPimpinan(data) {
        try {
            const result = await prisma_1.default.statistikPimpinan.create({
                data: {
                    pimpinan: data.pimpinan,
                    tahunPengalaman: data.tahunPengalaman,
                    publikasiIlmiah: data.publikasiIlmiah,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createStatistikPimpinan:", error);
            throw error;
        }
    }
    async getAllStatistikPimpinan() {
        try {
            const result = await prisma_1.default.statistikPimpinan.findMany();
            return result;
        }
        catch (error) {
            console.error("Error in getAllStatistikPimpinan:", error);
            throw error;
        }
    }
    async updateStatistikPimpinan(id, data) {
        try {
            const updatedData = await prisma_1.default.statistikPimpinan.update({
                where: { id },
                data: data,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateStatistikPimpinan:", error);
            throw error;
        }
    }
    async deleteStatistikPimpinan(id) {
        try {
            const deletedData = await prisma_1.default.statistikPimpinan.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikPimpinan:", error);
            throw error;
        }
    }
}
exports.default = new PimpinanService();
