import jobRepo from "../repositories/jobRepo";

const getAllJobListings = async (req: any, res: any) => {
  try {
    return await res.status(200).json(jobRepo.getAllJobListings());
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createJob = async (req: any, res: any) => {
  const {
    jobId,
    jobError,
    jobDescription,
    status,
    createdDate,
    deviceId,
    customerId,
  } = req.body;
  try {
    return await res
      .status(200)
      .json(
        jobRepo.createJob(
          jobId,
          jobError,
          jobDescription,
          status,
          createdDate,
          deviceId,
          customerId
        )
      );
  } catch (error) {
    console.error();
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllJobListings, createJob };
