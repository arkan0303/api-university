"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const layanan_probono_service_1 = __importDefault(require("../services/layanan-probono-service"));
class LayananProbonoController {
    async createLayananProbono(req, res) {
        try {
            const { title, deskripsi, kategori, waktu, type } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const layananProbono = await layanan_probono_service_1.default.createLayananProbono({
                title,
                deskripsi,
                kategori: kategoriJSON,
                waktu,
                foto: req.files?.["foto"][0],
                type,
            });
            return res.status(201).json({
                success: true,
                data: layananProbono,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat layanan probono",
            });
        }
    }
    async getAllLayananProbono(req, res) {
        try {
            const layananProbono = await layanan_probono_service_1.default.getAllLayananProbono();
            return res.status(200).json({
                success: true,
                data: layananProbono,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil layanan probono",
            });
        }
    }
    async updateLayananProbono(req, res) {
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
            const updatedLayananProbono = await layanan_probono_service_1.default.updateLayananProbono(Number(id), updateData);
            return res.status(200).json({
                success: true,
                data: updatedLayananProbono,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteLayananProbono(req, res) {
        try {
            const id = req.params.id;
            const deletedLayananProbono = await layanan_probono_service_1.default.deleteLayananProbono(Number(id));
            return res.status(200).json({
                success: true,
                data: deletedLayananProbono,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikLayananProbono(req, res) {
        try {
            const { kasusProbono, tingkatKesepakatan, mediatorBersetifikat, totalMediasi, slogan, deskripsi, } = req.body;
            const statistikLayananProbono = await layanan_probono_service_1.default.createStatistikLayananProbono({
                kasusProbono,
                tingkatKesepakatan,
                mediatorBersetifikat,
                totalMediasi,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                data: statistikLayananProbono,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat statistik layanan probono",
            });
        }
    }
    async getAllStatistikLayananProbono(req, res) {
        try {
            const statistikLayananProbono = await layanan_probono_service_1.default.getAllStatistikLayananProbono();
            return res.status(200).json({
                success: true,
                data: statistikLayananProbono,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil statistik layanan probono",
            });
        }
    }
    async updateStatistikLayananProbono(req, res) {
        try {
            const { kasusProbono, tingkatKesepakatan, mediatorBersetifikat, totalMediasi, slogan, deskripsi, } = req.body;
            const id = req.params.id;
            const updateData = {
                kasusProbono,
                tingkatKesepakatan,
                mediatorBersetifikat,
                totalMediasi,
                slogan,
                deskripsi,
            };
            const updatedStatistikLayananProbono = await layanan_probono_service_1.default.updateStatistikLayananProbono(Number(id), updateData);
            return res.status(200).json({
                success: true,
                data: updatedStatistikLayananProbono,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate statistik layanan probono",
            });
        }
    }
    async deleteStatistikLayananProbono(req, res) {
        try {
            const id = req.params.id;
            const deletedStatistikLayananProbono = await layanan_probono_service_1.default.deleteStatistikLayananProbono(Number(id));
            return res.status(200).json({
                success: true,
                data: deletedStatistikLayananProbono,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus statistik layanan probono",
            });
        }
    }
    async createKriteriaPenerima(req, res) {
        try {
            const { title, kategori } = req.body;
            if (!req.files?.["foto"] || req.files["foto"].length === 0) {
                return res.status(400).json({
                    success: false,
                    message: "Foto harus diupload",
                });
            }
            const kategoriJSON = JSON.parse(kategori);
            const kriteriaPenerima = await layanan_probono_service_1.default.createKriteriaPenerima({
                title,
                kategori: kategoriJSON,
                foto: req.files?.["foto"][0],
            });
            return res.status(201).json({
                success: true,
                data: kriteriaPenerima,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal membuat kriteria penerima",
            });
        }
    }
    async getAllKriteriaPenerima(req, res) {
        try {
            const kriteriaPenerima = await layanan_probono_service_1.default.getAllKriteriaPenerima();
            return res.status(200).json({
                success: true,
                data: kriteriaPenerima,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil kriteria penerima",
            });
        }
    }
    async updateKriteriaPenerima(req, res) {
        try {
            const { title, kategori } = req.body;
            const id = req.params.id;
            const kategoriJSON = JSON.parse(kategori);
            const updateData = {
                title,
                kategori: kategoriJSON,
            };
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedKriteriaPenerima = await layanan_probono_service_1.default.updateKriteriaPenerima(Number(id), updateData);
            return res.status(200).json({
                success: true,
                data: updatedKriteriaPenerima,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengupdate kriteria penerima",
            });
        }
    }
    async deleteKriteriaPenerima(req, res) {
        try {
            const id = req.params.id;
            const deletedKriteriaPenerima = await layanan_probono_service_1.default.deleteKriteriaPenerima(Number(id));
            return res.status(200).json({
                success: true,
                data: deletedKriteriaPenerima,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal menghapus kriteria penerima",
            });
        }
    }
}
exports.default = new LayananProbonoController();
