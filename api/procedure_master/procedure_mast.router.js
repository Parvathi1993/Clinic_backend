const router = require("express").Router();
const { procdremasterInsert, procdreMasterUpdate, procdreMasterGet, searchprocedureName, getProcedureByCatgry
} = require("../procedure_master/procedure_mast.controller");

router.post("/", procdremasterInsert);
router.patch("/", procdreMasterUpdate);
router.get("/", procdreMasterGet);

router.post("/searchprocedureName", searchprocedureName)

router.get("/getProcedureByCatgry/:id", getProcedureByCatgry)
module.exports = router;