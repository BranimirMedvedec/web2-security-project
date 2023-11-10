"use server"
import { Database } from "@/types/Database"
import { postgresPool } from "./db"

export default async function PrintDatabase() {
	const usersQuery = `SELECT * FROM "users";`
	const petsQuery = `SELECT * FROM "pets";`
	const usersPetsQuery = `SELECT * FROM "users" NATURAL JOIN "pets";`

	try {
		const usersString = await postgresPool.query(usersQuery)
		const petsString = await postgresPool.query(petsQuery)
		const usersPetsString = await postgresPool.query(usersPetsQuery)
		const users = usersString.rows.map((user) => {
			return {
				user_id: user.user_id,
				email: user.email,
				password: user.password,
			}
		})
		const pets = petsString.rows.map((pet) => {
			return {
				pet_id: pet.pet_id,
				name: pet.name,
				species: pet.species,
				breed: pet.breed,
				age: pet.age,
				weight: pet.weight,
				user_id: pet.user_id,
			}
		})
		const userPets = usersPetsString.rows.map((userPet) => {
			return {
				user_id: userPet.user_id,
				email: userPet.email,
				password: userPet.password,
				pet_id: userPet.pet_id,
				name: userPet.name,
				species: userPet.species,
				breed: userPet.breed,
				age: userPet.age,
				weight: userPet.weight,
			}
		})
		const database: Database = {
			users: users,
			pets: pets,
			userPets: userPets,
		}
        // console.log("Database fetched")
		return database
	} catch (error) {
		// console.log("Database is empty")
		return null
	}
}
