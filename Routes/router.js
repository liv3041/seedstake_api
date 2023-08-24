const express = require("express");
const router = new express.Router();
const app = express();

app.use(express.json());
const controllers = require("../Controllers/userControllers");

// routes
router.post("/startup/register",controllers.startuppost);
router.get("/startup/getAllstartup",controllers.getStartup);
router.get("/startup/singlestartup/:id",controllers.getSinglestartup);
router.delete("/startup/deletestartup/:id", controllers.deleteStartup);
router.put("/startup/updatestartup/:id",controllers.updateStartup);
router.post("/startup/updateCategory/:id",controllers.updateCategory);
router.get("/startup/getAllstartupbycategory",controllers.getStartupByCategory);
module.exports = router