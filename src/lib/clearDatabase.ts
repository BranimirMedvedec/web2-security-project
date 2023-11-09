"use server"
import { postgresPool } from "./db"

export default async function ClearDatabase() {
	const query = `DROP TABLE IF EXISTS "users" CASCADE;
    DROP TABLE IF EXISTS "pets" CASCADE;`
	try {
		const client = await postgresPool.connect()

		await client.query(query)
		postgresPool.end()
	} catch (error) {
		postgresPool.end()
		return null
	}
}
