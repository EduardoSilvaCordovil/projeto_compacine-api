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
| /movies/ | GET | Selecionar Todos |
| /movies/ | POST | Criar Movie |
| /movies/:id | GET | Selecionar por Id |
| /movies/:id | PUT | Atualizar por Id  |
| /movies/:id | DELETE | Excluir por Id |

```json
{
    "image_url": "url_1",
    "name": "filme 1",
    "plot": "descricao do filme",
    "actors": [
        "Fulano"
    ],
    "genre": "Ação",
    "_id": "6619805d6f1167b3becf92a7",
    "sessions": [ {
        "room": "B",
        "seat": "A",
        "price": 23.50
}]
}
```

## Rota Session

| Rota | HTTP(verbo) | Descrição |
| -------- | ----- | ----------- |
| /session/ | GET | Selecionar Todos |
| /session/ | POST | Criar Session |
| /session/:id | GET | Selecionar por Id |
| /session/:id | PUT | Atualizar por Id  |
| /session/:id | DELETE | Excluir por Id |

```json
{
 "capacity": 80,
 "schedule": "1994-11-05T08:15:30-05:00",
 "room": "A"
}
```

## Rota Ticket

| Rota | HTTP(verbo) | Descrição |
| -------- | ----- | ----------- |
| /ticket/ | GET | Selecionar Todos |
| /ticket/ | POST | Criar Ticket |

```json
{
 "seat": "B2",
 "amount": 20.45,
 "session": 
}
```
