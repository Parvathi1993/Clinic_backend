const router = require("express").Router();
const { itemmasterInsert, itemMasterUpdate, itemcMasterGet, searchHSNCode, searchItemName, searchHSNCodeItemNameName,
    getActiveItem, getActiveGST
} = require("../item_mast/item_mast.controller");

router.post("/", itemmasterInsert);
router.patch("/", itemMasterUpdate);
router.get("/", itemcMasterGet);
router.post("/searchHSNCode", searchHSNCode)
router.post("/searchItemName", searchItemName)
router.post("/searchHSNCodeItemNameName", searchHSNCodeItemNameName)
router.get("/getActiveItem", getActiveItem);
router.get("/getActiveGST", getActiveGST);

module.exports = router;