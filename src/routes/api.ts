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

type MulterRequest = Request & {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
  fileValidationError?: string;
};

const router = express.Router();
const heroSectionController = new HeroSectionController();

// Apply the upload middleware to the route
router.post(
  "/hero-section",
  HeroSectionController.uploadImage(),
  heroSectionController.createHeroSection.bind(heroSectionController)
);

router.get(
  "/hero-section",
  heroSectionController.getDataHeroSection.bind(heroSectionController)
);

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
  }
);

router.get("/berita", BeritaController.getAllBerita.bind(BeritaController));

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
      res
    );
  }
);

router.get(
  "/testimoni",
  TestimoniController.getAllTestimoni.bind(TestimoniController)
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
      res
    );
  }
);

router.get(
  "/sejarah-s1",
  sejarahS1Controller.getAllSejarahS1.bind(sejarahS1Controller)
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
      res
    );
  }
);

router.delete(
  "/sejarah-s1/:id",
  sejarahS1Controller.deleteData.bind(sejarahS1Controller)
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
      res
    );
  }
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
      res
    );
  }
);

router.delete(
  "/sejarah-s1/banner/:id",
  sejarahS1Controller.deleteBanner.bind(sejarahS1Controller)
);

router.get(
  "/sejarah-s1/banner",
  sejarahS1Controller.getDataBanner.bind(sejarahS1Controller)
);

router.post(
  "/sejarah-s1/statistik",
  sejarahS1Controller.createStatistikSejarahS1.bind(sejarahS1Controller)
);

router.put(
  "/sejarah-s1/statistik/:id",
  sejarahS1Controller.updateStatistikSejarahS1.bind(sejarahS1Controller)
);

router.delete(
  "/sejarah-s1/statistik/:id",
  sejarahS1Controller.deleteStatistikSejarahS1.bind(sejarahS1Controller)
);

router.get(
  "/sejarah-s1/statistik",
  sejarahS1Controller.getAllStatistikSejarahS1.bind(sejarahS1Controller)
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
      res
    );
  }
);

router.get(
  "/sarana-prasarana",
  saranaPrasaranaController.getAllSaranaPrasarana.bind(
    saranaPrasaranaController
  )
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
      res
    );
  }
);

router.delete(
  "/sarana-prasarana/:id",
  saranaPrasaranaController.deleteSaranaPrasarana.bind(
    saranaPrasaranaController
  )
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
      res
    );
  }
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
      res
    );
  }
);

router.delete(
  "/sarana-prasarana/banner/:id",
  saranaPrasaranaController.deleteBannerSaranaPrasarana.bind(
    saranaPrasaranaController
  )
);

router.get(
  "/sarana-prasarana/banner",
  saranaPrasaranaController.getDataBanner.bind(saranaPrasaranaController)
);

router.post(
  "/sarana-prasarana/statistik",
  saranaPrasaranaController.createStatistikSaranaPrasarana.bind(
    saranaPrasaranaController
  )
);

router.put(
  "/sarana-prasarana/statistik/:id",
  saranaPrasaranaController.updateStatistikSaranaPrasarana.bind(
    saranaPrasaranaController
  )
);

router.delete(
  "/sarana-prasarana/statistik/:id",
  saranaPrasaranaController.deleteStatistikSaranaPrasarana.bind(
    saranaPrasaranaController
  )
);

router.get(
  "/sarana-prasarana/statistik",
  saranaPrasaranaController.getAllStatistikSaranaPrasarana.bind(
    saranaPrasaranaController
  )
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
      res
    );
  }
);

router.delete(
  "/rencana-strategis/:id",
  RencanaStrategisController.deleteRencanaStrategis.bind(
    RencanaStrategisController
  )
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
      res
    );
  }
);

router.get(
  "/rencana-strategis",
  RencanaStrategisController.getAllRencanaStrategis.bind(
    RencanaStrategisController
  )
);

router.post(
  "/rencana-strategis/statistik",
  RencanaStrategisController.createStatistikStrategis.bind(
    RencanaStrategisController
  )
);

