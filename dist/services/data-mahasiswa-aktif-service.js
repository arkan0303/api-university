"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataMahasiswaAktifService {
    async createDataMahasiswaAktif(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const newDataMahasiswaAktif = await prisma_1.default.dataMahasiswaAktif.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return newDataMahasiswaAktif;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getDataMahasiswaAktif() {
        try {
            const dataMahasiswaAktiff = await prisma_1.default.dataMahasiswaAktif.findMany();
            return dataMahasiswaAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateDataMahasiswaAktif(id, data) {
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
                const updatedDataMahasiswaAktif = await prisma_1.default.dataMahasiswaAktif.update({
                    where: { id },
                    data: updateData,
                });
                return updatedDataMahasiswaAktif;
            }
            catch (error) {
                console.error("Error in updateDataMahasiswaAktif:", error);
                throw error;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteDataMahasiswaAktif(id) {
        try {
            const deletedDataMahasiswaAktiff = await prisma_1.default.dataMahasiswaAktif.delete({
                where: {
                    id: id,
                },
            });
            return deletedDataMahasiswaAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createStatistikMahasiswaAktif(data) {
        try {
            const newStatistikMahasiswaAktiff = await prisma_1.default.statistikMahasiswaAktif.create({
                data: data,
            });
            return newStatistikMahasiswaAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getStatistikMahasiswaAktif() {
        try {
            const statistikMahasiswaAktiff = await prisma_1.default.statistikMahasiswaAktif.findMany();
            return statistikMahasiswaAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateStatistikMahasiswaAktif(id, data) {
        try {
            const updatedStatistikMahasiswaAktiff = await prisma_1.default.statistikMahasiswaAktif.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedStatistikMahasiswaAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteStatistikMahasiswaAktif(id) {
        try {
            const deletedStatistikMahasiswaAktiff = await prisma_1.default.statistikMahasiswaAktif.delete({
                where: {
                    id: id,
                },
            });
            return deletedStatistikMahasiswaAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new DataMahasiswaAktifService();
