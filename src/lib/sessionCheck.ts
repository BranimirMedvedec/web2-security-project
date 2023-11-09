export const sessionCheck = () => {
	const session = sessionStorage.getItem("session")
	if (session) {
		return JSON.parse(session)
	} else {
		return null
	}
}
