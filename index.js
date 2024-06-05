const ConnectDB = require("./database/ConnectDB");
const dotenv = require("dotenv");
const server = require("./socket");

/* MONGO SETUP */
ConnectDB();

/* SERVER SETUP */
dotenv.config();
const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});
