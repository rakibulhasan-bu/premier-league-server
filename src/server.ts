// import mongoose from "mongoose";
// import config from "./app/config";
import app from "./app/app";

async function main() {
  try {
    // await mongoose.connect(config.database_url as string);
    app.listen(5000, () => {
      console.log(`Course review app is listening on port 3000`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
