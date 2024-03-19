# Testes de API

------------------------------------------------------------------------------------------------------------------------------
Observações:

1 - No arquivo index existe um trecho onde crio uma const para puxar meu usuário e senha de um outro arquivo. Ele puxa as credenciais de um arquivo chamado "credenciais_mongodb.js" onde armazena o usuario e senha do mongodb, basta criar este arquivo e seguir o exemplo abaixo:
* segue um exemplo de como está o arquivo:
    module.exports = "mongodb+srv://<SEUUSUARIO>:<SUASENHA>@cluster0.0d9epjs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";


2 - Também foi ignorado o "node_modules" com o .gitignore

3 - 

# Fim