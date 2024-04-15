# projeto_compacine-api

## Stack

<div align="left">
<img src="https://img.shields.io/badge/Node.js-339933.svg?style=for-the-badge&logo=nodedotjs&logoColor=white" />
<img src="https://img.shields.io/badge/MongoDB-47A248.svg?style=for-the-badge&logo=MongoDB&logoColor=white" />
<img src="https://img.shields.io/badge/Docker-2496ED.svg?style=for-the-badge&logo=Docker&logoColor=white" />
<img src="https://img.shields.io/badge/Postman-FF6C37.svg?style=for-the-badge&logo=Postman&logoColor=white" />
<img src="https://img.shields.io/badge/Express-000000.svg?style=for-the-badge&logo=Express&logoColor=white" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black" />
<img src="https://img.shields.io/badge/Mongoose-880000.svg?style=for-the-badge&logo=Mongoose&logoColor=white" />
<img src="https://img.shields.io/badge/Prettier-F7B93E.svg?style=for-the-badge&logo=Prettier&logoColor=black" />
<img src="https://img.shields.io/badge/EditorConfig-FEFEFE.svg?style=for-the-badge&logo=EditorConfig&logoColor=black" />
</div>

## Execução do código:

## Passo 1 - Criando um arquivo .env

Na pasta do projeto crie um arquivo .env com a seguinte variável:

```bash
MONGODB_URI = mongodb://db:27017
```

## Passo 2 - Mapeando o seu volume do mongodb

No arquivo "docker-compose.yml" no service "db" na parte "volumes"
antes dos ":" coloque o caminho em que deseja salvar os arquivos do banco na sua máquina local

## Passo 3 - Contruindo os containers api e db

No terminal, certifique-se de estar na pasta do projeto e digite:

```bash
docker-compose build
```

## Passo 4 - Iniciando a aplicação

No terminal, certifique-se de estar na pasta do projeto, digite:

```bash
docker-compose up -d
```

## Testando via Postman/Insomnia:

## Rota Movie

| Rota                             | HTTP(verbo) | Descrição         |
| -------------------------------- | ----------- | ----------------- |
| http://localhost:3000/movies/    | GET         | Selecionar Todos  |
| http://localhost:3000/movies/    | POST        | Criar Movie       |
| http://localhost:3000/movies/:id | GET         | Selecionar por Id |
| http://localhost:3000/movies/:id | PUT         | Atualizar por Id  |
| http://localhost:3000/movies/:id | DELETE      | Excluir por Id    |

## Note que, na criação do movie, o array de tickets deve ser iniciado vazio

```json
{
  "image_url": "https://www.example.com/movie.jpg",
  "name": "The Movie Title",
  "plot": "A brief description of the movie plot.",
  "actors": ["Actor 1", "Actor 2"],
  "genre": "Action",
  "session": {
    "capacity": 100,
    "time": "20:00",
    "room": "Theater 1",
    "tickets": []
  }
}
```

## Rota Ticket

| Rota                                                                    | HTTP(verbo) | Descrição                |
| ----------------------------------------------------------------------- | ----------- | ------------------------ |
| http://localhost:3000/tickets/recuperar/movie/:movieId/ticket/:ticketId | GET         | Selecionar Ticket por id |
| http://localhost:3000/tickets/inserir/movie/:movieId/                   | POST        | Criar Movie              |

```json
{
  "seat": "B2",
  "amount": 20.45
}
```
