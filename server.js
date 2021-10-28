const   express     = require('express'),
        dbOperation = require('./dbFiles/dbOperation'),
        cors        = require('cors');
    
const API_PORT = process.env.PORT || 5000;
const app = express();

let client;
let session;
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api/roll', async(req,res) => {
    console.log('called');

    //this runs the sql query in the getRolls function in dbOperation.js and returns the resulting recordset
    const result = await dbOperation.getRolls(req.body.posRoll, req.body.negRoll);
    res.send(result.recordset);
});

app.post('/api/result', function (req,res) {
    console.log('called');

    const result = await dbOperation.getResult(req.body.posResult, req.body.negResult);
    res.send(result.recordset);
});

app.listen(API_PORT, () => console.log(`listening on port ${API_PORT}`));