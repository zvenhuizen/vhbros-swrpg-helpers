const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const   config      = require('./config'),
        sql       = require('mssql');

const getRolls = async() => {
    try {
        let pool = await sql.connect(config);
        let rolls = pool.request().query("SELECT * from rolls")
        console.log(rolls);
        return rolls;
    }
    catch(error) {
        console.log(error);
    }
};

app.use(cors());
app.use(express.json()); //allows you to read things from the front-end
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {

    mssql.connect(config, function (err) {

        if (err) console.log(err);

        var request = new mssql.Request();

        const positiveDice = req.body.positiveDice
        const negativeDice = req.body.negativeDice

        const sqlSelect = 'SELECT Result FROM dbo.rolls WHERE Roll IN (?,?)';

        request.query(sqlSelect, [positiveDice, negativeDice], (err, result) => {

            if (err) console.log(err);

            res.send(result);
        });
    })
});

app.get('/', (req, res) => {

    mssql.connect(config, function (err) {

        if (err) console.log(err);

        var request = new mssql.Request();

        const sqlSelect = 'SELECT * FROM dbo.rolls';

        request.query(sqlSelect, (err, result) => {

            if (err) console.log(err);

            res.send(result);
        });
    })
});

app.listen(3001, () => {
    console.log('running on port 3001');
});