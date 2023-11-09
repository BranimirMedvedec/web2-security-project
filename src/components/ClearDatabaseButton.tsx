import ClearDatabase from "@/lib/clearDatabase"

export default async function PopulateDatabaseButton() {
	const populateDatabase = async () => {
		await ClearDatabase()
	}

	return (
		<button
			className="btn btn-outline-secondary"
			onClick={populateDatabase}>
			Clear Database
		</button>
	)
}
