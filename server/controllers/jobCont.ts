import jobRepo from "../repositories/jobRepo";

const getAllJobListings = async (req: any, res: any) => {
  try {
    const job = await jobRepo.getAllJobListings();
    res.status(200).json({ job });
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
    model,
    category,
    cusName,
    phoneNum,
    phoneNum2,
    email,
  } = req.body;
  try {
    const job = await jobRepo.createJob(
      jobId,
      jobError,
      jobDescription,
      status,
      createdDate,
      model,
      category,
      cusName,
      phoneNum,
      phoneNum2,
      email
    );
    res.status(201).json({ job });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export { getAllJobListings, createJob };
