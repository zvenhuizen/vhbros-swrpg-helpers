const   express     = require('express'),
        dbOperation = require('../server/dbOperation.js'),
        cors        = require('cors');
    
const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post('/api', async(req,res) => {
    console.log('Called');
    const result = await dbOperation.getRolls(req.body.posRoll,req.body.negRoll);
    res.send(result.recordset)
})

app.post('/quit', function(req,res) {
    console.log('Called Quit');
    res.send({result: 'Bye bye'})
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));