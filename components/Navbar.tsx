import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Login from "./Login";
import UserInfo from "./UserInfo";

async function Navbar() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isAuth = await isAuthenticated();
    const user = await getUser();

    return (
        <nav className="flex w-full max-w-[900px] p-4 justify-between items-center mx-auto bg-green-300 rounded-md">
            <Link href="/">
                <h1 className="font-bold text-3xl">Rentify</h1>
            </Link>
            {isAuth && <UserInfo user={user} />}
            {!isAuth && <Login />}
        </nav>
    );
}

export default Navbar;
