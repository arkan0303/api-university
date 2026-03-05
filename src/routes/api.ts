import { Request, Response } from "express";
import express from "express";
import HeroSectionController from "../controllers/heroSectionController";
import upload from "../config/multer";
import BeritaController from "../controllers/beritaController";
import TestimoniController from "../controllers/testimoniController";
import sejarahS1Controller from "../controllers/sejarahS1Controller";
import saranaPrasaranaController from "../controllers/saranaPrasaranaController";
import RencanaStrategisController from "../controllers/rencanaStartegisController";
import senatFakultasController from "../controllers/senatFakultasController";
import sejarahS2Controller from "../controllers/sejarahS2Controller";
import VisMisiController from "../controllers/visi-misi-controller";
import strukturOrganisasiController from "../controllers/struktur-organisasi-controller";
import pimpinanController from "../controllers/pimpinan-controller";
import programSarjanaHukumController from "../controllers/program-sarjana-hukum-controller";
import programMasgisterHukumController from "../controllers/program-masgister-hukum-controller";
import SuratMasukController from "../controllers/surat-masuk-controller";
import SuratKeluarController from "../controllers/surat-keluar-controller";
import KeteranganAktifMahasiswaController from "../controllers/keterangan-aktif-mhs-controller";
import SuratIjinPenelitianController from "../controllers/surat-ijin-penelitian-controller";
import suratKelakuanBaikController from "../controllers/surat-kelakuan-baik-controller";
import suratPengajuanBeasiswaController from "../controllers/surat-pengajuan-beasiswa-controller";
import seminarProposalController from "../controllers/seminar-proposal-controller";
import sidangSkripsiController from "../controllers/sidang-skripsi-controller";
import keteranganPendampingController from "../controllers/keterangan-pendamping-controller";
import ujianKomprehensifController from "../controllers/ujian-komprehensif-controller";
import matrikulasiController from "../controllers/matrikulasi-controller";
import kelompokRisetController from "../controllers/kelompok-riset-controller";
import sejarahLbkhController from "../controllers/sejarah-lbkh-controller";
import visiMisiLbkhController from "../controllers/visi-misi-lbkh-controller";
import pengurusLbkhController from "../controllers/pengurus-lbkh-controller";
import AdvokatParalegalController from "../controllers/advokat-paralegal-controller";
import konsultasiHukumController from "../controllers/konsultasi-hukum-controller";
import pendampinganHukumController from "../controllers/pendampingan-hukum-controller";
import pembuatanLegalController from "../controllers/pembuatan-legal-controller";
import saksiAhliController from "../controllers/saksi-ahli-controller";
import layananMediasiController from "../controllers/layanan-mediasi-controller";
import layananProbonoController from "../controllers/layanan-probono-controller";
import penyukuhanHukumController from "../controllers/penyukuhan-hukum-controller";
import sosialisasiPraturanUUDController from "../controllers/sosialisasi-praturanUUD-controller";
import kekhususanHukumPidanaController from "../controllers/kekhususan-hukum-pidana-controller";
import KekhususanHukumTatausahaController from "../controllers/kekhususa-hukum-tatausaha-controller";
import kekhususanHukumPerdataController from "../controllers/kekhususan-hukum-perdata-controller";
import daftarDosenController from "../controllers/daftar-dosen-controller";
import daftarKependidikanController from "../controllers/daftar-kependidikan-controller";
import himpunanMahasiswaProdiHukumController from "../controllers/himpunan-mahasiswa-prodi-hukum";
import dewanPerwakilanMahasiswaController from "../controllers/dewan-perwakilan-mahasiswa-controller";
import badanEksikutifMahasiswaController from "../controllers/badan-eksekutif-mahasiswa-controller";
import trackerStudyController from "../controllers/tracker-studi-controller";
import trackerStudyUnigalController from "../controllers/tracker-study-unigal-controller";
import rekapitulasiPengisianController from "../controllers/rekapitulasi-pengisian-controller";
import beasiswaIndonesiaController from "../controllers/beasiswa-indonesia-controller";
import beasiswaBriController from "../controllers/beasiswa-bri-controller";
import beasiswaKpiController from "../controllers/beasiswa-kpi-controller";
import prestasiMahasiswaNondiktiController from "../controllers/prestasi-mahasiswa-nondikti-controller";
import dataRekognisiController from "../controllers/data-rekognisi-controller";
import dataSeminarMahasiswaController from "../controllers/data-seminar-mahasiswa-controller";
import dataMagangMahasiswaController from "../controllers/data-magang-mahasiswa-controller";
import dataMahasiswaBerwirausahaController from "../controllers/data-mahasiswa-berwirausaha-controller";
import lowonganKerjaController from "../controllers/lowongan-kerja-controller";
import alumniBerprestasiController from "../controllers/alumni-berprestasi-controller";
import dataMahasiswaAktifController from "../controllers/data-mahasiswa-aktif-controller";
import dataMahasiswaNonaktifController from "../controllers/data-mahasiswa-nonaktif-controller";
import dataLulusanPertahunController from "../controllers/data-lulusan-pertahun-controller";
import mouController from "../controllers/mou-controller";
import moaController from "../controllers/moa-controller";
import dataPkpaController from "../controllers/data-pkpa-controller";
import dataPeradilanSemuController from "../controllers/data-peradilan-semu-service";
import akreditasiController from "../controllers/akreditasi-controller";
import testingController from "../controllers/Testing";
import { login } from "../controllers/authController";
import { verifyToken } from "../middleware/authMiddleware";
import { loginLimiter } from "../middleware/loginLimiter";

type MulterRequest = Request & {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
  fileValidationError?: string;
};

const router = express.Router();
const heroSectionController = new HeroSectionController();

router.post("/login", loginLimiter, login);

// Apply the upload middleware to the route

// HERO SECTION
router.post(
  "/hero-section",
  verifyToken,
  HeroSectionController.uploadImage(),
  heroSectionController.createHeroSection.bind(heroSectionController),
);

router.get(
  "/hero-section",
  heroSectionController.getDataHeroSection.bind(heroSectionController),
);
router.delete(
  "/hero-section/:id",
  verifyToken,
  heroSectionController.delete.bind(heroSectionController),
);

router.put(
  "/hero-section/:id",
  verifyToken,
  HeroSectionController.uploadImage(),
  heroSectionController.update.bind(heroSectionController),
);
// END HERO SECTION

// BERITA
router.post(
  "/berita",
  upload.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return BeritaController.createBerita(req as unknown as MulterRequest, res);
  },
);

router.get("/berita", BeritaController.getAllBerita.bind(BeritaController));

router.put(
  "/berita/:id",
  upload.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return BeritaController.updateBerita(req as unknown as MulterRequest, res);
  },
);

router.delete(
  "/berita/:id",
  BeritaController.deleteDataBerita.bind(BeritaController),
);
// END BERITA

