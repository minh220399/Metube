import { connectToDb } from "./connectToDb.js";
import express from 'express';
import https from 'https';

const app = express();
var connection = connectToDb();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://minh220399.github.io');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
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
                title: result[i].title,
                link: result[i].link,
                game: result[i].game,
                pov: result[i].pov
            };
            respone.push(obj);
        }
        res.json(respone);

    });
});


function pingWebsite() 
{
    console.log("Ping Server");
    const urlToPing = 'https://server-chuaka.onrender.com';
  
    https.get(urlToPing, (res) => {
      console.log(`Ping success: ${urlToPing} is reachable. Status code: ${res.statusCode}`);
    }).on('error', (err) => {
      console.log(`Ping failed: ${err.message}`);
    });
}

const pingInterval = 1 * 60 * 1000;
setInterval(pingWebsite, pingInterval);

app.listen(8080, () => {
    console.log("listening on port 8080");
});