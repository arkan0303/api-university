"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const badan_eksekutif_mahasiswa_service_1 = __importDefault(require("../services/badan-eksekutif-mahasiswa-service"));
class BadanEksikutifMahasiswaController {
    async createBEM(req, res) {
        try {
            const { nama, jabatan, tugas, visi, misi, programKerja, pencapaian, email, noTelp, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const programKerjaJson = JSON.parse(programKerja);
            const pencapaianJson = JSON.parse(pencapaian);
            const createBEM = await badan_eksekutif_mahasiswa_service_1.default.create({
                nama,
                jabatan,
                tugas,
                visi,
                misi,
                programKerja: programKerjaJson,
                pencapaian: pencapaianJson,
                email,
                noTelp,
                foto: req.files["foto"][0],
            });
            return res.status(201).json({
                success: true,
                data: createBEM,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat badan eksekutif mahasiswa",
            });
        }
    }
    async getAllBEM(req, res) {
        try {
            const getAllBEM = await badan_eksekutif_mahasiswa_service_1.default.getAll();
            return res.status(200).json({
                success: true,
                data: getAllBEM,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan badan eksekutif mahasiswa",
            });
        }
    }
    async updateBEM(req, res) {
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
            const updatedBEM = await badan_eksekutif_mahasiswa_service_1.default.update(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Badan eksekutif mahasiswa berhasil diupdate",
                data: updatedBEM,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui badan eksekutif mahasiswa",
            });
        }
    }
    async deleteBEM(req, res) {
        try {
            const result = await badan_eksekutif_mahasiswa_service_1.default.delete(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Badan eksekutif mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteBEM:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus badan eksekutif mahasiswa",
            });
        }
    }
    async createStatistik(req, res) {
        try {
            const { pengurusInti, programKerja, mahasiswaTerlayani, komitmen, slogan, deskripsi, } = req.body;
            const createStatistik = await badan_eksekutif_mahasiswa_service_1.default.createStatistik({
                pengurusInti,
                programKerja,
                mahasiswaTerlayani,
                komitmen,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: createStatistik,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik badan eksekutif mahasiswa",
            });
        }
    }
    async getAllStatistik(req, res) {
        try {
            const getAllStatistik = await badan_eksekutif_mahasiswa_service_1.default.getAllStatistik();
            return res.status(200).json({
                success: true,
                data: getAllStatistik,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan statistik badan eksekutif mahasiswa",
            });
        }
    }
    async updateStatistik(req, res) {
        try {
            const { pengurusInti, programKerja, mahasiswaTerlayani, komitmen, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                pengurusInti,
                programKerja,
                mahasiswaTerlayani,
                komitmen,
                slogan,
                deskripsi,
            };
            const updatedStatistik = await badan_eksekutif_mahasiswa_service_1.default.updateStatistik(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik badan eksekutif mahasiswa berhasil diupdate",
                data: updatedStatistik,
            });
        }
        catch (error) {
            console.error("Error in updateStatistik:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik badan eksekutif mahasiswa",
            });
        }
    }
    async deleteStatistik(req, res) {
        try {
            const result = await badan_eksekutif_mahasiswa_service_1.default.deleteStatistik(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik badan eksekutif mahasiswa berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistik:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik badan eksekutif mahasiswa",
            });
        }
    }
}
exports.default = new BadanEksikutifMahasiswaController();
