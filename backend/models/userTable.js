import database from "../database/db.js";

export async function createUserTable(){
    try{
        const query=`CREATE TABLE IF NOT EXISTS users(
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            name VARCHAR(100) NOT NULL ,
            email VARCHAR(100) NOT NULL UNIQUE,
            password TEXT NOT NULL,
            role VARCHAR(10) DEFAULT 'User' CHECK (role IN('User','Admin')),
            avatar JSONB DEFAULT NULL,
            reset_password_token TEXT DEFAULT NULL,
            reset_password_expire TIMESTAMP DEFAULT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);
            `;

        await database.query(query);

    }catch(error){
        console.log("Failed to create user table",error);
        process.exit(1);
    }
} 