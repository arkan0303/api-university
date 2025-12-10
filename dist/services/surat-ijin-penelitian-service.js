"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class SuratIjinPenelitianService {
    async createSuratIjinPenelitian(data) {
        try {
            const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            // Process gallery if exists
            let galeriData = [];
            if (data.file && data.file.length > 0) {
                const uploadedUrls = await Promise.all(data.file.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const suratIjinPenelitian = await prisma_1.default.suratIjinPenelitian.create({
                data: {
                    foto: uploadImage,
                    file: galeriData,
                    title: data.title,
                    status: data.status,
                    noSurat: data.noSurat,
                    tanggalTerbit: data.tanggalTerbit,
                    periodePenelitian: data.periodePenelitian,
                    idMahasiswa: data.idMahasiswa,
                    penelitian: data.penelitian,
                    temaPenelitian: data.temaPenelitian,
                    deskripsi: data.deskripsi,
                    tujuanPenelitian: data.tujuanPenelitian,
                    metodePenelitian: data.metodePenelitian,
                    hasilDiharapkan: data.hasilDiharapkan,
                },
            });
            return suratIjinPenelitian;
        }
        catch (error) {
            console.error("Error creating surat ijin penelitian:", error);
            throw error;
        }
    }
    async getAllSuratIjinPenelitian() {
        try {
            // Ambil semua data surat
            const suratIjinPenelitian = await prisma_1.default.suratIjinPenelitian.findMany();
            // Ambil semua data mahasiswa
            const mahasiswa = await prisma_1.default.keteranganAktifMahasiswa.findMany();
            // Lakukan mapping manual
            const hasilMapping = suratIjinPenelitian.map((surat) => {
                const dataMahasiswa = mahasiswa.find((mhs) => mhs.id.toString() === surat.idMahasiswa);
                return {
                    ...surat,
                    mahasiswa: dataMahasiswa
                        ? {
                            id: dataMahasiswa.id,
                            nama: dataMahasiswa.nama,
                            nim: dataMahasiswa.nim,
                            jurusan: dataMahasiswa.jurusan,
                            semester: dataMahasiswa.semester,
                            // ipk: dataMahasiswa.ipk,
                            // status: dataMahasiswa.status,
                        }
                        : null,
                };
            });
            return hasilMapping;
        }
        catch (error) {
            console.error("Error getting surat ijin penelitian:", error);
            throw error;
        }
    }
    async updateSuratIjinPenelitian(id, data) {
        try {
            const updateData = {
                foto: data.foto,
                file: data.file,
                title: data.title,
                status: data.status,
                noSurat: data.noSurat,
                tanggalTerbit: data.tanggalTerbit,
                periodePenelitian: data.periodePenelitian,
                idMahasiswa: data.idMahasiswa,
                penelitian: data.penelitian,
                temaPenelitian: data.temaPenelitian,
                deskripsi: data.deskripsi,
                tujuanPenelitian: data.tujuanPenelitian,
                metodePenelitian: data.metodePenelitian,
                hasilDiharapkan: data.hasilDiharapkan,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            // Process gallery if exists
            let galeriData = [];
            if (data.file && data.file.length > 0) {
                const uploadedUrls = await Promise.all(data.file.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const updatedSuratIjinPenelitian = await prisma_1.default.suratIjinPenelitian.update({
                where: { id },
                data: updateData,
            });
            return updatedSuratIjinPenelitian;
        }
        catch (error) {
            console.error("Error updating surat ijin penelitian:", error);
            throw error;
        }
    }
    async deleteSuratIjinPenelitian(id) {
        try {
            const suratIjinPenelitian = await prisma_1.default.suratIjinPenelitian.delete({
                where: { id },
            });
            return suratIjinPenelitian;
        }
        catch (error) {
            console.error("Error deleting surat ijin penelitian:", error);
            throw error;
        }
    }
    async getStatistikSuratIjinPenelitian() {
        try {
            const statistikSuratIjinPenelitian = await prisma_1.default.statistikSuratIjinPenelitian.findMany();
            return statistikSuratIjinPenelitian;
        }
        catch (error) {
            console.error("Error getting statistik surat ijin penelitian:", error);
            throw error;
        }
    }
    async updateStatistikSuratIjinPenelitian(id, data) {
        try {
            const updateData = {
                totalSurat: data.totalSurat,
                diterima: data.diterima,
                ditolak: data.ditolak,
                selesai: data.selesai,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikSuratIjinPenelitian = await prisma_1.default.statistikSuratIjinPenelitian.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikSuratIjinPenelitian;
        }
        catch (error) {
            console.error("Error updating statistik surat ijin penelitian:", error);
            throw error;
        }
    }
    async deleteStatistikSuratIjinPenelitian(id) {
        try {
            const statistikSuratIjinPenelitian = await prisma_1.default.statistikSuratIjinPenelitian.delete({
                where: { id },
            });
            return statistikSuratIjinPenelitian;
        }
        catch (error) {
            console.error("Error deleting statistik surat ijin penelitian:", error);
            throw error;
        }
    }
    async createStatistikSuratIjinPenelitian(data) {
        try {
            const statistikSuratIjinPenelitian = await prisma_1.default.statistikSuratIjinPenelitian.create({
                data: data,
            });
            return statistikSuratIjinPenelitian;
        }
        catch (error) {
            console.error("Error creating statistik surat ijin penelitian:", error);
            throw error;
        }
    }
}
exports.default = new SuratIjinPenelitianService();
