import { clearSession } from "@/lib/clearSession"
import ErrorPage from "./Error"

export default function UnsafeProfile({
	email,
}: {
	email: string | undefined
}) {
	if (!email) return <ErrorPage />

	const handleLogout = () => {
		window.location.reload()
	}

	const handleClearSesion = () => {
		clearSession()
		window.location.reload()
	}

	return (
		<div className="flex flex-row items-center justify-center my-4">
			<div className="card p-2 rounded-lg shadow-md text-center w-full max-w-md">
				<div className="card-body">
					<h1 className="text-2xl font-bold">Profile</h1>
					<p>You are logged in as:</p>
					<p className="text-lg font-semibold">Email: {email}</p>

					<div className="flex justify-evenly mt-2">
						<button
							className="btn btn-outline-warning"
							onClick={handleLogout}>
							Logout
						</button>
						<button
							className="btn btn-outline-warning"
							onClick={handleClearSesion}>
							Clear Session
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
