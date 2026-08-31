import { envs } from "src/config/envs";
import { pendingEmail } from "src/email/entities/pending-email.entity";
import { LostPet } from "src/lost-pets/entities/lost-pet.entity";
import { User } from "src/users/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";


export const dataSourceOptions : DataSourceOptions = {
    host: envs.DB_HOST,
    type: 'postgres',
    database: envs.DB_NAME,
    username: envs.DB_USER,
    password: envs.DB_PASSWORD,
    port: envs.DB_PORT,
    entities: [LostPet, pendingEmail,User],
    synchronize: false,
    migrations: ['dist/db/migrations/[0-9]*-*.js']
}

const dataSource = new DataSource(dataSourceOptions);
export default dataSource; 

//REGEX: Conocidas como expresiones regulares y sirven para buscar textos dentro de un archivo