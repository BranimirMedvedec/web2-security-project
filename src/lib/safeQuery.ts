"use server"
import { postgresPool } from "./db"

export default async function SafeQuery(
	selectedOption: string,
	sqlInput: string
) {
	const table = "pets." + selectedOption
	const query = {
		text: `SELECT * FROM pets WHERE ${table} = $1;`,
		values: [sqlInput],
	}

	try {
		const result = await postgresPool.query(query)

		if (result.rows.length === 0) return null

		const data = result.rows.map((row) => {
			return {
				name: row.name,
				species: row.species,
				breed: row.breed,
				age: row.age,
				weight: row.weight,
			}
		})

		return JSON.stringify(data)
	} catch (error) {
		return null
	}
}
