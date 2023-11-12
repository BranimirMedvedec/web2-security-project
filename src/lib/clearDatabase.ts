"use server"
import { postgresPool } from "./db"

export default async function ClearDatabase() {
	const query = `DROP TABLE IF EXISTS "users" CASCADE;
    DROP TABLE IF EXISTS "pets" CASCADE;`
	try {
		await postgresPool.query(query)
	} catch (error) {
		return null
	}
}
