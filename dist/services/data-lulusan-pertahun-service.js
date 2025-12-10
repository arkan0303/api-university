"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataLulusanPertahunService {
    async createDataLulusanPertahun(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const newDataLulusanPertahun = await prisma_1.default.dataLulusanPertahun.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return newDataLulusanPertahun;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getDataLulusanPertahun() {
        try {
            const dataLulusanPertahun = await prisma_1.default.dataLulusanPertahun.findMany();
            return dataLulusanPertahun;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateDataLulusanPertahun(id, data) {
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
                const updatedDataLulusanPertahun = await prisma_1.default.dataLulusanPertahun.update({
                    where: { id },
                    data: updateData,
                });
                return updatedDataLulusanPertahun;
            }
            catch (error) {
                console.error("Error in updateDataLulusanPertahun:", error);
                throw error;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteDataLulusanPertahun(id) {
        try {
            const deletedDataLulusanPertahun = await prisma_1.default.dataLulusanPertahun.delete({
                where: {
                    id: id,
                },
            });
            return deletedDataLulusanPertahun;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createStatistikLulusanPertahun(data) {
        try {
            const newStatistikLulusanPertahun = await prisma_1.default.statistikLulusanPertahun.create({
                data: data,
            });
            return newStatistikLulusanPertahun;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getStatistikLulusanPertahun() {
        try {
            const statistikLulusanPertahun = await prisma_1.default.statistikLulusanPertahun.findMany();
            return statistikLulusanPertahun;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateStatistikLulusanPertahun(id, data) {
        try {
            const updatedStatistikLulusanPertahun = await prisma_1.default.statistikLulusanPertahun.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedStatistikLulusanPertahun;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteStatistikLulusanPertahun(id) {
        try {
            const deletedStatistikLulusanPertahun = await prisma_1.default.statistikLulusanPertahun.delete({
                where: {
                    id: id,
                },
            });
            return deletedStatistikLulusanPertahun;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new DataLulusanPertahunService();
