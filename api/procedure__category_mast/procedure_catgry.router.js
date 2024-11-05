const router = require("express").Router();
const { procdreCatmasterInsert, procdreCatMasterUpdate, procdreCatMasterGet, getProcedureCatgryList,
    getProcedureCatgrynonMaterial, getProcedureCatgryMaterial
} = require("../procedure__category_mast/procedure_categry.controller");

router.post("/", procdreCatmasterInsert);
router.patch("/", procdreCatMasterUpdate);
router.get("/", procdreCatMasterGet);
router.get("/getProcedureCatgryList", getProcedureCatgryList);
router.get("/getProcedureCatgrynonMaterial", getProcedureCatgrynonMaterial);
router.get("/getProcedureCatgryMaterial", getProcedureCatgryMaterial);

module.exports = router;