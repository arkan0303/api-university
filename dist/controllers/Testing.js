"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = __importDefault(require("../services/testing"));
class TestingController {
    async GetData(req, res) {
        try {
            const data = await testing_1.default.GetData();
            return res.status(200).json({
                success: true,
                message: "Data berhasil diambil",
                data: data,
            });
        }
        catch (error) {
            console.log(error);
            return res.status(500).json({
                success: false,
                message: "Gagal mengambil data",
            });
        }
    }
}
exports.default = new TestingController();
