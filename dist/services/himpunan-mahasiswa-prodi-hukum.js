"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class HimpunanMahasiswaProdiHukumService {
    async create(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createHimpunanMahasiswaProdiHukum = await prisma_1.default.himpunanMahasiswaProdiHukum.create({
                data: {
                    foto: fotoUrl,
                    bidang: data.bidang,
                    jabatan: data.jabatan,
                    anggota: data.anggota,
                    tentang: data.tentang,
                    note: data.note,
                    namaKetua: data.namaKetua,
                    email: data.email,
                    noTelp: data.noTelp,
                    programKerja: data.programKerja,
                    prestasi: data.prestasi,
                },
            });
            return createHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAll() {
        try {
            const getAllHimpunanMahasiswaProdiHukum = await prisma_1.default.himpunanMahasiswaProdiHukum.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });
            return getAllHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async update(id, data) {
        try {
            const updateData = {
                bidang: data.bidang,
                jabatan: data.jabatan,
                anggota: data.anggota,
                tentang: data.tentang,
                note: data.note,
                namaKetua: data.namaKetua,
                email: data.email,
                noTelp: data.noTelp,
                programKerja: data.programKerja,
                prestasi: data.prestasi,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedHimpunanMahasiswaProdiHukum = await prisma_1.default.himpunanMahasiswaProdiHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async delete(id) {
        try {
            const deleteHimpunanMahasiswaProdiHukum = await prisma_1.default.himpunanMahasiswaProdiHukum.delete({
                where: {
                    id: id,
                },
            });
            return deleteHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async createStatistik(data) {
        try {
            const createStatistikHimpunanMahasiswaProdiHukum = await prisma_1.default.statistikHimpunanMahasiswaProdiHukum.create({
                data: {
                    bidangOrganisasi: data.bidangOrganisasi,
                    anggotaAktif: data.anggotaAktif,
                    programKerja: data.programKerja,
                    prestasi: data.prestasi,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistikHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllStatistik() {
        try {
            const getAllStatistikHimpunanMahasiswaProdiHukum = await prisma_1.default.statistikHimpunanMahasiswaProdiHukum.findMany();
            return getAllStatistikHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateStatistik(id, data) {
        try {
            const updateData = {
                bidangOrganisasi: data.bidangOrganisasi,
                anggotaAktif: data.anggotaAktif,
                programKerja: data.programKerja,
                prestasi: data.prestasi,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikHimpunanMahasiswaProdiHukum = await prisma_1.default.statistikHimpunanMahasiswaProdiHukum.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteStatistik(id) {
        try {
            const deleteStatistikHimpunanMahasiswaProdiHukum = await prisma_1.default.statistikHimpunanMahasiswaProdiHukum.delete({
                where: {
                    id: id,
                },
            });
            return deleteStatistikHimpunanMahasiswaProdiHukum;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = new HimpunanMahasiswaProdiHukumService();
