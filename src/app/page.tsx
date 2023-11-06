"use client"
import Safe from "@/components/Safe"
import Link from "next/link"

export default function Home() {
	return (
		<div>
			<div>
				<h1>Home</h1>
				<Link href="/sqlinjection">SQL Injection</Link>
			</div>

			<Safe />

        
		</div>
	)
}
