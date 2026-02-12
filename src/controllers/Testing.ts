import { Request, Response } from "express";
import TestingService from "../services/testing";

class TestingController {
  async GetData(req: Request, res: Response) {
    try {
      const data = await TestingService.GetData();
      return res.status(200).json({
        success: true,
        message: "Data berhasil diambil",
        data: data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Gagal mengambil data",
      });
    }
  }
}

export default new TestingController();
