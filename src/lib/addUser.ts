"use server"
import { postgresPool } from "./db"
import { User } from "@/types/User"

export default async function AddUser(user: User) {
	try {
		const client = await postgresPool.connect()
		await client.query(`INSERT INTO Users (email, password) VALUES
        ('${user.email}', '${user.password}')`)
		postgresPool.end()
	} catch (error) {
		postgresPool.end()
		console.log(error)
		return null
	}
}
