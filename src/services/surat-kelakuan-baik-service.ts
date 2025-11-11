import prisma from "../db/prisma";

interface SuratKeteranganKelakuanBaik {
  idMahasiswa: number;
  deskripsi: string;
  catatanAkademik: string;
  catatanDisiplin: string;
  catatanOrganisasi: string;
  penandaTangan: string;
  note: string;
  noSurat: string;
  tanggalTerbit: string;
  berlakuHingga: string;
  keperluan: string;
  status: string;
}

interface StatistikSuratKelakuanBaik {
  suratDiterbitkan: string;
  tingkatPersetujuan: string;
  waktuProses: string;
  validasiTerjamin: string;
  slogan: string;
  deskripsi: string;
}

class SuratKelakuanBaikService {
  async createSuratKelakuanBaik(data: SuratKeteranganKelakuanBaik) {
    try {
      const suratKelakuanBaik = await prisma.suratKeteranganKelakuanBaik.create(
        {
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
        }
      );
      return suratKelakuanBaik;
    } catch (error) {
      console.error("Error creating surat kelakuan baik:", error);
      throw error;
    }
  }

  async getAllSuratKelakuanBaik() {
    try {
      const suratKelakuanBaik =
        await prisma.suratKeteranganKelakuanBaik.findMany();
      // Ambil semua data mahasiswa
      const mahasiswa = await prisma.keteranganAktifMahasiswa.findMany();

      // Lakukan mapping manual
      const hasilMapping = suratKelakuanBaik.map((surat: any) => {
        const dataMahasiswa = mahasiswa.find(
          (mhs) => mhs.id === surat.idMahasiswa
        );

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
    } catch (error) {
      console.error("Error getting surat kelakuan baik:", error);
      throw error;
    }
  }

  async updateSuratKelakuanBaik(id: number, data: SuratKeteranganKelakuanBaik) {
    try {
      const updateData: any = {
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
      const updatedSuratKelakuanBaik =
        await prisma.suratKeteranganKelakuanBaik.update({
          where: { id },
          data: updateData,
        });
      return updatedSuratKelakuanBaik;
    } catch (error) {
      console.error("Error updating surat kelakuan baik:", error);
      throw error;
    }
  }

  async deleteSuratKelakuanBaik(id: number) {
    try {
      const suratKelakuanBaik = await prisma.suratKeteranganKelakuanBaik.delete(
        {
          where: { id },
        }
      );
      return suratKelakuanBaik;
    } catch (error) {
      console.error("Error deleting surat kelakuan baik:", error);
      throw error;
    }
  }

  async getStatistikSuratKelakuanBaik() {
    try {
      const statistikSuratKelakuanBaik =
        await prisma.statistikSuratKelakuanBaik.findMany();
      return statistikSuratKelakuanBaik;
    } catch (error) {
      console.error("Error getting statistik surat kelakuan baik:", error);
      throw error;
    }
  }

  async updateStatistikSuratKelakuanBaik(
    id: number,
    data: StatistikSuratKelakuanBaik
  ) {
    try {
      const updateData: any = {
        suratDiterbitkan: data.suratDiterbitkan,
        tingkatPersetujuan: data.tingkatPersetujuan,
        waktuProses: data.waktuProses,
        validasiTerjamin: data.validasiTerjamin,
        slogan: data.slogan,
        deskripsi: data.deskripsi,
      };
      const updatedStatistikSuratKelakuanBaik =
        await prisma.statistikSuratKelakuanBaik.update({
          where: { id },
          data: updateData,
        });
      return updatedStatistikSuratKelakuanBaik;
    } catch (error) {
      console.error("Error updating statistik surat kelakuan baik:", error);
      throw error;
    }
  }

  async createStatistikSuratKelakuanBaik(data: StatistikSuratKelakuanBaik) {
    try {
      const statistikSuratKelakuanBaik =
        await prisma.statistikSuratKelakuanBaik.create({
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
    } catch (error) {
      console.error("Error creating statistik surat kelakuan baik:", error);
      throw error;
    }
  }

  async deleteStatistikSuratKelakuanBaik(id: number) {
    try {
      const statistikSuratKelakuanBaik =
        await prisma.statistikSuratKelakuanBaik.delete({
          where: { id },
        });
      return statistikSuratKelakuanBaik;
    } catch (error) {
      console.error("Error deleting statistik surat kelakuan baik:", error);
      throw error;
    }
  }
}

export default new SuratKelakuanBaikService();
