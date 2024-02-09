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
    data: { model, deviceCategoryId:  deviceCategory.id, customerId: customer.id}
  })

  const job = await prisma.job.create({
    data: {
      jobId,
      jobError,
      jobDescription,
      status,
      createdDate: new Date(),
      deviceId: device.id,
      customerId: customer.id
    }
  })
  return job
};

const jobRepo = { getAllJobListings, createJob };
export default jobRepo;
