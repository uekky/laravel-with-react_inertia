import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layouts/Layout";
import PropTypes from "prop-types";

const Welcome = ({ greeting }) => {
    useEffect(() => {
        console.log("Welcome Page mounted");
    }, []);

    return (
        <>
            <h1>{greeting} Inertia.js</h1>
        </>
    );
};

Welcome.layout = (page) => <Layout>{page}</Layout>;

Welcome.propTypes = {
    greeting: PropTypes.string.isRequired,
};

export default Welcome;
