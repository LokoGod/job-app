import jobRepo from "../repositories/jobRepo";

const json = (param: any): any => {
  return JSON.stringify(
    param,
    (key, value) => (typeof value === "bigint" ? value.toString() : value)
  );
};
export default json;

const getAllJobListings = async (req: any, res: any) => {
  try {
    const job = await jobRepo.getAllJobListings();
    res.status(200).type("json").send(json(job));
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createJob = async (req: any, res: any) => {
  const {
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
