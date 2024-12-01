// Depois
import express from 'express';
import cors from 'cors';
import sequelize from './config/conn.js';  
import userRoutes from './routes/userRoutes.js'; 


const app = express();


app.use(cors());
app.use(express.json());


app.use('/api/users', userRoutes);


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
