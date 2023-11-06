import { NextApiRequest, NextApiResponse } from "next"
import { postgresPool } from "../../../lib/db"
import { NextResponse } from "next/server"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		// Establish a database connection
		const client = await postgresPool.connect()

		// SQL query to get all pets
		const getTableQuery = `
                SELECT * FROM pets;
            `

		// Execute the SQL query to get all pets
		const result = await client.query(getTableQuery)

		// Release the client connection
		client.release()

		// Send the JSON response with the pets
		return new NextResponse(JSON.stringify(result.rows), {
			status: 200,
			headers: {
				"Content-Type": "application/json",
			},
		})
	} catch (error) {
		console.log("error", error)
		return new NextResponse(JSON.stringify(error), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		})
	}
}
