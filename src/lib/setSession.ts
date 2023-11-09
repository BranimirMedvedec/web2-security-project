import { User } from "@/types/User"

export const setSession = (user: User) => {
	sessionStorage.setItem("session", JSON.stringify(user))
}
