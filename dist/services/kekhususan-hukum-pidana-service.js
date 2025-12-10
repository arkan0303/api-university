"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class KekhususanHukumPidanaService {
    async createKekhususanHukumPidana(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const kekhususanHukumPidana = await prisma_1.default.kekhususanHukumPidana.create({
                data: {
                    foto: fotoUrl,
                    semester: data.semester,
                    sks: data.sks,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                },
            });
            return kekhususanHukumPidana;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllKekhususanHukumPidana() {
        try {
            const kekhususanHukumPidanaa = await prisma_1.default.kekhususanHukumPidana.findMany();
            return kekhususanHukumPidanaa;
        }
        catch (error) {
            throw error;
        }
    }
    async updateKekhususanHukumPidana(id, data) {
        try {
            const updateData = {
                semester: data.semester,
                sks: data.sks,
                title: data.title,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedKekhususanHukumPidana = await prisma_1.default.kekhususanHukumPidana.update({
                where: { id },
                data: updateData,
            });
            return updatedKekhususanHukumPidana;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteKekhususanHukumPidana(id) {
        try {
            const deletedKekhususanHukumPidana = await prisma_1.default.kekhususanHukumPidana.delete({
                where: { id },
            });
            return deletedKekhususanHukumPidana;
        }
        catch (error) {
            throw error;
        }
    }
    async createProspekKarir(data) {
        try {
            const createdProspekKarir = await prisma_1.default.prospekKarir.create({
                data: {
                    title: data.title,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                },
            });
            return createdProspekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllProspekKarir() {
        try {
            const prospekKarir = await prisma_1.default.prospekKarir.findMany();
            return prospekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async updateProspekKarir(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
            };
            const updatedProspekKarir = await prisma_1.default.prospekKarir.update({
                where: { id },
                data: updateData,
            });
            return updatedProspekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteProspekKarir(id) {
        try {
            const deletedProspekKarir = await prisma_1.default.prospekKarir.delete({
                where: { id },
            });
            return deletedProspekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async createStatistikKekhususanHukumPidana(data) {
        try {
            const createdStatistikKekhususanHukumPidana = await prisma_1.default.statistikKekhususanHukumPidana.create({
                data: {
                    sks: data.sks,
                    mahasiswaAktif: data.mahasiswaAktif,
                    tingkatKelulusan: data.tingkatKelulusan,
                    alumniProfesional: data.alumniProfesional,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createdStatistikKekhususanHukumPidana;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllStatistikKekhususanHukumPidana() {
        try {
            const statistikKekhususanHukumPidana = await prisma_1.default.statistikKekhususanHukumPidana.findMany();
            return statistikKekhususanHukumPidana;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikKekhususanHukumPidana(id, data) {
        try {
            const updateData = {
                sks: data.sks,
                mahasiswaAktif: data.mahasiswaAktif,
                tingkatKelulusan: data.tingkatKelulusan,
                alumniProfesional: data.alumniProfesional,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikKekhususanHukumPidana = await prisma_1.default.statistikKekhususanHukumPidana.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikKekhususanHukumPidana;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteStatistikKekhususanHukumPidana(id) {
        try {
            const deletedStatistikKekhususanHukumPidana = await prisma_1.default.statistikKekhususanHukumPidana.delete({
                where: { id },
            });
            return deletedStatistikKekhususanHukumPidana;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new KekhususanHukumPidanaService();
