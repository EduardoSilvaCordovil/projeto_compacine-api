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

## Passo 1 - Instalando as depedências
Abra o terminal e navegue até a pasta do seu projeto. Depois, digite:

```bash
npm install
```

## Passo 2 - Iniciando o Docker
```bash
docker start containercompacine
```

## Passo 3 - Iniciando a aplicação
Para iniciar a aplicação, digite:

```bash
nodemon src/app.js
```

## Testando via Postman/Insomnia:
## Rota Movie

| Rota | HTTP(verbo) | Descrição |
| -------- | ----- | ----------- |
| http://localhost:3000/movies/ | GET | Selecionar Todos |
| http://localhost:3000/movies/ | POST | Criar Movie |
| http://localhost:3000/movies/id | GET | Selecionar por Id |
| http://localhost:3000/movies/id | PUT | Atualizar por Id  |
| http://localhost:3000/movies/id | DELETE | Excluir por Id |

```json
{
  "image_url": "https://www.example.com/movie.jpg",
  "name": "The Movie Title",
  "plot": "A brief description of the movie plot.",
  "actors": [
    "Actor 1",
    "Actor 2"
  ],
  "genre": "Action",
  "session": {
    "capacity": 100,
    "time": "20:00",
    "room": "Theater 1",
    "tickets": [
      {
        "seat": 1,
        "price": 15.00
      },
      {
        "seat": 5,
        "price": 12.50
      }
    ]
  }
}
```

## Rota Ticket

| Rota | HTTP(verbo) | Descrição |
| -------- | ----- | ----------- |
| http://localhost:3000/ticket/ | GET | Selecionar Todos |
| http://localhost:3000/ticket/ | POST | Criar Movie |
| http://localhost:3000/ticket/id | GET | Selecionar por Id |
| http://localhost:3000/ticket/id | PUT | Atualizar por Id  |
| http://localhost:3000/ticket/id | DELETE | Excluir por Id |
```json
{
 "seat": "B2",
 "amount": 20.45,
 "session": 
}
```
