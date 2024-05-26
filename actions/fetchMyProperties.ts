"use server";

import connectDB from "@/DB/connectDB";
import { Properties } from "@/DB/models/properties";

export default async function fetchMyProperties(email: string) {
    try {
        await connectDB();
        const data = await Properties.find({ ownerEmail: email });
        return data;
    } catch (error) {
        console.log(error);
    }
}
