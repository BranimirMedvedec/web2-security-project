import { postgresPool } from "./db"

export async function createPetsTable() {
	try {
		const client = await postgresPool.connect()

		// SQL query to create the 'pets' table
		const createTableQuery = `
      CREATE TABLE pets (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        species VARCHAR(255) NOT NULL,
        breed VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        weight DECIMAL NOT NULL,
        owner_name VARCHAR(255) NOT NULL,
        owner_address TEXT NOT NULL
      );
    `

		// Execute the SQL query to create the table
		await client.query(createTableQuery)

		client.release()
		console.log("Table 'pets' has been created successfully.")
	} catch (error) {
		console.error("Error creating 'pets' table:", error)
	} finally {
		postgresPool.end() // Close the connection pool
	}
}

// Call the function to create the 'pets' table
createPetsTable()
