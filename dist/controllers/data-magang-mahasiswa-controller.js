"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_magang_mahasiswa_service_1 = __importDefault(require("../services/data-magang-mahasiswa-service"));
class DataMagangMahasiswaController {
    async createDataMagangMahasiswa(req, res) {
        try {
            const { title, terkait, tentangMagang, tanggungJawab, keahlian, pencapaian, perusahaanMagang, posisiMagang, periodeMagang, lokasiMagang, superVisorMagang, emailSuperVisorMagang, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const keahlianJson = JSON.parse(keahlian);
            const pencapaianJson = JSON.parse(pencapaian);
            const tanggungJawabJson = JSON.parse(tanggungJawab);
            const create = await data_magang_mahasiswa_service_1.default.createDataMagangMahasiswa({
                title,
                terkait,
                tentangMagang,
                tanggungJawab: tanggungJawabJson,
                keahlian: keahlianJson,
                pencapaian: pencapaianJson,
                perusahaanMagang,
                posisiMagang,
                periodeMagang,
                lokasiMagang,
                superVisorMagang,
                emailSuperVisorMagang,
                foto: req.files["foto"][0],
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
    async getAllDataMagangMahasiswa(req, res) {
        try {
            const getAllDataMagangMahasiswa = await data_magang_mahasiswa_service_1.default.getAllDataMagangMahasiswa();
            return res.status(200).json({
                success: true,
                data: getAllDataMagangMahasiswa,
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
    async updateDataMagangMahasiswa(req, res) {
        try {
            const { id } = req.params;
            const { title, terkait, tentangMagang, tanggungJawab, keahlian, pencapaian, perusahaanMagang, posisiMagang, periodeMagang, lokasiMagang, superVisorMagang, emailSuperVisorMagang, } = req.body;
            //   if (!req.files?.["foto"] || req.files["foto"].length === 0) {
            //     return res.status(400).json({
            //       success: false,
            //       message: "Foto harus diupload",
            //     });
            //   }
            const tanggungJawabJson = JSON.parse(tanggungJawab);
            const keahlianJson = JSON.parse(keahlian);
            const pencapaianJson = JSON.parse(pencapaian);
            const updateData = {
                title,
                terkait,
                tentangMagang,
                tanggungJawab: tanggungJawabJson,
                keahlian: keahlianJson,
                pencapaian: pencapaianJson,
                perusahaanMagang,
                posisiMagang,
                periodeMagang,
                lokasiMagang,
                superVisorMagang,
                emailSuperVisorMagang,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedDataMagangMahasiswa = await data_magang_mahasiswa_service_1.default.updateDataMagangMahasiswa(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Data Magang Mahasiswa berhasil diupdate",
                data: updatedDataMagangMahasiswa,
            });
        }
        catch (error) {
            console.error("Error in updateDataMagangMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui data magang mahasiswa",
            });
        }
    }
    async deleteDataMagangMahasiswa(req, res) {
        try {
            const result = await data_magang_mahasiswa_service_1.default.deleteDataMagangMahasiswa(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Data Magang Mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteDataMagangMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus data magang mahasiswa",
            });
        }
    }
    async createStatistikDataMagangMahasiswa(req, res) {
        try {
            const { totalMagang, mitraInstitusi, rataDurasiMagang, tingkatKepuasan, slogan, deskripsi, } = req.body;
            const create = await data_magang_mahasiswa_service_1.default.createStatistikDataMagangMahasiswa({
                totalMagang,
                mitraInstitusi,
                rataDurasiMagang,
                tingkatKepuasan,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: create,
            });
        }
        catch (error) {
            console.error("Error in createStatistikDataMagangMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik data magang mahasiswa",
            });
        }
    }
    async getAllStatistikDataMagangMahasiswa(req, res) {
        try {
            const getAllStatistikDataMagangMahasiswa = await data_magang_mahasiswa_service_1.default.getAllStatistikDataMagangMahasiswa();
            return res.status(200).json({
                success: true,
                data: getAllStatistikDataMagangMahasiswa,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikDataMagangMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik data magang mahasiswa",
            });
        }
    }
    async updateStatistikDataMagangMahasiswa(req, res) {
        try {
            const { id } = req.params;
            const { totalMagang, mitraInstitusi, rataDurasiMagang, tingkatKepuasan, slogan, deskripsi, } = req.body;
            const updateData = {
                totalMagang,
                mitraInstitusi,
                rataDurasiMagang,
                tingkatKepuasan,
                slogan,
                deskripsi,
            };
            const updatedStatistikDataMagangMahasiswa = await data_magang_mahasiswa_service_1.default.updateStatistikDataMagangMahasiswa(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Data Magang Mahasiswa berhasil diupdate",
                data: updatedStatistikDataMagangMahasiswa,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikDataMagangMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik data magang mahasiswa",
            });
        }
    }
    async deleteStatistikDataMagangMahasiswa(req, res) {
        try {
            const result = await data_magang_mahasiswa_service_1.default.deleteStatistikDataMagangMahasiswa(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Data Magang Mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikDataMagangMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik data magang mahasiswa",
            });
        }
    }
}
exports.default = new DataMagangMahasiswaController();
