"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dewan_perwakilan_mahasiswa_service_1 = __importDefault(require("../services/dewan-perwakilan-mahasiswa-service"));
class DewanPerwakilanMahasiswaController {
    async createDewanPerwakilan(req, res) {
        try {
            const { nama, jabatan, tugas, visi, misi, programKerja, pencapaian, email, noTelp, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const createDewanPerwakilanMahasiswa = await dewan_perwakilan_mahasiswa_service_1.default.create({
                nama,
                jabatan,
                tugas,
                visi,
                misi,
                programKerja,
                pencapaian,
                email,
                noTelp,
                foto: req.files["foto"][0],
            });
            return res.status(201).json({
                success: true,
                data: createDewanPerwakilanMahasiswa,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat dewan perwakilan mahasiswa",
            });
        }
    }
    async getAllDewanPerwakilanMahasiswa(req, res) {
        try {
            const getAllDewanPerwakilanMahasiswa = await dewan_perwakilan_mahasiswa_service_1.default.getAll();
            return res.status(200).json({
                success: true,
                data: getAllDewanPerwakilanMahasiswa,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan dewan perwakilan mahasiswa",
            });
        }
    }
    async updateDewanPerwakilan(req, res) {
        try {
            const { nama, jabatan, tugas, visi, misi, programKerja, pencapaian, email, noTelp, } = req.body;
            const id = req.params.id;
            const updateData = {
                nama,
                jabatan,
                tugas,
                visi,
                misi,
                programKerja,
                pencapaian,
                email,
                noTelp,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedDewanPerwakilanMahasiswa = await dewan_perwakilan_mahasiswa_service_1.default.update(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Dewan perwakilan mahasiswa berhasil diupdate",
                data: updatedDewanPerwakilanMahasiswa,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui dewan perwakilan mahasiswa",
            });
        }
    }
    async deleteDewanPerwakilan(req, res) {
        try {
            const result = await dewan_perwakilan_mahasiswa_service_1.default.delete(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Dewan perwakilan mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteDewanPerwakilanMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus dewan perwakilan mahasiswa",
            });
        }
    }
    async createStatistik(req, res) {
        try {
            const { anggotaAktif, aspirasiDitampung, praturanDisusun, akuntabel, slogan, deskripsi, } = req.body;
            const createStatistikDewanPerwakilanMahasiswa = await dewan_perwakilan_mahasiswa_service_1.default.createStatistik({
                anggotaAktif,
                aspirasiDitampung,
                praturanDisusun,
                akuntabel,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: createStatistikDewanPerwakilanMahasiswa,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik dewan perwakilan mahasiswa",
            });
        }
    }
    async getAllStatistik(req, res) {
        try {
            const getAllStatistikDewanPerwakilanMahasiswa = await dewan_perwakilan_mahasiswa_service_1.default.getAllStatistik();
            return res.status(200).json({
                success: true,
                data: getAllStatistikDewanPerwakilanMahasiswa,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik dewan perwakilan mahasiswa",
            });
        }
    }
    async updateStatistik(req, res) {
        try {
            const { anggotaAktif, aspirasiDitampung, praturanDisusun, akuntabel, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                anggotaAktif,
                aspirasiDitampung,
                praturanDisusun,
                akuntabel,
                slogan,
                deskripsi,
            };
            const updatedStatistikDewanPerwakilanMahasiswa = await dewan_perwakilan_mahasiswa_service_1.default.updateStatistik(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik dewan perwakilan mahasiswa berhasil diupdate",
                data: updatedStatistikDewanPerwakilanMahasiswa,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik dewan perwakilan mahasiswa",
            });
        }
    }
    async deleteStatistik(req, res) {
        try {
            const result = await dewan_perwakilan_mahasiswa_service_1.default.deleteStatistik(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik dewan perwakilan mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikDewanPerwakilanMahasiswa:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik dewan perwakilan mahasiswa",
            });
        }
    }
}
exports.default = new DewanPerwakilanMahasiswaController();
