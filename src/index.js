import app from './app.js';
import { sequelize } from './database/database.js';



async function main() {
    try {
        await sequelize.sync();
        app.listen(3000);
        console.log('Server ENCENDIDO 👍😎');
    } catch (error) {
        console.error('ERROR AL CONECTAR 😫😪', error)
    }
}
main();