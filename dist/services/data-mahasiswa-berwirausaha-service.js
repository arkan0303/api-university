"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class DataMahasiswaBerwirausahaService {
    async createDataMahasiswaBerwirausaha(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const create = await prisma_1.default.dataMahasiswaBerwirausaha.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return create;
        }
        catch (error) {
            console.error("Error in createDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
    async getAllDataMahasiswaBerwirausaha() {
        try {
            const getAllDataMahasiswaBerwirausaha = await prisma_1.default.dataMahasiswaBerwirausaha.findMany();
            return getAllDataMahasiswaBerwirausaha;
        }
        catch (error) {
            console.error("Error in getAllDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
    async updateDataMahasiswaBerwirausaha(id, data) {
        try {
            const updateData = {
                title: data.title,
                namaMahasiswa: data.namaMahasiswa,
                nimMahasiswa: data.nimMahasiswa,
                tentangBisnis: data.tentangBisnis,
                produkLayanan: data.produkLayanan,
                pencapaian: data.pencapaian,
                tantangan: data.tantangan,
                rencanaMasaDeoan: data.rencanaMasaDeoan,
                kategori: data.kategori,
                tahunBerdiri: data.tahunBerdiri,
                jumlahKaryawan: data.jumlahKaryawan,
                pendapatan: data.pendapatan,
                lokasi: data.lokasi,
                noTelp: data.noTelp,
                email: data.email,
                lokasiMahasiswa: data.lokasiMahasiswa,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedDataMahasiswaBerwirausaha = await prisma_1.default.dataMahasiswaBerwirausaha.update({
                where: { id },
                data: updateData,
            });
            return updatedDataMahasiswaBerwirausaha;
        }
        catch (error) {
            console.error("Error in updateDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
    async deleteDataMahasiswaBerwirausaha(id) {
        try {
            const deleteDataMahasiswaBerwirausaha = await prisma_1.default.dataMahasiswaBerwirausaha.delete({
                where: {
                    id,
                },
            });
            return deleteDataMahasiswaBerwirausaha;
        }
        catch (error) {
            console.error("Error in deleteDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
    async createStatistikDataMahasiswaBerwirausaha(data) {
        try {
            const create = await prisma_1.default.statistikDataMahasiswaBerwirausaha.create({
                data: {
                    ...data,
                },
            });
            return create;
        }
        catch (error) {
            console.error("Error in createStatistikDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
    async getAllStatistikDataMahasiswaBerwirausaha() {
        try {
            const getAllStatistikDataMahasiswaBerwirausaha = await prisma_1.default.statistikDataMahasiswaBerwirausaha.findMany();
            return getAllStatistikDataMahasiswaBerwirausaha;
        }
        catch (error) {
            console.error("Error in getAllStatistikDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
    async updateStatistikDataMahasiswaBerwirausaha(id, data) {
        try {
            const updateData = {
                totalMahasiswaBerwirausaha: data.totalMahasiswaBerwirausaha,
                lapanganKerja: data.lapanganKerja,
                tingkatKeberhasilan: data.tingkatKeberhasilan,
                bisnisAktif: data.bisnisAktif,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikDataMahasiswaBerwirausaha = await prisma_1.default.statistikDataMahasiswaBerwirausaha.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikDataMahasiswaBerwirausaha;
        }
        catch (error) {
            console.error("Error in updateStatistikDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
    async deleteStatistikDataMahasiswaBerwirausaha(id) {
        try {
            const deleteStatistikDataMahasiswaBerwirausaha = await prisma_1.default.statistikDataMahasiswaBerwirausaha.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikDataMahasiswaBerwirausaha;
        }
        catch (error) {
            console.error("Error in deleteStatistikDataMahasiswaBerwirausaha:", error);
            throw error;
        }
    }
}
exports.default = new DataMahasiswaBerwirausahaService();
