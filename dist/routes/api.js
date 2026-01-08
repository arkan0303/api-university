"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const heroSectionController_1 = __importDefault(require("../controllers/heroSectionController"));
const multer_1 = __importDefault(require("../config/multer"));
const beritaController_1 = __importDefault(require("../controllers/beritaController"));
const testimoniController_1 = __importDefault(require("../controllers/testimoniController"));
const sejarahS1Controller_1 = __importDefault(require("../controllers/sejarahS1Controller"));
const saranaPrasaranaController_1 = __importDefault(require("../controllers/saranaPrasaranaController"));
const rencanaStartegisController_1 = __importDefault(require("../controllers/rencanaStartegisController"));
const senatFakultasController_1 = __importDefault(require("../controllers/senatFakultasController"));
const sejarahS2Controller_1 = __importDefault(require("../controllers/sejarahS2Controller"));
const visi_misi_controller_1 = __importDefault(require("../controllers/visi-misi-controller"));
const struktur_organisasi_controller_1 = __importDefault(require("../controllers/struktur-organisasi-controller"));
const pimpinan_controller_1 = __importDefault(require("../controllers/pimpinan-controller"));
const program_sarjana_hukum_controller_1 = __importDefault(require("../controllers/program-sarjana-hukum-controller"));
const program_masgister_hukum_controller_1 = __importDefault(require("../controllers/program-masgister-hukum-controller"));
const surat_masuk_controller_1 = __importDefault(require("../controllers/surat-masuk-controller"));
const surat_keluar_controller_1 = __importDefault(require("../controllers/surat-keluar-controller"));
const keterangan_aktif_mhs_controller_1 = __importDefault(require("../controllers/keterangan-aktif-mhs-controller"));
const surat_ijin_penelitian_controller_1 = __importDefault(require("../controllers/surat-ijin-penelitian-controller"));
const surat_kelakuan_baik_controller_1 = __importDefault(require("../controllers/surat-kelakuan-baik-controller"));
const surat_pengajuan_beasiswa_controller_1 = __importDefault(require("../controllers/surat-pengajuan-beasiswa-controller"));
const seminar_proposal_controller_1 = __importDefault(require("../controllers/seminar-proposal-controller"));
const sidang_skripsi_controller_1 = __importDefault(require("../controllers/sidang-skripsi-controller"));
const keterangan_pendamping_controller_1 = __importDefault(require("../controllers/keterangan-pendamping-controller"));
const ujian_komprehensif_controller_1 = __importDefault(require("../controllers/ujian-komprehensif-controller"));
const matrikulasi_controller_1 = __importDefault(require("../controllers/matrikulasi-controller"));
const kelompok_riset_controller_1 = __importDefault(require("../controllers/kelompok-riset-controller"));
const sejarah_lbkh_controller_1 = __importDefault(require("../controllers/sejarah-lbkh-controller"));
const visi_misi_lbkh_controller_1 = __importDefault(require("../controllers/visi-misi-lbkh-controller"));
const pengurus_lbkh_controller_1 = __importDefault(require("../controllers/pengurus-lbkh-controller"));
const advokat_paralegal_controller_1 = __importDefault(require("../controllers/advokat-paralegal-controller"));
const konsultasi_hukum_controller_1 = __importDefault(require("../controllers/konsultasi-hukum-controller"));
const pendampingan_hukum_controller_1 = __importDefault(require("../controllers/pendampingan-hukum-controller"));
const pembuatan_legal_controller_1 = __importDefault(require("../controllers/pembuatan-legal-controller"));
const saksi_ahli_controller_1 = __importDefault(require("../controllers/saksi-ahli-controller"));
const layanan_mediasi_controller_1 = __importDefault(require("../controllers/layanan-mediasi-controller"));
const layanan_probono_controller_1 = __importDefault(require("../controllers/layanan-probono-controller"));
const penyukuhan_hukum_controller_1 = __importDefault(require("../controllers/penyukuhan-hukum-controller"));
const sosialisasi_praturanUUD_controller_1 = __importDefault(require("../controllers/sosialisasi-praturanUUD-controller"));
const kekhususan_hukum_pidana_controller_1 = __importDefault(require("../controllers/kekhususan-hukum-pidana-controller"));
const kekhususa_hukum_tatausaha_controller_1 = __importDefault(require("../controllers/kekhususa-hukum-tatausaha-controller"));
const kekhususan_hukum_perdata_controller_1 = __importDefault(require("../controllers/kekhususan-hukum-perdata-controller"));
const daftar_dosen_controller_1 = __importDefault(require("../controllers/daftar-dosen-controller"));
const daftar_kependidikan_controller_1 = __importDefault(require("../controllers/daftar-kependidikan-controller"));
const himpunan_mahasiswa_prodi_hukum_1 = __importDefault(require("../controllers/himpunan-mahasiswa-prodi-hukum"));
const dewan_perwakilan_mahasiswa_controller_1 = __importDefault(require("../controllers/dewan-perwakilan-mahasiswa-controller"));
const badan_eksekutif_mahasiswa_controller_1 = __importDefault(require("../controllers/badan-eksekutif-mahasiswa-controller"));
const tracker_studi_controller_1 = __importDefault(require("../controllers/tracker-studi-controller"));
const tracker_study_unigal_controller_1 = __importDefault(require("../controllers/tracker-study-unigal-controller"));
const rekapitulasi_pengisian_controller_1 = __importDefault(require("../controllers/rekapitulasi-pengisian-controller"));
const beasiswa_indonesia_controller_1 = __importDefault(require("../controllers/beasiswa-indonesia-controller"));
const beasiswa_bri_controller_1 = __importDefault(require("../controllers/beasiswa-bri-controller"));
const beasiswa_kpi_controller_1 = __importDefault(require("../controllers/beasiswa-kpi-controller"));
const prestasi_mahasiswa_nondikti_controller_1 = __importDefault(require("../controllers/prestasi-mahasiswa-nondikti-controller"));
const data_rekognisi_controller_1 = __importDefault(require("../controllers/data-rekognisi-controller"));
const data_seminar_mahasiswa_controller_1 = __importDefault(require("../controllers/data-seminar-mahasiswa-controller"));
const data_magang_mahasiswa_controller_1 = __importDefault(require("../controllers/data-magang-mahasiswa-controller"));
const data_mahasiswa_berwirausaha_controller_1 = __importDefault(require("../controllers/data-mahasiswa-berwirausaha-controller"));
const lowongan_kerja_controller_1 = __importDefault(require("../controllers/lowongan-kerja-controller"));
const alumni_berprestasi_controller_1 = __importDefault(require("../controllers/alumni-berprestasi-controller"));
const data_mahasiswa_aktif_controller_1 = __importDefault(require("../controllers/data-mahasiswa-aktif-controller"));
const data_mahasiswa_nonaktif_controller_1 = __importDefault(require("../controllers/data-mahasiswa-nonaktif-controller"));
const data_lulusan_pertahun_controller_1 = __importDefault(require("../controllers/data-lulusan-pertahun-controller"));
const mou_controller_1 = __importDefault(require("../controllers/mou-controller"));
const moa_controller_1 = __importDefault(require("../controllers/moa-controller"));
const data_pkpa_controller_1 = __importDefault(require("../controllers/data-pkpa-controller"));
const data_peradilan_semu_service_1 = __importDefault(require("../controllers/data-peradilan-semu-service"));
const router = express_1.default.Router();
const heroSectionController = new heroSectionController_1.default();
// Apply the upload middleware to the route
router.post("/hero-section", heroSectionController_1.default.uploadImage(), heroSectionController.createHeroSection.bind(heroSectionController));
router.get("/hero-section", heroSectionController.getDataHeroSection.bind(heroSectionController));
router.delete("/hero-section/:id", heroSectionController.delete.bind(heroSectionController));
router.put("/hero-section/:id", heroSectionController_1.default.uploadImage(), heroSectionController.update.bind(heroSectionController));
router.post("/berita", multer_1.default.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return beritaController_1.default.createBerita(req, res);
});
router.get("/berita", beritaController_1.default.getAllBerita.bind(beritaController_1.default));
router.put("/berita/:id", multer_1.default.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return beritaController_1.default.updateBerita(req, res);
});
router.delete("/berita/:id", beritaController_1.default.deleteDataBerita.bind(beritaController_1.default));
router.post("/testimoni", multer_1.default.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return testimoniController_1.default.createTestimoni(req, res);
});
router.get("/testimoni", testimoniController_1.default.getAllTestimoni.bind(testimoniController_1.default));
router.delete("/testimoni/:id", testimoniController_1.default.deleteTestimoni.bind(testimoniController_1.default));
router.put("/testimoni/:id", multer_1.default.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return testimoniController_1.default.update(req, res);
});
router.post("/sejarah-s1", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS1Controller_1.default.createSejarahS1(req, res);
});
router.get("/sejarah-s1", sejarahS1Controller_1.default.getAllSejarahS1.bind(sejarahS1Controller_1.default));
router.put("/sejarah-s1/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS1Controller_1.default.updateSejarahS1(req, res);
});
router.delete("/sejarah-s1/:id", sejarahS1Controller_1.default.deleteData.bind(sejarahS1Controller_1.default));
router.post("/sejarah-s1/banner", multer_1.default.fields([{ name: "banner", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS1Controller_1.default.createSejarahS1Banner(req, res);
});
router.put("/sejarah-s1/banner/:id", multer_1.default.fields([{ name: "banner", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS1Controller_1.default.updateSejarahS1Banner(req, res);
});
router.delete("/sejarah-s1/banner/:id", sejarahS1Controller_1.default.deleteBanner.bind(sejarahS1Controller_1.default));
router.get("/sejarah-s1/banner", sejarahS1Controller_1.default.getDataBanner.bind(sejarahS1Controller_1.default));
router.post("/sejarah-s1/statistik", sejarahS1Controller_1.default.createStatistikSejarahS1.bind(sejarahS1Controller_1.default));
router.put("/sejarah-s1/statistik/:id", sejarahS1Controller_1.default.updateStatistikSejarahS1.bind(sejarahS1Controller_1.default));
router.delete("/sejarah-s1/statistik/:id", sejarahS1Controller_1.default.deleteStatistikSejarahS1.bind(sejarahS1Controller_1.default));
router.get("/sejarah-s1/statistik", sejarahS1Controller_1.default.getAllStatistikSejarahS1.bind(sejarahS1Controller_1.default));
router.post("/sarana-prasarana", multer_1.default.fields([{ name: "foto", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saranaPrasaranaController_1.default.createSaranaPrasarana(req, res);
});
router.get("/sarana-prasarana", saranaPrasaranaController_1.default.getAllSaranaPrasarana.bind(saranaPrasaranaController_1.default));
router.put("/sarana-prasarana/:id", multer_1.default.fields([{ name: "foto", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saranaPrasaranaController_1.default.updateSaranaPrasarana(req, res);
});
router.delete("/sarana-prasarana/:id", saranaPrasaranaController_1.default.deleteSaranaPrasarana.bind(saranaPrasaranaController_1.default));
router.post("/sarana-prasarana/banner", multer_1.default.fields([{ name: "banner", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saranaPrasaranaController_1.default.createBannerSaranaPrasarana(req, res);
});
router.put("/sarana-prasarana/banner/:id", multer_1.default.fields([{ name: "banner", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saranaPrasaranaController_1.default.updateBannerSaranaPrasarana(req, res);
});
router.delete("/sarana-prasarana/banner/:id", saranaPrasaranaController_1.default.deleteBannerSaranaPrasarana.bind(saranaPrasaranaController_1.default));
router.get("/sarana-prasarana/banner", saranaPrasaranaController_1.default.getDataBanner.bind(saranaPrasaranaController_1.default));
router.post("/sarana-prasarana/statistik", saranaPrasaranaController_1.default.createStatistikSaranaPrasarana.bind(saranaPrasaranaController_1.default));
router.put("/sarana-prasarana/statistik/:id", saranaPrasaranaController_1.default.updateStatistikSaranaPrasarana.bind(saranaPrasaranaController_1.default));
router.delete("/sarana-prasarana/statistik/:id", saranaPrasaranaController_1.default.deleteStatistikSaranaPrasarana.bind(saranaPrasaranaController_1.default));
router.get("/sarana-prasarana/statistik", saranaPrasaranaController_1.default.getAllStatistikSaranaPrasarana.bind(saranaPrasaranaController_1.default));
router.post("/rencana-strategis", multer_1.default.fields([{ name: "foto", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return rencanaStartegisController_1.default.createRencanaStrategis(req, res);
});
router.delete("/rencana-strategis/:id", rencanaStartegisController_1.default.deleteRencanaStrategis.bind(rencanaStartegisController_1.default));
router.put("/rencana-strategis/:id", multer_1.default.fields([{ name: "foto", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return rencanaStartegisController_1.default.updateRencanaStrategis(req, res);
});
router.get("/rencana-strategis", rencanaStartegisController_1.default.getAllRencanaStrategis.bind(rencanaStartegisController_1.default));
router.post("/rencana-strategis/statistik", rencanaStartegisController_1.default.createStatistikStrategis.bind(rencanaStartegisController_1.default));
router.put("/rencana-strategis/statistik/:id", rencanaStartegisController_1.default.updateStatistikStrategis.bind(rencanaStartegisController_1.default));
router.delete("/rencana-strategis/statistik/:id", rencanaStartegisController_1.default.deleteStatistikStrategis.bind(rencanaStartegisController_1.default));
router.get("/rencana-strategis/statistik", rencanaStartegisController_1.default.getAllStatistikStrategis.bind(rencanaStartegisController_1.default));
router.post("/senat-fakultas", multer_1.default.fields([
    { name: "foto", maxCount: 5 },
    { name: "galeri", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return senatFakultasController_1.default.createSenatFakultas(req, res);
});
router.get("/senat-fakultas", senatFakultasController_1.default.getAllSenatFakultas.bind(senatFakultasController_1.default));
router.put("/senat-fakultas/:id", multer_1.default.fields([
    { name: "foto", maxCount: 5 },
    { name: "galeri", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return senatFakultasController_1.default.updateSenatFakultas(req, res);
});
router.delete("/senat-fakultas/:id", senatFakultasController_1.default.deleteSenatFakultas.bind(senatFakultasController_1.default));
router.post("/senat-fakultas/statistik", senatFakultasController_1.default.createStatistikSenatFakultas.bind(senatFakultasController_1.default));
router.put("/senat-fakultas/statistik/:id", senatFakultasController_1.default.updateStatistikSenatFakultas.bind(senatFakultasController_1.default));
router.delete("/senat-fakultas/statistik/:id", senatFakultasController_1.default.deleteStatistikSenatFakultas.bind(senatFakultasController_1.default));
router.get("/senat-fakultas/statistik", senatFakultasController_1.default.getAllStatistikSenatFakultas.bind(senatFakultasController_1.default));
router.post("/sejarah-s2", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS2Controller_1.default.createSejarahS2(req, res);
});
router.get("/sejarah-s2", sejarahS2Controller_1.default.getAllSejarahS2.bind(sejarahS2Controller_1.default));
router.put("/sejarah-s2/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS2Controller_1.default.updateSejarahS2(req, res);
});
router.delete("/sejarah-s2/:id", sejarahS2Controller_1.default.deleteData.bind(sejarahS2Controller_1.default));
router.post("/sejarah-s2/statistik", sejarahS2Controller_1.default.createStatistikSejarahS2.bind(sejarahS2Controller_1.default));
router.put("/sejarah-s2/statistik/:id", sejarahS2Controller_1.default.updateStatistikSejarahS2.bind(sejarahS2Controller_1.default));
router.delete("/sejarah-s2/statistik/:id", sejarahS2Controller_1.default.deleteStatistikSejarahS2.bind(sejarahS2Controller_1.default));
router.get("/sejarah-s2/statistik", sejarahS2Controller_1.default.getAllStatistikSejarahS2.bind(sejarahS2Controller_1.default));
router.post("/sejarah-s2/banner", multer_1.default.fields([{ name: "banner", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS2Controller_1.default.createSejarahS2Banner(req, res);
});
router.put("/sejarah-s2/banner/:id", multer_1.default.fields([{ name: "banner", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarahS2Controller_1.default.updateSejarahS2Banner(req, res);
});
router.delete("/sejarah-s2/banner/:id", sejarahS2Controller_1.default.deleteSejarahS2Banner.bind(sejarahS2Controller_1.default));
router.get("/sejarah-s2/banner", sejarahS2Controller_1.default.getDataBanner.bind(sejarahS2Controller_1.default));
router.post("/visi-misi", multer_1.default.fields([{ name: "gambar", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return visi_misi_controller_1.default.createVisMisi(req, res);
});
router.get("/visi-misi", visi_misi_controller_1.default.getAllVisMisi.bind(visi_misi_controller_1.default));
router.put("/visi-misi/:id", multer_1.default.fields([{ name: "gambar", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return visi_misi_controller_1.default.updateVisMisi(req, res);
});
router.delete("/visi-misi/:id", visi_misi_controller_1.default.deleteVisMisi.bind(visi_misi_controller_1.default));
router.post("/visi-misi/statistik", visi_misi_controller_1.default.createStatistikVisiMisi.bind(visi_misi_controller_1.default));
router.put("/visi-misi/statistik/:id", visi_misi_controller_1.default.updateStatistikVisiMisi.bind(visi_misi_controller_1.default));
router.delete("/visi-misi/statistik/:id", visi_misi_controller_1.default.deleteStatistikVisiMisi.bind(visi_misi_controller_1.default));
router.get("/visi-misi/statistik", visi_misi_controller_1.default.getAllStatistikVisiMisi.bind(visi_misi_controller_1.default));
router.post("/struktur-organisasi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return struktur_organisasi_controller_1.default.createStrukturOrganisasi(req, res);
});
router.get("/struktur-organisasi", struktur_organisasi_controller_1.default.getAllStrukturOrganisasi.bind(struktur_organisasi_controller_1.default));
router.put("/struktur-organisasi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return struktur_organisasi_controller_1.default.updateStrukturOrganisasi(req, res);
});
router.delete("/struktur-organisasi/:id", struktur_organisasi_controller_1.default.deleteStrukturOrganisasi.bind(struktur_organisasi_controller_1.default));
router.post("/struktur-organisasi/statistik", struktur_organisasi_controller_1.default.createStatistikStrukturOrganisasi.bind(struktur_organisasi_controller_1.default));
router.put("/struktur-organisasi/statistik/:id", struktur_organisasi_controller_1.default.updateStatistikStrukturOrganisasi.bind(struktur_organisasi_controller_1.default));
router.delete("/struktur-organisasi/statistik/:id", struktur_organisasi_controller_1.default.deleteStatistikStrukturOrganisasi.bind(struktur_organisasi_controller_1.default));
router.get("/struktur-organisasi/statistik", struktur_organisasi_controller_1.default.getAllStatistikStrukturOrganisasi.bind(struktur_organisasi_controller_1.default));
router.post("/pimpinan", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pimpinan_controller_1.default.createPimpinan(req, res);
});
router.get("/pimpinan", pimpinan_controller_1.default.getAllPimpinan.bind(pimpinan_controller_1.default));
router.put("/pimpinan/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pimpinan_controller_1.default.updatePimpinan(req, res);
});
router.delete("/pimpinan/:id", pimpinan_controller_1.default.deletePimpinan.bind(pimpinan_controller_1.default));
router.post("/pimpinan/statistik", pimpinan_controller_1.default.createStatistikPimpinan.bind(pimpinan_controller_1.default));
router.put("/pimpinan/statistik/:id", pimpinan_controller_1.default.updateStatistikPimpinan.bind(pimpinan_controller_1.default));
router.delete("/pimpinan/statistik/:id", pimpinan_controller_1.default.deleteStatistikPimpinan.bind(pimpinan_controller_1.default));
router.get("/pimpinan/statistik", pimpinan_controller_1.default.getAllStatistikPimpinan.bind(pimpinan_controller_1.default));
router.post("/program-sarjana-hukum", multer_1.default.fields([{ name: "dokumen_rps", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return program_sarjana_hukum_controller_1.default.createProgramSarjanaHukum(req, res);
});
router.get("/program-sarjana-hukum", program_sarjana_hukum_controller_1.default.getAllProgramSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.put("/program-sarjana-hukum/:id", multer_1.default.fields([{ name: "dokumen_rps", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return program_sarjana_hukum_controller_1.default.updateProgramSarjanaHukum(req, res);
});
router.delete("/program-sarjana-hukum/:id", program_sarjana_hukum_controller_1.default.deleteProgramSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.post("/program-sarjana-hukum/statistik", program_sarjana_hukum_controller_1.default.createStatistikProgramSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.put("/program-sarjana-hukum/statistik/:id", program_sarjana_hukum_controller_1.default.updateStatistikProgramSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.delete("/program-sarjana-hukum/statistik/:id", program_sarjana_hukum_controller_1.default.deleteStatistikProgramSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.get("/program-sarjana-hukum/statistik", program_sarjana_hukum_controller_1.default.getAllStatistikProgramSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.post("/program-sarjana-hukum/prospek-karir", program_sarjana_hukum_controller_1.default.createProspekKarirSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.put("/program-sarjana-hukum/prospek-karir/:id", program_sarjana_hukum_controller_1.default.updateProspekKarirSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.delete("/program-sarjana-hukum/prospek-karir/:id", program_sarjana_hukum_controller_1.default.deleteProspekKarirSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.get("/program-sarjana-hukum/prospek-karir", program_sarjana_hukum_controller_1.default.getAllProspekKarirSarjanaHukum.bind(program_sarjana_hukum_controller_1.default));
router.post("/program-magister-hukum", multer_1.default.fields([{ name: "image", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return program_masgister_hukum_controller_1.default.createProgramMagisterHukum(req, res);
});
router.get("/program-magister-hukum", program_masgister_hukum_controller_1.default.getAllProgramMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.put("/program-magister-hukum/:id", multer_1.default.fields([{ name: "image", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return program_masgister_hukum_controller_1.default.updateProgramMagisterHukum(req, res);
});
router.delete("/program-magister-hukum/:id", program_masgister_hukum_controller_1.default.deleteProgramMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.post("/program-magister-hukum/statistik", program_masgister_hukum_controller_1.default.createStatistikProgramMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.get("/program-magister-hukum/statistik", program_masgister_hukum_controller_1.default.getAllStatistikProgramMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.put("/program-magister-hukum/statistik/:id", program_masgister_hukum_controller_1.default.updateStatistikProgramMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.delete("/program-magister-hukum/statistik/:id", program_masgister_hukum_controller_1.default.deleteStatistikProgramMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.post("/program-magister-hukum/prospek-karir", multer_1.default.fields([{ name: "image", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return program_masgister_hukum_controller_1.default.createProspekKarirMagisterHukum(req, res);
});
router.put("/program-magister-hukum/prospek-karir/:id", multer_1.default.fields([{ name: "image", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return program_masgister_hukum_controller_1.default.updateProspekKarirMagisterHukum(req, res);
});
router.delete("/program-magister-hukum/prospek-karir/:id", program_masgister_hukum_controller_1.default.deleteProspekKarirMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.get("/program-magister-hukum/prospek-karir", program_masgister_hukum_controller_1.default.getAllProspekKarirMagisterHukum.bind(program_masgister_hukum_controller_1.default));
router.post("/surat-masuk", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_masuk_controller_1.default.createSuratMasuk(req, res);
});
router.get("/surat-masuk", surat_masuk_controller_1.default.getAllSuratMasuk.bind(surat_masuk_controller_1.default));
router.put("/surat-masuk/:id", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_masuk_controller_1.default.updateSuratMasuk(req, res);
});
router.delete("/surat-masuk/:id", surat_masuk_controller_1.default.deleteSuratMasuk.bind(surat_masuk_controller_1.default));
router.post("/surat-masuk/statistik", surat_masuk_controller_1.default.createStatistikArsipSuratMasuk.bind(surat_masuk_controller_1.default));
router.get("/surat-masuk/statistik", surat_masuk_controller_1.default.getAllStatistikArsipSuratMasuk.bind(surat_masuk_controller_1.default));
router.put("/surat-masuk/statistik/:id", surat_masuk_controller_1.default.updateStatistikArsipSuratMasuk.bind(surat_masuk_controller_1.default));
router.delete("/surat-masuk/statistik/:id", surat_masuk_controller_1.default.deleteStatistikArsipSuratMasuk.bind(surat_masuk_controller_1.default));
router.post("/surat-keluar", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_keluar_controller_1.default.createSuratKeluar(req, res);
});
router.get("/surat-keluar", surat_keluar_controller_1.default.getAllSuratKeluar.bind(surat_keluar_controller_1.default));
router.put("/surat-keluar/:id", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_keluar_controller_1.default.updateSuratKeluar(req, res);
});
router.delete("/surat-keluar/:id", surat_keluar_controller_1.default.deleteSuratKeluar.bind(surat_keluar_controller_1.default));
router.post("/surat-keluar/statistik", surat_keluar_controller_1.default.createStatistikArsipSuratKeluar.bind(surat_keluar_controller_1.default));
router.get("/surat-keluar/statistik", surat_keluar_controller_1.default.getAllStatistikArsipSuratKeluar.bind(surat_keluar_controller_1.default));
router.put("/surat-keluar/statistik/:id", surat_keluar_controller_1.default.updateStatistikArsipSuratKeluar.bind(surat_keluar_controller_1.default));
router.delete("/surat-keluar/statistik/:id", surat_keluar_controller_1.default.deleteStatistikArsipSuratKeluar.bind(surat_keluar_controller_1.default));
router.post("/keterangan-aktif-mhs", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return keterangan_aktif_mhs_controller_1.default.createKeteranganAktifMahasiswa(req, res);
});
router.get("/keterangan-aktif-mhs", keterangan_aktif_mhs_controller_1.default.getAllKeteranganAktifMahasiswa.bind(keterangan_aktif_mhs_controller_1.default));
router.put("/keterangan-aktif-mhs/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return keterangan_aktif_mhs_controller_1.default.updateKeteranganAktifMahasiswa(req, res);
});
router.delete("/keterangan-aktif-mhs/:id", keterangan_aktif_mhs_controller_1.default.deleteKeteranganAktifMahasiswa.bind(keterangan_aktif_mhs_controller_1.default));
router.post("/keterangan-aktif-mhs/statistik", keterangan_aktif_mhs_controller_1.default.createStatistikKeteranganAktifMahasiswa.bind(keterangan_aktif_mhs_controller_1.default));
router.get("/keterangan-aktif-mhs/statistik", keterangan_aktif_mhs_controller_1.default.getAllStatistikKeteranganAktifMahasiswa.bind(keterangan_aktif_mhs_controller_1.default));
router.put("/keterangan-aktif-mhs/statistik/:id", keterangan_aktif_mhs_controller_1.default.updateStatistikKeteranganAktifMahasiswa.bind(keterangan_aktif_mhs_controller_1.default));
router.delete("/keterangan-aktif-mhs/statistik/:id", keterangan_aktif_mhs_controller_1.default.deleteStatistikKeteranganAktifMahasiswa.bind(keterangan_aktif_mhs_controller_1.default));
router.post("/surat-ijin-penelitian", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_ijin_penelitian_controller_1.default.createSuratIjinPenelitian(req, res);
});
router.get("/surat-ijin-penelitian", surat_ijin_penelitian_controller_1.default.getAllSuratIjinPenelitian.bind(surat_ijin_penelitian_controller_1.default));
router.put("/surat-ijin-penelitian/:id", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_ijin_penelitian_controller_1.default.updateSuratIjinPenelitian(req, res);
});
router.delete("/surat-ijin-penelitian/:id", surat_ijin_penelitian_controller_1.default.deleteSuratIjinPenelitian.bind(surat_ijin_penelitian_controller_1.default));
router.get("/keterangan-aktif-mhs/data", keterangan_aktif_mhs_controller_1.default.getAllDataKeteranganAktifMahasiswa.bind(keterangan_aktif_mhs_controller_1.default));
router.post("/surat-ijin-penelitian/statistik", surat_ijin_penelitian_controller_1.default.createStatistikSuratIjinPenelitian.bind(surat_ijin_penelitian_controller_1.default));
router.get("/surat-ijin-penelitian/statistik", surat_ijin_penelitian_controller_1.default.getStatistikSuratIjinPenelitian.bind(surat_ijin_penelitian_controller_1.default));
router.put("/surat-ijin-penelitian/statistik/:id", surat_ijin_penelitian_controller_1.default.updateStatistikSuratIjinPenelitian.bind(surat_ijin_penelitian_controller_1.default));
router.delete("/surat-ijin-penelitian/statistik/:id", surat_ijin_penelitian_controller_1.default.deleteStatistikSuratIjinPenelitian.bind(surat_ijin_penelitian_controller_1.default));
router.post("/surat-kelakuan-baik", surat_kelakuan_baik_controller_1.default.createSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.get("/surat-kelakuan-baik", surat_kelakuan_baik_controller_1.default.getAllSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.put("/surat-kelakuan-baik/:id", surat_kelakuan_baik_controller_1.default.updateSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.delete("/surat-kelakuan-baik/:id", surat_kelakuan_baik_controller_1.default.deleteSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.get("/surat-kelakuan-baik/statistik", surat_kelakuan_baik_controller_1.default.getStatistikSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.put("/surat-kelakuan-baik/statistik/:id", surat_kelakuan_baik_controller_1.default.updateStatistikSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.delete("/surat-kelakuan-baik/statistik/:id", surat_kelakuan_baik_controller_1.default.deleteStatistikSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.post("/surat-kelakuan-baik/statistik", surat_kelakuan_baik_controller_1.default.createStatistikSuratKelakuanBaik.bind(surat_kelakuan_baik_controller_1.default));
router.post("/surat-pengajuan-beasiswa", multer_1.default.fields([{ name: "dokumen", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_pengajuan_beasiswa_controller_1.default.createSuratPengajuanBeasiswa(req, res);
});
router.get("/surat-pengajuan-beasiswa", surat_pengajuan_beasiswa_controller_1.default.getAllSuratPengajuanBeasiswa.bind(surat_pengajuan_beasiswa_controller_1.default));
router.put("/surat-pengajuan-beasiswa/:id", multer_1.default.fields([{ name: "dokumen", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return surat_pengajuan_beasiswa_controller_1.default.updateSuratPengajuanBeasiswa(req, res);
});
router.delete("/surat-pengajuan-beasiswa/:id", surat_pengajuan_beasiswa_controller_1.default.deleteSuratPengajuanBeasiswa.bind(surat_pengajuan_beasiswa_controller_1.default));
router.get("/surat-pengajuan-beasiswa/statistik", surat_pengajuan_beasiswa_controller_1.default.getStatistikSuratPengajuanBeasiswa.bind(surat_pengajuan_beasiswa_controller_1.default));
router.put("/surat-pengajuan-beasiswa/statistik/:id", surat_pengajuan_beasiswa_controller_1.default.updateStatistikSuratPengajuanBeasiswa.bind(surat_pengajuan_beasiswa_controller_1.default));
router.delete("/surat-pengajuan-beasiswa/statistik/:id", surat_pengajuan_beasiswa_controller_1.default.deleteStatistikSuratPengajuanBeasiswa.bind(surat_pengajuan_beasiswa_controller_1.default));
router.post("/surat-pengajuan-beasiswa/statistik", surat_pengajuan_beasiswa_controller_1.default.createStatistikSuratPengajuanBeasiswa.bind(surat_pengajuan_beasiswa_controller_1.default));
router.post("/seminar-proposal", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return seminar_proposal_controller_1.default.createSeminarProposal(req, res);
});
router.get("/seminar-proposal", seminar_proposal_controller_1.default.getAllSeminarProposal.bind(seminar_proposal_controller_1.default));
router.put("/seminar-proposal/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return seminar_proposal_controller_1.default.updateSeminarProposal(req, res);
});
router.delete("/seminar-proposal/:id", seminar_proposal_controller_1.default.deleteSeminarProposal.bind(seminar_proposal_controller_1.default));
router.post("/prosedur-pelaksanaan", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return seminar_proposal_controller_1.default.createProsedurPelaksanaan(req, res);
});
router.get("/prosedur-pelaksanaan", seminar_proposal_controller_1.default.getAllProsedurPelaksanaan.bind(seminar_proposal_controller_1.default));
router.put("/prosedur-pelaksanaan/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return seminar_proposal_controller_1.default.updateProsedurPelaksanaan(req, res);
});
router.delete("/prosedur-pelaksanaan/:id", seminar_proposal_controller_1.default.deleteProsedurPelaksanaan.bind(seminar_proposal_controller_1.default));
router.post("/seminar-proposal/statistik", seminar_proposal_controller_1.default.createStatistikSeminarProposal.bind(seminar_proposal_controller_1.default));
router.get("/seminar-proposal/statistik", seminar_proposal_controller_1.default.getAllStatistikSeminarProposal.bind(seminar_proposal_controller_1.default));
router.put("/seminar-proposal/statistik/:id", seminar_proposal_controller_1.default.updateStatistikSeminarProposal.bind(seminar_proposal_controller_1.default));
router.delete("/seminar-proposal/statistik/:id", seminar_proposal_controller_1.default.deleteStatistikSeminarProposal.bind(seminar_proposal_controller_1.default));
router.post("/sidang-skripsi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sidang_skripsi_controller_1.default.createSidangSkripsi(req, res);
});
router.get("/sidang-skripsi", sidang_skripsi_controller_1.default.getAllSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.put("/sidang-skripsi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sidang_skripsi_controller_1.default.updateSidangSkripsi(req, res);
});
router.delete("/sidang-skripsi/:id", sidang_skripsi_controller_1.default.deleteSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.get("/prosedur-sidang-skripsi", sidang_skripsi_controller_1.default.getAllProsedurSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.post("/prosedur-sidang-skripsi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sidang_skripsi_controller_1.default.createProsedurSidangSkripsi(req, res);
});
router.put("/prosedur-sidang-skripsi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sidang_skripsi_controller_1.default.updateProsedurSidangSkripsi(req, res);
});
router.delete("/prosedur-sidang-skripsi/:id", sidang_skripsi_controller_1.default.deleteProsedurSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.post("/sidang-skripsi/statistik", sidang_skripsi_controller_1.default.createStatistikSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.get("/sidang-skripsi/statistik", sidang_skripsi_controller_1.default.getAllStatistikSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.put("/sidang-skripsi/statistik/:id", sidang_skripsi_controller_1.default.updateStatistikSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.delete("/sidang-skripsi/statistik/:id", sidang_skripsi_controller_1.default.deleteStatistikSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.post("/sidang-skripsi/kriteria", sidang_skripsi_controller_1.default.createKriteriaSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.get("/sidang-skripsi/kriteria", sidang_skripsi_controller_1.default.getAllKriteriaSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.put("/sidang-skripsi/kriteria/:id", sidang_skripsi_controller_1.default.updateKriteriaSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.delete("/sidang-skripsi/kriteria/:id", sidang_skripsi_controller_1.default.deleteKriteriaSidangSkripsi.bind(sidang_skripsi_controller_1.default));
router.post("/keterangan-pendamping-ijazah", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return keterangan_pendamping_controller_1.default.createKeteranganPendampingIjazah(req, res);
});
router.get("/keterangan-pendamping-ijazah", keterangan_pendamping_controller_1.default.getAllKeteranganPendampingIjazah.bind(keterangan_pendamping_controller_1.default));
router.put("/keterangan-pendamping-ijazah/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return keterangan_pendamping_controller_1.default.updateKeteranganPendampingIjazah(req, res);
});
router.delete("/keterangan-pendamping-ijazah/:id", keterangan_pendamping_controller_1.default.deleteKeteranganPendampingIjazah.bind(keterangan_pendamping_controller_1.default));
router.post("/keterangan-pendamping-ijazah/statistik", keterangan_pendamping_controller_1.default.createStatistikKeteranganPendampingIjazah.bind(keterangan_pendamping_controller_1.default));
router.get("/keterangan-pendamping-ijazah/statistik", keterangan_pendamping_controller_1.default.getStatistikKeteranganPendampingIjazah.bind(keterangan_pendamping_controller_1.default));
router.put("/keterangan-pendamping-ijazah/statistik/:id", keterangan_pendamping_controller_1.default.updateStatistikKeteranganPendampingIjazah.bind(keterangan_pendamping_controller_1.default));
router.delete("/keterangan-pendamping-ijazah/statistik/:id", keterangan_pendamping_controller_1.default.deleteStatistikKeteranganPendampingIjazah.bind(keterangan_pendamping_controller_1.default));
router.post("/ujian-komprehensif", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return ujian_komprehensif_controller_1.default.createUjianKomprehensif(req, res);
});
router.get("/ujian-komprehensif", ujian_komprehensif_controller_1.default.getAllUjianKomprehensif.bind(ujian_komprehensif_controller_1.default));
router.put("/ujian-komprehensif/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return ujian_komprehensif_controller_1.default.updateUjianKomprehensif(req, res);
});
router.delete("/ujian-komprehensif/:id", ujian_komprehensif_controller_1.default.deleteUjianKomprehensif.bind(ujian_komprehensif_controller_1.default));
router.post("/ujian-komprehensif/statistik", ujian_komprehensif_controller_1.default.createStatistikUjianKomprehensif.bind(ujian_komprehensif_controller_1.default));
router.get("/ujian-komprehensif/statistik", ujian_komprehensif_controller_1.default.getAllStatistikUjianKomprehensif.bind(ujian_komprehensif_controller_1.default));
router.put("/ujian-komprehensif/statistik/:id", ujian_komprehensif_controller_1.default.updateStatistikUjianKomprehensif.bind(ujian_komprehensif_controller_1.default));
router.delete("/ujian-komprehensif/statistik/:id", ujian_komprehensif_controller_1.default.deleteStatistikUjianKomprehensif.bind(ujian_komprehensif_controller_1.default));
router.post("/matrikulasi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return matrikulasi_controller_1.default.createMatrikulasi(req, res);
});
router.get("/matrikulasi", matrikulasi_controller_1.default.getAllMatrikulasi.bind(matrikulasi_controller_1.default));
router.put("/matrikulasi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return matrikulasi_controller_1.default.updateMatrikulasi(req, res);
});
router.delete("/matrikulasi/:id", matrikulasi_controller_1.default.deleteMatrikulasi.bind(matrikulasi_controller_1.default));
router.post("/matrikulasi/statistik", matrikulasi_controller_1.default.createStatistikMatrikulasi.bind(matrikulasi_controller_1.default));
router.get("/matrikulasi/statistik", matrikulasi_controller_1.default.getAllStatistikMatrikulasi.bind(matrikulasi_controller_1.default));
router.put("/matrikulasi/statistik/:id", matrikulasi_controller_1.default.updateStatistikMatrikulasi.bind(matrikulasi_controller_1.default));
router.delete("/matrikulasi/statistik/:id", matrikulasi_controller_1.default.deleteStatistikMatrikulasi.bind(matrikulasi_controller_1.default));
router.post("/kelompok-riset", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kelompok_riset_controller_1.default.createKelompokRiset(req, res);
});
router.get("/kelompok-riset", kelompok_riset_controller_1.default.getAllKelompokRiset.bind(kelompok_riset_controller_1.default));
router.put("/kelompok-riset/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kelompok_riset_controller_1.default.updateKelompokRiset(req, res);
});
router.delete("/kelompok-riset/:id", kelompok_riset_controller_1.default.deleteKelompokRiset.bind(kelompok_riset_controller_1.default));
router.post("/kelompok-riset/statistik", kelompok_riset_controller_1.default.createStatistikKelompokRiset.bind(kelompok_riset_controller_1.default));
router.get("/kelompok-riset/statistik", kelompok_riset_controller_1.default.getAllStatistikKelompokRiset.bind(kelompok_riset_controller_1.default));
router.put("/kelompok-riset/statistik/:id", kelompok_riset_controller_1.default.updateStatistikKelompokRiset.bind(kelompok_riset_controller_1.default));
router.delete("/kelompok-riset/statistik/:id", kelompok_riset_controller_1.default.deleteStatistikKelompokRiset.bind(kelompok_riset_controller_1.default));
router.post("/sejarah-lbkh", multer_1.default.fields([{ name: "foto", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarah_lbkh_controller_1.default.createSejarahLBKH(req, res);
});
router.put("/sejarah-lbkh/:id", multer_1.default.fields([{ name: "foto", maxCount: 5 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sejarah_lbkh_controller_1.default.updateSejarahLBKH(req, res);
});
router.delete("/sejarah-lbkh/:id", sejarah_lbkh_controller_1.default.deleteSejarahLBKH.bind(sejarah_lbkh_controller_1.default));
router.get("/sejarah-lbkh", sejarah_lbkh_controller_1.default.getAllSejarahLBKH.bind(sejarah_lbkh_controller_1.default));
router.post("/sejarah-lbkh/statistik", sejarah_lbkh_controller_1.default.createStatistik.bind(sejarah_lbkh_controller_1.default));
router.get("/sejarah-lbkh/statistik", sejarah_lbkh_controller_1.default.getAllStatistik.bind(sejarah_lbkh_controller_1.default));
router.put("/sejarah-lbkh/statistik/:id", sejarah_lbkh_controller_1.default.updateStatistik.bind(sejarah_lbkh_controller_1.default));
router.delete("/sejarah-lbkh/statistik/:id", sejarah_lbkh_controller_1.default.deleteStatistik.bind(sejarah_lbkh_controller_1.default));
router.post("/visi-misi-lbkh", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return visi_misi_lbkh_controller_1.default.createVisiMisiLBKH(req, res);
});
router.get("/visi-misi-lbkh", visi_misi_lbkh_controller_1.default.getAllVisiMisiLBKH.bind(visi_misi_lbkh_controller_1.default));
router.put("/visi-misi-lbkh/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return visi_misi_lbkh_controller_1.default.updateVisiMisiLBKH(req, res);
});
router.delete("/visi-misi-lbkh/:id", visi_misi_lbkh_controller_1.default.deleteVisiMisiLBKH.bind(visi_misi_lbkh_controller_1.default));
router.post("/visi-misi-lbkh/statistik", visi_misi_lbkh_controller_1.default.createStatistikVisiMisiLBKH.bind(visi_misi_lbkh_controller_1.default));
router.get("/visi-misi-lbkh/statistik", visi_misi_lbkh_controller_1.default.getAllStatistikVisiMisiLBKH.bind(visi_misi_lbkh_controller_1.default));
router.put("/visi-misi-lbkh/statistik/:id", visi_misi_lbkh_controller_1.default.updateStatistikVisiMisiLBKH.bind(visi_misi_lbkh_controller_1.default));
router.delete("/visi-misi-lbkh/statistik/:id", visi_misi_lbkh_controller_1.default.deleteStatistikVisiMisiLBKH.bind(visi_misi_lbkh_controller_1.default));
router.post("/pengurus-lbkh", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pengurus_lbkh_controller_1.default.createPengurusLbkh(req, res);
});
router.get("/pengurus-lbkh", pengurus_lbkh_controller_1.default.getAllPengurusLbkh.bind(pengurus_lbkh_controller_1.default));
router.put("/pengurus-lbkh/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pengurus_lbkh_controller_1.default.updatePengurusLbkh(req, res);
});
router.delete("/pengurus-lbkh/:id", pengurus_lbkh_controller_1.default.deletePengurusLbkh.bind(pengurus_lbkh_controller_1.default));
router.post("/pengurus-lbkh/statistik", pengurus_lbkh_controller_1.default.createStatistikPengurusLBKH.bind(pengurus_lbkh_controller_1.default));
router.get("/pengurus-lbkh/statistik", pengurus_lbkh_controller_1.default.getAllStatistikPengurusLBKH.bind(pengurus_lbkh_controller_1.default));
router.put("/pengurus-lbkh/statistik/:id", pengurus_lbkh_controller_1.default.updateStatistikPengurusLBKH.bind(pengurus_lbkh_controller_1.default));
router.delete("/pengurus-lbkh/statistik/:id", pengurus_lbkh_controller_1.default.deleteStatistikPengurusLBKH.bind(pengurus_lbkh_controller_1.default));
router.post("/advokat-paralegal", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return advokat_paralegal_controller_1.default.createAdvokatParalegal(req, res);
});
router.get("/advokat-paralegal", advokat_paralegal_controller_1.default.getAllAdvokatParalegal.bind(advokat_paralegal_controller_1.default));
router.put("/advokat-paralegal/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return advokat_paralegal_controller_1.default.updateAdvokatParalegal(req, res);
});
router.delete("/advokat-paralegal/:id", advokat_paralegal_controller_1.default.deleteAdvokatParalegal.bind(advokat_paralegal_controller_1.default));
router.post("/advokat-paralegal/statistik", advokat_paralegal_controller_1.default.createStatistikAdvokatParalegal.bind(advokat_paralegal_controller_1.default));
router.get("/advokat-paralegal/statistik", advokat_paralegal_controller_1.default.getAllStatistikAdvokatParalegal.bind(advokat_paralegal_controller_1.default));
router.put("/advokat-paralegal/statistik/:id", advokat_paralegal_controller_1.default.updateStatistikAdvokatParalegal.bind(advokat_paralegal_controller_1.default));
router.delete("/advokat-paralegal/statistik/:id", advokat_paralegal_controller_1.default.deleteStatistikAdvokatParalegal.bind(advokat_paralegal_controller_1.default));
router.post("/konsultasi-hukum", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return konsultasi_hukum_controller_1.default.createKonsultasiHukum(req, res);
});
router.get("/konsultasi-hukum", konsultasi_hukum_controller_1.default.getAllKonsultasiHukum.bind(konsultasi_hukum_controller_1.default));
router.put("/konsultasi-hukum/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return konsultasi_hukum_controller_1.default.updateKonsultasiHukum(req, res);
});
router.delete("/konsultasi-hukum/:id", konsultasi_hukum_controller_1.default.deleteKonsultasiHukum.bind(konsultasi_hukum_controller_1.default));
router.post("/prosedur-konsultasi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return konsultasi_hukum_controller_1.default.createProsedurKonsultasi(req, res);
});
router.get("/prosedur-konsultasi", konsultasi_hukum_controller_1.default.getAllProsedurKonsultasi.bind(konsultasi_hukum_controller_1.default));
router.put("/prosedur-konsultasi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return konsultasi_hukum_controller_1.default.updateProsedurKonsultasi(req, res);
});
router.delete("/prosedur-konsultasi/:id", konsultasi_hukum_controller_1.default.deleteProsedurKonsultasi.bind(konsultasi_hukum_controller_1.default));
router.post("/prosedur-konsultasi/statistik", konsultasi_hukum_controller_1.default.createStatistikProsedurKonsultasi.bind(konsultasi_hukum_controller_1.default));
router.get("/prosedur-konsultasi/statistik", konsultasi_hukum_controller_1.default.getAllStatistikProsedurKonsultasi.bind(konsultasi_hukum_controller_1.default));
router.put("/prosedur-konsultasi/statistik/:id", konsultasi_hukum_controller_1.default.updateStatistikProsedurKonsultasi.bind(konsultasi_hukum_controller_1.default));
router.delete("/prosedur-konsultasi/statistik/:id", konsultasi_hukum_controller_1.default.deleteStatistikProsedurKonsultasi.bind(konsultasi_hukum_controller_1.default));
router.post("/pendampingan-hukum", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pendampingan_hukum_controller_1.default.createPendampinganHukum(req, res);
});
router.get("/pendampingan-hukum", pendampingan_hukum_controller_1.default.getAllPendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.put("/pendampingan-hukum/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pendampingan_hukum_controller_1.default.updatePendampinganHukum(req, res);
});
router.delete("/pendampingan-hukum/:id", pendampingan_hukum_controller_1.default.deletePendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.post("/prosedur-pendampingan-hukum", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pendampingan_hukum_controller_1.default.createProsedurPendampinganHukum(req, res);
});
router.get("/prosedur-pendampingan-hukum", pendampingan_hukum_controller_1.default.getAllProsedurPendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.put("/prosedur-pendampingan-hukum/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pendampingan_hukum_controller_1.default.updateProsedurPendampinganHukum(req, res);
});
router.delete("/prosedur-pendampingan-hukum/:id", pendampingan_hukum_controller_1.default.deleteProsedurPendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.post("/prosedur-pendampingan-hukum/statistik", pendampingan_hukum_controller_1.default.createStatistikProsedurPendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.get("/prosedur-pendampingan-hukum/statistik", pendampingan_hukum_controller_1.default.getAllStatistikProsedurPendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.put("/prosedur-pendampingan-hukum/statistik/:id", pendampingan_hukum_controller_1.default.updateStatistikProsedurPendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.delete("/prosedur-pendampingan-hukum/statistik/:id", pendampingan_hukum_controller_1.default.deleteStatistikProsedurPendampinganHukum.bind(pendampingan_hukum_controller_1.default));
router.post("/pembuatan-legal", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pembuatan_legal_controller_1.default.createPembuatanLegal(req, res);
});
router.get("/pembuatan-legal", pembuatan_legal_controller_1.default.getAllPembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.put("/pembuatan-legal/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pembuatan_legal_controller_1.default.updatePembuatanLegal(req, res);
});
router.delete("/pembuatan-legal/:id", pembuatan_legal_controller_1.default.deletePembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.post("/prosedur-pembuatan-legal", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pembuatan_legal_controller_1.default.createProsedurPembuatanLegal(req, res);
});
router.get("/prosedur-pembuatan-legal", pembuatan_legal_controller_1.default.getAllProsedurPembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.put("/prosedur-pembuatan-legal/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return pembuatan_legal_controller_1.default.updateProsedurPembuatanLegal(req, res);
});
router.delete("/prosedur-pembuatan-legal/:id", pembuatan_legal_controller_1.default.deleteProsedurPembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.post("/prosedur-pembuatan-legal/statistik", pembuatan_legal_controller_1.default.createStatistikProsedurPembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.get("/prosedur-pembuatan-legal/statistik", pembuatan_legal_controller_1.default.getAllStatistikProsedurPembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.put("/prosedur-pembuatan-legal/statistik/:id", pembuatan_legal_controller_1.default.updateStatistikProsedurPembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.delete("/prosedur-pembuatan-legal/statistik/:id", pembuatan_legal_controller_1.default.deleteStatistikProsedurPembuatanLegal.bind(pembuatan_legal_controller_1.default));
router.post("/saksi-ahli", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saksi_ahli_controller_1.default.createSaksiAhli(req, res);
});
router.get("/saksi-ahli", saksi_ahli_controller_1.default.getAllSaksiAhli.bind(saksi_ahli_controller_1.default));
router.put("/saksi-ahli/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saksi_ahli_controller_1.default.updateSaksiAhli(req, res);
});
router.delete("/saksi-ahli/:id", saksi_ahli_controller_1.default.deleteSaksiAhli.bind(saksi_ahli_controller_1.default));
router.post("/prosedur-saksi-ahli", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saksi_ahli_controller_1.default.createProsedurSaksiAhli(req, res);
});
router.get("/prosedur-saksi-ahli", saksi_ahli_controller_1.default.getProsedurSaksiAhli.bind(saksi_ahli_controller_1.default));
router.put("/prosedur-saksi-ahli/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return saksi_ahli_controller_1.default.updateProsedurSaksiAhli(req, res);
});
router.delete("/prosedur-saksi-ahli/:id", saksi_ahli_controller_1.default.deleteProsedurSaksiAhli.bind(saksi_ahli_controller_1.default));
router.post("/prosedur-saksi-ahli/statistik", saksi_ahli_controller_1.default.createStatistikSaksiAhli.bind(saksi_ahli_controller_1.default));
router.get("/prosedur-saksi-ahli/statistik", saksi_ahli_controller_1.default.getAllStatistikSaksiAhli.bind(saksi_ahli_controller_1.default));
router.put("/prosedur-saksi-ahli/statistik/:id", saksi_ahli_controller_1.default.updateStatistikSaksiAhli.bind(saksi_ahli_controller_1.default));
router.delete("/prosedur-saksi-ahli/statistik/:id", saksi_ahli_controller_1.default.deleteStatistikSaksiAhli.bind(saksi_ahli_controller_1.default));
router.post("/layanan-mediasi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_mediasi_controller_1.default.createLayananMediasi(req, res);
});
router.get("/layanan-mediasi", layanan_mediasi_controller_1.default.getAllLayananMediasi.bind(layanan_mediasi_controller_1.default));
router.put("/layanan-mediasi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_mediasi_controller_1.default.updateLayananMediasi(req, res);
});
router.delete("/layanan-mediasi/:id", layanan_mediasi_controller_1.default.deleteLayananMediasi.bind(layanan_mediasi_controller_1.default));
router.post("/layanan-mediasi/statistik", layanan_mediasi_controller_1.default.createStatistikLayananMediasi.bind(layanan_mediasi_controller_1.default));
router.get("/layanan-mediasi/statistik", layanan_mediasi_controller_1.default.getAllStatistikLayananMediasi.bind(layanan_mediasi_controller_1.default));
router.put("/layanan-mediasi/statistik/:id", layanan_mediasi_controller_1.default.updateStatistikLayananMediasi.bind(layanan_mediasi_controller_1.default));
router.delete("/layanan-mediasi/statistik/:id", layanan_mediasi_controller_1.default.deleteStatistikLayananMediasi.bind(layanan_mediasi_controller_1.default));
router.post("/tim-mediator", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_mediasi_controller_1.default.createTimMediator(req, res);
});
router.get("/tim-mediator", layanan_mediasi_controller_1.default.getAllTimMediator.bind(layanan_mediasi_controller_1.default));
router.put("/tim-mediator/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_mediasi_controller_1.default.updateTimMediator(req, res);
});
router.delete("/tim-mediator/:id", layanan_mediasi_controller_1.default.deleteTimMediator.bind(layanan_mediasi_controller_1.default));
router.post("/layanan-probono", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_probono_controller_1.default.createLayananProbono(req, res);
});
router.get("/layanan-probono", layanan_probono_controller_1.default.getAllLayananProbono.bind(layanan_probono_controller_1.default));
router.put("/layanan-probono/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_probono_controller_1.default.updateLayananProbono(req, res);
});
router.delete("/layanan-probono/:id", layanan_probono_controller_1.default.deleteLayananProbono.bind(layanan_probono_controller_1.default));
router.post("/layanan-probono/statistik", layanan_probono_controller_1.default.createStatistikLayananProbono.bind(layanan_probono_controller_1.default));
router.get("/layanan-probono/statistik", layanan_probono_controller_1.default.getAllStatistikLayananProbono.bind(layanan_probono_controller_1.default));
router.put("/layanan-probono/statistik/:id", layanan_probono_controller_1.default.updateStatistikLayananProbono.bind(layanan_probono_controller_1.default));
router.delete("/layanan-probono/statistik/:id", layanan_probono_controller_1.default.deleteStatistikLayananProbono.bind(layanan_probono_controller_1.default));
router.post("/layanan-probono/kriteria-penerima", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_probono_controller_1.default.createKriteriaPenerima(req, res);
});
router.get("/layanan-probono/kriteria-penerima", layanan_probono_controller_1.default.getAllKriteriaPenerima.bind(layanan_probono_controller_1.default));
router.put("/layanan-probono/kriteria-penerima/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return layanan_probono_controller_1.default.updateKriteriaPenerima(req, res);
});
router.delete("/layanan-probono/kriteria-penerima/:id", layanan_probono_controller_1.default.deleteKriteriaPenerima.bind(layanan_probono_controller_1.default));
router.post("/penyukuhan-hukum", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return penyukuhan_hukum_controller_1.default.createPenyukuhanHukum(req, res);
});
router.get("/penyukuhan-hukum", penyukuhan_hukum_controller_1.default.getAllPenyukuhanHukum.bind(penyukuhan_hukum_controller_1.default));
router.put("/penyukuhan-hukum/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return penyukuhan_hukum_controller_1.default.updatePenyukuhanHukumById(req, res);
});
router.delete("/penyukuhan-hukum/:id", penyukuhan_hukum_controller_1.default.deletePenyukuhanHukumById.bind(penyukuhan_hukum_controller_1.default));
router.post("/penyukuhan-hukum/statistik", penyukuhan_hukum_controller_1.default.createStatistikPenyuluhanHukum.bind(penyukuhan_hukum_controller_1.default));
router.get("/penyukuhan-hukum/statistik", penyukuhan_hukum_controller_1.default.getAllStatistikPenyuluhanHukum.bind(penyukuhan_hukum_controller_1.default));
router.put("/penyukuhan-hukum/statistik/:id", penyukuhan_hukum_controller_1.default.updateStatistikPenyuluhanHukumById.bind(penyukuhan_hukum_controller_1.default));
router.delete("/penyukuhan-hukum/statistik/:id", penyukuhan_hukum_controller_1.default.deleteStatistikPenyuluhanHukumById.bind(penyukuhan_hukum_controller_1.default));
router.post("/sosialisasi-praturan-uud", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sosialisasi_praturanUUD_controller_1.default.createSosialisasiPraturanUUD(req, res);
});
router.get("/sosialisasi-praturan-uud", sosialisasi_praturanUUD_controller_1.default.getAllSosialisasiPraturanUUD.bind(sosialisasi_praturanUUD_controller_1.default));
router.put("/sosialisasi-praturan-uud/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return sosialisasi_praturanUUD_controller_1.default.updateSosialisasiPraturanUUDById(req, res);
});
router.delete("/sosialisasi-praturan-uud/:id", sosialisasi_praturanUUD_controller_1.default.deleteSosialisasiPraturanUUDById.bind(sosialisasi_praturanUUD_controller_1.default));
router.post("/sosialisasi-praturan-uud/statistik", sosialisasi_praturanUUD_controller_1.default.createStatistikSosialisasiPraturanUUD.bind(sosialisasi_praturanUUD_controller_1.default));
router.get("/sosialisasi-praturan-uud/statistik", sosialisasi_praturanUUD_controller_1.default.getAllStatistikSosialisasiPraturanUUD.bind(sosialisasi_praturanUUD_controller_1.default));
router.put("/sosialisasi-praturan-uud/statistik/:id", sosialisasi_praturanUUD_controller_1.default.updateStatistikSosialisasiPraturanUUDById.bind(sosialisasi_praturanUUD_controller_1.default));
router.delete("/sosialisasi-praturan-uud/statistik/:id", sosialisasi_praturanUUD_controller_1.default.deleteStatistikSosialisasiPraturanUUDById.bind(sosialisasi_praturanUUD_controller_1.default));
router.post("/kekhususan-hukum-pidana", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kekhususan_hukum_pidana_controller_1.default.createKekhususanHukumPidana(req, res);
});
router.get("/kekhususan-hukum-pidana", kekhususan_hukum_pidana_controller_1.default.getAllKekhususanHukumPidana.bind(kekhususan_hukum_pidana_controller_1.default));
router.put("/kekhususan-hukum-pidana/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kekhususan_hukum_pidana_controller_1.default.updateKekhususanHukumPidana(req, res);
});
router.delete("/kekhususan-hukum-pidana/:id", kekhususan_hukum_pidana_controller_1.default.deleteKekhususanHukumPidana.bind(kekhususan_hukum_pidana_controller_1.default));
router.post("/kekhususan-hukum-pidana/prospek-karir", kekhususan_hukum_pidana_controller_1.default.createProspekKarir.bind(kekhususan_hukum_pidana_controller_1.default));
router.get("/kekhususan-hukum-pidana/prospek-karir", kekhususan_hukum_pidana_controller_1.default.getAllProspekKarir.bind(kekhususan_hukum_pidana_controller_1.default));
router.put("/kekhususan-hukum-pidana/prospek-karir/:id", kekhususan_hukum_pidana_controller_1.default.updateProspekKarir.bind(kekhususan_hukum_pidana_controller_1.default));
router.delete("/kekhususan-hukum-pidana/prospek-karir/:id", kekhususan_hukum_pidana_controller_1.default.deleteProspekKarir.bind(kekhususan_hukum_pidana_controller_1.default));
router.post("/kekhususan-hukum-pidana/statistik", kekhususan_hukum_pidana_controller_1.default.createStatistikKekhususanHukumPidana.bind(kekhususan_hukum_pidana_controller_1.default));
router.get("/kekhususan-hukum-pidana/statistik", kekhususan_hukum_pidana_controller_1.default.getAllStatistikKekhususanHukumPidana.bind(kekhususan_hukum_pidana_controller_1.default));
router.put("/kekhususan-hukum-pidana/statistik/:id", kekhususan_hukum_pidana_controller_1.default.updateStatistikKekhususanHukumPidana.bind(kekhususan_hukum_pidana_controller_1.default));
router.delete("/kekhususan-hukum-pidana/statistik/:id", kekhususan_hukum_pidana_controller_1.default.deleteStatistikKekhususanHukumPidana.bind(kekhususan_hukum_pidana_controller_1.default));
router.post("/kekhususan-hukum-tata-usaha-negara", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kekhususa_hukum_tatausaha_controller_1.default.createKekhususanHukumTatausaha(req, res);
});
router.get("/kekhususan-hukum-tata-usaha-negara", kekhususa_hukum_tatausaha_controller_1.default.getAllKekhususanHukumTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.put("/kekhususan-hukum-tata-usaha-negara/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kekhususa_hukum_tatausaha_controller_1.default.updateKekhususanHukumTataUsahaNegara(req, res);
});
router.delete("/kekhususan-hukum-tata-usaha-negara/:id", kekhususa_hukum_tatausaha_controller_1.default.deleteKekhususanHukumTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.post("/kekhususan-hukum-tata-usaha-negara/prospek-karir", kekhususa_hukum_tatausaha_controller_1.default.createProspekKarirTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.get("/kekhususan-hukum-tata-usaha-negara/prospek-karir", kekhususa_hukum_tatausaha_controller_1.default.getAllProspekKarirTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.put("/kekhususan-hukum-tata-usaha-negara/prospek-karir/:id", kekhususa_hukum_tatausaha_controller_1.default.updateProspekKarirTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.delete("/kekhususan-hukum-tata-usaha-negara/prospek-karir/:id", kekhususa_hukum_tatausaha_controller_1.default.deleteProspekKarirTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.post("/kekhususan-hukum-tata-usaha-negara/statistik", kekhususa_hukum_tatausaha_controller_1.default.createStatistikKekhususanHukumTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.get("/kekhususan-hukum-tata-usaha-negara/statistik", kekhususa_hukum_tatausaha_controller_1.default.getAllStatistikKekhususanHukumTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.put("/kekhususan-hukum-tata-usaha-negara/statistik/:id", kekhususa_hukum_tatausaha_controller_1.default.updateStatistikKekhususanHukumTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.delete("/kekhususan-hukum-tata-usaha-negara/statistik/:id", kekhususa_hukum_tatausaha_controller_1.default.deleteStatistikKekhususanHukumTataUsahaNegara.bind(kekhususa_hukum_tatausaha_controller_1.default));
router.post("/kekhususan-hukum-perdata", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kekhususan_hukum_perdata_controller_1.default.createKekhususanHukumPerdata(req, res);
});
router.get("/kekhususan-hukum-perdata", kekhususan_hukum_perdata_controller_1.default.getAllKekhususanHukumPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.put("/kekhususan-hukum-perdata/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return kekhususan_hukum_perdata_controller_1.default.updateKekhususanHukumPerdata(req, res);
});
router.delete("/kekhususan-hukum-perdata/:id", kekhususan_hukum_perdata_controller_1.default.deleteKekhususanHukumPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.post("/kekhususan-hukum-perdata/prospek-karir", kekhususan_hukum_perdata_controller_1.default.createProspekKarirPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.get("/kekhususan-hukum-perdata/prospek-karir", kekhususan_hukum_perdata_controller_1.default.getAllProspekKarirPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.put("/kekhususan-hukum-perdata/prospek-karir/:id", kekhususan_hukum_perdata_controller_1.default.updateProspekKarirPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.delete("/kekhususan-hukum-perdata/prospek-karir/:id", kekhususan_hukum_perdata_controller_1.default.deleteProspekKarirPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.post("/kekhususan-hukum-perdata/statistik", kekhususan_hukum_perdata_controller_1.default.createStatistikKekhususanHukumPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.get("/kekhususan-hukum-perdata/statistik", kekhususan_hukum_perdata_controller_1.default.getAllStatistikKekhususanHukumPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.put("/kekhususan-hukum-perdata/statistik/:id", kekhususan_hukum_perdata_controller_1.default.updateStatistikKekhususanHukumPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.delete("/kekhususan-hukum-perdata/statistik/:id", kekhususan_hukum_perdata_controller_1.default.deleteStatistikKekhususanHukumPerdata.bind(kekhususan_hukum_perdata_controller_1.default));
router.post("/daftar-dosen", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "ahli", maxCount: 1 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return daftar_dosen_controller_1.default.createDaftarDosen(req, res);
});
router.get("/daftar-dosen", daftar_dosen_controller_1.default.getAllDaftarDosen.bind(daftar_dosen_controller_1.default));
router.put("/daftar-dosen/:id", multer_1.default.fields([
    { name: "foto", maxCount: 1 },
    { name: "ahli", maxCount: 1 },
]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return daftar_dosen_controller_1.default.updateDaftarDosen(req, res);
});
router.delete("/daftar-dosen/:id", daftar_dosen_controller_1.default.deleteDaftarDosen.bind(daftar_dosen_controller_1.default));
router.post("/daftar-dosen/statistik", daftar_dosen_controller_1.default.createStatistikDaftarDosen.bind(daftar_dosen_controller_1.default));
router.get("/daftar-dosen/statistik", daftar_dosen_controller_1.default.getStatistikDaftarDosen.bind(daftar_dosen_controller_1.default));
router.put("/daftar-dosen/statistik/:id", daftar_dosen_controller_1.default.updateStatistikDaftarDosen.bind(daftar_dosen_controller_1.default));
router.delete("/daftar-dosen/statistik/:id", daftar_dosen_controller_1.default.deleteStatistikDaftarDosen.bind(daftar_dosen_controller_1.default));
router.post("/daftar-kependidikan", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return daftar_kependidikan_controller_1.default.createDaftarKependidikan(req, res);
});
router.get("/daftar-kependidikan", daftar_kependidikan_controller_1.default.getAllDaftarKependidikan.bind(daftar_kependidikan_controller_1.default));
router.put("/daftar-kependidikan/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return daftar_kependidikan_controller_1.default.updateDaftarKependidikan(req, res);
});
router.delete("/daftar-kependidikan/:id", daftar_kependidikan_controller_1.default.deleteDaftarKependidikan.bind(daftar_kependidikan_controller_1.default));
router.post("/daftar-kependidikan/statistik", daftar_kependidikan_controller_1.default.createStatistikTenagaKependidikan.bind(daftar_kependidikan_controller_1.default));
router.get("/daftar-kependidikan/statistik", daftar_kependidikan_controller_1.default.getStatistikDaftarKependidikan.bind(daftar_kependidikan_controller_1.default));
router.put("/daftar-kependidikan/statistik/:id", daftar_kependidikan_controller_1.default.updateStatistikTenagaKependidikan.bind(daftar_kependidikan_controller_1.default));
router.delete("/daftar-kependidikan/statistik/:id", daftar_kependidikan_controller_1.default.deleteStatistikTenagaKependidikan.bind(daftar_kependidikan_controller_1.default));
router.post("/himpunan-mahasiswa-prodi-hukum", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return himpunan_mahasiswa_prodi_hukum_1.default.CreateHimpunanMahasiswaProdiHukum(req, res);
});
router.get("/himpunan-mahasiswa-prodi-hukum", himpunan_mahasiswa_prodi_hukum_1.default.getAllHimpunanMahasiswaProdiHukum.bind(himpunan_mahasiswa_prodi_hukum_1.default));
router.put("/himpunan-mahasiswa-prodi-hukum/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return himpunan_mahasiswa_prodi_hukum_1.default.updateHimpunan(req, res);
});
router.delete("/himpunan-mahasiswa-prodi-hukum/:id", himpunan_mahasiswa_prodi_hukum_1.default.deleteHimpunan.bind(himpunan_mahasiswa_prodi_hukum_1.default));
router.post("/himpunan-mahasiswa-prodi-hukum/statistik", himpunan_mahasiswa_prodi_hukum_1.default.createStatistik.bind(himpunan_mahasiswa_prodi_hukum_1.default));
router.get("/himpunan-mahasiswa-prodi-hukum/statistik", himpunan_mahasiswa_prodi_hukum_1.default.getAllStatistik.bind(himpunan_mahasiswa_prodi_hukum_1.default));
router.put("/himpunan-mahasiswa-prodi-hukum/statistik/:id", himpunan_mahasiswa_prodi_hukum_1.default.updateStatistik.bind(himpunan_mahasiswa_prodi_hukum_1.default));
router.delete("/himpunan-mahasiswa-prodi-hukum/statistik/:id", himpunan_mahasiswa_prodi_hukum_1.default.deleteStatistik.bind(himpunan_mahasiswa_prodi_hukum_1.default));
router.post("/dewan-perwakilan-mahasiswa", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return dewan_perwakilan_mahasiswa_controller_1.default.createDewanPerwakilan(req, res);
});
router.get("/dewan-perwakilan-mahasiswa", dewan_perwakilan_mahasiswa_controller_1.default.getAllDewanPerwakilanMahasiswa.bind(dewan_perwakilan_mahasiswa_controller_1.default));
router.put("/dewan-perwakilan-mahasiswa/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return dewan_perwakilan_mahasiswa_controller_1.default.updateDewanPerwakilan(req, res);
});
router.delete("/dewan-perwakilan-mahasiswa/:id", dewan_perwakilan_mahasiswa_controller_1.default.deleteDewanPerwakilan.bind(dewan_perwakilan_mahasiswa_controller_1.default));
router.post("/dewan-perwakilan-mahasiswa/statistik", dewan_perwakilan_mahasiswa_controller_1.default.createStatistik.bind(dewan_perwakilan_mahasiswa_controller_1.default));
router.get("/dewan-perwakilan-mahasiswa/statistik", dewan_perwakilan_mahasiswa_controller_1.default.getAllStatistik.bind(dewan_perwakilan_mahasiswa_controller_1.default));
router.put("/dewan-perwakilan-mahasiswa/statistik/:id", dewan_perwakilan_mahasiswa_controller_1.default.updateStatistik.bind(dewan_perwakilan_mahasiswa_controller_1.default));
router.delete("/dewan-perwakilan-mahasiswa/statistik/:id", dewan_perwakilan_mahasiswa_controller_1.default.deleteStatistik.bind(dewan_perwakilan_mahasiswa_controller_1.default));
router.post("/badan-eksekutif-mahasiswa", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return badan_eksekutif_mahasiswa_controller_1.default.createBEM(req, res);
});
router.get("/badan-eksekutif-mahasiswa", badan_eksekutif_mahasiswa_controller_1.default.getAllBEM.bind(badan_eksekutif_mahasiswa_controller_1.default));
router.put("/badan-eksekutif-mahasiswa/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return badan_eksekutif_mahasiswa_controller_1.default.updateBEM(req, res);
});
router.delete("/badan-eksekutif-mahasiswa/:id", badan_eksekutif_mahasiswa_controller_1.default.deleteBEM.bind(badan_eksekutif_mahasiswa_controller_1.default));
router.post("/badan-eksekutif-mahasiswa/statistik", badan_eksekutif_mahasiswa_controller_1.default.createStatistik.bind(badan_eksekutif_mahasiswa_controller_1.default));
router.get("/badan-eksekutif-mahasiswa/statistik", badan_eksekutif_mahasiswa_controller_1.default.getAllStatistik.bind(badan_eksekutif_mahasiswa_controller_1.default));
router.put("/badan-eksekutif-mahasiswa/statistik/:id", badan_eksekutif_mahasiswa_controller_1.default.updateStatistik.bind(badan_eksekutif_mahasiswa_controller_1.default));
router.delete("/badan-eksekutif-mahasiswa/statistik/:id", badan_eksekutif_mahasiswa_controller_1.default.deleteStatistik.bind(badan_eksekutif_mahasiswa_controller_1.default));
router.post("/tracker-study", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return tracker_studi_controller_1.default.createTrackerStudy(req, res);
});
router.get("/tracker-study", tracker_studi_controller_1.default.getAllTrackerStudy.bind(tracker_studi_controller_1.default));
router.put("/tracker-study/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return tracker_studi_controller_1.default.updateTrackerStudy(req, res);
});
router.delete("/tracker-study/:id", tracker_studi_controller_1.default.deleteTrackerStudy.bind(tracker_studi_controller_1.default));
router.post("/waktu-tunggu-kerja", tracker_studi_controller_1.default.createWaktuTungguKerja.bind(tracker_studi_controller_1.default));
router.get("/waktu-tunggu-kerja", tracker_studi_controller_1.default.getAllWaktuTungguKerja.bind(tracker_studi_controller_1.default));
router.put("/waktu-tunggu-kerja/:id", tracker_studi_controller_1.default.updateWaktuTungguKerja.bind(tracker_studi_controller_1.default));
router.delete("/waktu-tunggu-kerja/:id", tracker_studi_controller_1.default.deleteWaktuTungguKerja.bind(tracker_studi_controller_1.default));
router.post("/statistik-tracker-study", tracker_studi_controller_1.default.createStatistikTrackerStudy.bind(tracker_studi_controller_1.default));
router.get("/statistik-tracker-study", tracker_studi_controller_1.default.getAllStatistikTrackerStudy.bind(tracker_studi_controller_1.default));
router.put("/statistik-tracker-study/:id", tracker_studi_controller_1.default.updateStatistikTrackerStudy.bind(tracker_studi_controller_1.default));
router.delete("/statistik-tracker-study/:id", tracker_studi_controller_1.default.deleteStatistikTrackerStudy.bind(tracker_studi_controller_1.default));
router.post("/tracker-study-unigal", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return tracker_study_unigal_controller_1.default.createTrackerStudyUnigal(req, res);
});
router.get("/tracker-study-unigal", tracker_study_unigal_controller_1.default.getAllTrackerStudyUnigal.bind(tracker_study_unigal_controller_1.default));
router.put("/tracker-study-unigal/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return tracker_study_unigal_controller_1.default.updateTrackerStudyUnigal(req, res);
});
router.delete("/tracker-study-unigal/:id", tracker_study_unigal_controller_1.default.deleteTrackerStudyUnigal.bind(tracker_study_unigal_controller_1.default));
router.post("/waktu-tunggu-kerja-unigal", tracker_study_unigal_controller_1.default.createWaktuTungguKerja.bind(tracker_study_unigal_controller_1.default));
router.get("/waktu-tunggu-kerja-unigal", tracker_study_unigal_controller_1.default.getAllWaktuTungguKerja.bind(tracker_study_unigal_controller_1.default));
router.put("/waktu-tunggu-kerja-unigal/:id", tracker_study_unigal_controller_1.default.updateWaktuTungguKerjaUnigal.bind(tracker_study_unigal_controller_1.default));
router.delete("/waktu-tunggu-kerja-unigal/:id", tracker_study_unigal_controller_1.default.deleteWaktuTungguKerjaUnigal.bind(tracker_study_unigal_controller_1.default));
router.post("/statistik-tracker-study-unigal", tracker_study_unigal_controller_1.default.createStatistikTrackerStudyUnigal.bind(tracker_study_unigal_controller_1.default));
router.get("/statistik-tracker-study-unigal", tracker_study_unigal_controller_1.default.getAllStatistikTrackerStudyUnigal.bind(tracker_study_unigal_controller_1.default));
router.put("/statistik-tracker-study-unigal/:id", tracker_study_unigal_controller_1.default.updateStatistikTrackerStudyUnigal.bind(tracker_study_unigal_controller_1.default));
router.delete("/statistik-tracker-study-unigal/:id", tracker_study_unigal_controller_1.default.deleteStatistikTrackerStudyUnigal.bind(tracker_study_unigal_controller_1.default));
router.post("/rekapitulasi-pengisian", rekapitulasi_pengisian_controller_1.default.createRekapitulasiPengisian.bind(rekapitulasi_pengisian_controller_1.default));
router.get("/rekapitulasi-pengisian", rekapitulasi_pengisian_controller_1.default.getAllRekapitulasiPengisian.bind(rekapitulasi_pengisian_controller_1.default));
router.put("/rekapitulasi-pengisian/:id", rekapitulasi_pengisian_controller_1.default.updateRekapitulasiPengisian.bind(rekapitulasi_pengisian_controller_1.default));
router.delete("/rekapitulasi-pengisian/:id", rekapitulasi_pengisian_controller_1.default.deleteRekapitulasiPengisian.bind(rekapitulasi_pengisian_controller_1.default));
router.post("/rekapitulasi-pengisian-per-kategori", rekapitulasi_pengisian_controller_1.default.createRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.get("/rekapitulasi-pengisian-per-kategori", rekapitulasi_pengisian_controller_1.default.getAllRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.put("/rekapitulasi-pengisian-per-kategori/:id", rekapitulasi_pengisian_controller_1.default.updateRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.delete("/rekapitulasi-pengisian-per-kategori/:id", rekapitulasi_pengisian_controller_1.default.deleteRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.post("/statistik-rekapitulasi-per-kategori", rekapitulasi_pengisian_controller_1.default.createStatistikRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.get("/statistik-rekapitulasi-per-kategori", rekapitulasi_pengisian_controller_1.default.getAllStatistikRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.put("/statistik-rekapitulasi-per-kategori/:id", rekapitulasi_pengisian_controller_1.default.updateStatistikRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.delete("/statistik-rekapitulasi-per-kategori/:id", rekapitulasi_pengisian_controller_1.default.deleteStatistikRekapitulasiPerKategori.bind(rekapitulasi_pengisian_controller_1.default));
router.post("/beasiswa-indonesia", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return beasiswa_indonesia_controller_1.default.createBeasiswaIndonesia(req, res);
});
router.get("/beasiswa-indonesia", beasiswa_indonesia_controller_1.default.getAllBeasiswaIndonesia.bind(beasiswa_indonesia_controller_1.default));
router.put("/beasiswa-indonesia/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return beasiswa_indonesia_controller_1.default.updateBeasiswaIndonesia(req, res);
});
router.delete("/beasiswa-indonesia/:id", beasiswa_indonesia_controller_1.default.deleteBeasiswaIndonesia.bind(beasiswa_indonesia_controller_1.default));
router.post("/statistik-beasiswa-indonesia", beasiswa_indonesia_controller_1.default.createStatistikBeasiswaIndonesia.bind(beasiswa_indonesia_controller_1.default));
router.get("/statistik-beasiswa-indonesia", beasiswa_indonesia_controller_1.default.getAllStatistikBeasiswaIndonesia.bind(beasiswa_indonesia_controller_1.default));
router.put("/statistik-beasiswa-indonesia/:id", beasiswa_indonesia_controller_1.default.updateStatistikBeasiswaIndonesia.bind(beasiswa_indonesia_controller_1.default));
router.delete("/statistik-beasiswa-indonesia/:id", beasiswa_indonesia_controller_1.default.deleteStatistikBeasiswaIndonesia.bind(beasiswa_indonesia_controller_1.default));
router.post("/beasiswa-bri", beasiswa_bri_controller_1.default.createBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.get("/beasiswa-bri", beasiswa_bri_controller_1.default.getAllBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.put("/beasiswa-bri/:id", beasiswa_bri_controller_1.default.updateBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.delete("/beasiswa-bri/:id", beasiswa_bri_controller_1.default.deleteBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.post("/timeline-beasiswa-bri", beasiswa_bri_controller_1.default.createTimelineBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.get("/timeline-beasiswa-bri", beasiswa_bri_controller_1.default.getAllTimelineBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.put("/timeline-beasiswa-bri/:id", beasiswa_bri_controller_1.default.updateTimelineBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.delete("/timeline-beasiswa-bri/:id", beasiswa_bri_controller_1.default.deleteTimelineBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.post("/statistik-beasiswa-bri", beasiswa_bri_controller_1.default.createStatistikBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.get("/statistik-beasiswa-bri", beasiswa_bri_controller_1.default.getAllStatistikBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.put("/statistik-beasiswa-bri/:id", beasiswa_bri_controller_1.default.updateStatistikBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.delete("/statistik-beasiswa-bri/:id", beasiswa_bri_controller_1.default.deleteStatistikBeasiswaBri.bind(beasiswa_bri_controller_1.default));
router.post("/beasiswa-kpi", beasiswa_kpi_controller_1.default.createBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.get("/beasiswa-kpi", beasiswa_kpi_controller_1.default.getAllBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.put("/beasiswa-kpi/:id", beasiswa_kpi_controller_1.default.updateBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.delete("/beasiswa-kpi/:id", beasiswa_kpi_controller_1.default.deleteBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.post("/timeline-beasiswa-kpi", beasiswa_kpi_controller_1.default.createTimelineBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.get("/timeline-beasiswa-kpi", beasiswa_kpi_controller_1.default.getAllTimelineBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.put("/timeline-beasiswa-kpi/:id", beasiswa_kpi_controller_1.default.updateTimelineBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.delete("/timeline-beasiswa-kpi/:id", beasiswa_kpi_controller_1.default.deleteTimelineBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.post("/statistik-beasiswa-kpi", beasiswa_kpi_controller_1.default.createStatistikBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.get("/statistik-beasiswa-kpi", beasiswa_kpi_controller_1.default.getAllStatistikBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.put("/statistik-beasiswa-kpi/:id", beasiswa_kpi_controller_1.default.updateStatistikBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.delete("/statistik-beasiswa-kpi/:id", beasiswa_kpi_controller_1.default.deleteStatistikBeasiswaKip.bind(beasiswa_kpi_controller_1.default));
router.post("/prestasi-mahasiswa-nondikti", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return prestasi_mahasiswa_nondikti_controller_1.default.createPrestasiMahasiswaNonDikti(req, res);
});
router.get("/prestasi-mahasiswa-nondikti", prestasi_mahasiswa_nondikti_controller_1.default.getAllPrestasiMahasiswaNonDikti.bind(prestasi_mahasiswa_nondikti_controller_1.default));
router.put("/prestasi-mahasiswa-nondikti/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return prestasi_mahasiswa_nondikti_controller_1.default.updatePrestasiMahasiswaNonDikti(req, res);
});
router.delete("/prestasi-mahasiswa-nondikti/:id", prestasi_mahasiswa_nondikti_controller_1.default.deletePrestasiMahasiswaNonDikti.bind(prestasi_mahasiswa_nondikti_controller_1.default));
router.post("/statistik-prestasi-mahasiswa-nondikti", prestasi_mahasiswa_nondikti_controller_1.default.createStatistikPrestasiMahasiswaNonDikti.bind(prestasi_mahasiswa_nondikti_controller_1.default));
router.get("/statistik-prestasi-mahasiswa-nondikti", prestasi_mahasiswa_nondikti_controller_1.default.getAllStatistikPrestasiMahasiswaNonDikti.bind(prestasi_mahasiswa_nondikti_controller_1.default));
router.put("/statistik-prestasi-mahasiswa-nondikti/:id", prestasi_mahasiswa_nondikti_controller_1.default.updateStatistikPrestasiMahasiswaNonDikti.bind(prestasi_mahasiswa_nondikti_controller_1.default));
router.delete("/statistik-prestasi-mahasiswa-nondikti/:id", prestasi_mahasiswa_nondikti_controller_1.default.deleteStatistikPrestasiMahasiswaNonDikti.bind(prestasi_mahasiswa_nondikti_controller_1.default));
router.post("/data-rekognisi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_rekognisi_controller_1.default.createDataRekognisi(req, res);
});
router.get("/data-rekognisi", data_rekognisi_controller_1.default.getAllDataRekognisi.bind(data_rekognisi_controller_1.default));
router.put("/data-rekognisi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_rekognisi_controller_1.default.updateDataRekognisi(req, res);
});
router.delete("/data-rekognisi/:id", data_rekognisi_controller_1.default.deleteDataRekognisi.bind(data_rekognisi_controller_1.default));
router.post("/statistik-data-rekognisi", data_rekognisi_controller_1.default.createStatistikDataRekognisi.bind(data_rekognisi_controller_1.default));
router.get("/statistik-data-rekognisi", data_rekognisi_controller_1.default.getAllStatistikDataRekognisi.bind(data_rekognisi_controller_1.default));
router.put("/statistik-data-rekognisi/:id", data_rekognisi_controller_1.default.updateStatistikDataRekognisi.bind(data_rekognisi_controller_1.default));
router.delete("/statistik-data-rekognisi/:id", data_rekognisi_controller_1.default.deleteStatistikDataRekognisi.bind(data_rekognisi_controller_1.default));
router.post("/data-seminar-mahasiswa", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_seminar_mahasiswa_controller_1.default.createDataSeminarMahasiswa(req, res);
});
router.get("/data-seminar-mahasiswa", data_seminar_mahasiswa_controller_1.default.getAllDataSeminarMahasiswa.bind(data_seminar_mahasiswa_controller_1.default));
router.put("/data-seminar-mahasiswa/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_seminar_mahasiswa_controller_1.default.updateDataSeminarMahasiswa(req, res);
});
router.delete("/data-seminar-mahasiswa/:id", data_seminar_mahasiswa_controller_1.default.deleteDataSeminarMahasiswa.bind(data_seminar_mahasiswa_controller_1.default));
router.post("/statistik-data-seminar-mahasiswa", data_seminar_mahasiswa_controller_1.default.createStatistikDataSeminarMahasiswa.bind(data_seminar_mahasiswa_controller_1.default));
router.get("/statistik-data-seminar-mahasiswa", data_seminar_mahasiswa_controller_1.default.getAllStatistikDataSeminarMahasiswa.bind(data_seminar_mahasiswa_controller_1.default));
router.put("/statistik-data-seminar-mahasiswa/:id", data_seminar_mahasiswa_controller_1.default.updateStatistikDataSeminarMahasiswa.bind(data_seminar_mahasiswa_controller_1.default));
router.delete("/statistik-data-seminar-mahasiswa/:id", data_seminar_mahasiswa_controller_1.default.deleteStatistikDataSeminarMahasiswa.bind(data_seminar_mahasiswa_controller_1.default));
router.post("/data-magang-mahasiswa", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_magang_mahasiswa_controller_1.default.createDataMagangMahasiswa(req, res);
});
router.get("/data-magang-mahasiswa", data_magang_mahasiswa_controller_1.default.getAllDataMagangMahasiswa.bind(data_magang_mahasiswa_controller_1.default));
router.put("/data-magang-mahasiswa/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_magang_mahasiswa_controller_1.default.updateDataMagangMahasiswa(req, res);
});
router.delete("/data-magang-mahasiswa/:id", data_magang_mahasiswa_controller_1.default.deleteDataMagangMahasiswa.bind(data_magang_mahasiswa_controller_1.default));
router.post("/statistik-data-magang-mahasiswa", data_magang_mahasiswa_controller_1.default.createStatistikDataMagangMahasiswa.bind(data_magang_mahasiswa_controller_1.default));
router.get("/statistik-data-magang-mahasiswa", data_magang_mahasiswa_controller_1.default.getAllStatistikDataMagangMahasiswa.bind(data_magang_mahasiswa_controller_1.default));
router.put("/statistik-data-magang-mahasiswa/:id", data_magang_mahasiswa_controller_1.default.updateStatistikDataMagangMahasiswa.bind(data_magang_mahasiswa_controller_1.default));
router.delete("/statistik-data-magang-mahasiswa/:id", data_magang_mahasiswa_controller_1.default.deleteStatistikDataMagangMahasiswa.bind(data_magang_mahasiswa_controller_1.default));
router.post("/data-mahasiswa-berwirausaha", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_mahasiswa_berwirausaha_controller_1.default.createDataMahasiswaBerwirausaha(req, res);
});
router.get("/data-mahasiswa-berwirausaha", data_mahasiswa_berwirausaha_controller_1.default.getAllDataMahasiswaBerwirausaha.bind(data_mahasiswa_berwirausaha_controller_1.default));
router.put("/data-mahasiswa-berwirausaha/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_mahasiswa_berwirausaha_controller_1.default.updateDataMahasiswaBerwirausaha(req, res);
});
router.delete("/data-mahasiswa-berwirausaha/:id", data_mahasiswa_berwirausaha_controller_1.default.deleteDataMahasiswaBerwirausaha.bind(data_mahasiswa_berwirausaha_controller_1.default));
router.post("/statistik-data-mahasiswa-berwirausaha", data_mahasiswa_berwirausaha_controller_1.default.createStatistikDataMahasiswaBerwirausaha.bind(data_mahasiswa_berwirausaha_controller_1.default));
router.get("/statistik-data-mahasiswa-berwirausaha", data_mahasiswa_berwirausaha_controller_1.default.getAllStatistikDataMahasiswaBerwirausaha.bind(data_mahasiswa_berwirausaha_controller_1.default));
router.put("/statistik-data-mahasiswa-berwirausaha/:id", data_mahasiswa_berwirausaha_controller_1.default.updateStatistikDataMahasiswaBerwirausaha.bind(data_mahasiswa_berwirausaha_controller_1.default));
router.delete("/statistik-data-mahasiswa-berwirausaha/:id", data_mahasiswa_berwirausaha_controller_1.default.deleteStatistikDataMahasiswaBerwirausaha.bind(data_mahasiswa_berwirausaha_controller_1.default));
router.post("/lowongan-kerja", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return lowongan_kerja_controller_1.default.createLowonganKerja(req, res);
});
router.get("/lowongan-kerja", lowongan_kerja_controller_1.default.getAllLowonganKerja.bind(lowongan_kerja_controller_1.default));
router.put("/lowongan-kerja/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return lowongan_kerja_controller_1.default.updateLowonganKerja(req, res);
});
router.delete("/lowongan-kerja/:id", lowongan_kerja_controller_1.default.deleteLowonganKerja.bind(lowongan_kerja_controller_1.default));
router.post("/statistik-lowongan-kerja", lowongan_kerja_controller_1.default.createStatistikLowonganKerja.bind(lowongan_kerja_controller_1.default));
router.get("/statistik-lowongan-kerja", lowongan_kerja_controller_1.default.getAllStatistikLowonganKerja.bind(lowongan_kerja_controller_1.default));
router.put("/statistik-lowongan-kerja/:id", lowongan_kerja_controller_1.default.updateStatistikLowonganKerja.bind(lowongan_kerja_controller_1.default));
router.delete("/statistik-lowongan-kerja/:id", lowongan_kerja_controller_1.default.deleteStatistikLowonganKerja.bind(lowongan_kerja_controller_1.default));
router.post("/alumni-berprestasi", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return alumni_berprestasi_controller_1.default.createAlumniBerprestasi(req, res);
});
router.get("/alumni-berprestasi", alumni_berprestasi_controller_1.default.getAllAlumniBerprestasi.bind(alumni_berprestasi_controller_1.default));
router.put("/alumni-berprestasi/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return alumni_berprestasi_controller_1.default.updateAlumniBerprestasi(req, res);
});
router.delete("/alumni-berprestasi/:id", alumni_berprestasi_controller_1.default.deleteAlumniBerprestasi.bind(alumni_berprestasi_controller_1.default));
router.post("/statistik-alumni-berprestasi", alumni_berprestasi_controller_1.default.createStatistik.bind(alumni_berprestasi_controller_1.default));
router.get("/statistik-alumni-berprestasi", alumni_berprestasi_controller_1.default.getAllStatistik.bind(alumni_berprestasi_controller_1.default));
router.put("/statistik-alumni-berprestasi/:id", alumni_berprestasi_controller_1.default.updateStatistik.bind(alumni_berprestasi_controller_1.default));
router.delete("/statistik-alumni-berprestasi/:id", alumni_berprestasi_controller_1.default.deleteStatistik.bind(alumni_berprestasi_controller_1.default));
router.post("/data-mahasiswa-aktif", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_mahasiswa_aktif_controller_1.default.createDataMahasiswaAktif(req, res);
});
router.get("/data-mahasiswa-aktif", data_mahasiswa_aktif_controller_1.default.getDataMahasiswaAktif.bind(data_mahasiswa_aktif_controller_1.default));
router.put("/data-mahasiswa-aktif/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_mahasiswa_aktif_controller_1.default.updateDataMahasiswaAktif(req, res);
});
router.delete("/data-mahasiswa-aktif/:id", data_mahasiswa_aktif_controller_1.default.deleteDataMahasiswaAktif.bind(data_mahasiswa_aktif_controller_1.default));
router.post("/statistik-data-mahasiswa-aktif", data_mahasiswa_aktif_controller_1.default.createStatistikMahasiswaAktif.bind(data_mahasiswa_aktif_controller_1.default));
router.get("/statistik-data-mahasiswa-aktif", data_mahasiswa_aktif_controller_1.default.getStatistikMahasiswaAktif.bind(data_mahasiswa_aktif_controller_1.default));
router.put("/statistik-data-mahasiswa-aktif/:id", data_mahasiswa_aktif_controller_1.default.updateStatistikMahasiswaAktif.bind(data_mahasiswa_aktif_controller_1.default));
router.delete("/statistik-data-mahasiswa-aktif/:id", data_mahasiswa_aktif_controller_1.default.deleteStatistikMahasiswaAktif.bind(data_mahasiswa_aktif_controller_1.default));
router.post("/data-mahasiswa-nonaktif", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_mahasiswa_nonaktif_controller_1.default.createDataMahasiswaNonAktif(req, res);
});
router.get("/data-mahasiswa-nonaktif", data_mahasiswa_nonaktif_controller_1.default.getDataMahasiswaNonAktif.bind(data_mahasiswa_nonaktif_controller_1.default));
router.put("/data-mahasiswa-nonaktif/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_mahasiswa_nonaktif_controller_1.default.updateDataMahasiswaNonAktif(req, res);
});
router.delete("/data-mahasiswa-nonaktif/:id", data_mahasiswa_nonaktif_controller_1.default.deleteDataMahasiswaNonAktif.bind(data_mahasiswa_nonaktif_controller_1.default));
router.post("/statistik-data-mahasiswa-nonaktif", data_mahasiswa_nonaktif_controller_1.default.createStatistikMahasiswaNonAktif.bind(data_mahasiswa_nonaktif_controller_1.default));
router.get("/statistik-data-mahasiswa-nonaktif", data_mahasiswa_nonaktif_controller_1.default.getStatistikMahasiswaNonAktif.bind(data_mahasiswa_nonaktif_controller_1.default));
router.put("/statistik-data-mahasiswa-nonaktif/:id", data_mahasiswa_nonaktif_controller_1.default.updateStatistikMahasiswaNonAktif.bind(data_mahasiswa_nonaktif_controller_1.default));
router.delete("/statistik-data-mahasiswa-nonaktif/:id", data_mahasiswa_nonaktif_controller_1.default.deleteStatistikMahasiswaNonAktif.bind(data_mahasiswa_nonaktif_controller_1.default));
router.post("/data-lulusan-pertahun", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_lulusan_pertahun_controller_1.default.createDataLulusanPertahun(req, res);
});
router.get("/data-lulusan-pertahun", data_lulusan_pertahun_controller_1.default.getDataLulusanPertahun.bind(data_lulusan_pertahun_controller_1.default));
router.put("/data-lulusan-pertahun/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_lulusan_pertahun_controller_1.default.updateDataLulusanPertahun(req, res);
});
router.delete("/data-lulusan-pertahun/:id", data_lulusan_pertahun_controller_1.default.deleteDataLulusanPertahun.bind(data_lulusan_pertahun_controller_1.default));
router.post("/statistik-data-lulusan-pertahun", data_lulusan_pertahun_controller_1.default.createStatistikLulusanPertahun.bind(data_lulusan_pertahun_controller_1.default));
router.get("/statistik-data-lulusan-pertahun", data_lulusan_pertahun_controller_1.default.getStatistikLulusanPertahun.bind(data_lulusan_pertahun_controller_1.default));
router.put("/statistik-data-lulusan-pertahun/:id", data_lulusan_pertahun_controller_1.default.updateStatistikLulusanPertahun.bind(data_lulusan_pertahun_controller_1.default));
router.delete("/statistik-data-lulusan-pertahun/:id", data_lulusan_pertahun_controller_1.default.deleteStatistikLulusanPertahun.bind(data_lulusan_pertahun_controller_1.default));
router.post("/mou", mou_controller_1.default.createMOU.bind(mou_controller_1.default));
router.get("/mou", mou_controller_1.default.getMOU.bind(mou_controller_1.default));
router.put("/mou/:id", mou_controller_1.default.updateMOU.bind(mou_controller_1.default));
router.delete("/mou/:id", mou_controller_1.default.deleteMOU.bind(mou_controller_1.default));
router.post("/statistik-mou", mou_controller_1.default.createStatistikMoU.bind(mou_controller_1.default));
router.get("/statistik-mou", mou_controller_1.default.getStatistikMoU.bind(mou_controller_1.default));
router.put("/statistik-mou/:id", mou_controller_1.default.updateStatistikMoU.bind(mou_controller_1.default));
router.delete("/statistik-mou/:id", mou_controller_1.default.deleteStatistikMoU.bind(mou_controller_1.default));
router.post("/moa", moa_controller_1.default.createMOA.bind(moa_controller_1.default));
router.get("/moa", moa_controller_1.default.getMOA.bind(moa_controller_1.default));
router.put("/moa/:id", moa_controller_1.default.updateMOA.bind(moa_controller_1.default));
router.delete("/moa/:id", moa_controller_1.default.deleteMOA.bind(moa_controller_1.default));
router.post("/statistik-moa", moa_controller_1.default.createStatistikMoA.bind(moa_controller_1.default));
router.get("/statistik-moa", moa_controller_1.default.getStatistikMoA.bind(moa_controller_1.default));
router.put("/statistik-moa/:id", moa_controller_1.default.updateStatistikMoA.bind(moa_controller_1.default));
router.delete("/statistik-moa/:id", moa_controller_1.default.deleteStatistikMoA.bind(moa_controller_1.default));
router.post("/pkpa", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_pkpa_controller_1.default.createDataPKPA(req, res);
});
router.get("/pkpa", data_pkpa_controller_1.default.getDataPKPA.bind(data_pkpa_controller_1.default));
router.put("/pkpa/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_pkpa_controller_1.default.updateDataPKPA(req, res);
});
router.delete("/pkpa/:id", data_pkpa_controller_1.default.deleteDataPKPA.bind(data_pkpa_controller_1.default));
router.post("/statistik-pkpa", data_pkpa_controller_1.default.createStatistikPKPA.bind(data_pkpa_controller_1.default));
router.get("/statistik-pkpa", data_pkpa_controller_1.default.getStatistikPKPA.bind(data_pkpa_controller_1.default));
router.put("/statistik-pkpa/:id", data_pkpa_controller_1.default.updateStatistikPKPA.bind(data_pkpa_controller_1.default));
router.delete("/statistik-pkpa/:id", data_pkpa_controller_1.default.deleteStatistikPKPA.bind(data_pkpa_controller_1.default));
router.post("/peradilan-semu", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_peradilan_semu_service_1.default.createDataPeradilanSemu(req, res);
});
router.get("/peradilan-semu", data_peradilan_semu_service_1.default.getDataPeradilanSemu.bind(data_peradilan_semu_service_1.default));
router.put("/peradilan-semu/:id", multer_1.default.fields([{ name: "foto", maxCount: 1 }]), (err, req, res, next) => {
    if (err) {
        return res.status(400).json({
            success: false,
            message: err.message || "File upload error",
        });
    }
    next();
}, (req, res, next) => {
    const multerReq = req;
    if (multerReq.fileValidationError) {
        return res.status(400).json({
            success: false,
            message: multerReq.fileValidationError,
        });
    }
    next();
}, (req, res) => {
    return data_peradilan_semu_service_1.default.updateDataPeradilanSemu(req, res);
});
router.delete("/peradilan-semu/:id", data_peradilan_semu_service_1.default.deleteDataPeradilanSemu.bind(data_peradilan_semu_service_1.default));
router.post("/statistik-peradilan-semu", data_peradilan_semu_service_1.default.createStatistikPeradilanSemu.bind(data_peradilan_semu_service_1.default));
router.get("/statistik-peradilan-semu", data_peradilan_semu_service_1.default.getStatistikPeradilanSemu.bind(data_peradilan_semu_service_1.default));
router.put("/statistik-peradilan-semu/:id", data_peradilan_semu_service_1.default.updateStatistikPeradilanSemu.bind(data_peradilan_semu_service_1.default));
router.delete("/statistik-peradilan-semu/:id", data_peradilan_semu_service_1.default.deleteStatistikPeradilanSemu.bind(data_peradilan_semu_service_1.default));
exports.default = router;
