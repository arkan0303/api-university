"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../db/prisma"));
class SuratKelakuanBaikService {
    async createSuratKelakuanBaik(data) {
        try {
            const suratKelakuanBaik = await prisma_1.default.suratKeteranganKelakuanBaik.create({
                data: {
                    idMahasiswa: Number(data.idMahasiswa),
                    deskripsi: data.deskripsi,
                    catatanAkademik: data.catatanAkademik,
                    catatanDisiplin: data.catatanDisiplin,
                    catatanOrganisasi: data.catatanOrganisasi,
                    penandaTangan: data.penandaTangan,
                    note: data.note,
                    noSurat: data.noSurat,
                    tanggalTerbit: data.tanggalTerbit,
                    berlakuHingga: data.berlakuHingga,
                    keperluan: data.keperluan,
                    status: data.status,
                },
            });
            return suratKelakuanBaik;
        }
        catch (error) {
            console.error("Error creating surat kelakuan baik:", error);
            throw error;
        }
    }
    async getAllSuratKelakuanBaik() {
        try {
            const suratKelakuanBaik = await prisma_1.default.suratKeteranganKelakuanBaik.findMany();
            // Ambil semua data mahasiswa
            const mahasiswa = await prisma_1.default.keteranganAktifMahasiswa.findMany();
            // Lakukan mapping manual
            const hasilMapping = suratKelakuanBaik.map((surat) => {
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
            console.error("Error getting surat kelakuan baik:", error);
            throw error;
        }
    }
    async updateSuratKelakuanBaik(id, data) {
        try {
            const updateData = {
                deskripsi: data.deskripsi,
                catatanAkademik: data.catatanAkademik,
                catatanDisiplin: data.catatanDisiplin,
                catatanOrganisasi: data.catatanOrganisasi,
                penandaTangan: data.penandaTangan,
                note: data.note,
                noSurat: data.noSurat,
                tanggalTerbit: data.tanggalTerbit,
                berlakuHingga: data.berlakuHingga,
                keperluan: data.keperluan,
                status: data.status,
            };
            const updatedSuratKelakuanBaik = await prisma_1.default.suratKeteranganKelakuanBaik.update({
                where: { id },
                data: updateData,
            });
            return updatedSuratKelakuanBaik;
        }
        catch (error) {
            console.error("Error updating surat kelakuan baik:", error);
            throw error;
        }
    }
    async deleteSuratKelakuanBaik(id) {
        try {
            const suratKelakuanBaik = await prisma_1.default.suratKeteranganKelakuanBaik.delete({
                where: { id },
            });
            return suratKelakuanBaik;
        }
        catch (error) {
            console.error("Error deleting surat kelakuan baik:", error);
            throw error;
        }
    }
    async getStatistikSuratKelakuanBaik() {
        try {
            const statistikSuratKelakuanBaik = await prisma_1.default.statistikSuratKelakuanBaik.findMany();
            return statistikSuratKelakuanBaik;
        }
        catch (error) {
            console.error("Error getting statistik surat kelakuan baik:", error);
            throw error;
        }
    }
    async updateStatistikSuratKelakuanBaik(id, data) {
        try {
            const updateData = {
                suratDiterbitkan: data.suratDiterbitkan,
                tingkatPersetujuan: data.tingkatPersetujuan,
                waktuProses: data.waktuProses,
                validasiTerjamin: data.validasiTerjamin,
                slogan: data.slogan,
                deskripsi: data.deskripsi,
            };
            const updatedStatistikSuratKelakuanBaik = await prisma_1.default.statistikSuratKelakuanBaik.update({
                where: { id },
                data: updateData,
            });
            return updatedStatistikSuratKelakuanBaik;
        }
        catch (error) {
            console.error("Error updating statistik surat kelakuan baik:", error);
            throw error;
        }
    }
    async createStatistikSuratKelakuanBaik(data) {
        try {
            const statistikSuratKelakuanBaik = await prisma_1.default.statistikSuratKelakuanBaik.create({
                data: {
                    suratDiterbitkan: data.suratDiterbitkan,
                    tingkatPersetujuan: data.tingkatPersetujuan,
                    waktuProses: data.waktuProses,
                    validasiTerjamin: data.validasiTerjamin,
                    slogan: data.slogan,
                    deskripsi: data.deskripsi,
                },
            });
            return statistikSuratKelakuanBaik;
        }
        catch (error) {
            console.error("Error creating statistik surat kelakuan baik:", error);
            throw error;
        }
    }
    async deleteStatistikSuratKelakuanBaik(id) {
        try {
            const statistikSuratKelakuanBaik = await prisma_1.default.statistikSuratKelakuanBaik.delete({
                where: { id },
            });
            return statistikSuratKelakuanBaik;
        }
        catch (error) {
            console.error("Error deleting statistik surat kelakuan baik:", error);
            throw error;
        }
    }
}
exports.default = new SuratKelakuanBaikService();
