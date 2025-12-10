"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
const cloudinary_1 = require("../utils/cloudinary");
class SuratPengajuanBeasiswaService {
    async createSuratPengajuanBeasiswa(data) {
        try {
            let galeriData = [];
            if (data.dokumen && data.dokumen.length > 0) {
                const uploadedUrls = await Promise.all(data.dokumen.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            const suratPengajuanBeasiswa = await prisma_1.default.suratPengajuanBeasiswa.create({
                data: {
                    idMahasiswa: Number(data.idMahasiswa),
                    beasiswa: data.beasiswa,
                    noSurat: data.noSurat,
                    tanggalPengajuan: data.tanggalPengajuan,
                    provider: data.provider,
                    nominalPerSemester: data.nominalPerSemester,
                    alasanPengajuan: data.alasanPengajuan,
                    prestasi: data.prestasi,
                    namaAyah: data.namaAyah,
                    namaIbu: data.namaIbu,
                    penghasilanOrangtua: data.penghasilanOrangtua,
                    dokumen: galeriData,
                    alamat: data.alamat,
                    email: data.email,
                    kontak: data.kontak,
                    note: data.note,
                    status: data.status,
                },
            });
            return suratPengajuanBeasiswa;
        }
        catch (error) {
            console.error("Error creating surat pengajuan beasiswa:", error);
            throw error;
        }
    }
    async getAllSuratPengajuanBeasiswa() {
        try {
            const suratPengajuanBeasiswa = await prisma_1.default.suratPengajuanBeasiswa.findMany();
            // Ambil semua data mahasiswa
            const mahasiswa = await prisma_1.default.keteranganAktifMahasiswa.findMany();
            // Lakukan mapping manual
            const hasilMapping = suratPengajuanBeasiswa.map((surat) => {
                const dataMahasiswa = mahasiswa.find((mhs) => mhs.id === surat.idMahasiswa);
                return {
                    ...surat,
                    mahasiswa: dataMahasiswa
                        ? {
                            id: dataMahasiswa.id,
                            nama: dataMahasiswa.nama,
                            nim: dataMahasiswa.nim,
                            jurusan: dataMahasiswa.jurusan,
                            semester: dataMahasiswa.semester,
                            ipk: dataMahasiswa.ipk,
                            foto: dataMahasiswa.foto,
                            tahunAkademik: dataMahasiswa.tahunAkademik,
                        }
                        : null,
                };
            });
            return hasilMapping;
        }
        catch (error) {
            console.error("Error fetching surat pengajuan beasiswa:", error);
            throw error;
        }
    }
    async updateSuratPengajuanBeasiswa(id, suratPengajuanBeasiswa) {
        try {
            const updateData = {
                idMahasiswa: Number(suratPengajuanBeasiswa.idMahasiswa),
                beasiswa: suratPengajuanBeasiswa.beasiswa,
                noSurat: suratPengajuanBeasiswa.noSurat,
                tanggalPengajuan: suratPengajuanBeasiswa.tanggalPengajuan,
                provider: suratPengajuanBeasiswa.provider,
                nominalPerSemester: suratPengajuanBeasiswa.nominalPerSemester,
                alasanPengajuan: suratPengajuanBeasiswa.alasanPengajuan,
                prestasi: suratPengajuanBeasiswa.prestasi,
                namaAyah: suratPengajuanBeasiswa.namaAyah,
                namaIbu: suratPengajuanBeasiswa.namaIbu,
                penghasilanOrangtua: suratPengajuanBeasiswa.penghasilanOrangtua,
                alamat: suratPengajuanBeasiswa.alamat,
                email: suratPengajuanBeasiswa.email,
                kontak: suratPengajuanBeasiswa.kontak,
                note: suratPengajuanBeasiswa.note,
                status: suratPengajuanBeasiswa.status,
                dokumen: suratPengajuanBeasiswa.dokumen,
            };
            let galeriData = [];
            if (suratPengajuanBeasiswa.dokumen &&
                suratPengajuanBeasiswa.dokumen.length > 0) {
                const uploadedUrls = await Promise.all(suratPengajuanBeasiswa.dokumen.map((file) => (0, cloudinary_1.uploadToCloudinary)(file.buffer)));
                galeriData = uploadedUrls;
            }
            updateData.dokumen = galeriData;
            console.log(updateData);
            const updatedSuratPengajuanBeasiswa = await prisma_1.default.suratPengajuanBeasiswa.update({
                where: { id },
                data: updateData,
            });
            return updatedSuratPengajuanBeasiswa;
        }
        catch (error) {
            console.error("Error in updateSuratPengajuanBeasiswa:", error);
            throw error;
        }
    }
    async deleteSuratPengajuanBeasiswa(id) {
        try {
            const deletedData = await prisma_1.default.suratPengajuanBeasiswa.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async getStatistikSuratPengajuanBeasiswa() {
        try {
            const statistikSuratPengajuanBeasiswa = await prisma_1.default.statistikSuratPengajuanBeasiswa.findMany();
            return statistikSuratPengajuanBeasiswa;
        }
        catch (error) {
            console.error("Error getting statistik surat pengajuan beasiswa:", error);
            throw error;
        }
    }
    async updateStatistikSuratPengajuanBeasiswa(id, statistikSuratPengajuanBeasiswa) {
        try {
            const updatedStatistikSuratPengajuanBeasiswa = await prisma_1.default.statistikSuratPengajuanBeasiswa.update({
                where: { id },
                data: statistikSuratPengajuanBeasiswa,
            });
            return updatedStatistikSuratPengajuanBeasiswa;
        }
        catch (error) {
            console.error("Error in updateStatistikSuratPengajuanBeasiswa:", error);
            throw error;
        }
    }
    async deleteStatistikSuratPengajuanBeasiswa(id) {
        try {
            const deletedData = await prisma_1.default.statistikSuratPengajuanBeasiswa.delete({
                where: { id },
            });
            return deletedData;
        }
        catch (error) {
            console.error("Error in deleteData:", error);
            throw error;
        }
    }
    async createStatistikSuratPengajuanBeasiswa(statistikSuratPengajuanBeasiswa) {
        try {
            const createdStatistikSuratPengajuanBeasiswa = await prisma_1.default.statistikSuratPengajuanBeasiswa.create({
                data: statistikSuratPengajuanBeasiswa,
            });
            return createdStatistikSuratPengajuanBeasiswa;
        }
        catch (error) {
            console.error("Error in createStatistikSuratPengajuanBeasiswa:", error);
            throw error;
        }
    }
}
exports.default = new SuratPengajuanBeasiswaService();
