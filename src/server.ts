 
import mongoose from "mongoose"
import app from "./index.js";

main().catch(err => console.log(err));
 
async function main() {
  await mongoose.connect(process.env.DATABASE_URL as string);
  console.log("MongoDB Connected Successfully!");
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
  
}