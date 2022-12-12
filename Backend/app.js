const express=require("express");
const app = express();
const mongoose=require("mongoose");
//const port = 5000;
//const arr = []; 
const jwt = require("jsonwebtoken");
// var nodemailer = require("nodemailer");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

const bcrypt=require("bcryptjs");
  app.use(express.json())
  const cors=require("cors");
const { reset } = require("nodemon");
  app.use(cors());
const mongourl="mongodb+srv://Kingley23:Prakash123@cluster0.kd9lupf.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(mongourl,{
    useNewurlParser:true
}).then(()=>{console.log("connected to database");
})
.catch((e)=>console.log(e));
app.listen(5000,()=>{
    console.log("server started");

});
app.post("/post",async (req,res) =>{
    console.log(req.body);
    const {data}=req.body;
    if(data=="prakash"){
         res.send({status:"ok"});
    }
   
});
require("./userDetails");
const User=mongoose.model("UserInfo");
app.post("/register",async(req,res)=>{
    const {fname,email,password,age,batch,payment}=req.body;
    if(!fname|| !email|| !password|| !age|| !batch||!payment){
        return res.send({error:"Fill all the required field"});
    }
    const encryptpassword=await bcrypt.hash(password,10);
    try{  
        const olduser=await User.findOne({email});
        if(olduser){
            
           return res.send({error:"user exists"});
        }
        if(age<18||age>65){
            return res.send({error:"user not applicable"});
        }

        await User.create({
            fname,
            email,
            password: encryptpassword,
            age,
            batch,
            payment,
        });
        res.send({status: "ok"});
    } catch(error) {
        res.send({status:"Hello error"});
    }
});

app.post("/login-user", async (req, res) => {
    const { email, password } = req.body;
  
    const user = await User.findOne({ email });
    if (!user) {
      return res.json({ error: "User Not found" });
    }
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ email: user.email }, JWT_SECRET);
  
      if (res.status(201)) {
        return res.json({ status: "ok", data: token });
      } else {
        return res.json({ error: "error" });
      }
    }
    res.json({ status: "error", error: "InvAlid Password" });
  });

  app.post("/userData", async (req, res) => {
    const { token } = req.body;
    try {
      const user = jwt.verify(token, JWT_SECRET);
      console.log(user);
  
      const useremail = user.email;
      User.findOne({ email: useremail })
        .then((data) => {
          res.send({ status: "ok", data: data });
        })
        .catch((error) => {
          res.send({ status: "error", data: error });
        });
    } catch (error) {}
  });
  
 
  app.post("/updatebatch", async (req, res) => {
    const { email,batch } = req.body;

    const temp=batch;
    const user = await User.findOne({ email });
    const token = jwt.sign({ email: user.email }, JWT_SECRET);
    user.batch=batch;
    // await user.save();
    var date = new Date(user.updatedAt);
    var m = date.getMonth()+1;
    m=12+m%12
    var adate=new Date();
    var am = adate.getMonth()+1;
    am=12+am%12;
    if(am>m)
    {
    const update = { batch: batch };
    await user.updateOne(update);
    return res.json({ status: "Updated", data: token });
    }
   else{
   return res.send({status:"Not Update",data:token});
    }
    // await CharacterModel.updateOne({ name: 'Jon Snow' }, {
    //   title: 'King in the North'
    // });


  });
 

  // app.post("/updateBatch", async (req,res)=>{
  //   const {email,batch}=req.body;
  //   User.update({email:email},{$set:{batch:batch}},{new:true},(error,data)=>{
  //     if(error)
  //     return console.log(error);
  //     res.json(data);
  //   })
  // });
// app.use(express.json());

// app.post('/' , (req,res) => {
//     arr.push(req.body);
//     res.send(arr);
// })


// app.listen(port, () => {console.log(`listening on port ${port}`)});