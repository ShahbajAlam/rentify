"use server";

import connectDB from "@/DB/connectDB";
import { Properties } from "@/DB/models/properties";

export default async function fetchProperty(_id: any) {
    try {
        await connectDB();
        const data = Properties.findById(_id);
        return data;
    } catch (error) {
        console.log(error);
    }
}
