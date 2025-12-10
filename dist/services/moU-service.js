"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
class MoUService {
    async createMoU(data) {
        try {
            const newMoU = await prisma_1.default.moU.create({
                data: data,
            });
            return newMoU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getMoU() {
        try {
            const moU = await prisma_1.default.moU.findMany();
            return moU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateMoU(id, data) {
        try {
            const updatedMoU = await prisma_1.default.moU.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedMoU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteMoU(id) {
        try {
            const deletedMoU = await prisma_1.default.moU.delete({
                where: {
                    id: id,
                },
            });
            return deletedMoU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async createStatistikMoU(data) {
        try {
            const newStatistikMoU = await prisma_1.default.statistikMoU.create({
                data: data,
            });
            return newStatistikMoU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async getStatistikMoU() {
        try {
            const statistikMoU = await prisma_1.default.statistikMoU.findMany();
            return statistikMoU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async updateStatistikMoU(id, data) {
        try {
            const updatedStatistikMoU = await prisma_1.default.statistikMoU.update({
                where: {
                    id: id,
                },
                data: data,
            });
            return updatedStatistikMoU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
    async deleteStatistikMoU(id) {
        try {
            const deletedStatistikMoU = await prisma_1.default.statistikMoU.delete({
                where: {
                    id: id,
                },
            });
            return deletedStatistikMoU;
        }
        catch (error) {
            console.log(error);
            return null;
        }
    }
}
exports.default = new MoUService();
