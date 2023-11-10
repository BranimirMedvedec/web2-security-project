"use server"
import { postgresPool } from "./db"

export default async function ClearDatabase() {
	const query = `DROP TABLE IF EXISTS "users" CASCADE;
    DROP TABLE IF EXISTS "pets" CASCADE;`
	try {
		await postgresPool.query(query)
		// console.log("Database cleared")
	} catch (error) {
		// console.log("Database not cleared")
		return null
	}
}
