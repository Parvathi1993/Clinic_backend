const router = require("express").Router();
const { getProcedureList, getProcedureNameRate, insert, BillDetailsInsert, getBillDetailForPrint,
    getProcedureBsedOnCode, ipBillinsert, IpBillDetailsInsert, getIPBillDetailForPrint
} = require("../billing/billing.controller");

router.get("/getProcedureList", getProcedureList);
router.get("/getProcedureNameRate/:id", getProcedureNameRate)
router.post("/insert", insert);
router.post("/BillDetailsInsert", BillDetailsInsert);
router.get("/getBillDetailForPrint/:id", getBillDetailForPrint)
router.get("/getProcedureBsedOnCode/:id", getProcedureBsedOnCode)

router.post("/ipBillinsert", ipBillinsert);
router.post("/IpBillDetailsInsert", IpBillDetailsInsert);
router.get("/getIPBillDetailForPrint/:id", getIPBillDetailForPrint)
module.exports = router;