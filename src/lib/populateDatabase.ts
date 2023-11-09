"use server"
import { postgresPool } from "./db"
import { sqlQuery } from "./sqlQuery"

export default async function PopulateDatabase() {
	try {
		const client = await postgresPool.connect()
		await client.query(sqlQuery)
		postgresPool.end()
	} catch (error) {
		postgresPool.end()
		return null
	}
}
