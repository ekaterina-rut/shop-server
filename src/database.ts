//@ts-ignore
import * as mysql from 'mysql2/promise';


export const on_line_shop = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456789',
    database: 'on_line_shop'
})

// console.log(trips)

