"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SosialisasiPraturanUUDService {
    async createSosialisasiPraturanUUD(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const sosialisasiPraturanUUD = await prisma_1.default.sosialisasiPraturanUUD.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    waktu: data.waktu,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    type: data.type,
                },
            });
            return sosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllSosialisasiPraturanUUD() {
        try {
            const sosialisasiPraturanUUD = await prisma_1.default.sosialisasiPraturanUUD.findMany();
            return sosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateSosialisasiPraturanUUDById(id, data) {
        try {
            const updateData = {
                title: data.title,
                waktu: data.waktu,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
                type: data.type,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedSosialisasiPraturanUUD = await prisma_1.default.sosialisasiPraturanUUD.update({
                where: { id },
                data: updateData,
            });
            return updatedSosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteSosialisasiPraturanUUDById(id) {
        try {
            const deletedSosialisasiPraturanUUD = await prisma_1.default.sosialisasiPraturanUUD.delete({
                where: { id },
            });
            return deletedSosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async createStatistikSosialisasiPraturanUUD(data) {
        try {
            const statistikSosialisasiPraturanUUD = await prisma_1.default.statistikSosialisasiPraturanUUD.create({
                data: {
                    kegiatanOrginsasi: data.kegiatanOrginsasi,
                    pesertaTeredukasi: data.pesertaTeredukasi,
                    institusiMitra: data.institusiMitra,
                    totalSosialisasi: data.totalSosialisasi,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikSosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllStatistikSosialisasiPraturanUUD() {
        try {
            const statistikSosialisasiPraturanUUD = await prisma_1.default.statistikSosialisasiPraturanUUD.findMany();
            return statistikSosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateStatistikSosialisasiPraturanUUDById(id, data) {
        try {
            const updateData = {
                kegiatanOrginsasi: data.kegiatanOrginsasi,
                pesertaTeredukasi: data.pesertaTeredukasi,
                institusiMitra: data.institusiMitra,
                totalSosialisasi: data.totalSosialisasi,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikSosialisasiPraturanUUD = await prisma_1.default.statistikSosialisasiPraturanUUD.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikSosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteStatistikSosialisasiPraturanUUDById(id) {
        try {
            const deletedStatistikSosialisasiPraturanUUD = await prisma_1.default.statistikSosialisasiPraturanUUD.delete({
                where: { id },
            });
            return deletedStatistikSosialisasiPraturanUUD;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = new SosialisasiPraturanUUDService();
