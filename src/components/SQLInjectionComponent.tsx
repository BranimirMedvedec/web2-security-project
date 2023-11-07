"use client"
import { FormEvent, useState } from "react"
import { UserPets } from "@/types/UserPets"
import SafeQuery from "@/lib/safeQuery"

export default function SQLComponent() {
	const [data, setData] = useState<UserPets[]>([])
	const [status, setStatus] = useState("")
	const [safe, setSafe] = useState(true)
	const [name, setName] = useState("")

	// const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault()

	// 	const url = safe
	// 		? `/api/dbquery/safe?username=${username}`
	// 		: `/api/dbquery/unsafe?username=${username}`

	// 	console.log("url", url)

	// 	try {
	// 		const res = await fetch(url, {
	// 			method: "GET",
	// 			headers: {
	// 				"Content-Type": "application/json",
	// 			},
	// 		})
	// 		const data = await res.json()
	// 		console.log("data", data)
	// 		console.log("res", res)
	// 		setData(data)
	// 		setStatus(res.status.toString())
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	return (
		<div>
			<h1>Data</h1>
			<div>
				<input
					type="checkbox"
					className={`switch ${
						safe
							? "switch-bordered-success"
							: "switch-bordered-error"
					}`}
					onChange={() => {
						setSafe(!safe)
					}}
					checked={safe}
				/>
				<label>{safe ? "Safe" : "Unsafe"}</label>
			</div>
			<form action={SafeQuery}>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
				/>
				<button className="btn btn-primary">Fetch data</button>
			</form>
			<ul>
				<li>
					{"name"} - {"species"} - {"breed"} - {"age"} - {"weight"} -{" "}
					{"username"} - {"address"}
				</li>
				{data ? (
					data.map((userpet) => (
						<li key={userpet.pet_id}>
							{userpet.name} - {userpet.species} - {userpet.breed}{" "}
							- {userpet.age} - {userpet.weight} -{" "}
							{userpet.username} - {userpet.address}
						</li>
					))
				) : (
					<li>No data</li>
				)}
			</ul>
		</div>
	)
}
