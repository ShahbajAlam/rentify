"use client";

import deleteProperty from "@/actions/deleteProperty";
import { Edit, HeartIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Alert from "./Alert";

export type PropertiesProps = {
    _id: any;
    ownerName: string;
    ownerEmail: string;
    place: string;
    area: string;
    rooms: number;
    bathrooms: number;
    collegesNearby: string[];
    hospitalsNearby: string[];
};

function ShowProperties({ data, isMine }: { data: string; isMine?: boolean }) {
    const PER_PAGE = 6;
    const allProperties = JSON.parse(data) as PropertiesProps[];
    const firstPage = 1;
    const lastPage = Math.ceil(allProperties.length / PER_PAGE);
    const [page, setPage] = useState(1);
    const [sellerInfo, setSellerInfo] = useState({
        name: "",
        email: "",
    });
    const [showSellerInfo, setShowSellerInfo] = useState(false);

    const properties = allProperties.slice(
        (page - 1) * PER_PAGE,
        page * PER_PAGE
    );

    const handlePrev = () => {
        if (page === firstPage) return;
        setPage((i) => i - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNext = () => {
        if (page === lastPage) return;
        setPage((i) => i + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            <div className="grid grid-cols-1 gap-5 w-full  mx-auto my-5 p-4 lg:grid-cols-2 lg:max-w-[900px] lg:px-0">
                {properties.map((item) => (
                    <div
                        key={item._id}
                        className="bg-cyan-100 p-5 rounded-lg flex flex-col justify-between border-2 border-cyan-200"
                    >
                        <h1>Name : {item.place}</h1>
                        <h2>Area : {item.area}</h2>
                        <h2>Number of rooms : {item.rooms}</h2>
                        <h2>Number of bathrooms: {item.bathrooms}</h2>

                        <h2>Colleges nearby : </h2>
                        <div className="flex gap-3 flex-wrap">
                            {item.collegesNearby.map((i) => (
                                <span key={i}>{i}</span>
                            ))}
                        </div>

                        <h2>Hospitals nearby : </h2>
                        <div className="flex gap-3 flex-wrap">
                            {item.hospitalsNearby.map((i) => (
                                <span key={i}>{i}</span>
                            ))}
                        </div>

                        {isMine && (
                            <div className="flex justify-between items-center mt-4">
                                <Link href={`/${item._id}`}>
                                    <Edit />
                                </Link>

                                <Trash2Icon
                                    role="button"
                                    onClick={() => deleteProperty(item._id)}
                                />
                            </div>
                        )}

                        {!isMine && (
                            <button
                                className="flex justify-end items-center gap-1 mt-4"
                                onClick={() => {
                                    setSellerInfo({
                                        name: item.ownerName,
                                        email: item.ownerEmail,
                                    });
                                    setShowSellerInfo(true);
                                }}
                            >
                                <HeartIcon />
                                <p>I am interested</p>
                            </button>
                        )}
                    </div>
                ))}
            </div>

            {allProperties.length > PER_PAGE && (
                <div className="w-[50%] mx-auto flex justify-center items-center mb-6">
                    <div className="join">
                        <button
                            className="join-item btn"
                            onClick={handlePrev}
                            disabled={page === firstPage}
                        >
                            «
                        </button>
                        <button className="join-item text-lg btn px-4">
                            Page {page}
                        </button>
                        <button
                            className="join-item btn"
                            onClick={handleNext}
                            disabled={page === lastPage}
                        >
                            »
                        </button>
                    </div>
                </div>
            )}

            {showSellerInfo && (
                <>
                    <Alert
                        sellerInfo={sellerInfo}
                        setSellerInfo={setSellerInfo}
                        setShowSellerInfo={setShowSellerInfo}
                    />
                </>
            )}
        </>
    );
}

export default ShowProperties;
