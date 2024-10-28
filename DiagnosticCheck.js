const diagnosticCheck = async () => {
    try {
        const pool = await getPool();

        // Check current database
        const dbResult = await pool.request().query('SELECT DB_NAME() AS CurrentDatabase');
        console.log('Current Database:', dbResult.recordset[0].CurrentDatabase);

        // List all tables in the current database
        const tableListResult = await pool.request().query(`
            SELECT TABLE_SCHEMA, TABLE_NAME 
            FROM INFORMATION_SCHEMA.TABLES 
            WHERE TABLE_TYPE = 'BASE TABLE'
        `);
        console.log('Tables in current database:');
        tableListResult.recordset.forEach(row => {
            console.log(`  ${row.TABLE_SCHEMA}.${row.TABLE_NAME}`);
        });

        // Check if GencoCapacity exists
        const tableCheckResult = await pool.request().query(`
            SELECT TABLE_SCHEMA, TABLE_NAME 
            FROM INFORMATION_SCHEMA.TABLES 
            WHERE TABLE_NAME = 'GencoCapacity'
        `);
        if (tableCheckResult.recordset.length > 0) {
            console.log('GencoCapacity table found in schema:', tableCheckResult.recordset[0].TABLE_SCHEMA);
        } else {
            console.log('GencoCapacity table not found in current database');
        }

    } catch (error) {
        console.error('Diagnostic check failed:', error);
    }
};

module.exports = { diagnosticCheck };