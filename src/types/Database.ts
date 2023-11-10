import { Pets } from "./Pets"
import { User } from "./User"
import { UserPets } from "./UserPets"

export type Database = {
	users: User[]
	pets: Pets[]
	userPets: UserPets[]
}
