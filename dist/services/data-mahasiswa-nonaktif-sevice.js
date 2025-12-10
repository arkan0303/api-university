"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataMahasiswaNonAktifService {
    async createDataMahasiswaNonAktif(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const newDataMahasiswaNonAktif = await prisma_1.default.dataMahasiswaNonAktif.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return newDataMahasiswaNonAktif;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getDataMahasiswaNonAktif() {
        try {
            const dataMahasiswaNonAktiff = await prisma_1.default.dataMahasiswaNonAktif.findMany();
            return dataMahasiswaNonAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateDataMahasiswaNonAktif(id, data) {
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
                const updatedDataMahasiswaNonAktif = await prisma_1.default.dataMahasiswaNonAktif.update({
                    where: { id },
                    data: updateData,
                });
                return updatedDataMahasiswaNonAktif;
            }
            catch (error) {
                console.error("Error in updateDataMahasiswaNonAktif:", error);
                throw error;
            }
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteDataMahasiswaNonAktif(id) {
        try {
            const deletedDataMahasiswaNonAktiff = await prisma_1.default.dataMahasiswaNonAktif.delete({
                where: {
                    id: id,
                },
            });
            return deletedDataMahasiswaNonAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createStatistikMahasiswaNonAktif(data) {
        try {
            const newStatistikMahasiswaNonAktiff = await prisma_1.default.statistikMahasiswaNonAktif.create({
                data: data,
            });
            return newStatistikMahasiswaNonAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getStatistikMahasiswaNonAktif() {
        try {
            const statistikMahasiswaNonAktiff = await prisma_1.default.statistikMahasiswaNonAktif.findMany();
            return statistikMahasiswaNonAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateStatistikMahasiswaNonAktif(id, data) {
        try {
            const updatedStatistikMahasiswaNonAktiff = await prisma_1.default.statistikMahasiswaNonAktif.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedStatistikMahasiswaNonAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteStatistikMahasiswaNonAktif(id) {
        try {
            const deletedStatistikMahasiswaNonAktiff = await prisma_1.default.statistikMahasiswaNonAktif.delete({
                where: {
                    id: id,
                },
            });
            return deletedStatistikMahasiswaNonAktiff;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new DataMahasiswaNonAktifService();
