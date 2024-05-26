import { Schema, model, models } from "mongoose";

const PropertiesSchema = new Schema(
    {
        ownerName: String,
        ownerEmail: String,
        place: String,
        area: String,
        rooms: Number,
        bathrooms: Number,
        collegesNearby: [String],
        hospitalsNearby: [String],
    },
    { timestamps: true }
);

const Properties = models.properties || model("properties", PropertiesSchema);

export { Properties };
