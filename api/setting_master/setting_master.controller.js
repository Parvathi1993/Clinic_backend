const { settingMasterInsert, settingMasterUpdate, SettingMasterGet } = require("../setting_master/setting_master.service");

module.exports = {
    settingMasterInsert: (req, res) => {
        const body = req.body;
        settingMasterInsert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Setting Inserted"
            });
        })
    },
    settingMasterUpdate: (req, res) => {
        const body = req.body;
        settingMasterUpdate(body, (err, results) => {
            if (err) {
                res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 2,
                    message: "No Data to Update"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: " Updated Successfully ..."
            });
        })
    },
    SettingMasterGet: (req, res) => {
        SettingMasterGet((err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },


}