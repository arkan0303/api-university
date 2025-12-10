"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
class BeasiswaBriService {
    async createBeasiswaBri(data) {
        try {
            const createBeasiswaBrii = await prisma_1.default.beasiswaBri.create({
                data: {
                    tentangProgram: data.tentangProgram,
                    manfaat: data.manfaat,
                    judulPersyaratan: data.judulPersyaratan,
                    persyaratan: data.persyaratan,
                },
            });
            return createBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in createBeasiswaBri:", error);
            throw error;
        }
    }
    async getAllBeasiswaBri() {
        try {
            const getAllBeasiswaBri = await prisma_1.default.beasiswaBri.findMany();
            return getAllBeasiswaBri;
        }
        catch (error) {
            console.error("Error in getAllBeasiswaBri:", error);
            throw error;
        }
    }
    async updateBeasiswaBri(id, data) {
        try {
            const updateBeasiswaBrii = await prisma_1.default.beasiswaBri.update({
                where: {
                    id,
                },
                data: {
                    tentangProgram: data.tentangProgram,
                    manfaat: data.manfaat,
                    judulPersyaratan: data.judulPersyaratan,
                    persyaratan: data.persyaratan,
                },
            });
            return updateBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in updateBeasiswaBri:", error);
            throw error;
        }
    }
    async deleteBeasiswaBri(id) {
        try {
            const deleteBeasiswaBrii = await prisma_1.default.beasiswaBri.delete({
                where: {
                    id,
                },
            });
            return deleteBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in deleteBeasiswaBri:", error);
            throw error;
        }
    }
    async createTimelineBeasiswaBri(data) {
        try {
            const createTimelineBeasiswaBrii = await prisma_1.default.timelineBeasiswaBri.create({
                data,
            });
            return createTimelineBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in createTimelineBeasiswaBri:", error);
            throw error;
        }
    }
    async getAllTimelineBeasiswaBri() {
        try {
            const getAllTimelineBeasiswaBri = await prisma_1.default.timelineBeasiswaBri.findMany();
            return getAllTimelineBeasiswaBri;
        }
        catch (error) {
            console.error("Error in getAllTimelineBeasiswaBri:", error);
            throw error;
        }
    }
    async updateTimelineBeasiswaBri(id, data) {
        try {
            const updateTimelineBeasiswaBrii = await prisma_1.default.timelineBeasiswaBri.update({
                where: {
                    id,
                },
                data,
            });
            return updateTimelineBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in updateTimelineBeasiswaBri:", error);
            throw error;
        }
    }
    async deleteTimelineBeasiswaBri(id) {
        try {
            const deleteTimelineBeasiswaBrii = await prisma_1.default.timelineBeasiswaBri.delete({
                where: {
                    id,
                },
            });
            return deleteTimelineBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in deleteTimelineBeasiswaBri:", error);
            throw error;
        }
    }
    async createStatistikBeasiswaBri(data) {
        try {
            const createStatistikBeasiswaBrii = await prisma_1.default.statistikBeasiswaBri.create({
                data,
            });
            return createStatistikBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in createStatistikBeasiswaBri:", error);
            throw error;
        }
    }
    async getAllStatistikBeasiswaBri() {
        try {
            const getAllStatistikBeasiswaBri = await prisma_1.default.statistikBeasiswaBri.findMany();
            return getAllStatistikBeasiswaBri;
        }
        catch (error) {
            console.error("Error in getAllStatistikBeasiswaBri:", error);
            throw error;
        }
    }
    async updateStatistikBeasiswaBri(id, data) {
        try {
            const updateStatistikBeasiswaBrii = await prisma_1.default.statistikBeasiswaBri.update({
                where: {
                    id,
                },
                data,
            });
            return updateStatistikBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in updateStatistikBeasiswaBri:", error);
            throw error;
        }
    }
    async deleteStatistikBeasiswaBri(id) {
        try {
            const deleteStatistikBeasiswaBrii = await prisma_1.default.statistikBeasiswaBri.delete({
                where: {
                    id,
                },
            });
            return deleteStatistikBeasiswaBrii;
        }
        catch (error) {
            console.error("Error in deleteStatistikBeasiswaBri:", error);
            throw error;
        }
    }
}
exports.default = new BeasiswaBriService();
