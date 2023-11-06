"use client"
import { useState } from "react"

type Pet = {
	id: number
	name: string
	species: string
	breed: string
	age: number
	weight: number
	owner_name: string
	owner_address: string
}

export default function Pets() {
	const [pets, setPets] = useState([])
	const [safe, setSafe] = useState([])
	const [unsafe, setUnsafe] = useState([])

	const getPets = async () => {
		try {
			const res = await fetch("/api/pets")
			const data = await res.json()
			setPets(data)
		} catch (error) {
			console.log(error)
		}
	}

	return (
		<div>
			<h1>Pets</h1>
			<button onClick={getPets}>Get Pets</button>
			<ul>
				{pets.map((pet: Pet) => (
					<li key={pet.id}>
						{pet.name} - {pet.species} - {pet.breed} - {pet.age} -{" "}
						{pet.weight} - {pet.owner_name} - {pet.owner_address}
					</li>
				))}
			</ul>

			{/* create an input that on submit calls api that queries the database */}
			<form
				action={safe ? "/api/dbquery/safe" : "/api/dbquery/unsafe"}
				method="POST">
				<input
					type="text"
					name="name"
					placeholder="name"
				/>
			</form>
		</div>
	)
}
