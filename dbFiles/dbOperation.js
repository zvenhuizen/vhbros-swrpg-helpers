const   config      = require('./dbConfig'),
        sql         = require('mssql');

const getRolls = async(posRoll,negRoll) => {
    try {
        const sqlString = `SELECT * from rolls WHERE Roll IN ('${posRoll}','${negRoll}')`;

        let pool = await sql.connect(config);
        let rolls = await pool.request().query(sqlString)
        console.log(rolls);
        return rolls;
    }
    catch(error) {
        console.log(error);
    }
};

const getResult = async(posResult,negResult) => {
    try {
        const sqlString = `SELECT Index FROM results WHERE Result IN ('${posResult}','${negResult}')`;

        let pool = await sql.connect(config);
        let resultIndex = await pool.request().query(sqlString)
        console.log(resultIndex);
        return resultIndex;
    }
    catch(error) {
        console.log(error);
    }
};

module.exports = {
    getResult,
    getRolls
}