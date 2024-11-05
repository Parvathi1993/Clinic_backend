const { pool } = require('../../config/config')
module.exports = {
    pateintInsert: (data, callback) => {
        pool.query(
            `INSERT INTO patient_registration(
            patient_id, salutation, patient_name, patient_address, patient_place, patient_pincode, patient_district, patient_mobile,
              patient_dob, patient_age,patient_month,patient_day,uhid ,old_uhid)
                VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.patient_id,
                data.salutation,
                data.patient_name,
                data.patient_address,
                data.patient_place,
                data.patient_pincode,
                data.patient_district,
                data.patient_mobile,
                data.patient_dob,
                data.patient_age,
                data.patient_month,
                data.patient_day,
                data.uhid,
                data.old_uhid
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    patientIdUpdate: (data, callback) => {
        pool.query(
            `UPDATE serial_no 
            SET patient_no=?                      
            WHERE serial_slno=1`,
            [
                data.patient_no

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    patientUpdate: (data, callback) => {
        pool.query(
            `UPDATE patient_registration 
            SET salutation=?,
            patient_name=?,
            patient_address=?,
            patient_place=?,
            patient_pincode=?,
            patient_district=?,
            patient_mobile=?,
            patient_dob=?,
            patient_age=?,
            patient_month=?,
            patient_day=?,
            old_uhid=?
            WHERE patient_id=? `,
            [
                data.salutation,
                data.patient_name,
                data.patient_address,
                data.patient_place,
                data.patient_pincode,
                data.patient_district,
                data.patient_mobile,
                data.patient_dob,
                data.patient_age,
                data.patient_month,
                data.patient_day,
                data.old_uhid,
                data.patient_id

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    patientgeting: (callback) => {
        pool.query(
            `SELECT doctor_slno,
            doctor_name, doctor_spectiality,doctor_status,
            doctor_fee,doctor_token_start,doctor_token_end,
            doctor_renewal_day,
             if(doctor_status = 1 ,'Yes','No') status1,
             speciality_master.speciality_name
            FROM patient_registration
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
    PatientIdget: (callback) => {
        pool.query(
            `SELECT patient_no
            FROM serial_no
            where serial_slno=1`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    DocGettingBySpeciality: (id, callBack) => {
        pool.query(
            `SELECT doctor_slno,doctor_name,doctor_fee       
            FROM doctor_master
            WHERE doctor_spectiality=? and doctor_status=1`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getDoctortokenDetail: (id, callBack) => {
        pool.query(
            `select max(token_no) as lasttoken_no
                  from visit_master
                 where doctor_slno=? and visit_date=current_date()
           `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getDoctorFeeDetail: (id, callBack) => {
        pool.query(
            `select 
        doctor_name, doctor_spectiality, doctor_status, doctor_fee, doctor_token_start, doctor_token_end, doctor_renewal_day
        from doctor_master

        where doctor_master.doctor_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    visitMasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO visit_master( patient_id, visit_date, doctor_slno, token_no,fee,status ,registration_fee,payment_mode_visit)
                VALUES(?,?,?,?,?,?,?,?)`,
            [
                data.patient_id,
                data.visit_date,
                data.doctor_slno,
                data.token_no,
                data.fee,
                1,
                data.registration_fee,
                data.payment_mode_visit
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    PatientDetailsGtting: (id, callBack) => {
        pool.query(
            `select  patient_id, salutation, patient_name, patient_address, patient_place,
 patient_pincode, patient_district, patient_mobile, patient_dob, patient_age, patient_month,
 patient_day,uhid,old_uhid
 from patient_registration
 where patient_id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    lastVisitingDate: (data, callback) => {
        pool.query(
            `select max(visit_date) as visit_date
from visit_master
where patient_id=? and doctor_slno=?`,
            [
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
    lastInsertVistForPrint: (id, callBack) => {
        pool.query(
            `select visit_mast_slno,patient_registration.patient_id, visit_date,  token_no, fee,
                salutation, patient_name, patient_address, patient_place, patient_pincode, patient_district,
                patient_mobile, patient_dob, patient_age, patient_month, patient_day,doctor_name,
                patient_registration.uhid,patient_registration.old_uhid
            from visit_master
            left join patient_registration on patient_registration.patient_id=visit_master.patient_id
            left join doctor_master on doctor_master.doctor_slno=visit_master.doctor_slno
            where visit_mast_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    searchpatientName: (data, callback) => {
        pool.query(
            `select  patient_id, salutation, patient_name,
            patient_address, patient_place, patient_pincode, patient_district,old_uhid,
             patient_mobile, patient_dob, patient_age, patient_month, patient_day, create_date, update_date,uhid
            from patient_registration
            where patient_name like ?`,
            [
                '%' + data.patient_name + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchmobileNo: (data, callback) => {
        pool.query(
            `select patient_id, salutation, patient_name,
            patient_address, patient_place, patient_pincode, patient_district,old_uhid,
             patient_mobile, patient_dob, patient_age, patient_month, patient_day, create_date, update_date,uhid
            from patient_registration
            where patient_mobile like ?`,
            [
                '%' + data.patient_mobile + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchAddress: (data, callback) => {
        pool.query(
            `select  patient_id, salutation, patient_name,
            patient_address, patient_place, patient_pincode, patient_district,old_uhid,
             patient_mobile, patient_dob, patient_age, patient_month, patient_day, create_date, update_date,uhid
            from patient_registration
            where patient_address like ?`,
            [
                '%' + data.patient_address + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchById: (data, callback) => {
        pool.query(
            `select  patient_id, salutation, patient_name,
            patient_address, patient_place, patient_pincode, patient_district,old_uhid,
             patient_mobile, patient_dob, patient_age, patient_month, patient_day, create_date, update_date,uhid
            from patient_registration
            where patient_id like ?`,
            [
                '%' + data.patient_id + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    searchNameAddress: (data, callback) => {
        pool.query(
            `select  patient_id, salutation, patient_name,
            patient_address, patient_place, patient_pincode, patient_district,old_uhid,
             patient_mobile, patient_dob, patient_age, patient_month, patient_day, create_date, update_date,uhid
            from patient_registration
           where patient_name like ? and patient_address like ?`,
            [
                '%' + data.patient_name + '%',
                '%' + data.patient_address + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchNameMobile: (data, callback) => {
        pool.query(
            `select  patient_id, salutation, patient_name,
            patient_address, patient_place, patient_pincode, patient_district,uhid,old_uhid,
             patient_mobile, patient_dob, patient_age, patient_month, patient_day, create_date, update_date,uhid
            from patient_registration
            where patient_name like ? and patient_mobile like ?`,
            [
                '%' + data.patient_name + '%',
                '%' + data.patient_mobile + '%'

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getAppoinmentVisitToday: (id, callBack) => {
        pool.query(
            `select visit_mast_slno, patient_id, visit_date,
            visit_master.doctor_slno, token_no, fee,  status, cancel_status,
            doctor_name,speciality_name
            from visit_master
        left join doctor_master on doctor_master.doctor_slno=visit_master.doctor_slno
        left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality
        where patient_id=? and visit_date=current_date() and cancel_status is null`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getLastRegistrationRenewal: (id, callBack) => {
        pool.query(
            `select max(visit_date) as lastregrenewal
                   from visit_master 
                   where patient_id=? and registration_fee=1 `,
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