"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lowongan_kerja_service_1 = __importDefault(require("../services/lowongan-kerja-service"));
class LowonganKerjaController {
    async createLowonganKerja(req, res) {
        try {
            const { foto, title, perusahaan, lokasi, tipePekerjaan, // Full Time, Part Time
            gaji, pengalaman, pendidikan, batasLama, tentangPerusahaan, deskripsi, tanggungJawab, persyaratan, keahlian, benefit, email, link, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const tanggungJawabJson = JSON.parse(tanggungJawab);
            const persyaratanJson = JSON.parse(persyaratan);
            const keahlianJson = JSON.parse(keahlian);
            const benefitJson = JSON.parse(benefit);
            const create = await lowongan_kerja_service_1.default.createLowonganKerja({
                foto: req.files["foto"][0],
                title,
                perusahaan,
                lokasi,
                tipePekerjaan,
                gaji,
                pengalaman,
                pendidikan,
                batasLama,
                tentangPerusahaan,
                deskripsi,
                tanggungJawab: tanggungJawabJson,
                persyaratan: persyaratanJson,
                keahlian: keahlianJson,
                benefit: benefitJson,
                email,
                link,
            });
            return res.status(201).json({
                success: true,
                data: create,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat data magang mahasiswa",
            });
        }
    }
    async getAllLowonganKerja(req, res) {
        try {
            const getAllLowonganKerja = await lowongan_kerja_service_1.default.getAllLowonganKerja();
            return res.status(200).json({
                success: true,
                data: getAllLowonganKerja,
            });
        }
        catch (error) {
            console.error("Error in getAllDataMagangMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan data magang mahasiswa",
            });
        }
    }
    async updateLowonganKerja(req, res) {
        try {
            const { id } = req.params;
            const { foto, title, perusahaan, lokasi, tipePekerjaan, gaji, pengalaman, pendidikan, batasLama, tentangPerusahaan, deskripsi, tanggungJawab, persyaratan, keahlian, benefit, email, link, } = req.body;
            //   if (!req.files?.["foto"] || req.files["foto"].length === 0) {
            //     return res.status(400).json({
            //       success: false,
            //       message: "Foto harus diupload",
            //     });
            //   }
            const tanggungJawabJson = JSON.parse(tanggungJawab);
            const persyaratanJson = JSON.parse(persyaratan);
            const keahlianJson = JSON.parse(keahlian);
            const benefitJson = JSON.parse(benefit);
            const updateData = {
                title,
                perusahaan,
                lokasi,
                tipePekerjaan,
                gaji,
                pengalaman,
                pendidikan,
                batasLama,
                tentangPerusahaan,
                deskripsi,
                tanggungJawab: tanggungJawabJson,
                persyaratan: persyaratanJson,
                keahlian: keahlianJson,
                benefit: benefitJson,
                email,
                link,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedLowonganKerja = await lowongan_kerja_service_1.default.updateLowonganKerja(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Data Lowongan Kerja berhasil diupdate",
                data: updatedLowonganKerja,
            });
        }
        catch (error) {
            console.error("Error in updateLowonganKerja:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui data Lowongan Kerja",
            });
        }
    }
    async deleteLowonganKerja(req, res) {
        try {
            const result = await lowongan_kerja_service_1.default.deleteLowonganKerja(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Data Lowongan Kerja berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteLowonganKerja:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus data Lowongan Kerja",
            });
        }
    }
    async createStatistikLowonganKerja(req, res) {
        try {
            const { lowonganAktif, partner, tingkatPenempatan, gajihRata, slogan, deskripsi, } = req.body;
            const create = await lowongan_kerja_service_1.default.createStatistikLowonganKerja({
                lowonganAktif,
                partner,
                tingkatPenempatan,
                gajihRata,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: create,
            });
        }
        catch (error) {
            console.error("Error in createStatistikLowonganKerja:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik data Lowongan Kerja",
            });
        }
    }
    async getAllStatistikLowonganKerja(req, res) {
        try {
            const getAllStatistikLowonganKerja = await lowongan_kerja_service_1.default.getAllStatistikLowonganKerja();
            return res.status(200).json({
                success: true,
                data: getAllStatistikLowonganKerja,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikLowonganKerja:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik data Lowongan Kerja",
            });
        }
    }
    async updateStatistikLowonganKerja(req, res) {
        try {
            const { id } = req.params;
            const { lowonganAktif, partner, tingkatPenempatan, gajihRata, slogan, deskripsi, } = req.body;
            const updateData = {
                lowonganAktif,
                partner,
                tingkatPenempatan,
                gajihRata,
                slogan,
                deskripsi,
            };
            const updatedStatistikLowonganKerja = await lowongan_kerja_service_1.default.updateStatistikLowonganKerja(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Lowongan Kerja berhasil diupdate",
                data: updatedStatistikLowonganKerja,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikLowonganKerja:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik data Lowongan Kerja",
            });
        }
    }
    async deleteStatistikLowonganKerja(req, res) {
        try {
            const result = await lowongan_kerja_service_1.default.deleteStatistikLowonganKerja(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Lowongan Kerja berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikLowonganKerja:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik data Lowongan Kerja",
            });
        }
    }
}
exports.default = new LowonganKerjaController();
