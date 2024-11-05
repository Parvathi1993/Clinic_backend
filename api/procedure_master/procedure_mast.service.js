const { pool } = require('../../config/config')
module.exports = {
    procdremasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO procedure_master(
             procedure_name,procedure_code, procedure_rate, procedure_status,procedure_catgry_slno)
                VALUES(?,?,?,?,?)`,
            [
                data.procedure_name,
                data.procedure_code,
                data.procedure_rate,
                data.procedure_status,
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
    checkInsertVal: (data, callBack) => {
        pool.query(
            `SELECT procedure_name
            FROM procedure_master
            WHERE procedure_name = ?`,
            [
                data.procedure_name
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error)
                }
                return callBack(null, results)
            }
        )
    },
    procdreMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE procedure_master 
            SET procedure_name=?,
            procedure_code=?,
            procedure_rate=?,
            procedure_status=?,
            procedure_catgry_slno=?
            WHERE procedure_slno=? `,
            [
                data.procedure_name,
                data.procedure_code,
                data.procedure_rate,
                data.procedure_status,
                data.procedure_catgry_slno,
                data.procedure_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    procdreMasterGet: (callback) => {
        pool.query(
            `select procedure_slno, procedure_name,procedure_code, procedure_rate, procedure_status,procedure_catgry_mast.procedure_catgry_slno,
            if(procedure_status = 1 ,'Yes','No') status1,procedure_catgry_name
            from procedure_master
            left join procedure_catgry_mast on procedure_catgry_mast.procedure_catgry_slno=procedure_master.procedure_catgry_slno`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchprocedureName: (data, callback) => {
        pool.query(
            `select procedure_slno, procedure_name,procedure_code, procedure_rate, procedure_status,procedure_catgry_mast.procedure_catgry_slno,
            if(procedure_status = 1 ,'Yes','No') status1,procedure_catgry_name
            from procedure_master
              left join procedure_catgry_mast on procedure_catgry_mast.procedure_catgry_slno=procedure_master.procedure_catgry_slno
            where procedure_name like ?`,
            [
                '%' + data.procedure_name + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },


    getProcedureByCatgry: (id, callBack) => {
        pool.query(
            `select procedure_slno,procedure_name
            from procedure_master
            where procedure_catgry_slno=?`,
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