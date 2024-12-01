// backend/controllers/userController.js
import connection from '../config/conn.js';

// Função para criar um usuário
const createUser = (req, res) => {
  const { nome, curso, status, dataInicio, dataConclusao, comentarios } = req.body;

  if (!nome || !curso || !status || !dataInicio || !dataConclusao || !comentarios) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  const query = `
    INSERT INTO usuarios (nome, curso, status, data_inicio, data_conclusao, comentarios)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    query,
    [nome, curso, status, dataInicio, dataConclusao, comentarios],
    (err, result) => {
      if (err) {
        console.error('Erro ao inserir usuário:', err);
        return res.status(500).json({ message: 'Erro ao salvar os dados no banco.' });
      }
      res.status(201).json({ message: 'Usuário salvo com sucesso!', userId: result.insertId });
    }
  );
};

// Função para atualizar um usuário
const updateUser = (req, res) => {
  const userId = req.params.id;  // Pegando o ID do usuário pela URL
  const { nome, curso, status, dataInicio, dataConclusao, comentarios } = req.body;

  if (!nome || !curso || !status || !dataInicio || !dataConclusao || !comentarios) {
    return res.status(400).json({ message: 'Por favor, preencha todos os campos.' });
  }

  const query = `
    UPDATE usuarios
    SET nome = ?, curso = ?, status = ?, data_inicio = ?, data_conclusao = ?, comentarios = ?
    WHERE id = ?
  `;

  connection.query(
    query,
    [nome, curso, status, dataInicio, dataConclusao, comentarios, userId],
    (err, result) => {
      if (err) {
        console.error('Erro ao atualizar usuário:', err);
        return res.status(500).json({ message: 'Erro ao atualizar os dados no banco.' });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Usuário não encontrado.' });
      }
      res.status(200).json({ message: 'Usuário atualizado com sucesso!' });
    }
  );
};

export { createUser, updateUser };
