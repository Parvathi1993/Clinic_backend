const { pool } = require('../../config/config')
module.exports = {
    getProcedureList: (callback) => {
        pool.query(
            `SELECT procedure_slno,procedure_name   ,procedure_rate      
            FROM procedure_master where procedure_status=1`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getProcedureNameRate: (id, callBack) => {
        pool.query(
            `SELECT procedure_slno,procedure_name   ,procedure_rate      
            FROM procedure_master where procedure_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    insert: (data, callback) => {
        pool.query(
            `INSERT INTO bill_mast (
                patient_id,
                bill_date,
                bill_amount,
                bill_payment_mode
               )
                VALUES(?,?,?,?)`,
            [
                data.patient_id,
                data.bill_date,
                data.bill_amount,
                data.bill_payment_mode
            ],
            (error, results, fields) => {

                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    BillDetailsInsert: (data, callback) => {
        pool.query(
            `INSERT INTO bill_detail (
                bill_slno,
                procedure_slno,procedure_rate,bill_proc_slno
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
    getBillDetailForPrint: (id, callBack) => {
        pool.query(
            `select bill_proc_slno,bill_detail.procedure_rate,procedure_name
            from bill_detail
            left join procedure_master on procedure_master.procedure_slno=bill_detail.procedure_slno
            where bill_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getProcedureBsedOnCode: (id, callBack) => {
        pool.query(
            `select procedure_slno,procedure_name
            from procedure_master
            where procedure_code=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    ipBillinsert: (data, callback) => {
        pool.query(
            `INSERT INTO ip_bill_mast (
                patient_id,
                ip_bill_date,
                ip_bill_amount,
                ip_bill_payment_mode,
                admission_date,
                discharge_date
               )
                VALUES(?,?,?,?,?,?)`,
            [
                data.patient_id,
                data.ip_bill_date,
                data.ip_bill_amount,
                data.ip_bill_payment_mode,
                data.admission_date,
                data.discharge_date
            ],
            (error, results, fields) => {

                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    IpBillDetailsInsert: (data, callback) => {
        pool.query(
            `INSERT INTO ip_bill_detail (
                ip_bill_slno,ip_procedure_slno,ip_procedure_rate,ip_bill_proc_slno,ip_count,ip_rate_total
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
    getIPBillDetailForPrint: (id, callBack) => {
        pool.query(
            `select ip_bill_proc_slno,ip_bill_detail.ip_procedure_rate,procedure_name,ip_count,ip_rate_total
            from ip_bill_detail
            left join procedure_master on procedure_master.procedure_slno=ip_bill_detail.ip_procedure_slno
            where ip_bill_slno=?`,
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