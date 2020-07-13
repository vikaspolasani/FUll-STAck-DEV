const sql=require('./db.js');
const User=function(user){
    this.email=user.email;
    this.u_password=user.u_password;
    this.phonenumber=user.phonenumber;
    this.address=user.address;
}
User.create=(user,result)=>{
    sql.query('insert into user_registration set ?',user,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
        }
        console.log("created User:",{id:res.insertedId,...user});
        return(null,{id:res.insertedId,...user});
    });
};
User.login=(email,pwd,result)=>{
    sql.query(`select * from user_registration where email=${email} and u_password=${pwd}`,(err,res)=>{
        if(err){
            console.log(err);
            result(err,null);
            return;
        }
        if(res.length){
            console.log('found customer:',res[0]);
            result(null,res[0]);
            return;
        }
        result({kind:'not_found'},null);
    });
};

module.exports=User;