const sql = require('mssql');
// const {connectDB} = require('../config/dataConfig');
// controllers/dataContoller.js
const { getPool } = require('../config/dataConfig'); // Adjust the path accordingly

// Route to get data from [Customer Number]
// const customerNumber = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Disco, Date, Year, Month_Name, Customer_Number
//             FROM [Customer Number]
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
// };

// // Route to get data from [Customer Number]
// const DiscoBilling = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Billing_m
//             FROM [Disco Billing]
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
// };
// // Route to get data from [DiscoEnergyBilled]
// const DiscoEnergyBilled  = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Energy_Billed_GWh
//             FROM [Disco Energy Billed]
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoEnergyBilled]
// const DiscoEnergyBilledElectricitySupply20152024 = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Energy_Billed_Electricity_Supply_GWh
//             FROM [Disco Energy Billed-Electricity Supply 2015 - 2024]
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoEnergyBilled]
// const DiscoEnergyReceived = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Energy_Received
//             FROM [[Disco Energy Received]]
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoEnergyBilled]
// const DiscoInvoicefromMO = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Invoice_from_MO_Billion
//             FROM [Disco Invoice from MO]
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoEnergyBilled]
// const DiscoInvoicefromNBET = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Disco, Date, Year, Month_Name, Invoice_from_NBET_Billion
//             FROM [Disco Invoice from NBET] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoEnergyBilled]
// const DiscoRemittanceShortfalltoMO = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Remittance_Shortfall_Billion
//             FROM [Disco Remittance Shortfall to MO] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoEnergyBilled]
// const DiscoRevenueCollected20152024 = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Revenue_Collected_Million_Naira
//             FROM [Disco Revenue Collected 2015 - 2024] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoShortfalltoNBET]
// const DiscoShortfalltoNBET = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Shortfall_to_NBET_Billion
//             FROM [Disco Shortfall to NBET] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoRemittancetoMO]
// const DiscoRemittancetoMO = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Discos, Date, Year, Month_Name, Remittance_to_MO_Billion
//             FROM [Disco-Remittance-to-MO] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [DiscoRemittancetoMO]
// const GencoCapacity = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT GencoPlant, FuelType, EnergySource, Date, MonthName, Year, GencoCapcity, EnergySentout
//             FROM [Genco Capacity] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [GencoEnergyGeneration]
// const GencoEnergyGeneration = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Genco, Fuel_Type, Energy_Source, Date, Year, Month_Name, Energy
//             FROM [Genco Energy Generation] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [GencoMarketPayment]
// const GencoMarketPayment = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Genco, Fuel_Type, Energy_Source, Date, Month_Name, Year, Amount
//             FROM [Genco Market Payment] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

// // Route to get data from [GencoMarketPayment]
// const GencoMarketShortfall = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Genco, Fuel_Type, Energy_Source, Date, Year, Month_Name, Amount
//             FROM [Genco Market Shortfall] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };
// controllers/dataContoller.js
// const { sql, getPool } = require('../db'); // Adjust the path accordingly

