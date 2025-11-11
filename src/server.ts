import express from "express";
import userRoutes from "./routes/api";
import prisma from "./db/prisma";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use("/api/v1", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

// Tutup Prisma saat server mati
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
