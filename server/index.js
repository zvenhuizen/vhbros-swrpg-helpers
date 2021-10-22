const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const mssql = require('mssql');

//configuration for database
const config = {
    host: 'localhost',
    user: 'CENTRALSTATESMF\zvenhuizen',
    password: 'password',
    database: 'swrpg'
}
const db = new mssql.ConnectionPool(config); //connect to database from config

app.use(cors());
app.use(express.json()); //allows you to read things from the front-end
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    
    let dice = ''

    for(var i = 1; i < 3; i++) {
        if(i === 1) {
            dice = req.body.positiveDice
        } else { dice = req.body.negativeDice }

        const sqlSelect = 'SELECT Result FROM dbo.rolls WHERE Roll IN ?';

        db.query(sqlSelect, dice, (err, result) => {
            if(i === 1) {
                finalResult = result;
            } else {finalResult *= result}
            req.setEncoding(finalResult);
        });
    }
});

app.post('/api/update', (req, res) => {

    const positiveDice = req.body.positiveDice
    const negativeDice = req.body.negativeDice

    //create a const sqlUpdate with the appropriate sql statement to update the 
    //record that was just rolled.
    db.query(sqlUpdate, [rollCombos, rollResult], (err, result) => {
        //run front end code, return state variables into these variable names (rollCombos, rollResults)
        /* in app use Axios.post('http://localhost:3001/api/update', {
            rollCombos: rollCombos,
            rollResult: rollResult,
        }).then(() => {
            alert('update successful');
        }) */
    })
})

app.listen(3001, () => {
    console.log('running on port 3001');
});