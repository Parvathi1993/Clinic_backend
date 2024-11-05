const { pool } = require('../../config/config')
module.exports = {
    settingMasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO setting_master(
             clinic_name, clinic_address, clinic_mobile,clinic_landno,clinic_mail, reg_renewaldays,reg_renewal_fee
                )
                VALUES(?,?,?,?,?,?,?)`,
            [
                data.clinic_name,
                data.clinic_address,
                data.clinic_mobile,
                data.clinic_landno,
                data.clinic_mail,
                data.reg_renewaldays,
                data.reg_renewal_fee
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },

    settingMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE setting_master 
            SET clinic_name=?,
            clinic_address=?,
            clinic_mobile=?,
            clinic_landno=?,
            clinic_mail=?,
            reg_renewaldays=?,
            reg_renewal_fee=?
            WHERE master_slno=? `,
            [
                data.clinic_name,
                data.clinic_address,
                data.clinic_mobile,
                data.clinic_landno,
                data.clinic_mail,
                data.reg_renewaldays,
                data.reg_renewal_fee,
                data.master_slno
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    SettingMasterGet: (callback) => {
        pool.query(
            `SELECT clinic_name, clinic_address, clinic_mobile,clinic_landno,clinic_mail, reg_renewaldays,master_slno,reg_renewal_fee
            FROM setting_master
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