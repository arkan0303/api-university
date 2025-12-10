"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class KekhususanHukumPerdataService {
    async createKekhususanHukumPerdata(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const kekhususanHukumPerdata = await prisma_1.default.kekhususanHukumPerdata.create({
                data: {
                    foto: fotoUrl,
                    semester: data.semester,
                    sks: data.sks,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                },
            });
            return kekhususanHukumPerdata;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllKekhususanHukumPerdata() {
        try {
            const kekhususanHukumPerdataa = await prisma_1.default.kekhususanHukumPerdata.findMany();
            return kekhususanHukumPerdataa;
        }
        catch (error) {
            throw error;
        }
    }
    async updateKekhususanHukumPerdata(id, data) {
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
            const updatedKekhususanHukumPerdata = await prisma_1.default.kekhususanHukumPerdata.update({
                where: { id },
                data: updateData,
            });
            return updatedKekhususanHukumPerdata;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteKekhususanHukumPerdata(id) {
        try {
            const deletedKekhususanHukumPerdata = await prisma_1.default.kekhususanHukumPerdata.delete({
                where: { id },
            });
            return deletedKekhususanHukumPerdata;
        }
        catch (error) {
            throw error;
        }
    }
    async createProspekKarirPerdata(data) {
        try {
            const createdProspekKarir = await prisma_1.default.prospekKarirPerdata.create({
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
    async getAllProspekKarirPerdata() {
        try {
            const prospekKarir = await prisma_1.default.prospekKarirPerdata.findMany();
            return prospekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async updateProspekKarirPerdata(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
            };
            const updatedProspekKarir = await prisma_1.default.prospekKarirPerdata.update({
                where: { id },
                data: updateData,
            });
            return updatedProspekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteProspekKarirPerdata(id) {
        try {
            const deletedProspekKarir = await prisma_1.default.prospekKarirPerdata.delete({
                where: { id },
            });
            return deletedProspekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async createStatistikKekhususanHukumPerdata(data) {
        try {
            const createdStatistikKekhususanHukumPerdata = await prisma_1.default.statistikKekhususanHukumPerdata.create({
                data: {
                    sks: data.sks,
                    mahasiswaAktif: data.mahasiswaAktif,
                    tingkatKelulusan: data.tingkatKelulusan,
                    alumniProfesional: data.alumniProfesional,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createdStatistikKekhususanHukumPerdata;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllStatistikKekhususanHukumPerdata() {
        try {
            const statistikKekhususanHukumPerdata = await prisma_1.default.statistikKekhususanHukumPerdata.findMany();
            return statistikKekhususanHukumPerdata;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikKekhususanHukumPerdata(id, data) {
        try {
            const updateData = {
                sks: data.sks,
                mahasiswaAktif: data.mahasiswaAktif,
                tingkatKelulusan: data.tingkatKelulusan,
                alumniProfesional: data.alumniProfesional,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikKekhususanHukumPerdata = await prisma_1.default.statistikKekhususanHukumPerdata.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikKekhususanHukumPerdata;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteStatistikKekhususanHukumPerdata(id) {
        try {
            const deletedStatistikKekhususanHukumPerdata = await prisma_1.default.statistikKekhususanHukumPerdata.delete({
                where: { id },
            });
            return deletedStatistikKekhususanHukumPerdata;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new KekhususanHukumPerdataService();
