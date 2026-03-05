import rateLimit from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 menit
  max: 5, // Batasi 5 permintaan per IP per window
  message: "Terlalu banyak percobaan login. Silakan coba lagi nanti.",
  standardHeaders: true,
  legacyHeaders: false,
});