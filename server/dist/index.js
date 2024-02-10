"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
// Import custom routes
const jobRoute_1 = require("./routes/jobRoute");
// Instances
const app = (0, express_1.default)();
// Middleware
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
// API routing
app.use("/api/v1/job", jobRoute_1.jobRoute);
const port = process.env.PORT || 9000;
// Spin-up server
const start = async () => {
    try {
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    }
    catch (error) {
        console.log(error);
    }
};
start();
