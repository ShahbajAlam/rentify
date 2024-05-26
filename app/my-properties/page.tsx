import fetchMyProperties from "@/actions/fetchMyProperties";
import ShowProperties from "@/components/ShowProperties";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { redirect } from "next/navigation";

export default async function Page() {
    const { isAuthenticated, getUser } = getKindeServerSession();

    if (!(await isAuthenticated())) redirect("/api/auth/login");
    const user = await getUser();

    const myProperties = await fetchMyProperties(user?.email as string);

    return <ShowProperties data={JSON.stringify(myProperties)} isMine={true} />;
}
