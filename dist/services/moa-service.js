"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
class MoAService {
    async createMoA(data) {
        try {
            const newMoA = await prisma_1.default.moA.create({
                data: data,
            });
            return newMoA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getMoA() {
        try {
            const moA = await prisma_1.default.moA.findMany();
            return moA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateMoA(id, data) {
        try {
            const updatedMoA = await prisma_1.default.moA.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedMoA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteMoA(id) {
        try {
            const deletedMoA = await prisma_1.default.moA.delete({
                where: {
                    id: id,
                },
            });
            return deletedMoA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createStatistikMoA(data) {
        try {
            const newStatistikMoA = await prisma_1.default.statistikMoA.create({
                data: data,
            });
            return newStatistikMoA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getStatistikMoA() {
        try {
            const statistikMoA = await prisma_1.default.statistikMoA.findMany();
            return statistikMoA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateStatistikMoA(id, data) {
        try {
            const updatedStatistikMoA = await prisma_1.default.statistikMoA.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedStatistikMoA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteStatistikMoA(id) {
        try {
            const deletedStatistikMoA = await prisma_1.default.statistikMoA.delete({
                where: {
                    id: id,
                },
            });
            return deletedStatistikMoA;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new MoAService();
