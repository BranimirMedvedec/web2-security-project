"use server"
import { postgresPool } from "./db"
import { sqlQuery } from "./sqlQuery"

export default async function PopulateDatabase() {
	try {
		await postgresPool.query(sqlQuery)
		// console.log("Database populated")
	} catch (error) {
		// console.log("Database not populated")
		return null
	}
}
