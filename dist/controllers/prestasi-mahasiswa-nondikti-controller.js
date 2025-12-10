"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prestasi_mahasiswa_nondikti_service_1 = __importDefault(require("../services/prestasi-mahasiswa-nondikti-service"));
class PrestasiMahasiswaNonDiktiController {
    async createPrestasiMahasiswaNonDikti(req, res) {
        try {
            const { foto, title, juara, namaMahasiswa, kategori, deskripsi, dampak, keahlian, penghargaan, waktuKompetisi, alamat, penyelenggara, } = req.body;
            const kategoriJSON = JSON.parse(kategori);
            const keahlianJSON = JSON.parse(keahlian);
            const penghargaanJSON = JSON.parse(penghargaan);
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const createPrestasiMahasiswaNonDikti = await prestasi_mahasiswa_nondikti_service_1.default.createPrestasiMahasiswaNonDikti({
                title,
                juara,
                namaMahasiswa,
                kategori: kategoriJSON,
                deskripsi,
                dampak,
                keahlian: keahlianJSON,
                penghargaan: penghargaanJSON,
                waktuKompetisi,
                alamat,
                penyelenggara,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                message: "Prestasi Mahasiswa Non Dikti berhasil dibuat",
                data: createPrestasiMahasiswaNonDikti,
            });
        }
        catch (error) {
            console.error("Error in createPrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllPrestasiMahasiswaNonDikti(req, res) {
        try {
            const result = await prestasi_mahasiswa_nondikti_service_1.default.getAllPrestasiMahasiswaNonDikti();
            res.status(200).json({
                success: true,
                message: "Prestasi Mahasiswa Non Dikti berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllPrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updatePrestasiMahasiswaNonDikti(req, res) {
        try {
            const { title, juara, namaMahasiswa, kategori, deskripsi, dampak, keahlian, penghargaan, waktuKompetisi, alamat, penyelenggara, } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const keahlianJSON = JSON.parse(keahlian);
            const penghargaanJSON = JSON.parse(penghargaan);
            const updateData = {
                title,
                juara,
                namaMahasiswa,
                kategori: kategoriJSON,
                deskripsi,
                dampak,
                keahlian: keahlianJSON,
                penghargaan: penghargaanJSON,
                waktuKompetisi,
                alamat,
                penyelenggara,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedPrestasiMahasiswaNonDikti = await prestasi_mahasiswa_nondikti_service_1.default.updatePrestasiMahasiswaNonDikti(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Prestasi Mahasiswa Non Dikti berhasil diupdate",
                data: updatedPrestasiMahasiswaNonDikti,
            });
        }
        catch (error) {
            console.error("Error in updatePrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deletePrestasiMahasiswaNonDikti(req, res) {
        try {
            const result = await prestasi_mahasiswa_nondikti_service_1.default.deletePrestasiMahasiswaNonDikti(Number(req.params.id));
            res.status(200).json({
                success: true,
                message: "Prestasi Mahasiswa Non Dikti berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deletePrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikPrestasiMahasiswaNonDikti(req, res) {
        try {
            const { totalPrestasi, tingkatInternasional, tingkatNasional, tingkatRegional, slogan, deskripsi, } = req.body;
            const createStatistikPrestasiMahasiswaNonDikti = await prestasi_mahasiswa_nondikti_service_1.default.createStatistikPrestasiMahasiswaNonDikti({
                totalPrestasi,
                tingkatInternasional,
                tingkatNasional,
                tingkatRegional,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Prestasi Mahasiswa Non Dikti berhasil dibuat",
                data: createStatistikPrestasiMahasiswaNonDikti,
            });
        }
        catch (error) {
            console.error("Error in createStatistikPrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllStatistikPrestasiMahasiswaNonDikti(req, res) {
        try {
            const result = await prestasi_mahasiswa_nondikti_service_1.default.getAllStatistikPrestasiMahasiswaNonDikti();
            res.status(200).json({
                success: true,
                message: "Statistik Prestasi Mahasiswa Non Dikti berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikPrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikPrestasiMahasiswaNonDikti(req, res) {
        try {
            const { totalPrestasi, tingkatInternasional, tingkatNasional, tingkatRegional, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const statistikPrestasiMahasiswaNonDikti = await prestasi_mahasiswa_nondikti_service_1.default.updateStatistikPrestasiMahasiswaNonDikti(Number(id), {
                totalPrestasi,
                tingkatInternasional,
                tingkatNasional,
                tingkatRegional,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Prestasi Mahasiswa Non Dikti berhasil diupdate",
                statistikPrestasiMahasiswaNonDikti,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikPrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikPrestasiMahasiswaNonDikti(req, res) {
        try {
            const result = await prestasi_mahasiswa_nondikti_service_1.default.deleteStatistikPrestasiMahasiswaNonDikti(Number(req.params.id));
            res.status(200).json({
                success: true,
                message: "Statistik Prestasi Mahasiswa Non Dikti berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikPrestasiMahasiswaNonDikti:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new PrestasiMahasiswaNonDiktiController();
