"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
class BeasiswaKIPService {
    async createBeasiswaKIP(data) {
        try {
            const createBeasiswaKIPi = await prisma_1.default.beasiswaKIPKemendiksaintek.create({
                data: {
                    manfaat: data.manfaat,
                    judulPersyaratan: data.judulPersyaratan,
                    persyaratan: data.persyaratan,
                },
            });
            return createBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in createBeasiswaKIP:", error);
            throw error;
        }
    }
    async getAllBeasiswaKIP() {
        try {
            const getAllBeasiswaKIP = await prisma_1.default.beasiswaKIPKemendiksaintek.findMany();
            return getAllBeasiswaKIP;
        }
        catch (error) {
            console.error("Error in getAllBeasiswaKIP:", error);
            throw error;
        }
    }
    async updateBeasiswaKIP(id, data) {
        try {
            const updateBeasiswaKIPi = await prisma_1.default.beasiswaKIPKemendiksaintek.update({
                where: {
                    id,
                },
                data: {
                    manfaat: data.manfaat,
                    judulPersyaratan: data.judulPersyaratan,
                    persyaratan: data.persyaratan,
                },
            });
            return updateBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in updateBeasiswaKIP:", error);
            throw error;
        }
    }
    async deleteBeasiswaKIP(id) {
        try {
            const deleteBeasiswaKIPi = await prisma_1.default.beasiswaKIPKemendiksaintek.delete({
                where: {
                    id,
                },
            });
            return deleteBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in deleteBeasiswaKIP:", error);
            throw error;
        }
    }
    async createTimelineBeasiswaKIP(data) {
        try {
            const createTimelineBeasiswaKIPi = await prisma_1.default.timelineBeasiswaKIPKemendiksaintek.create({
                data,
            });
            return createTimelineBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in createTimelineBeasiswaKIP:", error);
            throw error;
        }
    }
    async getAllTimelineBeasiswaKIP() {
        try {
            const getAllTimelineBeasiswaKIP = await prisma_1.default.timelineBeasiswaKIPKemendiksaintek.findMany();
            return getAllTimelineBeasiswaKIP;
        }
        catch (error) {
            console.error("Error in getAllTimelineBeasiswaKIP:", error);
            throw error;
        }
    }
    async updateTimelineBeasiswaKIP(id, data) {
        try {
            const updateTimelineBeasiswaKIPi = await prisma_1.default.timelineBeasiswaKIPKemendiksaintek.update({
                where: {
                    id,
                },
                data,
            });
            return updateTimelineBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in updateTimelineBeasiswaKIP:", error);
            throw error;
        }
    }
    async deleteTimelineBeasiswaKIP(id) {
        try {
            const deleteTimelineBeasiswaKIPi = await prisma_1.default.timelineBeasiswaKIPKemendiksaintek.delete({
                where: {
                    id,
                },
            });
            return deleteTimelineBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in deleteTimelineBeasiswaKIP:", error);
            throw error;
        }
    }
    async createStatistikBeasiswaKIP(data) {
        try {
            const createStatistikBeasiswaKIPi = await prisma_1.default.statistikBeasiswaKIPKemendiksaintek.create({
                data,
            });
            return createStatistikBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in createStatistikBeasiswaKIP:", error);
            throw error;
        }
    }
    async getAllStatistikBeasiswaKIP() {
        try {
            const getAllStatistikBeasiswaKIP = await prisma_1.default.statistikBeasiswaKIPKemendiksaintek.findMany();
            return getAllStatistikBeasiswaKIP;
        }
        catch (error) {
            console.error("Error in getAllStatistikBeasiswaKIP:", error);
            throw error;
        }
    }
    async updateStatistikBeasiswaKIP(id, data) {
        try {
            const updateStatistikBeasiswaKIPi = await prisma_1.default.statistikBeasiswaKIPKemendiksaintek.update({
                where: {
                    id,
                },
                data,
            });
            return updateStatistikBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in updateStatistikBeasiswaKIP:", error);
            throw error;
        }
    }
    async deleteStatistikBeasiswaKIP(id) {
        try {
            const deleteStatistikBeasiswaKIPi = await prisma_1.default.statistikBeasiswaKIPKemendiksaintek.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikBeasiswaKIPi;
        }
        catch (error) {
            console.error("Error in deleteStatistikBeasiswaKIP:", error);
            throw error;
        }
    }
}
exports.default = new BeasiswaKIPService();
