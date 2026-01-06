"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class DaftarDosenService {
    async createDaftarDosen(data) {
        try {
            const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
            const ahliUrl = data.ahli
                ? await (0, cloudinary_1.uploadToCloudinary)(data.ahli.buffer)
                : null;
            const createDosen = await prisma_1.default.daftarDosen.create({
                data: {
                    foto: fotoUrl,
                    nama: data.nama,
                    jabatan: data.jabatan,
                    nidn: data.nidn,
                    deskripsi: data.deskripsi,
                    riwayatPendidikan: data.riwayatPendidikan,
                    keahlian: data.keahlian,
                    prestasi: data.prestasi,
                    publikasi: data.publikasi,
                    email: data.email,
                    noTelp: data.noTelp,
                    nuptk: data.nuptk,
                    nik: data.nik,
                    id_sinta: data.id_sinta,
                    tahun_publikasi: data.tahun_publikasi,
                    ahli: ahliUrl,
                    jabatan_akademik: data.jabatan_akademik,
                    link_sinta: data.link_sinta,
                    link_ppdikti: data.link_ppdikti,
                    urutan: data.urutan,
                    jabatan_struktural: data.jabatan_struktural,
                },
            });
            return createDosen;
        }
        catch (error) {
            throw error;
        }
    }
    async getAllDaftarDosen() {
        try {
            const getAllDosen = await prisma_1.default.daftarDosen.findMany();
            return getAllDosen;
        }
        catch (error) {
            throw error;
        }
    }
    async updateDaftarDosen(id, data) {
        try {
            const updateData = {
                nama: data.nama,
                jabatan: data.jabatan,
                nidn: data.nidn,
                deskripsi: data.deskripsi,
                riwayatPendidikan: data.riwayatPendidikan,
                keahlian: data.keahlian,
                prestasi: data.prestasi,
                publikasi: data.publikasi,
                email: data.email,
                noTelp: data.noTelp,
                nuptk: data.nuptk,
                nik: data.nik,
                id_sinta: data.id_sinta,
                tahun_publikasi: data.tahun_publikasi,
                jabatan_akademik: data.jabatan_akademik,
                link_sinta: data.link_sinta,
                link_ppdikti: data.link_ppdikti,
                urutan: data.urutan,
                jabatan_struktural: data.jabatan_struktural,
            };
            // Hanya upload foto baru jika ada file yang diunggah
            if (data.foto) {
                const fotoUrl = await (0, cloudinary_1.uploadToCloudinary)(data.foto.buffer);
                updateData.foto = fotoUrl;
            }
            if (data.ahli) {
                const ahliUrl = await (0, cloudinary_1.uploadToCloudinary)(data.ahli.buffer);
                updateData.ahli = ahliUrl;
            }
            const updatedDaftarDosen = await prisma_1.default.daftarDosen.update({
                where: { id },
                data: updateData,
            });
            return updatedDaftarDosen;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteDaftarDosenById(id) {
        try {
            const deletedDaftarDosen = await prisma_1.default.daftarDosen.delete({
                where: { id },
            });
            return deletedDaftarDosen;
        }
        catch (error) {
            throw error;
        }
    }
    async getStatistikDaftarDosen() {
        try {
            const getAllDosen = await prisma_1.default.statistikDaftarDosen.findMany();
            return getAllDosen;
        }
        catch (error) {
            throw error;
        }
    }
    async createStatistikDaftarDosen(data) {
        try {
            const createStatistik = await prisma_1.default.statistikDaftarDosen.create({
                data: {
                    totalDosen: data.totalDosen,
                    profesor: data.profesor,
                    doktor: data.doktor,
                    publiikasiPerTahun: data.publiikasiPerTahun,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return createStatistik;
        }
        catch (error) {
            throw error;
        }
    }
    async updateStatistikDaftarDosen(id, data) {
        // Gunakan any untuk sementara
        try {
            const updateData = {
                totalDosen: data.totalDosen,
                profesor: data.profesor,
                doktor: data.doktor,
                // Perbaiki ejaan disini
                publiikasiPerTahun: data.publiikasiPerTahun, // Sesuaikan dengan ejaan di frontend
                // Atau ubah di frontend untuk menggunakan 'publikasiPerTahun' (dengan satu 'i')
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistik = await prisma_1.default.statistikDaftarDosen.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistik;
        }
        catch (error) {
            console.error("Error in updateStatistikDaftarDosen:", error); // Tambahkan log error
            throw error;
        }
    }
    async deleteStatistikDaftarDosenById(id) {
        try {
            const deletedStatistik = await prisma_1.default.statistikDaftarDosen.delete({
                where: { id },
            });
            return deletedStatistik;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = new DaftarDosenService();
