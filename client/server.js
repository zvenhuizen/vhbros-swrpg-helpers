const   express     = require('express'),
        dbOperation = require('../server/dbOperation.js'),
        cors        = require('cors');
    
const API_PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());

app.get('/api', function(req,res) {
    console.log('Called');
    res.send({result: 'Heyoo'})
})

app.get('/quit', function(req,res) {
    console.log('Called Quit');
    res.send({result: 'Bye bye'})
})

dbOperation.getRolls().then(res => {
    console.log(res.recordset);
})

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));