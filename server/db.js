const MongoClient = require('mongodb').MongoClient;
const sanitize = require('mongo-sanitize');

const url = process.env.MONGO_ENDPOINT
const options = {
  auth: {
    user: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD
  },
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const DB = {
  find: async (condition, projection) => {
    const client = MongoClient(url, options);
    try {
      await client.connect();
      const db = client.db('templates');

      return await db.collection('customers').find(
        condition,
        { projection: projection }
      ).toArray();
    } finally {
      if (client) client.close();
    }
  },
  update: async (condition, updating) => {
    const client = MongoClient(url, options);
    try {
      await client.connect();
      const db = client.db('templates');

      return await db.collection('customers').updateOne(
        condition,
        { $set: updating }
      );
    } finally {
      if (client) client.close();
    }
  },
  insert: async adding => {
    const client = MongoClient(url, options);
    try {
      await client.connect();
      const db = client.db('templates');

      return await db.collection('customers').insertOne(adding);
    } finally {
      if (client) client.close();
    }
  },
  delete: async condition => {
    const client = MongoClient(url, options);
    try {
      await client.connect();
      const db = client.db('templates');

      return await db.collection('customers').deleteOne(condition);
    } finally {
      if (client) client.close();
    }
  }
}

module.exports.DB = DB;
