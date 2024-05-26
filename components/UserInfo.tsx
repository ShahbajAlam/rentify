"use client";

import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import Link from "next/link";

function UserInfo({ user }: { user: KindeUser | null }) {
    return (
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn px-4 py-2">
                <h1 className="text-xl font-bold">{user?.given_name}</h1>
            </div>
            <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <Link href="/add-property">Add Property</Link>
                </li>
                <li>
                    <Link href="/my-properties">My Properties</Link>
                </li>
                <li>
                    <LogoutLink>Log out</LogoutLink>
                </li>
            </ul>
        </div>
    );
}

export default UserInfo;
