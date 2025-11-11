/*
  Warnings:

  - You are about to drop the column `aktif` on the `herosection` table. All the data in the column will be lost.
  - You are about to drop the column `backgroundColor` on the `herosection` table. All the data in the column will be lost.
  - You are about to drop the column `backgroundImage` on the `herosection` table. All the data in the column will be lost.
  - You are about to drop the column `subjudul` on the `herosection` table. All the data in the column will be lost.
  - You are about to drop the column `textColor` on the `herosection` table. All the data in the column will be lost.
  - You are about to drop the column `tombolLink` on the `herosection` table. All the data in the column will be lost.
  - You are about to drop the column `tombolTeks` on the `herosection` table. All the data in the column will be lost.
  - You are about to drop the `programlbkh` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `image` to the `HeroSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `alumni` MODIFY `testimoni` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `anggotabem` MODIFY `deskripsi` VARCHAR(191) NOT NULL,
    MODIFY `visi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `anggotadpm` MODIFY `deskripsi` VARCHAR(191) NOT NULL,
    MODIFY `visi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `beasiswa` MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `bidangorganisasi` MODIFY `deskripsi` VARCHAR(191) NOT NULL,
    MODIFY `visi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `dosen` MODIFY `biografi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `herosection` DROP COLUMN `aktif`,
    DROP COLUMN `backgroundColor`,
    DROP COLUMN `backgroundImage`,
    DROP COLUMN `subjudul`,
    DROP COLUMN `textColor`,
    DROP COLUMN `tombolLink`,
    DROP COLUMN `tombolTeks`,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `izinpenelitian` MODIFY `deskripsi` VARCHAR(191) NOT NULL,
    MODIFY `catatan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `jalurkarir` MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `kekhususan` MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `magang` MODIFY `profilPerusahaan` VARCHAR(191) NOT NULL,
    MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `mahasiswa` MODIFY `alamat` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `matakuliahkekhususan` MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `pengajuanbeasiswa` MODIFY `alasan` VARCHAR(191) NOT NULL,
    MODIFY `catatan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `prestasi` MODIFY `deskripsi` VARCHAR(191) NOT NULL,
    MODIFY `dampak` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `prospekkarir` MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `rekognisi` MODIFY `deskripsi` VARCHAR(191) NOT NULL,
    MODIFY `dampak` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `seminar` MODIFY `bioNarasumber` VARCHAR(191) NOT NULL,
    MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `suratkelakuan` MODIFY `isiSurat` VARCHAR(191) NOT NULL,
    MODIFY `catatan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `suratkeluar` MODIFY `isiSurat` VARCHAR(191) NOT NULL,
    MODIFY `catatan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `suratketeranganaktif` MODIFY `isiSurat` VARCHAR(191) NOT NULL,
    MODIFY `catatan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `suratmasuk` MODIFY `isiSurat` VARCHAR(191) NOT NULL,
    MODIFY `disposisi` VARCHAR(191) NULL,
    MODIFY `catatan` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `tenagakependidikan` MODIFY `biografi` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `wirausaha` MODIFY `deskripsi` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `programlbkh`;

-- CreateTable
CREATE TABLE `Sejarah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tahun` INTEGER NOT NULL,
    `judul` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `urutan` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VisiMisi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `visi` VARCHAR(191) NOT NULL,
    `misi` JSON NOT NULL,
    `nilai` JSON NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `StrukturOrganisasi` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jabatan` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `level` INTEGER NOT NULL,
    `parentId` INTEGER NULL,
    `urutan` INTEGER NOT NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Fasilitas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `kapasitas` INTEGER NULL,
    `lokasi` VARCHAR(191) NOT NULL,
    `luas` VARCHAR(191) NULL,
    `fasilitas` JSON NOT NULL,
    `kondisi` VARCHAR(191) NOT NULL DEFAULT 'Baik',
    `jamOperasional` VARCHAR(191) NULL,
    `penanggungJawab` VARCHAR(191) NULL,
    `kontakPJ` VARCHAR(191) NULL,
    `foto` JSON NOT NULL,
    `thumbnail` VARCHAR(191) NULL,
    `urutan` INTEGER NOT NULL DEFAULT 0,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Berita` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `ringkasan` VARCHAR(191) NOT NULL,
    `konten` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `penulis` VARCHAR(191) NOT NULL,
    `tanggalPublikasi` DATETIME(3) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `galeri` JSON NOT NULL,
    `tags` JSON NOT NULL,
    `views` INTEGER NOT NULL DEFAULT 0,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Berita_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pengumuman` (
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
CREATE TABLE `Galeri` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `tanggal` DATETIME(3) NOT NULL,
    `foto` JSON NOT NULL,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Video` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `judul` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `urlVideo` VARCHAR(191) NOT NULL,
    `thumbnail` VARCHAR(191) NULL,
    `durasi` VARCHAR(191) NULL,
    `tanggalUpload` DATETIME(3) NOT NULL,
    `views` INTEGER NOT NULL DEFAULT 0,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Testimoni` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jabatan` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `konten` VARCHAR(191) NOT NULL,
    `rating` INTEGER NOT NULL DEFAULT 5,
    `featured` BOOLEAN NOT NULL DEFAULT false,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FAQ` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pertanyaan` VARCHAR(191) NOT NULL,
    `jawaban` VARCHAR(191) NOT NULL,
    `kategori` VARCHAR(191) NOT NULL,
    `urutan` INTEGER NOT NULL DEFAULT 0,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `InformasiKontak` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jenis` VARCHAR(191) NOT NULL,
    `alamat` VARCHAR(191) NOT NULL,
    `telepon` JSON NOT NULL,
    `email` JSON NOT NULL,
    `fax` VARCHAR(191) NULL,
    `whatsapp` VARCHAR(191) NULL,
    `jamOperasional` VARCHAR(191) NULL,
    `maps` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `InformasiKontak_jenis_key`(`jenis`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MediaSosial` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `platform` VARCHAR(191) NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `MediaSosial_platform_key`(`platform`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PengaturanSitus` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `kunci` VARCHAR(191) NOT NULL,
    `nilai` VARCHAR(191) NOT NULL,
    `tipe` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `PengaturanSitus_kunci_key`(`kunci`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pengguna` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `nama` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL,
    `foto` VARCHAR(191) NULL,
    `aktif` BOOLEAN NOT NULL DEFAULT true,
    `terakhirLogin` DATETIME(3) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Pengguna_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LogAktivitas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `penggunaId` INTEGER NULL,
    `aksi` VARCHAR(191) NOT NULL,
    `entitas` VARCHAR(191) NOT NULL,
    `entitasId` INTEGER NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `ipAddress` VARCHAR(191) NULL,
    `userAgent` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
