const { Router } = require("express");

module.exports = function({ UserProfileController }) {
  const router = Router();

  router.get("/", UserProfileController.getUserProfiles.bind(UserProfileController));
  router.get("/:id", UserProfileController.getUserProfile.bind(UserProfileController));
  router.post("/", UserProfileController.createUserProfile.bind(UserProfileController));
  router.put("/:id", UserProfileController.updateUserProfile.bind(UserProfileController));
  router.delete("/:id", UserProfileController.deleteUserProfile.bind(UserProfileController));

  return router;
};