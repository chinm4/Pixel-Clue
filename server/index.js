const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');

const addImages = require('./scripts/seed.js');
const fetchImage = require('./routes/fetchImage.js');


dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};
async function run() {
  try {
    // Create a Mongoose client with a MongoClientOptions object to set the Stable API version
    await mongoose.connect(process.env.MONGO_URI, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    await addImages();
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}
run().catch(console.dir)

app.get('/', (req, res) => {
  res.send("Pixel Clue Backend is running!");
});

app.use('/api', fetchImage);

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
