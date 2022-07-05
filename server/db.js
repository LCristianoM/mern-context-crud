import mongoose from "mongoose";

export async function connectDB() {
  try {
    const db = await mongoose.connect("mongod://localhost/postsdb");
    console.log('connect OKAY to --> ', db.connection.name);
  } catch (error) {
    console.log(error);
  }
}
