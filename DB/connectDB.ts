import mongoose from "mongoose";

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI as string, {
            dbName: "rentify",
        });
    } catch (error) {
        console.log(error);
    }
}
