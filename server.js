const app = require("./app");
const dbConnect = require("./src/db/connect");

async function main() {
  console.log("Please wait db is connecting ...");
  const PORT = process.env.PORT || 8000;

  try {
    await dbConnect();

    app.listen(PORT, () => {
      console.log(`App is listening on the port ${PORT} ..`);
    });
  } catch (err) {
    console.log("Error while connecting to database.", err);
  }
}

main();
