let mysql=require('mysql');
const dbConfig = require('../config/db.config.js');
const connection=mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB

});
connection.connect(error=>{
    if(error){
        return console.error(err.message);
    }
    console.log('Sucessfully connected to mysql server');
});
module.exports=connection;