router.put(
  "/rencana-strategis/statistik/:id",
  RencanaStrategisController.updateStatistikStrategis.bind(
    RencanaStrategisController
  )
);

router.delete(
  "/rencana-strategis/statistik/:id",
  RencanaStrategisController.deleteStatistikStrategis.bind(
    RencanaStrategisController
  )
);

router.get(
  "/rencana-strategis/statistik",
  RencanaStrategisController.getAllStatistikStrategis.bind(
    RencanaStrategisController
  )
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
      res
    );
  }
);

router.get(
  "/senat-fakultas",
  senatFakultasController.getAllSenatFakultas.bind(senatFakultasController)
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
      res
    );
  }
);

router.delete(
  "/senat-fakultas/:id",
  senatFakultasController.deleteSenatFakultas.bind(senatFakultasController)
);

router.post(
  "/senat-fakultas/statistik",
  senatFakultasController.createStatistikSenatFakultas.bind(
    senatFakultasController
  )
);

router.put(
  "/senat-fakultas/statistik/:id",
  senatFakultasController.updateStatistikSenatFakultas.bind(
    senatFakultasController
  )
);

router.delete(
  "/senat-fakultas/statistik/:id",
  senatFakultasController.deleteStatistikSenatFakultas.bind(
    senatFakultasController
  )
);

router.get(
  "/senat-fakultas/statistik",
  senatFakultasController.getAllStatistikSenatFakultas.bind(
    senatFakultasController
  )
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
      res
    );
  }
);

router.get(
  "/sejarah-s2",
  sejarahS2Controller.getAllSejarahS2.bind(sejarahS2Controller)
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
      res
    );
  }
);

router.delete(
  "/sejarah-s2/:id",
  sejarahS2Controller.deleteData.bind(sejarahS2Controller)
);

router.post(
  "/sejarah-s2/statistik",
  sejarahS2Controller.createStatistikSejarahS2.bind(sejarahS2Controller)
);

router.put(
  "/sejarah-s2/statistik/:id",
  sejarahS2Controller.updateStatistikSejarahS2.bind(sejarahS2Controller)
);

router.delete(
  "/sejarah-s2/statistik/:id",
  sejarahS2Controller.deleteStatistikSejarahS2.bind(sejarahS2Controller)
);

router.get(
  "/sejarah-s2/statistik",
  sejarahS2Controller.getAllStatistikSejarahS2.bind(sejarahS2Controller)
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
      res
    );
  }
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
      res
    );
  }
);

router.delete(
  "/sejarah-s2/banner/:id",
  sejarahS2Controller.deleteSejarahS2Banner.bind(sejarahS2Controller)
);

router.get(
  "/sejarah-s2/banner",
  sejarahS2Controller.getDataBanner.bind(sejarahS2Controller)
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
      res
    );
  }
);

router.get(
  "/visi-misi",
  VisMisiController.getAllVisMisi.bind(VisMisiController)
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
      res
    );
  }
);

router.delete(
  "/visi-misi/:id",
  VisMisiController.deleteVisMisi.bind(VisMisiController)
);

router.post(
  "/visi-misi/statistik",
  VisMisiController.createStatistikVisiMisi.bind(VisMisiController)
);

router.put(
  "/visi-misi/statistik/:id",
  VisMisiController.updateStatistikVisiMisi.bind(VisMisiController)
);

router.delete(
  "/visi-misi/statistik/:id",
  VisMisiController.deleteStatistikVisiMisi.bind(VisMisiController)
);

router.get(
  "/visi-misi/statistik",
  VisMisiController.getAllStatistikVisiMisi.bind(VisMisiController)
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
      res
    );
  }
);

router.get(
  "/struktur-organisasi",
  strukturOrganisasiController.getAllStrukturOrganisasi.bind(
    strukturOrganisasiController
  )
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
      res
    );
  }
);

