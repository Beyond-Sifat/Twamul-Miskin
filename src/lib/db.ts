import mongoose from "mongoose";
// import dns from "node:dns";

// dns.setServers(["8.8.8.8", "1.1.1.1"]);
// import { setServers } from "node:dns";
// setServers(["8.8.8.8", "8.8.4.4"]);

type MongooseCache = {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
};

// Reuse one connection across hot reloads in dev
const g = globalThis as typeof globalThis & { mongooseCache?: MongooseCache };
const cache: MongooseCache = (g.mongooseCache ??= { conn: null, promise: null });

export async function connectDB() {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI is missing in .env.local");

    if (cache.conn) return cache.conn;

    try {
        cache.promise ??= mongoose.connect(uri, { bufferCommands: false });
        cache.conn = await cache.promise;
    } catch (error) {
        cache.promise = null; // allow retry on next request
        throw error;
    }
    return cache.conn;
}







// import mongoose from "mongoose";

// type MongooseCache = {
//     conn: typeof mongoose | null;
//     promise: Promise<typeof mongoose> | null;
// };

// // Reuse the connection across development hot reloads.
// const g = globalThis as typeof globalThis & {
//     mongooseCache?: MongooseCache;
// };

// const cache: MongooseCache = (g.mongooseCache ??= {
//     conn: null,
//     promise: null,
// });

// export async function connectDB() {
//     const uri = process.env.MONGODB_URI;

//     if (!uri) {
//         throw new Error("MONGODB_URI is missing in .env.local");
//     }

//     if (cache.conn) {
//         return cache.conn;
//     }

//     if (!cache.promise) {
//         cache.promise = mongoose.connect(uri, {
//             bufferCommands: false,
//         });
//     }

//     try {
//         cache.conn = await cache.promise;
//     } catch (error) {
//         cache.promise = null;
//         throw error;
//     }

//     return cache.conn;
// }
