import { User } from "@/types/User"
import { sessionCheck } from "./sessionCheck"

export const handleLogin = async (userData: User) => {
	const session = await sessionCheck()
	if (session != false) {
		console.log("Already logged in, session found in local storage")
	}
	localStorage.setItem("session", JSON.stringify(userData))
	console.log("Login successful, session saved to local storage")
}
