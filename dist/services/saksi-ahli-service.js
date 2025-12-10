"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SaksiAhliService {
    async createSaksiAhli(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createSaksiAhli = await prisma_1.default.saksiAhli.create({
                data: {
                    nama: data.nama,
                    foto: fotoUrl,
                    deskripsi: data.deskripsi,
                    keahlian: data.keahlian,
                    bidangKeahlian: data.bidangKeahlian,
                    kasusDitangani: data.kasusDitangani,
                    email: data.email,
                    noTelp: data.noTelp,
                },
            });
            return createSaksiAhli;
        }
        catch (error) {
            console.error("Error in createSaksiAhli:", error);
            return null;
        }
    }
    async getAllSaksiAhli() {
        try {
            const saksiAhli = await prisma_1.default.saksiAhli.findMany();
            return saksiAhli;
        }
        catch (error) {
            console.error("Error in getAllSaksiAhli:", error);
            return null;
        }
    }
    async updateSaksiAhli(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                deskripsi: data.deskripsi,
                keahlian: data.keahlian,
                bidangKeahlian: data.bidangKeahlian,
                kasusDitangani: data.kasusDitangani,
                email: data.email,
                noTelp: data.noTelp,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const saksiAhli = await prisma_1.default.saksiAhli.update({
                where: { id },
                data: updateData,
            });
            return saksiAhli;
        }
        catch (error) {
            console.error("Error in updateSaksiAhli:", error);
            return null;
        }
    }
    async deleteSaksiAhli(id) {
        try {
            const deletedData = await prisma_1.default.saksiAhli.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            return null;
        }
    }
    async createProsedurSaksiAhli(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const createProsedurSaksiAhli = await prisma_1.default.prosedurSaksiAhli.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    deskripsi: data.deskripsi,
                    waktu: data.waktu,
                },
            });
            return createProsedurSaksiAhli;
        }
        catch (error) {
            console.error("Error in createProsedurSaksiAhli:", error);
            return null;
        }
    }
    async getAllProsedurSaksiAhli() {
        try {
            const prosedurSaksiAhli = await prisma_1.default.prosedurSaksiAhli.findMany();
            return prosedurSaksiAhli;
        }
        catch (error) {
            console.error("Error in getAllProsedurSaksiAhli:", error);
            return null;
        }
    }
    async updateProsedurSaksiAhli(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                waktu: data.waktu,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const prosedurSaksiAhli = await prisma_1.default.prosedurSaksiAhli.update({
                where: { id },
                data: updateData,
            });
            return prosedurSaksiAhli;
        }
        catch (error) {
            console.error("Error in updateProsedurSaksiAhli:", error);
            return null;
        }
    }
    async deleteProsedurSaksiAhli(id) {
        try {
            const deletedData = await prisma_1.default.prosedurSaksiAhli.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            return null;
        }
    }
    async createStatistikSaksiAhli(data) {
        try {
            const createStatistikSaksiAhli = await prisma_1.default.statistikSaksiAhli.create({
                data: {
                    keteranganAhli: data.keteranganAhli,
                    tingkatPenerimaan: data.tingkatPenerimaan,
                    ahliBerpengalaman: data.ahliBerpengalaman,
                    profesional: data.profesional,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistikSaksiAhli;
        }
        catch (error) {
            console.error("Error in createStatistikSaksiAhli:", error);
            return null;
        }
    }
    async getAllStatistikSaksiAhli() {
        try {
            const statistikSaksiAhli = await prisma_1.default.statistikSaksiAhli.findMany();
            return statistikSaksiAhli;
        }
        catch (error) {
            console.error("Error in getAllStatistikSaksiAhli:", error);
            return null;
        }
    }
    async updateStatistikSaksiAhli(id, data) {
        try {
            const updateData = {
                keteranganAhli: data.keteranganAhli,
                tingkatPenerimaan: data.tingkatPenerimaan,
                ahliBerpengalaman: data.ahliBerpengalaman,
                profesional: data.profesional,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const statistikSaksiAhli = await prisma_1.default.statistikSaksiAhli.update({
                where: { id },
                data: updateData,
            });
            return statistikSaksiAhli;
        }
        catch (error) {
            console.error("Error in updateStatistikSaksiAhli:", error);
            return null;
        }
    }
    async deleteStatistikSaksiAhli(id) {
        try {
            const deletedData = await prisma_1.default.statistikSaksiAhli.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            return null;
        }
    }
}
exports.default = new SaksiAhliService();
