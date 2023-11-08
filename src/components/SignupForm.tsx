"use client"
import { useState } from "react"
import { User } from "@/types/User"
import { handleLogin } from "@/lib/handleLogin"

export default function SignupForm() {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const handleSubmit = () => {
		const userData: User = { username, password, user_id: 0 }
		handleLogin(userData)
	}

	return (
		<div>
			<h1>Signup Form</h1>

			<form onSubmit={handleSubmit}>
				<input
					className="input"
					placeholder="username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					className="input"
					placeholder="password"
					value={password}
					type="password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</div>
	)
}
