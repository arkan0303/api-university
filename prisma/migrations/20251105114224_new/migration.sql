-- CreateTable
CREATE TABLE `Mahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nim` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NULL,
    `telepon` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `programStudi` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `ipk` DOUBLE NULL,
    `angkatan` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Aktif',
    `alamat` TEXT NULL,
    `tanggalLahir` DATETIME(3) NULL,
    `tempatLahir` VARCHAR(191) NULL,
    `jenisKelamin` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Mahasiswa_nim_key`(`nim`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Alumni` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `tahunLulus` INTEGER NOT NULL,
    `ipk` DOUBLE NOT NULL,
    `pekerjaanSaatIni` VARCHAR(191) NULL,
    `posisi` VARCHAR(191) NULL,
    `perusahaan` VARCHAR(191) NULL,
    `gaji` VARCHAR(191) NULL,
    `bidangKerja` VARCHAR(191) NULL,
    `waktuTunggu` VARCHAR(191) NULL,
    `alamatKerja` VARCHAR(191) NULL,
    `testimoni` TEXT NULL,
    `linkedin` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `telepon` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Alumni_mahasiswaId_key`(`mahasiswaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HeroSection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `subjudul` VARCHAR(191) NULL,
    `deskripsi` TEXT NOT NULL,
    `tombolTeks` VARCHAR(191) NULL,
    `tombolLink` VARCHAR(191) NULL,
    `backgroundImage` VARCHAR(191) NULL,
    `backgroundColor` VARCHAR(191) NULL,
    `textColor` VARCHAR(191) NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StatistikBeranda` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `label` VARCHAR(191) NOT NULL,
    `nilai` VARCHAR(191) NOT NULL,
    `ikon` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `urutan` INTEGER NOT NULL DEFAULT 0,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dosen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nidn` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telepon` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `pendidikan` VARCHAR(191) NOT NULL,
    `universitasAsal` VARCHAR(191) NULL,
    `keahlian` JSON NOT NULL,
    `jumlahPublikasi` INTEGER NOT NULL DEFAULT 0,
    `biografi` TEXT NOT NULL,
    `penghargaan` JSON NOT NULL,
    `minatPenelitian` JSON NOT NULL,
    `mataKuliah` JSON NOT NULL,
    `scholar` VARCHAR(191) NULL,
    `scopus` VARCHAR(191) NULL,
    `sinta` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Dosen_nidn_key`(`nidn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TenagaKependidikan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nip` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telepon` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `pendidikan` VARCHAR(191) NOT NULL,
    `keahlian` JSON NOT NULL,
    `pengalaman` VARCHAR(191) NOT NULL,
    `biografi` TEXT NOT NULL,
    `tugasUtama` JSON NOT NULL,
    `pencapaian` JSON NOT NULL,
    `pelatihan` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `TenagaKependidikan_nip_key`(`nip`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BidangOrganisasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `visi` TEXT NOT NULL,
    `foto` VARCHAR(191) NULL,
    `programKerja` JSON NOT NULL,
    `pencapaian` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnggotaOrganisasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bidangId` INTEGER NOT NULL,
    `mahasiswaId` INTEGER NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `tanggalBergabung` DATETIME(3) NOT NULL,
    `tanggalBerakhir` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnggotaDPM` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `visi` TEXT NOT NULL,
    `foto` VARCHAR(191) NULL,
    `programKerja` JSON NOT NULL,
    `pencapaian` JSON NOT NULL,
    `periode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AnggotaBEM` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `visi` TEXT NOT NULL,
    `foto` VARCHAR(191) NULL,
    `programKerja` JSON NOT NULL,
    `pencapaian` JSON NOT NULL,
    `periode` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Prestasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tingkat` VARCHAR(191) NOT NULL,
    `posisi` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `lokasi` VARCHAR(191) NOT NULL,
    `penyelenggara` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `dampak` TEXT NOT NULL,
    `keterampilan` JSON NOT NULL,
    `penghargaan` JSON NOT NULL,
    `foto` VARCHAR(191) NULL,
    `sertifikat` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Rekognisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tingkat` VARCHAR(191) NOT NULL,
    `tahun` INTEGER NOT NULL,
    `pemberi` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `dampak` TEXT NOT NULL,
    `kriteriaPenilaian` JSON NOT NULL,
    `manfaat` JSON NOT NULL,
    `berlakuHingga` DATETIME(3) NULL,
    `foto` VARCHAR(191) NULL,
    `sertifikat` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Seminar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `narasumber` VARCHAR(191) NOT NULL,
    `gelarNarasumber` VARCHAR(191) NOT NULL,
    `bioNarasumber` TEXT NOT NULL,
    `fotoNarasumber` VARCHAR(191) NULL,
    `emailNarasumber` VARCHAR(191) NULL,
    `teleponNarasumber` VARCHAR(191) NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `waktu` VARCHAR(191) NOT NULL,
    `lokasi` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `tujuanPembelajaran` JSON NOT NULL,
    `materi` JSON NOT NULL,
    `hasilDiharapkan` JSON NOT NULL,
    `kapasitasMaksimal` INTEGER NOT NULL,
    `biayaPendaftaran` INTEGER NOT NULL DEFAULT 0,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SeminarPeserta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seminarId` INTEGER NOT NULL,
    `mahasiswaId` INTEGER NOT NULL,
    `tanggalDaftar` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `statusKehadiran` VARCHAR(191) NOT NULL DEFAULT 'Terdaftar',
    `sertifikat` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SeminarPeserta_seminarId_mahasiswaId_key`(`seminarId`, `mahasiswaId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Magang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `perusahaan` VARCHAR(191) NOT NULL,
    `logoPerusahaan` VARCHAR(191) NULL,
    `profilPerusahaan` TEXT NOT NULL,
    `posisi` VARCHAR(191) NOT NULL,
    `divisi` VARCHAR(191) NOT NULL,
    `lokasi` VARCHAR(191) NOT NULL,
    `tanggalMulai` DATETIME(3) NOT NULL,
    `tanggalSelesai` DATETIME(3) NOT NULL,
    `durasi` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `tugasTanggungJawab` JSON NOT NULL,
    `keterampilan` JSON NOT NULL,
    `pencapaian` JSON NOT NULL,
    `namaPembimbing` VARCHAR(191) NOT NULL,
    `emailPembimbing` VARCHAR(191) NOT NULL,
    `teleponPembimbing` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `sertifikat` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Wirausaha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `namaUsaha` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tahunBerdiri` INTEGER NOT NULL,
    `jumlahKaryawan` INTEGER NOT NULL,
    `pendapatan` VARCHAR(191) NOT NULL,
    `lokasi` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `produkLayanan` JSON NOT NULL,
    `pencapaian` JSON NOT NULL,
    `tantangan` JSON NOT NULL,
    `rencanaMasaDepan` JSON NOT NULL,
    `website` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `telepon` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Beasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `pemberi` VARCHAR(191) NOT NULL,
    `jenis` VARCHAR(191) NOT NULL,
    `nominal` VARCHAR(191) NOT NULL,
    `durasi` VARCHAR(191) NOT NULL,
    `kuota` INTEGER NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `persyaratan` JSON NOT NULL,
    `manfaat` JSON NOT NULL,
    `batasPendaftaran` DATETIME(3) NOT NULL,
    `kontakPerson` VARCHAR(191) NOT NULL,
    `kontakEmail` VARCHAR(191) NOT NULL,
    `kontakTelepon` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PengajuanBeasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `beasiswaId` INTEGER NOT NULL,
    `mahasiswaId` INTEGER NOT NULL,
    `tanggalPengajuan` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NOT NULL DEFAULT 'Menunggu',
    `prioritas` VARCHAR(191) NOT NULL,
    `alasan` TEXT NOT NULL,
    `prestasi` JSON NOT NULL,
    `penghasilanOrtu` VARCHAR(191) NOT NULL,
    `pekerjaanOrtu` VARCHAR(191) NOT NULL,
    `dokumen` JSON NOT NULL,
    `catatan` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TracerStudy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sumber` VARCHAR(191) NOT NULL,
    `tahun` INTEGER NOT NULL,
    `totalLulusan` INTEGER NOT NULL,
    `totalResponden` INTEGER NOT NULL,
    `tingkatKeterserapan` DOUBLE NOT NULL,
    `rataRataGaji` VARCHAR(191) NOT NULL,
    `rataRataWaktuTunggu` VARCHAR(191) NOT NULL,
    `kesesuaianBidang` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JalurKarir` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tracerStudyId` INTEGER NOT NULL,
    `sektor` VARCHAR(191) NOT NULL,
    `persentase` DOUBLE NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `rataRataGaji` VARCHAR(191) NOT NULL,
    `contohInstitusi` JSON NOT NULL,
    `keterampilan` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RekapitulasiSurvey` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `programStudi` VARCHAR(191) NOT NULL,
    `angkatan` VARCHAR(191) NOT NULL,
    `totalMahasiswa` INTEGER NOT NULL,
    `totalResponden` INTEGER NOT NULL,
    `tingkatPartisipasi` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `KategoriRekapitulasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rekapitulasiId` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `totalField` INTEGER NOT NULL,
    `fieldTerisi` INTEGER NOT NULL,
    `tingkatKelengkapan` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuratMasuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `perihal` VARCHAR(191) NOT NULL,
    `pengirim` VARCHAR(191) NOT NULL,
    `instansiPengirim` VARCHAR(191) NOT NULL,
    `tanggalDiterima` DATETIME(3) NOT NULL,
    `prioritas` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Baru',
    `kategori` VARCHAR(191) NOT NULL,
    `isiSurat` TEXT NOT NULL,
    `lampiran` JSON NOT NULL,
    `disposisi` TEXT NULL,
    `catatan` TEXT NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuratMasuk_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuratKeluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `perihal` VARCHAR(191) NOT NULL,
    `penerima` VARCHAR(191) NOT NULL,
    `instansiPenerima` VARCHAR(191) NOT NULL,
    `tanggalKirim` DATETIME(3) NOT NULL,
    `prioritas` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Draft',
    `kategori` VARCHAR(191) NOT NULL,
    `isiSurat` TEXT NOT NULL,
    `lampiran` JSON NOT NULL,
    `namaPengirim` VARCHAR(191) NOT NULL,
    `jabatanPengirim` VARCHAR(191) NOT NULL,
    `catatan` TEXT NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuratKeluar_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuratKeteranganAktif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `keperluan` VARCHAR(191) NOT NULL,
    `tanggalTerbit` DATETIME(3) NOT NULL,
    `berlakuHingga` DATETIME(3) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Aktif',
    `isiSurat` TEXT NOT NULL,
    `namaPenandatangan` VARCHAR(191) NOT NULL,
    `jabatanPenandatangan` VARCHAR(191) NOT NULL,
    `catatan` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuratKeteranganAktif_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IzinPenelitian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `judulPenelitian` VARCHAR(191) NOT NULL,
    `lokasi` VARCHAR(191) NOT NULL,
    `alamatLokasi` VARCHAR(191) NOT NULL,
    `kontakLokasi` VARCHAR(191) NOT NULL,
    `tanggalMulai` DATETIME(3) NOT NULL,
    `tanggalSelesai` DATETIME(3) NOT NULL,
    `durasi` VARCHAR(191) NOT NULL,
    `tanggalTerbit` DATETIME(3) NOT NULL,
    `prioritas` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Aktif',
    `deskripsi` TEXT NOT NULL,
    `tujuanPenelitian` JSON NOT NULL,
    `metodePenelitian` JSON NOT NULL,
    `hasilDiharapkan` JSON NOT NULL,
    `namaPembimbing` VARCHAR(191) NOT NULL,
    `nidnPembimbing` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `catatan` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `IzinPenelitian_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SuratKelakuan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaId` INTEGER NOT NULL,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `kelakuan` VARCHAR(191) NOT NULL,
    `keperluan` VARCHAR(191) NOT NULL,
    `tanggalTerbit` DATETIME(3) NOT NULL,
    `isiSurat` TEXT NOT NULL,
    `catatanAkademik` JSON NOT NULL,
    `catatanDisiplin` JSON NOT NULL,
    `catatanOrganisasi` JSON NOT NULL,
    `namaPenandatangan` VARCHAR(191) NOT NULL,
    `jabatanPenandatangan` VARCHAR(191) NOT NULL,
    `catatan` TEXT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `SuratKelakuan_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Kekhususan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `totalSKS` INTEGER NOT NULL,
    `totalMahasiswa` INTEGER NOT NULL,
    `tingkatKelulusan` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Kekhususan_nama_key`(`nama`),
    UNIQUE INDEX `Kekhususan_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MataKuliahKekhususan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kekhususanId` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `kode` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `sks` INTEGER NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `topikBahasan` JSON NOT NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProspekKarir` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kekhususanId` INTEGER NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `persyaratan` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProgramLBKH` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `deskripsi` TEXT NOT NULL,
    `targetAudiens` JSON NOT NULL,
    `durasi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Alumni` ADD CONSTRAINT `Alumni_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnggotaOrganisasi` ADD CONSTRAINT `AnggotaOrganisasi_bidangId_fkey` FOREIGN KEY (`bidangId`) REFERENCES `BidangOrganisasi`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnggotaOrganisasi` ADD CONSTRAINT `AnggotaOrganisasi_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnggotaDPM` ADD CONSTRAINT `AnggotaDPM_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `AnggotaBEM` ADD CONSTRAINT `AnggotaBEM_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Prestasi` ADD CONSTRAINT `Prestasi_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeminarPeserta` ADD CONSTRAINT `SeminarPeserta_seminarId_fkey` FOREIGN KEY (`seminarId`) REFERENCES `Seminar`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SeminarPeserta` ADD CONSTRAINT `SeminarPeserta_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Magang` ADD CONSTRAINT `Magang_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Wirausaha` ADD CONSTRAINT `Wirausaha_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PengajuanBeasiswa` ADD CONSTRAINT `PengajuanBeasiswa_beasiswaId_fkey` FOREIGN KEY (`beasiswaId`) REFERENCES `Beasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `PengajuanBeasiswa` ADD CONSTRAINT `PengajuanBeasiswa_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JalurKarir` ADD CONSTRAINT `JalurKarir_tracerStudyId_fkey` FOREIGN KEY (`tracerStudyId`) REFERENCES `TracerStudy`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `KategoriRekapitulasi` ADD CONSTRAINT `KategoriRekapitulasi_rekapitulasiId_fkey` FOREIGN KEY (`rekapitulasiId`) REFERENCES `RekapitulasiSurvey`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuratKeteranganAktif` ADD CONSTRAINT `SuratKeteranganAktif_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `IzinPenelitian` ADD CONSTRAINT `IzinPenelitian_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SuratKelakuan` ADD CONSTRAINT `SuratKelakuan_mahasiswaId_fkey` FOREIGN KEY (`mahasiswaId`) REFERENCES `Mahasiswa`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MataKuliahKekhususan` ADD CONSTRAINT `MataKuliahKekhususan_kekhususanId_fkey` FOREIGN KEY (`kekhususanId`) REFERENCES `Kekhususan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProspekKarir` ADD CONSTRAINT `ProspekKarir_kekhususanId_fkey` FOREIGN KEY (`kekhususanId`) REFERENCES `Kekhususan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
