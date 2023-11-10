import ClearDatabase from "@/lib/clearDatabase"

export default async function ClearDatabaseButton() {
	const clearDatabase = async () => {
		await ClearDatabase()
	}

	return (
		<button
			className="btn btn-outline-secondary"
			onClick={clearDatabase}>
			Drop Tables
		</button>
	)
}
