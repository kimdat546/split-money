import React, { useState, useEffect } from "react";
import { signInWithGoogle } from "../services/Firebase";
const Login = () => {
    const [dataUser, setDataUser] = useState();
    useEffect(() => {
        signInWithGoogle();
    });
    return <button onClick={signInWithGoogle}>Login</button>;
};

export default Login;
