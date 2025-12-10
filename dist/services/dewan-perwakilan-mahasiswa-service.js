"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class DewanPerwakilanMahasiswaService {
    async create(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createDewanPerwakilanMahasiswa = await prisma_1.default.dewanPerwakilanMahasiswa.create({
                data: {
                    foto: fotoUrl,
                    nama: data.nama,
                    jabatan: data.jabatan,
                    tugas: data.tugas,
                    visi: data.visi,
                    misi: data.misi,
                    programKerja: data.programKerja,
                    pencapaian: data.pencapaian,
                    email: data.email,
                    noTelp: data.noTelp,
                },
            });
            return createDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in createDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
    async getAll() {
        try {
            const getAllDewanPerwakilanMahasiswa = await prisma_1.default.dewanPerwakilanMahasiswa.findMany();
            return getAllDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
    async update(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                jabatan: data.jabatan,
                tugas: data.tugas,
                visi: data.visi,
                misi: data.misi,
                programKerja: data.programKerja,
                pencapaian: data.pencapaian,
                email: data.email,
                noTelp: data.noTelp,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedDewanPerwakilanMahasiswa = await prisma_1.default.dewanPerwakilanMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in updateDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
    async delete(id) {
        try {
            const deleteDewanPerwakilanMahasiswa = await prisma_1.default.dewanPerwakilanMahasiswa.delete({
                where: {
                    id,
                },
            });
            return deleteDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
    async createStatistik(data) {
        try {
            const createStatistikDewanPerwakilanMahasiswa = await prisma_1.default.statistikDewanPerwakilanMahasiswa.create({
                data,
            });
            return createStatistikDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in createStatistikDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
    async getAllStatistik() {
        try {
            const getAllStatistikDewanPerwakilanMahasiswa = await prisma_1.default.statistikDewanPerwakilanMahasiswa.findMany();
            return getAllStatistikDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllStatistikDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
    async updateStatistik(id, data) {
        try {
            const updateData = {
                anggotaAktif: data.anggotaAktif,
                aspirasiDitampung: data.aspirasiDitampung,
                praturanDisusun: data.praturanDisusun,
                akuntabel: data.akuntabel,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikDewanPerwakilanMahasiswa = await prisma_1.default.statistikDewanPerwakilanMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in updateStatistikDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
    async deleteStatistik(id) {
        try {
            const deleteStatistikDewanPerwakilanMahasiswa = await prisma_1.default.statistikDewanPerwakilanMahasiswa.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikDewanPerwakilanMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteStatistikDewanPerwakilanMahasiswa:", error);
            return null;
        }
    }
}
exports.default = new DewanPerwakilanMahasiswaService();