router.post(
  "/testimoni",
  upload.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return TestimoniController.createTestimoni(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/testimoni",
  TestimoniController.getAllTestimoni.bind(TestimoniController),
);

router.delete(
  "/testimoni/:id",
  TestimoniController.deleteTestimoni.bind(TestimoniController),
);
router.put(
  "/testimoni/:id",
  upload.fields([
    { name: "fotoUtama", maxCount: 1 },
    { name: "galeri", maxCount: 10 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return TestimoniController.update(req as unknown as MulterRequest, res);
  },
);

router.post(
  "/sejarah-s1",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS1Controller.createSejarahS1(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/sejarah-s1",
  sejarahS1Controller.getAllSejarahS1.bind(sejarahS1Controller),
);

router.put(
  "/sejarah-s1/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS1Controller.updateSejarahS1(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sejarah-s1/:id",
  sejarahS1Controller.deleteData.bind(sejarahS1Controller),
);

router.post(
  "/sejarah-s1/banner",
  upload.fields([{ name: "banner", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS1Controller.createSejarahS1Banner(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.put(
  "/sejarah-s1/banner/:id",
  upload.fields([{ name: "banner", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS1Controller.updateSejarahS1Banner(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sejarah-s1/banner/:id",
  sejarahS1Controller.deleteBanner.bind(sejarahS1Controller),
);

router.get(
  "/sejarah-s1/banner",
  sejarahS1Controller.getDataBanner.bind(sejarahS1Controller),
);

router.post(
  "/sejarah-s1/statistik",
  sejarahS1Controller.createStatistikSejarahS1.bind(sejarahS1Controller),
);

router.put(
  "/sejarah-s1/statistik/:id",
  sejarahS1Controller.updateStatistikSejarahS1.bind(sejarahS1Controller),
);

router.delete(
  "/sejarah-s1/statistik/:id",
  sejarahS1Controller.deleteStatistikSejarahS1.bind(sejarahS1Controller),
);

router.get(
  "/sejarah-s1/statistik",
  sejarahS1Controller.getAllStatistikSejarahS1.bind(sejarahS1Controller),
);

router.post(
  "/sarana-prasarana",
  upload.fields([{ name: "foto", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saranaPrasaranaController.createSaranaPrasarana(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/sarana-prasarana",
  saranaPrasaranaController.getAllSaranaPrasarana.bind(
    saranaPrasaranaController,
  ),
);

router.put(
  "/sarana-prasarana/:id",
  upload.fields([{ name: "foto", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saranaPrasaranaController.updateSaranaPrasarana(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sarana-prasarana/:id",
  saranaPrasaranaController.deleteSaranaPrasarana.bind(
    saranaPrasaranaController,
  ),
);

router.post(
  "/sarana-prasarana/banner",
  upload.fields([{ name: "banner", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saranaPrasaranaController.createBannerSaranaPrasarana(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.put(
  "/sarana-prasarana/banner/:id",
  upload.fields([{ name: "banner", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saranaPrasaranaController.updateBannerSaranaPrasarana(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sarana-prasarana/banner/:id",
  saranaPrasaranaController.deleteBannerSaranaPrasarana.bind(
    saranaPrasaranaController,
  ),
);

router.get(
  "/sarana-prasarana/banner",
  saranaPrasaranaController.getDataBanner.bind(saranaPrasaranaController),
);

router.post(
  "/sarana-prasarana/statistik",
  saranaPrasaranaController.createStatistikSaranaPrasarana.bind(
    saranaPrasaranaController,
  ),
);

router.put(
  "/sarana-prasarana/statistik/:id",
  saranaPrasaranaController.updateStatistikSaranaPrasarana.bind(
    saranaPrasaranaController,
  ),
);

router.delete(
  "/sarana-prasarana/statistik/:id",
  saranaPrasaranaController.deleteStatistikSaranaPrasarana.bind(
    saranaPrasaranaController,
  ),
);

router.get(
  "/sarana-prasarana/statistik",
  saranaPrasaranaController.getAllStatistikSaranaPrasarana.bind(
    saranaPrasaranaController,
  ),
);

router.post(
  "/rencana-strategis",
  upload.fields([{ name: "foto", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return RencanaStrategisController.createRencanaStrategis(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/rencana-strategis/:id",
  RencanaStrategisController.deleteRencanaStrategis.bind(
    RencanaStrategisController,
  ),
);

router.put(
  "/rencana-strategis/:id",
  upload.fields([{ name: "foto", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return RencanaStrategisController.updateRencanaStrategis(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/rencana-strategis",
  RencanaStrategisController.getAllRencanaStrategis.bind(
    RencanaStrategisController,
  ),
);

router.post(
  "/rencana-strategis/statistik",
  RencanaStrategisController.createStatistikStrategis.bind(
    RencanaStrategisController,
  ),
);

router.put(
  "/rencana-strategis/statistik/:id",
  RencanaStrategisController.updateStatistikStrategis.bind(
    RencanaStrategisController,
  ),
);

router.delete(
  "/rencana-strategis/statistik/:id",
  RencanaStrategisController.deleteStatistikStrategis.bind(
    RencanaStrategisController,
  ),
);

router.get(
  "/rencana-strategis/statistik",
  RencanaStrategisController.getAllStatistikStrategis.bind(
    RencanaStrategisController,
  ),
);

router.post(
  "/senat-fakultas",
  upload.fields([
    { name: "foto", maxCount: 5 },
    { name: "galeri", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return senatFakultasController.createSenatFakultas(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/senat-fakultas",
  senatFakultasController.getAllSenatFakultas.bind(senatFakultasController),
);

router.put(
  "/senat-fakultas/:id",
  upload.fields([
    { name: "foto", maxCount: 5 },
    { name: "galeri", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return senatFakultasController.updateSenatFakultas(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/senat-fakultas/:id",
  senatFakultasController.deleteSenatFakultas.bind(senatFakultasController),
);

router.post(
  "/senat-fakultas/statistik",
  senatFakultasController.createStatistikSenatFakultas.bind(
    senatFakultasController,
  ),
);

router.put(
  "/senat-fakultas/statistik/:id",
  senatFakultasController.updateStatistikSenatFakultas.bind(
    senatFakultasController,
  ),
);

router.delete(
  "/senat-fakultas/statistik/:id",
  senatFakultasController.deleteStatistikSenatFakultas.bind(
    senatFakultasController,
  ),
);

router.get(
  "/senat-fakultas/statistik",
  senatFakultasController.getAllStatistikSenatFakultas.bind(
    senatFakultasController,
  ),
);

router.post(
  "/sejarah-s2",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS2Controller.createSejarahS2(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/sejarah-s2",
  sejarahS2Controller.getAllSejarahS2.bind(sejarahS2Controller),
);

router.put(
  "/sejarah-s2/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS2Controller.updateSejarahS2(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sejarah-s2/:id",
  sejarahS2Controller.deleteData.bind(sejarahS2Controller),
);

router.post(
  "/sejarah-s2/statistik",
  sejarahS2Controller.createStatistikSejarahS2.bind(sejarahS2Controller),
);

router.put(
  "/sejarah-s2/statistik/:id",
  sejarahS2Controller.updateStatistikSejarahS2.bind(sejarahS2Controller),
);

router.delete(
  "/sejarah-s2/statistik/:id",
  sejarahS2Controller.deleteStatistikSejarahS2.bind(sejarahS2Controller),
);

router.get(
  "/sejarah-s2/statistik",
  sejarahS2Controller.getAllStatistikSejarahS2.bind(sejarahS2Controller),
);

router.post(
  "/sejarah-s2/banner",
  upload.fields([{ name: "banner", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS2Controller.createSejarahS2Banner(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.put(
  "/sejarah-s2/banner/:id",
  upload.fields([{ name: "banner", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahS2Controller.updateSejarahS2Banner(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sejarah-s2/banner/:id",
  sejarahS2Controller.deleteSejarahS2Banner.bind(sejarahS2Controller),
);

router.get(
  "/sejarah-s2/banner",
  sejarahS2Controller.getDataBanner.bind(sejarahS2Controller),
);

router.post(
  "/visi-misi",
  upload.fields([{ name: "gambar", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return VisMisiController.createVisMisi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/visi-misi",
  VisMisiController.getAllVisMisi.bind(VisMisiController),
);

router.put(
  "/visi-misi/:id",
  upload.fields([{ name: "gambar", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return VisMisiController.updateVisMisi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/visi-misi/:id",
  VisMisiController.deleteVisMisi.bind(VisMisiController),
);

router.post(
  "/visi-misi/statistik",
  VisMisiController.createStatistikVisiMisi.bind(VisMisiController),
);

router.put(
  "/visi-misi/statistik/:id",
  VisMisiController.updateStatistikVisiMisi.bind(VisMisiController),
);

router.delete(
  "/visi-misi/statistik/:id",
  VisMisiController.deleteStatistikVisiMisi.bind(VisMisiController),
);

router.get(
  "/visi-misi/statistik",
  VisMisiController.getAllStatistikVisiMisi.bind(VisMisiController),
);

router.post(
  "/struktur-organisasi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return strukturOrganisasiController.createStrukturOrganisasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/struktur-organisasi",
  strukturOrganisasiController.getAllStrukturOrganisasi.bind(
    strukturOrganisasiController,
  ),
);

router.put(
  "/struktur-organisasi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return strukturOrganisasiController.updateStrukturOrganisasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/struktur-organisasi/:id",
  strukturOrganisasiController.deleteStrukturOrganisasi.bind(
    strukturOrganisasiController,
  ),
);

router.post(
  "/struktur-organisasi/statistik",
  strukturOrganisasiController.createStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController,
  ),
);

router.put(
  "/struktur-organisasi/statistik/:id",
  strukturOrganisasiController.updateStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController,
  ),
);

router.delete(
  "/struktur-organisasi/statistik/:id",
  strukturOrganisasiController.deleteStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController,
  ),
);

router.get(
  "/struktur-organisasi/statistik",
  strukturOrganisasiController.getAllStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController,
  ),
);

router.post(
  "/pimpinan",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pimpinanController.createPimpinan(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/pimpinan",
  pimpinanController.getAllPimpinan.bind(pimpinanController),
);

router.put(
  "/pimpinan/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pimpinanController.updatePimpinan(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/pimpinan/:id",
  pimpinanController.deletePimpinan.bind(pimpinanController),
);

router.post(
  "/pimpinan/statistik",
  pimpinanController.createStatistikPimpinan.bind(pimpinanController),
);

router.put(
  "/pimpinan/statistik/:id",
  pimpinanController.updateStatistikPimpinan.bind(pimpinanController),
);

router.delete(
  "/pimpinan/statistik/:id",
  pimpinanController.deleteStatistikPimpinan.bind(pimpinanController),
);

router.get(
  "/pimpinan/statistik",
  pimpinanController.getAllStatistikPimpinan.bind(pimpinanController),
);

router.post(
  "/program-sarjana-hukum",
  upload.fields([{ name: "dokumen_rps", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return programSarjanaHukumController.createProgramSarjanaHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/program-sarjana-hukum",
  programSarjanaHukumController.getAllProgramSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.put(
  "/program-sarjana-hukum/:id",
  upload.fields([{ name: "dokumen_rps", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return programSarjanaHukumController.updateProgramSarjanaHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/program-sarjana-hukum/:id",
  programSarjanaHukumController.deleteProgramSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.post(
  "/program-sarjana-hukum/statistik",
  programSarjanaHukumController.createStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.put(
  "/program-sarjana-hukum/statistik/:id",
  programSarjanaHukumController.updateStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.delete(
  "/program-sarjana-hukum/statistik/:id",
  programSarjanaHukumController.deleteStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.get(
  "/program-sarjana-hukum/statistik",
  programSarjanaHukumController.getAllStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.post(
  "/program-sarjana-hukum/prospek-karir",
  programSarjanaHukumController.createProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.put(
  "/program-sarjana-hukum/prospek-karir/:id",
  programSarjanaHukumController.updateProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.delete(
  "/program-sarjana-hukum/prospek-karir/:id",
  programSarjanaHukumController.deleteProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.get(
  "/program-sarjana-hukum/prospek-karir",
  programSarjanaHukumController.getAllProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController,
  ),
);

router.post(
  "/program-magister-hukum",
  upload.fields([{ name: "dokumen_rps", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return programMasgisterHukumController.createProgramMagisterHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/program-magister-hukum",
  programMasgisterHukumController.getAllProgramMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.put(
  "/program-magister-hukum/:id",
  upload.fields([{ name: "dokumen_rps", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return programMasgisterHukumController.updateProgramMagisterHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/program-magister-hukum/:id",
  programMasgisterHukumController.deleteProgramMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.post(
  "/program-magister-hukum/statistik",
  programMasgisterHukumController.createStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.get(
  "/program-magister-hukum/statistik",
  programMasgisterHukumController.getAllStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.put(
  "/program-magister-hukum/statistik/:id",
  programMasgisterHukumController.updateStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.delete(
  "/program-magister-hukum/statistik/:id",
  programMasgisterHukumController.deleteStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.post(
  "/program-magister-hukum/prospek-karir",
  upload.fields([{ name: "image", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return programMasgisterHukumController.createProspekKarirMagisterHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.put(
  "/program-magister-hukum/prospek-karir/:id",
  upload.fields([{ name: "image", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return programMasgisterHukumController.updateProspekKarirMagisterHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/program-magister-hukum/prospek-karir/:id",
  programMasgisterHukumController.deleteProspekKarirMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.get(
  "/program-magister-hukum/prospek-karir",
  programMasgisterHukumController.getAllProspekKarirMagisterHukum.bind(
    programMasgisterHukumController,
  ),
);

router.post(
  "/surat-masuk",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return SuratMasukController.createSuratMasuk(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/surat-masuk",
  SuratMasukController.getAllSuratMasuk.bind(SuratMasukController),
);

router.put(
  "/surat-masuk/:id",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return SuratMasukController.updateSuratMasuk(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/surat-masuk/:id",
  SuratMasukController.deleteSuratMasuk.bind(SuratMasukController),
);

router.post(
  "/surat-masuk/statistik",
  SuratMasukController.createStatistikArsipSuratMasuk.bind(
    SuratMasukController,
  ),
);

router.get(
  "/surat-masuk/statistik",
  SuratMasukController.getAllStatistikArsipSuratMasuk.bind(
    SuratMasukController,
  ),
);

router.put(
  "/surat-masuk/statistik/:id",
  SuratMasukController.updateStatistikArsipSuratMasuk.bind(
    SuratMasukController,
  ),
);

router.delete(
  "/surat-masuk/statistik/:id",
  SuratMasukController.deleteStatistikArsipSuratMasuk.bind(
    SuratMasukController,
  ),
);

router.post(
  "/surat-keluar",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return SuratKeluarController.createSuratKeluar(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/surat-keluar",
  SuratKeluarController.getAllSuratKeluar.bind(SuratKeluarController),
);

router.put(
  "/surat-keluar/:id",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return SuratKeluarController.updateSuratKeluar(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/surat-keluar/:id",
  SuratKeluarController.deleteSuratKeluar.bind(SuratKeluarController),
);

router.post(
  "/surat-keluar/statistik",
  SuratKeluarController.createStatistikArsipSuratKeluar.bind(
    SuratKeluarController,
  ),
);

router.get(
  "/surat-keluar/statistik",
  SuratKeluarController.getAllStatistikArsipSuratKeluar.bind(
    SuratKeluarController,
  ),
);

router.put(
  "/surat-keluar/statistik/:id",
  SuratKeluarController.updateStatistikArsipSuratKeluar.bind(
    SuratKeluarController,
  ),
);

router.delete(
  "/surat-keluar/statistik/:id",
  SuratKeluarController.deleteStatistikArsipSuratKeluar.bind(
    SuratKeluarController,
  ),
);

router.post(
  "/keterangan-aktif-mhs",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return KeteranganAktifMahasiswaController.createKeteranganAktifMahasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/keterangan-aktif-mhs",
  KeteranganAktifMahasiswaController.getAllKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController,
  ),
);

router.put(
  "/keterangan-aktif-mhs/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return KeteranganAktifMahasiswaController.updateKeteranganAktifMahasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/keterangan-aktif-mhs/:id",
  KeteranganAktifMahasiswaController.deleteKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController,
  ),
);

router.post(
  "/keterangan-aktif-mhs/statistik",
  KeteranganAktifMahasiswaController.createStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController,
  ),
);

router.get(
  "/keterangan-aktif-mhs/statistik",
  KeteranganAktifMahasiswaController.getAllStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController,
  ),
);

router.put(
  "/keterangan-aktif-mhs/statistik/:id",
  KeteranganAktifMahasiswaController.updateStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController,
  ),
);

router.delete(
  "/keterangan-aktif-mhs/statistik/:id",
  KeteranganAktifMahasiswaController.deleteStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController,
  ),
);

router.post(
  "/surat-ijin-penelitian",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return SuratIjinPenelitianController.createSuratIjinPenelitian(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/surat-ijin-penelitian",
  SuratIjinPenelitianController.getAllSuratIjinPenelitian.bind(
    SuratIjinPenelitianController,
  ),
);

router.put(
  "/surat-ijin-penelitian/:id",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "file", maxCount: 5 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return SuratIjinPenelitianController.updateSuratIjinPenelitian(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/surat-ijin-penelitian/:id",
  SuratIjinPenelitianController.deleteSuratIjinPenelitian.bind(
    SuratIjinPenelitianController,
  ),
);

router.get(
  "/keterangan-aktif-mhs/data",
  KeteranganAktifMahasiswaController.getAllDataKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController,
  ),
);

router.post(
  "/surat-ijin-penelitian/statistik",
  SuratIjinPenelitianController.createStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController,
  ),
);

router.get(
  "/surat-ijin-penelitian/statistik",
  SuratIjinPenelitianController.getStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController,
  ),
);

router.put(
  "/surat-ijin-penelitian/statistik/:id",
  SuratIjinPenelitianController.updateStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController,
  ),
);

router.delete(
  "/surat-ijin-penelitian/statistik/:id",
  SuratIjinPenelitianController.deleteStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController,
  ),
);

router.post(
  "/surat-kelakuan-baik",
  suratKelakuanBaikController.createSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.get(
  "/surat-kelakuan-baik",
  suratKelakuanBaikController.getAllSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.put(
  "/surat-kelakuan-baik/:id",
  suratKelakuanBaikController.updateSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.delete(
  "/surat-kelakuan-baik/:id",
  suratKelakuanBaikController.deleteSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.get(
  "/surat-kelakuan-baik/statistik",
  suratKelakuanBaikController.getStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.put(
  "/surat-kelakuan-baik/statistik/:id",
  suratKelakuanBaikController.updateStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.delete(
  "/surat-kelakuan-baik/statistik/:id",
  suratKelakuanBaikController.deleteStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.post(
  "/surat-kelakuan-baik/statistik",
  suratKelakuanBaikController.createStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController,
  ),
);

router.post(
  "/surat-pengajuan-beasiswa",
  upload.fields([{ name: "dokumen", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return suratPengajuanBeasiswaController.createSuratPengajuanBeasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/surat-pengajuan-beasiswa",
  suratPengajuanBeasiswaController.getAllSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController,
  ),
);

router.put(
  "/surat-pengajuan-beasiswa/:id",
  upload.fields([{ name: "dokumen", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return suratPengajuanBeasiswaController.updateSuratPengajuanBeasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/surat-pengajuan-beasiswa/:id",
  suratPengajuanBeasiswaController.deleteSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController,
  ),
);

router.get(
  "/surat-pengajuan-beasiswa/statistik",
  suratPengajuanBeasiswaController.getStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController,
  ),
);

router.put(
  "/surat-pengajuan-beasiswa/statistik/:id",
  suratPengajuanBeasiswaController.updateStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController,
  ),
);

router.delete(
  "/surat-pengajuan-beasiswa/statistik/:id",
  suratPengajuanBeasiswaController.deleteStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController,
  ),
);

router.post(
  "/surat-pengajuan-beasiswa/statistik",
  suratPengajuanBeasiswaController.createStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController,
  ),
);

router.post(
  "/seminar-proposal",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return seminarProposalController.createSeminarProposal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/seminar-proposal",
  seminarProposalController.getAllSeminarProposal.bind(
    seminarProposalController,
  ),
);

router.put(
  "/seminar-proposal/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return seminarProposalController.updateSeminarProposal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/seminar-proposal/:id",
  seminarProposalController.deleteSeminarProposal.bind(
    seminarProposalController,
  ),
);

router.post(
  "/prosedur-pelaksanaan",
  seminarProposalController.createProsedurPelaksanaan.bind(
    seminarProposalController,
  ),
);

router.get(
  "/prosedur-pelaksanaan",
  seminarProposalController.getAllProsedurPelaksanaan.bind(
    seminarProposalController,
  ),
);

router.get("/testing", testingController.GetData.bind(testingController));

router.put(
  "/prosedur-pelaksanaan/:id",
  seminarProposalController.updateProsedurPelaksanaan.bind(
    seminarProposalController,
  ),
);

router.delete(
  "/prosedur-pelaksanaan/:id",
  seminarProposalController.deleteProsedurPelaksanaan.bind(
    seminarProposalController,
  ),
);

router.post(
  "/seminar-proposal/statistik",
  seminarProposalController.createStatistikSeminarProposal.bind(
    seminarProposalController,
  ),
);

router.get(
  "/seminar-proposal/statistik",
  seminarProposalController.getAllStatistikSeminarProposal.bind(
    seminarProposalController,
  ),
);

router.put(
  "/seminar-proposal/statistik/:id",
  seminarProposalController.updateStatistikSeminarProposal.bind(
    seminarProposalController,
  ),
);

router.delete(
  "/seminar-proposal/statistik/:id",
  seminarProposalController.deleteStatistikSeminarProposal.bind(
    seminarProposalController,
  ),
);

router.post(
  "/sidang-skripsi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sidangSkripsiController.createSidangSkripsi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/sidang-skripsi",
  sidangSkripsiController.getAllSidangSkripsi.bind(sidangSkripsiController),
);

router.put(
  "/sidang-skripsi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sidangSkripsiController.updateSidangSkripsi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sidang-skripsi/:id",
  sidangSkripsiController.deleteSidangSkripsi.bind(sidangSkripsiController),
);

router.get(
  "/prosedur-sidang-skripsi",
  sidangSkripsiController.getAllProsedurSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.post(
  "/prosedur-sidang-skripsi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sidangSkripsiController.createProsedurSidangSkripsi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.put(
  "/prosedur-sidang-skripsi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sidangSkripsiController.updateProsedurSidangSkripsi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/prosedur-sidang-skripsi/:id",
  sidangSkripsiController.deleteProsedurSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.post(
  "/sidang-skripsi/statistik",
  sidangSkripsiController.createStatistikSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.get(
  "/sidang-skripsi/statistik",
  sidangSkripsiController.getAllStatistikSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.put(
  "/sidang-skripsi/statistik/:id",
  sidangSkripsiController.updateStatistikSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.delete(
  "/sidang-skripsi/statistik/:id",
  sidangSkripsiController.deleteStatistikSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.post(
  "/sidang-skripsi/kriteria",
  sidangSkripsiController.createKriteriaSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.get(
  "/sidang-skripsi/kriteria",
  sidangSkripsiController.getAllKriteriaSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.put(
  "/sidang-skripsi/kriteria/:id",
  sidangSkripsiController.updateKriteriaSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.delete(
  "/sidang-skripsi/kriteria/:id",
  sidangSkripsiController.deleteKriteriaSidangSkripsi.bind(
    sidangSkripsiController,
  ),
);

router.post(
  "/keterangan-pendamping-ijazah",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return keteranganPendampingController.createKeteranganPendampingIjazah(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/keterangan-pendamping-ijazah",
  keteranganPendampingController.getAllKeteranganPendampingIjazah.bind(
    keteranganPendampingController,
  ),
);

router.put(
  "/keterangan-pendamping-ijazah/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return keteranganPendampingController.updateKeteranganPendampingIjazah(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/keterangan-pendamping-ijazah/:id",
  keteranganPendampingController.deleteKeteranganPendampingIjazah.bind(
    keteranganPendampingController,
  ),
);

router.post(
  "/keterangan-pendamping-ijazah/statistik",
  keteranganPendampingController.createStatistikKeteranganPendampingIjazah.bind(
    keteranganPendampingController,
  ),
);

router.get(
  "/keterangan-pendamping-ijazah/statistik",
  keteranganPendampingController.getStatistikKeteranganPendampingIjazah.bind(
    keteranganPendampingController,
  ),
);

router.put(
  "/keterangan-pendamping-ijazah/statistik/:id",
  keteranganPendampingController.updateStatistikKeteranganPendampingIjazah.bind(
    keteranganPendampingController,
  ),
);

router.delete(
  "/keterangan-pendamping-ijazah/statistik/:id",
  keteranganPendampingController.deleteStatistikKeteranganPendampingIjazah.bind(
    keteranganPendampingController,
  ),
);

router.post(
  "/ujian-komprehensif",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return ujianKomprehensifController.createUjianKomprehensif(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/ujian-komprehensif",
  ujianKomprehensifController.getAllUjianKomprehensif.bind(
    ujianKomprehensifController,
  ),
);

router.put(
  "/ujian-komprehensif/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return ujianKomprehensifController.updateUjianKomprehensif(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/ujian-komprehensif/:id",
  ujianKomprehensifController.deleteUjianKomprehensif.bind(
    ujianKomprehensifController,
  ),
);

router.post(
  "/ujian-komprehensif/statistik",
  ujianKomprehensifController.createStatistikUjianKomprehensif.bind(
    ujianKomprehensifController,
  ),
);

router.get(
  "/ujian-komprehensif/statistik",
  ujianKomprehensifController.getAllStatistikUjianKomprehensif.bind(
    ujianKomprehensifController,
  ),
);

router.put(
  "/ujian-komprehensif/statistik/:id",
  ujianKomprehensifController.updateStatistikUjianKomprehensif.bind(
    ujianKomprehensifController,
  ),
);

router.delete(
  "/ujian-komprehensif/statistik/:id",
  ujianKomprehensifController.deleteStatistikUjianKomprehensif.bind(
    ujianKomprehensifController,
  ),
);

router.post(
  "/matrikulasi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return matrikulasiController.createMatrikulasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/matrikulasi",
  matrikulasiController.getAllMatrikulasi.bind(matrikulasiController),
);

router.put(
  "/matrikulasi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return matrikulasiController.updateMatrikulasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/matrikulasi/:id",
  matrikulasiController.deleteMatrikulasi.bind(matrikulasiController),
);

router.post(
  "/matrikulasi/statistik",
  matrikulasiController.createStatistikMatrikulasi.bind(matrikulasiController),
);

router.get(
  "/matrikulasi/statistik",
  matrikulasiController.getAllStatistikMatrikulasi.bind(matrikulasiController),
);

router.put(
  "/matrikulasi/statistik/:id",
  matrikulasiController.updateStatistikMatrikulasi.bind(matrikulasiController),
);

router.delete(
  "/matrikulasi/statistik/:id",
  matrikulasiController.deleteStatistikMatrikulasi.bind(matrikulasiController),
);

router.post(
  "/kelompok-riset",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return kelompokRisetController.createKelompokRiset(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/kelompok-riset",
  kelompokRisetController.getAllKelompokRiset.bind(kelompokRisetController),
);
router.put(
  "/kelompok-riset/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return kelompokRisetController.updateKelompokRiset(
      req as unknown as MulterRequest,
      res,
    );
  },
);
router.delete(
  "/kelompok-riset/:id",
  kelompokRisetController.deleteKelompokRiset.bind(kelompokRisetController),
);

router.post(
  "/kelompok-riset/statistik",
  kelompokRisetController.createStatistikKelompokRiset.bind(
    kelompokRisetController,
  ),
);

router.get(
  "/kelompok-riset/statistik",
  kelompokRisetController.getAllStatistikKelompokRiset.bind(
    kelompokRisetController,
  ),
);

router.put(
  "/kelompok-riset/statistik/:id",
  kelompokRisetController.updateStatistikKelompokRiset.bind(
    kelompokRisetController,
  ),
);

router.delete(
  "/kelompok-riset/statistik/:id",
  kelompokRisetController.deleteStatistikKelompokRiset.bind(
    kelompokRisetController,
  ),
);

router.post(
  "/sejarah-lbkh",
  upload.fields([{ name: "foto", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahLbkhController.createSejarahLBKH(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.put(
  "/sejarah-lbkh/:id",
  upload.fields([{ name: "foto", maxCount: 5 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sejarahLbkhController.updateSejarahLBKH(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sejarah-lbkh/:id",
  sejarahLbkhController.deleteSejarahLBKH.bind(sejarahLbkhController),
);

router.get(
  "/sejarah-lbkh",
  sejarahLbkhController.getAllSejarahLBKH.bind(sejarahLbkhController),
);

router.post(
  "/sejarah-lbkh/statistik",
  sejarahLbkhController.createStatistik.bind(sejarahLbkhController),
);

router.get(
  "/sejarah-lbkh/statistik",
  sejarahLbkhController.getAllStatistik.bind(sejarahLbkhController),
);

router.put(
  "/sejarah-lbkh/statistik/:id",
  sejarahLbkhController.updateStatistik.bind(sejarahLbkhController),
);

router.delete(
  "/sejarah-lbkh/statistik/:id",
  sejarahLbkhController.deleteStatistik.bind(sejarahLbkhController),
);

router.post(
  "/visi-misi-lbkh",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return visiMisiLbkhController.createVisiMisiLBKH(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/visi-misi-lbkh",
  visiMisiLbkhController.getAllVisiMisiLBKH.bind(visiMisiLbkhController),
);

router.put(
  "/visi-misi-lbkh/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return visiMisiLbkhController.updateVisiMisiLBKH(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/visi-misi-lbkh/:id",
  visiMisiLbkhController.deleteVisiMisiLBKH.bind(visiMisiLbkhController),
);

router.post(
  "/visi-misi-lbkh/statistik",
  visiMisiLbkhController.createStatistikVisiMisiLBKH.bind(
    visiMisiLbkhController,
  ),
);

router.get(
  "/visi-misi-lbkh/statistik",
  visiMisiLbkhController.getAllStatistikVisiMisiLBKH.bind(
    visiMisiLbkhController,
  ),
);

router.put(
  "/visi-misi-lbkh/statistik/:id",
  visiMisiLbkhController.updateStatistikVisiMisiLBKH.bind(
    visiMisiLbkhController,
  ),
);

router.delete(
  "/visi-misi-lbkh/statistik/:id",
  visiMisiLbkhController.deleteStatistikVisiMisiLBKH.bind(
    visiMisiLbkhController,
  ),
);

router.post(
  "/pengurus-lbkh",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pengurusLbkhController.createPengurusLbkh(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/pengurus-lbkh",
  pengurusLbkhController.getAllPengurusLbkh.bind(pengurusLbkhController),
);

router.put(
  "/pengurus-lbkh/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pengurusLbkhController.updatePengurusLbkh(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/pengurus-lbkh/:id",
  pengurusLbkhController.deletePengurusLbkh.bind(pengurusLbkhController),
);

router.post(
  "/pengurus-lbkh/statistik",
  pengurusLbkhController.createStatistikPengurusLBKH.bind(
    pengurusLbkhController,
  ),
);

router.get(
  "/pengurus-lbkh/statistik",
  pengurusLbkhController.getAllStatistikPengurusLBKH.bind(
    pengurusLbkhController,
  ),
);

router.put(
  "/pengurus-lbkh/statistik/:id",
  pengurusLbkhController.updateStatistikPengurusLBKH.bind(
    pengurusLbkhController,
  ),
);

router.delete(
  "/pengurus-lbkh/statistik/:id",
  pengurusLbkhController.deleteStatistikPengurusLBKH.bind(
    pengurusLbkhController,
  ),
);

router.post(
  "/advokat-paralegal",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return AdvokatParalegalController.createAdvokatParalegal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/advokat-paralegal",
  AdvokatParalegalController.getAllAdvokatParalegal.bind(
    AdvokatParalegalController,
  ),
);

router.put(
  "/advokat-paralegal/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return AdvokatParalegalController.updateAdvokatParalegal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/advokat-paralegal/:id",
  AdvokatParalegalController.deleteAdvokatParalegal.bind(
    AdvokatParalegalController,
  ),
);

router.post(
  "/advokat-paralegal/statistik",
  AdvokatParalegalController.createStatistikAdvokatParalegal.bind(
    AdvokatParalegalController,
  ),
);

router.get(
  "/advokat-paralegal/statistik",
  AdvokatParalegalController.getAllStatistikAdvokatParalegal.bind(
    AdvokatParalegalController,
  ),
);

router.put(
  "/advokat-paralegal/statistik/:id",
  AdvokatParalegalController.updateStatistikAdvokatParalegal.bind(
    AdvokatParalegalController,
  ),
);

router.delete(
  "/advokat-paralegal/statistik/:id",
  AdvokatParalegalController.deleteStatistikAdvokatParalegal.bind(
    AdvokatParalegalController,
  ),
);

router.post(
  "/konsultasi-hukum",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return konsultasiHukumController.createKonsultasiHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/konsultasi-hukum",
  konsultasiHukumController.getAllKonsultasiHukum.bind(
    konsultasiHukumController,
  ),
);

router.put(
  "/konsultasi-hukum/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return konsultasiHukumController.updateKonsultasiHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/konsultasi-hukum/:id",
  konsultasiHukumController.deleteKonsultasiHukum.bind(
    konsultasiHukumController,
  ),
);

router.post(
  "/prosedur-konsultasi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return konsultasiHukumController.createProsedurKonsultasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/prosedur-konsultasi",
  konsultasiHukumController.getAllProsedurKonsultasi.bind(
    konsultasiHukumController,
  ),
);

router.put(
  "/prosedur-konsultasi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return konsultasiHukumController.updateProsedurKonsultasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/prosedur-konsultasi/:id",
  konsultasiHukumController.deleteProsedurKonsultasi.bind(
    konsultasiHukumController,
  ),
);

router.post(
  "/prosedur-konsultasi/statistik",
  konsultasiHukumController.createStatistikProsedurKonsultasi.bind(
    konsultasiHukumController,
  ),
);

router.get(
  "/prosedur-konsultasi/statistik",
  konsultasiHukumController.getAllStatistikProsedurKonsultasi.bind(
    konsultasiHukumController,
  ),
);

router.put(
  "/prosedur-konsultasi/statistik/:id",
  konsultasiHukumController.updateStatistikProsedurKonsultasi.bind(
    konsultasiHukumController,
  ),
);

router.delete(
  "/prosedur-konsultasi/statistik/:id",
  konsultasiHukumController.deleteStatistikProsedurKonsultasi.bind(
    konsultasiHukumController,
  ),
);
router.post(
  "/pendampingan-hukum",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pendampinganHukumController.createPendampinganHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/pendampingan-hukum",
  pendampinganHukumController.getAllPendampinganHukum.bind(
    pendampinganHukumController,
  ),
);

router.put(
  "/pendampingan-hukum/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pendampinganHukumController.updatePendampinganHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/pendampingan-hukum/:id",
  pendampinganHukumController.deletePendampinganHukum.bind(
    pendampinganHukumController,
  ),
);

router.post(
  "/prosedur-pendampingan-hukum",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pendampinganHukumController.createProsedurPendampinganHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/prosedur-pendampingan-hukum",
  pendampinganHukumController.getAllProsedurPendampinganHukum.bind(
    pendampinganHukumController,
  ),
);

router.put(
  "/prosedur-pendampingan-hukum/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pendampinganHukumController.updateProsedurPendampinganHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/prosedur-pendampingan-hukum/:id",
  pendampinganHukumController.deleteProsedurPendampinganHukum.bind(
    pendampinganHukumController,
  ),
);

router.post(
  "/prosedur-pendampingan-hukum/statistik",
  pendampinganHukumController.createStatistikProsedurPendampinganHukum.bind(
    pendampinganHukumController,
  ),
);

router.get(
  "/prosedur-pendampingan-hukum/statistik",
  pendampinganHukumController.getAllStatistikProsedurPendampinganHukum.bind(
    pendampinganHukumController,
  ),
);

router.put(
  "/prosedur-pendampingan-hukum/statistik/:id",
  pendampinganHukumController.updateStatistikProsedurPendampinganHukum.bind(
    pendampinganHukumController,
  ),
);

router.delete(
  "/prosedur-pendampingan-hukum/statistik/:id",
  pendampinganHukumController.deleteStatistikProsedurPendampinganHukum.bind(
    pendampinganHukumController,
  ),
);
router.post(
  "/pembuatan-legal",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pembuatanLegalController.createPembuatanLegal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/pembuatan-legal",
  pembuatanLegalController.getAllPembuatanLegal.bind(pembuatanLegalController),
);

router.put(
  "/pembuatan-legal/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pembuatanLegalController.updatePembuatanLegal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/pembuatan-legal/:id",
  pembuatanLegalController.deletePembuatanLegal.bind(pembuatanLegalController),
);

router.post(
  "/prosedur-pembuatan-legal",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pembuatanLegalController.createProsedurPembuatanLegal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/prosedur-pembuatan-legal",
  pembuatanLegalController.getAllProsedurPembuatanLegal.bind(
    pembuatanLegalController,
  ),
);

router.put(
  "/prosedur-pembuatan-legal/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return pembuatanLegalController.updateProsedurPembuatanLegal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/prosedur-pembuatan-legal/:id",
  pembuatanLegalController.deleteProsedurPembuatanLegal.bind(
    pembuatanLegalController,
  ),
);

router.post(
  "/prosedur-pembuatan-legal/statistik",
  pembuatanLegalController.createStatistikProsedurPembuatanLegal.bind(
    pembuatanLegalController,
  ),
);

router.get(
  "/prosedur-pembuatan-legal/statistik",
  pembuatanLegalController.getAllStatistikProsedurPembuatanLegal.bind(
    pembuatanLegalController,
  ),
);

router.put(
  "/prosedur-pembuatan-legal/statistik/:id",
  pembuatanLegalController.updateStatistikProsedurPembuatanLegal.bind(
    pembuatanLegalController,
  ),
);

router.delete(
  "/prosedur-pembuatan-legal/statistik/:id",
  pembuatanLegalController.deleteStatistikProsedurPembuatanLegal.bind(
    pembuatanLegalController,
  ),
);

router.post(
  "/saksi-ahli",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saksiAhliController.createSaksiAhli(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/saksi-ahli",
  saksiAhliController.getAllSaksiAhli.bind(saksiAhliController),
);

router.put(
  "/saksi-ahli/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saksiAhliController.updateSaksiAhli(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/saksi-ahli/:id",
  saksiAhliController.deleteSaksiAhli.bind(saksiAhliController),
);

router.post(
  "/prosedur-saksi-ahli",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saksiAhliController.createProsedurSaksiAhli(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/prosedur-saksi-ahli",
  saksiAhliController.getProsedurSaksiAhli.bind(saksiAhliController),
);

router.put(
  "/prosedur-saksi-ahli/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return saksiAhliController.updateProsedurSaksiAhli(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/prosedur-saksi-ahli/:id",
  saksiAhliController.deleteProsedurSaksiAhli.bind(saksiAhliController),
);

router.post(
  "/prosedur-saksi-ahli/statistik",
  saksiAhliController.createStatistikSaksiAhli.bind(saksiAhliController),
);

router.get(
  "/prosedur-saksi-ahli/statistik",
  saksiAhliController.getAllStatistikSaksiAhli.bind(saksiAhliController),
);

router.put(
  "/prosedur-saksi-ahli/statistik/:id",
  saksiAhliController.updateStatistikSaksiAhli.bind(saksiAhliController),
);

router.delete(
  "/prosedur-saksi-ahli/statistik/:id",
  saksiAhliController.deleteStatistikSaksiAhli.bind(saksiAhliController),
);

router.post(
  "/layanan-mediasi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananMediasiController.createLayananMediasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/layanan-mediasi",
  layananMediasiController.getAllLayananMediasi.bind(layananMediasiController),
);

router.put(
  "/layanan-mediasi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananMediasiController.updateLayananMediasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/layanan-mediasi/:id",
  layananMediasiController.deleteLayananMediasi.bind(layananMediasiController),
);

router.post(
  "/layanan-mediasi/statistik",
  layananMediasiController.createStatistikLayananMediasi.bind(
    layananMediasiController,
  ),
);

router.get(
  "/layanan-mediasi/statistik",
  layananMediasiController.getAllStatistikLayananMediasi.bind(
    layananMediasiController,
  ),
);

router.put(
  "/layanan-mediasi/statistik/:id",
  layananMediasiController.updateStatistikLayananMediasi.bind(
    layananMediasiController,
  ),
);

router.delete(
  "/layanan-mediasi/statistik/:id",
  layananMediasiController.deleteStatistikLayananMediasi.bind(
    layananMediasiController,
  ),
);

router.post(
  "/tim-mediator",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananMediasiController.createTimMediator(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/tim-mediator",
  layananMediasiController.getAllTimMediator.bind(layananMediasiController),
);

router.put(
  "/tim-mediator/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananMediasiController.updateTimMediator(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/tim-mediator/:id",
  layananMediasiController.deleteTimMediator.bind(layananMediasiController),
);

router.post(
  "/layanan-probono",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananProbonoController.createLayananProbono(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/layanan-probono",
  layananProbonoController.getAllLayananProbono.bind(layananProbonoController),
);

router.put(
  "/layanan-probono/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananProbonoController.updateLayananProbono(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/layanan-probono/:id",
  layananProbonoController.deleteLayananProbono.bind(layananProbonoController),
);

router.post(
  "/layanan-probono/statistik",
  layananProbonoController.createStatistikLayananProbono.bind(
    layananProbonoController,
  ),
);

router.get(
  "/layanan-probono/statistik",
  layananProbonoController.getAllStatistikLayananProbono.bind(
    layananProbonoController,
  ),
);

router.put(
  "/layanan-probono/statistik/:id",
  layananProbonoController.updateStatistikLayananProbono.bind(
    layananProbonoController,
  ),
);

router.delete(
  "/layanan-probono/statistik/:id",
  layananProbonoController.deleteStatistikLayananProbono.bind(
    layananProbonoController,
  ),
);

router.post(
  "/layanan-probono/kriteria-penerima",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananProbonoController.createKriteriaPenerima(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/layanan-probono/kriteria-penerima",
  layananProbonoController.getAllKriteriaPenerima.bind(
    layananProbonoController,
  ),
);

router.put(
  "/layanan-probono/kriteria-penerima/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return layananProbonoController.updateKriteriaPenerima(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/layanan-probono/kriteria-penerima/:id",
  layananProbonoController.deleteKriteriaPenerima.bind(
    layananProbonoController,
  ),
);

router.post(
  "/penyukuhan-hukum",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return penyukuhanHukumController.createPenyukuhanHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/penyukuhan-hukum",
  penyukuhanHukumController.getAllPenyukuhanHukum.bind(
    penyukuhanHukumController,
  ),
);

router.put(
  "/penyukuhan-hukum/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return penyukuhanHukumController.updatePenyukuhanHukumById(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/penyukuhan-hukum/:id",
  penyukuhanHukumController.deletePenyukuhanHukumById.bind(
    penyukuhanHukumController,
  ),
);

router.post(
  "/penyukuhan-hukum/statistik",
  penyukuhanHukumController.createStatistikPenyuluhanHukum.bind(
    penyukuhanHukumController,
  ),
);

router.get(
  "/penyukuhan-hukum/statistik",
  penyukuhanHukumController.getAllStatistikPenyuluhanHukum.bind(
    penyukuhanHukumController,
  ),
);

router.put(
  "/penyukuhan-hukum/statistik/:id",
  penyukuhanHukumController.updateStatistikPenyuluhanHukumById.bind(
    penyukuhanHukumController,
  ),
);

router.delete(
  "/penyukuhan-hukum/statistik/:id",
  penyukuhanHukumController.deleteStatistikPenyuluhanHukumById.bind(
    penyukuhanHukumController,
  ),
);

router.post(
  "/sosialisasi-praturan-uud",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sosialisasiPraturanUUDController.createSosialisasiPraturanUUD(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/sosialisasi-praturan-uud",
  sosialisasiPraturanUUDController.getAllSosialisasiPraturanUUD.bind(
    sosialisasiPraturanUUDController,
  ),
);

router.put(
  "/sosialisasi-praturan-uud/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return sosialisasiPraturanUUDController.updateSosialisasiPraturanUUDById(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/sosialisasi-praturan-uud/:id",
  sosialisasiPraturanUUDController.deleteSosialisasiPraturanUUDById.bind(
    sosialisasiPraturanUUDController,
  ),
);

router.post(
  "/sosialisasi-praturan-uud/statistik",
  sosialisasiPraturanUUDController.createStatistikSosialisasiPraturanUUD.bind(
    sosialisasiPraturanUUDController,
  ),
);

router.get(
  "/sosialisasi-praturan-uud/statistik",
  sosialisasiPraturanUUDController.getAllStatistikSosialisasiPraturanUUD.bind(
    sosialisasiPraturanUUDController,
  ),
);

router.put(
  "/sosialisasi-praturan-uud/statistik/:id",
  sosialisasiPraturanUUDController.updateStatistikSosialisasiPraturanUUDById.bind(
    sosialisasiPraturanUUDController,
  ),
);

router.delete(
  "/sosialisasi-praturan-uud/statistik/:id",
  sosialisasiPraturanUUDController.deleteStatistikSosialisasiPraturanUUDById.bind(
    sosialisasiPraturanUUDController,
  ),
);

router.post(
  "/kekhususan-hukum-pidana",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return kekhususanHukumPidanaController.createKekhususanHukumPidana(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/kekhususan-hukum-pidana",
  kekhususanHukumPidanaController.getAllKekhususanHukumPidana.bind(
    kekhususanHukumPidanaController,
  ),
);

router.put(
  "/kekhususan-hukum-pidana/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return kekhususanHukumPidanaController.updateKekhususanHukumPidana(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/kekhususan-hukum-pidana/:id",
  kekhususanHukumPidanaController.deleteKekhususanHukumPidana.bind(
    kekhususanHukumPidanaController,
  ),
);

router.post(
  "/kekhususan-hukum-pidana/prospek-karir",
  kekhususanHukumPidanaController.createProspekKarir.bind(
    kekhususanHukumPidanaController,
  ),
);

router.get(
  "/kekhususan-hukum-pidana/prospek-karir",
  kekhususanHukumPidanaController.getAllProspekKarir.bind(
    kekhususanHukumPidanaController,
  ),
);

router.put(
  "/kekhususan-hukum-pidana/prospek-karir/:id",
  kekhususanHukumPidanaController.updateProspekKarir.bind(
    kekhususanHukumPidanaController,
  ),
);

router.delete(
  "/kekhususan-hukum-pidana/prospek-karir/:id",
  kekhususanHukumPidanaController.deleteProspekKarir.bind(
    kekhususanHukumPidanaController,
  ),
);

router.post(
  "/kekhususan-hukum-pidana/statistik",
  kekhususanHukumPidanaController.createStatistikKekhususanHukumPidana.bind(
    kekhususanHukumPidanaController,
  ),
);

router.get(
  "/kekhususan-hukum-pidana/statistik",
  kekhususanHukumPidanaController.getAllStatistikKekhususanHukumPidana.bind(
    kekhususanHukumPidanaController,
  ),
);

router.put(
  "/kekhususan-hukum-pidana/statistik/:id",
  kekhususanHukumPidanaController.updateStatistikKekhususanHukumPidana.bind(
    kekhususanHukumPidanaController,
  ),
);

router.delete(
  "/kekhususan-hukum-pidana/statistik/:id",
  kekhususanHukumPidanaController.deleteStatistikKekhususanHukumPidana.bind(
    kekhususanHukumPidanaController,
  ),
);

router.post(
  "/kekhususan-hukum-tata-usaha-negara",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return KekhususanHukumTatausahaController.createKekhususanHukumTatausaha(
      req as unknown as MulterRequest,
      res,
    );
  },
);
router.get(
  "/kekhususan-hukum-tata-usaha-negara",
  KekhususanHukumTatausahaController.getAllKekhususanHukumTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.put(
  "/kekhususan-hukum-tata-usaha-negara/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return KekhususanHukumTatausahaController.updateKekhususanHukumTataUsahaNegara(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/kekhususan-hukum-tata-usaha-negara/:id",
  KekhususanHukumTatausahaController.deleteKekhususanHukumTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.post(
  "/kekhususan-hukum-tata-usaha-negara/prospek-karir",
  KekhususanHukumTatausahaController.createProspekKarirTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.get(
  "/kekhususan-hukum-tata-usaha-negara/prospek-karir",
  KekhususanHukumTatausahaController.getAllProspekKarirTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.put(
  "/kekhususan-hukum-tata-usaha-negara/prospek-karir/:id",
  KekhususanHukumTatausahaController.updateProspekKarirTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.delete(
  "/kekhususan-hukum-tata-usaha-negara/prospek-karir/:id",
  KekhususanHukumTatausahaController.deleteProspekKarirTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.post(
  "/kekhususan-hukum-tata-usaha-negara/statistik",
  KekhususanHukumTatausahaController.createStatistikKekhususanHukumTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.get(
  "/kekhususan-hukum-tata-usaha-negara/statistik",
  KekhususanHukumTatausahaController.getAllStatistikKekhususanHukumTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.put(
  "/kekhususan-hukum-tata-usaha-negara/statistik/:id",
  KekhususanHukumTatausahaController.updateStatistikKekhususanHukumTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.delete(
  "/kekhususan-hukum-tata-usaha-negara/statistik/:id",
  KekhususanHukumTatausahaController.deleteStatistikKekhususanHukumTataUsahaNegara.bind(
    KekhususanHukumTatausahaController,
  ),
);

router.post(
  "/kekhususan-hukum-perdata",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return kekhususanHukumPerdataController.createKekhususanHukumPerdata(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/kekhususan-hukum-perdata",
  kekhususanHukumPerdataController.getAllKekhususanHukumPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.put(
  "/kekhususan-hukum-perdata/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return kekhususanHukumPerdataController.updateKekhususanHukumPerdata(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/kekhususan-hukum-perdata/:id",
  kekhususanHukumPerdataController.deleteKekhususanHukumPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.post(
  "/kekhususan-hukum-perdata/prospek-karir",
  kekhususanHukumPerdataController.createProspekKarirPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.get(
  "/kekhususan-hukum-perdata/prospek-karir",
  kekhususanHukumPerdataController.getAllProspekKarirPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.put(
  "/kekhususan-hukum-perdata/prospek-karir/:id",
  kekhususanHukumPerdataController.updateProspekKarirPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.delete(
  "/kekhususan-hukum-perdata/prospek-karir/:id",
  kekhususanHukumPerdataController.deleteProspekKarirPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.post(
  "/kekhususan-hukum-perdata/statistik",
  kekhususanHukumPerdataController.createStatistikKekhususanHukumPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.get(
  "/kekhususan-hukum-perdata/statistik",
  kekhususanHukumPerdataController.getAllStatistikKekhususanHukumPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.put(
  "/kekhususan-hukum-perdata/statistik/:id",
  kekhususanHukumPerdataController.updateStatistikKekhususanHukumPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.delete(
  "/kekhususan-hukum-perdata/statistik/:id",
  kekhususanHukumPerdataController.deleteStatistikKekhususanHukumPerdata.bind(
    kekhususanHukumPerdataController,
  ),
);

router.post(
  "/daftar-dosen",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "ahli", maxCount: 1 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return daftarDosenController.createDaftarDosen(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/daftar-dosen",
  daftarDosenController.getAllDaftarDosen.bind(daftarDosenController),
);

router.put(
  "/daftar-dosen/:id",
  upload.fields([
    { name: "foto", maxCount: 1 },
    { name: "ahli", maxCount: 1 },
  ]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return daftarDosenController.updateDaftarDosen(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/daftar-dosen/:id",
  daftarDosenController.deleteDaftarDosen.bind(daftarDosenController),
);

router.post(
  "/daftar-dosen/statistik",
  daftarDosenController.createStatistikDaftarDosen.bind(daftarDosenController),
);

router.get(
  "/daftar-dosen/statistik",
  daftarDosenController.getStatistikDaftarDosen.bind(daftarDosenController),
);

router.put(
  "/daftar-dosen/statistik/:id",
  daftarDosenController.updateStatistikDaftarDosen.bind(daftarDosenController),
);

router.delete(
  "/daftar-dosen/statistik/:id",
  daftarDosenController.deleteStatistikDaftarDosen.bind(daftarDosenController),
);

router.post(
  "/daftar-kependidikan",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return daftarKependidikanController.createDaftarKependidikan(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/daftar-kependidikan",
  daftarKependidikanController.getAllDaftarKependidikan.bind(
    daftarKependidikanController,
  ),
);

router.put(
  "/daftar-kependidikan/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return daftarKependidikanController.updateDaftarKependidikan(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/daftar-kependidikan/:id",
  daftarKependidikanController.deleteDaftarKependidikan.bind(
    daftarKependidikanController,
  ),
);

router.post(
  "/daftar-kependidikan/statistik",
  daftarKependidikanController.createStatistikTenagaKependidikan.bind(
    daftarKependidikanController,
  ),
);

router.get(
  "/daftar-kependidikan/statistik",
  daftarKependidikanController.getStatistikDaftarKependidikan.bind(
    daftarKependidikanController,
  ),
);

router.put(
  "/daftar-kependidikan/statistik/:id",
  daftarKependidikanController.updateStatistikTenagaKependidikan.bind(
    daftarKependidikanController,
  ),
);

router.delete(
  "/daftar-kependidikan/statistik/:id",
  daftarKependidikanController.deleteStatistikTenagaKependidikan.bind(
    daftarKependidikanController,
  ),
);

router.post(
  "/himpunan-mahasiswa-prodi-hukum",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return himpunanMahasiswaProdiHukumController.CreateHimpunanMahasiswaProdiHukum(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/himpunan-mahasiswa-prodi-hukum",
  himpunanMahasiswaProdiHukumController.getAllHimpunanMahasiswaProdiHukum.bind(
    himpunanMahasiswaProdiHukumController,
  ),
);

router.put(
  "/himpunan-mahasiswa-prodi-hukum/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return himpunanMahasiswaProdiHukumController.updateHimpunan(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/himpunan-mahasiswa-prodi-hukum/:id",
  himpunanMahasiswaProdiHukumController.deleteHimpunan.bind(
    himpunanMahasiswaProdiHukumController,
  ),
);

router.post(
  "/himpunan-mahasiswa-prodi-hukum/statistik",
  himpunanMahasiswaProdiHukumController.createStatistik.bind(
    himpunanMahasiswaProdiHukumController,
  ),
);

router.get(
  "/himpunan-mahasiswa-prodi-hukum/statistik",
  himpunanMahasiswaProdiHukumController.getAllStatistik.bind(
    himpunanMahasiswaProdiHukumController,
  ),
);

router.put(
  "/himpunan-mahasiswa-prodi-hukum/statistik/:id",
  himpunanMahasiswaProdiHukumController.updateStatistik.bind(
    himpunanMahasiswaProdiHukumController,
  ),
);

router.delete(
  "/himpunan-mahasiswa-prodi-hukum/statistik/:id",
  himpunanMahasiswaProdiHukumController.deleteStatistik.bind(
    himpunanMahasiswaProdiHukumController,
  ),
);

router.post(
  "/dewan-perwakilan-mahasiswa",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dewanPerwakilanMahasiswaController.createDewanPerwakilan(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/dewan-perwakilan-mahasiswa",
  dewanPerwakilanMahasiswaController.getAllDewanPerwakilanMahasiswa.bind(
    dewanPerwakilanMahasiswaController,
  ),
);

router.put(
  "/dewan-perwakilan-mahasiswa/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dewanPerwakilanMahasiswaController.updateDewanPerwakilan(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/dewan-perwakilan-mahasiswa/:id",
  dewanPerwakilanMahasiswaController.deleteDewanPerwakilan.bind(
    dewanPerwakilanMahasiswaController,
  ),
);

router.post(
  "/dewan-perwakilan-mahasiswa/statistik",
  dewanPerwakilanMahasiswaController.createStatistik.bind(
    dewanPerwakilanMahasiswaController,
  ),
);

router.get(
  "/dewan-perwakilan-mahasiswa/statistik",
  dewanPerwakilanMahasiswaController.getAllStatistik.bind(
    dewanPerwakilanMahasiswaController,
  ),
);

router.put(
  "/dewan-perwakilan-mahasiswa/statistik/:id",
  dewanPerwakilanMahasiswaController.updateStatistik.bind(
    dewanPerwakilanMahasiswaController,
  ),
);

router.delete(
  "/dewan-perwakilan-mahasiswa/statistik/:id",
  dewanPerwakilanMahasiswaController.deleteStatistik.bind(
    dewanPerwakilanMahasiswaController,
  ),
);

router.post(
  "/badan-eksekutif-mahasiswa",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return badanEksikutifMahasiswaController.createBEM(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/badan-eksekutif-mahasiswa",
  badanEksikutifMahasiswaController.getAllBEM.bind(
    badanEksikutifMahasiswaController,
  ),
);

router.put(
  "/badan-eksekutif-mahasiswa/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return badanEksikutifMahasiswaController.updateBEM(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/badan-eksekutif-mahasiswa/:id",
  badanEksikutifMahasiswaController.deleteBEM.bind(
    badanEksikutifMahasiswaController,
  ),
);

router.post(
  "/badan-eksekutif-mahasiswa/statistik",
  badanEksikutifMahasiswaController.createStatistik.bind(
    badanEksikutifMahasiswaController,
  ),
);

router.get(
  "/badan-eksekutif-mahasiswa/statistik",
  badanEksikutifMahasiswaController.getAllStatistik.bind(
    badanEksikutifMahasiswaController,
  ),
);

router.put(
  "/badan-eksekutif-mahasiswa/statistik/:id",
  badanEksikutifMahasiswaController.updateStatistik.bind(
    badanEksikutifMahasiswaController,
  ),
);

router.delete(
  "/badan-eksekutif-mahasiswa/statistik/:id",
  badanEksikutifMahasiswaController.deleteStatistik.bind(
    badanEksikutifMahasiswaController,
  ),
);

router.post(
  "/tracker-study",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return trackerStudyController.createTrackerStudy(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/tracker-study",
  trackerStudyController.getAllTrackerStudy.bind(trackerStudyController),
);

router.put(
  "/tracker-study/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return trackerStudyController.updateTrackerStudy(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/tracker-study/:id",
  trackerStudyController.deleteTrackerStudy.bind(trackerStudyController),
);

router.post(
  "/waktu-tunggu-kerja",
  trackerStudyController.createWaktuTungguKerja.bind(trackerStudyController),
);

router.get(
  "/waktu-tunggu-kerja",
  trackerStudyController.getAllWaktuTungguKerja.bind(trackerStudyController),
);

router.put(
  "/waktu-tunggu-kerja/:id",
  trackerStudyController.updateWaktuTungguKerja.bind(trackerStudyController),
);

router.delete(
  "/waktu-tunggu-kerja/:id",
  trackerStudyController.deleteWaktuTungguKerja.bind(trackerStudyController),
);

router.post(
  "/statistik-tracker-study",
  trackerStudyController.createStatistikTrackerStudy.bind(
    trackerStudyController,
  ),
);

router.get(
  "/statistik-tracker-study",
  trackerStudyController.getAllStatistikTrackerStudy.bind(
    trackerStudyController,
  ),
);

router.put(
  "/statistik-tracker-study/:id",
  trackerStudyController.updateStatistikTrackerStudy.bind(
    trackerStudyController,
  ),
);

router.delete(
  "/statistik-tracker-study/:id",
  trackerStudyController.deleteStatistikTrackerStudy.bind(
    trackerStudyController,
  ),
);

router.post(
  "/tracker-study-unigal",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return trackerStudyUnigalController.createTrackerStudyUnigal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/tracker-study-unigal",
  trackerStudyUnigalController.getAllTrackerStudyUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.put(
  "/tracker-study-unigal/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return trackerStudyUnigalController.updateTrackerStudyUnigal(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/tracker-study-unigal/:id",
  trackerStudyUnigalController.deleteTrackerStudyUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.post(
  "/waktu-tunggu-kerja-unigal",
  trackerStudyUnigalController.createWaktuTungguKerja.bind(
    trackerStudyUnigalController,
  ),
);

router.get(
  "/waktu-tunggu-kerja-unigal",
  trackerStudyUnigalController.getAllWaktuTungguKerja.bind(
    trackerStudyUnigalController,
  ),
);

router.put(
  "/waktu-tunggu-kerja-unigal/:id",
  trackerStudyUnigalController.updateWaktuTungguKerjaUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.delete(
  "/waktu-tunggu-kerja-unigal/:id",
  trackerStudyUnigalController.deleteWaktuTungguKerjaUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.post(
  "/statistik-tracker-study-unigal",
  trackerStudyUnigalController.createStatistikTrackerStudyUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.get(
  "/statistik-tracker-study-unigal",
  trackerStudyUnigalController.getAllStatistikTrackerStudyUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.put(
  "/statistik-tracker-study-unigal/:id",
  trackerStudyUnigalController.updateStatistikTrackerStudyUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.delete(
  "/statistik-tracker-study-unigal/:id",
  trackerStudyUnigalController.deleteStatistikTrackerStudyUnigal.bind(
    trackerStudyUnigalController,
  ),
);

router.post(
  "/rekapitulasi-pengisian",
  rekapitulasiPengisianController.createRekapitulasiPengisian.bind(
    rekapitulasiPengisianController,
  ),
);

router.get(
  "/rekapitulasi-pengisian",
  rekapitulasiPengisianController.getAllRekapitulasiPengisian.bind(
    rekapitulasiPengisianController,
  ),
);

router.put(
  "/rekapitulasi-pengisian/:id",
  rekapitulasiPengisianController.updateRekapitulasiPengisian.bind(
    rekapitulasiPengisianController,
  ),
);

router.delete(
  "/rekapitulasi-pengisian/:id",
  rekapitulasiPengisianController.deleteRekapitulasiPengisian.bind(
    rekapitulasiPengisianController,
  ),
);

router.post(
  "/rekapitulasi-pengisian-per-kategori",
  rekapitulasiPengisianController.createRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.get(
  "/rekapitulasi-pengisian-per-kategori",
  rekapitulasiPengisianController.getAllRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.put(
  "/rekapitulasi-pengisian-per-kategori/:id",
  rekapitulasiPengisianController.updateRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.delete(
  "/rekapitulasi-pengisian-per-kategori/:id",
  rekapitulasiPengisianController.deleteRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.post(
  "/statistik-rekapitulasi-per-kategori",
  rekapitulasiPengisianController.createStatistikRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.get(
  "/statistik-rekapitulasi-per-kategori",
  rekapitulasiPengisianController.getAllStatistikRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.put(
  "/statistik-rekapitulasi-per-kategori/:id",
  rekapitulasiPengisianController.updateStatistikRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.delete(
  "/statistik-rekapitulasi-per-kategori/:id",
  rekapitulasiPengisianController.deleteStatistikRekapitulasiPerKategori.bind(
    rekapitulasiPengisianController,
  ),
);

router.post(
  "/beasiswa-indonesia",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return beasiswaIndonesiaController.createBeasiswaIndonesia(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/beasiswa-indonesia",
  beasiswaIndonesiaController.getAllBeasiswaIndonesia.bind(
    beasiswaIndonesiaController,
  ),
);

router.put(
  "/beasiswa-indonesia/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return beasiswaIndonesiaController.updateBeasiswaIndonesia(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/beasiswa-indonesia/:id",
  beasiswaIndonesiaController.deleteBeasiswaIndonesia.bind(
    beasiswaIndonesiaController,
  ),
);

router.post(
  "/statistik-beasiswa-indonesia",
  beasiswaIndonesiaController.createStatistikBeasiswaIndonesia.bind(
    beasiswaIndonesiaController,
  ),
);

router.get(
  "/statistik-beasiswa-indonesia",
  beasiswaIndonesiaController.getAllStatistikBeasiswaIndonesia.bind(
    beasiswaIndonesiaController,
  ),
);

router.put(
  "/statistik-beasiswa-indonesia/:id",
  beasiswaIndonesiaController.updateStatistikBeasiswaIndonesia.bind(
    beasiswaIndonesiaController,
  ),
);

router.delete(
  "/statistik-beasiswa-indonesia/:id",
  beasiswaIndonesiaController.deleteStatistikBeasiswaIndonesia.bind(
    beasiswaIndonesiaController,
  ),
);

router.post(
  "/beasiswa-bri",
  beasiswaBriController.createBeasiswaBri.bind(beasiswaBriController),
);

router.get(
  "/beasiswa-bri",
  beasiswaBriController.getAllBeasiswaBri.bind(beasiswaBriController),
);

router.put(
  "/beasiswa-bri/:id",
  beasiswaBriController.updateBeasiswaBri.bind(beasiswaBriController),
);

router.delete(
  "/beasiswa-bri/:id",
  beasiswaBriController.deleteBeasiswaBri.bind(beasiswaBriController),
);

router.post(
  "/timeline-beasiswa-bri",
  beasiswaBriController.createTimelineBeasiswaBri.bind(beasiswaBriController),
);

router.get(
  "/timeline-beasiswa-bri",
  beasiswaBriController.getAllTimelineBeasiswaBri.bind(beasiswaBriController),
);

router.put(
  "/timeline-beasiswa-bri/:id",
  beasiswaBriController.updateTimelineBeasiswaBri.bind(beasiswaBriController),
);

router.delete(
  "/timeline-beasiswa-bri/:id",
  beasiswaBriController.deleteTimelineBeasiswaBri.bind(beasiswaBriController),
);

router.post(
  "/statistik-beasiswa-bri",
  beasiswaBriController.createStatistikBeasiswaBri.bind(beasiswaBriController),
);

router.get(
  "/statistik-beasiswa-bri",
  beasiswaBriController.getAllStatistikBeasiswaBri.bind(beasiswaBriController),
);

router.put(
  "/statistik-beasiswa-bri/:id",
  beasiswaBriController.updateStatistikBeasiswaBri.bind(beasiswaBriController),
);

router.delete(
  "/statistik-beasiswa-bri/:id",
  beasiswaBriController.deleteStatistikBeasiswaBri.bind(beasiswaBriController),
);

router.post(
  "/beasiswa-kpi",
  beasiswaKpiController.createBeasiswaKip.bind(beasiswaKpiController),
);

router.get(
  "/beasiswa-kpi",
  beasiswaKpiController.getAllBeasiswaKip.bind(beasiswaKpiController),
);

router.put(
  "/beasiswa-kpi/:id",
  beasiswaKpiController.updateBeasiswaKip.bind(beasiswaKpiController),
);

router.delete(
  "/beasiswa-kpi/:id",
  beasiswaKpiController.deleteBeasiswaKip.bind(beasiswaKpiController),
);

router.post(
  "/timeline-beasiswa-kpi",
  beasiswaKpiController.createTimelineBeasiswaKip.bind(beasiswaKpiController),
);

router.get(
  "/timeline-beasiswa-kpi",
  beasiswaKpiController.getAllTimelineBeasiswaKip.bind(beasiswaKpiController),
);

router.put(
  "/timeline-beasiswa-kpi/:id",
  beasiswaKpiController.updateTimelineBeasiswaKip.bind(beasiswaKpiController),
);

router.delete(
  "/timeline-beasiswa-kpi/:id",
  beasiswaKpiController.deleteTimelineBeasiswaKip.bind(beasiswaKpiController),
);

router.post(
  "/statistik-beasiswa-kpi",
  beasiswaKpiController.createStatistikBeasiswaKip.bind(beasiswaKpiController),
);

router.get(
  "/statistik-beasiswa-kpi",
  beasiswaKpiController.getAllStatistikBeasiswaKip.bind(beasiswaKpiController),
);

router.put(
  "/statistik-beasiswa-kpi/:id",
  beasiswaKpiController.updateStatistikBeasiswaKip.bind(beasiswaKpiController),
);

router.delete(
  "/statistik-beasiswa-kpi/:id",
  beasiswaKpiController.deleteStatistikBeasiswaKip.bind(beasiswaKpiController),
);

router.post(
  "/prestasi-mahasiswa-nondikti",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return prestasiMahasiswaNondiktiController.createPrestasiMahasiswaNonDikti(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/prestasi-mahasiswa-nondikti",
  prestasiMahasiswaNondiktiController.getAllPrestasiMahasiswaNonDikti.bind(
    prestasiMahasiswaNondiktiController,
  ),
);

router.put(
  "/prestasi-mahasiswa-nondikti/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return prestasiMahasiswaNondiktiController.updatePrestasiMahasiswaNonDikti(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/prestasi-mahasiswa-nondikti/:id",
  prestasiMahasiswaNondiktiController.deletePrestasiMahasiswaNonDikti.bind(
    prestasiMahasiswaNondiktiController,
  ),
);

router.post(
  "/statistik-prestasi-mahasiswa-nondikti",
  prestasiMahasiswaNondiktiController.createStatistikPrestasiMahasiswaNonDikti.bind(
    prestasiMahasiswaNondiktiController,
  ),
);

router.get(
  "/statistik-prestasi-mahasiswa-nondikti",
  prestasiMahasiswaNondiktiController.getAllStatistikPrestasiMahasiswaNonDikti.bind(
    prestasiMahasiswaNondiktiController,
  ),
);

router.put(
  "/statistik-prestasi-mahasiswa-nondikti/:id",
  prestasiMahasiswaNondiktiController.updateStatistikPrestasiMahasiswaNonDikti.bind(
    prestasiMahasiswaNondiktiController,
  ),
);

router.delete(
  "/statistik-prestasi-mahasiswa-nondikti/:id",
  prestasiMahasiswaNondiktiController.deleteStatistikPrestasiMahasiswaNonDikti.bind(
    prestasiMahasiswaNondiktiController,
  ),
);

router.post(
  "/data-rekognisi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataRekognisiController.createDataRekognisi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/data-rekognisi",
  dataRekognisiController.getAllDataRekognisi.bind(dataRekognisiController),
);

router.put(
  "/data-rekognisi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataRekognisiController.updateDataRekognisi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/data-rekognisi/:id",
  dataRekognisiController.deleteDataRekognisi.bind(dataRekognisiController),
);

router.post(
  "/statistik-data-rekognisi",
  dataRekognisiController.createStatistikDataRekognisi.bind(
    dataRekognisiController,
  ),
);

router.get(
  "/statistik-data-rekognisi",
  dataRekognisiController.getAllStatistikDataRekognisi.bind(
    dataRekognisiController,
  ),
);

router.put(
  "/statistik-data-rekognisi/:id",
  dataRekognisiController.updateStatistikDataRekognisi.bind(
    dataRekognisiController,
  ),
);

router.delete(
  "/statistik-data-rekognisi/:id",
  dataRekognisiController.deleteStatistikDataRekognisi.bind(
    dataRekognisiController,
  ),
);

router.post(
  "/data-seminar-mahasiswa",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataSeminarMahasiswaController.createDataSeminarMahasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/data-seminar-mahasiswa",
  dataSeminarMahasiswaController.getAllDataSeminarMahasiswa.bind(
    dataSeminarMahasiswaController,
  ),
);

router.put(
  "/data-seminar-mahasiswa/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataSeminarMahasiswaController.updateDataSeminarMahasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/data-seminar-mahasiswa/:id",
  dataSeminarMahasiswaController.deleteDataSeminarMahasiswa.bind(
    dataSeminarMahasiswaController,
  ),
);

router.post(
  "/statistik-data-seminar-mahasiswa",
  dataSeminarMahasiswaController.createStatistikDataSeminarMahasiswa.bind(
    dataSeminarMahasiswaController,
  ),
);

router.get(
  "/statistik-data-seminar-mahasiswa",
  dataSeminarMahasiswaController.getAllStatistikDataSeminarMahasiswa.bind(
    dataSeminarMahasiswaController,
  ),
);

router.put(
  "/statistik-data-seminar-mahasiswa/:id",
  dataSeminarMahasiswaController.updateStatistikDataSeminarMahasiswa.bind(
    dataSeminarMahasiswaController,
  ),
);

router.delete(
  "/statistik-data-seminar-mahasiswa/:id",
  dataSeminarMahasiswaController.deleteStatistikDataSeminarMahasiswa.bind(
    dataSeminarMahasiswaController,
  ),
);

router.post(
  "/data-magang-mahasiswa",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMagangMahasiswaController.createDataMagangMahasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/data-magang-mahasiswa",
  dataMagangMahasiswaController.getAllDataMagangMahasiswa.bind(
    dataMagangMahasiswaController,
  ),
);
router.put(
  "/data-magang-mahasiswa/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMagangMahasiswaController.updateDataMagangMahasiswa(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/data-magang-mahasiswa/:id",
  dataMagangMahasiswaController.deleteDataMagangMahasiswa.bind(
    dataMagangMahasiswaController,
  ),
);

router.post(
  "/statistik-data-magang-mahasiswa",
  dataMagangMahasiswaController.createStatistikDataMagangMahasiswa.bind(
    dataMagangMahasiswaController,
  ),
);

router.get(
  "/statistik-data-magang-mahasiswa",
  dataMagangMahasiswaController.getAllStatistikDataMagangMahasiswa.bind(
    dataMagangMahasiswaController,
  ),
);

router.put(
  "/statistik-data-magang-mahasiswa/:id",
  dataMagangMahasiswaController.updateStatistikDataMagangMahasiswa.bind(
    dataMagangMahasiswaController,
  ),
);

router.delete(
  "/statistik-data-magang-mahasiswa/:id",
  dataMagangMahasiswaController.deleteStatistikDataMagangMahasiswa.bind(
    dataMagangMahasiswaController,
  ),
);

router.post(
  "/data-mahasiswa-berwirausaha",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMahasiswaBerwirausahaController.createDataMahasiswaBerwirausaha(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/data-mahasiswa-berwirausaha",
  dataMahasiswaBerwirausahaController.getAllDataMahasiswaBerwirausaha.bind(
    dataMahasiswaBerwirausahaController,
  ),
);

router.put(
  "/data-mahasiswa-berwirausaha/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMahasiswaBerwirausahaController.updateDataMahasiswaBerwirausaha(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/data-mahasiswa-berwirausaha/:id",
  dataMahasiswaBerwirausahaController.deleteDataMahasiswaBerwirausaha.bind(
    dataMahasiswaBerwirausahaController,
  ),
);

router.post(
  "/statistik-data-mahasiswa-berwirausaha",
  dataMahasiswaBerwirausahaController.createStatistikDataMahasiswaBerwirausaha.bind(
    dataMahasiswaBerwirausahaController,
  ),
);

router.get(
  "/statistik-data-mahasiswa-berwirausaha",
  dataMahasiswaBerwirausahaController.getAllStatistikDataMahasiswaBerwirausaha.bind(
    dataMahasiswaBerwirausahaController,
  ),
);

router.put(
  "/statistik-data-mahasiswa-berwirausaha/:id",
  dataMahasiswaBerwirausahaController.updateStatistikDataMahasiswaBerwirausaha.bind(
    dataMahasiswaBerwirausahaController,
  ),
);

router.delete(
  "/statistik-data-mahasiswa-berwirausaha/:id",
  dataMahasiswaBerwirausahaController.deleteStatistikDataMahasiswaBerwirausaha.bind(
    dataMahasiswaBerwirausahaController,
  ),
);

router.post(
  "/lowongan-kerja",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return lowonganKerjaController.createLowonganKerja(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/lowongan-kerja",
  lowonganKerjaController.getAllLowonganKerja.bind(lowonganKerjaController),
);

router.put(
  "/lowongan-kerja/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return lowonganKerjaController.updateLowonganKerja(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/lowongan-kerja/:id",
  lowonganKerjaController.deleteLowonganKerja.bind(lowonganKerjaController),
);

router.post(
  "/statistik-lowongan-kerja",
  lowonganKerjaController.createStatistikLowonganKerja.bind(
    lowonganKerjaController,
  ),
);

router.get(
  "/statistik-lowongan-kerja",
  lowonganKerjaController.getAllStatistikLowonganKerja.bind(
    lowonganKerjaController,
  ),
);

router.put(
  "/statistik-lowongan-kerja/:id",
  lowonganKerjaController.updateStatistikLowonganKerja.bind(
    lowonganKerjaController,
  ),
);

router.delete(
  "/statistik-lowongan-kerja/:id",
  lowonganKerjaController.deleteStatistikLowonganKerja.bind(
    lowonganKerjaController,
  ),
);

router.post(
  "/alumni-berprestasi",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return alumniBerprestasiController.createAlumniBerprestasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/alumni-berprestasi",
  alumniBerprestasiController.getAllAlumniBerprestasi.bind(
    alumniBerprestasiController,
  ),
);

router.put(
  "/alumni-berprestasi/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return alumniBerprestasiController.updateAlumniBerprestasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/alumni-berprestasi/:id",
  alumniBerprestasiController.deleteAlumniBerprestasi.bind(
    alumniBerprestasiController,
  ),
);

router.post(
  "/statistik-alumni-berprestasi",
  alumniBerprestasiController.createStatistik.bind(alumniBerprestasiController),
);
router.get(
  "/statistik-alumni-berprestasi",
  alumniBerprestasiController.getAllStatistik.bind(alumniBerprestasiController),
);
router.put(
  "/statistik-alumni-berprestasi/:id",
  alumniBerprestasiController.updateStatistik.bind(alumniBerprestasiController),
);
router.delete(
  "/statistik-alumni-berprestasi/:id",
  alumniBerprestasiController.deleteStatistik.bind(alumniBerprestasiController),
);

router.post(
  "/data-mahasiswa-aktif",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMahasiswaAktifController.createDataMahasiswaAktif(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/data-mahasiswa-aktif",
  dataMahasiswaAktifController.getDataMahasiswaAktif.bind(
    dataMahasiswaAktifController,
  ),
);

router.put(
  "/data-mahasiswa-aktif/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMahasiswaAktifController.updateDataMahasiswaAktif(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/data-mahasiswa-aktif/:id",
  dataMahasiswaAktifController.deleteDataMahasiswaAktif.bind(
    dataMahasiswaAktifController,
  ),
);

router.post(
  "/statistik-data-mahasiswa-aktif",
  dataMahasiswaAktifController.createStatistikMahasiswaAktif.bind(
    dataMahasiswaAktifController,
  ),
);
router.get(
  "/statistik-data-mahasiswa-aktif",
  dataMahasiswaAktifController.getStatistikMahasiswaAktif.bind(
    dataMahasiswaAktifController,
  ),
);
router.put(
  "/statistik-data-mahasiswa-aktif/:id",
  dataMahasiswaAktifController.updateStatistikMahasiswaAktif.bind(
    dataMahasiswaAktifController,
  ),
);
router.delete(
  "/statistik-data-mahasiswa-aktif/:id",
  dataMahasiswaAktifController.deleteStatistikMahasiswaAktif.bind(
    dataMahasiswaAktifController,
  ),
);

router.post(
  "/data-mahasiswa-nonaktif",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMahasiswaNonaktifController.createDataMahasiswaNonAktif(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/data-mahasiswa-nonaktif",
  dataMahasiswaNonaktifController.getDataMahasiswaNonAktif.bind(
    dataMahasiswaNonaktifController,
  ),
);

router.put(
  "/data-mahasiswa-nonaktif/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataMahasiswaNonaktifController.updateDataMahasiswaNonAktif(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/data-mahasiswa-nonaktif/:id",
  dataMahasiswaNonaktifController.deleteDataMahasiswaNonAktif.bind(
    dataMahasiswaNonaktifController,
  ),
);

router.post(
  "/statistik-data-mahasiswa-nonaktif",
  dataMahasiswaNonaktifController.createStatistikMahasiswaNonAktif.bind(
    dataMahasiswaNonaktifController,
  ),
);
router.get(
  "/statistik-data-mahasiswa-nonaktif",
  dataMahasiswaNonaktifController.getStatistikMahasiswaNonAktif.bind(
    dataMahasiswaNonaktifController,
  ),
);
router.put(
  "/statistik-data-mahasiswa-nonaktif/:id",
  dataMahasiswaNonaktifController.updateStatistikMahasiswaNonAktif.bind(
    dataMahasiswaNonaktifController,
  ),
);
router.delete(
  "/statistik-data-mahasiswa-nonaktif/:id",
  dataMahasiswaNonaktifController.deleteStatistikMahasiswaNonAktif.bind(
    dataMahasiswaNonaktifController,
  ),
);

router.post(
  "/data-lulusan-pertahun",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataLulusanPertahunController.createDataLulusanPertahun(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/data-lulusan-pertahun",
  dataLulusanPertahunController.getDataLulusanPertahun.bind(
    dataLulusanPertahunController,
  ),
);

router.put(
  "/data-lulusan-pertahun/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataLulusanPertahunController.updateDataLulusanPertahun(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.delete(
  "/data-lulusan-pertahun/:id",
  dataLulusanPertahunController.deleteDataLulusanPertahun.bind(
    dataLulusanPertahunController,
  ),
);

router.post(
  "/statistik-data-lulusan-pertahun",
  dataLulusanPertahunController.createStatistikLulusanPertahun.bind(
    dataLulusanPertahunController,
  ),
);
router.get(
  "/statistik-data-lulusan-pertahun",
  dataLulusanPertahunController.getStatistikLulusanPertahun.bind(
    dataLulusanPertahunController,
  ),
);
router.put(
  "/statistik-data-lulusan-pertahun/:id",
  dataLulusanPertahunController.updateStatistikLulusanPertahun.bind(
    dataLulusanPertahunController,
  ),
);
router.delete(
  "/statistik-data-lulusan-pertahun/:id",
  dataLulusanPertahunController.deleteStatistikLulusanPertahun.bind(
    dataLulusanPertahunController,
  ),
);

router.post("/mou", mouController.createMOU.bind(mouController));
router.get("/mou", mouController.getMOU.bind(mouController));
router.put("/mou/:id", mouController.updateMOU.bind(mouController));
router.delete("/mou/:id", mouController.deleteMOU.bind(mouController));

router.post(
  "/statistik-mou",
  mouController.createStatistikMoU.bind(mouController),
);
router.get("/statistik-mou", mouController.getStatistikMoU.bind(mouController));
router.put(
  "/statistik-mou/:id",
  mouController.updateStatistikMoU.bind(mouController),
);
router.delete(
  "/statistik-mou/:id",
  mouController.deleteStatistikMoU.bind(mouController),
);

router.post("/moa", moaController.createMOA.bind(moaController));
router.get("/moa", moaController.getMOA.bind(moaController));
router.put("/moa/:id", moaController.updateMOA.bind(moaController));
router.delete("/moa/:id", moaController.deleteMOA.bind(moaController));

router.post(
  "/statistik-moa",
  moaController.createStatistikMoA.bind(moaController),
);
router.get("/statistik-moa", moaController.getStatistikMoA.bind(moaController));
router.put(
  "/statistik-moa/:id",
  moaController.updateStatistikMoA.bind(moaController),
);
router.delete(
  "/statistik-moa/:id",
  moaController.deleteStatistikMoA.bind(moaController),
);

router.post(
  "/pkpa",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataPkpaController.createDataPKPA(
      req as unknown as MulterRequest,
      res,
    );
  },
);
router.get("/pkpa", dataPkpaController.getDataPKPA.bind(dataPkpaController));
router.put(
  "/pkpa/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataPkpaController.updateDataPKPA(
      req as unknown as MulterRequest,
      res,
    );
  },
);
router.delete(
  "/pkpa/:id",
  dataPkpaController.deleteDataPKPA.bind(dataPkpaController),
);

router.post(
  "/statistik-pkpa",
  dataPkpaController.createStatistikPKPA.bind(dataPkpaController),
);
router.get(
  "/statistik-pkpa",
  dataPkpaController.getStatistikPKPA.bind(dataPkpaController),
);
router.put(
  "/statistik-pkpa/:id",
  dataPkpaController.updateStatistikPKPA.bind(dataPkpaController),
);
router.delete(
  "/statistik-pkpa/:id",
  dataPkpaController.deleteStatistikPKPA.bind(dataPkpaController),
);

router.post(
  "/peradilan-semu",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataPeradilanSemuController.createDataPeradilanSemu(
      req as unknown as MulterRequest,
      res,
    );
  },
);
router.get(
  "/peradilan-semu",
  dataPeradilanSemuController.getDataPeradilanSemu.bind(
    dataPeradilanSemuController,
  ),
);
router.put(
  "/peradilan-semu/:id",
  upload.fields([{ name: "foto", maxCount: 1 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return dataPeradilanSemuController.updateDataPeradilanSemu(
      req as unknown as MulterRequest,
      res,
    );
  },
);
router.delete(
  "/peradilan-semu/:id",
  dataPeradilanSemuController.deleteDataPeradilanSemu.bind(
    dataPeradilanSemuController,
  ),
);

router.post(
  "/statistik-peradilan-semu",
  dataPeradilanSemuController.createStatistikPeradilanSemu.bind(
    dataPeradilanSemuController,
  ),
);
router.get(
  "/statistik-peradilan-semu",
  dataPeradilanSemuController.getStatistikPeradilanSemu.bind(
    dataPeradilanSemuController,
  ),
);
router.put(
  "/statistik-peradilan-semu/:id",
  dataPeradilanSemuController.updateStatistikPeradilanSemu.bind(
    dataPeradilanSemuController,
  ),
);
router.delete(
  "/statistik-peradilan-semu/:id",
  dataPeradilanSemuController.deleteStatistikPeradilanSemu.bind(
    dataPeradilanSemuController,
  ),
);

router.post(
  "/akreditasi",
  upload.fields([{ name: "document", maxCount: 10 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return akreditasiController.createDataAkreditasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);

router.get(
  "/akreditasi",
  akreditasiController.getAllAkreditasii.bind(akreditasiController),
);
router.put(
  "/akreditasi/:id",
  upload.fields([{ name: "document", maxCount: 10 }]),
  (err: any, req: Request, res: Response, next: Function) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message || "File upload error",
      });
    }
    next();
  },
  (req: Request, res: Response, next: Function) => {
    const multerReq = req as unknown as MulterRequest;
    if (multerReq.fileValidationError) {
      return res.status(400).json({
        success: false,
        message: multerReq.fileValidationError,
      });
    }
    next();
  },
  (req: Request, res: Response) => {
    return akreditasiController.updateAkreditasi(
      req as unknown as MulterRequest,
      res,
    );
  },
);
router.delete(
  "/akreditasi/:id",
  akreditasiController.deleteAkreditasi.bind(akreditasiController),
);

export default router;
