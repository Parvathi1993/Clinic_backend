const router = require("express").Router();
const { pateintInsert, patientUpdate, patientgeting, PatientIdget, DocGettingBySpeciality, getDoctortokenDetail,
    getDoctorFeeDetail, visitMasterInsert, PatientDetailsGtting, lastVisitingDate, lastInsertVistForPrint,
    searchpatientName, searchmobileNo, searchAddress, searchById, searchNameAddress,
    searchNameMobile, getAppoinmentVisitToday, getLastRegistrationRenewal
} = require("../patient_registration/patient_reg.controller");

router.post("/", pateintInsert);
router.patch("/", patientUpdate);
router.get("/", patientgeting);
router.get("/PatientIdget", PatientIdget);
router.get("/DocGettingBySpeciality/:id", DocGettingBySpeciality)
router.get("/getDoctortokenDetail/:id", getDoctortokenDetail)
router.get("/getDoctorFeeDetail/:id", getDoctorFeeDetail)
router.post("/visitMasterInsert", visitMasterInsert);
router.get("/PatientDetailsGtting/:id", PatientDetailsGtting)
router.post("/lastVisitingDate", lastVisitingDate)
router.get("/lastInsertVistForPrint/:id", lastInsertVistForPrint)
router.post("/searchpatientName", searchpatientName)
router.post("/searchmobileNo", searchmobileNo)
router.post("/searchAddress", searchAddress)
router.post("/searchById", searchById)
router.post("/searchNameAddress", searchNameAddress)
router.post("/searchNameMobile", searchNameMobile)
router.get("/getAppoinmentVisitToday/:id", getAppoinmentVisitToday)
router.get("/getLastRegistrationRenewal/:id", getLastRegistrationRenewal)

module.exports = router;