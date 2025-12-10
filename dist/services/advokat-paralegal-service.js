"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class AdvokatParalegalService {
    async createAdvokatParalegal(data) {
        try {
            let fotoUrl;
            if (data.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            }
            const createAdvokatParalegal = await prisma_1.default.advokatParalegal.create({
                data: {
                    type: data.type,
                    nama: data.nama,
                    foto: fotoUrl,
                    jabatan: data.jabatan,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    email: data.email,
                    noTelp: data.noTelp,
                    note: data.note,
                },
            });
            return createAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllAdvokatParalegal() {
        try {
            const getAllAdvokatParalegal = await prisma_1.default.advokatParalegal.findMany();
            return getAllAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
    async updateAdvokatParalegal(id, data) {
        try {
            const updateData = {
                type: data.type,
                nama: data.nama,
                jabatan: data.jabatan,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
                email: data.email,
                noTelp: data.noTelp,
                note: data.note,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedAdvokatParalegal = await prisma_1.default.advokatParalegal.update({
                where: { id },
                data: updateData,
            });
            return updatedAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteAdvokatParalegal(id) {
        try {
            const deleteAdvokatParalegal = await prisma_1.default.advokatParalegal.delete({
                where: { id },
            });
            return deleteAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
    async createStatistikAdvokatParalegal(data) {
        try {
            const createStatistikAdvokatParalegal = await prisma_1.default.statistikAdvokatParalegal.create({
                data: {
                    paralegal: data.paralegal,
                    kasusDitangani: data.kasusDitangani,
                    advokatAktif: data.advokatAktif,
                    tingkatKepuasan: data.tingkatKepuasan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistikAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllStatistikAdvokatParalegal() {
        try {
            const getAllStatistikAdvokatParalegal = await prisma_1.default.statistikAdvokatParalegal.findMany();
            return getAllStatistikAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikAdvokatParalegal(id, data) {
        try {
            const updateStatistikAdvokatParalegal = await prisma_1.default.statistikAdvokatParalegal.update({
                where: { id },
                data: {
                    paralegal: data.paralegal,
                    kasusDitangani: data.kasusDitangani,
                    advokatAktif: data.advokatAktif,
                    tingkatKepuasan: data.tingkatKepuasan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return updateStatistikAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteStatistikAdvokatParalegal(id) {
        try {
            const deleteStatistikAdvokatParalegal = await prisma_1.default.statistikAdvokatParalegal.delete({
                where: { id },
            });
            return deleteStatistikAdvokatParalegal;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new AdvokatParalegalService();
