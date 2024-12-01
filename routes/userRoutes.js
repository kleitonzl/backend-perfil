// backend/routes/userRoutes.js

import express from 'express';
import { createUser, updateUser } from '../controllers/userController.js';  // Importando corretamente as funções
const router = express.Router();

// Rota POST para criar um usuário
router.post('/create', createUser);

// Rota PUT para atualizar um usuário existente
router.put('/update/:id', updateUser);  // Atualizar o usuário com o ID fornecido na URL

export default router;
