"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SeminarProposalService {
    async createSeminarProposal(seminarProposal) {
        try {
            let fotoUrl = null;
            if (seminarProposal.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(seminarProposal.foto.buffer);
            }
            const createdSeminarProposal = await prisma_1.default.seminarProposal.create({
                data: {
                    title: seminarProposal.title,
                    kategori: seminarProposal.kategori,
                    foto: fotoUrl,
                },
            });
            return createdSeminarProposal;
        }
        catch (error) {
            console.error("Error in createSeminarProposal:", error);
            throw error;
        }
    }
    async getAllSeminarProposal() {
        try {
            const seminarProposal = await prisma_1.default.seminarProposal.findMany();
            return seminarProposal;
        }
        catch (error) {
            console.error("Error in getAllSeminarProposal:", error);
            throw error;
        }
    }
    async updateSeminarProposal(id, data) {
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
            const updatedSeminarProposal = await prisma_1.default.seminarProposal.update({
                where: { id },
                data: updateData,
            });
            return updatedSeminarProposal;
        }
        catch (error) {
            console.error("Error in updateSeminarProposal:", error);
            throw error;
        }
    }
    async deleteSeminarProposal(id) {
        try {
            const deletedSeminarProposal = await prisma_1.default.seminarProposal.delete({
                where: { id },
            });
            return deletedSeminarProposal;
        }
        catch (error) {
            console.error("Error in deleteSeminarProposal:", error);
            throw error;
        }
    }
    async createProsedurPelaksanaan(sopPendaftaran) {
        try {
            const createdProsedurPelaksanaan = await prisma_1.default.soppendaftaran.create({
                data: {
                    tahapan: sopPendaftaran.tahapan,
                    deskripsi: sopPendaftaran.deskripsi,
                    updatedAt: new Date(),
                    createdAt: new Date(),
                },
            });
            return createdProsedurPelaksanaan;
        }
        catch (error) {
            console.error("Error in createProsedurPelaksanaan:", error);
            throw error;
        }
    }
    async getAllProsedurPelaksanaan() {
        try {
            const prosedurPelaksanaan = await prisma_1.default.soppendaftaran.findMany();
            return prosedurPelaksanaan;
        }
        catch (error) {
            console.error("Error in getAllProsedurPelaksanaan:", error);
            throw error;
        }
    }
    async updateProsedurPelaksanaan(id, data) {
        try {
            const updateData = {
                tahapan: data.tahapan,
                deskripsi: data.deskripsi,
            };
            const updatedProsedurPelaksanaan = await prisma_1.default.soppendaftaran.update({
                where: { id },
                data: updateData,
            });
            return updatedProsedurPelaksanaan;
        }
        catch (error) {
            console.error("Error in updateProsedurPelaksanaan:", error);
            throw error;
        }
    }
    async deleteProsedurPelaksanaan(id) {
        try {
            const deletedProsedurPelaksanaan = await prisma_1.default.soppendaftaran.delete({
                where: { id },
            });
            return deletedProsedurPelaksanaan;
        }
        catch (error) {
            console.error("Error in deleteProsedurPelaksanaan:", error);
            throw error;
        }
    }
    async createStatistikSeminarProposal(statistikSeminarProposal) {
        try {
            const createdStatistikSeminarProposal = await prisma_1.default.statistikSeminarProposal.create({
                data: {
                    seminarPerTahun: statistikSeminarProposal.seminarPerTahun,
                    tingkatKelulusan: statistikSeminarProposal.tingkatKelulusan,
                    bulanPersiapan: statistikSeminarProposal.bulanPersiapan,
                    timPenguji: statistikSeminarProposal.timPenguji,
                    slogan: statistikSeminarProposal.slogan,
                    deskripsi: statistikSeminarProposal.deskripsi,
                },
            });
            return createdStatistikSeminarProposal;
        }
        catch (error) {
            console.error("Error in createStatistikSeminarProposal:", error);
            throw error;
        }
    }
    async getAllStatistikSeminarProposal() {
        try {
            const statistikSeminarProposal = await prisma_1.default.statistikSeminarProposal.findMany();
            return statistikSeminarProposal;
        }
        catch (error) {
            console.error("Error in getAllStatistikSeminarProposal:", error);
            throw error;
        }
    }
    async updateStatistikSeminarProposal(id, data) {
        try {
            const updateData = {
                seminarPerTahun: data.seminarPerTahun,
                tingkatKelulusan: data.tingkatKelulusan,
                bulanPersiapan: data.bulanPersiapan,
                timPenguji: data.timPenguji,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikSeminarProposal = await prisma_1.default.statistikSeminarProposal.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikSeminarProposal;
        }
        catch (error) {
            console.error("Error in updateStatistikSeminarProposal:", error);
            throw error;
        }
    }
    async deleteStatistikSeminarProposal(id) {
        try {
            const deletedStatistikSeminarProposal = await prisma_1.default.statistikSeminarProposal.delete({
                where: { id },
            });
            return deletedStatistikSeminarProposal;
        }
        catch (error) {
            console.error("Error in deleteStatistikSeminarProposal:", error);
            throw error;
        }
    }
}
exports.default = new SeminarProposalService();
