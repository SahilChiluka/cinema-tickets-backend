const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const movie_routes = require("./routes/moviesRoutes");

const user_routes = require('./routes/usersRoutes');

const ticket_routes = require('./routes/ticketRoutes');

const log_routes = require('./routes/logRoutes');
 
const connectDB = require("./db/connect");

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/movies", movie_routes);

app.use("/users", user_routes);

app.use("/tickets",ticket_routes);

app.use("/logs", log_routes);

const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server listenting on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();