const {Client} = require('pg')



async function passQuery(query,params) {
  try {
    const client = new Client({
      host: "localhost",
      user: "postgres",
      port: 5432,
      password:"@24602",
      database: "Personal Finance App"
  
  
  })
  await client.connect()
  console.log('Connection to database successful')
  let results = await client.query(query,params)
  console.log('query successful')
  let data = results.rows
  
  await client.end()
  return data
  
   } 
  catch(error){
    throw error
  }
}

module.exports = passQuery