"use client";

import { useState, useEffect } from "react";

export default function JobDetails() {
  const [jobData, setJobData] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("");
        if (!response.ok) {
          throw new Error("failed to fetch details");
        }
        const data = await response.json();
        setJobData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
        <h1>{jobData.jobError}</h1>
    </div>
  )
}
