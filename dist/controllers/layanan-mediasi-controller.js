"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layanan_mediasi_service_1 = __importDefault(require("../services/layanan-mediasi-service"));
class LayananMediasiController {
    async createLayananMediasi(req, res) {
        try {
            const { title, deskripsi, kategori, waktu, type } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const layananMediasi = await layanan_mediasi_service_1.default.createLayananMediasi({
                title,
                deskripsi,
                kategori: kategoriJSON,
                waktu,
                foto: req.files?.["foto"][0],
                type,
            });
            return res.status(201).json({
                success: true,
                data: layananMediasi,
            });
        }
        catch (error) {
            console.error("Error in createLayananMediasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat layanan mediasi",
            });
        }
    }
    async getAllLayananMediasi(req, res) {
        try {
            const layananMediasi = await layanan_mediasi_service_1.default.getAllLayananMediasi();
            return res.status(200).json({
                success: true,
                data: layananMediasi,
            });
        }
        catch (error) {
            console.error("Error in getAllLayananMediasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil layanan mediasi",
            });
        }
    }
    async updateLayananMediasi(req, res) {
        try {
            const { title, deskripsi, kategori, waktu, type } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                title,
                deskripsi,
                kategori: kategoriJSON,
                waktu,
                type,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedLayananMediasi = await layanan_mediasi_service_1.default.updateLayananMediasi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                data: updatedLayananMediasi,
            });
        }
        catch (error) {
            console.error("Error in updateLayananMediasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteLayananMediasi(req, res) {
        try {
            const id = req.params.id;
            const deletedLayananMediasi = await layanan_mediasi_service_1.default.deleteLayananMediasi(Number(id));
            return res.status(200).json({
                success: true,
                data: deletedLayananMediasi,
            });
        }
        catch (error) {
            console.error("Error in deleteLayananMediasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikLayananMediasi(req, res) {
        try {
            const { mediasiBerhasil, tingkatKesepakatan, mediatorBersetifikat, totalMediasi, slogan, deskripsi, } = req.body;
            const create = await layanan_mediasi_service_1.default.createStatistikLayananMediasi({
                mediasiBerhasil,
                tingkatKesepakatan,
                mediatorBersetifikat,
                totalMediasi,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: create,
            });
        }
        catch (error) {
            console.error("Error in createStatistikLayananMediasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik layanan mediasi",
            });
        }
    }
    async getAllStatistikLayananMediasi(req, res) {
        try {
            const statistikLayananMediasi = await layanan_mediasi_service_1.default.getAllStatistikLayananMediasi();
            return res.status(200).json({
                success: true,
                data: statistikLayananMediasi,
            });
        }
        catch (error) {
            console.error("Error in getAllStatistikLayananMediasi:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik layanan mediasi",
            });
        }
    }
    async updateStatistikLayananMediasi(req, res) {
        try {
            const { mediasiBerhasil, tingkatKesepakatan, mediatorBersetifikat, totalMediasi, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                mediasiBerhasil,
                tingkatKesepakatan,
                mediatorBersetifikat,
                totalMediasi,
                slogan,
                deskripsi,
            };
            const updatedStatistikLayananMediasi = await layanan_mediasi_service_1.default.updateStatistikLayananMediasi(Number(id), updateData);
            return res.status(200).json({
                success: true,
                data: updatedStatistikLayananMediasi,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikLayananMediasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikLayananMediasi(req, res) {
        try {
            const id = req.params.id;
            const deletedStatistikLayananMediasi = await layanan_mediasi_service_1.default.deleteStatistikLayananMediasi(Number(id));
            return res.status(200).json({
                success: true,
                data: deletedStatistikLayananMediasi,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikLayananMediasi:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createTimMediator(req, res) {
        try {
            const { nama, deskripsi, kategori, kasusDitangani, email, noTelp } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const timMediator = await layanan_mediasi_service_1.default.createTimMediator({
                nama,
                deskripsi,
                kategori: kategoriJSON,
                kasusDitangani,
                email,
                noTelp,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                data: timMediator,
            });
        }
        catch (error) {
            console.error("Error in createTimMediator:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat tim mediator",
            });
        }
    }
    async getAllTimMediator(req, res) {
        try {
            const timMediator = await layanan_mediasi_service_1.default.getAllTimMediator();
            return res.status(200).json({
                success: true,
                data: timMediator,
            });
        }
        catch (error) {
            console.error("Error in getAllTimMediator:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil tim mediator",
            });
        }
    }
    async updateTimMediator(req, res) {
        try {
            const { nama, deskripsi, kategori, kasusDitangani, email, noTelp } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                nama,
                deskripsi,
                kategori: kategoriJSON,
                kasusDitangani,
                email,
                noTelp,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedTimMediator = await layanan_mediasi_service_1.default.updateTimMediator(Number(id), updateData);
            return res.status(200).json({
                success: true,
                data: updatedTimMediator,
            });
        }
        catch (error) {
            console.error("Error in updateTimMediator:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteTimMediator(req, res) {
        try {
            const id = req.params.id;
            const deletedTimMediator = await layanan_mediasi_service_1.default.deleteTimMediator(Number(id));
            return res.status(200).json({
                success: true,
                data: deletedTimMediator,
            });
        }
        catch (error) {
            console.error("Error in deleteTimMediator:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new LayananMediasiController();
