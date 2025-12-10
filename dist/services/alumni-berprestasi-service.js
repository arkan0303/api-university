"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class AlumniBerprestasiService {
    async create(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const cewateAlumniBerprestasi = await prisma_1.default.alumniBerPrestasi.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return cewateAlumniBerprestasi;
        }
        catch (error) {
            console.error("Error in create:", error);
            return null;
        }
    }
    async getAll() {
        try {
            const getAllAlumniBerprestasi = await prisma_1.default.alumniBerPrestasi.findMany();
            return getAllAlumniBerprestasi;
        }
        catch (error) {
            console.error("Error in getAllAlumniBerprestasi:", error);
            return null;
        }
    }
    async update(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                nim: data.nim,
                lulusan: data.lulusan,
                posisi: data.posisi,
                perusahaan: data.perusahaan,
                ipk: data.ipk,
                gaji: data.gaji,
                waktuTunggu: data.waktuTunggu,
                email: data.email,
                noTelp: data.noTelp,
                linkedin: data.linkedin,
                instagram: data.instagram,
                testimonial: data.testimonial,
                perjalananKarir: data.perjalananKarir,
                keahlian: data.keahlian,
                pencapaian: data.pencapaian,
                bidang: data.bidang,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updateAlumniBerprestasi = await prisma_1.default.alumniBerPrestasi.update({
                where: { id },
                data: updateData,
            });
            return updateAlumniBerprestasi;
        }
        catch (error) {
            console.error("Error in updateBadanEksikutifMahasiswa:", error);
            return null;
        }
    }
    async delete(id) {
        try {
            const deleteAlumniBerprestasi = await prisma_1.default.alumniBerPrestasi.delete({
                where: {
                    id,
                },
            });
            return deleteAlumniBerprestasi;
        }
        catch (error) {
            console.error("Error in deleteAlumniBerprestasi:", error);
            return null;
        }
    }
    async createStatistik(data) {
        try {
            const createStatistikAlumniBerPrestasi = await prisma_1.default.statistikAlumniBerprestasi.create({
                data: {
                    ...data,
                },
            });
            return createStatistikAlumniBerPrestasi;
        }
        catch (error) {
            console.error("Error in createStatistikAlumniBerprestasi:", error);
            return null;
        }
    }
    async getAllStatistik() {
        try {
            const getAllStatistikAlumniBerprestasi = await prisma_1.default.statistikAlumniBerprestasi.findMany();
            return getAllStatistikAlumniBerprestasi;
        }
        catch (error) {
            console.error("Error in getAllStatistikAlumniBerprestasi:", error);
            return null;
        }
    }
    async updateStatistik(id, data) {
        try {
            const updateData = {
                totalAlumni: data.totalAlumni,
                tingkatPenempatan: data.tingkatPenempatan,
                rataGajih: data.rataGajih,
                WaktuTunggu: data.WaktuTunggu,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikAlumniBerprestasi = await prisma_1.default.statistikAlumniBerprestasi.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikAlumniBerprestasi;
        }
        catch (error) {
            console.error("Error in updateStatistikAlumniBerprestasi:", error);
            return null;
        }
    }
    async deleteStatistik(id) {
        try {
            const deleteStatistikAlumniBerprestasi = await prisma_1.default.statistikAlumniBerprestasi.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikAlumniBerprestasi;
        }
        catch (error) {
            console.error("Error in deleteStatistikAlumniBerprestasi:", error);
            return null;
        }
    }
}
exports.default = new AlumniBerprestasiService();
