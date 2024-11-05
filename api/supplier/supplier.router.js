const router = require("express").Router();
const { suppliermasterInsert, supplierMasterUpdate, supplierMasterGet, searchSupplierName, searchSupplierAddress, searchSupplierNameAddress,
    activeSupplier, getSupplierById

} = require("../supplier/supplier.controller");

router.post("/", suppliermasterInsert);
router.patch("/", supplierMasterUpdate);
router.get("/", supplierMasterGet);
router.post("/searchSupplierName", searchSupplierName)
router.post("/searchSupplierAddress", searchSupplierAddress)
router.post("/searchSupplierNameAddress", searchSupplierNameAddress)
router.get("/activeSupplier", activeSupplier);
router.get("/getSupplierById/:id", getSupplierById)
module.exports = router;