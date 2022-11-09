const express = require('express')
const { MongoClient } = require('mongodb')
const cors = require('cors')
const app = express()
const port = 5000
// middleware
app.use(cors())
app.use(express.json())
// Travelling-for-5th-semester
// 5sKtWuV26DLJDsvV

const uri =
  'mongodb+srv://Travelling-for-5th-semester:5sKtWuV26DLJDsvV@cluster0.9s2cu.mongodb.net/?retryWrites=true&w=majority'
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

async function run() {
  try {
    await client.connect()
    const database = client.db('5th-Travelling')
    const serviceCollection = database.collection('services')
    console.log('database connected')

    // send services to the database
    app.post('/services', async (req, res) => {
      const service = req.body
      const result = await serviceCollection.insertOne(service)
      console.log(result)
      res.json(result)
    })
  } finally {
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Traveling is run on port ${port}`)
})
