import mongoose from 'mongoose';

export let isMongoConnected = false;

export const connectDB = async () => {
  const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/prateek_portfolio';

  try {
    mongoose.set('strictQuery', false);
    const conn = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 2500, // Quick timeout to prevent blocking startup if MongoDB isn't running locally
    });

    isMongoConnected = true;
    console.log(`[MongoDB] Connected successfully to host: ${conn.connection.host}`);
  } catch (error) {
    isMongoConnected = false;
    console.warn(`[MongoDB Notice] Could not connect to MongoDB at ${mongoUri}.`);
    console.warn(`[Fallback Active] Server will operate seamlessly using structured persistent JSON storage for contact requests.`);
    console.warn(`(To connect MongoDB Atlas, simply provide MONGODB_URI in server/.env)`);
  }
};
