import mysql from 'mysql2';


const connection = mysql.createConnection({
  host: 'localhost',      
  user: 'root',           
  password: 'Kle@1512',   
  database: 'perfil_db' 
});


connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
    return;
  }
  console.log('Conectado ao MySQL!');
});

export default connection;

