import PopulateDatabase from "@/lib/populateDatabase"

export default async function PopulateDatabaseButton() {
	const populateDatabase = async () => {
		await PopulateDatabase()
	}

	return (
		<button
			className="btn btn-outline-secondary"
			onClick={populateDatabase}>
			Populate Database
		</button>
	)
}
