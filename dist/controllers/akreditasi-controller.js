"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const akreditasi_service_1 = __importDefault(require("../services/akreditasi-service"));
class AkreditasiController {
    async createDataAkreditasi(req, res) {
        try {
            const { title, type, documentNames } = req.body;
            console.log("req.body", req.body);
            const documentFiles = req.files?.["document"] || [];
            // Parse documentNames jika dikirim sebagai JSON string
            let parsedDocumentNames;
            if (documentNames) {
                parsedDocumentNames = typeof documentNames === 'string'
                    ? JSON.parse(documentNames)
                    : documentNames;
            }
            const akreditasi = await akreditasi_service_1.default.createAkreditasi({
                title,
                type,
                document: documentFiles,
                documentNames: parsedDocumentNames,
            });
            res.status(201).json({
                success: true,
                data: akreditasi,
            });
        }
        catch (error) {
            console.error("Error in createAkreditasi:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Gagal membuat akreditasi",
            });
        }
    }
    async getAllAkreditasii(req, res) {
        try {
            const akreditasi = await akreditasi_service_1.default.getAllAkreditasi();
            res.json({
                success: true,
                data: akreditasi,
            });
        }
        catch (error) {
            console.error("Error in getAllAkreditasi:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Gagal mengambil data akreditasi",
            });
        }
    }
    async updateAkreditasi(req, res) {
        try {
            const { id } = req.params;
            const { title, type, documentNames, existingDocuments } = req.body;
            console.log("req.body", req.body);
            const documentFiles = req.files?.["document"] || [];
            // Parse documentNames dari JSON string
            let parsedDocumentNames;
            if (documentNames) {
                parsedDocumentNames = typeof documentNames === 'string'
                    ? JSON.parse(documentNames)
                    : documentNames;
            }
            // Parse existingDocuments dari JSON string
            let parsedExistingDocuments;
            if (existingDocuments) {
                parsedExistingDocuments = typeof existingDocuments === 'string'
                    ? JSON.parse(existingDocuments)
                    : existingDocuments;
            }
            console.log("Document files count:", documentFiles.length);
            console.log("Parsed documentNames:", parsedDocumentNames);
            console.log("Parsed existingDocuments:", parsedExistingDocuments);
            const updateData = {
                title,
                type,
                document: documentFiles,
                documentNames: parsedDocumentNames,
                existingDocuments: parsedExistingDocuments, // Tambahkan ini
            };
            const updatedAkreditasi = await akreditasi_service_1.default.updateAkreditasi(Number(id), updateData);
            console.log("Updated Akreditasi:", updatedAkreditasi);
            res.status(200).json({
                success: true,
                data: updatedAkreditasi,
            });
        }
        catch (error) {
            console.error("Error in updateAkreditasi:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Gagal mengupdate akreditasi",
            });
        }
    }
    async deleteAkreditasi(req, res) {
        try {
            const { id } = req.params;
            await akreditasi_service_1.default.deleteAkreditasi(Number(id));
            res.status(200).json({
                success: true,
                message: "Akreditasi berhasil dihapus",
            });
        }
        catch (error) {
            console.error("Error in deleteAkreditasi:", error);
            res.status(500).json({
                success: false,
                message: error.message || "Gagal menghapus akreditasi",
            });
        }
    }
}
exports.default = new AkreditasiController();
