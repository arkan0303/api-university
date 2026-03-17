"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SidangSkripsiService {
    async createSidangSkripsi(sidangSkripsi) {
        try {
            const fotoUrl = sidangSkripsi.foto
                ? await (0, cloudinary_1.uploadToCloudinary)(sidangSkripsi.foto.buffer)
                : null;
            const createdSidangSkripsi = await prisma_1.default.sidangSkripsi.create({
                data: {
                    title: sidangSkripsi.title,
                    kategori: sidangSkripsi.kategori,
                    foto: fotoUrl,
                },
            });
            return createdSidangSkripsi;
        }
        catch (error) {
            console.error("Error in createSidangSkripsi:", error);
            throw error;
        }
    }
    async getAllSidangSkripsi() {
        try {
            const sidangSkripsi = await prisma_1.default.sidangSkripsi.findMany();
            return sidangSkripsi;
        }
        catch (error) {
            console.error("Error in getAllSidangSkripsi:", error);
            throw error;
        }
    }
    async updateSidangSkripsi(id, data) {
        try {
            const updateData = {
                title: data.title,
                kategori: data.kategori,
                foto: data.foto,
            };
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedSidangSkripsi = await prisma_1.default.sidangSkripsi.update({
                where: { id },
                data: updateData,
            });
            return updatedSidangSkripsi;
        }
        catch (error) {
            console.error("Error in updateSeminarProposal:", error);
            throw error;
        }
    }
    async deleteSidangSkripsi(id) {
        try {
            const deletedSidangSkripsi = await prisma_1.default.sidangSkripsi.delete({
                where: { id },
            });
            return deletedSidangSkripsi;
        }
        catch (error) {
            console.error("Error in deleteSidangSkripsi:", error);
            throw error;
        }
    }
    async createProsedurSidangSkripsi(prosedurSidangSkripsi) {
        try {
            let fotoUrl;
            if (prosedurSidangSkripsi.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(prosedurSidangSkripsi.foto.buffer);
            }
            const createdProsedurSidangSkripsi = await prisma_1.default.prosedurSidangSkripsi.create({
                data: {
                    title: prosedurSidangSkripsi.title,
                    tahapan: prosedurSidangSkripsi.tahapan,
                    deskripsi: prosedurSidangSkripsi.deskripsi,
                    foto: fotoUrl || undefined,
                },
            });
            return createdProsedurSidangSkripsi;
        }
        catch (error) {
            console.error("Error in createProsedurSidangSkripsi:", error);
            throw error;
        }
    }
    async getAllProsedurSidangSkripsi() {
        try {
            const prosedurSidangSkripsi = await prisma_1.default.prosedurSidangSkripsi.findMany();
            return prosedurSidangSkripsi;
        }
        catch (error) {
            console.error("Error in getAllProsedurSidangSkripsi:", error);
            throw error;
        }
    }
    async updateProsedurSidangSkripsi(id, data) {
        try {
            const updateData = {
                title: data.title,
                tahapan: data.tahapan,
                deskripsi: data.deskripsi,
                foto: data.foto,
            };
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedProsedurSidangSkripsi = await prisma_1.default.prosedurSidangSkripsi.update({
                where: { id },
                data: updateData,
            });
            return updatedProsedurSidangSkripsi;
        }
        catch (error) {
            console.error("Error in updateProsedurSidangSkripsi:", error);
            throw error;
        }
    }
    async deleteProsedurSidangSkripsi(id) {
        try {
            const deletedProsedurSidangSkripsi = await prisma_1.default.prosedurSidangSkripsi.delete({
                where: { id },
            });
            return deletedProsedurSidangSkripsi;
        }
        catch (error) {
            console.error("Error in deleteProsedurSidangSkripsi:", error);
            throw error;
        }
    }
    async createStatistikSidangSkripsi(statistikSidangSkripsi) {
        try {
            const createdStatistikSidangSkripsi = await prisma_1.default.statistikSidangSkripsi.create({
                data: {
                    sidangPerTahun: statistikSidangSkripsi.sidangPerTahun,
                    tingkatKelulusan: statistikSidangSkripsi.tingkatKelulusan,
                    durasiSidang: statistikSidangSkripsi.durasiSidang,
                    timPenguji: statistikSidangSkripsi.timPenguji,
                    slogan: statistikSidangSkripsi.slogan,
                    deskripsi: statistikSidangSkripsi.deskripsi,
                },
            });
            return createdStatistikSidangSkripsi;
        }
        catch (error) {
            console.error("Error in createStatistikSidangSkripsi:", error);
            throw error;
        }
    }
    async getAllStatistikSidangSkripsi() {
        try {
            const statistikSidangSkripsi = await prisma_1.default.statistikSidangSkripsi.findMany();
            return statistikSidangSkripsi;
        }
        catch (error) {
            console.error("Error in getAllStatistikSidangSkripsi:", error);
            throw error;
        }
    }
    async updateStatistikSidangSkripsi(id, data) {
        try {
            const updateData = {
                sidangPerTahun: data.sidangPerTahun,
                tingkatKelulusan: data.tingkatKelulusan,
                durasiSidang: data.durasiSidang,
                timPenguji: data.timPenguji,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikSidangSkripsi = await prisma_1.default.statistikSidangSkripsi.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikSidangSkripsi;
        }
        catch (error) {
            console.error("Error in updateStatistikSidangSkripsi:", error);
            throw error;
        }
    }
    async deleteStatistikSidangSkripsi(id) {
        try {
            const deletedStatistikSidangSkripsi = await prisma_1.default.statistikSidangSkripsi.delete({
                where: { id },
            });
            return deletedStatistikSidangSkripsi;
        }
        catch (error) {
            console.error("Error in deleteStatistikSidangSkripsi:", error);
            throw error;
        }
    }
    async createKriteriaSidangSkripsi(kriteriaSidangSkripsi) {
        try {
            const createdKriteriaSidangSkripsi = await prisma_1.default.kriteriaSidangSkripsi.create({
                data: {
                    title: kriteriaSidangSkripsi.title,
                    kriteria: kriteriaSidangSkripsi.kriteria,
                    skor: kriteriaSidangSkripsi.skor,
                },
            });
            return createdKriteriaSidangSkripsi;
        }
        catch (error) {
            console.error("Error in createKriteriaSidangSkripsi:", error);
            throw error;
        }
    }
    async getAllKriteriaSidangSkripsi() {
        try {
            const kriteriaSidangSkripsi = await prisma_1.default.kriteriaSidangSkripsi.findMany();
            return kriteriaSidangSkripsi;
        }
        catch (error) {
            console.error("Error in getAllKriteriaSidangSkripsi:", error);
            throw error;
        }
    }
    async updateKriteriaSidangSkripsi(id, data) {
        try {
            const updateData = {
                title: data.title,
                kriteria: data.kriteria,
                skor: data.skor,
            };
            const updatedKriteriaSidangSkripsi = await prisma_1.default.kriteriaSidangSkripsi.update({
                where: { id },
                data: updateData,
            });
            return updatedKriteriaSidangSkripsi;
        }
        catch (error) {
            console.error("Error in updateKriteriaSidangSkripsi:", error);
            throw error;
        }
    }
    async deleteKriteriaSidangSkripsi(id) {
        try {
            const deletedKriteriaSidangSkripsi = await prisma_1.default.kriteriaSidangSkripsi.delete({
                where: { id },
            });
            return deletedKriteriaSidangSkripsi;
        }
        catch (error) {
            console.error("Error in deleteKriteriaSidangSkripsi:", error);
            throw error;
        }
    }
}
exports.default = new SidangSkripsiService();
