"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const prisma_1 = __importDefault(require("./db/prisma"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
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
app.use((0, cors_1.default)(corsOptions));
app.use("/api/v1", api_1.default);
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});
// Tutup Prisma saat server mati
process.on("SIGINT", async () => {
    await prisma_1.default.$disconnect();
    process.exit(0);
});
