"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataPeradilanSemuService {
    async createDataPeradilanSemu(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const newDataPeradilanSemu = await prisma_1.default.dataPeradilanSemu.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return newDataPeradilanSemu;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getDataPeradilanSemu() {
        try {
            const dataPeradilanSemu = await prisma_1.default.dataPeradilanSemu.findMany();
            return dataPeradilanSemu;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateDataPeradilanSemu(id, data) {
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
                const updatedDataPeradilanSemu = await prisma_1.default.dataPeradilanSemu.update({
                    where: { id },
                    data: updateData,
                });
                return updatedDataPeradilanSemu;
            }
            catch (error) {
                console.error("Error in updateDataPeradilanSemu:", error);
                throw error;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteDataPeradilanSemu(id) {
        try {
            const deletedDataPeradilanSemu = await prisma_1.default.dataPeradilanSemu.delete({
                where: {
                    id: id,
                },
            });
            return deletedDataPeradilanSemu;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createStatistikPeradilanSemu(data) {
        try {
            const newStatistikPeradilanSemu = await prisma_1.default.statistikPeradilanSemu.create({
                data: data,
            });
            return newStatistikPeradilanSemu;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getStatistikPeradilanSemu() {
        try {
            const statistikPeradilanSemu = await prisma_1.default.statistikPeradilanSemu.findMany();
            return statistikPeradilanSemu;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateStatistikPeradilanSemu(id, data) {
        try {
            const updatedStatistikPeradilanSemu = await prisma_1.default.statistikPeradilanSemu.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedStatistikPeradilanSemu;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteStatistikPeradilanSemu(id) {
        try {
            const deletedStatistikPeradilanSemu = await prisma_1.default.statistikPeradilanSemu.delete({
                where: {
                    id: id,
                },
            });
            return deletedStatistikPeradilanSemu;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new DataPeradilanSemuService();
