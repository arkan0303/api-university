"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class KeteranganAktifMahasiswaService {
    async createKeteranganAktifMahasiswa(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const result = await prisma_1.default.keteranganAktifMahasiswa.create({
                data: {
                    foto: fotoUrl,
                    nama: data.nama,
                    nim: data.nim,
                    jurusan: data.jurusan,
                    semester: data.semester,
                    status: data.status,
                    ipk: data.ipk,
                    keperluan: data.keperluan,
                    noSurat: data.noSurat,
                    tanggalTerbit: data.tanggalTerbit,
                    tahunAkademik: data.tahunAkademik,
                    diTerbitkan: data.diTerbitkan,
                    note: data.note,
                    deskripsi: data.deskripsi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async getAllKeteranganAktifMahasiswa() {
        try {
            const result = await prisma_1.default.keteranganAktifMahasiswa.findMany();
            return result;
        }
        catch (error) {
            console.error("Error in getAllKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async updateKeteranganAktifMahasiswa(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                nim: data.nim,
                jurusan: data.jurusan,
                semester: data.semester,
                status: data.status,
                ipk: data.ipk,
                keperluan: data.keperluan,
                noSurat: data.noSurat,
                tanggalTerbit: data.tanggalTerbit,
                tahunAkademik: data.tahunAkademik,
                diTerbitkan: data.diTerbitkan,
                note: data.note,
                deskripsi: data.deskripsi,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedPimpinan = await prisma_1.default.keteranganAktifMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedPimpinan;
        }
        catch (error) {
            console.error("Error in updateKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async deleteKeteranganAktifMahasiswa(id) {
        try {
            const deletedData = await prisma_1.default.keteranganAktifMahasiswa.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async createStatistikKeteranganAktifMahasiswa(data) {
        try {
            const result = await prisma_1.default.statistikKeteranganAktifMahasiswa.create({
                data: {
                    totalMahasiswa: data.totalMahasiswa,
                    aktif: data.aktif,
                    tidakAktif: data.tidakAktif,
                    selesai: data.selesai,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in createStatistikKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async getAllStatistikKeteranganAktifMahasiswa() {
        try {
            const result = await prisma_1.default.statistikKeteranganAktifMahasiswa.findMany();
            return result;
        }
        catch (error) {
            console.error("Error in getAllStatistikKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async updateStatistikKeteranganAktifMahasiswa(id, data) {
        try {
            const updateData = {
                totalMahasiswa: data.totalMahasiswa,
                aktif: data.aktif,
                tidakAktif: data.tidakAktif,
                selesai: data.selesai,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistik = await prisma_1.default.statistikKeteranganAktifMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistik;
        }
        catch (error) {
            console.error("Error in updateStatistikKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async deleteStatistikKeteranganAktifMahasiswa(id) {
        try {
            const deletedData = await prisma_1.default.statistikKeteranganAktifMahasiswa.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
    async getDataKeteranganAktifMahasiswa() {
        try {
            const result = await prisma_1.default.keteranganAktifMahasiswa.findMany({
                select: {
                    id: true,
                    nama: true,
                },
            });
            return result;
        }
        catch (error) {
            console.error("Error in getDataKeteranganAktifMahasiswa:", error);
            throw error;
        }
    }
}
exports.default = new KeteranganAktifMahasiswaService();
