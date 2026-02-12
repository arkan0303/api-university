"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
class Testing {
    async GetData() {
        try {
            const data = await prisma_1.default.soppendaftaran.findMany();
            return data;
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
}
exports.default = new Testing();
