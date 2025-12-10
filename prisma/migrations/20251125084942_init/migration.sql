-- CreateTable
CREATE TABLE `herosection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikberanda` (
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
CREATE TABLE `dosen` (
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
    `biografi` VARCHAR(191) NOT NULL,
    `penghargaan` JSON NOT NULL,
    `minatPenelitian` JSON NOT NULL,
    `mataKuliah` JSON NOT NULL,
    `scholar` VARCHAR(191) NULL,
    `scopus` VARCHAR(191) NULL,
    `sinta` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `dosen_nidn_key`(`nidn`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rekognisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tingkat` VARCHAR(191) NOT NULL,
    `tahun` INTEGER NOT NULL,
    `pemberi` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `dampak` VARCHAR(191) NOT NULL,
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
CREATE TABLE `rekapitulasisurvey` (
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
CREATE TABLE `kategorirekapitulasi` (
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
CREATE TABLE `suratmasuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `perihal` VARCHAR(191) NOT NULL,
    `pengirim` VARCHAR(191) NOT NULL,
    `instansiPengirim` VARCHAR(191) NOT NULL,
    `tanggalDiterima` DATETIME(3) NOT NULL,
    `prioritas` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Baru',
    `kategori` VARCHAR(191) NOT NULL,
    `isiSurat` VARCHAR(191) NOT NULL,
    `lampiran` JSON NOT NULL,
    `disposisi` VARCHAR(191) NULL,
    `catatan` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `suratmasuk_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suratkeluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nomorSurat` VARCHAR(191) NOT NULL,
    `perihal` VARCHAR(191) NOT NULL,
    `penerima` VARCHAR(191) NOT NULL,
    `instansiPenerima` VARCHAR(191) NOT NULL,
    `tanggalKirim` DATETIME(3) NOT NULL,
    `prioritas` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'Draft',
    `kategori` VARCHAR(191) NOT NULL,
    `isiSurat` VARCHAR(191) NOT NULL,
    `lampiran` JSON NOT NULL,
    `namaPengirim` VARCHAR(191) NOT NULL,
    `jabatanPengirim` VARCHAR(191) NOT NULL,
    `catatan` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `suratkeluar_nomorSurat_key`(`nomorSurat`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kekhususan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `totalSKS` INTEGER NOT NULL,
    `totalMahasiswa` INTEGER NOT NULL,
    `tingkatKelulusan` DOUBLE NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `kekhususan_nama_key`(`nama`),
    UNIQUE INDEX `kekhususan_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `matakuliahkekhususan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kekhususanId` INTEGER NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `kode` VARCHAR(191) NOT NULL,
    `semester` INTEGER NOT NULL,
    `sks` INTEGER NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `topikBahasan` JSON NOT NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sejarah_s1` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `tahun` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sejarahs1` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `banner` VARCHAR(191) NULL,
    `konten` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksejarahs1` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahunPengalaman` VARCHAR(191) NULL,
    `alumni` VARCHAR(191) NULL,
    `akreditasi` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sejarah_s2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `tahun` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sejarahs2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `banner` VARCHAR(191) NULL,
    `konten` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksejarahs2` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahunPengalaman` VARCHAR(191) NULL,
    `alumni` VARCHAR(191) NULL,
    `akreditasi` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saranaprasarana` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `katagori` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `foto` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saranaprasaranabanner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `banner` VARCHAR(191) NULL,
    `konten` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksaranaprasarana` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ruangKuliah` VARCHAR(191) NULL,
    `koleksiBuku` VARCHAR(191) NULL,
    `unitKomputer` VARCHAR(191) NULL,
    `lantaiGedung` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rencanastrategis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` VARCHAR(191) NULL,
    `judul` VARCHAR(191) NOT NULL,
    `katagori` JSON NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `foto` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikrencanastrategis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahunRencana` VARCHAR(191) NULL,
    `targetStrategis` VARCHAR(191) NULL,
    `programAksi` VARCHAR(191) NULL,
    `targetAkreditas` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `senatfakultas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `keahlian` VARCHAR(191) NULL,
    `periode` VARCHAR(191) NULL,
    `tugas` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `galeri` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksenatfakultas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anggotaSenat` VARCHAR(191) NULL,
    `tahunPeriode` VARCHAR(191) NULL,
    `rapatPerTahun` VARCHAR(191) NULL,
    `keputusan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visimisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `gambar` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikvisimisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahunPengalaman` VARCHAR(191) NULL,
    `alumni` VARCHAR(191) NULL,
    `dosenBerkualitas` VARCHAR(191) NULL,
    `ProgramUnggula` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `strukturorganisasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jabatan` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikstrukturorganisasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pimpinan` VARCHAR(191) NULL,
    `bagianUtama` VARCHAR(191) NULL,
    `tenagaPendidikan` VARCHAR(191) NULL,
    `dosenTetap` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pimpinan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `pendidikan` JSON NULL,
    `keahlian` JSON NULL,
    `periode` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `kontak` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikpimpinan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pimpinan` VARCHAR(191) NULL,
    `tahunPengalaman` VARCHAR(191) NULL,
    `publikasiIlmiah` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `programsarjanahukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` JSON NULL,
    `semester` VARCHAR(191) NULL,
    `judul` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikprogramsarjanahukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `semester` VARCHAR(191) NULL,
    `sksTotal` VARCHAR(191) NULL,
    `akreditasi` VARCHAR(191) NULL,
    `alumni` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prospekkarirsarjanahukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `programmagisterhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `image` JSON NULL,
    `semester` VARCHAR(191) NULL,
    `judul` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikprogrammagisterhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `semester` VARCHAR(191) NULL,
    `sksTotal` VARCHAR(191) NULL,
    `akreditasi` VARCHAR(191) NULL,
    `alumni` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prospekkarirmagisterhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `arsipsuratmasuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `pengirim` VARCHAR(191) NULL,
    `penerima` VARCHAR(191) NULL,
    `nomorSurat` VARCHAR(191) NULL,
    `tanggalDiterima` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `file` JSON NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Diterima',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikarsipsuratmasuk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalSurat` VARCHAR(191) NULL,
    `suratBaru` VARCHAR(191) NULL,
    `suratDalamProses` VARCHAR(191) NULL,
    `suratSelesai` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `arsipsuratkeluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `pengirim` VARCHAR(191) NULL,
    `penerima` VARCHAR(191) NULL,
    `nomorSurat` VARCHAR(191) NULL,
    `tanggalKirim` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `file` JSON NULL,
    `note` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Diterima',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikarsipsuratkeluar` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalSurat` VARCHAR(191) NULL,
    `terkirim` VARCHAR(191) NULL,
    `suratDalamProses` VARCHAR(191) NULL,
    `draf` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keteranganaktifmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `nim` VARCHAR(191) NULL,
    `jurusan` VARCHAR(191) NULL,
    `semester` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Aktif',
    `ipk` VARCHAR(191) NULL,
    `keperluan` VARCHAR(191) NULL,
    `noSurat` VARCHAR(191) NULL,
    `tanggalTerbit` VARCHAR(191) NULL,
    `tahunAkademik` VARCHAR(191) NULL,
    `diTerbitkan` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikketeranganaktifmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalMahasiswa` VARCHAR(191) NULL,
    `aktif` VARCHAR(191) NULL,
    `tidakAktif` VARCHAR(191) NULL,
    `selesai` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suratijinpenelitian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `file` JSON NULL,
    `title` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Diterima',
    `noSurat` VARCHAR(191) NULL,
    `tanggalTerbit` VARCHAR(191) NULL,
    `periodePenelitian` VARCHAR(191) NULL,
    `idMahasiswa` VARCHAR(191) NULL,
    `penelitian` VARCHAR(191) NULL,
    `temaPenelitian` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `tujuanPenelitian` JSON NULL,
    `metodePenelitian` JSON NULL,
    `hasilDiharapkan` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksuratijinpenelitian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalSurat` VARCHAR(191) NULL,
    `diterima` VARCHAR(191) NULL,
    `ditolak` VARCHAR(191) NULL,
    `selesai` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suratketerangankelakuanbaik` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idMahasiswa` INTEGER NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `catatanAkademik` VARCHAR(191) NULL,
    `catatanDisiplin` VARCHAR(191) NULL,
    `catatanOrganisasi` VARCHAR(191) NULL,
    `penandaTangan` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `noSurat` VARCHAR(191) NULL,
    `tanggalTerbit` VARCHAR(191) NULL,
    `berlakuHingga` VARCHAR(191) NULL,
    `keperluan` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Baik',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksuratkelakuanbaik` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `suratDiterbitkan` VARCHAR(191) NULL,
    `tingkatPersetujuan` VARCHAR(191) NULL,
    `waktuProses` VARCHAR(191) NULL,
    `validasiTerjamin` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suratpengajuanbeasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `idMahasiswa` INTEGER NOT NULL,
    `beasiswa` VARCHAR(191) NULL,
    `noSurat` VARCHAR(191) NULL,
    `tanggalPengajuan` VARCHAR(191) NULL,
    `provider` VARCHAR(191) NULL,
    `nominalPerSemester` VARCHAR(191) NULL,
    `alasanPengajuan` VARCHAR(191) NULL,
    `prestasi` JSON NULL,
    `namaAyah` VARCHAR(191) NULL,
    `namaIbu` VARCHAR(191) NULL,
    `penghasilanOrangtua` VARCHAR(191) NULL,
    `dokumen` JSON NULL,
    `alamat` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `kontak` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL DEFAULT 'Disetujui',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksuratpengajuanbeasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalPengajuan` VARCHAR(191) NULL,
    `disetujui` VARCHAR(191) NULL,
    `menunggu` VARCHAR(191) NULL,
    `ditolak` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `seminarproposal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prosedurpelaksanaan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `tahapan` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikseminarproposal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `seminarPerTahun` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `bulanPersiapan` VARCHAR(191) NULL,
    `timPenguji` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sidangskripsi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prosedursidangskripsi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `tahapan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kriteriasidangskripsi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `kriteria` JSON NULL,
    `skor` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksidangskripsi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sidangPerTahun` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `durasiSidang` VARCHAR(191) NULL,
    `timPenguji` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `keteranganpendampingijazah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikketeranganpendampingijazah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalData` INTEGER NOT NULL,
    `totalKomponen` INTEGER NOT NULL,
    `totalProsedur` INTEGER NOT NULL,
    `mingguAktif` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ujiankomprehensif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `foto` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikujiankomprehensif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `perTahun` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `penguji` VARCHAR(191) NULL,
    `menitUjian` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `matrikulasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `foto` VARCHAR(191) NULL,
    `type` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `sks` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikmatrikulasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `durasi` VARCHAR(191) NULL,
    `sks` VARCHAR(191) NULL,
    `totalMataKuliah` VARCHAR(191) NULL,
    `kelulusan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kelomporiset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `fokusPenelitian` JSON NULL,
    `foto` VARCHAR(191) NULL,
    `namaMahasiswa` VARCHAR(191) NULL,
    `anggota` VARCHAR(191) NULL,
    `publikasi` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikkelomporiset` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` VARCHAR(191) NULL,
    `penelitianAktif` VARCHAR(191) NULL,
    `publikasiPerTahun` VARCHAR(191) NULL,
    `jurnalTerAkreditasi` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sejarahlbkh` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `foto` JSON NULL,
    `deskripsi` VARCHAR(191) NULL,
    `tahun` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksejarahlbkh` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` VARCHAR(191) NULL,
    `kasus` VARCHAR(191) NULL,
    `advokat` VARCHAR(191) NULL,
    `hukumTerakreditasi` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `visimisalbkh` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikvisimisalbkh` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paralegaf` VARCHAR(191) NULL,
    `kasusDitangani` VARCHAR(191) NULL,
    `advokatAktif` VARCHAR(191) NULL,
    `tingkatKepuasan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penguruslbkh` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikpenguruslbkh` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `total` VARCHAR(191) NULL,
    `kasusDitangani` VARCHAR(191) NULL,
    `advokatAktif` VARCHAR(191) NULL,
    `tahunPengalaman` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `advokatparalegal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `type` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikadvokatparalegal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `paralegal` VARCHAR(191) NULL,
    `kasusDitangani` VARCHAR(191) NULL,
    `advokatAktif` VARCHAR(191) NULL,
    `tingkatKepuasan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `konsultasihukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prosedurkonsultasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikprosedurkonsultasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `konsultasiPerBulan` VARCHAR(191) NULL,
    `tingkatKepuasan` VARCHAR(191) NULL,
    `konsultasiAktif` VARCHAR(191) NULL,
    `totalKonsultasi` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pendampinganhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prosedurpendampinganhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikpendampinganhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kasusDidampingi` VARCHAR(191) NULL,
    `tingkatKeberhasilan` VARCHAR(191) NULL,
    `advokatBerpengalaman` VARCHAR(191) NULL,
    `totalPendampingan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pembuatanlegal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prosedurpembuatanlegal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikpembuatanlegal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `legalOpinianPerTahun` VARCHAR(191) NULL,
    `tingkatKepuasan` VARCHAR(191) NULL,
    `ahliHukum` VARCHAR(191) NULL,
    `totalPembuatan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `saksiahli` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `keahlian` JSON NULL,
    `bidangKeahlian` VARCHAR(191) NULL,
    `kasusDitangani` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prosedursaksiahli` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksaksiahli` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `keteranganAhli` VARCHAR(191) NULL,
    `tingkatPenerimaan` VARCHAR(191) NULL,
    `ahliBerpengalaman` VARCHAR(191) NULL,
    `profesional` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `layananmediasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `type` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiklayananmediasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mediasiBerhasil` VARCHAR(191) NULL,
    `tingkatKesepakatan` VARCHAR(191) NULL,
    `mediatorBersetifikat` VARCHAR(191) NULL,
    `totalMediasi` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `timmediator` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `kasusDitangani` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `layananprobono` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `type` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiklayananprobono` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kasusProbono` VARCHAR(191) NULL,
    `tingkatKesepakatan` VARCHAR(191) NULL,
    `mediatorBersetifikat` VARCHAR(191) NULL,
    `totalMediasi` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kriteriapenerima` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `kategori` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `penyuluhanhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `type` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikpenyuluhanhukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kegiatanPenyuluhan` VARCHAR(191) NULL,
    `pesertaTeredukasi` VARCHAR(191) NULL,
    `institusiMitra` VARCHAR(191) NULL,
    `totalPenyuluhan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sosialisasipraturanuud` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `type` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiksosialisasipraturanuud` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kegiatanOrginsasi` VARCHAR(191) NULL,
    `pesertaTeredukasi` VARCHAR(191) NULL,
    `institusiMitra` VARCHAR(191) NULL,
    `totalSosialisasi` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kekhususanhukumpidana` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `semester` VARCHAR(191) NULL,
    `sks` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prospekkarir` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikkekhususanhukumpidana` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sks` VARCHAR(191) NULL,
    `mahasiswaAktif` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `alumniProfesional` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kekhususanhukumtatausahanegara` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `semester` VARCHAR(191) NULL,
    `sks` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prospekkarirtatausahanegara` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikkekhususanhukumtatausahanegara` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sks` VARCHAR(191) NULL,
    `mahasiswaAktif` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `alumniProfesional` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `kekhususanhukumperdata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `semester` VARCHAR(191) NULL,
    `sks` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prospekkarirperdata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikkekhususanhukumperdata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sks` VARCHAR(191) NULL,
    `mahasiswaAktif` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `alumniProfesional` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `daftardosen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `nidn` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `riwayatPendidikan` JSON NULL,
    `keahlian` JSON NULL,
    `prestasi` JSON NULL,
    `publikasi` JSON NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikdaftardosen` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalDosen` VARCHAR(191) NULL,
    `profesor` VARCHAR(191) NULL,
    `doktor` VARCHAR(191) NULL,
    `publiikasiPerTahun` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tenagakependidikan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `nip` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `riwayatPendidikan` JSON NULL,
    `keahlian` JSON NULL,
    `tanggungJawab` JSON NULL,
    `prestasi` JSON NULL,
    `pelatihan` JSON NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `pengalaman` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiktenagakependidikan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalTenagaKependidikan` VARCHAR(191) NULL,
    `administrasi` VARCHAR(191) NULL,
    `teknis` VARCHAR(191) NULL,
    `pustakawan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `himpunanmahasiswaprodihukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `bidang` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `anggota` VARCHAR(191) NULL,
    `tentang` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `namaKetua` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `programKerja` JSON NULL,
    `prestasi` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikhimpunanmahasiswaprodihukum` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bidangOrganisasi` VARCHAR(191) NULL,
    `anggotaAktif` VARCHAR(191) NULL,
    `programKerja` VARCHAR(191) NULL,
    `prestasi` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dewanperwakilanmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `tugas` VARCHAR(191) NULL,
    `visi` VARCHAR(191) NULL,
    `misi` VARCHAR(191) NULL,
    `programKerja` JSON NULL,
    `pencapaian` JSON NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikdewanperwakilanmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `anggotaAktif` VARCHAR(191) NULL,
    `aspirasiDitampung` VARCHAR(191) NULL,
    `praturanDisusun` VARCHAR(191) NULL,
    `akuntabel` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `badaneksikutifmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `tugas` VARCHAR(191) NULL,
    `visi` VARCHAR(191) NULL,
    `misi` VARCHAR(191) NULL,
    `programKerja` JSON NULL,
    `pencapaian` JSON NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikbadaneksikutifmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pengurusInti` VARCHAR(191) NULL,
    `programKerja` VARCHAR(191) NULL,
    `mahasiswaTerlayani` VARCHAR(191) NULL,
    `komitmen` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trackerstudy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `tugas` JSON NULL,
    `gajihRata` VARCHAR(191) NULL,
    `persentasi` VARCHAR(191) NULL,
    `institusi` JSON NULL,
    `keahlian` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `waktutunggukerja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kategoriWaktu` VARCHAR(191) NULL,
    `persentasi` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiktrackerstudy` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tingkatKeterserapan` VARCHAR(191) NULL,
    `rataGaji` VARCHAR(191) NULL,
    `waktuTungguKerja` VARCHAR(191) NULL,
    `kesesuaianBidang` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trackerstudyunigal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `tugas` JSON NULL,
    `gajihRata` VARCHAR(191) NULL,
    `persentasi` VARCHAR(191) NULL,
    `institusi` JSON NULL,
    `keahlian` JSON NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `waktutunggukerjaunigal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kategoriWaktu` VARCHAR(191) NULL,
    `persentasi` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiktrackerstudyunigal` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tingkatKeterserapan` VARCHAR(191) NULL,
    `rataGaji` VARCHAR(191) NULL,
    `waktuTungguKerja` VARCHAR(191) NULL,
    `kesesuaianBidang` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rekapitulasipengisian` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `programNama` VARCHAR(191) NULL,
    `angkatan` VARCHAR(191) NULL,
    `totalMahasiswa` VARCHAR(191) NULL,
    `jumlahResponden` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `persentasi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rekapitulasiperkategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `programNama` VARCHAR(191) NULL,
    `totalMahasiswa` VARCHAR(191) NULL,
    `jumlahResponden` VARCHAR(191) NULL,
    `persentasi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikrekapitulasiperkategori` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalResponden` VARCHAR(191) NULL,
    `tingkatPartisipasi` VARCHAR(191) NULL,
    `formulirLengkap` VARCHAR(191) NULL,
    `dalamProses` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `beasiswaindonesia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `oleh` JSON NULL,
    `nominal` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `sebanyak` VARCHAR(191) NULL,
    `tentang` VARCHAR(191) NULL,
    `persyaratan` JSON NULL,
    `manfaat` JSON NULL,
    `batasWaktu` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikbeasiswaindonesia` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalPenerima` VARCHAR(191) NULL,
    `durasiBeasiswa` VARCHAR(191) NULL,
    `tingkatKompetitif` VARCHAR(191) NULL,
    `pendaftarTahunan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `beasiswabri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tentangProgram` VARCHAR(191) NULL,
    `manfaat` JSON NULL,
    `judulPersyaratan` VARCHAR(191) NULL,
    `persyaratan` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `timelinebeasiswabri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikbeasiswabri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nilaiBeasiswa` VARCHAR(191) NULL,
    `durasi` VARCHAR(191) NULL,
    `kuota` VARCHAR(191) NULL,
    `deadline` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `beasiswakipkemendiksaintek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `manfaat` JSON NULL,
    `judulPersyaratan` VARCHAR(191) NULL,
    `persyaratan` JSON NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `timelinebeasiswakipkemendiksaintek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `waktu` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikbeasiswakipkemendiksaintek` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nilaiBeasiswa` VARCHAR(191) NULL,
    `durasi` VARCHAR(191) NULL,
    `kuota` VARCHAR(191) NULL,
    `deadline` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `prestasimahasiswanondikti` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `juara` VARCHAR(191) NULL,
    `namaMahasiswa` VARCHAR(191) NULL,
    `kategori` JSON NULL,
    `deskripsi` VARCHAR(191) NULL,
    `dampak` VARCHAR(191) NULL,
    `keahlian` JSON NULL,
    `penghargaan` JSON NULL,
    `waktuKompetisi` VARCHAR(191) NULL,
    `alamat` VARCHAR(191) NULL,
    `penyelenggara` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikprestasimahasiswanondikti` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalPrestasi` VARCHAR(191) NULL,
    `tingkatInternasional` VARCHAR(191) NULL,
    `tingkatNasional` VARCHAR(191) NULL,
    `tingkatRegional` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datarekognisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `tema` VARCHAR(191) NULL,
    `tingkat` VARCHAR(191) NULL,
    `tahun` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `dampak` VARCHAR(191) NULL,
    `kriteriaPenelitian` JSON NULL,
    `manfaat` JSON NULL,
    `provider` VARCHAR(191) NULL,
    `masaBerlaku` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikdatarekognisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penghargaan` VARCHAR(191) NULL,
    `sertifikasi` VARCHAR(191) NULL,
    `akreditasi` VARCHAR(191) NULL,
    `rekognasiInternasional` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dataseminarmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `terkait` VARCHAR(191) NULL,
    `deskripsiSeminar` VARCHAR(191) NULL,
    `tujuanPembelajaran` JSON NULL,
    `materiDibahas` JSON NULL,
    `hasilDIharapkan` JSON NULL,
    `tanggalSeminar` VARCHAR(191) NULL,
    `waktuSeminar` VARCHAR(191) NULL,
    `lokasi` VARCHAR(191) NULL,
    `peserta` VARCHAR(191) NULL,
    `namaNarasumber` VARCHAR(191) NULL,
    `tentangNarasumber` VARCHAR(191) NULL,
    `emailNarasumber` VARCHAR(191) NULL,
    `noTelpNarasumber` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikdataseminarmahasiswa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalSeminar` VARCHAR(191) NULL,
    `totalPeserta` VARCHAR(191) NULL,
    `totalNarasumber` VARCHAR(191) NULL,
    `tingkatKepuasan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datamahasiswamagang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `terkait` VARCHAR(191) NULL,
    `tentangMagang` VARCHAR(191) NULL,
    `tanggungJawab` JSON NULL,
    `keahlian` JSON NULL,
    `pencapaian` JSON NULL,
    `perusahaanMagang` VARCHAR(191) NULL,
    `posisiMagang` VARCHAR(191) NULL,
    `periodeMagang` VARCHAR(191) NULL,
    `lokasiMagang` VARCHAR(191) NULL,
    `superVisorMagang` VARCHAR(191) NULL,
    `emailSuperVisorMagang` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikdatamahasiswamagang` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalMagang` VARCHAR(191) NULL,
    `mitraInstitusi` VARCHAR(191) NULL,
    `rataDurasiMagang` VARCHAR(191) NULL,
    `tingkatKepuasan` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datamahasiswaberwirausaha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `namaMahasiswa` VARCHAR(191) NULL,
    `nimMahasiswa` VARCHAR(191) NULL,
    `tentangBisnis` VARCHAR(191) NULL,
    `produkLayanan` JSON NULL,
    `pencapaian` JSON NULL,
    `tantangan` VARCHAR(191) NULL,
    `rencanaMasaDeoan` VARCHAR(191) NULL,
    `kategori` VARCHAR(191) NULL,
    `tahunBerdiri` VARCHAR(191) NULL,
    `jumlahKaryawan` VARCHAR(191) NULL,
    `pendapatan` VARCHAR(191) NULL,
    `lokasi` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `lokasiMahasiswa` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikdatamahasiswaberwirausaha` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalMahasiswaBerwirausaha` VARCHAR(191) NULL,
    `lapanganKerja` VARCHAR(191) NULL,
    `tingkatKeberhasilan` VARCHAR(191) NULL,
    `bisnisAktif` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lowongankerja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `perusahaan` VARCHAR(191) NULL,
    `lokasi` VARCHAR(191) NULL,
    `tipePekerjaan` VARCHAR(191) NULL,
    `gaji` VARCHAR(191) NULL,
    `pengalaman` VARCHAR(191) NULL,
    `pendidikan` VARCHAR(191) NULL,
    `batasLama` VARCHAR(191) NULL,
    `tentangPerusahaan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `tanggungJawab` JSON NULL,
    `persyaratan` JSON NULL,
    `keahlian` JSON NULL,
    `benefit` JSON NULL,
    `email` VARCHAR(191) NULL,
    `link` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiklowongankerja` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lowonganAktif` VARCHAR(191) NULL,
    `partner` VARCHAR(191) NULL,
    `tingkatPenempatan` VARCHAR(191) NULL,
    `gajihRata` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `alumniberprestasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `nim` VARCHAR(191) NULL,
    `lulusan` VARCHAR(191) NULL,
    `posisi` VARCHAR(191) NULL,
    `perusahaan` VARCHAR(191) NULL,
    `ipk` VARCHAR(191) NULL,
    `gaji` VARCHAR(191) NULL,
    `waktuTunggu` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `noTelp` VARCHAR(191) NULL,
    `linkedin` VARCHAR(191) NULL,
    `instagram` VARCHAR(191) NULL,
    `testimonial` VARCHAR(191) NULL,
    `perjalananKarir` JSON NULL,
    `keahlian` JSON NULL,
    `pencapaian` JSON NULL,
    `bidang` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikalumniberprestasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalAlumni` VARCHAR(191) NULL,
    `tingkatPenempatan` VARCHAR(191) NULL,
    `rataGajih` VARCHAR(191) NULL,
    `WaktuTunggu` VARCHAR(191) NULL,
    `slogan` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datamahasiswaaktif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `jumlah` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikmahasiswaaktif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaAktif` VARCHAR(191) NULL,
    `tingkatKehadiran` VARCHAR(191) NULL,
    `ipkRataRata` VARCHAR(191) NULL,
    `mahasiswaBerprestasi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datamahasiswanonaktif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `jumlah` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikmahasiswanonaktif` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mahasiswaNonAktif` VARCHAR(191) NULL,
    `tingkatKehadiran` VARCHAR(191) NULL,
    `ipkRataRata` VARCHAR(191) NULL,
    `mahasiswaBerprestasi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datalulusanpertahun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `jumlah` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistiklulusanpertahun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalLulusan` VARCHAR(191) NULL,
    `tahun1` VARCHAR(191) NULL,
    `tahun2` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `mou` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `partnerInstitution` VARCHAR(191) NULL,
    `partnerType` VARCHAR(191) NULL,
    `signingDate` VARCHAR(191) NULL,
    `expiryDate` VARCHAR(191) NULL,
    `mouNumber` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `duration` VARCHAR(191) NULL,
    `objectives` VARCHAR(191) NULL,
    `contactPerson` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `implementation` VARCHAR(191) NULL,
    `benefits` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikmou` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalMoU` VARCHAR(191) NULL,
    `aktif` VARCHAR(191) NULL,
    `dalamProses` VARCHAR(191) NULL,
    `tidakAktif` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `moa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NULL,
    `agreementNumber` VARCHAR(191) NULL,
    `parties` VARCHAR(191) NULL,
    `signingDate` VARCHAR(191) NULL,
    `effectiveDate` VARCHAR(191) NULL,
    `agreementType` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `duration` VARCHAR(191) NULL,
    `objectives` VARCHAR(191) NULL,
    `responsibilities` VARCHAR(191) NULL,
    `financialTerms` VARCHAR(191) NULL,
    `terminationClause` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `implementation` VARCHAR(191) NULL,
    `benefits` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikmoa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `totalMoA` VARCHAR(191) NULL,
    `aktif` VARCHAR(191) NULL,
    `dalamProses` VARCHAR(191) NULL,
    `tidakAktif` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `datapkpa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `jumlah` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikpkpa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pesertaPKPA` VARCHAR(191) NULL,
    `angkatan` VARCHAR(191) NULL,
    `tingkatKelulusan` VARCHAR(191) NULL,
    `mitraHukum` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `dataperadilansemu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `foto` VARCHAR(191) NULL,
    `title` VARCHAR(191) NULL,
    `deskripsi` VARCHAR(191) NULL,
    `jumlah` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `statistikperadilansemu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sidangSemu` VARCHAR(191) NULL,
    `peserta` VARCHAR(191) NULL,
    `tingkatKepuasan` VARCHAR(191) NULL,
    `kasusSimulasi` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `berita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NULL,
    `konten` VARCHAR(191) NULL,
    `kategori` VARCHAR(191) NULL,
    `penulis` VARCHAR(191) NULL,
    `tanggalPublikasi` DATETIME(3) NULL,
    `foto` VARCHAR(191) NULL,
    `galeri` JSON NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pengumuman` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `konten` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `prioritas` VARCHAR(191) NOT NULL,
    `tanggalMulai` DATETIME(3) NOT NULL,
    `tanggalBerakhir` DATETIME(3) NULL,
    `lampiran` JSON NOT NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `testimoni` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NULL,
    `nama` VARCHAR(191) NULL,
    `jabatan` VARCHAR(191) NULL,
    `foto` VARCHAR(191) NULL,
    `galeri` JSON NULL,
    `konten` VARCHAR(191) NULL,
    `kategori` VARCHAR(191) NULL,
    `note` VARCHAR(191) NULL,
    `tanggalPublikasi` VARCHAR(191) NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `kategorirekapitulasi` ADD CONSTRAINT `kategorirekapitulasi_rekapitulasiId_fkey` FOREIGN KEY (`rekapitulasiId`) REFERENCES `rekapitulasisurvey`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `matakuliahkekhususan` ADD CONSTRAINT `matakuliahkekhususan_kekhususanId_fkey` FOREIGN KEY (`kekhususanId`) REFERENCES `kekhususan`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
