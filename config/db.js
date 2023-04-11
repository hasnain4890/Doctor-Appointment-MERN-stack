import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`mongoDb connected...`);
    console.log(`mongoDb connected 2...`);
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
