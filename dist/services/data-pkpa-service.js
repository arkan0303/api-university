"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataPKPAService {
    async createDataPKPA(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const newDataPKPA = await prisma_1.default.dataPKPA.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return newDataPKPA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getDataPKPA() {
        try {
            const dataPKPA = await prisma_1.default.dataPKPA.findMany();
            return dataPKPA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateDataPKPA(id, data) {
        try {
            try {
                const updateData = {
                    title: data.title,
                    deskripsi: data.deskripsi,
                    jumlah: data.jumlah,
                };
                // Hanya upload foto baru jika ada file yang diunggah
                if (data.foto) {
                    const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                    updateData.foto = fotoUrl;
                }
                const updatedDataPKPA = await prisma_1.default.dataPKPA.update({
                    where: { id },
                    data: updateData,
                });
                return updatedDataPKPA;
            }
            catch (error) {
                console.error("Error in updateDataPKPA:", error);
                throw error;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteDataPKPA(id) {
        try {
            const deletedDataPKPA = await prisma_1.default.dataPKPA.delete({
                where: {
                    id: id,
                },
            });
            return deletedDataPKPA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createStatistikPKPA(data) {
        try {
            const newStatistikPKPA = await prisma_1.default.statistikPKPA.create({
                data: data,
            });
            return newStatistikPKPA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getStatistikPKPA() {
        try {
            const statistikPKPA = await prisma_1.default.statistikPKPA.findMany();
            return statistikPKPA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateStatistikPKPA(id, data) {
        try {
            const updatedStatistikPKPA = await prisma_1.default.statistikPKPA.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedStatistikPKPA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteStatistikPKPA(id) {
        try {
            const deletedStatistikPKPA = await prisma_1.default.statistikPKPA.delete({
                where: {
                    id: id,
                },
            });
            return deletedStatistikPKPA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new DataPKPAService();
