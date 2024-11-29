import { useEffect } from "react";
import { Link } from "@inertiajs/react";
import NavBar from "../Components/NavBar";

const Welcome = ({ greeting }) => {
    useEffect(() => {
        console.log("Welcome Page mounted");
    }, []);

    return (
        <>
            <NavBar />
            <h1>{greeting} Inertia.js</h1>
        </>
    );
};

export default Welcome;
