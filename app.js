require("dotenv").config();

const express = require("express");
const app = express();


app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

const login = require('./api/employee/emp.router')
const DoctorMaster = require('./api/doctor_master/doctor_master.router')
const patientRegistration = require('./api/patient_registration/patient_reg.router')
const Billing = require('./api/billing/billing.router')
const settingMaster = require('./api/setting_master/setting_master.router')
const ProcedurMaster = require('./api/procedure_master/procedure_mast.router')
const Appoinments = require('./api/appoinments/appoinment.router')
const ProcedurCatMaster = require('./api/procedure__category_mast/procedure_catgry.router')
const Reports = require('./api/reports/reports.router')
const ItemMaster = require('./api/item_mast/item_mast.router')
const Suppliermaster = require('./api/supplier/supplier.router')
const StockInward = require('./api/stock_inward/stock_inward.router')

app.use('/api/login', login)
app.use('/api/DoctorMaster', DoctorMaster)
app.use('/api/patientRegistration', patientRegistration)
app.use('/api/Billing', Billing)
app.use('/api/settingMaster', settingMaster)
app.use('/api/ProcedurMaster', ProcedurMaster)
app.use('/api/Appoinments', Appoinments)
app.use('/api/ProcedurCatMaster', ProcedurCatMaster)
app.use('/api/Reports', Reports)
app.use('/api/ItemMaster', ItemMaster)
app.use('/api/Suppliermaster', Suppliermaster)
app.use('/api/StockInward', StockInward)



app.listen(process.env.APP_PORT, (val) => {
    console.log(`Server Up and Running ${process.env.APP_PORT}`)
})