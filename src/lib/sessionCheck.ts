export const sessionCheck = async () => {
	const session = localStorage.getItem("session")
	if (session) {
		return JSON.parse(session)
	} else {
		return false
	}
}
