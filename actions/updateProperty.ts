"use server";

import connectDB from "@/DB/connectDB";
import { Properties } from "@/DB/models/properties";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function updateProperty(formData: FormData) {
    const _id = formData.get("id");
    const place = formData.get("place");
    const area = formData.get("area");
    const rooms = formData.get("rooms");
    const bathrooms = formData.get("bathrooms");
    const colleges = formData
        .get("colleges")
        ?.toString()
        .split(",") as string[];
    const hospitals = formData.get("hospitals")?.toString().split(",");

    try {
        await connectDB();
        await Properties.findByIdAndUpdate(_id, {
            $set: {
                place,
                area,
                rooms,
                bathrooms,
                collegesNearby: colleges,
                hospitalsNearby: hospitals,
            },
        });
        revalidatePath("/", "layout");
    } catch (error) {
        console.log(error);
    }
    redirect("/my-properties");
}
