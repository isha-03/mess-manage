const mongoose=require("mongoose");
require("dotenv").config();

function dbConnect()
{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewurlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("Db connected successfully"))
    .catch((err)=>console.log("Db conenction unsuccessfull"));
}

module.exports=dbConnect;