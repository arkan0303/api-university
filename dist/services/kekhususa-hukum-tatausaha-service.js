"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class KekhususanHukumTataUsahaNegaraService {
    async createKekhususanHukumTataUsahaNegara(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const kekhususanHukumTataUsahaNegara = await prisma_1.default.kekhususanHukumTataUsahaNegara.create({
                data: {
                    foto: fotoUrl,
                    semester: data.semester,
                    sks: data.sks,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                },
            });
            return kekhususanHukumTataUsahaNegara;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllKekhususanHukumTataUsahaNegara() {
        try {
            const kekhususanHukumTataUsahaNegaraa = await prisma_1.default.kekhususanHukumTataUsahaNegara.findMany();
            return kekhususanHukumTataUsahaNegaraa;
        }
        catch (error) {
            throw error;
        }
    }
    async updateKekhususanHukumTataUsahaNegara(id, data) {
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
            const updatedKekhususanHukumTataUsahaNegara = await prisma_1.default.kekhususanHukumTataUsahaNegara.update({
                where: { id },
                data: updateData,
            });
            return updatedKekhususanHukumTataUsahaNegara;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteKekhususanHukumTataUsahaNegara(id) {
        try {
            const deletedKekhususanHukumTataUsahaNegara = await prisma_1.default.kekhususanHukumTataUsahaNegara.delete({
                where: { id },
            });
            return deletedKekhususanHukumTataUsahaNegara;
        }
        catch (error) {
            throw error;
        }
    }
    async createProspekKarirTataUsahaNegara(data) {
        try {
            const createdProspekKarir = await prisma_1.default.prospekKarirTataUsahaNegara.create({
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
    async getAllProspekKarirTataUsahaNegara() {
        try {
            const prospekKarir = await prisma_1.default.prospekKarirTataUsahaNegara.findMany();
            return prospekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async updateProspekKarirTataUsahaNegara(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
            };
            const updatedProspekKarir = await prisma_1.default.prospekKarirTataUsahaNegara.update({
                where: { id },
                data: updateData,
            });
            return updatedProspekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteProspekKarirTataUsahaNegara(id) {
        try {
            const deletedProspekKarir = await prisma_1.default.prospekKarirTataUsahaNegara.delete({
                where: { id },
            });
            return deletedProspekKarir;
        }
        catch (error) {
            throw error;
        }
    }
    async createStatistikKekhususanHukumTataUsahaNegara(data) {
        try {
            const createdStatistikKekhususanHukumTataUsahaNegara = await prisma_1.default.statistikKekhususanHukumTataUsahaNegara.create({
                data: {
                    sks: data.sks,
                    mahasiswaAktif: data.mahasiswaAktif,
                    tingkatKelulusan: data.tingkatKelulusan,
                    alumniProfesional: data.alumniProfesional,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createdStatistikKekhususanHukumTataUsahaNegara;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllStatistikKekhususanHukumTataUsahaNegara() {
        try {
            const statistikKekhususanHukumTataUsahaNegara = await prisma_1.default.statistikKekhususanHukumTataUsahaNegara.findMany();
            return statistikKekhususanHukumTataUsahaNegara;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikKekhususanHukumTataUsahaNegara(id, data) {
        try {
            const updateData = {
                sks: data.sks,
                mahasiswaAktif: data.mahasiswaAktif,
                tingkatKelulusan: data.tingkatKelulusan,
                alumniProfesional: data.alumniProfesional,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikKekhususanHukumTataUsahaNegara = await prisma_1.default.statistikKekhususanHukumTataUsahaNegara.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikKekhususanHukumTataUsahaNegara;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteStatistikKekhususanHukumTataUsahaNegara(id) {
        try {
            const deletedStatistikKekhususanHukumTataUsahaNegara = await prisma_1.default.statistikKekhususanHukumTataUsahaNegara.delete({
                where: { id },
            });
            return deletedStatistikKekhususanHukumTataUsahaNegara;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new KekhususanHukumTataUsahaNegaraService();
