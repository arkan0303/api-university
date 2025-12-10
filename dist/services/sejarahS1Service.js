"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SejarahS1Service {
    async createSejarahS1(sejarah) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(sejarah.foto.buffer);
            const sejarahS1 = await prisma_1.default.sejarah_S1.create({
                data: {
                    judul: sejarah.judul,
                    tahun: sejarah.tahun,
                    deskripsi: sejarah.deskripsi,
                    foto: fotoUrl,
                },
            });
            return sejarahS1;
        }
        catch (error) {
            console.error("Error in createSejarahS1:", error);
            throw error;
        }
    }
    async getAllSejarahS1() {
        try {
            const sejarahS1 = await prisma_1.default.sejarah_S1.findMany();
            return sejarahS1;
        }
        catch (error) {
            console.error("Error in getAllSejarahS1:", error);
            throw error;
        }
    }
    async updateSejarahS1(id, sejarah) {
        try {
            const updateData = {
                judul: sejarah.judul,
                tahun: sejarah.tahun,
                deskripsi: sejarah.deskripsi,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (sejarah.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(sejarah.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const sejarahS1 = await prisma_1.default.sejarah_S1.update({
                where: { id },
                data: updateData,
            });
            return sejarahS1;
        }
        catch (error) {
            console.error("Error in updateSejarahS1:", error);
            throw error;
        }
    }
    async deleteData(id) {
        try {
            const deletedData = await prisma_1.default.sejarah_S1.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createSejarahS1Banner(banner, konten) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(banner.buffer);
            const sejarahS1Banner = await prisma_1.default.sejarahS1.create({
                data: {
                    banner: fotoUrl,
                    konten: konten,
                },
            });
            return sejarahS1Banner;
        }
        catch (error) {
            console.error("Error in createSejarahS1Banner:", error);
            throw error;
        }
    }
    async updateSejarahS1Banner(id, data) {
        try {
            const updateData = {
                konten: data.konten,
            };
            // Hanya upload banner baru jika ada file yang diunggah
            if (data.banner) {
                const bannerUrl = await (0, cloudinary_1.uploadToCloudinary)(data.banner.buffer);
                updateData.banner = bannerUrl;
            }
            const updatedBanner = await prisma_1.default.sejarahS1.update({
                where: { id },
                data: updateData,
            });
            return updatedBanner;
        }
        catch (error) {
            console.error("Error in updateSejarahS1Banner:", error);
            throw error;
        }
    }
    async deleteBanner(id) {
        try {
            const deletedData = await prisma_1.default.sejarahS1.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteBanner:", error);
            throw error;
        }
    }
    async getDataBanner() {
        try {
            const dataBanner = await prisma_1.default.sejarahS1.findMany();
            return dataBanner;
        }
        catch (error) {
            console.error("Error in getDataBanner:", error);
            throw error;
        }
    }
    async createStatistikSejarahS1(statistik) {
        try {
            const statistikSejarahS1 = await prisma_1.default.statistikSejarahS1.create({
                data: {
                    tahunPengalaman: String(statistik.tahunPengalaman),
                    alumni: String(statistik.alumni),
                    akreditasi: String(statistik.akreditasi),
                    tingkatKelulusan: String(statistik.tingkatKelulusan),
                    slogan: String(statistik.slogan),
                    deskripsi: String(statistik.deskripsi),
                },
            });
            return statistikSejarahS1;
        }
        catch (error) {
            console.error("Error in createStatistikSejarahS1:", error);
            throw error;
        }
    }
    async updateStatistikSejarahS1(id, statistik) {
        try {
            const updateData = {
                tahunPengalaman: String(statistik.tahunPengalaman),
                alumni: String(statistik.alumni),
                akreditasi: String(statistik.akreditasi),
                tingkatKelulusan: String(statistik.tingkatKelulusan),
                slogan: String(statistik.slogan),
                deskripsi: String(statistik.deskripsi),
            };
            const updatedStatistik = await prisma_1.default.statistikSejarahS1.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistik;
        }
        catch (error) {
            console.error("Error in updateStatistikSejarahS1:", error);
            throw error;
        }
    }
    async deleteStatistikSejarahS1(id) {
        try {
            const deletedData = await prisma_1.default.statistikSejarahS1.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikSejarahS1:", error);
            throw error;
        }
    }
    async getAllStatistikSejarahS1() {
        try {
            const statistikSejarahS1 = await prisma_1.default.statistikSejarahS1.findMany();
            return statistikSejarahS1;
        }
        catch (error) {
            console.error("Error in getAllStatistikSejarahS1:", error);
            throw error;
        }
    }
}
exports.default = new SejarahS1Service();
