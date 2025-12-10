"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SenatFakultasService {
    async createSenatFakultas(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            // Process gallery if exists
            let galeriData = [];
            if (data.galeri && data.galeri.length > 0) {
                const uploadedUrls = await Promise.all(data.galeri.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const senatFakultas = await prisma_1.default.senatFakultas.create({
                data: {
                    nama: data.nama,
                    jabatan: data.jabatan,
                    foto: fotoUrl,
                    keahlian: data.keahlian,
                    periode: data.periode,
                    tugas: data.tugas,
                    deskripsi: data.deskripsi,
                    galeri: galeriData,
                },
            });
            return senatFakultas;
        }
        catch (error) {
            console.error("Error in createSenatFakultas:", error);
            throw error;
        }
    }
    async getAllSenatFakultas() {
        try {
            const senatFakultas = await prisma_1.default.senatFakultas.findMany();
            return senatFakultas;
        }
        catch (error) {
            console.error("Error in getAllSenatFakultas:", error);
            throw error;
        }
    }
    async updateSenatFakultas(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                jabatan: data.jabatan,
                keahlian: data.keahlian,
                periode: data.periode,
                tugas: data.tugas,
                deskripsi: data.deskripsi,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            // Hanya upload galeri baru jika ada file yang diunggah
            if (data.galeri && data.galeri.length > 0) {
                const uploadedUrls = await Promise.all(data.galeri.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                updateData.galeri = uploadedUrls;
            }
            const updatedSenatFakultas = await prisma_1.default.senatFakultas.update({
                where: { id },
                data: updateData,
            });
            return updatedSenatFakultas;
        }
        catch (error) {
            console.error("Error in updateSenatFakultas:", error);
            throw error;
        }
    }
    async deleteSenatFakultas(id) {
        try {
            const deletedData = await prisma_1.default.senatFakultas.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteSenatFakultas:", error);
            throw error;
        }
    }
    async createStatistikSenatFakultas(data) {
        try {
            const statistikSenatFakultas = await prisma_1.default.statistikSenatFakultas.create({
                data: {
                    anggotaSenat: data.anggotaSenat,
                    tahunPeriode: data.tahunPeriode,
                    rapatPerTahun: data.rapatPerTahun,
                    keputusan: data.keputusan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikSenatFakultas;
        }
        catch (error) {
            console.error("Error in createStatistikSenatFakultas:", error);
            throw error;
        }
    }
    async getAllStatistikSenatFakultas() {
        try {
            const statistikSenatFakultas = await prisma_1.default.statistikSenatFakultas.findMany();
            return statistikSenatFakultas;
        }
        catch (error) {
            console.error("Error in getAllStatistikSenatFakultas:", error);
            throw error;
        }
    }
    async updateStatistikSenatFakultas(id, data) {
        try {
            const updatedData = await prisma_1.default.statistikSenatFakultas.update({
                where: { id },
                data: {
                    anggotaSenat: data.anggotaSenat,
                    tahunPeriode: data.tahunPeriode,
                    rapatPerTahun: data.rapatPerTahun,
                    keputusan: data.keputusan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateStatistikSenatFakultas:", error);
            throw error;
        }
    }
    async deleteStatistikSenatFakultas(id) {
        try {
            const deletedData = await prisma_1.default.statistikSenatFakultas.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikSenatFakultas:", error);
            throw error;
        }
    }
}
exports.default = new SenatFakultasService();
