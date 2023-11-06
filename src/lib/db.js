import { Pool } from "pg"

export const postgresPool = new Pool({
	connectionString: process.env.RENDER_CONNECTION_STRING,
	password: process.env.RENDER_PASSWORD,
	port: 5432,
})
