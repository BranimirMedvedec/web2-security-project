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
import SafeQuery from "@/lib/safeQuery"
import UnsafeQuery from "@/lib/unsafeQuery"

export default function Home() {
	const { user, error, isLoading } = useUser()
	const [session, setSession] = useState<Session | undefined>(undefined)
	const [authSwitch, setAuthSwitch] = useState(true)
	const [sqlSwitch, setSqlSwitch] = useState(true)
	const [selectedOption, setSelectedOption] = useState("name")
	const [sqlInput, setSqlInput] = useState("")
	const [data, setData] = useState<string | undefined | null>(undefined)

	const sqlInjectionQuery =
		"t' OR 1=1 UNION ALL SELECT users.user_id, users.email, users.password, users.email as email1, users.user_id as id, users.user_id as id1, users.user_id as id2 FROM users WHERE 1='1"

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

	const handleTestSQL = async () => {
		let dataString
		if (sqlSwitch) {
			dataString = await SafeQuery(selectedOption, sqlInput)
		} else {
			dataString = await UnsafeQuery(selectedOption, sqlInput)
		}
		setData(dataString)
	}

	if (isLoading) return <Loading />
	if (error) return <Error />

	return (
		<div className="flex flex-col items-center justify-center min-h-screen">
			<h1 className="text-2xl font-bold mb-6">
				WEB2 SECURITY PROJECT WEB APP
			</h1>
			<div className="shadow-md my-2 text-center w-full flex flex-row items-center justify-evenly">
				<div className="card w-1/4 max-w-none">
					<div className="card-body">
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
							<>
								<h3 className="text-xl font-bold">
									Login Section
								</h3>
								<div className="flex items-center justify-center my-2">
									<input
										type="checkbox"
										className="switch switch-success"
										checked={authSwitch}
										onChange={() =>
											setAuthSwitch(!authSwitch)
										}
									/>
									<span className="ml-2">
										{authSwitch
											? "SAFE LOGIN"
											: "UNSAFE LOGIN"}
									</span>
								</div>
								<>
									<Link
										href={
											authSwitch
												? "/api/auth/login"
												: "/login"
										}>
										<button
											className={`btn font-semibold rounded-lg shadow-md ${
												authSwitch
													? "btn-outline-success"
													: "btn-outline-error"
											}`}>
											Login
										</button>
									</Link>
								</>
							</>
						)}
					</div>
				</div>

				<div className="card w-1/2 max-w-none">
					<div className="card-body">
						<h3 className="text-xl font-bold">
							SQL Injection Section
						</h3>
						<div className="flex items-center justify-center my-2">
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
						<div className="flex flex-row justify-evenly">
							<input
								className={`input w-1/2 ${
									sqlSwitch ? "input-success" : "input-error"
								}`}
								placeholder="Test SQL Injection"
								value={sqlInput}
								onChange={(e) => setSqlInput(e.target.value)}
							/>
							<span
								className="tooltip tooltip-top w-1/4"
								data-tooltip="Select pets attribute">
								<select
									className={`select ${
										sqlSwitch
											? "select-success"
											: "select-error"
									}`}
									onChange={(e) =>
										setSelectedOption(e.target.value)
									}>
									<option>name</option>
									<option>species</option>
									<option>breed</option>
								</select>
							</span>
							<button
								className={`btn font-semibold ${
									sqlSwitch
										? "btn-outline-success"
										: "btn-outline-error"
								}`}
								onClick={handleTestSQL}>
								Get Pets
							</button>
						</div>
						<div className="flex items-center w-full justify-evenly">
							<button
								className="btn btn-outline-secondary"
								onClick={() => {
									setSqlInput(sqlInjectionQuery)
								}}>
								Test SQL Injection
							</button>
							<textarea
								className="textarea w-full resize"
								placeholder="SQL Result"
								value={
									data === undefined
										? "SQL Query Result"
										: data === null
										? "Error getting data from database"
										: JSON.stringify(
												JSON.parse(data),
												null,
												2
										  )
								}
								readOnly={true}
								rows={8}
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-2">
				<Link href="/database">
					<button className="btn btn-outline-secondary">
						Database options
					</button>
				</Link>
			</div>
		</div>
	)
}
