import app from "./server"
const dotenv = require('dotenv');

//config
dotenv.config({path:"e-commerce-backend/config/config.env"})
app.listen(process.env.PORT,()=>{
    console.log(`sERVER IS RUNNING ON http://localhost/:${process.env.PORT}`);
})