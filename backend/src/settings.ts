export const settings = {
    MONGO_URI:
        process.env.mongoURI ||
        // 'mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.2',
        'mongodb://host.docker.internal:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.5.2',
    JWT_SECRET: process.env.JWT_SECRET || '123'
};
