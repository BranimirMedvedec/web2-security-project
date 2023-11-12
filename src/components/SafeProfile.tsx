"use client"
import { UserProfile } from "@auth0/nextjs-auth0/client"
import Link from "next/link"
import LoadingPage from "./Loading"
import ErrorPage from "./Error"

export default function SafeProfile({
	user,
	error,
	isLoading,
}: {
	user: UserProfile | undefined
	error: Error | undefined
	isLoading: boolean
}) {
	if (isLoading) return <LoadingPage />
	if (error) return <ErrorPage />

	return (
		user && (
			<div className="flex flex-col items-center justify-center my-4">
				<div className="flex flex-col gap-2 p-2">
					<h1 className="text-2xl font-bold">Profile</h1>
					<p>You are logged in as:</p>
					<p className="text-lg font-semibold">Name: {user.name}</p>
					<p className="text-lg font-semibold">Email: {user.email}</p>
					<p className="text-lg font-semibold">
						Email verified: {user.email_verified ? "Yes" : "No"}
					</p>
					<div className="mt-2">
						<Link href="/api/auth/logout">
							<button className="btn btn-outline-warning">
								Logout
							</button>
						</Link>
					</div>
				</div>
			</div>
		)
	)
}
