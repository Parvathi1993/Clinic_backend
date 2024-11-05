const { pool } = require('../../config/config')
module.exports = {
    getAppoinmentsfmVisitMast: (data, callback) => {
        pool.query(
            `select visit_mast_slno, visit_master.patient_id, visit_date, visit_master.doctor_slno, token_no, fee, status,
              salutation, patient_name, patient_address, 
             patient_mobile,  patient_age,uhid,new_reg_name,new_reg_mobile,new_old_uhid,doctor_name,
             speciality_name
            from visit_master
            left join patient_registration on patient_registration.patient_id=visit_master.patient_id
            left join doctor_master on doctor_master.doctor_slno= visit_master.doctor_slno
            left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality
            where visit_date=? and visit_master.doctor_slno=? and cancel_status is null`,
            [
                data.visit_date,
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
    getDoctrTokenStartEnd: (id, callBack) => {
        pool.query(
            `select doctor_token_start,doctor_token_end
            from doctor_master
            where doctor_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    DoctListWithSpecality: (callback) => {
        pool.query(
            `select doctor_slno,doctor_name,speciality_name
            from doctor_master
            left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality
            where doctor_status=1`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    visitMasterAppoinmentInsert: (data, callback) => {
        pool.query(
            `INSERT INTO visit_master( patient_id, visit_date, doctor_slno, token_no,fee,status )
                VALUES(?,?,?,?,?,?)`,
            [
                data.patient_id,
                data.visit_date,
                data.doctor_slno,
                data.token_no,
                data.fee,
                0
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    updateAppoinmentSave: (data, callback) => {
        pool.query(
            `UPDATE visit_master 
            SET status=1,
            registration_fee=?,
            payment_mode_visit=?    
            WHERE patient_id=? and doctor_slno=? and visit_date=current_date()`,
            [
                data.registration_fee,
                data.payment_mode_visit,
                data.patient_id,
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
    updateCancelAppoinment: (data, callback) => {
        pool.query(
            `UPDATE visit_master 
            SET cancel_status=1 ,
            status=0,
                       cancel_reason=?
            WHERE visit_mast_slno=? `,
            [
                data.cancel_reason,
                data.visit_mast_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    NewRegistrationAppoinment: (data, callback) => {
        pool.query(
            `INSERT INTO visit_master( visit_date, doctor_slno, token_no, fee,status,new_reg_name,new_reg_mobile,new_old_uhid )
                VALUES(?,?,?,?,?,?,?,?)`,
            [
                data.visit_date,
                data.doctor_slno,
                data.token_no,
                data.fee,
                0,
                data.new_reg_name,
                data.new_reg_mobile,
                data.new_old_uhid
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    UpdateNewAppionment: (data, callback) => {

        pool.query(
            `UPDATE visit_master 
            SET patient_id=? ,
            status=?,
            registration_fee=?,
            payment_mode_visit=?
            WHERE visit_mast_slno=? `,
            [
                data.patient_id,
                data.status,
                data.registration_fee,
                data.payment_mode_visit,
                data.visit_mast_slno

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