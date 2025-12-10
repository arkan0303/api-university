"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class BeritaService {
    async createBerita(data) {
        try {
            // Upload main photo
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            // Process gallery if exists
            let galeriData = [];
            if (data.galeri && data.galeri.length > 0) {
                const uploadedUrls = await Promise.all(data.galeri.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            // Handle date parsing if provided
            const tanggalPublikasi = data.tanggalPublikasi
                ? new Date(data.tanggalPublikasi)
                : null;
            // Create berita with the uploaded photo URLs
            const berita = await prisma_1.default.berita.create({
                data: {
                    judul: data.judul,
                    konten: data.konten,
                    kategori: data.kategori,
                    penulis: data.penulis,
                    foto: fotoUrl,
                    galeri: galeriData.length > 0 ? galeriData : client_1.Prisma.JsonNull,
                    aktif: data.aktif !== undefined ? data.aktif : true,
                    tanggalPublikasi: tanggalPublikasi,
                },
            });
            return berita;
        }
        catch (error) {
            console.error("Error in createBerita:", error);
            throw new Error("Failed to create berita");
        }
    }
    async getDataBerita() {
        try {
            const berita = await prisma_1.default.berita.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });
            return berita;
        }
        catch (error) {
            console.error("Error in getDataBerita:", error);
            throw new Error("Failed to get data berita");
        }
    }
    async updateBerita(id, data) {
        try {
            const updateData = {
                judul: data.judul,
                konten: data.konten,
                kategori: data.kategori,
                penulis: data.penulis,
                foto: data.foto,
                galeri: data.galeri,
                aktif: data.aktif !== undefined
                    ? typeof data.aktif === "string"
                        ? data.aktif === "true"
                        : data.aktif
                    : false,
                tanggalPublikasi: data.tanggalPublikasi,
            };
            const tanggalPublikasi = data.tanggalPublikasi
                ? new Date(data.tanggalPublikasi)
                : null;
            updateData.tanggalPublikasi = tanggalPublikasi;
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            // Hanya upload galeri baru jika ada file yang diunggah
            if (data.galeri && data.galeri.length > 0) {
                const uploadedUrls = await Promise.all(data.galeri.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                updateData.galeri = uploadedUrls;
            }
            const updatedBerita = await prisma_1.default.berita.update({
                where: { id },
                data: updateData,
            });
            console.log("Updated Berita Data :", updatedBerita);
            return updatedBerita;
        }
        catch (error) {
            console.error("Error in updateBerita:", error);
            throw new Error("Failed to update berita");
        }
    }
    async deleteBerita(id) {
        try {
            const deletedBerita = await prisma_1.default.berita.delete({
                where: { id },
            });
            return deletedBerita;
        }
        catch (error) {
            console.error("Error in deleteBerita:", error);
            throw new Error("Failed to delete berita");
        }
    }
}
exports.default = new BeritaService();
