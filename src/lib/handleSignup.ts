import { User } from "@/types/User"
import UserCheck from "./userCheck"

export default async function handleSignup(userData: User) {
	const userDBData = await UserCheck(userData.username)
	if (userDBData != null) {
		console.log("Username already exists")
		return false
	}
	console.log("Username available")
}