router.delete(
  "/struktur-organisasi/:id",
  strukturOrganisasiController.deleteStrukturOrganisasi.bind(
    strukturOrganisasiController
  )
);

router.post(
  "/struktur-organisasi/statistik",
  strukturOrganisasiController.createStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController
  )
);

router.put(
  "/struktur-organisasi/statistik/:id",
  strukturOrganisasiController.updateStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController
  )
);

router.delete(
  "/struktur-organisasi/statistik/:id",
  strukturOrganisasiController.deleteStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController
  )
);

router.get(
  "/struktur-organisasi/statistik",
  strukturOrganisasiController.getAllStatistikStrukturOrganisasi.bind(
    strukturOrganisasiController
  )
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
      res
    );
  }
);

router.get(
  "/pimpinan",
  pimpinanController.getAllPimpinan.bind(pimpinanController)
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
      res
    );
  }
);

router.delete(
  "/pimpinan/:id",
  pimpinanController.deletePimpinan.bind(pimpinanController)
);

router.post(
  "/pimpinan/statistik",
  pimpinanController.createStatistikPimpinan.bind(pimpinanController)
);

router.put(
  "/pimpinan/statistik/:id",
  pimpinanController.updateStatistikPimpinan.bind(pimpinanController)
);

router.delete(
  "/pimpinan/statistik/:id",
  pimpinanController.deleteStatistikPimpinan.bind(pimpinanController)
);

router.get(
  "/pimpinan/statistik",
  pimpinanController.getAllStatistikPimpinan.bind(pimpinanController)
);

router.post(
  "/program-sarjana-hukum",
  upload.fields([{ name: "image", maxCount: 5 }]),
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
      res
    );
  }
);

router.get(
  "/program-sarjana-hukum",
  programSarjanaHukumController.getAllProgramSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.put(
  "/program-sarjana-hukum/:id",
  upload.fields([{ name: "image", maxCount: 5 }]),
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
      res
    );
  }
);

router.delete(
  "/program-sarjana-hukum/:id",
  programSarjanaHukumController.deleteProgramSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.post(
  "/program-sarjana-hukum/statistik",
  programSarjanaHukumController.createStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.put(
  "/program-sarjana-hukum/statistik/:id",
  programSarjanaHukumController.updateStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.delete(
  "/program-sarjana-hukum/statistik/:id",
  programSarjanaHukumController.deleteStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.get(
  "/program-sarjana-hukum/statistik",
  programSarjanaHukumController.getAllStatistikProgramSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.post(
  "/program-sarjana-hukum/prospek-karir",
  programSarjanaHukumController.createProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.put(
  "/program-sarjana-hukum/prospek-karir/:id",
  programSarjanaHukumController.updateProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.delete(
  "/program-sarjana-hukum/prospek-karir/:id",
  programSarjanaHukumController.deleteProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.get(
  "/program-sarjana-hukum/prospek-karir",
  programSarjanaHukumController.getAllProspekKarirSarjanaHukum.bind(
    programSarjanaHukumController
  )
);

router.post(
  "/program-magister-hukum",
  upload.fields([{ name: "image", maxCount: 5 }]),
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
      res
    );
  }
);

router.get(
  "/program-magister-hukum",
  programMasgisterHukumController.getAllProgramMagisterHukum.bind(
    programMasgisterHukumController
  )
);

router.put(
  "/program-magister-hukum/:id",
  upload.fields([{ name: "image", maxCount: 5 }]),
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
      res
    );
  }
);

router.delete(
  "/program-magister-hukum/:id",
  programMasgisterHukumController.deleteProgramMagisterHukum.bind(
    programMasgisterHukumController
  )
);

router.post(
  "/program-magister-hukum/statistik",
  programMasgisterHukumController.createStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController
  )
);

router.get(
  "/program-magister-hukum/statistik",
  programMasgisterHukumController.getAllStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController
  )
);

router.put(
  "/program-magister-hukum/statistik/:id",
  programMasgisterHukumController.updateStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController
  )
);

router.delete(
  "/program-magister-hukum/statistik/:id",
  programMasgisterHukumController.deleteStatistikProgramMagisterHukum.bind(
    programMasgisterHukumController
  )
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
      res
    );
  }
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
      res
    );
  }
);

