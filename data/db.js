import { Pool, Client } from 'pg';
const connectionString = 'postgres://seyusuvj:hiS7SuLFjBIvEedqXR8NMk4hVXXHsaRP@elmer.db.elephantsql.com:5432/seyusuvj'

const pool = new Pool({
  connectionString: connectionString,
})

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})

const client = new Client({
  connectionString: connectionString,
})
client.connect()

client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})


import './tool';
import './toolData';
import './co';
import './subjectData';
import './subject';
import './user';
