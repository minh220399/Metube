
// Requiring modules
const mysql = require("mysql");
const express = require("express");
const app = express();
// Get request


// Config your database credential
var connection = mysql.createConnection({
    host: "fake",
    user: "admin",
    password: "fake",
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
    console.log("GET /videos");

    connection.query('SELECT * FROM ChuaKa.video_info;', function (err, result,fields) {
        if (err)
        {
            console.error("fail to query" + err.stack);
                return;
        }
        var length = Object.keys(result).length;
        var respone = [] ;


        for (var i = 0; i < length; i++)
        {
            var obj = {
                title: result[i].Title,
                link: result[i].Link
            };
            respone.push(obj);
            
        }
        res.json(respone);

    });
});

app.get("/videosByGame/:game", (req, res) =>{
    var game = req.params.game;
    console.log("GET /videosByGame/" + game);

    connection.query(" SELECT * FROM ChuaKa.video_info where game = '" + game + "'", function (err, result,fields) {
        if (err)
        {
            console.error("fail to query" + err.stack);
                return;
        }
        var length = Object.keys(result).length;
        var respone = [] ;

        for (var i = 0; i < length; i++)
        {
            var obj = {
                title: result[i].Title,
                link: result[i].Link
            };
            respone.push(obj);
            
        }
        res.json(respone);

    });
});

app.listen(8080, () => {
    console.log("listening on port 8080");
});