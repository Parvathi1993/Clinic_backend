const { pool } = require('../../config/config')
module.exports = {
    procdreCatmasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO procedure_catgry_mast(
             procedure_catgry_name, procedure_catgry_status)
                VALUES(?,?)`,
            [
                data.procedure_catgry_name,
                data.procedure_catgry_status],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    checkInsertVal: (data, callBack) => {
        pool.query(
            `SELECT procedure_catgry_name
            FROM procedure_catgry_mast
            WHERE procedure_catgry_name = ?`,
            [
                data.procedure_catgry_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    procdreCatMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE procedure_catgry_mast 
            SET procedure_catgry_name=?,
            procedure_catgry_status=?
            WHERE procedure_catgry_slno=? `,
            [
                data.procedure_catgry_name,
                data.procedure_catgry_status,
                data.procedure_catgry_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    procdreCatMasterGet: (callback) => {
        pool.query(
            `select procedure_catgry_slno, procedure_catgry_name, procedure_catgry_status,
            if(procedure_catgry_status = 1 ,'Yes','No') status1
            from procedure_catgry_mast`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getProcedureCatgryList: (callback) => {
        pool.query(
            `SELECT procedure_catgry_slno,procedure_catgry_name      
            FROM procedure_catgry_mast where procedure_catgry_status=1`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getProcedureCatgrynonMaterial: (callback) => {
        pool.query(
            `SELECT procedure_catgry_slno,procedure_catgry_name      
            FROM procedure_catgry_mast where procedure_catgry_status=1 and material_non=2`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getProcedureCatgryMaterial: (callback) => {
        pool.query(
            `SELECT procedure_catgry_slno,procedure_catgry_name,material_non      
            FROM procedure_catgry_mast where procedure_catgry_status=1 and (material_non=1 or material_non=3) `,
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