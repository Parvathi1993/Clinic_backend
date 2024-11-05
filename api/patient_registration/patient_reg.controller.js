const { pateintInsert, patientIdUpdate, patientUpdate, patientgeting, PatientIdget, DocGettingBySpeciality,
    getDoctortokenDetail, getDoctorFeeDetail, visitMasterInsert, PatientDetailsGtting, lastVisitingDate,
    lastInsertVistForPrint, searchpatientName, searchmobileNo, searchAddress, searchById,
    searchNameAddress, searchNameMobile, getAppoinmentVisitToday, getLastRegistrationRenewal
} = require("../patient_registration/patient_reg.service");

module.exports = {
    pateintInsert: (req, res) => {
        const body = req.body;
        pateintInsert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            patientIdUpdate(body, (err, results) => {
                if (err) {
                    res.status(200).json({
                        success: 0,
                        message: err
                    });
                }
                if (!results) {
                    return res.status(200).json({
                        success: 2,
                        message: "No Data to Update"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: "Patient registered"
                });
            })


        })
    },
    patientUpdate: (req, res) => {
        const body = req.body;
        patientUpdate(body, (err, results) => {
            if (err) {
                res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 2,
                    message: "No Data to Update"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: " Updated Successfully ..."
            });
        })
    },
    patientgeting: (req, res) => {
        patientgeting((err, results) => {
            if (err) {

                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }
            if (results.length === 0) {

                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    PatientIdget: (req, res) => {
        PatientIdget((err, results) => {
            if (err) {

                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }
            if (results.length === 0) {

                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    DocGettingBySpeciality: (req, res) => {
        const id = req.params.id;
        DocGettingBySpeciality(id, (err, results) => {
            if (err) {

                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    getDoctortokenDetail: (req, res) => {
        const id = req.params.id;
        getDoctortokenDetail(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getDoctorFeeDetail: (req, res) => {
        const id = req.params.id;
        getDoctorFeeDetail(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    visitMasterInsert: (req, res) => {
        const body = req.body;
        visitMasterInsert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Patient registered",
                insetid: results.insertId
            });
        })
    },
    PatientDetailsGtting: (req, res) => {
        const id = req.params.id;
        PatientDetailsGtting(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    lastVisitingDate: (req, res) => {
        const body = req.body
        lastVisitingDate(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    lastInsertVistForPrint: (req, res) => {
        const id = req.params.id;
        lastInsertVistForPrint(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    searchpatientName: (req, res) => {
        const body = req.body
        searchpatientName(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    searchmobileNo: (req, res) => {
        const body = req.body
        searchmobileNo(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    searchAddress: (req, res) => {
        const body = req.body
        searchAddress(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    searchById: (req, res) => {
        const body = req.body
        searchById(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    searchNameAddress: (req, res) => {
        const body = req.body
        searchNameAddress(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    searchNameMobile: (req, res) => {
        const body = req.body
        searchNameMobile(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },
    getAppoinmentVisitToday: (req, res) => {
        const id = req.params.id;
        getAppoinmentVisitToday(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getLastRegistrationRenewal: (req, res) => {
        const id = req.params.id;
        getLastRegistrationRenewal(id, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}