import express from "express";
const jobRoute = express.Router();

import {
  getAllJobListings,
  createJob,
  getSpecificJob,
  deleteSpecificJob,
} from "../controllers/jobCont";

jobRoute.route("/").get(getAllJobListings).post(createJob);
jobRoute.route("/:id").get(getSpecificJob).delete(deleteSpecificJob);

export { jobRoute };
