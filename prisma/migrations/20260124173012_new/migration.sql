-- CreateTable
CREATE TABLE "herosection" (
    "id" SERIAL NOT NULL,
    "urutan" TEXT,
    "image" TEXT NOT NULL,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "herosection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikberanda" (
    "id" SERIAL NOT NULL,
    "label" TEXT NOT NULL,
    "nilai" TEXT NOT NULL,
    "ikon" TEXT,
    "deskripsi" TEXT,
    "urutan" INTEGER NOT NULL DEFAULT 0,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "statistikberanda_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dosen" (
    "id" SERIAL NOT NULL,
    "nidn" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telepon" TEXT NOT NULL,
    "foto" TEXT,
    "jabatan" TEXT NOT NULL,
    "pendidikan" TEXT NOT NULL,
    "universitasAsal" TEXT,
    "keahlian" JSONB NOT NULL,
    "jumlahPublikasi" INTEGER NOT NULL DEFAULT 0,
    "biografi" TEXT NOT NULL,
    "penghargaan" JSONB NOT NULL,
    "minatPenelitian" JSONB NOT NULL,
    "mataKuliah" JSONB NOT NULL,
    "scholar" TEXT,
    "scopus" TEXT,
    "sinta" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dosen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rekognisi" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "tingkat" TEXT NOT NULL,
    "tahun" INTEGER NOT NULL,
    "pemberi" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "dampak" TEXT NOT NULL,
    "kriteriaPenilaian" JSONB NOT NULL,
    "manfaat" JSONB NOT NULL,
    "berlakuHingga" TIMESTAMP(3),
    "foto" TEXT,
    "sertifikat" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rekognisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rekapitulasisurvey" (
    "id" SERIAL NOT NULL,
    "programStudi" TEXT NOT NULL,
    "angkatan" TEXT NOT NULL,
    "totalMahasiswa" INTEGER NOT NULL,
    "totalResponden" INTEGER NOT NULL,
    "tingkatPartisipasi" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rekapitulasisurvey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kategorirekapitulasi" (
    "id" SERIAL NOT NULL,
    "rekapitulasiId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "totalField" INTEGER NOT NULL,
    "fieldTerisi" INTEGER NOT NULL,
    "tingkatKelengkapan" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kategorirekapitulasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suratmasuk" (
    "id" SERIAL NOT NULL,
    "nomorSurat" TEXT NOT NULL,
    "perihal" TEXT NOT NULL,
    "pengirim" TEXT NOT NULL,
    "instansiPengirim" TEXT NOT NULL,
    "tanggalDiterima" TIMESTAMP(3) NOT NULL,
    "prioritas" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Baru',
    "kategori" TEXT NOT NULL,
    "isiSurat" TEXT NOT NULL,
    "lampiran" JSONB NOT NULL,
    "disposisi" TEXT,
    "catatan" TEXT,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suratmasuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suratkeluar" (
    "id" SERIAL NOT NULL,
    "nomorSurat" TEXT NOT NULL,
    "perihal" TEXT NOT NULL,
    "penerima" TEXT NOT NULL,
    "instansiPenerima" TEXT NOT NULL,
    "tanggalKirim" TIMESTAMP(3) NOT NULL,
    "prioritas" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'Draft',
    "kategori" TEXT NOT NULL,
    "isiSurat" TEXT NOT NULL,
    "lampiran" JSONB NOT NULL,
    "namaPengirim" TEXT NOT NULL,
    "jabatanPengirim" TEXT NOT NULL,
    "catatan" TEXT,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "suratkeluar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kekhususan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "totalSKS" INTEGER NOT NULL,
    "totalMahasiswa" INTEGER NOT NULL,
    "tingkatKelulusan" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kekhususan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matakuliahkekhususan" (
    "id" SERIAL NOT NULL,
    "kekhususanId" INTEGER NOT NULL,
    "nama" TEXT NOT NULL,
    "kode" TEXT NOT NULL,
    "semester" INTEGER NOT NULL,
    "sks" INTEGER NOT NULL,
    "deskripsi" TEXT NOT NULL,
    "topikBahasan" JSONB NOT NULL,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matakuliahkekhususan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sejarah_s1" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "tahun" TEXT,
    "deskripsi" TEXT NOT NULL,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sejarah_s1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sejarahs1" (
    "id" SERIAL NOT NULL,
    "banner" TEXT,
    "konten" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sejarahs1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksejarahs1" (
    "id" SERIAL NOT NULL,
    "tahunPengalaman" TEXT,
    "alumni" TEXT,
    "akreditasi" TEXT,
    "tingkatKelulusan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksejarahs1_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sejarah_s2" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "tahun" TEXT,
    "deskripsi" TEXT NOT NULL,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sejarah_s2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sejarahs2" (
    "id" SERIAL NOT NULL,
    "banner" TEXT,
    "konten" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sejarahs2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksejarahs2" (
    "id" SERIAL NOT NULL,
    "tahunPengalaman" TEXT,
    "alumni" TEXT,
    "akreditasi" TEXT,
    "tingkatKelulusan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksejarahs2_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saranaprasarana" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "katagori" TEXT,
    "deskripsi" TEXT NOT NULL,
    "foto" JSONB,

    CONSTRAINT "saranaprasarana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saranaprasaranabanner" (
    "id" SERIAL NOT NULL,
    "banner" TEXT,
    "konten" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "saranaprasaranabanner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksaranaprasarana" (
    "id" SERIAL NOT NULL,
    "ruangKuliah" TEXT,
    "koleksiBuku" TEXT,
    "unitKomputer" TEXT,
    "lantaiGedung" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksaranaprasarana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rencanastrategis" (
    "id" SERIAL NOT NULL,
    "tahun" TEXT,
    "judul" TEXT NOT NULL,
    "katagori" JSONB,
    "deskripsi" TEXT NOT NULL,
    "foto" JSONB,

    CONSTRAINT "rencanastrategis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikrencanastrategis" (
    "id" SERIAL NOT NULL,
    "tahunRencana" TEXT,
    "targetStrategis" TEXT,
    "programAksi" TEXT,
    "targetAkreditas" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikrencanastrategis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "senatfakultas" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "foto" TEXT,
    "keahlian" TEXT,
    "periode" TEXT,
    "tugas" TEXT,
    "deskripsi" TEXT,
    "galeri" JSONB,

    CONSTRAINT "senatfakultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksenatfakultas" (
    "id" SERIAL NOT NULL,
    "anggotaSenat" TEXT,
    "tahunPeriode" TEXT,
    "rapatPerTahun" TEXT,
    "keputusan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksenatfakultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visimisi" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "title" TEXT,
    "deskripsi" TEXT,
    "gambar" TEXT,
    "misi" JSONB,
    "tujuan" JSONB,
    "sasaran" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visimisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikvisimisi" (
    "id" SERIAL NOT NULL,
    "tahunPengalaman" TEXT,
    "alumni" TEXT,
    "dosenBerkualitas" TEXT,
    "ProgramUnggula" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikvisimisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "strukturorganisasi" (
    "id" SERIAL NOT NULL,
    "jabatan" TEXT NOT NULL,
    "nama" TEXT NOT NULL,
    "foto" TEXT,
    "note" TEXT,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "strukturorganisasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikstrukturorganisasi" (
    "id" SERIAL NOT NULL,
    "pimpinan" TEXT,
    "bagianUtama" TEXT,
    "tenagaPendidikan" TEXT,
    "dosenTetap" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikstrukturorganisasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pimpinan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "jabatan" TEXT NOT NULL,
    "foto" TEXT,
    "pendidikan" JSONB,
    "keahlian" JSONB,
    "periode" TEXT,
    "email" TEXT,
    "kontak" TEXT,

    CONSTRAINT "pimpinan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikpimpinan" (
    "id" SERIAL NOT NULL,
    "pimpinan" TEXT,
    "tahunPengalaman" TEXT,
    "publikasiIlmiah" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikpimpinan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programsarjanahukum" (
    "id" SERIAL NOT NULL,
    "mata_kuliah" TEXT,
    "semester" TEXT,
    "kode_matkul" TEXT,
    "bobot" TEXT,
    "dokumen_rps" TEXT,
    "penyelenggara" TEXT,

    CONSTRAINT "programsarjanahukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikprogramsarjanahukum" (
    "id" SERIAL NOT NULL,
    "semester" TEXT,
    "sksTotal" TEXT,
    "akreditasi" TEXT,
    "alumni" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikprogramsarjanahukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prospekkarirsarjanahukum" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "prospekkarirsarjanahukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "programmagisterhukum" (
    "id" SERIAL NOT NULL,
    "image" JSONB,
    "semester" TEXT,
    "judul" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,

    CONSTRAINT "programmagisterhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikprogrammagisterhukum" (
    "id" SERIAL NOT NULL,
    "semester" TEXT,
    "sksTotal" TEXT,
    "akreditasi" TEXT,
    "alumni" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikprogrammagisterhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prospekkarirmagisterhukum" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "deskripsi" TEXT,
    "image" TEXT,

    CONSTRAINT "prospekkarirmagisterhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arsipsuratmasuk" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "deskripsi" TEXT,
    "pengirim" TEXT,
    "penerima" TEXT,
    "nomorSurat" TEXT,
    "tanggalDiterima" TEXT,
    "foto" TEXT,
    "file" JSONB,
    "status" TEXT DEFAULT 'Diterima',

    CONSTRAINT "arsipsuratmasuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikarsipsuratmasuk" (
    "id" SERIAL NOT NULL,
    "totalSurat" TEXT,
    "suratBaru" TEXT,
    "suratDalamProses" TEXT,
    "suratSelesai" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikarsipsuratmasuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "arsipsuratkeluar" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "deskripsi" TEXT,
    "pengirim" TEXT,
    "penerima" TEXT,
    "nomorSurat" TEXT,
    "tanggalKirim" TEXT,
    "foto" TEXT,
    "file" JSONB,
    "note" TEXT,
    "status" TEXT DEFAULT 'Diterima',

    CONSTRAINT "arsipsuratkeluar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikarsipsuratkeluar" (
    "id" SERIAL NOT NULL,
    "totalSurat" TEXT,
    "terkirim" TEXT,
    "suratDalamProses" TEXT,
    "draf" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikarsipsuratkeluar_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keteranganaktifmahasiswa" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "nama" TEXT,
    "nim" TEXT,
    "jurusan" TEXT,
    "semester" TEXT,
    "status" TEXT DEFAULT 'Aktif',
    "ipk" TEXT,
    "keperluan" TEXT,
    "noSurat" TEXT,
    "tanggalTerbit" TEXT,
    "tahunAkademik" TEXT,
    "diTerbitkan" TEXT,
    "note" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "keteranganaktifmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikketeranganaktifmahasiswa" (
    "id" SERIAL NOT NULL,
    "totalMahasiswa" TEXT,
    "aktif" TEXT,
    "tidakAktif" TEXT,
    "selesai" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikketeranganaktifmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suratijinpenelitian" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "file" JSONB,
    "title" TEXT,
    "status" TEXT DEFAULT 'Diterima',
    "noSurat" TEXT,
    "tanggalTerbit" TEXT,
    "periodePenelitian" TEXT,
    "idMahasiswa" TEXT,
    "penelitian" TEXT,
    "temaPenelitian" TEXT,
    "deskripsi" TEXT,
    "tujuanPenelitian" JSONB,
    "metodePenelitian" JSONB,
    "hasilDiharapkan" JSONB,

    CONSTRAINT "suratijinpenelitian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksuratijinpenelitian" (
    "id" SERIAL NOT NULL,
    "totalSurat" TEXT,
    "diterima" TEXT,
    "ditolak" TEXT,
    "selesai" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksuratijinpenelitian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suratketerangankelakuanbaik" (
    "id" SERIAL NOT NULL,
    "idMahasiswa" INTEGER NOT NULL,
    "deskripsi" TEXT,
    "catatanAkademik" TEXT,
    "catatanDisiplin" TEXT,
    "catatanOrganisasi" TEXT,
    "penandaTangan" TEXT,
    "note" TEXT,
    "noSurat" TEXT,
    "tanggalTerbit" TEXT,
    "berlakuHingga" TEXT,
    "keperluan" TEXT,
    "status" TEXT DEFAULT 'Baik',

    CONSTRAINT "suratketerangankelakuanbaik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksuratkelakuanbaik" (
    "id" SERIAL NOT NULL,
    "suratDiterbitkan" TEXT,
    "tingkatPersetujuan" TEXT,
    "waktuProses" TEXT,
    "validasiTerjamin" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksuratkelakuanbaik_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "suratpengajuanbeasiswa" (
    "id" SERIAL NOT NULL,
    "idMahasiswa" INTEGER NOT NULL,
    "beasiswa" TEXT,
    "noSurat" TEXT,
    "tanggalPengajuan" TEXT,
    "provider" TEXT,
    "nominalPerSemester" TEXT,
    "alasanPengajuan" TEXT,
    "prestasi" JSONB,
    "namaAyah" TEXT,
    "namaIbu" TEXT,
    "penghasilanOrangtua" TEXT,
    "dokumen" JSONB,
    "alamat" TEXT,
    "email" TEXT,
    "kontak" TEXT,
    "note" TEXT,
    "status" TEXT DEFAULT 'Disetujui',

    CONSTRAINT "suratpengajuanbeasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksuratpengajuanbeasiswa" (
    "id" SERIAL NOT NULL,
    "totalPengajuan" TEXT,
    "disetujui" TEXT,
    "menunggu" TEXT,
    "ditolak" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksuratpengajuanbeasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seminarproposal" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "kategori" JSONB,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "seminarproposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prosedurpelaksanaan" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "tahapan" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prosedurpelaksanaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikseminarproposal" (
    "id" SERIAL NOT NULL,
    "seminarPerTahun" TEXT,
    "tingkatKelulusan" TEXT,
    "bulanPersiapan" TEXT,
    "timPenguji" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikseminarproposal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sidangskripsi" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "kategori" JSONB,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sidangskripsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prosedursidangskripsi" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "tahapan" TEXT,
    "deskripsi" TEXT,
    "foto" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prosedursidangskripsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kriteriasidangskripsi" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "kriteria" JSONB,
    "skor" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kriteriasidangskripsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksidangskripsi" (
    "id" SERIAL NOT NULL,
    "sidangPerTahun" TEXT,
    "tingkatKelulusan" TEXT,
    "durasiSidang" TEXT,
    "timPenguji" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksidangskripsi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "keteranganpendampingijazah" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "type" TEXT,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "keteranganpendampingijazah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikketeranganpendampingijazah" (
    "id" SERIAL NOT NULL,
    "totalData" INTEGER NOT NULL,
    "totalKomponen" INTEGER NOT NULL,
    "totalProsedur" INTEGER NOT NULL,
    "mingguAktif" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikketeranganpendampingijazah_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ujiankomprehensif" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "kategori" JSONB,
    "foto" TEXT,
    "type" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ujiankomprehensif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikujiankomprehensif" (
    "id" SERIAL NOT NULL,
    "perTahun" TEXT,
    "tingkatKelulusan" TEXT,
    "penguji" TEXT,
    "menitUjian" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikujiankomprehensif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "matrikulasi" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "kategori" JSONB,
    "foto" TEXT,
    "type" TEXT,
    "waktu" TEXT,
    "sks" TEXT,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "matrikulasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikmatrikulasi" (
    "id" SERIAL NOT NULL,
    "durasi" TEXT,
    "sks" TEXT,
    "totalMataKuliah" TEXT,
    "kelulusan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikmatrikulasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kelomporiset" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "fokusPenelitian" JSONB,
    "foto" TEXT,
    "namaMahasiswa" TEXT,
    "anggota" TEXT,
    "publikasi" TEXT,
    "deskripsi" TEXT,
    "status" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kelomporiset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikkelomporiset" (
    "id" SERIAL NOT NULL,
    "total" TEXT,
    "penelitianAktif" TEXT,
    "publikasiPerTahun" TEXT,
    "jurnalTerAkreditasi" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikkelomporiset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sejarahlbkh" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "foto" JSONB,
    "deskripsi" TEXT,
    "tahun" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sejarahlbkh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksejarahlbkh" (
    "id" SERIAL NOT NULL,
    "tahun" TEXT,
    "kasus" TEXT,
    "advokat" TEXT,
    "hukumTerakreditasi" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksejarahlbkh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "visimisalbkh" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "visimisalbkh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikvisimisalbkh" (
    "id" SERIAL NOT NULL,
    "paralegaf" TEXT,
    "kasusDitangani" TEXT,
    "advokatAktif" TEXT,
    "tingkatKepuasan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikvisimisalbkh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penguruslbkh" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "foto" TEXT,
    "deskripsi" TEXT,
    "jabatan" TEXT,
    "kategori" JSONB,
    "email" TEXT,
    "noTelp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "penguruslbkh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikpenguruslbkh" (
    "id" SERIAL NOT NULL,
    "total" TEXT,
    "kasusDitangani" TEXT,
    "advokatAktif" TEXT,
    "tahunPengalaman" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikpenguruslbkh_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "advokatparalegal" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "nama" TEXT,
    "foto" TEXT,
    "jabatan" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "email" TEXT,
    "noTelp" TEXT,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "advokatparalegal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikadvokatparalegal" (
    "id" SERIAL NOT NULL,
    "paralegal" TEXT,
    "kasusDitangani" TEXT,
    "advokatAktif" TEXT,
    "tingkatKepuasan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikadvokatparalegal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "konsultasihukum" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "konsultasihukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prosedurkonsultasi" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prosedurkonsultasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikprosedurkonsultasi" (
    "id" SERIAL NOT NULL,
    "konsultasiPerBulan" TEXT,
    "tingkatKepuasan" TEXT,
    "konsultasiAktif" TEXT,
    "totalKonsultasi" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikprosedurkonsultasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pendampinganhukum" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pendampinganhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prosedurpendampinganhukum" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prosedurpendampinganhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikpendampinganhukum" (
    "id" SERIAL NOT NULL,
    "kasusDidampingi" TEXT,
    "tingkatKeberhasilan" TEXT,
    "advokatBerpengalaman" TEXT,
    "totalPendampingan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikpendampinganhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pembuatanlegal" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pembuatanlegal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prosedurpembuatanlegal" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prosedurpembuatanlegal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikpembuatanlegal" (
    "id" SERIAL NOT NULL,
    "legalOpinianPerTahun" TEXT,
    "tingkatKepuasan" TEXT,
    "ahliHukum" TEXT,
    "totalPembuatan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikpembuatanlegal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "saksiahli" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "foto" TEXT,
    "deskripsi" TEXT,
    "keahlian" JSONB,
    "bidangKeahlian" TEXT,
    "kasusDitangani" TEXT,
    "email" TEXT,
    "noTelp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "saksiahli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prosedursaksiahli" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "waktu" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prosedursaksiahli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksaksiahli" (
    "id" SERIAL NOT NULL,
    "keteranganAhli" TEXT,
    "tingkatPenerimaan" TEXT,
    "ahliBerpengalaman" TEXT,
    "profesional" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksaksiahli_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layananmediasi" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "layananmediasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiklayananmediasi" (
    "id" SERIAL NOT NULL,
    "mediasiBerhasil" TEXT,
    "tingkatKesepakatan" TEXT,
    "mediatorBersetifikat" TEXT,
    "totalMediasi" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiklayananmediasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timmediator" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "nama" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "kasusDitangani" TEXT,
    "email" TEXT,
    "noTelp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "timmediator_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layananprobono" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "layananprobono_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiklayananprobono" (
    "id" SERIAL NOT NULL,
    "kasusProbono" TEXT,
    "tingkatKesepakatan" TEXT,
    "mediatorBersetifikat" TEXT,
    "totalMediasi" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiklayananprobono_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kriteriapenerima" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "kategori" JSONB,

    CONSTRAINT "kriteriapenerima_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "penyuluhanhukum" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "penyuluhanhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikpenyuluhanhukum" (
    "id" SERIAL NOT NULL,
    "kegiatanPenyuluhan" TEXT,
    "pesertaTeredukasi" TEXT,
    "institusiMitra" TEXT,
    "totalPenyuluhan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikpenyuluhanhukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sosialisasipraturanuud" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "type" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "sosialisasipraturanuud_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiksosialisasipraturanuud" (
    "id" SERIAL NOT NULL,
    "kegiatanOrginsasi" TEXT,
    "pesertaTeredukasi" TEXT,
    "institusiMitra" TEXT,
    "totalSosialisasi" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiksosialisasipraturanuud_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kekhususanhukumpidana" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "semester" TEXT,
    "sks" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kekhususanhukumpidana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prospekkarir" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prospekkarir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikkekhususanhukumpidana" (
    "id" SERIAL NOT NULL,
    "sks" TEXT,
    "mahasiswaAktif" TEXT,
    "tingkatKelulusan" TEXT,
    "alumniProfesional" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikkekhususanhukumpidana_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kekhususanhukumtatausahanegara" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "semester" TEXT,
    "sks" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kekhususanhukumtatausahanegara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prospekkarirtatausahanegara" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prospekkarirtatausahanegara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikkekhususanhukumtatausahanegara" (
    "id" SERIAL NOT NULL,
    "sks" TEXT,
    "mahasiswaAktif" TEXT,
    "tingkatKelulusan" TEXT,
    "alumniProfesional" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikkekhususanhukumtatausahanegara_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "kekhususanhukumperdata" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "semester" TEXT,
    "sks" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "kekhususanhukumperdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prospekkarirperdata" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "deskripsi" TEXT,
    "kategori" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "prospekkarirperdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikkekhususanhukumperdata" (
    "id" SERIAL NOT NULL,
    "sks" TEXT,
    "mahasiswaAktif" TEXT,
    "tingkatKelulusan" TEXT,
    "alumniProfesional" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikkekhususanhukumperdata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "daftardosen" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "nama" TEXT,
    "jabatan" TEXT,
    "nidn" TEXT,
    "deskripsi" TEXT,
    "riwayatPendidikan" JSONB,
    "keahlian" JSONB,
    "prestasi" JSONB,
    "publikasi" JSONB,
    "email" TEXT,
    "noTelp" TEXT,
    "nuptk" TEXT,
    "nik" TEXT,
    "id_sinta" TEXT,
    "tahun_publikasi" TEXT,
    "ahli" TEXT,
    "jabatan_akademik" TEXT,
    "link_sinta" TEXT,
    "link_ppdikti" TEXT,
    "urutan" TEXT,
    "jabatan_struktural" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "daftardosen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikdaftardosen" (
    "id" SERIAL NOT NULL,
    "totalDosen" TEXT,
    "profesor" TEXT,
    "doktor" TEXT,
    "publiikasiPerTahun" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikdaftardosen_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tenagakependidikan" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "nama" TEXT,
    "jabatan" TEXT,
    "nip" TEXT,
    "deskripsi" TEXT,
    "riwayatPendidikan" JSONB,
    "keahlian" JSONB,
    "tanggungJawab" JSONB,
    "prestasi" JSONB,
    "pelatihan" JSONB,
    "email" TEXT,
    "noTelp" TEXT,
    "pengalaman" JSONB,
    "nik" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tenagakependidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiktenagakependidikan" (
    "id" SERIAL NOT NULL,
    "totalTenagaKependidikan" TEXT,
    "administrasi" TEXT,
    "teknis" TEXT,
    "pustakawan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiktenagakependidikan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "himpunanmahasiswaprodihukum" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "bidang" TEXT,
    "jabatan" TEXT,
    "anggota" TEXT,
    "tentang" TEXT,
    "note" TEXT,
    "namaKetua" TEXT,
    "email" TEXT,
    "noTelp" TEXT,
    "programKerja" JSONB,
    "prestasi" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "himpunanmahasiswaprodihukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikhimpunanmahasiswaprodihukum" (
    "id" SERIAL NOT NULL,
    "bidangOrganisasi" TEXT,
    "anggotaAktif" TEXT,
    "programKerja" TEXT,
    "prestasi" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikhimpunanmahasiswaprodihukum_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dewanperwakilanmahasiswa" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "nama" TEXT,
    "jabatan" TEXT,
    "tugas" TEXT,
    "visi" TEXT,
    "misi" TEXT,
    "programKerja" JSONB,
    "pencapaian" JSONB,
    "email" TEXT,
    "noTelp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "dewanperwakilanmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikdewanperwakilanmahasiswa" (
    "id" SERIAL NOT NULL,
    "anggotaAktif" TEXT,
    "aspirasiDitampung" TEXT,
    "praturanDisusun" TEXT,
    "akuntabel" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikdewanperwakilanmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "badaneksikutifmahasiswa" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "nama" TEXT,
    "jabatan" TEXT,
    "tugas" TEXT,
    "visi" TEXT,
    "misi" TEXT,
    "programKerja" JSONB,
    "pencapaian" JSONB,
    "email" TEXT,
    "noTelp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "badaneksikutifmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikbadaneksikutifmahasiswa" (
    "id" SERIAL NOT NULL,
    "pengurusInti" TEXT,
    "programKerja" TEXT,
    "mahasiswaTerlayani" TEXT,
    "komitmen" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikbadaneksikutifmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trackerstudy" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "tugas" JSONB,
    "gajihRata" TEXT,
    "persentasi" TEXT,
    "institusi" JSONB,
    "keahlian" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trackerstudy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waktutunggukerja" (
    "id" SERIAL NOT NULL,
    "kategoriWaktu" TEXT,
    "persentasi" TEXT,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "waktutunggukerja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiktrackerstudy" (
    "id" SERIAL NOT NULL,
    "tingkatKeterserapan" TEXT,
    "rataGaji" TEXT,
    "waktuTungguKerja" TEXT,
    "kesesuaianBidang" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiktrackerstudy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trackerstudyunigal" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "tugas" JSONB,
    "gajihRata" TEXT,
    "persentasi" TEXT,
    "institusi" JSONB,
    "keahlian" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "trackerstudyunigal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "waktutunggukerjaunigal" (
    "id" SERIAL NOT NULL,
    "kategoriWaktu" TEXT,
    "persentasi" TEXT,
    "deskripsi" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "waktutunggukerjaunigal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiktrackerstudyunigal" (
    "id" SERIAL NOT NULL,
    "tingkatKeterserapan" TEXT,
    "rataGaji" TEXT,
    "waktuTungguKerja" TEXT,
    "kesesuaianBidang" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiktrackerstudyunigal_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rekapitulasipengisian" (
    "id" SERIAL NOT NULL,
    "programNama" TEXT,
    "angkatan" TEXT,
    "totalMahasiswa" TEXT,
    "jumlahResponden" TEXT,
    "kategori" JSONB,
    "persentasi" TEXT,

    CONSTRAINT "rekapitulasipengisian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rekapitulasiperkategori" (
    "id" SERIAL NOT NULL,
    "programNama" TEXT,
    "totalMahasiswa" TEXT,
    "jumlahResponden" TEXT,
    "persentasi" TEXT,

    CONSTRAINT "rekapitulasiperkategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikrekapitulasiperkategori" (
    "id" SERIAL NOT NULL,
    "totalResponden" TEXT,
    "tingkatPartisipasi" TEXT,
    "formulirLengkap" TEXT,
    "dalamProses" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikrekapitulasiperkategori_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beasiswaindonesia" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "oleh" JSONB,
    "nominal" TEXT,
    "waktu" TEXT,
    "sebanyak" TEXT,
    "tentang" TEXT,
    "persyaratan" JSONB,
    "manfaat" JSONB,
    "batasWaktu" TEXT,
    "email" TEXT,
    "noTelp" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "beasiswaindonesia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikbeasiswaindonesia" (
    "id" SERIAL NOT NULL,
    "totalPenerima" TEXT,
    "durasiBeasiswa" TEXT,
    "tingkatKompetitif" TEXT,
    "pendaftarTahunan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikbeasiswaindonesia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beasiswabri" (
    "id" SERIAL NOT NULL,
    "tentangProgram" TEXT,
    "manfaat" JSONB,
    "judulPersyaratan" TEXT,
    "persyaratan" JSONB,

    CONSTRAINT "beasiswabri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timelinebeasiswabri" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "timelinebeasiswabri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikbeasiswabri" (
    "id" SERIAL NOT NULL,
    "nilaiBeasiswa" TEXT,
    "durasi" TEXT,
    "kuota" TEXT,
    "deadline" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikbeasiswabri_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "beasiswakipkemendiksaintek" (
    "id" SERIAL NOT NULL,
    "manfaat" JSONB,
    "judulPersyaratan" TEXT,
    "persyaratan" JSONB,

    CONSTRAINT "beasiswakipkemendiksaintek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "timelinebeasiswakipkemendiksaintek" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "waktu" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "timelinebeasiswakipkemendiksaintek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikbeasiswakipkemendiksaintek" (
    "id" SERIAL NOT NULL,
    "nilaiBeasiswa" TEXT,
    "durasi" TEXT,
    "kuota" TEXT,
    "deadline" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikbeasiswakipkemendiksaintek_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "prestasimahasiswanondikti" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "juara" TEXT,
    "namaMahasiswa" TEXT,
    "kategori" JSONB,
    "deskripsi" TEXT,
    "dampak" TEXT,
    "keahlian" JSONB,
    "penghargaan" JSONB,
    "waktuKompetisi" TEXT,
    "alamat" TEXT,
    "penyelenggara" TEXT,

    CONSTRAINT "prestasimahasiswanondikti_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikprestasimahasiswanondikti" (
    "id" SERIAL NOT NULL,
    "totalPrestasi" TEXT,
    "tingkatInternasional" TEXT,
    "tingkatNasional" TEXT,
    "tingkatRegional" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikprestasimahasiswanondikti_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datarekognisi" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "tema" TEXT,
    "tingkat" TEXT,
    "tahun" TEXT,
    "deskripsi" TEXT,
    "dampak" TEXT,
    "kriteriaPenelitian" JSONB,
    "manfaat" JSONB,
    "provider" TEXT,
    "masaBerlaku" TEXT,

    CONSTRAINT "datarekognisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikdatarekognisi" (
    "id" SERIAL NOT NULL,
    "penghargaan" TEXT,
    "sertifikasi" TEXT,
    "akreditasi" TEXT,
    "rekognasiInternasional" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikdatarekognisi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataseminarmahasiswa" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "terkait" TEXT,
    "deskripsiSeminar" TEXT,
    "tujuanPembelajaran" JSONB,
    "materiDibahas" JSONB,
    "hasilDIharapkan" JSONB,
    "tanggalSeminar" TEXT,
    "waktuSeminar" TEXT,
    "lokasi" TEXT,
    "peserta" TEXT,
    "namaNarasumber" TEXT,
    "tentangNarasumber" TEXT,
    "emailNarasumber" TEXT,
    "noTelpNarasumber" TEXT,

    CONSTRAINT "dataseminarmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikdataseminarmahasiswa" (
    "id" SERIAL NOT NULL,
    "totalSeminar" TEXT,
    "totalPeserta" TEXT,
    "totalNarasumber" TEXT,
    "tingkatKepuasan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikdataseminarmahasiswa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datamahasiswamagang" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "terkait" TEXT,
    "tentangMagang" TEXT,
    "tanggungJawab" JSONB,
    "keahlian" JSONB,
    "pencapaian" JSONB,
    "perusahaanMagang" TEXT,
    "posisiMagang" TEXT,
    "periodeMagang" TEXT,
    "lokasiMagang" TEXT,
    "superVisorMagang" TEXT,
    "emailSuperVisorMagang" TEXT,

    CONSTRAINT "datamahasiswamagang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikdatamahasiswamagang" (
    "id" SERIAL NOT NULL,
    "totalMagang" TEXT,
    "mitraInstitusi" TEXT,
    "rataDurasiMagang" TEXT,
    "tingkatKepuasan" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikdatamahasiswamagang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datamahasiswaberwirausaha" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "namaMahasiswa" TEXT,
    "nimMahasiswa" TEXT,
    "tentangBisnis" TEXT,
    "produkLayanan" JSONB,
    "pencapaian" JSONB,
    "tantangan" TEXT,
    "rencanaMasaDeoan" TEXT,
    "kategori" TEXT,
    "tahunBerdiri" TEXT,
    "jumlahKaryawan" TEXT,
    "pendapatan" TEXT,
    "lokasi" TEXT,
    "noTelp" TEXT,
    "email" TEXT,
    "lokasiMahasiswa" TEXT,

    CONSTRAINT "datamahasiswaberwirausaha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikdatamahasiswaberwirausaha" (
    "id" SERIAL NOT NULL,
    "totalMahasiswaBerwirausaha" TEXT,
    "lapanganKerja" TEXT,
    "tingkatKeberhasilan" TEXT,
    "bisnisAktif" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikdatamahasiswaberwirausaha_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lowongankerja" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "perusahaan" TEXT,
    "lokasi" TEXT,
    "tipePekerjaan" TEXT,
    "gaji" TEXT,
    "pengalaman" TEXT,
    "pendidikan" TEXT,
    "batasLama" TEXT,
    "tentangPerusahaan" TEXT,
    "deskripsi" TEXT,
    "tanggungJawab" JSONB,
    "persyaratan" JSONB,
    "keahlian" JSONB,
    "benefit" JSONB,
    "email" TEXT,
    "link" TEXT,

    CONSTRAINT "lowongankerja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiklowongankerja" (
    "id" SERIAL NOT NULL,
    "lowonganAktif" TEXT,
    "partner" TEXT,
    "tingkatPenempatan" TEXT,
    "gajihRata" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistiklowongankerja_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "alumniberprestasi" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "nama" TEXT,
    "nim" TEXT,
    "lulusan" TEXT,
    "posisi" TEXT,
    "perusahaan" TEXT,
    "ipk" TEXT,
    "gaji" TEXT,
    "waktuTunggu" TEXT,
    "email" TEXT,
    "noTelp" TEXT,
    "linkedin" TEXT,
    "instagram" TEXT,
    "testimonial" TEXT,
    "perjalananKarir" JSONB,
    "keahlian" JSONB,
    "pencapaian" JSONB,
    "bidang" TEXT,

    CONSTRAINT "alumniberprestasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikalumniberprestasi" (
    "id" SERIAL NOT NULL,
    "totalAlumni" TEXT,
    "tingkatPenempatan" TEXT,
    "rataGajih" TEXT,
    "WaktuTunggu" TEXT,
    "slogan" TEXT,
    "deskripsi" TEXT,

    CONSTRAINT "statistikalumniberprestasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datamahasiswaaktif" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "jumlah" TEXT,

    CONSTRAINT "datamahasiswaaktif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikmahasiswaaktif" (
    "id" SERIAL NOT NULL,
    "mahasiswaAktif" TEXT,
    "tingkatKehadiran" TEXT,
    "ipkRataRata" TEXT,
    "mahasiswaBerprestasi" TEXT,

    CONSTRAINT "statistikmahasiswaaktif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datamahasiswanonaktif" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "jumlah" TEXT,

    CONSTRAINT "datamahasiswanonaktif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikmahasiswanonaktif" (
    "id" SERIAL NOT NULL,
    "mahasiswaNonAktif" TEXT,
    "tingkatKehadiran" TEXT,
    "ipkRataRata" TEXT,
    "mahasiswaBerprestasi" TEXT,

    CONSTRAINT "statistikmahasiswanonaktif_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datalulusanpertahun" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "jumlah" TEXT,

    CONSTRAINT "datalulusanpertahun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistiklulusanpertahun" (
    "id" SERIAL NOT NULL,
    "totalLulusan" TEXT,
    "tahun1" TEXT,
    "tahun2" TEXT,
    "tingkatKelulusan" TEXT,

    CONSTRAINT "statistiklulusanpertahun_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mou" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "partnerInstitution" TEXT,
    "partnerType" TEXT,
    "signingDate" TEXT,
    "expiryDate" TEXT,
    "mouNumber" TEXT,
    "scope" TEXT,
    "status" TEXT,
    "duration" TEXT,
    "objectives" TEXT,
    "contactPerson" TEXT,
    "description" TEXT,
    "implementation" TEXT,
    "benefits" TEXT,

    CONSTRAINT "mou_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikmou" (
    "id" SERIAL NOT NULL,
    "totalMoU" TEXT,
    "aktif" TEXT,
    "dalamProses" TEXT,
    "tidakAktif" TEXT,

    CONSTRAINT "statistikmou_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "moa" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "agreementNumber" TEXT,
    "parties" TEXT,
    "signingDate" TEXT,
    "effectiveDate" TEXT,
    "agreementType" TEXT,
    "scope" TEXT,
    "status" TEXT,
    "duration" TEXT,
    "objectives" TEXT,
    "responsibilities" TEXT,
    "financialTerms" TEXT,
    "terminationClause" TEXT,
    "description" TEXT,
    "implementation" TEXT,
    "benefits" TEXT,

    CONSTRAINT "moa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikmoa" (
    "id" SERIAL NOT NULL,
    "totalMoA" TEXT,
    "aktif" TEXT,
    "dalamProses" TEXT,
    "tidakAktif" TEXT,

    CONSTRAINT "statistikmoa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "datapkpa" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "jumlah" TEXT,

    CONSTRAINT "datapkpa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikpkpa" (
    "id" SERIAL NOT NULL,
    "pesertaPKPA" TEXT,
    "angkatan" TEXT,
    "tingkatKelulusan" TEXT,
    "mitraHukum" TEXT,

    CONSTRAINT "statistikpkpa_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "dataperadilansemu" (
    "id" SERIAL NOT NULL,
    "foto" TEXT,
    "title" TEXT,
    "deskripsi" TEXT,
    "jumlah" TEXT,

    CONSTRAINT "dataperadilansemu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "statistikperadilansemu" (
    "id" SERIAL NOT NULL,
    "sidangSemu" TEXT,
    "peserta" TEXT,
    "tingkatKepuasan" TEXT,
    "kasusSimulasi" TEXT,

    CONSTRAINT "statistikperadilansemu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "akreditasi" (
    "id" SERIAL NOT NULL,
    "type" TEXT,
    "title" TEXT,
    "document" JSONB,

    CONSTRAINT "akreditasi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "berita" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "konten" TEXT,
    "kategori" TEXT,
    "penulis" TEXT,
    "tanggalPublikasi" TIMESTAMP(3),
    "foto" TEXT,
    "galeri" JSONB,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "berita_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "pengumuman" (
    "id" SERIAL NOT NULL,
    "judul" TEXT NOT NULL,
    "konten" TEXT NOT NULL,
    "kategori" TEXT NOT NULL,
    "prioritas" TEXT NOT NULL,
    "tanggalMulai" TIMESTAMP(3) NOT NULL,
    "tanggalBerakhir" TIMESTAMP(3),
    "lampiran" JSONB NOT NULL,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "pengumuman_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "testimoni" (
    "id" SERIAL NOT NULL,
    "judul" TEXT,
    "nama" TEXT,
    "jabatan" TEXT,
    "foto" TEXT,
    "galeri" JSONB,
    "konten" TEXT,
    "kategori" TEXT,
    "note" TEXT,
    "tanggalPublikasi" TEXT,
    "aktif" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "testimoni_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "dosen_nidn_key" ON "dosen"("nidn");

-- CreateIndex
CREATE UNIQUE INDEX "suratmasuk_nomorSurat_key" ON "suratmasuk"("nomorSurat");

-- CreateIndex
CREATE UNIQUE INDEX "suratkeluar_nomorSurat_key" ON "suratkeluar"("nomorSurat");

-- CreateIndex
CREATE UNIQUE INDEX "kekhususan_nama_key" ON "kekhususan"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "kekhususan_slug_key" ON "kekhususan"("slug");

-- AddForeignKey
ALTER TABLE "kategorirekapitulasi" ADD CONSTRAINT "kategorirekapitulasi_rekapitulasiId_fkey" FOREIGN KEY ("rekapitulasiId") REFERENCES "rekapitulasisurvey"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "matakuliahkekhususan" ADD CONSTRAINT "matakuliahkekhususan_kekhususanId_fkey" FOREIGN KEY ("kekhususanId") REFERENCES "kekhususan"("id") ON DELETE CASCADE ON UPDATE CASCADE;
