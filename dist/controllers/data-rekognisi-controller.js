"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = __importDefault(require("console"));
const data_rekognisi_service_1 = __importDefault(require("../services/data-rekognisi-service"));
class DataRekognisiController {
    async createDataRekognisi(req, res) {
        try {
            const { title, tema, tingkat, tahun, deskripsi, dampak, kriteriaPenelitian, manfaat, provider, masaBerlaku, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kriteriaPenelitianJson = JSON.parse(kriteriaPenelitian);
            const manfaatJson = JSON.parse(manfaat);
            const create = await data_rekognisi_service_1.default.createDataRekognisi({
                title,
                tema,
                tingkat,
                tahun,
                deskripsi,
                dampak,
                kriteriaPenelitian: kriteriaPenelitianJson,
                manfaat: manfaatJson,
                provider,
                masaBerlaku,
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
                message: "Gagal membuat data rekognisi",
            });
        }
    }
    async getAllDataRekognisi(req, res) {
        try {
            const getAllDataRekognisi = await data_rekognisi_service_1.default.getAllDataRekognisi();
            return res.status(200).json({
                success: true,
                data: getAllDataRekognisi,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan data rekognisi",
            });
        }
    }
    async updateDataRekognisi(req, res) {
        try {
            const { title, tema, tingkat, tahun, deskripsi, dampak, kriteriaPenelitian, manfaat, provider, masaBerlaku, } = req.body;
            const id = req.params.id;
            const kriteriaPenelitianJson = JSON.parse(kriteriaPenelitian);
            const manfaatJson = JSON.parse(manfaat);
            const updateData = {
                title,
                tema,
                tingkat,
                tahun,
                deskripsi,
                dampak,
                kriteriaPenelitian: kriteriaPenelitianJson,
                manfaat: manfaatJson,
                provider,
                masaBerlaku,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedDataRekognisi = await data_rekognisi_service_1.default.updateDataRekognisi(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Data Rekognisi berhasil diupdate",
                data: updatedDataRekognisi,
            });
        }
        catch (error) {
            console_1.default.error("Error in updateDataRekognisi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui data rekognisi",
            });
        }
    }
    async deleteDataRekognisi(req, res) {
        try {
            const result = await data_rekognisi_service_1.default.deleteDataRekognisi(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Data Rekognisi berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console_1.default.error("Error in deleteDataRekognisi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus data rekognisi",
            });
        }
    }
    async createStatistikDataRekognisi(req, res) {
        try {
            const { penghargaan, sertifikasi, akreditasi, rekognasiInternasional, slogan, deskripsi, } = req.body;
            const create = await data_rekognisi_service_1.default.createStatistikDataRekognisi({
                penghargaan,
                sertifikasi,
                akreditasi,
                rekognasiInternasional,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: create,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik data rekognisi",
            });
        }
    }
    async getAllStatistikDataRekognisi(req, res) {
        try {
            const getAllStatistikDataRekognisi = await data_rekognisi_service_1.default.getAllStatistikDataRekognisi();
            return res.status(200).json({
                success: true,
                data: getAllStatistikDataRekognisi,
            });
        }
        catch (error) {
            console_1.default.error("Error in getAllStatistikDataRekognisi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik data rekognisi",
            });
        }
    }
    async updateStatistikDataRekognisi(req, res) {
        try {
            const { penghargaan, sertifikasi, akreditasi, rekognasiInternasional, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            console_1.default.log(req.body);
            console_1.default.log(req.params.id);
            const updateData = {
                penghargaan,
                sertifikasi,
                akreditasi,
                rekognasiInternasional,
                slogan,
                deskripsi,
            };
            const updatedStatistikDataRekognisi = await data_rekognisi_service_1.default.updateStatistikDataRekognisi(Number(id), // Konversi id ke number
            updateData);
            console_1.default.log(updatedStatistikDataRekognisi);
            return res.status(200).json({
                success: true,
                message: "Statistik data rekognisi berhasil diupdate",
                data: updatedStatistikDataRekognisi,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik daftar ",
            });
        }
    }
    async deleteStatistikDataRekognisi(req, res) {
        try {
            const result = await data_rekognisi_service_1.default.deleteStatistikDataRekognisi(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik data rekognisi berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console_1.default.error("Error in deleteStatistikDataRekognisi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik data rekognisi",
            });
        }
    }
}
exports.default = new DataRekognisiController();
