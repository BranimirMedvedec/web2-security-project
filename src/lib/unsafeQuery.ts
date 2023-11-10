"use server"
import { UserPets } from "@/types/UserPets"
import { postgresPool } from "./db"

export default async function UnsafeQuery(
	selectedOption: string,
	sqlInput: string
) {
	const table = "pets." + selectedOption
	const query = `SELECT * FROM pets WHERE ${table} = '${sqlInput};`

	try {
		const result = await postgresPool.query(query)

		if (!result) return null

		return JSON.stringify(result.rows)
	} catch (error) {
		return null
	}
}
