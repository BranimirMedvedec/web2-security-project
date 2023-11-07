import { NextApiRequest, NextApiResponse } from "next"
import { postgresPool } from "@/lib/db"
import { UserPets } from "@/types/UserPets"
import { NextResponse } from "next/server"

export async function GET(req: NextApiRequest, res: NextApiResponse) {
	try {
		const { username } = req.query

		const query = {
			text: `SELECT * FROM users LEFT JOIN pets ON users.user_id = pets.user_id WHERE pets.name = $1;`,
			values: [username],
		}

		const result = await postgresPool.query(query)

		if (result.rows.length > 0) {
			const data = result.rows.map((row) => {
				return {
					user_id: row.user_id,
					username: row.username,
					address: row.address,
					pet_id: row.pet_id,
					name: row.name,
					species: row.species,
					breed: row.breed,
					age: row.age,
					weight: row.weight,
				} as UserPets
			})

			return new NextResponse(JSON.stringify(data), {
				status: 200,
				headers: {
					"Content-Type": "application/json",
				},
			})
		} else {
			return new NextResponse(JSON.stringify({}), {
				status: 404,
				headers: {
					"Content-Type": "application/json",
				},
			})
		}
	} catch (error) {
		return new NextResponse(JSON.stringify(error), {
			status: 500,
			headers: {
				"Content-Type": "application/json",
			},
		})
	}
}
