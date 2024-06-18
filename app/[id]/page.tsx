import fetchProperty from "@/actions/fetchProperty";
import updateProperty from "@/actions/updateProperty";
import { PropertiesProps } from "@/components/ShowProperties";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
    const _id = params.id;
    const { isAuthenticated } = getKindeServerSession();

    if (!(await isAuthenticated())) redirect("/api/auth/login");

    const property = (await fetchProperty(_id)) as PropertiesProps;

    return (
        <form
            action={updateProperty}
            className="w-full mx-auto p-5 flex flex-col gap-4 lg:w-[50%]"
        >
            <input type="text" hidden readOnly name="id" value={property._id} />

            <div className="flex flex-col gap-2">
                <label htmlFor="place">Name of the property</label>
                <input
                    type="text"
                    id="place"
                    name="place"
                    required
                    defaultValue={property.place}
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="area">Area of the property</label>
                <input
                    type="text"
                    id="area"
                    required
                    name="area"
                    defaultValue={property.area}
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="rooms">Number of rooms</label>
                <input
                    type="number"
                    id="rooms"
                    name="rooms"
                    min={0}
                    required
                    defaultValue={property.rooms}
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="bathrooms">Number of bathrooms</label>
                <input
                    type="number"
                    min={0}
                    required
                    id="bathrooms"
                    name="bathrooms"
                    defaultValue={property.bathrooms}
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="colleges">
                    Colleges nearby (Must be comma separated)
                </label>
                <input
                    type="text"
                    id="colleges"
                    name="colleges"
                    defaultValue={property.collegesNearby.join(",")}
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="hospitals">
                    Hospitals nearby (Must be comma separated)
                </label>
                <input
                    type="text"
                    id="hospitals"
                    name="hospitals"
                    defaultValue={property.hospitalsNearby.join(",")}
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <button type="submit" className="btn btn-accent">
                Update Property
            </button>
        </form>
    );
}
