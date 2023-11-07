"use client"
import SQLComponent from "@/components/SQLInjectionComponent"
import Link from "next/link"

export default function Home() {
	return (
		<div>
			<div>
				<h1>Home</h1>
				{/* <Link href="/sqlinjection">SQL Injection</Link> */}
			</div>

			<SQLComponent />
		</div>
	)
}
