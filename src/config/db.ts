import mongoose from 'mongoose'

// const mongoUrl = "mongodb://127.0.0.1:27017/azScrap?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.8.2";

const mongoUrl = "mongodb+srv://hmmmzaDev:hmmmzaDev@testdb.i7mb2.mongodb.net/azScrap"

export async function connectToDatabase() {
    try {
        await mongoose.connect(mongoUrl);
        console.log('Connected to the database!');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
}
