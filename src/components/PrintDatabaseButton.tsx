import PrintDatabase from "@/lib/printDatabase"
import { Database } from "@/types/Database"
import { useState } from "react"

export default function PrintDatabaseButton() {
	const [database, setDatabase] = useState<Database | null | undefined>(
		undefined
	)

	const handleClick = async () => {
		try {
			const db = await PrintDatabase()
			setDatabase(db)
		} catch (err) {
			return null
		}
	}

	return (
		<div className="card p-2 rounded-lg shadow-md text-center w-full max-w-7xl mx-auto">
			<div className="card-body flex flex-col items-center justify-center">
				<button
					className="btn btn-outline-secondary max-w-xs"
					onClick={handleClick}>
					Print Database
				</button>
				<textarea
					className="textarea mt-4 max-w-5xl h-80"
					placeholder="Output"
					value={
						database === undefined
							? "Click the button to print the database"
							: database === null
							? "Database is empty"
							: JSON.stringify(database, null, 2)
					}
					readOnly={true}
				/>
			</div>
		</div>
	)
}
