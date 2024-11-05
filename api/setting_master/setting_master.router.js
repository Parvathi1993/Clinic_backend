const router = require("express").Router();
const { settingMasterInsert, settingMasterUpdate, SettingMasterGet } = require("../setting_master/setting_master.controller");

router.post("/", settingMasterInsert);

router.patch("/", settingMasterUpdate);

router.get("/", SettingMasterGet);



module.exports = router;