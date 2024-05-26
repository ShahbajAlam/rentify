"use server";

import connectDB from "@/DB/connectDB";
import { Properties } from "@/DB/models/properties";
import { revalidatePath } from "next/cache";

export default async function deleteProperty(_id: any) {
    try {
        await connectDB();
        await Properties.findByIdAndDelete(_id);
        revalidatePath("/", "layout");
    } catch (error) {
        console.log(error);
    }
}
