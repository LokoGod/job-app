"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSpecificJob = exports.getSpecificJob = exports.createJob = exports.getAllJobListings = void 0;
const jobRepo_1 = __importDefault(require("../repositories/jobRepo"));
const json = (param) => {
    return JSON.stringify(param, (key, value) => typeof value === "bigint" ? value.toString() : value);
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
    const { jobError, jobDescription, jobIncludedItems, status, createdDate, model, category, cusName, phoneNum, phoneNum2, email, } = req.body;
    try {
        const job = await jobRepo_1.default.createJob(jobError, jobDescription, jobIncludedItems, status, createdDate, model, category, cusName, phoneNum, phoneNum2, email);
        res.status(201).json({ job });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.createJob = createJob;
const getSpecificJob = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const job = await jobRepo_1.default.getSpecificJob(id);
        if (!job) {
            res.status(404).json({ error: "Not found" });
        }
        else {
            res.status(200).type("json").send(json(job));
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getSpecificJob = getSpecificJob;
const deleteSpecificJob = async (req, res) => {
    const id = Number(req.params.id);
    try {
        const job = await jobRepo_1.default.deleteSpecificJob(id);
        if (!job) {
            res.status(404).json({ error: "Not found" });
        }
        else {
            res.status(200).json({ job });
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.deleteSpecificJob = deleteSpecificJob;
