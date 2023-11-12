"use server"
import { postgresPool } from "./db"
import { sqlQuery } from "./sqlQuery"

export default async function PopulateDatabase() {
	try {
		await postgresPool.query(sqlQuery)
	} catch (error) {
		return null
	}
}
