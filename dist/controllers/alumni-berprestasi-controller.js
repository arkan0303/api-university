"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const alumni_berprestasi_service_1 = __importDefault(require("../services/alumni-berprestasi-service"));
class AlumniBerprestasiController {
    async createAlumniBerprestasi(req, res) {
        try {
            const { nama, nim, lulusan, posisi, perusahaan, ipk, gaji, waktuTunggu, email, noTelp, linkedin, instagram, testimonial, perjalananKarir, keahlian, pencapaian, bidang, } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const pencapaianJson = JSON.parse(pencapaian);
            const perjalananKarirJson = JSON.parse(perjalananKarir);
            const keahlianJson = JSON.parse(keahlian);
            const createBEM = await alumni_berprestasi_service_1.default.create({
                nama,
                nim,
                lulusan,
                posisi,
                perusahaan,
                ipk,
                gaji,
                waktuTunggu,
                email,
                noTelp,
                linkedin,
                instagram,
                testimonial,
                perjalananKarir: perjalananKarirJson,
                keahlian: keahlianJson,
                pencapaian: pencapaianJson,
                bidang,
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
    async getAllAlumniBerprestasi(req, res) {
        try {
            const getAllAlumniBerprestasi = await alumni_berprestasi_service_1.default.getAll();
            return res.status(200).json({
                success: true,
                data: getAllAlumniBerprestasi,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal mendapatkan badan eksekutif mahasiswa",
            });
        }
    }
    async updateAlumniBerprestasi(req, res) {
        try {
            const { nama, nim, lulusan, posisi, perusahaan, ipk, gaji, waktuTunggu, email, noTelp, linkedin, instagram, testimonial, perjalananKarir, keahlian, pencapaian, bidang, } = req.body;
            const id = req.params.id;
            const updateData = {
                nama,
                nim,
                lulusan,
                posisi,
                perusahaan,
                ipk,
                gaji,
                waktuTunggu,
                email,
                noTelp,
                linkedin,
                instagram,
                testimonial,
                perjalananKarir,
                keahlian,
                pencapaian,
                bidang,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedAlumniBerprestasi = await alumni_berprestasi_service_1.default.update(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Alumni berprestasi berhasil diupdate",
                data: updatedAlumniBerprestasi,
            });
        }
        catch (error) {
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui alumni berprestasi",
            });
        }
    }
    async deleteAlumniBerprestasi(req, res) {
        try {
            const result = await alumni_berprestasi_service_1.default.delete(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Alumni berprestasi berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteAlumniBerprestasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus alumni berprestasi",
            });
        }
    }
    async createStatistik(req, res) {
        try {
            const { totalAlumni, tingkatPenempatan, rataGajih, WaktuTunggu, slogan, deskripsi, } = req.body;
            const createStatistik = await alumni_berprestasi_service_1.default.createStatistik({
                totalAlumni,
                tingkatPenempatan,
                rataGajih,
                WaktuTunggu,
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
                message: "Gagal membuat statistik alumni berprestasi",
            });
        }
    }
    async getAllStatistik(req, res) {
        try {
            const getAllStatistik = await alumni_berprestasi_service_1.default.getAllStatistik();
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
            const { totalAlumni, tingkatPenempatan, rataGajih, WaktuTunggu, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                totalAlumni,
                tingkatPenempatan,
                rataGajih,
                WaktuTunggu,
                slogan,
                deskripsi,
            };
            const updatedStatistik = await alumni_berprestasi_service_1.default.updateStatistik(Number(id), updateData);
            return res.status(200).json({
                success: true,
                message: "Statistik alumni berprestasi berhasil diupdate",
                data: updatedStatistik,
            });
        }
        catch (error) {
            console.error("Error in updateStatistik:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui statistik alumni berprestasi",
            });
        }
    }
    async deleteStatistik(req, res) {
        try {
            const result = await alumni_berprestasi_service_1.default.deleteStatistik(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Statistik alumni berprestasi berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistik:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik alumni berprestasi",
            });
        }
    }
}
exports.default = new AlumniBerprestasiController();
