import prisma from "../db/prisma";
import { uploadToCloudinary } from "../utils/cloudinary";

class HeroSectionService {
  async createHeroSection(
    judul: string,
    deskripsi: string,
    imageBuffer: Buffer
  ) {
    try {
      // Upload image to Cloudinary
      const imageUrl = await uploadToCloudinary(imageBuffer);

      // Save to database
      const heroSection = await prisma.heroSection.create({
        data: {
          judul: judul,
          deskripsi: deskripsi,
          image: imageUrl,
        },
      });

      return heroSection;
    } catch (error) {
      console.error("Error in createHeroSection:", error);
      throw new Error("Failed to create hero section");
    }
  }

  async getDataHeroSection() {
    try {
      const heroSection = await prisma.heroSection.findMany();
      return heroSection;
    } catch (error) {
      console.error("Error in getDataHeroSection:", error);
      throw new Error("Failed to get hero section data");
    }
  }

  async delete(id: number) {
    try {
      const heroSections = await prisma.heroSection.delete({
        where: {
          id,
        },
      });
      return heroSections;
    } catch (error) {
      console.error("Error in deleteStatistikDewanPerwakilanMahasiswa:", error);
      return null;
    }
  }
}

export default new HeroSectionService();
