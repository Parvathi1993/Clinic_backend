const { pool } = require('../../config/config')
module.exports = {
    docmasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO doctor_master(
             doctor_name, doctor_spectiality, doctor_status, doctor_fee, doctor_token_start, doctor_token_end, doctor_renewal_day
                )
                VALUES(?,?,?,?,?,?,?)`,
            [
                data.doctor_name,
                data.doctor_spectiality,
                data.doctor_status,
                data.doctor_fee,
                data.doctor_token_start,
                data.doctor_token_end,
                data.doctor_renewal_day
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },

    docMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE doctor_master 
            SET doctor_name=?,
            doctor_spectiality=?,
            doctor_status=?,
            doctor_fee=?,
            doctor_token_start=?,
            doctor_token_end=?,
            doctor_renewal_day=?
            WHERE doctor_slno=? `,
            [
                data.doctor_name,
                data.doctor_spectiality,
                data.doctor_status,
                data.doctor_fee,
                data.doctor_token_start,
                data.doctor_token_end,
                data.doctor_renewal_day,
                data.doctor_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    DocMasterGet: (callback) => {
        pool.query(
            `SELECT doctor_slno,
            doctor_name, doctor_spectiality,doctor_status,
            doctor_fee,doctor_token_start,doctor_token_end,
            doctor_renewal_day,
             if(doctor_status = 1 ,'Yes','No') status1,
             speciality_master.speciality_name
            FROM doctor_master
            left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getSpecialities: (callback) => {
        pool.query(
            `SELECT speciality_slno,speciality_name         
            FROM speciality_master where speciality_status=1`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchDctrName: (data, callback) => {
        pool.query(
            `SELECT doctor_slno,
            doctor_name, doctor_spectiality,doctor_status,
            doctor_fee,doctor_token_start,doctor_token_end,
            doctor_renewal_day,
             if(doctor_status = 1 ,'Yes','No') status1,
             speciality_master.speciality_name
            FROM doctor_master
            left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality
            where doctor_name like ?`,
            [
                '%' + data.doctor_name + '%'

            ],
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
            `SELECT doctor_slno,
            doctor_name, doctor_spectiality,doctor_status,
            doctor_fee,doctor_token_start,doctor_token_end,
            doctor_renewal_day,
             if(doctor_status = 1 ,'Yes','No') status1,
             speciality_master.speciality_name
            FROM doctor_master
            left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality
            where speciality_name like ?`,
            [
                '%' + data.speciality_name + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    searchDctrNProcdrName: (data, callback) => {
        pool.query(
            `SELECT doctor_slno,
            doctor_name, doctor_spectiality,doctor_status,
            doctor_fee,doctor_token_start,doctor_token_end,
            doctor_renewal_day,
             if(doctor_status = 1 ,'Yes','No') status1,
             speciality_master.speciality_name
            FROM doctor_master
            left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality
            where doctor_name like ? and speciality_name like ?`,
            [
                '%' + data.doctor_name + '%',
                '%' + data.speciality_name + '%'
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