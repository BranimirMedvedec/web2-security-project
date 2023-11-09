"use client"
import ClearDatabaseButton from "@/components/ClearDatabaseButton"
import PopulateDatabaseButton from "@/components/PopulateDatabaseButton"

export default function DatabasePage() {
	return (
		<div className="flex flex-row items-center justify-center min-h-screen my-4">
			<div className="card p-2 rounded-lg shadow-md text-center w-full max-w-md">
				<div className="card-body">
					<h2 className="text-2xl font-bold">Database Options</h2>
					<div>
						<PopulateDatabaseButton />
						<ClearDatabaseButton />
					</div>
				</div>
			</div>
		</div>
	)
}
