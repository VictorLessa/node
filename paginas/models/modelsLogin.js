/*importar o modulo do crypt*/
var crypto = require('crypto');

function Login(connection){
	this._connection = connection;
}
/*classe do cadastro*/
Login.prototype.Cadastro = function(dadosCadastro, callback){
	var senha = crypto.createHash("md5").update(dadosCadastro.senha).digest("hex");
	dadosCadastro.senha = senha;

	this._connection.query('insert into usuarios set ?', dadosCadastro, callback);
}
Login.prototype.login = function(dadosFrom, callback){

	var senha = crypto.createHash("md5").update(dadosFrom.senha).digest("hex");
	dadosFrom.senha = senha;

	this._connection.query("select * from usuarios where usuario = '" + dadosFrom.usuario + "'and senha = '" + dadosFrom.senha + "'", callback);
}
module.exports = function(){
	return Login;
}