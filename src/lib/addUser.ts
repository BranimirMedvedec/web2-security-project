"use server"
import { postgresPool } from "./db"
import { User } from "@/types/User"

export default async function AddUser(user: User) {
	try {
		await postgresPool.query(`INSERT INTO Users (email, password) VALUES
        ('${user.email}', '${user.password}')`)
	} catch (error) {
		return null
	}
}
