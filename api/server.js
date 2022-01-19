const express =  require('express');
const PORT = 3000;
const app = express();
const cors = require('cors');

const corsOptions ={
    origin:'http://localhost:3000'
}
app.use(cors());

var mysql = require('mysql');
const con = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : '123456',
    database : 'db_cafe'
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.listen(PORT, ()=>{
    console.log('API rodando na porta '+ PORT)
});


app.get('/', (req, res)=>{
    res.json({status: "It Works" });
});

app.get('/products', (req, res, next)=>{

    var sql = "Select * from products";

    con.query( sql, (error, results) => {
        if (error) {
            throw error
        }
   console.log(results);
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(results)
    });
});