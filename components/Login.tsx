"use client";

import { LoginLink } from "@kinde-oss/kinde-auth-nextjs";

function Login() {
    return (
        <LoginLink>
            <button className="btn text-md font-bold">Log in / Sign up</button>
        </LoginLink>
    );
}

export default Login;
