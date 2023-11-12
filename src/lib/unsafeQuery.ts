"use server"
import { postgresPool } from "./db"

export default async function UnsafeQuery(
	selectedOption: string,
	sqlInput: string
) {
	const table = "pets." + selectedOption
	console.log("table", table)
	const query = `SELECT * FROM pets WHERE ${table} = '${sqlInput}';`
	console.log("query", query)

	try {
		const result = await postgresPool.query(query)
		console.log("result", result)

		if (!result) return null

		return JSON.stringify(result.rows)
	} catch (error) {
		return null
	}
}
