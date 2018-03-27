module.exports.adm = function(app, req, res){
	res.render('adm/index');
}
module.exports.cadastro = function(app, req, res){
	var dadosCadastro = req.body;

	req.assert('').notEmpty();
	var erros = req.validationErrors();
	
	var connection = app.config.bd();
	var Cadastro = new app.paginas.models.modelsLogin(connection);

	Cadastro.Cadastro(dadosCadastro, function(err, resultado){
		res.redirect('/adm');
	});
	
}