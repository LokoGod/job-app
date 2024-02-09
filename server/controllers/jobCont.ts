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

export { getAllJobListings };
