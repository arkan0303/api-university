"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_mahasiswa_berwirausaha_service_1 = __importDefault(require("../services/data-mahasiswa-berwirausaha-service"));
class DataMahasiswaBerwirausahaController {
    async createDataMahasiswaBerwirausaha(req, res) {
        try {
            const { foto, title, namaMahasiswa, nimMahasiswa, tentangBisnis, produkLayanan, pencapaian, tantangan, rencanaMasaDeoan, kategori, tahunBerdiri, jumlahKaryawan, pendapatan, lokasi, noTelp, email, lokasiMahasiswa, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const produkLayananJson = JSON.parse(produkLayanan);
            const pencapaianJson = JSON.parse(pencapaian);
            const create = await data_mahasiswa_berwirausaha_service_1.default.createDataMahasiswaBerwirausaha({
                foto: req.files["foto"][0],
                title,
                namaMahasiswa,
                nimMahasiswa,
                tentangBisnis,
                produkLayanan: produkLayananJson,
                pencapaian: pencapaianJson,
                tantangan,
                rencanaMasaDeoan,
                kategori,
                tahunBerdiri,
                jumlahKaryawan,
                pendapatan,
                lokasi,
                noTelp,
                email,
                lokasiMahasiswa,
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
    async getAllDataMahasiswaBerwirausaha(req, res) {
        try {
            const getAllDataMahasiswaBerwirausaha = await data_mahasiswa_berwirausaha_service_1.default.getAllDataMahasiswaBerwirausaha();
            return res.status(200).json({
                success: true,
                data: getAllDataMahasiswaBerwirausaha,
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
    async updateDataMahasiswaBerwirausaha(req, res) {
        try {
            const { id } = req.params;
            const { foto, title, namaMahasiswa, nimMahasiswa, tentangBisnis, produkLayanan, pencapaian, tantangan, rencanaMasaDeoan, kategori, tahunBerdiri, jumlahKaryawan, pendapatan, lokasi, noTelp, email, lokasiMahasiswa, } = req.body;
            //   if (!req.files?.["foto"] || req.files["foto"].length === 0) {
            //     return res.status(400).json({
            //       success: false,
            //       message: "Foto harus diupload",
            //     });
            //   }
            const produkLayananJson = JSON.parse(produkLayanan);
            const pencapaianJson = JSON.parse(pencapaian);
            const updateData = {
                title,
                namaMahasiswa,
                nimMahasiswa,
                tentangBisnis,
                produkLayanan: produkLayananJson,
                pencapaian: pencapaianJson,
                tantangan,
                rencanaMasaDeoan,
                kategori,
                tahunBerdiri,
                jumlahKaryawan,
                pendapatan,
                lokasi,
                noTelp,
                email,
                lokasiMahasiswa,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedDataMahasiswaBerwirausaha = await data_mahasiswa_berwirausaha_service_1.default.updateDataMahasiswaBerwirausaha(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Data Mahasiswa Berwirausaha berhasil diupdate",
                data: updatedDataMahasiswaBerwirausaha,
            });
        }
        catch (error) {
            console.error("Error in updateDataMahasiswaBerwirausaha:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui data Mahasiswa Berwirausaha",
            });
        }
    }
    async deleteDataMahasiswaBerwirausaha(req, res) {
        try {
            const result = await data_mahasiswa_berwirausaha_service_1.default.deleteDataMahasiswaBerwirausaha(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Data Mahasiswa Berwirausaha berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteDataMahasiswaBerwirausaha:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus data Mahasiswa Berwirausaha",
            });
        }
    }
    async createStatistikDataMahasiswaBerwirausaha(req, res) {
        try {
            const { totalMahasiswaBerwirausaha, lapanganKerja, tingkatKeberhasilan, bisnisAktif, slogan, deskripsi, } = req.body;
            const create = await data_mahasiswa_berwirausaha_service_1.default.createStatistikDataMahasiswaBerwirausaha({
                totalMahasiswaBerwirausaha,
                lapanganKerja,
                tingkatKeberhasilan,
                bisnisAktif,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: create,
            });
        }
        catch (error) {
            console.error("Error in createStatistikDataMahasiswaBerwirausaha:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik data Mahasiswa Berwirausaha",
            });
        }
    }
    async getAllStatistikDataMahasiswaBerwirausaha(req, res) {
        try {
            const getAllStatistikDataMahasiswaBerwirausaha = await data_mahasiswa_berwirausaha_service_1.default.getAllStatistikDataMahasiswaBerwirausaha();
            return res.status(200).json({
                success: true,
                data: getAllStatistikDataMahasiswaBerwirausaha,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikDataMahasiswaBerwirausaha:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik data Mahasiswa Berwirausaha",
            });
        }
    }
    async updateStatistikDataMahasiswaBerwirausaha(req, res) {
        try {
            const { id } = req.params;
            const { totalMahasiswaBerwirausaha, mitraInstitusi, rataDurasiMagang, tingkatKepuasan, slogan, deskripsi, } = req.body;
            const updateData = {
                totalMahasiswaBerwirausaha,
                mitraInstitusi,
                rataDurasiMagang,
                tingkatKepuasan,
                slogan,
                deskripsi,
            };
            const updatedStatistikDataMahasiswaBerwirausaha = await data_mahasiswa_berwirausaha_service_1.default.updateStatistikDataMahasiswaBerwirausaha(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik Data Mahasiswa Berwirausaha berhasil diupdate",
                data: updatedStatistikDataMahasiswaBerwirausaha,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikDataMahasiswaBerwirausaha:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik data Mahasiswa Berwirausaha",
            });
        }
    }
    async deleteStatistikDataMahasiswaBerwirausaha(req, res) {
        try {
            const result = await data_mahasiswa_berwirausaha_service_1.default.deleteStatistikDataMahasiswaBerwirausaha(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik Data Mahasiswa Berwirausaha berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikDataMahasiswaBerwirausaha:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik data Mahasiswa Berwirausaha",
            });
        }
    }
}
exports.default = new DataMahasiswaBerwirausahaController();
