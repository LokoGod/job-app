import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const getAllJobListings = async () => {
  return prisma.job.findMany({ include: { device: true, customer: true } });
};

const createJob = async (
  jobError: string,
  jobDescription: string,
  jobIncludedItems: string,
  status: string,
  createdDate: Date,
  model: string,
  category: string,
  cusName: string,
  phoneNum: number,
  phoneNum2: number,
  email: string
) => {
  const customer = await prisma.customer.create({
    data: { cusName, phoneNum, phoneNum2, email },
  });

  const deviceCategory = await prisma.deviceCategories.create({
    data: { category },
  });

  const device = await prisma.device.create({
    data: {
      model,
      deviceCategoryId: deviceCategory.id,
      customerId: customer.id,
    },
  });

  const existingJobCount = await prisma.job.count();
  const jobIdPrefix = category.substring(0, 3).toUpperCase();
  const jobId = `${jobIdPrefix} - 0${existingJobCount + 1}`;

  const job = await prisma.job.create({
    data: {
      jobId,
      jobError,
      jobDescription,
      jobIncludedItems,
      status,
      createdDate: new Date(),
      deviceId: device.id,
      customerId: customer.id,
    },
  });
  return job;
};

const getSpecificJob = async (id: number) => {
  return prisma.job.findUnique({ where: { id } });
};

const deleteSpecificJob = async (id: number) => {
  return prisma.job.delete({ where: { id } });
};

const jobRepo = { getAllJobListings, createJob, getSpecificJob, deleteSpecificJob };
export default jobRepo;
