const { Router } = require("express");
const {
  albumGet,
  albumPost,
  albumPut,
  albumDelete,
} = require("../controllers/albumController");
const router = Router();

router.get("/", albumGet);
router.post("/", albumPost);
router.put("/:id", albumPut);
router.delete("/", albumDelete);

module.exports = router;
