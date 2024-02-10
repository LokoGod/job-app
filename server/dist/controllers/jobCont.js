"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createJob = exports.getAllJobListings = void 0;
const jobRepo_1 = __importDefault(require("../repositories/jobRepo"));
const json = (param) => {
    return JSON.stringify(param, (key, value) => (typeof value === "bigint" ? value.toString() : value));
};
exports.default = json;
const getAllJobListings = async (req, res) => {
    try {
        const job = await jobRepo_1.default.getAllJobListings();
        res.status(200).type("json").send(json(job));
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getAllJobListings = getAllJobListings;
const createJob = async (req, res) => {
    const { jobId, jobError, jobDescription, status, createdDate, model, category, cusName, phoneNum, phoneNum2, email, } = req.body;
    try {
        const job = await jobRepo_1.default.createJob(jobId, jobError, jobDescription, status, createdDate, model, category, cusName, phoneNum, phoneNum2, email);
        res.status(201).json({ job });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.createJob = createJob;
