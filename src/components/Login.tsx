import React, { useState, useEffect } from "react";
import { signInWithGoogle } from "../services/Firebase";
import { Button } from "../components";

const Login = () => {
    const [dataUser, setDataUser] = useState();
    useEffect(() => {
        signInWithGoogle();
    });
    return <Button onClick={signInWithGoogle}>Login</Button>;
};

export default Login;
