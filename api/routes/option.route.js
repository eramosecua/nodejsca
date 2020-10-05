const { Router } = require("express");

module.exports = function({ OptionController }) {
  const router = Router();

  router.get("/", OptionController.getOptions.bind(OptionController));
  router.get("/:id", OptionController.getOption.bind(OptionController));
  router.post("/", OptionController.createOption.bind(OptionController));
  router.put("/:id", OptionController.updateOption.bind(OptionController));
  router.delete("/:id", OptionController.deleteOption.bind(OptionController));

  return router;
};