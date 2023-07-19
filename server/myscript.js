import { connectToDb } from "./connectToDb.js";
import express from 'express';
const app = express();

var connection = connectToDb();

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

// app.get("/videosByGame/:game", (req, res) =>{
//     var game = req.params.game;
//     console.log("GET /videosByGame/" + game);

//     connection.query(" SELECT * FROM ChuaKa.video_info where game = '" + game + "'", function (err, result,fields) {
//         if (err)
//         {
//             console.error("fail to query" + err.stack);
//                 return;
//         }
//         var length = Object.keys(result).length;
//         var respone = [] ;

//         for (var i = 0; i < length; i++)
//         {
//             var obj = {
//                 title: result[i].title,
//                 link: result[i].link,
//                 game: result[i].game,
//                 pov: result
//             };
//             respone.push(obj);
            
//         }
//         res.json(respone);

//     });
// });

app.listen(8080, () => {
    console.log("listening on port 8080");
});