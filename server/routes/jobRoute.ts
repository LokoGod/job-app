import express, { Router } from "express";
const jobRoute = express.Router();

import { getAllJobListings } from "../controllers/jobCont";

jobRoute.route("/").get(getAllJobListings);

export { jobRoute };
