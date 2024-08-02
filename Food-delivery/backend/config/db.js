import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://jeet15083011:MbCFcvC9hDycq3Hm@cluster0.snlxspn.mongodb.net/food-delivery"
    )
    .then(() => {
      console.log("DB Connected");
    });
};
