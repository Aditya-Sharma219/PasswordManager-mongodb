const express = require('express');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// MongoDB Connection
const url = process.env.MONGODB_URI;
const dbName = 'passop';
const client = new MongoClient(url);
let db;

app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB once when the server starts
async function connectDB() {
    try {
        await client.connect();
        db = client.db(dbName);
        console.log('✅ Connected successfully to MongoDB');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
        process.exit(1);
    }
}

app.get('/', async (req, res) => {
    try {
        const passwords = await db.collection('passwords').find({}).toArray();
        res.json(passwords);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Insert/Update password
app.post('/', async (req, res) => {
    try {
        const { id, site, username, password } = req.body;

        if (!id || !site || !username || !password) {
            return res.status(400).json({ success: false, message: 'Invalid request body' });
        }

        const collection = db.collection('passwords');
        await collection.updateOne(
            { id }, 
            { $set: { site, username, password } }, 
            { upsert: true }
        );

        res.json({ success: true, message: 'Password saved' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Delete password by ID
app.delete('/', async (req, res) => {
    try {
        const { id } = req.params;
        const deleteResult = await db.collection('passwords').deleteOne({ id });

        if (deleteResult.deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'No matching document found' });
        }

        res.json({ success: true, message: 'Password deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

// Graceful shutdown - Close MongoDB connection when exiting
process.on('SIGINT', async () => {
    console.log('🔴 Closing MongoDB connection...');
    await client.close();
    process.exit(0);
});

// Start server after MongoDB connection
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`🚀 Server is running at http://localhost:${port}`);
    });
}).catch(console.error);
