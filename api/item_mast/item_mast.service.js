const { pool } = require('../../config/config')
module.exports = {
    itemmasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO item_master(
             item_hsn_code,item_name,item_category,item_status
                )
                VALUES(?,?,?,?)`,
            [
                data.item_hsn_code,
                data.item_name,
                data.item_category,
                data.item_status
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },

    itemMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE item_master 
            SET item_hsn_code=?,
            item_name=?,
            item_category=?,
            item_status=?           
            WHERE item_slno=? `,
            [
                data.item_hsn_code,
                data.item_name,
                data.item_category,
                data.item_status,
                data.item_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    itemcMasterGet: (callback) => {
        pool.query(
            `SELECT item_slno, item_hsn_code, item_name, item_category, item_status, 
             if(item_status = 1 ,'Yes','No') status1            
            FROM item_master
            `,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchHSNCode: (data, callback) => {
        pool.query(
            `SELECT item_slno,
          item_hsn_code, item_name, item_category, item_status, 
             if(item_status = 1 ,'Yes','No') status1             
            FROM item_master
             where item_hsn_code like ?`,
            [
                '%' + data.item_hsn_code + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    searchItemName: (data, callback) => {
        pool.query(
            `SELECT item_slno,
          item_hsn_code, item_name, item_category, item_status, 
             if(item_status = 1 ,'Yes','No') status1             
            FROM item_master
            where item_name like ?`,
            [
                '%' + data.item_name + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    searchHSNCodeItemNameName: (data, callback) => {
        pool.query(
            `SELECT item_slno,
          item_hsn_code, item_name, item_category, item_status, 
             if(item_status = 1 ,'Yes','No') status1             
            FROM item_master
            where item_hsn_code like ? and item_name like ?`,
            [
                '%' + data.item_hsn_code + '%',
                '%' + data.item_name + '%'
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getActiveItem: (callback) => {
        pool.query(
            `SELECT item_slno, item_hsn_code, item_name, item_category, item_status, 
             if(item_status = 1 ,'Yes','No') status1            
            FROM item_master
            where item_status=1
            `,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getActiveGST: (callback) => {
        pool.query(
            `SELECT gst_slno, gst_rate,gst_status         
            FROM gst_mast
            where gst_status=1
            `,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
}