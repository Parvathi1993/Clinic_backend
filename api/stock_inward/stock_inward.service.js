const { pool } = require('../../config/config')
module.exports = {
    stockInwardInsert: (data, callback) => {
        pool.query(
            `INSERT INTO stock_inward_mast(
             supplier_slno, inward_billno, inward_billdate,total_purchase_rate,total_discount
              )
                VALUES(?,?,?,?,?)`,
            [
                data.supplier_slno,
                data.inward_billno,
                data.inward_billdate,
                data.total_purchase_rate,
                data.total_discount
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    InwardDetailsInsert: (data, callback) => {
        pool.query(
            `INSERT INTO stock_inward_details (
                stock_bill_mast_slno,item_slno,batch,expeiry,quantity,free_quantity,total_quntity,gst,mrp,purchase_rate
               )
               values ?`,
            [
                data
            ],
            (error, results, fields) => {

                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

}