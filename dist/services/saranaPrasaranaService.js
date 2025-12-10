"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SaranaPrasaranaService {
    async createSaranaPrasarana(saranaPrasarana) {
        try {
            let galeriData = [];
            if (saranaPrasarana.foto && saranaPrasarana.foto.length > 0) {
                const uploadedUrls = await Promise.all(saranaPrasarana.foto.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const saranaPrasaranaa = await prisma_1.default.saranaPrasarana.create({
                data: {
                    judul: saranaPrasarana.judul,
                    katagori: saranaPrasarana.katagori,
                    deskripsi: saranaPrasarana.deskripsi,
                    foto: galeriData,
                },
            });
            return saranaPrasaranaa;
        }
        catch (error) {
            console.error("Error in createSaranaPrasarana:", error);
            throw error;
        }
    }
    async getAllSaranaPrasarana() {
        try {
            const saranaPrasarana = await prisma_1.default.saranaPrasarana.findMany();
            return saranaPrasarana;
        }
        catch (error) {
            console.error("Error in getAllSaranaPrasarana:", error);
            throw error;
        }
    }
    async updateSaranaPrasarana(id, saranaPrasarana) {
        try {
            const updateData = {
                judul: saranaPrasarana.judul,
                katagori: saranaPrasarana.katagori,
                deskripsi: saranaPrasarana.deskripsi,
                foto: saranaPrasarana.foto,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (saranaPrasarana.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(saranaPrasarana.foto.buffer);
                updateData.foto = fotoUrl;
            }
            const updatedSaranaPrasarana = await prisma_1.default.saranaPrasarana.update({
                where: { id },
                data: updateData,
            });
            return updatedSaranaPrasarana;
        }
        catch (error) {
            console.error("Error in updateSaranaPrasarana:", error);
            throw error;
        }
    }
    async deleteSaranaPrasarana(id) {
        try {
            const deletedData = await prisma_1.default.saranaPrasarana.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createBannerSaranaPrasarana(bannerSaranaPrasarana) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(bannerSaranaPrasarana.banner.buffer);
            const bannerSaranaPrasaranaa = await prisma_1.default.saranaPrasaranaBanner.create({
                data: {
                    banner: fotoUrl,
                    konten: bannerSaranaPrasarana.konten,
                },
            });
            return bannerSaranaPrasaranaa;
        }
        catch (error) {
            console.error("Error in createBannerSaranaPrasarana:", error);
            throw error;
        }
    }
    async updateBannerSaranaPrasarana(id, bannerSaranaPrasarana) {
        try {
            const updateData = {
                konten: bannerSaranaPrasarana.konten,
            };
            // Hanya upload banner baru jika ada file yang diunggah
            if (bannerSaranaPrasarana.banner) {
                const bannerUrl = await (0, cloudinary_1.uploadToCloudinary)(bannerSaranaPrasarana.banner.buffer);
                updateData.banner = bannerUrl;
            }
            const updatedBanner = await prisma_1.default.saranaPrasaranaBanner.update({
                where: { id },
                data: updateData,
            });
            return updatedBanner;
        }
        catch (error) {
            console.error("Error in updateBannerSaranaPrasarana:", error);
            throw error;
        }
    }
    async deleteBannerSaranaPrasarana(id) {
        try {
            const deletedData = await prisma_1.default.saranaPrasaranaBanner.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteBannerSaranaPrasarana:", error);
            throw error;
        }
    }
    async getDataBanner() {
        try {
            const dataBanner = await prisma_1.default.saranaPrasaranaBanner.findMany();
            return dataBanner;
        }
        catch (error) {
            console.error("Error in getDataBanner:", error);
            throw error;
        }
    }
    async createStatistikSaranaPrasarana(statistik) {
        try {
            const statistikSejarahS1 = await prisma_1.default.statistikSaranaPrasarana.create({
                data: {
                    ruangKuliah: String(statistik.ruangKuliah),
                    koleksiBuku: String(statistik.koleksiBuku),
                    unitKomputer: String(statistik.unitKomputer),
                    lantaiGedung: String(statistik.lantaiGedung),
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
    async updateStatistikSaranaPrasarana(id, statistik) {
        try {
            const updateData = {
                ruangKuliah: String(statistik.ruangKuliah),
                koleksiBuku: String(statistik.koleksiBuku),
                unitKomputer: String(statistik.unitKomputer),
                lantaiGedung: String(statistik.lantaiGedung),
                slogan: String(statistik.slogan),
                deskripsi: String(statistik.deskripsi),
            };
            const updatedStatistik = await prisma_1.default.statistikSaranaPrasarana.update({
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
    async deleteStatistikSaranaPrasarana(id) {
        try {
            const deletedData = await prisma_1.default.statistikSaranaPrasarana.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteStatistikSejarahS1:", error);
            throw error;
        }
    }
    async getAllStatistikSaranaPrasarana() {
        try {
            const statistikSejarahS1 = await prisma_1.default.statistikSaranaPrasarana.findMany();
            return statistikSejarahS1;
        }
        catch (error) {
            console.error("Error in getAllStatistikSejarahS1:", error);
            throw error;
        }
    }
}
exports.default = new SaranaPrasaranaService();
