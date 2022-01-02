const { MongoClient } = require("mongodb");

const url = process.env.MONGO_URI;
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    return "Koneksi Sukses ke server";
  } catch (error) {
    throw error;
  }
}

main()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