router.delete(
  "/program-magister-hukum/prospek-karir/:id",
  programMasgisterHukumController.deleteProspekKarirMagisterHukum.bind(
    programMasgisterHukumController
  )
);

router.get(
  "/program-magister-hukum/prospek-karir",
  programMasgisterHukumController.getAllProspekKarirMagisterHukum.bind(
    programMasgisterHukumController
  )
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
      res
    );
  }
);

router.get(
  "/surat-masuk",
  SuratMasukController.getAllSuratMasuk.bind(SuratMasukController)
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
      res
    );
  }
);

router.delete(
  "/surat-masuk/:id",
  SuratMasukController.deleteSuratMasuk.bind(SuratMasukController)
);

router.post(
  "/surat-masuk/statistik",
  SuratMasukController.createStatistikArsipSuratMasuk.bind(SuratMasukController)
);

router.get(
  "/surat-masuk/statistik",
  SuratMasukController.getAllStatistikArsipSuratMasuk.bind(SuratMasukController)
);

router.put(
  "/surat-masuk/statistik/:id",
  SuratMasukController.updateStatistikArsipSuratMasuk.bind(SuratMasukController)
);

router.delete(
  "/surat-masuk/statistik/:id",
  SuratMasukController.deleteStatistikArsipSuratMasuk.bind(SuratMasukController)
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
      res
    );
  }
);

router.get(
  "/surat-keluar",
  SuratKeluarController.getAllSuratKeluar.bind(SuratKeluarController)
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
      res
    );
  }
);

router.delete(
  "/surat-keluar/:id",
  SuratKeluarController.deleteSuratKeluar.bind(SuratKeluarController)
);

router.post(
  "/surat-keluar/statistik",
  SuratKeluarController.createStatistikArsipSuratKeluar.bind(
    SuratKeluarController
  )
);

router.get(
  "/surat-keluar/statistik",
  SuratKeluarController.getAllStatistikArsipSuratKeluar.bind(
    SuratKeluarController
  )
);

router.put(
  "/surat-keluar/statistik/:id",
  SuratKeluarController.updateStatistikArsipSuratKeluar.bind(
    SuratKeluarController
  )
);

router.delete(
  "/surat-keluar/statistik/:id",
  SuratKeluarController.deleteStatistikArsipSuratKeluar.bind(
    SuratKeluarController
  )
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
      res
    );
  }
);

router.get(
  "/keterangan-aktif-mhs",
  KeteranganAktifMahasiswaController.getAllKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController
  )
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
      res
    );
  }
);

router.delete(
  "/keterangan-aktif-mhs/:id",
  KeteranganAktifMahasiswaController.deleteKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController
  )
);

router.post(
  "/keterangan-aktif-mhs/statistik",
  KeteranganAktifMahasiswaController.createStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController
  )
);

router.get(
  "/keterangan-aktif-mhs/statistik",
  KeteranganAktifMahasiswaController.getAllStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController
  )
);

router.put(
  "/keterangan-aktif-mhs/statistik/:id",
  KeteranganAktifMahasiswaController.updateStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController
  )
);

router.delete(
  "/keterangan-aktif-mhs/statistik/:id",
  KeteranganAktifMahasiswaController.deleteStatistikKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController
  )
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
      res
    );
  }
);

router.get(
  "/surat-ijin-penelitian",
  SuratIjinPenelitianController.getAllSuratIjinPenelitian.bind(
    SuratIjinPenelitianController
  )
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
      res
    );
  }
);

router.delete(
  "/surat-ijin-penelitian/:id",
  SuratIjinPenelitianController.deleteSuratIjinPenelitian.bind(
    SuratIjinPenelitianController
  )
);

