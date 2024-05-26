"use client";

import { KindeUser } from "@kinde-oss/kinde-auth-nextjs/types";
import { Dispatch, SetStateAction } from "react";

function Alert({
    sellerInfo,
    setSellerInfo,
    setShowSellerInfo,
}: {
    sellerInfo: { name: string; email: string };
    setSellerInfo: Dispatch<SetStateAction<{ name: string; email: string }>>;
    setShowSellerInfo: Dispatch<SetStateAction<boolean>>;
}) {
    return (
        <div
            role="alert"
            className="alert shadow-lg fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-50 px-6 py-12 rounded-lg max-w-[500px] flex flex-col justify-between z-[100]"
        >
            <div>
                <h3 className="font-bold">
                    Name of the seller :{" "}
                    <span className="uppercase">{sellerInfo.name}</span>
                </h3>
                <h3 className="font-bold">
                    Email ID of the seller : {sellerInfo.email}
                </h3>
            </div>
            <button
                className="btn btn-sm px-10"
                onClick={() => {
                    setSellerInfo({
                        name: "",
                        email: "",
                    });
                    setShowSellerInfo(false);
                }}
            >
                OK
            </button>
        </div>
    );
}

export default Alert;
