const { pool } = require('../../config/config');
module.exports = {
    employeeInsert: (data, callBack) => {
        pool.query(
            `INSERT INTO hrm_employee 
                (usc_first_name,usc_second_name,usc_address,usc_name,usc_pass,us_code,usc_mobileno,
                usc_dob,usc_active,usc_alias,user_group_id,usc_doj)
            VALUES 
                (?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.usc_first_name,
                data.usc_second_name,
                data.usc_address,
                data.usc_name,
                data.usc_pass,
                data.us_code,
                data.usc_mobileno,
                data.usc_dob,
                data.usc_active,
                data.usc_alias,
                data.user_group_id,
                data.usc_doj
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results)
            }
        )
    },

    EmployeeAlreadyExist: (data, callBack) => {
        pool.query(
            `select usc_name from hrm_employee where usc_name = ?`,
            [
                data.usc_name,
            ],
            (err, results, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, results)
            }
        )
    },
    getEmployee: (callBack) => {
        pool.query(
            `
            SELECT emp_slno,us_code,usc_name,usc_pass,usc_alias,usc_first_name
            ,usc_active,user_group.user_group_name,hrm_employee.user_group_id FROM hrm_employee
            left join user_group on user_group.user_group_slno=hrm_employee.user_group_id
            order by hrm_employee.usc_name`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


    viewEmployee: (callBack) => {
        pool.query(
            `SELECT emp_slno, us_code, usc_name, usc_pass, usc_alias, usc_first_name,
            usc_second_name, usc_active, user_group_id, usc_mobileno, usc_dob, usc_doj, usc_address,
            user_group_name,
             if(usc_active = 1 ,'Yes','No') status1 
            FROM hrm_employee
            left join user_group on user_group.user_group_slno=hrm_employee.user_group_id`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },


    searchEmployee: (data, callBack) => {
        pool.query(`select emp_slno,us_code,usc_name,usc_pass,usc_alias,usc_first_name,usc_active,user_group.user_group_name from hrm_employee 
        left join user_group on user_group.user_group_id=hrm_employee.user_group_id
        where usc_name like ? and usc_alias like ? and usc_first_name like ? order by usc_name`,
            [
                '%' + data.usc_name + '%',
                '%' + data.usc_alias + '%',
                '%' + data.usc_first_name + '%',
            ],
            (err, results, feilds) => {
                if (err) {
                    return callBack(err)
                }
                return callBack(null, results)
            }
        )
    },

    employeeResetPass: (data, callBack) => {
        pool.query(
            `UPDATE hrm_employee
                SET 
                   usc_name = ?,
                    usc_pass = ?,
                    usc_alias = ?,
                    usc_first_name = ?,
                    usc_active = ?,
                    user_group_id=?
                WHERE emp_slno = ?`,
            [
                data.usc_name,
                data.usc_pass,
                data.usc_alias,
                data.usc_first_name,
                data.usc_active,
                data.user_group_id,
                data.emp_slno
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },


    employeeUpdate: (data, callBack) => {
        pool.query(
            `UPDATE hrm_employee
                SET 
                    usc_first_name = ?,
                    usc_second_name = ?,
                    usc_address = ?,
                    usc_name = ?,
                    usc_pass = ?,
                    usc_mobileno = ?,
                    usc_dob = ?,
                    usc_active=?,
                    usc_alias=?,
                    user_group_id=?,
                    usc_doj=?
                WHERE us_code = ?`,
            [
                data.usc_first_name,
                data.usc_second_name,
                data.usc_address,
                data.usc_name,
                data.usc_pass,
                data.usc_mobileno,
                data.usc_dob,
                data.usc_active,
                data.usc_alias,
                data.user_group_id,
                data.usc_doj,
                data.us_code
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },

    employeeGetById: (id, callBack) => {
        pool.query(
            `SELECT 
                emp_slno,
                us_code,
                usc_name,
                usc_pass,
                usc_alias,
                usc_first_name,
                usc_active
            FROM hrm_employee 
            WHERE emp_slno = ?`,
            [id],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        );
    },
    employeeDelete: (data, callBack) => {
        pool.query(
            `UPDATE hrm_employee SET usc_active = 0 WHERE emp_slno = ?`,
            [
                data.emp_slno
            ],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )
    },
    getEmployeeByUserName: (userName, callBack) => {
        pool.query(
            `SELECT * FROM hrm_employee WHERE usc_name = ?  AND usc_active = 1`,
            [userName],
            (error, results, fields) => {
                if (error) {
                    callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getMenuRights: (id, callBack) => {

        pool.query(
            `call GET_MENULIST(?) `,
            [id],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }

                return callBack(null, results[0]);
            }
        );

    },
    getEmpSerialNo: (callBack) => {
        pool.query(
            `
            SELECT patient_no FROM serial_no where serial_slno=2`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    userGroupget: (callBack) => {
        pool.query(
            `
                 select user_group_slno,user_group_name
                from user_group
                where user_group_status=1`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },

    employeeSerialNoUpdate: (callBack) => {
        pool.query(
            `update serial_no
             set patient_no=patient_no+1 where serial_slno=2`,
            [],
            (error, results, feilds) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        )

    },
}