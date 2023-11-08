import { postgresPool } from "./db"

export default async function UserCheck(username: string) {
	const query = {
		text: `SELECT * FROM users LEFT JOIN pets ON users.user_id = pets.user_id WHERE users.username = $1;`,
		values: [username],
	}

	try {
		const result = await postgresPool.query(query)

		if (result.rows.length === 0) return null

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
		return JSON.stringify(data)
	} catch (error) {
		return null
	}
}
