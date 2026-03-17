"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const keterangan_pendamping_ijazah_service_1 = __importDefault(require("../services/keterangan-pendamping-ijazah-service"));
class KeteranganPendampingController {
    async createKeteranganPendampingIjazah(req, res) {
        try {
            const { title, deskripsi, type, waktu, kategori } = req.body;
            const foto = req.files?.["foto"]?.[0];
            const kategoriJSON = JSON.parse(kategori);
            const keteranganPendampingIjazah = await keterangan_pendamping_ijazah_service_1.default.createKeteranganPendampingIjazah({
                title,
                deskripsi,
                type,
                waktu,
                foto,
                kategori: kategoriJSON,
            });
            return res.status(201).json({
                success: true,
                message: "Keterangan Pendamping Ijazah berhasil dibuat",
                keteranganPendampingIjazah,
            });
        }
        catch (error) {
            console.error("Error in createKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getAllKeteranganPendampingIjazah(req, res) {
        try {
            const result = await keterangan_pendamping_ijazah_service_1.default.getAllKeteranganPendampingIjazah();
            return res.status(200).json({
                success: true,
                message: "Keterangan Pendamping Ijazah berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getAllKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateKeteranganPendampingIjazah(req, res) {
        try {
            const { title, deskripsi, type, waktu } = req.body;
            const id = req.params.id;
            const updateData = {
                title,
                deskripsi,
                type,
                waktu,
            };
            // Hanya tambahkan foto jika ada file yang diunggah
            if (req.files?.["foto"]?.[0]) {
                updateData.foto = req.files["foto"][0];
            }
            const updatedKeteranganPendampingIjazah = await keterangan_pendamping_ijazah_service_1.default.updateKeteranganPendampingIjazah(Number(id), // Konversi id ke number
            updateData);
            return res.status(200).json({
                success: true,
                message: "Keterangan Pendamping Ijazah berhasil diupdate",
                data: updatedKeteranganPendampingIjazah,
            });
        }
        catch (error) {
            console.error("Error in updateKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteKeteranganPendampingIjazah(req, res) {
        try {
            const result = await keterangan_pendamping_ijazah_service_1.default.deleteKeteranganPendampingIjazah(Number(req.params.id));
            return res.status(200).json({
                success: true,
                message: "Keterangan Pendamping Ijazah berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikKeteranganPendampingIjazah(req, res) {
        try {
            const { totalData, totalKomponen, totalProsedur, mingguAktif, slogan, deskripsi, } = req.body;
            const statistikKeteranganPendampingIjazah = await keterangan_pendamping_ijazah_service_1.default.createStatistikKeteranganPendampingIjazah({
                totalData,
                totalKomponen,
                totalProsedur,
                mingguAktif,
                slogan,
                deskripsi,
            });
            return res.status(201).json({
                success: true,
                message: "Statistik Keterangan Pendamping Ijazah berhasil dibuat",
                statistikKeteranganPendampingIjazah,
            });
        }
        catch (error) {
            console.error("Error in createStatistikKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikKeteranganPendampingIjazah(req, res) {
        try {
            const result = await keterangan_pendamping_ijazah_service_1.default.getStatistikKeteranganPendampingIjazah();
            return res.status(200).json({
                success: true,
                message: "Statistik Keterangan Pendamping Ijazah berhasil diambil",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in getStatistikKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikKeteranganPendampingIjazah(req, res) {
        try {
            const { totalData, totalKomponen, totalProsedur, mingguAktif, slogan, deskripsi, } = req.body;
            const statistikKeteranganPendampingIjazah = await keterangan_pendamping_ijazah_service_1.default.updateStatistikKeteranganPendampingIjazah({
                totalData,
                totalKomponen,
                totalProsedur,
                mingguAktif,
                slogan,
                deskripsi,
            });
            return res.status(200).json({
                success: true,
                message: "Statistik Keterangan Pendamping Ijazah berhasil diupdate",
                statistikKeteranganPendampingIjazah,
            });
        }
        catch (error) {
            console.error("Error in updateStatistikKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikKeteranganPendampingIjazah(req, res) {
        try {
            const result = await keterangan_pendamping_ijazah_service_1.default.deleteStatistikKeteranganPendampingIjazah();
            return res.status(200).json({
                success: true,
                message: "Statistik Keterangan Pendamping Ijazah berhasil dihapus",
                data: result,
            });
        }
        catch (error) {
            console.error("Error in deleteStatistikKeteranganPendampingIjazah:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new KeteranganPendampingController();
