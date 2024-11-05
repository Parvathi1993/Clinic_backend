const router = require("express").Router();
const { stockInwardInsert, InwardDetailsInsert
} = require("../stock_inward/stock_inward.controller");

router.post("/", stockInwardInsert);
router.post("/InwardDetailsInsert", InwardDetailsInsert);




module.exports = router;