const express = require("express");
const Job = require("../models/Jobs");
const Application = require("../models/ApplyJob");

const router = express.Router();

// Create a job(post)
router.post("/createjob", async (req, res) => {
  try {
    const PostJob = new Job({
      job: req.body.job,
      eligibility: req.body.eligibility,
      requirement: req.body.requirement,
      responsibilities: req.body.responsibilities,
    });

    const JobPosted = await PostJob.save();
    res.status(201).send("job posted successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});

// get all jobs (GET)
router.get("/seejobs", async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(404).send(error);
  }
});

// apply for a job (POST)
router.post("/applyforjob", async (req, res) => {
  try {
    const applyforjob = new Application({
      name: req.body.name,
      email: req.body.email,
      job: req.body.job,
      skills: req.body.skills,
      experience: req.body.experience,
    });

    const applied = await applyforjob.save();
    res.status(201).send("applied for the job successfully");
  } catch (error) {
    res.status(400).send(error);
  }
});
// Get all applicants(GET)
router.get("/seeapplicants" , async (req, res) => {
    try {
        const applicants = await Application.find();
        res.status(200).json(applicants);
      } catch (error) {
        res.status(404).send(error);
      }
})

module.exports = router;
