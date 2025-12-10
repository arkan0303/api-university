"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataSeminarMahasiswaService {
    async createDataSeminarMahasiswa(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const create = await prisma_1.default.dataSeminarMahasiswa.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return create;
        }
        catch (error) {
            console.error("Error in createDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async getAllDataSeminarMahasiswa() {
        try {
            const getAllDataSeminarMahasiswa = await prisma_1.default.dataSeminarMahasiswa.findMany();
            return getAllDataSeminarMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async updateDataSeminarMahasiswa(id, data) {
        try {
            const updateData = {
                title: data.title,
                terkait: data.terkait,
                deskripsiSeminar: data.deskripsiSeminar,
                tujuanPembelajaran: data.tujuanPembelajaran,
                materiDibahas: data.materiDibahas,
                hasilDIharapkan: data.hasilDIharapkan,
                tanggalSeminar: data.tanggalSeminar,
                waktuSeminar: data.waktuSeminar,
                lokasi: data.lokasi,
                peserta: data.peserta,
                namaNarasumber: data.namaNarasumber,
                tentangNarasumber: data.tentangNarasumber,
                emailNarasumber: data.emailNarasumber,
                noTelpNarasumber: data.noTelpNarasumber,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedDataSeminarMahasiswa = await prisma_1.default.dataSeminarMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedDataSeminarMahasiswa;
        }
        catch (error) {
            console.error("Error in updateDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async deleteDataSeminarMahasiswa(id) {
        try {
            const deleteDataSeminarMahasiswa = await prisma_1.default.dataSeminarMahasiswa.delete({
                where: {
                    id,
                },
            });
            return deleteDataSeminarMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async createStatistikDataSeminarMahasiswa(data) {
        try {
            const create = await prisma_1.default.statistikDataSeminarMahasiswa.create({
                data: {
                    ...data,
                },
            });
            return create;
        }
        catch (error) {
            console.error("Error in createStatistikDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async getAllStatistikDataSeminarMahasiswa() {
        try {
            const getAllStatistikDataSeminarMahasiswa = await prisma_1.default.statistikDataSeminarMahasiswa.findMany();
            return getAllStatistikDataSeminarMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllStatistikDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async updateStatistikDataSeminarMahasiswa(id, data) {
        try {
            const updateData = {
                totalSeminar: data.totalSeminar,
                totalPeserta: data.totalPeserta,
                totalNarasumber: data.totalNarasumber,
                tingkatKepuasan: data.tingkatKepuasan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikDataSeminarMahasiswa = await prisma_1.default.statistikDataSeminarMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikDataSeminarMahasiswa;
        }
        catch (error) {
            console.error("Error in updateStatistikDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async deleteStatistikDataSeminarMahasiswa(id) {
        try {
            const deleteStatistikDataSeminarMahasiswa = await prisma_1.default.statistikDataSeminarMahasiswa.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikDataSeminarMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteStatistikDataSeminarMahasiswa:", error);
            throw error;
        }
    }
}
exports.default = new DataSeminarMahasiswaService();
