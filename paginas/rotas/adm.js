module.exports = function(app){
	app.get('/adm', function(req, res){
		app.paginas.controller.admin.adm(app, req, res);
	});
	app.post('/cadastro', function(req, res){
		app.paginas.controller.admin.cadastro(app, req, res);
	});
}