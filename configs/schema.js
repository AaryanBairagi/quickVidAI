import { pgTable , serial  , varchar , boolean } from "drizzle-orm/pg-core"; 

//Creating a SQL database 'users' 
//Primary key-id is made serial to auto increment its value as the data increases
export const Users = pgTable('users' , {
    id:serial('id').primaryKey(),
    name:varchar('name').notNull(),
    email:varchar('email').notNull(),
    imageUrl:varchar('imageUrl'),
    subscription:boolean('subscription').default(false)
});