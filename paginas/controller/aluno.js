module.exports.aluno = function(app, req, res){
	if(req.session.autorizado != undefined){
	res.render('portal/aluno', {dados: req.session.resultado});

}else{
	res.render('home/login', {validacao: {}, formulario: [{"registro_aluno": " "}]});
}
}
module;exports.sair = function(app, req, res){
	var connection = app.config.bd();
	req.session.destroy( function(err){
		connection.end();
		res.redirect('/');

	});
}