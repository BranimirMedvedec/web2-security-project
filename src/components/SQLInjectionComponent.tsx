"use client"
import { useState } from "react"
import { UserPets } from "@/types/UserPets"
import SafeQuery from "@/lib/safeQuery"
import UnsafeQuery from "@/lib/unsafeQuery"
import error from "next/error"

export default function SQLComponent() {
	const [data, setData] = useState<UserPets[] | null>(null)
	const [status, setStatus] = useState("")
	const [safe, setSafe] = useState(true)
	const [name, setName] = useState("")

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (safe) {
			const tempString = await SafeQuery(name)
			if (!tempString) return setStatus("Error")
			const temp = JSON.parse(tempString)
			if (temp) {
				setData(temp as UserPets[])
				setStatus("Success")
			} else {
				setStatus("Error")
			}
		} else {
			const tempString = await UnsafeQuery(name)
			if (!tempString) return setStatus("Error")
			const temp = JSON.parse(tempString)
			if (temp) {
				setData(temp as UserPets[])
				setStatus("Success")
			} else {
				setStatus("Error")
			}
		}
	}

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
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="name"
					placeholder="name"
					value={name}
					onChange={(e) => setName(e.currentTarget.value)}
				/>
				<button
					type="submit"
					className="btn btn-primary">
					Fetch data
				</button>
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
