"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const surat_keluar_servicece_1 = __importDefault(require("../services/surat-keluar-servicece"));
class SuratKeluarController {
    async createSuratKeluar(req, res) {
        try {
            const { title, deskripsi, pengirim, nomorSurat, tanggalDiterima, status, penerima, note, } = req.body;
            console.log(req.body);
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto utama harus diupload",
                });
            }
            //   if (!req.files?.["file"] || req.files["file"].length === 0) {
            //     return res.status(400).json({
            //       success: false,
            //       message: "File harus diupload",
            //     });
            //   }
            const galeriFiles = req.files?.["file"] || [];
            console.log(galeriFiles);
            console.log(req.files?.["foto"]);
            console.log(req.files?.["file"]);
            const suratKeluar = await surat_keluar_servicece_1.default.createArsipSuratKeluar({
                title,
                deskripsi,
                pengirim,
                nomorSurat,
                tanggalDiterima,
                foto: req.files?.["foto"][0],
                file: galeriFiles,
                status,
                penerima,
                note,
            });
            return res.status(201).json({
                success: true,
                data: suratKeluar,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async getAllSuratKeluar(req, res) {
        try {
            const suratKeluar = await surat_keluar_servicece_1.default.getAllArsipSuratKeluar();
            return res.status(200).json({
                success: true,
                data: suratKeluar,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async updateSuratKeluar(req, res) {
        try {
            const { title, deskripsi, pengirim, nomorSurat, tanggalDiterima, status, penerima, note, } = req.body;
            const id = req.params.id;
            // Validasi input
            //   if (
            //     !title ||
            //     !deskripsi ||
            //     !pengirim ||
            //     !nomorSurat ||
            //     !tanggalDiterima ||
            //     !status ||
            //     !penerima ||
            //     !note
            //   ) {
            //     return res.status(400).json({
            //       success: false,
            //       message: "Semua field kecuali foto wajib diisi",
            //     });
            //   }
            const updateData = {
                title,
                deskripsi,
                pengirim,
                nomorSurat,
                tanggalDiterima,
                status,
                penerima,
                note,
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
            const suratKeluar = await surat_keluar_servicece_1.default.updateArsipSuratKeluar(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Surat Keluar berhasil diupdate",
                data: suratKeluar,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async deleteSuratKeluar(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_keluar_servicece_1.default.deleteArsipSuratKeluar(Number(id));
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
    async createStatistikArsipSuratKeluar(req, res) {
        try {
            const { totalSurat, terkirim, suratDalamProses, draf, slogan, deskripsi, } = req.body;
            const statistikArsipSuratKeluar = await surat_keluar_servicece_1.default.createStatistikArsipSuratKeluar({
                totalSurat,
                terkirim,
                suratDalamProses,
                draf,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikArsipSuratKeluar,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async getAllStatistikArsipSuratKeluar(req, res) {
        try {
            const statistikArsipSuratKeluar = await surat_keluar_servicece_1.default.getAllStatistikArsipSuratKeluar();
            return res.status(200).json({
                success: true,
                data: statistikArsipSuratKeluar,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async updateStatistikArsipSuratKeluar(req, res) {
        try {
            const { id } = req.params;
            const { totalSurat, terkirim, suratDalamProses, draf, slogan, deskripsi, } = req.body;
            const updatedStatistikArsipSuratKeluar = await surat_keluar_servicece_1.default.updateStatistikArsipSuratKeluar(Number(id), {
                totalSurat,
                terkirim,
                suratDalamProses,
                draf,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Arsip Surat Keluar berhasil diupdate",
                data: updatedStatistikArsipSuratKeluar,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: error.message,
            });
        }
    }
    async deleteStatistikArsipSuratKeluar(req, res) {
        try {
            const { id } = req.params;
            const deletedData = await surat_keluar_servicece_1.default.deleteStatistikArsipSuratKeluar(Number(id));
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
exports.default = new SuratKeluarController();
