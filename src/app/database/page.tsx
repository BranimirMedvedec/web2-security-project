"use client"
import ClearDatabaseButton from "@/components/ClearDatabaseButton"
import PopulateDatabaseButton from "@/components/PopulateDatabaseButton"
import PrintDatabaseButton from "@/components/PrintDatabaseButton"

export default function DatabasePage() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen space-y-6">
			<div className="card p-2 rounded-lg shadow-md text-center w-full max-w-md">
				<div className="card-body">
					<h2 className="text-2xl font-bold">Database Options</h2>
					<div className="space-x-4">
						<PopulateDatabaseButton />
						<ClearDatabaseButton />
					</div>
				</div>
			</div>

			<div className="w-full mx-4">
				<PrintDatabaseButton />
			</div>
		</div>
	)
}
