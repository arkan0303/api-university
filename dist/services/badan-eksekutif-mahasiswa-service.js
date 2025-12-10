"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class BadanEksikutifMahasiswaService {
    async create(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createBadanEksikutifMahasiswa = await prisma_1.default.badanEksikutifMahasiswa.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return createBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in createBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
    async getAll() {
        try {
            const getAllBadanEksikutifMahasiswa = await prisma_1.default.badanEksikutifMahasiswa.findMany();
            return getAllBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllBadanEksikutifMahasiswa:", error);
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
            const updatedBadanEksikutifMahasiswa = await prisma_1.default.badanEksikutifMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in updateBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
    async delete(id) {
        try {
            const deleteBadanEksikutifMahasiswa = await prisma_1.default.badanEksikutifMahasiswa.delete({
                where: {
                    id,
                },
            });
            return deleteBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
    async createStatistik(data) {
        try {
            const createStatistikBadanEksikutifMahasiswa = await prisma_1.default.statistikBadanEksikutifMahasiswa.create({
                data: {
                    ...data,
                },
            });
            return createStatistikBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in createStatistikBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
    async getAllStatistik() {
        try {
            const getAllStatistikBadanEksikutifMahasiswa = await prisma_1.default.statistikBadanEksikutifMahasiswa.findMany();
            return getAllStatistikBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in getAllStatistikBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
    async updateStatistik(id, data) {
        try {
            const updateData = {
                pengurusInti: data.pengurusInti,
                programKerja: data.programKerja,
                mahasiswaTerlayani: data.mahasiswaTerlayani,
                komitmen: data.komitmen,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikBadanEksikutifMahasiswa = await prisma_1.default.statistikBadanEksikutifMahasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in updateStatistikBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
    async deleteStatistik(id) {
        try {
            const deleteStatistikBadanEksikutifMahasiswa = await prisma_1.default.statistikBadanEksikutifMahasiswa.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikBadanEksikutifMahasiswa;
        }
        catch (error) {
            console.error("Error in deleteStatistikBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
}
exports.default = new BadanEksikutifMahasiswaService();
