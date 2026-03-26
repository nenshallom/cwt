import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const mongooseUri = process.env.MONGOOSE_URI;
        if (!mongooseUri) {
            throw new Error('MONGOOSE_URI environment variable is not set');
        }

        if (mongoose.connection.readyState === 0) {
            await mongoose.connect(mongooseUri);
            console.log('db connected');
        }
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

export default connectDB;
