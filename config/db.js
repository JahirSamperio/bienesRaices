import Sequelize from 'sequelize';
import dotenv from 'dotenv';
dotenv.config({path:'.env'})

const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASSWORD, {
    host: process.env.HOST,
    port: process.env.BD_PORT,
    dialect: 'mysql',
    define:{
        timestamps: true
    },
    pool: {
        max: 5, //Maximo de conexxiones
        min: 0, //Minimo de conexxiones
        acquire: 30000, //Tiempo antes de marxar un aerror 30 seconds
        idle: 10000  //Finaliza la conexxion despues de 10 seconds
    },
    operatorAliases: false
});

export default db;