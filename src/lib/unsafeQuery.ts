"use server"
import { UserPets } from "@/types/UserPets"
import { postgresPool } from "./db"

export default async function UnsafeQuery(name: string) {
	const query = `SELECT * FROM users LEFT JOIN pets ON users.user_id = pets.user_id WHERE pets.name = ${name};`

	console.log("query", query)

	try {
		const result = await postgresPool.query(query)

		if (!result) return null

		const data: UserPets[] = result.rows.map((row) => {
			return {
				user_id: row.user_id,
				username: row.username,
				address: row.address,
				pet_id: row.pet_id,
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
