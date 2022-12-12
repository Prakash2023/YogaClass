const mangoose=require("mongoose");
const Userdetailschema= new mangoose.Schema(
    {
        fname:String,
        email:{type: String,unique:true},
        password:String,
        age:String,
        batch:String,
        payment:String,
        
    },
    {
        collection: "UserInfo",
        timestamps:true,
    }
);
mangoose.model("UserInfo",Userdetailschema);