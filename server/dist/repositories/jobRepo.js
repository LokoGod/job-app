"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllJobListings = async () => {
    return prisma.job.findMany({ include: { device: true, customer: true } });
};
const createJob = async (jobId, jobError, jobDescription, status, createdDate, model, category, cusName, phoneNum, phoneNum2, email) => {
    const customer = await prisma.customer.create({
        data: { cusName, phoneNum, phoneNum2, email },
    });
    const deviceCategory = await prisma.deviceCategories.create({
        data: { category },
    });
    const device = await prisma.device.create({
        data: { model, deviceCategoryId: deviceCategory.id, customerId: customer.id }
    });
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
    });
    return job;
};
const jobRepo = { getAllJobListings, createJob };
exports.default = jobRepo;
