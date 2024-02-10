"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRoute = void 0;
const express_1 = __importDefault(require("express"));
const jobRoute = express_1.default.Router();
exports.jobRoute = jobRoute;
const jobCont_1 = require("../controllers/jobCont");
jobRoute.route("/").get(jobCont_1.getAllJobListings).post(jobCont_1.createJob);
