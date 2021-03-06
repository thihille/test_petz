const express = require('express')
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev})

const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/detalhes/:idpost',(req,res) => {
    app.render(req, res, '/detalhes', {idpost: req.params.id})
  });

  server.get('*',(req,res) => {
    return handle(req,res);
  });
  
  server.listen(3000, err => {
    if(err) throw err;
    console.log('Rodando em localhost:3000')
  })

}).catch(ex => {
  console.error(ex.stack);
  process.exit(1);
})