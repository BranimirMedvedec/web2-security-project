import { sessionCheck } from "@/lib/sessionCheck"
import { useEffect, useState } from "react"

export default function SessionDisplay() {
	const [session, setSession] = useState(null)

	useEffect(() => {
		sessionCheck().then((res) => {
			setSession(res)
		})
	}, [])

	return (
		<div>
			<h1>Session Display</h1>
			{session != false ? (
				<h2>Logged in as {session}</h2>
			) : (
				<h2>Not logged in</h2>
			)}
		</div>
	)
}
