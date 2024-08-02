// server.js (ou o nome do seu arquivo Node.js)
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(express.json());

// Configure CORS
app.use(cors({
  origin: 'http://localhost:3000', // Substitua pela URL do seu frontend
}));

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true, // Use true para port 465, false para port 587
  auth: {
    user: 'contatojulialopescoimbra@gmail.com',
    pass: 'ezdl myqf xury hpul', // Certifique-se de que esta senha está correta
  },
});

app.post('/contato', (req, res) => {
  const { firstName, lastName, email, phoneNumber, message } = req.body;

  const mailOptions = {
    from: 'Contato com <contatojulialopescoimbra@gmail.com>',
    to: 'contatojulialopescoimbra@gmail.com',
    subject: 'Mensagem de Contato',
    html: `
      <p><strong>Primeiro Nome:</strong> ${firstName}</p>
      <p><strong>Sobrenome:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Número de Celular:</strong> ${phoneNumber}</p>
      <p><strong>Mensagem:</strong> ${message}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return res.status(500).json({ error: 'Falha ao enviar o e-mail' });
    }
    console.log('E-mail enviado:', info.response);
    return res.status(200).json({ message: 'E-mail enviado com sucesso' });
  });
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
