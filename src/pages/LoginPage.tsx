import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";
import { Button } from "~/components";
import { signInWithGoogle, getUsers } from "~/services/Firebase";

const LoginPage = () => {
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <MainLayout>
            <div className="bg-[#1a1a21] px-[150px] py-[100px] rounded-[20px]">
                <Button onClick={signInWithGoogle}>Login</Button>
            </div>
        </MainLayout>
    );
};

export default LoginPage;
