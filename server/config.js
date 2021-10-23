const config = {
    user: 'vhbros',
    password: 'lukecage2',
    server: 'ARLO-521',
    database: 'swrpg',
    options: {
        trustServerCertificate: true,
        enableArithAbort: true,
        rowCollectionOnRequestCompletion: false
    },
    port: 1433,
    instanceName: 'SQLEXPRESS'
}

module.exports = config;