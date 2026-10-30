
// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/db";

// // export const runtime = "nodejs";

// export async function GET() {
//     try {
//         const conn = await connectDB();

//         if (!conn.connection.db) {
//             throw new Error("MongoDB database is not available");
//         }

//         await conn.connection.db.admin().ping();

//         return NextResponse.json({
//             ok: true,
//             database: conn.connection.name,
//             message: "MongoDB connected",
//         });
//     } catch (error) {
//         console.error("[health]", error);

//         return NextResponse.json(
//             {
//                 ok: false,
//                 message: "Database connection failed",
//             },
//             { status: 500 }
//         );
//     }
// }




import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";

export async function GET() {
    try {
        const conn = await connectDB();
        await conn.connection.db!.admin().ping();

        return NextResponse.json({
            ok: true,
            database: conn.connection.name,
            message: "MongoDB connected",
        });
    } catch (error) {
        console.error("[health]", error);
        return NextResponse.json(
            { ok: false, message: error instanceof Error ? error.message : "Connection failed" },
            { status: 500 }
        );
    }
}




// import { NextResponse } from "next/server";
// import { connectDB } from "@/lib/mongodb";

// export const runtime = "nodejs";

// export async function GET() {
//   try {
//     await connectDB();

//     return NextResponse.json({
//       success: true,
//       message: "MongoDB connected successfully",
//     });
//   } catch (error) {
//     console.error("Database connection failed:", error);

//     return NextResponse.json(
//       {
//         success: false,
//         message: "Database connection failed",
//       },
//       { status: 500 }
//     );
//   }
// }