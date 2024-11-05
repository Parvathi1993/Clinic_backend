const { suppliermasterInsert, supplierMasterUpdate, supplierMasterGet, searchSupplierName, searchSupplierAddress, searchSupplierNameAddress,
    activeSupplier, getSupplierById
} = require("../supplier/suppluer.service");

module.exports = {
    suppliermasterInsert: (req, res) => {
        const body = req.body;
        suppliermasterInsert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Supplier Created"
            });
        })
    },
    supplierMasterUpdate: (req, res) => {
        const body = req.body;
        supplierMasterUpdate(body, (err, results) => {
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
    supplierMasterGet: (req, res) => {
        supplierMasterGet((err, results) => {
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
    searchSupplierName: (req, res) => {
        const body = req.body
        searchSupplierName(body, (err, results) => {
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
    searchSupplierAddress: (req, res) => {
        const body = req.body
        searchSupplierAddress(body, (err, results) => {
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
    searchSupplierNameAddress: (req, res) => {
        const body = req.body
        searchSupplierNameAddress(body, (err, results) => {
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
    activeSupplier: (req, res) => {
        activeSupplier((err, results) => {
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

    getSupplierById: (req, res) => {
        const id = req.params.id;
        getSupplierById(id, (err, results) => {
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