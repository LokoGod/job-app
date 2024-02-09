import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllJobListings = async () => {
  return prisma.job.findMany({ include: { device: true, customer: true } });
};

const createJob = async (
  jobId: string,
  jobError: string,
  jobDescription: string,
  status: string,
  createdDate: Date,
  deviceId: number,
  customerId: number
) => {
  return prisma.job.create({
    data: {
      jobId,
      jobError,
      jobDescription,
      status,
      createdDate,
      deviceId,
      customerId,
    },
  });
};

const jobRepo = { getAllJobListings, createJob };
export default jobRepo;
