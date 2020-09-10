var mysql = require('mysql');

//Database connection
var mysqlConnectionObject = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'root',
    database : 'warehouse_management',
    multipleStatements : 'true',
})

mysqlConnectionObject.connect((err)=>{
    if(err){
        throw err;
        // console.log("not connected")
    }
    else{
        console.log("connected")
    }
})

module.exports = mysqlConnectionObject;