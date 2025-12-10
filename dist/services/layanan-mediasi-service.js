"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class LayananMediasiService {
    async createLayananMediasi(data) {
        try {
            const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const create = await prisma_1.default.layananMediasi.create({
                data: {
                    foto: uploadImage,
                    title: data.title,
                    waktu: data.waktu,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    type: data.type,
                },
            });
            return create;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllLayananMediasi() {
        try {
            const getAll = await prisma_1.default.layananMediasi.findMany();
            return getAll;
        }
        catch (error) {
            throw error;
        }
    }
    async updateLayananMediasi(id, data) {
        try {
            const updateData = {
                title: data.title,
                deskripsi: data.deskripsi,
                waktu: data.waktu,
                kategori: data.kategori,
                type: data.type,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = uploadImage;
            }
            const updatedLayananMediasi = await prisma_1.default.layananMediasi.update({
                where: { id },
                data: updateData,
            });
            return updatedLayananMediasi;
        }
        catch (error) {
            console.error("Error in updateLayananMediasi:", error);
            throw error;
        }
    }
    async deleteLayananMediasi(id) {
        try {
            const deletedLayananMediasi = await prisma_1.default.layananMediasi.delete({
                where: { id },
            });
            return deletedLayananMediasi;
        }
        catch (error) {
            console.error("Error in deleteLayananMediasi:", error);
            throw error;
        }
    }
    async createStatistikLayananMediasi(data) {
        try {
            const create = await prisma_1.default.statistikLayananMediasi.create({
                data: {
                    mediasiBerhasil: data.mediasiBerhasil,
                    tingkatKesepakatan: data.tingkatKesepakatan,
                    mediatorBersetifikat: data.mediatorBersetifikat,
                    totalMediasi: data.totalMediasi,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return create;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllStatistikLayananMediasi() {
        try {
            const getAll = await prisma_1.default.statistikLayananMediasi.findMany();
            return getAll;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikLayananMediasi(id, data) {
        try {
            const updateData = {
                mediasiBerhasil: data.mediasiBerhasil,
                tingkatKesepakatan: data.tingkatKesepakatan,
                mediatorBersetifikat: data.mediatorBersetifikat,
                totalMediasi: data.totalMediasi,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikLayananMediasi = await prisma_1.default.statistikLayananMediasi.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikLayananMediasi;
        }
        catch (error) {
            console.error("Error in updateStatistikLayananMediasi:", error);
            throw error;
        }
    }
    async deleteStatistikLayananMediasi(id) {
        try {
            const deletedStatistikLayananMediasi = await prisma_1.default.statistikLayananMediasi.delete({
                where: { id },
            });
            return deletedStatistikLayananMediasi;
        }
        catch (error) {
            console.error("Error in deleteStatistikLayananMediasi:", error);
            throw error;
        }
    }
    async createTimMediator(data) {
        try {
            const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const create = await prisma_1.default.timMediator.create({
                data: {
                    foto: uploadImage,
                    nama: data.nama,
                    deskripsi: data.deskripsi,
                    kategori: data.kategori,
                    kasusDitangani: data.kasusDitangani,
                    email: data.email,
                    noTelp: data.noTelp,
                },
            });
            return create;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllTimMediator() {
        try {
            const getAll = await prisma_1.default.timMediator.findMany();
            return getAll;
        }
        catch (error) {
            throw error;
        }
    }
    async updateTimMediator(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                deskripsi: data.deskripsi,
                kategori: data.kategori,
                kasusDitangani: data.kasusDitangani,
                email: data.email,
                noTelp: data.noTelp,
            };
            if (data.foto) {
                const uploadImage = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = uploadImage;
            }
            const updatedTimMediator = await prisma_1.default.timMediator.update({
                where: { id },
                data: updateData,
            });
            return updatedTimMediator;
        }
        catch (error) {
            console.error("Error in updateTimMediator:", error);
            throw error;
        }
    }
    async deleteTimMediator(id) {
        try {
            const deletedTimMediator = await prisma_1.default.timMediator.delete({
                where: { id },
            });
            return deletedTimMediator;
        }
        catch (error) {
            console.error("Error in deleteTimMediator:", error);
            throw error;
        }
    }
}
exports.default = new LayananMediasiService();
