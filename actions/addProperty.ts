"use server";

import connectDB from "@/DB/connectDB";
import { Properties } from "@/DB/models/properties";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function addProperty(formData: FormData) {
    const ownerName = formData.get("ownerName");
    const ownerEmail = formData.get("ownerEmail");
    const place = formData.get("place");
    const area = formData.get("area");
    const rooms = Number(formData.get("rooms"));
    const bathrooms = Number(formData.get("bathrooms"));
    const colleges = formData
        .get("colleges")
        ?.toString()
        .split(",") as string[];
    const hospitals = formData.get("hospitals")?.toString().split(",");

    try {
        await connectDB();
        await Properties.create({
            ownerName,
            ownerEmail,
            place,
            area,
            rooms,
            bathrooms,
            collegesNearby: colleges,
            hospitalsNearby: hospitals,
        });

        revalidatePath("/", "layout");
    } catch (error) {
        console.log(error);
    }
    redirect("/");
}
