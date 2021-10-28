const   config = {
    user: 'vhbros',
    password: 'lukecage2',
    server: 'ARLO-521',
    database: 'swrpg',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: 'SQLEXPRESS'
    },
    port: 1433
}

module.exports = config;