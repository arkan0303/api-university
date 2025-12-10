"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class LowonganKerjaService {
    async createLowonganKerja(lowonganKerja) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(lowonganKerja.foto.buffer);
            const lowonganKerjaCreated = await prisma_1.default.lowonganKerja.create({
                data: {
                    ...lowonganKerja,
                    foto: fotoUrl,
                },
            });
            return lowonganKerjaCreated;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllLowonganKerja() {
        try {
            const lowonganKerjaaa = await prisma_1.default.lowonganKerja.findMany();
            return lowonganKerjaaa;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateLowonganKerja(id, lowonganKerja) {
        try {
            const updateData = {
                title: lowonganKerja.title,
                perusahaan: lowonganKerja.perusahaan,
                lokasi: lowonganKerja.lokasi,
                tipePekerjaan: lowonganKerja.tipePekerjaan,
                gaji: lowonganKerja.gaji,
                pengalaman: lowonganKerja.pengalaman,
                pendidikan: lowonganKerja.pendidikan,
                batasLama: lowonganKerja.batasLama,
                tentangPerusahaan: lowonganKerja.tentangPerusahaan,
                deskripsi: lowonganKerja.deskripsi,
                tanggungJawab: lowonganKerja.tanggungJawab,
                persyaratan: lowonganKerja.persyaratan,
                keahlian: lowonganKerja.keahlian,
                benefit: lowonganKerja.benefit,
                email: lowonganKerja.email,
                link: lowonganKerja.link,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (lowonganKerja.foto) {
                const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(lowonganKerja.foto.buffer);
                updateData.foto = uploadImage;
            }
            const updatedLowonganKerja = await prisma_1.default.lowonganKerja.update({
                where: { id },
                data: updateData,
            });
            return updatedLowonganKerja;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteLowonganKerja(id) {
        try {
            const deletedLowonganKerja = await prisma_1.default.lowonganKerja.delete({
                where: { id },
            });
            return deletedLowonganKerja;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async createStatistikLowonganKerja(statistikLowonganKerja) {
        try {
            const statistikLowonganKerjaCreated = await prisma_1.default.statistikLowonganKerja.create({
                data: statistikLowonganKerja,
            });
            return statistikLowonganKerjaCreated;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllStatistikLowonganKerja() {
        try {
            const statistikLowonganKerja = await prisma_1.default.statistikLowonganKerja.findMany();
            return statistikLowonganKerja;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateStatistikLowonganKerja(id, statistikLowonganKerja) {
        try {
            const updateData = {
                lowonganAktif: statistikLowonganKerja.lowonganAktif,
                partner: statistikLowonganKerja.partner,
                tingkatPenempatan: statistikLowonganKerja.tingkatPenempatan,
                gajihRata: statistikLowonganKerja.gajihRata,
                slogan: statistikLowonganKerja.slogan,
                deskripsi: statistikLowonganKerja.deskripsi,
            };
            const updatedStatistikLowonganKerja = await prisma_1.default.statistikLowonganKerja.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikLowonganKerja;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteStatistikLowonganKerja(id) {
        try {
            const deletedStatistikLowonganKerja = await prisma_1.default.statistikLowonganKerja.delete({
                where: { id },
            });
            return deletedStatistikLowonganKerja;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = new LowonganKerjaService();
