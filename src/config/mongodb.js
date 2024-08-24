import mongoose from "mongoose";

// const MONGODB_CONNECTION_STRING = 'mongodb+srv://santokhan:726865426@cluster0.eau2v.mongodb.net/test-auth?retryWrites=true&w=majority&appName=Cluster0'
const MONGODB_CONNECTION_STRING = 'mongodb://localhost:27017/test-auth'

/**
 * Connects to the MongoDB database and initializes the server.
 * The function will wait until the connection is established before proceeding.
 * 
 * @async
 * @function connectMongo
 * @returns {Promise<void>} Resolves when the connection to MongoDB is established and server is started.
 * @throws Will throw an error if the connection to MongoDB fails.
 */
async function connectMongo() {
    return mongoose.connect(MONGODB_CONNECTION_STRING)
}

export default connectMongo;