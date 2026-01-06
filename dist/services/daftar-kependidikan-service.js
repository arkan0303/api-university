"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class DaftarKependidikanService {
    async createDaftarKependidikan(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createKependidikan = await prisma_1.default.tenagaKependidikan.create({
                data: {
                    foto: fotoUrl,
                    nama: data.nama,
                    jabatan: data.jabatan,
                    nip: data.nip,
                    deskripsi: data.deskripsi,
                    riwayatPendidikan: data.riwayatPendidikan,
                    keahlian: data.keahlian,
                    tanggungJawab: data.tanggungJawab,
                    prestasi: data.prestasi,
                    pelatihan: data.pelatihan,
                    email: data.email,
                    noTelp: data.noTelp,
                    pengalaman: data.pengalaman,
                    nik: data.nik,
                },
            });
            return createKependidikan;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllDaftarKependidikan() {
        try {
            const getAllKependidikan = await prisma_1.default.tenagaKependidikan.findMany();
            return getAllKependidikan;
        }
        catch (error) {
            throw error;
        }
    }
    async updateDaftarKependidikan(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                jabatan: data.jabatan,
                nip: data.nip,
                deskripsi: data.deskripsi,
                riwayatPendidikan: data.riwayatPendidikan,
                keahlian: data.keahlian,
                prestasi: data.prestasi,
                pelatihan: data.pelatihan,
                email: data.email,
                noTelp: data.noTelp,
                pengalaman: data.pengalaman,
                tanggungJawab: data.tanggungJawab,
                nik: data.nik,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedDaftarKependidikan = await prisma_1.default.tenagaKependidikan.update({
                where: { id },
                data: updateData,
            });
            return updatedDaftarKependidikan;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteDaftarKependidikanById(id) {
        try {
            const deletedDaftarKependidikan = await prisma_1.default.tenagaKependidikan.delete({
                where: { id },
            });
            return deletedDaftarKependidikan;
        }
        catch (error) {
            throw error;
        }
    }
    async getStatistikDaftarKependidikan() {
        try {
            const getAllDosen = await prisma_1.default.statistikTenagaKependidikan.findMany();
            return getAllDosen;
        }
        catch (error) {
            throw error;
        }
    }
    async createStatistikTenagaKependidikan(data) {
        try {
            const createStatistik = await prisma_1.default.statistikTenagaKependidikan.create({
                data: {
                    totalTenagaKependidikan: data.totalTenagaKependidikan,
                    administrasi: data.administrasi,
                    teknis: data.teknis,
                    pustakawan: data.pustakawan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistik;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikTenagaKependidikan(id, data) {
        // Gunakan any untuk sementara
        try {
            const updateData = {
                totalTenagaKependidikan: data.totalTenagaKependidikan,
                administrasi: data.administrasi,
                teknis: data.teknis,
                pustakawan: data.pustakawan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistik = await prisma_1.default.statistikTenagaKependidikan.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistik;
        }
        catch (error) {
            console.error("Error in updateStatistikDaftarDosen:", error); // Tambahkan log error
            throw error;
        }
    }
    async deleteStatistikTenagaKependidikanById(id) {
        try {
            const deletedStatistik = await prisma_1.default.statistikTenagaKependidikan.delete({
                where: { id },
            });
            return deletedStatistik;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new DaftarKependidikanService();
