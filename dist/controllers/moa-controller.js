"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moa_service_1 = __importDefault(require("../services/moa-service"));
class MOAController {
    async createMOA(req, res) {
        try {
            const { title, agreementNumber, parties, signingDate, effectiveDate, agreementType, scope, status, duration, objectives, responsibilities, financialTerms, terminationClause, description, implementation, benefits, } = req.body;
            const newMOA = await moa_service_1.default.createMoA({
                title,
                agreementNumber,
                parties,
                signingDate,
                effectiveDate,
                agreementType,
                scope,
                status,
                duration,
                objectives,
                responsibilities,
                financialTerms,
                terminationClause,
                description,
                implementation,
                benefits,
            });
            res.status(201).json({
                success: true,
                message: "MOA berhasil dibuat",
                data: newMOA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getMOA(req, res) {
        try {
            const moA = await moa_service_1.default.getMoA();
            res.status(200).json({
                success: true,
                message: "MOA berhasil diambil",
                data: moA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateMOA(req, res) {
        try {
            const { id } = req.params;
            const { title, agreementNumber, parties, signingDate, effectiveDate, agreementType, scope, status, duration, objectives, responsibilities, financialTerms, terminationClause, description, implementation, benefits, } = req.body;
            const updatedMOA = await moa_service_1.default.updateMoA(Number(id), {
                title,
                agreementNumber,
                parties,
                signingDate,
                effectiveDate,
                agreementType,
                scope,
                status,
                duration,
                objectives,
                responsibilities,
                financialTerms,
                terminationClause,
                description,
                implementation,
                benefits,
            });
            res.status(200).json({
                success: true,
                message: "MOA berhasil diupdate",
                data: updatedMOA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteMOA(req, res) {
        try {
            const { id } = req.params;
            const deletedMOA = await moa_service_1.default.deleteMoA(Number(id));
            res.status(200).json({
                success: true,
                message: "MOA berhasil dihapus",
                data: deletedMOA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async createStatistikMoA(req, res) {
        try {
            const { totalMoA, aktif, dalamProses, tidakAktif } = req.body;
            const newStatistikMoA = await moa_service_1.default.createStatistikMoA({
                totalMoA,
                aktif,
                dalamProses,
                tidakAktif,
            });
            res.status(201).json({
                success: true,
                message: "Statistik MOA berhasil dibuat",
                data: newStatistikMoA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async getStatistikMoA(req, res) {
        try {
            const statistikMoA = await moa_service_1.default.getStatistikMoA();
            res.status(200).json({
                success: true,
                message: "Statistik MOA berhasil diambil",
                data: statistikMoA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async updateStatistikMoA(req, res) {
        try {
            const { id } = req.params;
            const { totalMoA, aktif, dalamProses, tidakAktif } = req.body;
            const updatedStatistikMoA = await moa_service_1.default.updateStatistikMoA(Number(id), {
                totalMoA,
                aktif,
                dalamProses,
                tidakAktif,
            });
            res.status(200).json({
                success: true,
                message: "Statistik MOA berhasil diupdate",
                data: updatedStatistikMoA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
    async deleteStatistikMoA(req, res) {
        try {
            const { id } = req.params;
            const deletedStatistikMoA = await moa_service_1.default.deleteStatistikMoA(Number(id));
            res.status(200).json({
                success: true,
                message: "Statistik MOA berhasil dihapus",
                data: deletedStatistikMoA,
            });
        }
        catch (error) {
            console.log(error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}
exports.default = new MOAController();
