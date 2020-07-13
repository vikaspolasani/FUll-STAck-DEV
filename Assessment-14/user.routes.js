module.exports=app=>{
    const user_registration=require('../controllers/user.controller.js');
    app.post("/user_registration",user_registration.create);
    app.get('/user_registration/:email/:pwd',user_registration.findOne);
};