

## Descrição

O **Mobauto** e uma aplicação para venda e locação de automóveis.





## Primeiros passos



### - Rodando SQl

:open_file_folder:  `project/veiculos-api/migration/sql_001.sql`


:open_file_folder:  `project/veiculos-api/migration/sql_002.sql`



### - Modificação de conexão do banco de dados.

Para conseguir conectar ao banco de dados e necessário modificar o arquivo **.env**

:open_file_folder:  `project/veiculos-api/.env`

```bash
GOOGLE_CLOUD_STORAGE_CLIENT_EMAIL =
GOOGLE_CLOUD_STORAGE_PRIVATE_KEY = 
GOOGLE_CLOUD_STORAGE_PROJECT_ID = 
GOOGLE_CLOUD_STORAGE_STORAGE_BUCKET = 

HOST_DEV='localhost'
PORT_DEV=5432
USERNAME_DEV='postgres'
PASSWORD_DEV=''
DATABASE_DEV=''
DATABASE_SCHEMA_DEV=''
DATABASETYPE_DEV='postgres'

HOST_PRD=''
PORT_PRD=
USERNAME_PRD=''
PASSWORD_PRD=''
DATABASE_PRD=''
DATABASE_SCHEMA_PRD=''
DATABASETYPE_PRD=''

SALTORROUNDS=10
NODE_ENV='development'
SECRET='secretKey'
EXPIRESIN='1s'
```


### - Instalando dependências 

```bash
$ npm install
```

### - Rodando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