const GencoCap = async (req, res) => {
    try {
        // Retrieve the existing connection pool
        const pool = await getPool();

        // SQL Query to aggregate data by year, plant, and month
        const query = `
            SELECT 
                c.Year,
                c.MonthName,
                n.GencoPlant,
                SUM(c.GencoCapcity) AS totalGencoCapacity,
                SUM(c.EnergySentout) AS totalEnergySentout
            FROM dbo.AvailableCapacity c
            JOIN dbo.GencoNames n ON c.GencoPlant_ID = n.GencoPlant_ID
            GROUP BY c.Year, c.MonthName, n.GencoPlant
            ORDER BY c.Year, 
                n.GencoPlant,
                CASE 
                    WHEN c.MonthName = 'January' THEN 1
                    WHEN c.MonthName = 'February' THEN 2
                    WHEN c.MonthName = 'March' THEN 3
                    WHEN c.MonthName = 'April' THEN 4
                    WHEN c.MonthName = 'May' THEN 5
                    WHEN c.MonthName = 'June' THEN 6
                    WHEN c.MonthName = 'July' THEN 7
                    WHEN c.MonthName = 'August' THEN 8
                    WHEN c.MonthName = 'September' THEN 9
                    WHEN c.MonthName = 'October' THEN 10
                    WHEN c.MonthName = 'November' THEN 11
                    WHEN c.MonthName = 'December' THEN 12
                END
        `;

        // Execute the query using the connection pool
        const result = await pool.request().query(query);

        // Extract the rows from the result
        const rows = result.recordset;

        // Initialize structures for overall and individual data
        const overallAnnual = {};
        const overallMonthly = {};
        const individualAnnual = {};
        const individualMonthly = {};

        rows.forEach(row => {
            const { Year, MonthName, GencoPlant, totalGencoCapacity, totalEnergySentout } = row;

            // === Overall Annual Data ===
            if (!overallAnnual[Year]) {
                overallAnnual[Year] = {
                    year: Year,
                    totalGencoCapacity: 0,
                    totalEnergySentout: 0
                };
            }
            overallAnnual[Year].totalGencoCapacity += Math.floor(totalGencoCapacity);
            overallAnnual[Year].totalEnergySentout += Math.floor(totalEnergySentout);

            // === Overall Monthly Data ===
            if (!overallMonthly[Year]) {
                overallMonthly[Year] = {
                    year: Year,
                    months: {}
                };
            }
            if (!overallMonthly[Year].months[MonthName]) {
                overallMonthly[Year].months[MonthName] = {
                    month: MonthName,
                    totalGencoCapacity: 0,
                    totalEnergySentout: 0
                };
            }
            overallMonthly[Year].months[MonthName].totalGencoCapacity += Math.floor(totalGencoCapacity);
            overallMonthly[Year].months[MonthName].totalEnergySentout += Math.floor(totalEnergySentout);

            // === Individual Annual Data ===
            if (!individualAnnual[GencoPlant]) {
                individualAnnual[GencoPlant] = {};
            }
            if (!individualAnnual[GencoPlant][Year]) {
                individualAnnual[GencoPlant][Year] = {
                    year: Year,
                    totalGencoCapacity: 0,
                    totalEnergySentout: 0
                };
            }
            individualAnnual[GencoPlant][Year].totalGencoCapacity += Math.floor(totalGencoCapacity);
            individualAnnual[GencoPlant][Year].totalEnergySentout += Math.floor(totalEnergySentout);

            // === Individual Monthly Data ===
            if (!individualMonthly[GencoPlant]) {
                individualMonthly[GencoPlant] = {};
            }
            if (!individualMonthly[GencoPlant][Year]) {
                individualMonthly[GencoPlant][Year] = {
                    year: Year,
                    months: {}
                };
            }
            if (!individualMonthly[GencoPlant][Year].months[MonthName]) {
                individualMonthly[GencoPlant][Year].months[MonthName] = {
                    month: MonthName,
                    gencoCapacity: 0,
                    energySentout: 0
                };
            }
            individualMonthly[GencoPlant][Year].months[MonthName].gencoCapacity += Math.floor(totalGencoCapacity);
            individualMonthly[GencoPlant][Year].months[MonthName].energySentout += Math.floor(totalEnergySentout);
        });

        // Convert overallAnnual and overallMonthly to arrays sorted by year
        const finalOverallAnnual = Object.values(overallAnnual).sort((a, b) => a.year - b.year);
        const finalOverallMonthly = Object.values(overallMonthly).map(yearData => ({
            year: yearData.year,
            months: Object.values(yearData.months).sort((a, b) => {
                const monthOrder = {
                    'January': 1,
                    'February': 2,
                    'March': 3,
                    'April': 4,
                    'May': 5,
                    'June': 6,
                    'July': 7,
                    'August': 8,
                    'September': 9,
                    'October': 10,
                    'November': 11,
                    'December': 12
                };
                return monthOrder[a.month] - monthOrder[b.month];
            })
        })).sort((a, b) => a.year - b.year);

        // Convert individualAnnual and individualMonthly to structured arrays
        const finalIndividualAnnual = Object.keys(individualAnnual).map(gencoPlant => ({
            gencoPlant,
            annual: Object.values(individualAnnual[gencoPlant]).sort((a, b) => a.year - b.year)
        }));

        const finalIndividualMonthly = Object.keys(individualMonthly).map(gencoPlant => ({
            gencoPlant,
            monthly: Object.values(individualMonthly[gencoPlant]).map(yearData => ({
                year: yearData.year,
                months: Object.values(yearData.months).sort((a, b) => {
                    const monthOrder = {
                        'January': 1,
                        'February': 2,
                        'March': 3,
                        'April': 4,
                        'May': 5,
                        'June': 6,
                        'July': 7,
                        'August': 8,
                        'September': 9,
                        'October': 10,
                        'November': 11,
                        'December': 12
                    };
                    return monthOrder[a.month] - monthOrder[b.month];
                })
            })).sort((a, b) => a.year - b.year)
        }));

        // Combine individual annual and monthly data
        const finalIndividual = finalIndividualAnnual.map(annualData => {
            const plantMonthlyData = finalIndividualMonthly.find(pm => pm.gencoPlant === annualData.gencoPlant);
            return {
                gencoPlant: annualData.gencoPlant,
                annual: annualData.annual,
                monthly: plantMonthlyData ? plantMonthlyData.monthly : []
            };
        });

        // Final JSON structure
        const finalResult = {
            overall: {
                annual: finalOverallAnnual,
                monthly: finalOverallMonthly
            },
            individual: finalIndividual
        };

        // Optional: Log the final result for debugging
        console.log(JSON.stringify(finalResult, null, 2));

        // Send the JSON response to the client
        res.json(finalResult);
    } catch (error) {
        // Log the detailed error for server-side debugging
        console.error('Error fetching genco data:', error.message);

        // Send a generic error message to the client
        res.status(500).json({ message: 'Internal Server Error' });
    }
};
// module.exports = router;

// Route to get data from [SystemCollapse]
// const SystemCollapse = async (req, res) => {
//     try {
//         // Connect to the database
//         await sql.connect(connectDB);

//         // Query to fetch data
//         const result = await sql.query(`
//             SELECT Type_of_Collapse, Date, Year, Month_Name, Collapse
//             FROM [SystemCollapse] 
//         `);

//         // Check the structure of result
//         console.log(result);  // Debugging

//         // Send the result as a JSON response
//         res.json(result.recordset || result);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         res.status(500).send('Internal Server Error');
//     } finally {
//         // Close the database connection
//         await sql.close();
//     }
    
// };

module.exports = { GencoCap};
