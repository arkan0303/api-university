import express from "express";
import userRoutes from "./routes/api";
import prisma from "./db/prisma";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS utama
const corsOptions = {
  origin: ["http://localhost:3000", "https://fh.unigal.ac.id"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

// Middleware CORS untuk semua route
app.use(cors(corsOptions));

// Preflight untuk semua OPTIONS
app.options("*", cors(corsOptions));

app.use("/api/v1", userRoutes);

const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

// Tutup Prisma saat server mati
process.on("SIGINT", async () => {
  await prisma.$disconnect();
  process.exit(0);
});
