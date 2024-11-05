const { stockInwardInsert, InwardDetailsInsert
} = require("../stock_inward/stock_inward.service");

module.exports = {
    stockInwardInsert: (req, res) => {
        const body = req.body;
        stockInwardInsert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Stock Added Successfully",
                insetid: results.insertId
            });
        })
    },
    InwardDetailsInsert: (req, res) => {
        const body = req.body;
        var a1 = body.map((value, index) => {
            return [value.stock_bill_mast_slno, value.item_slno, value.batch, value.expeiry, value.quantity, value.free_quantity,
            value.total_quntity, value.gst, value.mrp, value.purchase_rate
            ]
        })
        InwardDetailsInsert(a1, (err, results) => {

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
}