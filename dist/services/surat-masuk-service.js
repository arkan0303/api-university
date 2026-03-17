"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SuratMasukService {
    async createArsipSuratMasuk(arsipSuratMasuk) {
        try {
            let fotoUrl;
            if (arsipSuratMasuk.foto) {
                fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(arsipSuratMasuk.foto.buffer);
            }
            let galeriData = [];
            if (arsipSuratMasuk.file && arsipSuratMasuk.file.length > 0) {
                // Upload all files to Cloudinary
                const uploadedUrls = await Promise.all(arsipSuratMasuk.file.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls.map((url, index) => {
                    const metadata = arsipSuratMasuk.fileMetadata?.[index];
                    return {
                        fileName: metadata?.fileName || `file-${index + 1}`,
                        fileUrl: url,
                        status_file: metadata?.status_file || "public",
                    };
                });
            }
            const arsipSuratMasukk = await prisma_1.default.arsipSuratMasuk.create({
                data: {
                    title: arsipSuratMasuk.title,
                    deskripsi: arsipSuratMasuk?.deskripsi || "",
                    pengirim: arsipSuratMasuk.pengirim,
                    nomorSurat: arsipSuratMasuk.nomorSurat,
                    tanggalDiterima: arsipSuratMasuk.tanggalDiterima,
                    status: arsipSuratMasuk.status,
                    penerima: arsipSuratMasuk.penerima,
                    foto: fotoUrl,
                    file: galeriData,
                },
            });
            return arsipSuratMasukk;
        }
        catch (error) {
            console.error("Error in createArsipSuratMasuk:", error);
            throw error;
        }
    }
    async getAllArsipSuratMasuk() {
        try {
            const arsipSuratMasukk = await prisma_1.default.arsipSuratMasuk.findMany();
            return arsipSuratMasukk;
        }
        catch (error) {
            console.error("Error in getAllArsipSuratMasuk:", error);
            throw error;
        }
    }
    async updateArsipSuratMasuk(id, arsipSuratMasuk) {
        try {
            const updateData = {
                title: arsipSuratMasuk.title,
                deskripsi: arsipSuratMasuk.deskripsi,
                pengirim: arsipSuratMasuk.pengirim,
                nomorSurat: arsipSuratMasuk.nomorSurat,
                tanggalDiterima: arsipSuratMasuk.tanggalDiterima,
                file: arsipSuratMasuk.file,
                foto: arsipSuratMasuk.foto,
                status: arsipSuratMasuk.status,
                penerima: arsipSuratMasuk.penerima,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (arsipSuratMasuk.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(arsipSuratMasuk.foto.buffer);
                updateData.foto = fotoUrl;
            }
            // Process gallery if exists
            let galeriData = [];
            if (arsipSuratMasuk.file && arsipSuratMasuk.file.length > 0) {
                const uploadedUrls = await Promise.all(arsipSuratMasuk.file.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            updateData.file = galeriData;
            const updatedArsipSuratMasuk = await prisma_1.default.arsipSuratMasuk.update({
                where: { id },
                data: updateData,
            });
            return updatedArsipSuratMasuk;
        }
        catch (error) {
            console.error("Error in updateArsipSuratMasuk:", error);
            throw error;
        }
    }
    async deleteArsipSuratMasuk(id) {
        try {
            const deletedData = await prisma_1.default.arsipSuratMasuk.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createStatistikArsipSuratMasuk(statistikArsipSuratMasuk) {
        try {
            const statistikArsipSuratMasukk = await prisma_1.default.statistikArsipSuratMasuk.create({
                data: statistikArsipSuratMasuk,
            });
            return statistikArsipSuratMasukk;
        }
        catch (error) {
            console.error("Error in createStatistikArsipSuratMasuk:", error);
            throw error;
        }
    }
    async getAllStatistikArsipSuratMasuk() {
        try {
            const statistikArsipSuratMasuk = await prisma_1.default.statistikArsipSuratMasuk.findMany();
            return statistikArsipSuratMasuk;
        }
        catch (error) {
            console.error("Error in getAllStatistikArsipSuratMasuk:", error);
            throw error;
        }
    }
    async updateStatistikArsipSuratMasuk(id, statistikArsipSuratMasuk) {
        try {
            const updatedStatistikArsipSuratMasuk = await prisma_1.default.statistikArsipSuratMasuk.update({
                where: { id },
                data: statistikArsipSuratMasuk,
            });
            return updatedStatistikArsipSuratMasuk;
        }
        catch (error) {
            console.error("Error in updateStatistikArsipSuratMasuk:", error);
            throw error;
        }
    }
    async deleteStatistikArsipSuratMasuk(id) {
        try {
            const deletedData = await prisma_1.default.statistikArsipSuratMasuk.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
}
exports.default = new SuratMasukService();
