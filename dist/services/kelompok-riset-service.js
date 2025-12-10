"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class KelompokRisetService {
    async create(data) {
        try {
            let fotoUrl;
            if (data.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            }
            const kelompokRiset = await prisma_1.default.kelompokRiset.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return kelompokRiset;
        }
        catch (error) {
            console.error("Error in createKelompokRiset:", error);
            throw error;
        }
    }
    async getAllKelompokRiset() {
        try {
            const kelompokRiset = await prisma_1.default.kelompokRiset.findMany();
            return kelompokRiset;
        }
        catch (error) {
            console.error("Error in getAllKelompokRiset:", error);
            throw error;
        }
    }
    async updateKelompokRiset(id, data) {
        try {
            const updateData = {
                title: data.title,
                fokusPenelitian: data.fokusPenelitian,
                namaMahasiswa: data.namaMahasiswa,
                anggota: data.anggota,
                publikasi: data.publikasi,
                deskripsi: data.deskripsi,
                status: data.status,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedKelompokRiset = await prisma_1.default.kelompokRiset.update({
                where: { id },
                data: updateData,
            });
            return updatedKelompokRiset;
        }
        catch (error) {
            console.error("Error in updateKelompokRiset:", error);
            throw error;
        }
    }
    async deleteKelompokRiset(id) {
        try {
            const deletedKelompokRiset = await prisma_1.default.kelompokRiset.delete({
                where: { id },
            });
            return deletedKelompokRiset;
        }
        catch (error) {
            console.error("Error in deleteKelompokRiset:", error);
            throw error;
        }
    }
    async createStatistikKelompokRiset(data) {
        try {
            const statistikKelompokRiset = await prisma_1.default.statistikKelompokRiset.create({
                data: {
                    ...data,
                },
            });
            return statistikKelompokRiset;
        }
        catch (error) {
            console.error("Error in createStatistikKelompokRiset:", error);
            throw error;
        }
    }
    async getAllStatistikKelompokRiset() {
        try {
            const statistikKelompokRiset = await prisma_1.default.statistikKelompokRiset.findMany();
            return statistikKelompokRiset;
        }
        catch (error) {
            console.error("Error in getAllStatistikKelompokRiset:", error);
            throw error;
        }
    }
    async updateStatistikKelompokRiset(id, data) {
        try {
            const updateData = {
                total: data.total,
                penelitianAktif: data.penelitianAktif,
                publikasiPerTahun: data.publikasiPerTahun,
                jurnalTerAkreditasi: data.jurnalTerAkreditasi,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikKelompokRiset = await prisma_1.default.statistikKelompokRiset.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikKelompokRiset;
        }
        catch (error) {
            console.error("Error in updateStatistikKelompokRiset:", error);
            throw error;
        }
    }
    async deleteStatistikKelompokRiset(id) {
        try {
            const deletedStatistikKelompokRiset = await prisma_1.default.statistikKelompokRiset.delete({
                where: { id },
            });
            return deletedStatistikKelompokRiset;
        }
        catch (error) {
            console.error("Error in deleteStatistikKelompokRiset:", error);
            throw error;
        }
    }
}
exports.default = new KelompokRisetService();
