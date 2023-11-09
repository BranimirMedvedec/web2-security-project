"use client"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useUser } from "@auth0/nextjs-auth0/client"
import Loading from "@/components/Loading"
import Error from "@/components/Error"
import SafeProfile from "@/components/SafeProfile"
import UnsafeProfile from "@/components/UnsafeProfile"
import { sessionCheck } from "@/lib/sessionCheck"
import { Session } from "@/types/Session"

export default function Home() {
	const { user, error, isLoading } = useUser()
	const [session, setSession] = useState<Session | undefined>(undefined)
	const [authSwitch, setAuthSwitch] = useState(true)
	const [sqlSwitch, setSqlSwitch] = useState(true)

	useEffect(() => {
		const fetchSession = async () => {
			const temp = await sessionCheck()
			if (temp) {
				setAuthSwitch(false)
				setSession(temp)
			}
		}

		fetchSession()
	}, [])

	if (isLoading) return <Loading />
	if (error) return <Error />

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<div className="p-6 rounded shadow-md text-center w-full max-w-md">
				<h1 className="text-2xl font-bold mb-6">
					WEB2 SECURITY PROJECT WEB APP
				</h1>
				{user || session ? (
					authSwitch ? (
						<SafeProfile
							user={user}
							error={error}
							isLoading={isLoading}
						/>
					) : (
						<UnsafeProfile email={session?.email} />
					)
				) : (
					<div className="mb-4">
						<h3 className="text-xl font-bold mb-2">
							Login Section
						</h3>
						<div className="flex items-center px-2 py-2 rounded justify-center">
							<input
								type="checkbox"
								className="switch switch-success"
								checked={authSwitch}
								onChange={() => setAuthSwitch(!authSwitch)}
							/>
							<span className="ml-2">
								{authSwitch ? "SAFE LOGIN" : "UNSAFE LOGIN"}
							</span>
						</div>
						<div>
							<Link
								href={
									authSwitch ? "/api/auth/login" : "/login"
								}>
								<button
									className={`px-4 py-2 font-semibold rounded-lg shadow-md ${
										authSwitch
											? "bg-green-500 hover:bg-green-700"
											: "bg-red-500 hover:bg-red-700"
									}`}>
									Login
								</button>
							</Link>
						</div>
					</div>
				)}

				<div>
					<h3 className="text-xl font-bold mb-2">
						SQL Injection Section
					</h3>
					<div>
						<input
							type="checkbox"
							className="switch switch-success"
							checked={sqlSwitch}
							onChange={() => setSqlSwitch(!sqlSwitch)}
						/>
						<span className="ml-2">
							{sqlSwitch ? "SAFE SQL" : "UNSAFE SQL"}
						</span>
					</div>
					<div className="flex items-center px-2 py-2 rounded justify-center">
						<input
							className={`input ${
								sqlSwitch ? "input-success" : "input-error"
							}`}
							placeholder="Test SQL Injection"
						/>
					</div>
				</div>
			</div>

			<div className="mt-4">
				<Link href="/database">
					<button className="btn btn-outline-secondary">
						Database options
					</button>
				</Link>
			</div>
		</div>
	)
}
