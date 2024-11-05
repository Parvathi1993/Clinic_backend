const router = require("express").Router();
const { getCashCollectBilling, getCashCollectvisting, getCashCollectNewRegstration, getBillDetails,
    getBillPateintDetails, getCategryBasedBill, getCashCollectIPBilling, getCategryBasedIPBill
} = require("../reports/reports.controller");


router.get("/getCashCollectBilling/:id", getCashCollectBilling)
router.get("/getCashCollectvisting/:id", getCashCollectvisting)
router.get("/getCashCollectNewRegstration/:id", getCashCollectNewRegstration)

router.get("/getBillDetails/:id", getBillDetails)
router.get("/getBillPateintDetails/:id", getBillPateintDetails)
router.post("/getCategryBasedBill", getCategryBasedBill)
router.get("/getCashCollectIPBilling/:id", getCashCollectIPBilling)
router.post("/getCategryBasedIPBill", getCategryBasedIPBill)
module.exports = router;