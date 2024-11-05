const router = require("express").Router();
const { docmasterInsert, docMasterUpdate, DocMasterGet, getSpecialities, searchDctrName,
    searchprocedureName, searchDctrNProcdrName

} = require("../doctor_master/doctor_master.controller");

router.post("/", docmasterInsert);
router.patch("/", docMasterUpdate);
router.get("/", DocMasterGet);
router.get("/getSpecialities", getSpecialities);

router.post("/searchDctrName", searchDctrName)
router.post("/searchprocedureName", searchprocedureName)
router.post("/searchDctrNProcdrName", searchDctrNProcdrName)
module.exports = router;