import { useEffect } from "react";
import Layout from "../Layouts/Layout";

const Welcome = ({ greeting }) => {
    useEffect(() => {
        console.log("Welcome Page mounted");
    }, []);

    return (
        <Layout>
            <h1>{greeting} Inertia.js</h1>
        </Layout>
    );
};

export default Welcome;
