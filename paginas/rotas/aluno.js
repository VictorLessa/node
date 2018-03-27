module.exports = function(app){
		app.get('/aluno', function(req, res){
  app.paginas.controller.aluno.aluno(app, req, res);
});
		app.get('/sair', function(req, res){
  app.paginas.controller.aluno.sair(app, req, res);
});
}