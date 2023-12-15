document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  });
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  const PORT = 3000;
  
  // Configurando o middleware para analisar dados JSON
  app.use(bodyParser.json());
  
  // Rota para receber dados e salvá-los
  app.post('/salvar-registro', (req, res) => {
    const dados = req.body;
  
    // Aqui você pode realizar a lógica para salvar os dados em um banco de dados
    // Por exemplo, usando um ORM como Sequelize ou um banco de dados NoSQL como MongoDB.
  
    console.log('Dados recebidos:', dados);
  
    res.status(200).send('Registro salvo com sucesso!');
  });
  
  // Inicie o servidor
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
  });

  