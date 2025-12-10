"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataMagangMahasiswaService {
    async createDataMagangMahasiswa(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const create = await prisma_1.default.dataMahasiswaMagang.create({
                data: {
                    title: data.title,
                    terkait: data.terkait,
                    tentangMagang: data.tentangMagang,
                    tanggungJawab: data.tanggungJawab,
                    keahlian: data.keahlian,
                    pencapaian: data.pencapaian,
                    perusahaanMagang: data.perusahaanMagang,
                    posisiMagang: data.posisiMagang,
                    periodeMagang: data.periodeMagang,
                    lokasiMagang: data.lokasiMagang,
                    superVisorMagang: data.superVisorMagang,
                    emailSuperVisorMagang: data.emailSuperVisorMagang,
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
    async getAllDataMagangMahasiswa() {
        try {
            const getAllDataMagangMahasiswa = await prisma_1.default.dataMahasiswaMagang.findMany();
            return getAllDataMagangMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllDataSeminarMahasiswa:", error);
            throw error;
        }
    }
    async updateDataMagangMahasiswa(id, data) {
        try {
            const updateData = {
                title: data.title,
                terkait: data.terkait,
                tentangMagang: data.tentangMagang,
                tanggungJawab: data.tanggungJawab,
                keahlian: data.keahlian,
                pencapaian: data.pencapaian,
                perusahaanMagang: data.perusahaanMagang,
                posisiMagang: data.posisiMagang,
                periodeMagang: data.periodeMagang,
                lokasiMagang: data.lokasiMagang,
                superVisorMagang: data.superVisorMagang,
                emailSuperVisorMagang: data.emailSuperVisorMagang,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedDataMagangMahasiswa = await prisma_1.default.dataMahasiswaMagang.update({
                where: { id },
                data: updateData,
            });
            return updatedDataMagangMahasiswa;
        }
        catch (error) {
            console.error("Error in updateDataMagangMahasiswa:", error);
            throw error;
        }
    }
    async deleteDataMagangMahasiswa(id) {
        try {
            const deleteDataMagangMahasiswa = await prisma_1.default.dataMahasiswaMagang.delete({
                where: {
                    id,
                },
            });
            return deleteDataMagangMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteDataMagangMahasiswa:", error);
            throw error;
        }
    }
    async createStatistikDataMagangMahasiswa(data) {
        try {
            const create = await prisma_1.default.statistikDataMahasiswaMagang.create({
                data: {
                    ...data,
                },
            });
            return create;
        }
        catch (error) {
            console.error("Error in createStatistikDataMagangMahasiswa:", error);
            throw error;
        }
    }
    async getAllStatistikDataMagangMahasiswa() {
        try {
            const getAllStatistikDataMagangMahasiswa = await prisma_1.default.statistikDataMahasiswaMagang.findMany();
            return getAllStatistikDataMagangMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllStatistikDataMagangMahasiswa:", error);
            throw error;
        }
    }
    async updateStatistikDataMagangMahasiswa(id, data) {
        try {
            const updateData = {
                totalMagang: data.totalMagang,
                mitraInstitusi: data.mitraInstitusi,
                rataDurasiMagang: data.rataDurasiMagang,
                tingkatKepuasan: data.tingkatKepuasan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikDataMagangMahasiswa = await prisma_1.default.statistikDataMahasiswaMagang.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikDataMagangMahasiswa;
        }
        catch (error) {
            console.error("Error in updateStatistikDataMagangMahasiswa:", error);
            throw error;
        }
    }
    async deleteStatistikDataMagangMahasiswa(id) {
        try {
            const deleteStatistikDataMagangMahasiswa = await prisma_1.default.statistikDataMahasiswaMagang.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikDataMagangMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteStatistikDataMagangMahasiswa:", error);
            throw error;
        }
    }
}
exports.default = new DataMagangMahasiswaService();
