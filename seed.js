const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash("Fh2o30un1G3nk", 10);

  await prisma.user.create({
    data: {
      email: "rifki@unigal.ac.id",
      password: hashedPassword,
      status: true,
    },
  });

  console.log("Admin berhasil dibuat");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());