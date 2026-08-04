import express from "express";
import userRoutes from "./routes/api";
import prisma from "./db/prisma";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(helmet());

const corsOptions = {
  origin: [
    "http://localhost:3000",
    "https://fh.unigal.ac.id",
    "https://university-galuh-kw6n.vercel.app",
  ],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

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
