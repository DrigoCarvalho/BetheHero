const express = require('express');
const cors = require('cors');
const routes = require('./routes');


/**
 * "./" pq é um arquivo e não um pacote
 */

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
 * Rota / Recurso (relacionado a tabelas)
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do backend
 * POST: Criar uma informação do backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação no backend
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Serve para filtros,paginação)
  * Route Params: Parâmetros utilizados para identificar recursos  "/:id"
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos... como usuário
  */

  /**
   * SQL: MySQL, SQLite, PostgreeSQL,Oracle, Microsoft SQL server
   * NoSQL: MongoDB, CouchDB, etc
   */

   /**
    * Driver: SELECT * FROM users
    * Query builder (knex): table('users').select('*').where()
    */

    /**
     * npm é pra instalar e npx é para executar
     */




