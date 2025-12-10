"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class LayananProbonoService {
    async createLayananProbono(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const layananProbono = await prisma_1.default.layananProBono.create({
                data: {
                    foto: fotoUrl,
                    title: data.title,
                    waktu: data.waktu,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    type: data.type,
                },
            });
            return layananProbono;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllLayananProbono() {
        try {
            const layananProbono = await prisma_1.default.layananProBono.findMany();
            return layananProbono;
        }
        catch (error) {
            console.error("Error in getAllLayananProbono:", error);
            return error;
        }
    }
    async updateLayananProbono(id, data) {
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
                const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = uploadImage;
            }
            const updatedLayananProbono = await prisma_1.default.layananProBono.update({
                where: { id },
                data: updateData,
            });
            return updatedLayananProbono;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteLayananProbono(id) {
        try {
            const deletedLayananProbono = await prisma_1.default.layananProBono.delete({
                where: { id },
            });
            return deletedLayananProbono;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async createStatistikLayananProbono(data) {
        try {
            const statistikLayananProbono = await prisma_1.default.statistikLayananProbono.create({
                data: {
                    kasusProbono: data.kasusProbono,
                    tingkatKesepakatan: data.tingkatKesepakatan,
                    mediatorBersetifikat: data.mediatorBersetifikat,
                    totalMediasi: data.totalMediasi,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikLayananProbono;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllStatistikLayananProbono() {
        try {
            const statistikLayananProbono = await prisma_1.default.statistikLayananProbono.findMany();
            return statistikLayananProbono;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateStatistikLayananProbono(id, data) {
        try {
            const updateData = {
                kasusProbono: data.kasusProbono,
                tingkatKesepakatan: data.tingkatKesepakatan,
                mediatorBersetifikat: data.mediatorBersetifikat,
                totalMediasi: data.totalMediasi,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikLayananProbono = await prisma_1.default.statistikLayananProbono.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikLayananProbono;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteStatistikLayananProbono(id) {
        try {
            const deletedStatistikLayananProbono = await prisma_1.default.statistikLayananProbono.delete({
                where: { id },
            });
            return deletedStatistikLayananProbono;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async createKriteriaPenerima(data) {
        try {
            const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const kriteriaPenerima = await prisma_1.default.kriteriaPenerima.create({
                data: {
                    foto: uploadImage,
                    title: data.title,
                    kategori: data.kategori,
                },
            });
            return kriteriaPenerima;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllKriteriaPenerima() {
        try {
            const kriteriaPenerima = await prisma_1.default.kriteriaPenerima.findMany();
            return kriteriaPenerima;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateKriteriaPenerima(id, data) {
        try {
            const updateData = {
                title: data.title,
                kategori: data.kategori,
            };
            const updatedKriteriaPenerima = await prisma_1.default.kriteriaPenerima.update({
                where: { id },
                data: updateData,
            });
            return updatedKriteriaPenerima;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteKriteriaPenerima(id) {
        try {
            const deletedKriteriaPenerima = await prisma_1.default.kriteriaPenerima.delete({
                where: { id },
            });
            return deletedKriteriaPenerima;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = new LayananProbonoService();
