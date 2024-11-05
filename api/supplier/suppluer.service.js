const { pool } = require('../../config/config')
module.exports = {
    suppliermasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO supplier_master(
             supplier_name,supplier_address,supplier_phno,supplier_status
                )
                VALUES(?,?,?,?)`,
            [
                data.supplier_name,
                data.supplier_address,
                data.supplier_phno,
                data.supplier_status
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },

    supplierMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE supplier_master 
            SET supplier_name=?,
            supplier_address=?,
            supplier_phno=?,
            supplier_status=?
            WHERE supplier_slno=? `,
            [
                data.supplier_name,
                data.supplier_address,
                data.supplier_phno,
                data.supplier_status,
                data.supplier_slno
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    supplierMasterGet: (callback) => {
        pool.query(
            `SELECT supplier_slno, supplier_name, supplier_address, supplier_phno, supplier_status, 
             if(supplier_status = 1 ,'Yes','No') status1
            FROM supplier_master
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
    searchSupplierName: (data, callback) => {
        pool.query(
            `SELECT supplier_slno, supplier_name, supplier_address, supplier_phno, supplier_status, 
             if(supplier_status = 1 ,'Yes','No') status1             
            FROM supplier_master
             where supplier_name like ?`,
            [
                '%' + data.supplier_name + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    searchSupplierAddress: (data, callback) => {
        pool.query(
            `SELECT supplier_slno, supplier_name, supplier_address, supplier_phno, supplier_status, 
             if(supplier_status = 1 ,'Yes','No') status1             
            FROM supplier_master
            where supplier_address like ?`,
            [
                '%' + data.supplier_address + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    searchSupplierNameAddress: (data, callback) => {
        pool.query(
            `SELECT supplier_slno, supplier_name, supplier_address, supplier_phno, supplier_status, 
             if(supplier_status = 1 ,'Yes','No') status1             
            FROM supplier_master
            where supplier_name like ? and supplier_address like ?`,
            [
                '%' + data.supplier_name + '%',
                '%' + data.supplier_address + '%'
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    activeSupplier: (callback) => {
        pool.query(
            `SELECT supplier_slno, supplier_name, supplier_address, supplier_phno, supplier_status, 
             if(supplier_status = 1 ,'Yes','No') status1
            FROM supplier_master
            where supplier_status=1
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

    getSupplierById: (id, callBack) => {
        pool.query(
            `select supplier_slno, supplier_name, supplier_address, supplier_phno
                from supplier_master
                where supplier_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
}