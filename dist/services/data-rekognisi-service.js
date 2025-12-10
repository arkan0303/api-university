"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("../utils/cloudinary");
const prisma_1 = __importDefault(require("../db/prisma"));
class DataRekognisiService {
    async createDataRekognisi(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const result = await prisma_1.default.dataRekognisi.create({
                data: {
                    ...data,
                    foto: fotoUrl,
                },
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllDataRekognisi() {
        try {
            const result = await prisma_1.default.dataRekognisi.findMany();
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateDataRekognisi(id, data) {
        try {
            const updateData = {
                title: data.title,
                tema: data.tema,
                tingkat: data.tingkat,
                tahun: data.tahun,
                deskripsi: data.deskripsi,
                dampak: data.dampak,
                kriteriaPenelitian: data.kriteriaPenelitian,
                manfaat: data.manfaat,
                provider: data.provider,
                masaBerlaku: data.masaBerlaku,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedDataRekognisi = await prisma_1.default.dataRekognisi.update({
                where: { id },
                data: updateData,
            });
            return updatedDataRekognisi;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteDataRekognisi(id) {
        try {
            const result = await prisma_1.default.dataRekognisi.delete({
                where: {
                    id,
                },
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async createStatistikDataRekognisi(data) {
        try {
            const result = await prisma_1.default.statistikDataRekognisi.create({
                data,
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async getAllStatistikDataRekognisi() {
        try {
            const result = await prisma_1.default.statistikDataRekognisi.findMany();
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async updateStatistikDataRekognisi(id, data) {
        try {
            const updateData = {
                penghargaan: data.penghargaan,
                sertifikasi: data.sertifikasi,
                akreditasi: data.akreditasi,
                rekognasiInternasional: data.rekognasiInternasional,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikDataRekognisi = await prisma_1.default.statistikDataRekognisi.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikDataRekognisi;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
    async deleteStatistikDataRekognisi(id) {
        try {
            const result = await prisma_1.default.statistikDataRekognisi.delete({
                where: {
                    id,
                },
            });
            return result;
        }
        catch (error) {
            console.log(error);
            return error;
        }
    }
}
exports.default = new DataRekognisiService();
