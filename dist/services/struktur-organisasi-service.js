"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class StrukturOrganisasiService {
    async createStrukturOrganisasi(strukturOrganisasi) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(strukturOrganisasi.foto.buffer);
            const strukturOrganisasii = await prisma_1.default.strukturOrganisasi.create({
                data: {
                    ...strukturOrganisasi,
                    foto: fotoUrl,
                },
            });
            return strukturOrganisasii;
        }
        catch (error) {
            console.error("Error in createStrukturOrganisasi:", error);
            throw error;
        }
    }
    async getAllStrukturOrganisasi() {
        try {
            const strukturOrganisasii = await prisma_1.default.strukturOrganisasi.findMany();
            return strukturOrganisasii;
        }
        catch (error) {
            console.error("Error in getAllStrukturOrganisasi:", error);
            throw error;
        }
    }
    async updateStrukturOrganisasi(id, strukturOrganisasi) {
        try {
            const updateData = {
                jabatan: strukturOrganisasi.jabatan,
                nama: strukturOrganisasi.nama,
                note: strukturOrganisasi.note,
                type: strukturOrganisasi.type,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (strukturOrganisasi.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(strukturOrganisasi.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const strukturOrganisasii = await prisma_1.default.strukturOrganisasi.update({
                where: { id },
                data: updateData,
            });
            return strukturOrganisasii;
        }
        catch (error) {
            console.error("Error in updateStrukturOrganisasi:", error);
            throw error;
        }
    }
    async deleteStrukturOrganisasi(id) {
        try {
            const deletedData = await prisma_1.default.strukturOrganisasi.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStrukturOrganisasi:", error);
            throw error;
        }
    }
    async createStatistikStrukturOrganisasi(statistikStrukturOrganisasi) {
        try {
            const statistikStrukturOrganisasii = await prisma_1.default.statistikStrukturOrganisasi.create({
                data: {
                    ...statistikStrukturOrganisasi,
                },
            });
            return statistikStrukturOrganisasii;
        }
        catch (error) {
            console.error("Error in createStatistikStrukturOrganisasi:", error);
            throw error;
        }
    }
    async getAllStatistikStrukturOrganisasi() {
        try {
            const statistikStrukturOrganisasii = await prisma_1.default.statistikStrukturOrganisasi.findMany();
            return statistikStrukturOrganisasii;
        }
        catch (error) {
            console.error("Error in getAllStatistikStrukturOrganisasi:", error);
            throw error;
        }
    }
    async updateStatistikStrukturOrganisasi(id, statistikStrukturOrganisasi) {
        try {
            const updateData = {
                ...statistikStrukturOrganisasi,
            };
            const statistikStrukturOrganisasii = await prisma_1.default.statistikStrukturOrganisasi.update({
                where: { id },
                data: updateData,
            });
            return statistikStrukturOrganisasii;
        }
        catch (error) {
            console.error("Error in updateStatistikStrukturOrganisasi:", error);
            throw error;
        }
    }
    async deleteStatistikStrukturOrganisasi(id) {
        try {
            const deletedData = await prisma_1.default.statistikStrukturOrganisasi.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikStrukturOrganisasi:", error);
            throw error;
        }
    }
}
exports.default = new StrukturOrganisasiService();
