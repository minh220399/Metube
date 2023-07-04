
// Requiring modules
const mysql = require("mysql");
const express = require("express");
const app = express();
// Get request


// Config your database credential
var connection = mysql.createConnection({
    host: "chua-ka-lowlight.c3yksf1qugnn.us-east-2.rds.amazonaws.com",
    user: "admin",
    password: "minh220399",
    port: "3306",
})



// Connect to your database
connection.connect(function (err) {
    if(err)
    {
        console.error("fail to connect" + err.stack);
        return;
    }
    console.log("Connected to database");
});

app.get("/videos", (req, res) =>{
    connection.query('SELECT * FROM ChuaKa.video_info;', function (err, result,fields) {
        if (err)
        {
            console.error("fail to query" + err.stack);
                return;
        }
        var length = Object.keys(result).length;
        console.log(result[0].Tilte);
        console.log(length);
        
        var respone = [] ;

        // let obj =
        // {
        //     title: result[0].Tilte,
        //     link: result[0].Link
        // };
        for (var i = 0; i < length; i++)
        {
            var obj = {
                title: result[i].Title,
                link: result[i].Link
            };
            console.log(respone);
            respone.push(obj);
            
        }
        res.json(respone);

    });
});


app.listen(8080, () => {
    console.log("listening on port 8080");
});