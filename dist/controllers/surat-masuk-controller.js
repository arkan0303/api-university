"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const surat_masuk_service_1 = __importDefault(require("../services/surat-masuk-service"));
class SuratMasukController {
    async createSuratMasuk(req, res) {
        try {
            const { title, deskripsi, pengirim, nomorSurat, tanggalDiterima, status, penerima, fileMetadata, // Added fileMetadata from frontend
             } = req.body;
            console.log(req.body);
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto utama harus diupload",
                });
            }
            const galeriFiles = req.files?.["file"] || [];
            let parsedFileMetadata = [];
            if (fileMetadata) {
                try {
                    parsedFileMetadata = JSON.parse(fileMetadata);
                }
                catch (e) {
                    console.error("Error parsing fileMetadata:", e);
                }
            }
            console.log("Parsed file metadata:", parsedFileMetadata);
            console.log(galeriFiles);
            console.log(req.files?.["foto"]);
            console.log(req.files?.["file"]);
            const suratMasuk = await surat_masuk_service_1.default.createArsipSuratMasuk({
                title,
                deskripsi,
                pengirim,
                nomorSurat,
                tanggalDiterima,
                foto: req.files?.["foto"][0],
                file: galeriFiles,
                fileMetadata: parsedFileMetadata, // Pass metadata to service
                status,
                penerima,
            });
            return res.status(201).json({
                success: true,
                data: suratMasuk,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async getAllSuratMasuk(req, res) {
        try {
            const suratMasuk = await surat_masuk_service_1.default.getAllArsipSuratMasuk();
            return res.status(200).json({
                success: true,
                data: suratMasuk,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async updateSuratMasuk(req, res) {
        try {
            const { title, deskripsi, pengirim, nomorSurat, tanggalDiterima, status, penerima, } = req.body;
            const id = req.params.id;
            // Validasi input
            if (!title ||
                !deskripsi ||
                !pengirim ||
                !nomorSurat ||
                !tanggalDiterima ||
                !status) {
                return res.status(400).json({
                    success: false,
                    message: "Semua field kecuali foto wajib diisi",
                });
            }
            const updateData = {
                title,
                deskripsi,
                pengirim,
                nomorSurat,
                tanggalDiterima,
                status,
                penerima,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            // Hanya tambahkan file jika ada file yang diunggah
            const galeriFiles = req.files?.["file"] || [];
            if (galeriFiles.length > 0) {
                updateData.file = galeriFiles;
            }
            const suratMasuk = await surat_masuk_service_1.default.updateArsipSuratMasuk(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Surat Masuk berhasil diupdate",
                data: suratMasuk,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async deleteSuratMasuk(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_masuk_service_1.default.deleteArsipSuratMasuk(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async createStatistikArsipSuratMasuk(req, res) {
        try {
            const { totalSurat, suratBaru, suratDalamProses, suratSelesai, slogan, deskripsi, } = req.body;
            const statistikArsipSuratMasuk = await surat_masuk_service_1.default.createStatistikArsipSuratMasuk({
                totalSurat,
                suratBaru,
                suratDalamProses,
                suratSelesai,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikArsipSuratMasuk,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async getAllStatistikArsipSuratMasuk(req, res) {
        try {
            const statistikArsipSuratMasuk = await surat_masuk_service_1.default.getAllStatistikArsipSuratMasuk();
            return res.status(200).json({
                success: true,
                data: statistikArsipSuratMasuk,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async updateStatistikArsipSuratMasuk(req, res) {
        try {
            const { id } = req.params;
            const { totalSurat, suratBaru, suratDalamProses, suratSelesai, slogan, deskripsi, } = req.body;
            const updatedStatistikArsipSuratMasuk = await surat_masuk_service_1.default.updateStatistikArsipSuratMasuk(Number(id), {
                totalSurat,
                suratBaru,
                suratDalamProses,
                suratSelesai,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Arsip Surat Masuk berhasil diupdate",
                data: updatedStatistikArsipSuratMasuk,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async deleteStatistikArsipSuratMasuk(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_masuk_service_1.default.deleteStatistikArsipSuratMasuk(Number(id));
            return res.status(200).json({
                success: true,
                message: "Data berhasil dihapus",
                data: deletedData,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
}
exports.default = new SuratMasukController();
