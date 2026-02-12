import { Prisma } from "@prisma/client";
import prisma from "../db/prisma";

class Testing {
  async GetData() {
    try {
      const data = await prisma.soppendaftaran.findMany();
      return data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new Testing();
