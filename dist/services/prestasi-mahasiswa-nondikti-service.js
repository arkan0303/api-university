"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class PrestasiMahasiswaNonDiktiService {
    async createPrestasiMahasiswaNonDikti(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createPrestasiMahasiswaNonDikti = await prisma_1.default.prestasiMahasiswaNonDikti.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return createPrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in createPrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
    async getAllPrestasiMahasiswaNonDikti() {
        try {
            const getAllPrestasiMahasiswaNonDikti = await prisma_1.default.prestasiMahasiswaNonDikti.findMany();
            return getAllPrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in getAllPrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
    async updatePrestasiMahasiswaNonDikti(id, data) {
        try {
            const updateData = {
                title: data.title,
                juara: data.juara,
                namaMahasiswa: data.namaMahasiswa,
                kategori: data.kategori,
                deskripsi: data.deskripsi,
                dampak: data.dampak,
                keahlian: data.keahlian,
                penghargaan: data.penghargaan,
                waktuKompetisi: data.waktuKompetisi,
                alamat: data.alamat,
                penyelenggara: data.penyelenggara,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedPrestasiMahasiswaNonDikti = await prisma_1.default.prestasiMahasiswaNonDikti.update({
                where: { id },
                data: updateData,
            });
            return updatedPrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in updatePrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
    async deletePrestasiMahasiswaNonDikti(id) {
        try {
            const deletePrestasiMahasiswaNonDikti = await prisma_1.default.prestasiMahasiswaNonDikti.delete({
                where: {
                    id,
                },
            });
            return deletePrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in deletePrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
    async createStatistikPrestasiMahasiswaNonDikti(data) {
        try {
            const createStatistikPrestasiMahasiswaNonDikti = await prisma_1.default.statistikPrestasiMahasiswaNonDikti.create({
                data: {
                    ...data,
                },
            });
            return createStatistikPrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in createStatistikPrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
    async getAllStatistikPrestasiMahasiswaNonDikti() {
        try {
            const getAllStatistikPrestasiMahasiswaNonDikti = await prisma_1.default.statistikPrestasiMahasiswaNonDikti.findMany();
            return getAllStatistikPrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in getAllStatistikPrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
    async updateStatistikPrestasiMahasiswaNonDikti(id, data) {
        try {
            const updateData = {
                totalPrestasi: data.totalPrestasi,
                tingkatInternasional: data.tingkatInternasional,
                tingkatNasional: data.tingkatNasional,
                tingkatRegional: data.tingkatRegional,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikPrestasiMahasiswaNonDikti = await prisma_1.default.statistikPrestasiMahasiswaNonDikti.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikPrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in updateStatistikPrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
    async deleteStatistikPrestasiMahasiswaNonDikti(id) {
        try {
            const deleteStatistikPrestasiMahasiswaNonDikti = await prisma_1.default.statistikPrestasiMahasiswaNonDikti.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikPrestasiMahasiswaNonDikti;
        }
        catch (error) {
            console.error("Error in deleteStatistikPrestasiMahasiswaNonDikti:", error);
            throw error;
        }
    }
}
exports.default = new PrestasiMahasiswaNonDiktiService();
