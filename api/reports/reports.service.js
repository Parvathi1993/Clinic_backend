const { pool } = require('../../config/config')
module.exports = {
    getCashCollectBilling: (id, callBack) => {
        pool.query(
            `select bill_mast_slno, patient_registration.patient_id, bill_date, bill_amount,patient_name,uhid,
                        patient_address,patient_place,patient_mobile,bill_payment_mode,
                      (case when bill_payment_mode = 1 then "Cash" when bill_payment_mode = 2 then "Card"
                      when bill_payment_mode = 3 then "Gpay"  else "Not Given" end ) as paymentmode
                        from bill_mast
                        left join patient_registration on patient_registration.patient_id=bill_mast.patient_id
                        where date(bill_date)= ? `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getCashCollectvisting: (id, callBack) => {
        pool.query(
            `select visit_mast_slno,  visit_date, 
                 token_no, fee,  status, cancel_status, cancel_reason, registration_fee,
                patient_registration.patient_id, patient_name,uhid,
                patient_address,patient_place,patient_mobile,doctor_master.doctor_name,
                payment_mode_visit,
                      (case when payment_mode_visit = 1 then "Cash" when payment_mode_visit = 2 then "Card"
                      when payment_mode_visit = 3 then "Gpay"  else "Not Given" end ) as paymentmode
                from visit_master
            left join patient_registration on patient_registration.patient_id=visit_master.patient_id
            left join doctor_master on doctor_master.doctor_slno=visit_master.doctor_slno
            where visit_date=? and fee!=0 and status=1 `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getCashCollectNewRegstration: (id, callBack) => {
        pool.query(
            `select visit_mast_slno,  visit_date, 
                doctor_slno, token_no, fee,  status, cancel_status, cancel_reason, registration_fee,
                patient_registration.patient_id, patient_name,uhid,
                patient_address,patient_place,patient_mobile,
                payment_mode_visit,
                      (case when payment_mode_visit = 1 then "Cash" when payment_mode_visit = 2 then "Card"
                      when payment_mode_visit = 3 then "Gpay"  else "Not Given" end ) as paymentmode
                from visit_master
            left join patient_registration on patient_registration.patient_id=visit_master.patient_id
            where visit_date=? and registration_fee=1 `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getBillDetails: (id, callBack) => {
        pool.query(
            `select bill_detail_slno, bill_slno, bill_proc_slno, bill_detail.procedure_slno, bill_detail.procedure_rate,
procedure_name,procedure_code,procedure_catgry_name
from bill_detail
left join procedure_master on procedure_master.procedure_slno=bill_detail.procedure_slno
left join procedure_catgry_mast on procedure_catgry_mast.procedure_catgry_slno=procedure_master.procedure_catgry_slno
where bill_slno=? `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getBillPateintDetails: (id, callBack) => {
        pool.query(
            `select bill_mast_slno, bill_mast.patient_id, bill_date, bill_amount,
 salutation, patient_name, patient_address, patient_place,
 patient_pincode, patient_district, patient_mobile, patient_dob,
 patient_age, patient_month, patient_day,  uhid, old_uhid
from bill_mast
left join patient_registration on patient_registration.patient_id=bill_mast.patient_id
where bill_mast_slno=? `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getCategryBasedBill: (data, callback) => {
        pool.query(
            `select bill_detail_slno, bill_mast_slno, bill_proc_slno, bill_detail.procedure_slno, bill_detail.procedure_rate,
 procedure_name, procedure_code, procedure_catgry_name,bill_date,uhid,
 (case when bill_payment_mode = 1 then "Cash" when bill_payment_mode = 2 then "Card"
                      when bill_payment_mode = 3 then "Gpay"  else "Not Given" end ) as paymentmode
from bill_detail
left join bill_mast on bill_mast.bill_mast_slno=bill_detail.bill_slno
left join procedure_master on procedure_master.procedure_slno=bill_detail.procedure_slno
left join procedure_catgry_mast on procedure_catgry_mast.procedure_catgry_slno=procedure_master.procedure_catgry_slno
left join patient_registration on patient_registration.patient_id=bill_mast.patient_id
where date(bill_date)= ? and procedure_master.procedure_catgry_slno=?`,
            [
                data.bill_date,
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

    getCashCollectIPBilling: (id, callBack) => {
        pool.query(
            `select ip_bill_mast_slno, patient_registration.patient_id, ip_bill_date, ip_bill_amount,patient_name,uhid,
                        patient_address,patient_place,patient_mobile,ip_bill_payment_mode,
                      (case when ip_bill_payment_mode = 1 then "Cash" when ip_bill_payment_mode = 2 then "Card"
                      when ip_bill_payment_mode = 3 then "Gpay"  else "Not Given" end ) as paymentmode
                        from ip_bill_mast
                        left join patient_registration on patient_registration.patient_id=ip_bill_mast.patient_id
                        where date(ip_bill_date)= ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getCategryBasedIPBill: (data, callback) => {
        pool.query(
            `select ip_bill_detail_slno, ip_bill_mast_slno, ip_bill_proc_slno, ip_bill_detail.ip_procedure_slno, ip_bill_detail.ip_procedure_rate,
 procedure_name, procedure_code, procedure_catgry_name,ip_bill_date,uhid,ip_count,ip_rate_total,
  (case when ip_bill_payment_mode = 1 then "Cash" when ip_bill_payment_mode = 2 then "Card"
                      when ip_bill_payment_mode = 3 then "Gpay"  else "Not Given" end ) as paymentmode
from ip_bill_detail
left join ip_bill_mast on ip_bill_mast.ip_bill_mast_slno=ip_bill_detail.ip_bill_slno
left join procedure_master on procedure_master.procedure_slno=ip_bill_detail.ip_procedure_slno
left join procedure_catgry_mast on procedure_catgry_mast.procedure_catgry_slno=procedure_master.procedure_catgry_slno
left join patient_registration on patient_registration.patient_id=ip_bill_mast.patient_id
where date(ip_bill_date)= ? and procedure_master.procedure_catgry_slno=?`,
            [
                data.ip_bill_date,
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
}