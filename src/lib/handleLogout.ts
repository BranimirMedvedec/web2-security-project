import { sessionCheck } from "./sessionCheck"

export const handleLogout = async () => {
	const session = await sessionCheck()
	if (!session) {
		console.log("No session found in local storage")
	} else {
		localStorage.removeItem("session")
		console.log("Logout successful, session removed from local storage")
	}
}
