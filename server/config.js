const config = {
    user: 'admin',
    password: 'password',
    server: 'ARLO-521',
    database: 'swrpg',
    options: {
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instanceName: 'sqlexpress'
    },
    port: 1433
}

module.exports = config;