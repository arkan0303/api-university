import { Request, Response } from "express";
import akreditasiService from "../services/akreditasi-service";

interface MulterRequest extends Request {
  file?: Express.Multer.File;
  files?: {
    [fieldname: string]: Express.Multer.File[];
  };
}


interface ICreateAkreditasi {
  type: string;
  title: string;
  document?: Express.Multer.File[];
  documentNames?: string[];
  existingDocuments?: Array<{name: string, url: string}>; // Tambahkan ini
}

class AkreditasiController {
async createDataAkreditasi(req: MulterRequest, res: Response) {
    try {
      const { title, type, documentNames  } =
        req.body;

      console.log("req.body", req.body);
        const documentFiles = req.files?.["document"] || [];


      // Parse documentNames jika dikirim sebagai JSON string
      let parsedDocumentNames: string[] | undefined;
      if (documentNames) {
        parsedDocumentNames = typeof documentNames === 'string' 
          ? JSON.parse(documentNames) 
          : documentNames;
      }

      const akreditasi = await akreditasiService.createAkreditasi({
        title,
        type,
        document: documentFiles,
        documentNames: parsedDocumentNames,
      });
      res.status(201).json({
        success: true,
        data: akreditasi,
      });
    } catch (error: any) {
      console.error("Error in createAkreditasi:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Gagal membuat akreditasi",
      });
    }
  }

  async getAllAkreditasii(req: Request, res: Response) {
    try {
      const akreditasi = await akreditasiService.getAllAkreditasi();
      res.json({
        success: true,
        data: akreditasi,
      });
    } catch (error: any) {
      console.error("Error in getAllAkreditasi:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Gagal mengambil data akreditasi",
      });
    }
  }
async updateAkreditasi(req: MulterRequest, res: Response) {
  try {
    const { id } = req.params;
    const { title, type, documentNames, existingDocuments } = req.body;

    console.log("req.body", req.body);

    const documentFiles = req.files?.["document"] || [];

    // Parse documentNames dari JSON string
    let parsedDocumentNames: string[] | undefined;
    if (documentNames) {
      parsedDocumentNames = typeof documentNames === 'string' 
        ? JSON.parse(documentNames) 
        : documentNames;
    }

    // Parse existingDocuments dari JSON string
    let parsedExistingDocuments: Array<{name: string, url: string}> | undefined;
    if (existingDocuments) {
      parsedExistingDocuments = typeof existingDocuments === 'string' 
        ? JSON.parse(existingDocuments) 
        : existingDocuments;
    }

    console.log("Document files count:", documentFiles.length);
    console.log("Parsed documentNames:", parsedDocumentNames);
    console.log("Parsed existingDocuments:", parsedExistingDocuments);

    const updateData: ICreateAkreditasi & { 
      document?: Express.Multer.File[];
      existingDocuments?: Array<{name: string, url: string}>;
    } = {
      title,
      type,
      document: documentFiles,
      documentNames: parsedDocumentNames,
      existingDocuments: parsedExistingDocuments, // Tambahkan ini
    };

    const updatedAkreditasi = await akreditasiService.updateAkreditasi(
      Number(id),
      updateData
    );

    console.log("Updated Akreditasi:", updatedAkreditasi);

    res.status(200).json({
      success: true,
      data: updatedAkreditasi,
    });
  } catch (error: any) {
    console.error("Error in updateAkreditasi:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Gagal mengupdate akreditasi",
    });
  }
}

  async deleteAkreditasi(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await akreditasiService.deleteAkreditasi(Number(id));
      res.status(200).json({
        success: true,
        message: "Akreditasi berhasil dihapus",
      });
    } catch (error: any) {
      console.error("Error in deleteAkreditasi:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Gagal menghapus akreditasi",
      });
    }
  }
}


export default new AkreditasiController();