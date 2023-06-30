# Morpheus Project

O Morpheus é um projeto que visa fornecer um sistema abrangente de gerenciamento de personagens para jogos de interpretação de papéis de mesa. Ele permite que os jogadores criem e editem fichas de personagens, gerenciem atributos e habilidades, e armazenem informações de equipamentos.

## Funcionalidades

- Crie e edite fichas de personagens com nome, raça, classe, nível, atributos, habilidades e equipamentos.
- Atualize valores de atributos e níveis de habilidades de forma dinâmica.
- Salve e envie as fichas de personagens.
- Interface amigável com controles intuitivos.
- Design responsivo para visualização ideal em vários dispositivos.

## Tecnologias Utilizadas

Git: Controle de versão e colaboração.
GitHub: Hospedagem e gerenciamento de repositórios.

**Frontend**
- React.js: Biblioteca JavaScript para construção de interfaces de usuário.
- React Router DOM: Biblioteca de roteamento para navegação entre páginas em um aplicativo React.
- CSS: Estilização e layout.
- HTML: Estrutura de marcação.
- JavaScript: Linguagem de programação para funcionalidade do lado do cliente.
- Axios: Biblioteca JavaScript para fazer requisições HTTP.
- Gravatar: Serviço para exibir avatares personalizados com base no endereço de e-mail.

**Backend**
- Python: Linguagem de programação para desenvolvimento do backend.
- Flask: Framework web em Python para construção de aplicativos web.
- SQLAlchemy: Biblioteca em Python para interação com bancos de dados SQL.
- MySQL: Sistema de gerenciamento de banco de dados relacional.

## Instalação

### Frontend e Backend

1. Na raiz do projeto, instale as dependências: `npm install`

### Frontend

1. Navegue até a pasta "front": `cd morpheusfront`
2. Instale as dependências do frontend: `npm install`

### Backend

1. Navegue até a pasta "back": `cd morpheusback`
2. Crie um ambiente virtual (opcional): `python3 -m venv env`
3. Ative o ambiente virtual (se criado): `source env/bin/activate`
4. Instale as dependências do backend: `pip install -r requirements.txt`

## Execução

### Frontend e Backend

1. Na raiz do projeto, execute o comando: `npm start`

### Frontend

1. Navegue até a pasta "front": `cd front`
2. Inicie o servidor de desenvolvimento do frontend: `npm start`

O frontend estará disponível em: `http://localhost:3000`

### Backend

1. Navegue até a pasta "back": `cd back`
2. Ative o ambiente virtual (se criado): `source env/bin/activate`
3. Inicie o servidor do backend: `python app.py`

O backend estará disponível em: `http://localhost:5000`

## Build

Para criar uma versão de produção do frontend, execute o seguinte comando na pasta "front": `npm run build`

## Uso

- Preencha os campos de informações do personagem.
- Ajuste os valores dos atributos e níveis das habilidades conforme necessário.
- Adicione ou remova itens de equipamento.
- Clique no botão "Salvar" para salvar a ficha do personagem.
- Use a funcionalidade de envio do formulário para enviar a ficha do personagem para um servidor ou sistema de armazenamento.

## Login

O Morpheus possui um sistema de login para autenticação de usuários. Ao acessar o aplicativo, você será redirecionado para a página de login, onde poderá inserir suas credenciais para acessar as funcionalidades completas do sistema.

## Navegação com BrowserRouter

O Morpheus utiliza o BrowserRouter do React Router para fornecer uma navegação entre as diferentes páginas e funcionalidades do aplicativo. O BrowserRouter permite que você navegue facilmente pelas fichas de personagens, áreas de edição e outras partes do sistema.

## Contribuição

Contribuições para o Morpheus são bem-vindas! Se você tiver alguma ideia, relatório de bug ou solicitação de recurso, abra uma issue no repositório do GitHub. Se você deseja contribuir com código, pode enviar um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a Licença MIT.


<!-- Atualizar
front


back
instalaçoes
pip install flask
pip install mysql-connector-python
pip install python-dotenv
pip install flask-cors

iniciar o DB
sudo service mysql start
mysql -u <username> -p

comandos DB
DROP DATABASE;
DROP DATABASE morpheus;

 -->

 <!-- inicializar 4 abas de terminal
 1- DB
 2- back
 3- front - npm run start:front
 4- git
 
  -->