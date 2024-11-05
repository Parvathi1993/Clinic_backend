const { getAppoinmentsfmVisitMast, getDoctrTokenStartEnd, DoctListWithSpecality, visitMasterAppoinmentInsert,
    updateAppoinmentSave, updateCancelAppoinment, NewRegistrationAppoinment, UpdateNewAppionment

} = require("../appoinments/appoinment.service");

module.exports = {

    getAppoinmentsfmVisitMast: (req, res) => {
        const body = req.body
        getAppoinmentsfmVisitMast(body, (err, results) => {
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
    getDoctrTokenStartEnd: (req, res) => {
        const id = req.params.id;
        getDoctrTokenStartEnd(id, (err, results) => {
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
    DoctListWithSpecality: (req, res) => {
        DoctListWithSpecality((err, results) => {
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
    visitMasterAppoinmentInsert: (req, res) => {
        const body = req.body;
        visitMasterAppoinmentInsert(body, (err, results) => {
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
    updateAppoinmentSave: (req, res) => {
        const body = req.body;
        updateAppoinmentSave(body, (err, results) => {
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
    updateCancelAppoinment: (req, res) => {
        const body = req.body;
        updateCancelAppoinment(body, (err, results) => {
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
    NewRegistrationAppoinment: (req, res) => {
        const body = req.body;
        NewRegistrationAppoinment(body, (err, results) => {
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
    UpdateNewAppionment: (req, res) => {
        const body = req.body;
        UpdateNewAppionment(body, (err, results) => {
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
}