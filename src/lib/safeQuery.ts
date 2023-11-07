"use server"
import { postgresPool } from "./db"

export default async function SafeQuery(formData: FormData) {
	"use server"

	const name = formData.get("name")

	const query = {
		text: `SELECT * FROM users LEFT JOIN pets ON users.user_id = pets.user_id WHERE pets.name = $1;`,
		values: [name],
	}

	console.log("name", name)
	console.log("query", query)

	const result = await postgresPool.query(query)

	const data = result.rows.map((row) => {
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

	console.log("data", data)
}
