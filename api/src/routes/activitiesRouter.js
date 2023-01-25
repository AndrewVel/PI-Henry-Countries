const { Router } = require("express");

const {
  createActivity,
  getListActivities,
} = require("../controllers/activitiesControllers");

const activitiesRouter = Router();

activitiesRouter.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;
    const activity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    res.status(200).json(activity);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

activitiesRouter.get("/", async (req, res) => {
  try {
    const listActivities = await getListActivities();
    res.status(200).json(listActivities);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = activitiesRouter;
