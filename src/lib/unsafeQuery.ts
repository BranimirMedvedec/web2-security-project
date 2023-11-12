"use server"
import { postgresPool } from "./db"

export default async function UnsafeQuery(
	selectedOption: string,
	sqlInput: string
) {
	const table = "pets." + selectedOption
	const query = `SELECT * FROM pets WHERE ${table} = '${sqlInput}';`

	try {
		const result = await postgresPool.query(query)

		if (!result) return null

		const data = result.rows.map((row) => {
			return {
				name: row.name,
				species: row.species,
				breed: row.breed,
				age: row.age,
				weight: row.weight,
			}
		})

		// return JSON.stringify(result.rows)
        return JSON.stringify(data)
	} catch (error) {
		return null
	}
}
