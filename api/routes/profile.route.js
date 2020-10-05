const { Router } = require("express");

module.exports = function({ ProfileController }) {
  const router = Router();

  router.get("/", ProfileController.getProfiles.bind(ProfileController));
  router.get("/:id", ProfileController.getProfile.bind(ProfileController));
  router.post("/", ProfileController.createProfile.bind(ProfileController));
  router.put("/:id", ProfileController.updateProfile.bind(ProfileController));
  router.delete("/:id", ProfileController.deleteProfile.bind(ProfileController));

  return router;
};