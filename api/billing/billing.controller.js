const { getProcedureList, getProcedureNameRate, insert, BillDetailsInsert, getBillDetailForPrint,
    getProcedureBsedOnCode, ipBillinsert, IpBillDetailsInsert, getIPBillDetailForPrint
} = require("../billing/billing.service");

module.exports = {
    getProcedureList: (req, res) => {
        getProcedureList((err, results) => {
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

    getProcedureNameRate: (req, res) => {
        const id = req.params.id;
        getProcedureNameRate(id, (err, results) => {
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

    insert: (req, res) => {
        const body = req.body;
        //validate diet master insertion function

        insert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Request Registred Successfully",
                insetid: results.insertId
            });
        });
    },

    BillDetailsInsert: (req, res) => {
        const body = req.body;
        var a1 = body.map((value, index) => {
            return [value.bill_slno, value.procedure_slno, value.procedure_rate, value.bill_proc_slno
            ]
        })
        BillDetailsInsert(a1, (err, results) => {

            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Bill saved Successfully",
            });
        });
    },
    getBillDetailForPrint: (req, res) => {
        const id = req.params.id;
        getBillDetailForPrint(id, (err, results) => {
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
    getProcedureBsedOnCode: (req, res) => {
        const id = req.params.id;
        getProcedureBsedOnCode(id, (err, results) => {
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
    ipBillinsert: (req, res) => {
        const body = req.body;
        //validate diet master insertion function

        ipBillinsert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Bill Saved Successfully",
                insetid: results.insertId
            });
        });
    },

    IpBillDetailsInsert: (req, res) => {
        const body = req.body;
        var a1 = body.map((value, index) => {
            return [value.ip_bill_slno, value.ip_procedure_slno, value.ip_procedure_rate, value.ip_bill_proc_slno,
            value.ip_count, value.ip_rate_total
            ]
        })
        IpBillDetailsInsert(a1, (err, results) => {

            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Bill saved Successfully",
            });
        });
    },
    getIPBillDetailForPrint: (req, res) => {
        const id = req.params.id;
        getIPBillDetailForPrint(id, (err, results) => {
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