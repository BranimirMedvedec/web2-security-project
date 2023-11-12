"use client"
import AddUser from "@/lib/addUser"
import { setSession } from "@/lib/setSession"
import UserCheck from "@/lib/userCheck"
import { User } from "@/types/User"
import { useRouter } from "next/navigation"
import { useState } from "react"

export default function SafeForm() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const router = useRouter()

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const user: User = { email, password }
		const userExists = await UserCheck(user.email)
		if (userExists) {
			alert("User already exists")
			return
		}
		await AddUser(user)
		setSession(user)
		router.push("/")
	}

	return (
		<div className="mx-auto flex w-full max-w-sm flex-col gap-6 min-h-screen justify-center">
			<div className="flex flex-col items-center">
				<h1 className="text-3xl font-semibold mb-2">Sign In</h1>
				<p className="text-sm">Web2 Security Project</p>
			</div>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<div className="form-field">
						<label className="form-label">Email</label>
						<input
							placeholder="Type here"
							type="email"
							className="input max-w-full"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-field">
						<label className="form-label">Password</label>
						<div className="form-control">
							<input
								placeholder="Type here"
								type="password"
								className="input max-w-full"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
					</div>
					<div className="form-field pt-5">
						<div className="form-control justify-between">
							<button
								type="submit"
								className="btn btn-primary w-full">
								Sign in
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}
