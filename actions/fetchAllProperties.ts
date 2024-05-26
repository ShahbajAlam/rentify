"use server";

import connectDB from "@/DB/connectDB";
import { Properties } from "@/DB/models/properties";

export default async function fetchAllProperties() {
    try {
        await connectDB();
        const data = await Properties.find({});
        return data;
    } catch (error) {
        console.log(error);
    }
}