router.get(
  "/keterangan-aktif-mhs/data",
  KeteranganAktifMahasiswaController.getAllDataKeteranganAktifMahasiswa.bind(
    KeteranganAktifMahasiswaController
  )
);

router.post(
  "/surat-ijin-penelitian/statistik",
  SuratIjinPenelitianController.createStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController
  )
);

router.get(
  "/surat-ijin-penelitian/statistik",
  SuratIjinPenelitianController.getStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController
  )
);

router.put(
  "/surat-ijin-penelitian/statistik/:id",
  SuratIjinPenelitianController.updateStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController
  )
);

router.delete(
  "/surat-ijin-penelitian/statistik/:id",
  SuratIjinPenelitianController.deleteStatistikSuratIjinPenelitian.bind(
    SuratIjinPenelitianController
  )
);

router.post(
  "/surat-kelakuan-baik",
  suratKelakuanBaikController.createSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
);

router.get(
  "/surat-kelakuan-baik",
  suratKelakuanBaikController.getAllSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
);

router.put(
  "/surat-kelakuan-baik/:id",
  suratKelakuanBaikController.updateSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
);

router.delete(
  "/surat-kelakuan-baik/:id",
  suratKelakuanBaikController.deleteSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
);

router.get(
  "/surat-kelakuan-baik/statistik",
  suratKelakuanBaikController.getStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
);

router.put(
  "/surat-kelakuan-baik/statistik/:id",
  suratKelakuanBaikController.updateStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
);

router.delete(
  "/surat-kelakuan-baik/statistik/:id",
  suratKelakuanBaikController.deleteStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
);

router.post(
  "/surat-kelakuan-baik/statistik",
  suratKelakuanBaikController.createStatistikSuratKelakuanBaik.bind(
    suratKelakuanBaikController
  )
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
      res
    );
  }
);

router.get(
  "/surat-pengajuan-beasiswa",
  suratPengajuanBeasiswaController.getAllSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController
  )
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
      res
    );
  }
);

router.delete(
  "/surat-pengajuan-beasiswa/:id",
  suratPengajuanBeasiswaController.deleteSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController
  )
);

router.get(
  "/surat-pengajuan-beasiswa/statistik",
  suratPengajuanBeasiswaController.getStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController
  )
);

router.put(
  "/surat-pengajuan-beasiswa/statistik/:id",
  suratPengajuanBeasiswaController.updateStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController
  )
);

router.delete(
  "/surat-pengajuan-beasiswa/statistik/:id",
  suratPengajuanBeasiswaController.deleteStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController
  )
);

router.post(
  "/surat-pengajuan-beasiswa/statistik",
  suratPengajuanBeasiswaController.createStatistikSuratPengajuanBeasiswa.bind(
    suratPengajuanBeasiswaController
  )
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
      res
    );
  }
);

router.get(
  "/seminar-proposal",
  seminarProposalController.getAllSeminarProposal.bind(
    seminarProposalController
  )
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
      res
    );
  }
);

router.delete(
  "/seminar-proposal/:id",
  seminarProposalController.deleteSeminarProposal.bind(
    seminarProposalController
  )
);

router.post(
  "/prosedur-pelaksanaan",
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
    return seminarProposalController.createProsedurPelaksanaan(
      req as unknown as MulterRequest,
      res
    );
  }
);

router.get(
  "/prosedur-pelaksanaan",
  seminarProposalController.getAllProsedurPelaksanaan.bind(
    seminarProposalController
  )
);

router.put(
  "/prosedur-pelaksanaan/:id",
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
    return seminarProposalController.updateProsedurPelaksanaan(
      req as unknown as MulterRequest,
      res
    );
  }
);

router.delete(
  "/prosedur-pelaksanaan/:id",
  seminarProposalController.deleteProsedurPelaksanaan.bind(
    seminarProposalController
  )
);

export default router;
