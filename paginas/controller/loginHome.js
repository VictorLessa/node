module.exports.login = function (app, req, res){

		res.render('home/login', {validacao: {}, formulario:{}});	
}
module.exports.valida = function(app, req, res){
	var dadosFrom = req.body;

	req.assert('usuario', 'Registro do Usuario esta errado').notEmpty();
	req.assert('senha', 'Senha nao pode ser nulo').isInt();

	var erros = req.validationErrors();
	
	if(erros){
		res.render('home/login', {validacao: erros, formulario: dadosFrom});
		return;
	}

		var connection = app.config.bd();
		var ModelsLogin = new app.paginas.models.modelsLogin(connection);
		
		ModelsLogin.login(dadosFrom, function(error, resultado){
			if(resultado != ''){
				req.session.autorizado = true;
				req.session.resultado = resultado;
			}
			if(req.session.autorizado){
				res.redirect('/aluno');
			}else{
				res.render('home/login', {validacao:{}, formulario: [{"registro_aluno": " "}]});
				return;
			}
			console.log('fechando');
			
			//res.render('portal/portal', {dadosUsuario: resultado});
		});
}