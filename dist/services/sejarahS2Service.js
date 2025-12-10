"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SejarahS2Service {
    async createSejarahS2(sejarah) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(sejarah.foto.buffer);
            const sejarahS2 = await prisma_1.default.sejarah_S2.create({
                data: {
                    judul: sejarah.judul,
                    tahun: sejarah.tahun,
                    deskripsi: sejarah.deskripsi,
                    foto: fotoUrl,
                    // urutan: parseInt(sejarah.urutan),
                },
            });
            return sejarahS2;
        }
        catch (error) {
            console.error("Error in createSejarahS2:", error);
            throw error;
        }
    }
    async getAllSejarahS2() {
        try {
            const sejarahS2 = await prisma_1.default.sejarah_S2.findMany();
            return sejarahS2;
        }
        catch (error) {
            console.error("Error in getAllSejarahS2:", error);
            throw error;
        }
    }
    async updateSejarahS2(id, sejarah) {
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
            const sejarahS2 = await prisma_1.default.sejarah_S2.update({
                where: { id },
                data: updateData,
            });
            return sejarahS2;
        }
        catch (error) {
            console.error("Error in updateSejarahS1:", error);
            throw error;
        }
    }
    async deleteData(id) {
        try {
            const deletedData = await prisma_1.default.sejarah_S2.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createSejarahS2Banner(banner, konten) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(banner.buffer);
            const sejarahS2Banner = await prisma_1.default.sejarahS2.create({
                data: {
                    banner: fotoUrl,
                    konten: konten,
                },
            });
            return sejarahS2Banner;
        }
        catch (error) {
            console.error("Error in createSejarahS2Banner:", error);
            throw error;
        }
    }
    async updateSejarahS2Banner(id, data) {
        try {
            const updateData = {
                konten: data.konten,
            };
            // Hanya upload banner baru jika ada file yang diunggah
            if (data.banner) {
                const bannerUrl = await (0, cloudinary_1.uploadToCloudinary)(data.banner.buffer);
                updateData.banner = bannerUrl;
            }
            const updatedBanner = await prisma_1.default.sejarahS2.update({
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
            const deletedData = await prisma_1.default.sejarahS2.delete({
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
            const dataBanner = await prisma_1.default.sejarahS2.findMany();
            return dataBanner;
        }
        catch (error) {
            console.error("Error in getDataBanner:", error);
            throw error;
        }
    }
    async createStatistikSejarahS2(statistik) {
        try {
            const statistikSejarahS2 = await prisma_1.default.statistikSejarahS2.create({
                data: {
                    tahunPengalaman: String(statistik.tahunPengalaman),
                    alumni: String(statistik.alumni),
                    akreditasi: String(statistik.akreditasi),
                    tingkatKelulusan: String(statistik.tingkatKelulusan),
                    slogan: String(statistik.slogan),
                    deskripsi: String(statistik.deskripsi),
                },
            });
            return statistikSejarahS2;
        }
        catch (error) {
            console.error("Error in createStatistikSejarahS2:", error);
            throw error;
        }
    }
    async updateStatistikSejarahS2(id, statistik) {
        try {
            const updateData = {
                tahunPengalaman: String(statistik.tahunPengalaman),
                alumni: String(statistik.alumni),
                akreditasi: String(statistik.akreditasi),
                tingkatKelulusan: String(statistik.tingkatKelulusan),
                slogan: String(statistik.slogan),
                deskripsi: String(statistik.deskripsi),
            };
            const updatedStatistik = await prisma_1.default.statistikSejarahS2.update({
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
    async deleteStatistikSejarahS2(id) {
        try {
            const deletedData = await prisma_1.default.statistikSejarahS2.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikSejarahS1:", error);
            throw error;
        }
    }
    async getAllStatistikSejarahS2() {
        try {
            const statistikSejarahS2 = await prisma_1.default.statistikSejarahS2.findMany();
            return statistikSejarahS2;
        }
        catch (error) {
            console.error("Error in getAllStatistikSejarahS1:", error);
            throw error;
        }
    }
}
exports.default = new SejarahS2Service();
