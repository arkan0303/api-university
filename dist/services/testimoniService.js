"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class TestimoniService {
    async createTestimoni(data) {
        try {
            // Upload main photo
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            // Process gallery if exists
            let galeriData = [];
            if (data.galeri && data.galeri.length > 0) {
                const uploadedUrls = await Promise.all(data.galeri.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            // Use the date string as is (matching the database schema)
            const tanggalPublikasi = data.tanggalPublikasi || null;
            // Create testimoni with the uploaded photo URLs
            const testimoni = await prisma_1.default.testimoni.create({
                data: {
                    judul: data.judul,
                    nama: data.nama,
                    jabatan: data.jabatan,
                    foto: fotoUrl,
                    galeri: galeriData.length > 0 ? galeriData : client_1.Prisma.JsonNull,
                    konten: data.konten,
                    kategori: data.kategori,
                    note: data.note,
                    tanggalPublikasi: tanggalPublikasi,
                    aktif: data.aktif !== undefined ? data.aktif : true,
                },
            });
            return testimoni;
        }
        catch (error) {
            console.error("Error in createTestimoni:", error);
            throw new Error("Failed to create testimoni");
        }
    }
    async getAllTestimoni() {
        try {
            const testimoni = await prisma_1.default.testimoni.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });
            return testimoni;
        }
        catch (error) {
            console.error("Error in getAllTestimoni:", error);
            throw new Error("Failed to get testimoni");
        }
    }
    async deleteTestimoni(id) {
        try {
            const deletedTestimoni = await prisma_1.default.testimoni.delete({
                where: { id },
            });
            return deletedTestimoni;
        }
        catch (error) {
            console.error("Error in deleteTestimoni:", error);
            throw new Error("Failed to delete testimoni");
        }
    }
}
exports.default = new TestimoniService();
