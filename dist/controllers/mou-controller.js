"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moU_service_1 = __importDefault(require("../services/moU-service"));
class MOUController {
    async createMOU(req, res) {
        try {
            const { title, partnerInstitution, partnerType, signingDate, expiryDate, mouNumber, scope, status, duration, objectives, contactPerson, description, implementation, benefits, } = req.body;
            const newMOU = await moU_service_1.default.createMoU({
                title,
                partnerInstitution,
                partnerType,
                signingDate,
                expiryDate,
                mouNumber,
                scope,
                status,
                duration,
                objectives,
                contactPerson,
                description,
                implementation,
                benefits,
            });
            res.status(201).json({
                success: true,
                message: "MOU berhasil dibuat",
                data: newMOU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getMOU(req, res) {
        try {
            const moU = await moU_service_1.default.getMoU();
            res.status(200).json({
                success: true,
                message: "MOU berhasil diambil",
                data: moU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateMOU(req, res) {
        try {
            const { id } = req.params;
            const { title, partnerInstitution, partnerType, signingDate, expiryDate, mouNumber, scope, status, duration, objectives, contactPerson, description, implementation, benefits, } = req.body;
            const updatedMOU = await moU_service_1.default.updateMoU(Number(id), {
                title,
                partnerInstitution,
                partnerType,
                signingDate,
                expiryDate,
                mouNumber,
                scope,
                status,
                duration,
                objectives,
                contactPerson,
                description,
                implementation,
                benefits,
            });
            res.status(200).json({
                success: true,
                message: "MOU berhasil diupdate",
                data: updatedMOU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteMOU(req, res) {
        try {
            const { id } = req.params;
            const deletedMOU = await moU_service_1.default.deleteMoU(Number(id));
            res.status(200).json({
                success: true,
                message: "MOU berhasil dihapus",
                data: deletedMOU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikMoU(req, res) {
        try {
            const { totalMoU, aktif, dalamProses, tidakAktif } = req.body;
            const newStatistikMoU = await moU_service_1.default.createStatistikMoU({
                totalMoU,
                aktif,
                dalamProses,
                tidakAktif,
            });
            res.status(201).json({
                success: true,
                message: "Statistik MOU berhasil dibuat",
                data: newStatistikMoU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikMoU(req, res) {
        try {
            const statistikMoU = await moU_service_1.default.getStatistikMoU();
            res.status(200).json({
                success: true,
                message: "Statistik MOU berhasil diambil",
                data: statistikMoU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikMoU(req, res) {
        try {
            const { id } = req.params;
            const { totalMoU, aktif, dalamProses, tidakAktif } = req.body;
            const updatedStatistikMoU = await moU_service_1.default.updateStatistikMoU(Number(id), {
                totalMoU,
                aktif,
                dalamProses,
                tidakAktif,
            });
            res.status(200).json({
                success: true,
                message: "Statistik MOU berhasil diupdate",
                data: updatedStatistikMoU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikMoU(req, res) {
        try {
            const { id } = req.params;
            const deletedStatistikMoU = await moU_service_1.default.deleteStatistikMoU(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik MOU berhasil dihapus",
                data: deletedStatistikMoU,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new MOUController();
