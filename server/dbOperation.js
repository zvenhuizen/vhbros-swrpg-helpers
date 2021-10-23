const   config  = require('./config'),
        sql     = require('mssql');

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

module.exports = {
    getRolls
}