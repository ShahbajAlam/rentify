import addProperty from "@/actions/addProperty";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
    const { isAuthenticated, getUser } = getKindeServerSession();

    if (!(await isAuthenticated())) redirect("/api/auth/login");
    const user = await getUser();
    const ownerName = `${user?.given_name} ${user?.family_name}`;

    return (
        <form
            action={addProperty}
            className="w-full mx-auto p-5 flex flex-col gap-4 lg:w-[50%]"
        >
            <input
                type="text"
                hidden
                readOnly
                name="ownerName"
                value={ownerName}
            />
            <input
                type="text"
                hidden
                readOnly
                name="ownerEmail"
                value={user?.email as string}
            />

            <div className="flex flex-col gap-2">
                <label htmlFor="place">Name of the property</label>
                <input
                    type="text"
                    id="place"
                    name="place"
                    required
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="area">Area of the property</label>
                <input
                    type="text"
                    id="area"
                    name="area"
                    required
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
                    className="input input-bordered input-primary w-full"
                />
            </div>

            <button type="submit" className="btn btn-accent">
                Add Property
            </button>
        </form>
    );
}
