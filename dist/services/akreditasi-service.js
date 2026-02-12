"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class AkreditasiService {
    async createAkreditasi(data) {
        try {
            let documentData = [];
            // Process gallery if exists
            if (data.document && data.document.length > 0) {
                const uploadedUrls = await Promise.all(data.document.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                // Gabungkan nama file dengan URL
                documentData = uploadedUrls.map((url, index) => ({
                    name: data.documentNames?.[index] || data.document[index].originalname, // Gunakan nama dari frontend atau fallback ke original filename
                    url: url,
                }));
            }
            // Create akreditasi with the uploaded photo URLs
            const akreditasi = await prisma_1.default.akreditasi.create({
                data: {
                    type: data.type,
                    title: data.title,
                    document: documentData.length > 0 ? documentData : client_1.Prisma.JsonNull,
                },
            });
            return akreditasi;
        }
        catch (error) {
            console.error("Error in createAkreditasi:", error);
            throw new Error("Failed to create akreditasi");
        }
    }
    async getAllAkreditasi() {
        try {
            const akreditasi = await prisma_1.default.akreditasi.findMany();
            return akreditasi;
        }
        catch (error) {
            console.error(error);
            throw error;
        }
    }
    async updateAkreditasi(id, data) {
        try {
            const updateData = {
                title: data.title,
                type: data.type,
            };
            // ===============================
            // DOCUMENT → GUNAKAN existingDocuments dari frontend
            // ===============================
            // Ambil dokumen lama yang sudah diedit dari frontend
            let finalDocuments = data.existingDocuments || [];
            // Jika ada dokumen baru yang diupload
            if (data.document && data.document.length > 0) {
                // Upload dokumen baru
                const uploadedUrls = await Promise.all(data.document.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                // Gabungkan URL dengan nama
                const documentBaru = uploadedUrls.map((url, index) => ({
                    name: data.documentNames?.[index] || data.document[index].originalname,
                    url: url,
                }));
                // Gabungkan dokumen lama (yang sudah diedit) + dokumen baru
                finalDocuments = [...finalDocuments, ...documentBaru];
            }
            updateData.document =
                finalDocuments.length > 0 ? finalDocuments : client_1.Prisma.JsonNull;
            const updatedAkreditasi = await prisma_1.default.akreditasi.update({
                where: { id },
                data: updateData,
            });
            return updatedAkreditasi;
        }
        catch (error) {
            console.error("Error in updateAkreditasi:", error);
            throw new Error("Failed to update akreditasi");
        }
    }
    async deleteAkreditasi(id) {
        try {
            const deletedAkreditasi = await prisma_1.default.akreditasi.delete({
                where: { id },
            });
            return deletedAkreditasi;
        }
        catch (error) {
            console.error("Error in deleteAkreditasi:", error);
            throw new Error("Failed to delete akreditasi");
        }
    }
}
exports.default = new AkreditasiService();
