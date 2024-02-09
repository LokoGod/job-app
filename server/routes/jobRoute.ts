import express from "express";
const jobRoute = express.Router();

import { getAllJobListings, createJob } from "../controllers/jobCont";

jobRoute.route("/").get(getAllJobListings).post(createJob);

export { jobRoute };
