import mongoose from "mongoose";

const uri = process.env.MONGODB_URL;
let mongodbConnected

if (!uri) {
    throw new Error("Please add mongodb uri to .env.local");
}
const connectDB = async () => {
    try {
        if (mongodbConnected) {
            return { mongodbConnected }
        }
        mongodbConnected = await mongoose.connect(uri);
        console.log('Connected to MongoDB');
        return { mongodbConnected }
    } catch (error) {
        console.error('Failed to connect to MongoDB', error);
    }
};
export default connectDB;