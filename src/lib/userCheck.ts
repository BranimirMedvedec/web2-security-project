"use server"
import { postgresPool } from "./db"

export default async function UserCheck(email: string) {
	const query = {
		text: `SELECT * FROM users WHERE users.email = $1;`,
		values: [email],
	}

	try {
		const result = await postgresPool.query(query)
		if (result.rows.length === 1) return true
		else return false
	} catch (error) {
		return null
	}
}
