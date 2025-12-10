"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class BeasiswaIndonesiaService {
    async createBeasiswaIndonesia(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const beasiswaIndonesia = await prisma_1.default.beasiswaIndonesia.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    oleh: data.oleh,
                    nominal: data.nominal,
                    waktu: data.waktu,
                    sebanyak: data.sebanyak,
                    tentang: data.tentang,
                    persyaratan: data.persyaratan,
                    manfaat: data.manfaat,
                    batasWaktu: data.batasWaktu,
                    email: data.email,
                    noTelp: data.noTelp,
                },
            });
            return beasiswaIndonesia;
        }
        catch (error) {
            console.error("Error in createBeasiswaIndonesia:", error);
            return null;
        }
    }
    async getAllBeasiswaIndonesia() {
        const beasiswaIndonesia = await prisma_1.default.beasiswaIndonesia.findMany();
        return beasiswaIndonesia;
    }
    async updateBeasiswaIndonesia(id, data) {
        try {
            const updateData = {
                title: data.title,
                oleh: data.oleh,
                nominal: data.nominal,
                waktu: data.waktu,
                sebanyak: data.sebanyak,
                tentang: data.tentang,
                persyaratan: data.persyaratan,
                manfaat: data.manfaat,
                batasWaktu: data.batasWaktu,
                email: data.email,
                noTelp: data.noTelp,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedBeasiswaIndonesia = await prisma_1.default.beasiswaIndonesia.update({
                where: { id },
                data: updateData,
            });
            return updatedBeasiswaIndonesia;
        }
        catch (error) {
            console.error("Error in updateBeasiswaIndonesia:", error);
            return null;
        }
    }
    async deleteBeasiswaIndonesia(id) {
        try {
            const beasiswaIndonesia = await prisma_1.default.beasiswaIndonesia.delete({
                where: {
                    id: id,
                },
            });
            return beasiswaIndonesia;
        }
        catch (error) {
            console.error("Error in deleteBeasiswaIndonesia:", error);
            return null;
        }
    }
    async createStatistikBeasiswaIndonesia(data) {
        try {
            const statistikBeasiswaIndonesia = await prisma_1.default.statistikBeasiswaIndonesia.create({
                data: {
                    totalPenerima: data.totalPenerima,
                    durasiBeasiswa: data.durasiBeasiswa,
                    tingkatKompetitif: data.tingkatKompetitif,
                    pendaftarTahunan: data.pendaftarTahunan,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikBeasiswaIndonesia;
        }
        catch (error) {
            console.error("Error in createStatistikBeasiswaIndonesia:", error);
            return null;
        }
    }
    async getAllStatistikBeasiswaIndonesia() {
        const statistikBeasiswaIndonesia = await prisma_1.default.statistikBeasiswaIndonesia.findMany();
        return statistikBeasiswaIndonesia;
    }
    async updateStatistikBeasiswaIndonesia(id, data) {
        try {
            const updateData = {
                totalPenerima: data.totalPenerima,
                durasiBeasiswa: data.durasiBeasiswa,
                tingkatKompetitif: data.tingkatKompetitif,
                pendaftarTahunan: data.pendaftarTahunan,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikBeasiswaIndonesia = await prisma_1.default.statistikBeasiswaIndonesia.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikBeasiswaIndonesia;
        }
        catch (error) {
            console.error("Error in updateStatistikBeasiswaIndonesia:", error);
            return null;
        }
    }
    async deleteStatistikBeasiswaIndonesia(id) {
        try {
            const statistikBeasiswaIndonesia = await prisma_1.default.statistikBeasiswaIndonesia.delete({
                where: {
                    id: id,
                },
            });
            return statistikBeasiswaIndonesia;
        }
        catch (error) {
            console.error("Error in deleteStatistikBeasiswaIndonesia:", error);
            return null;
        }
    }
}
exports.default = new BeasiswaIndonesiaService();
