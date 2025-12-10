"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
class RekapitulasiPengisianService {
    async createRekapitulasiPengisian(data) {
        try {
            const result = await prisma_1.default.rekapitulasiPengisian.create({
                data: {
                    programNama: data.programNama,
                    angkatan: data.angkatan,
                    totalMahasiswa: data.totalMahasiswa,
                    jumlahResponden: data.jumlahResponden,
                    kategori: data.kategori,
                    persentasi: data.persentasi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createRekapitulasiPengisian:", error);
            throw error;
        }
    }
    async getAllRekapitulasiPengisian() {
        try {
            const rekapitulasiPengisian = await prisma_1.default.rekapitulasiPengisian.findMany();
            return rekapitulasiPengisian;
        }
        catch (error) {
            console.error("Error in getAllRekapitulasiPengisian:", error);
            throw error;
        }
    }
    async updateRekapitulasiPengisian(id, data) {
        try {
            const updatedData = await prisma_1.default.rekapitulasiPengisian.update({
                where: { id },
                data: data,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateRekapitulasiPengisian:", error);
            throw error;
        }
    }
    async deleteRekapitulasiPengisian(id) {
        try {
            const deletedData = await prisma_1.default.rekapitulasiPengisian.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createRekapitulasiPerKategori(data) {
        try {
            const result = await prisma_1.default.rekapitulasiPerKategori.create({
                data: {
                    programNama: data.programNama,
                    totalMahasiswa: data.totalMahasiswa,
                    jumlahResponden: data.jumlahResponden,
                    persentasi: data.persentasi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createRekapitulasiPerKategori:", error);
            throw error;
        }
    }
    async getAllRekapitulasiPerKategori() {
        try {
            const rekapitulasiPerKategori = await prisma_1.default.rekapitulasiPerKategori.findMany();
            return rekapitulasiPerKategori;
        }
        catch (error) {
            console.error("Error in getAllRekapitulasiPerKategori:", error);
            throw error;
        }
    }
    async updateRekapitulasiPerKategori(id, data) {
        try {
            const updatedData = await prisma_1.default.rekapitulasiPerKategori.update({
                where: { id },
                data: data,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateRekapitulasiPerKategori:", error);
            throw error;
        }
    }
    async deleteRekapitulasiPerKategori(id) {
        try {
            const deletedData = await prisma_1.default.rekapitulasiPerKategori.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createStatistikRekapitulasiPerKategori(data) {
        try {
            const result = await prisma_1.default.statistikRekapitulasiPerKategori.create({
                data: {
                    totalResponden: data.totalResponden,
                    tingkatPartisipasi: data.tingkatPartisipasi,
                    formulirLengkap: data.formulirLengkap,
                    dalamProses: data.dalamProses,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createStatistikRekapitulasiPerKategori:", error);
            throw error;
        }
    }
    async getAllStatistikRekapitulasiPerKategori() {
        try {
            const statistikRekapitulasiPerKategori = await prisma_1.default.statistikRekapitulasiPerKategori.findMany();
            return statistikRekapitulasiPerKategori;
        }
        catch (error) {
            console.error("Error in getAllStatistikRekapitulasiPerKategori:", error);
            throw error;
        }
    }
    async updateStatistikRekapitulasiPerKategori(id, data) {
        try {
            const updatedData = await prisma_1.default.statistikRekapitulasiPerKategori.update({
                where: { id },
                data: data,
            });
            return updatedData;
        }
        catch (error) {
            console.error("Error in updateStatistikRekapitulasiPerKategori:", error);
            throw error;
        }
    }
    async deleteStatistikRekapitulasiPerKategori(id) {
        try {
            const deletedData = await prisma_1.default.statistikRekapitulasiPerKategori.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
}
exports.default = new RekapitulasiPengisianService();
