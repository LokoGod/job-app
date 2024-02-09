import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllJobListings = async () => {
  return prisma.job.findMany({ include: { device: true, customer: true } });
};

const jobRepo = { getAllJobListings }
export default jobRepo
