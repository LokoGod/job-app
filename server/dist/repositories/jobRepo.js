"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllJobListings = async () => {
    return prisma.job.findMany({ include: { device: true, customer: true } });
};
const createJob = async (jobError, jobDescription, jobIncludedItems, status, createdDate, model, category, cusName, phoneNum, phoneNum2, email) => {
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
const getSpecificJob = async (id) => {
    return prisma.job.findUnique({
        where: { id },
        include: { device: true, customer: true },
    });
};
const deleteSpecificJob = async (id) => {
    return prisma.job.delete({
        where: { id },
        include: { device: true, customer: true },
    });
};
const jobRepo = {
    getAllJobListings,
    createJob,
    getSpecificJob,
    deleteSpecificJob,
};
exports.default = jobRepo;
