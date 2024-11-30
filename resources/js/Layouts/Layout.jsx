import { useEffect } from "react";
import { Head } from "@inertiajs/react";
import NavBar from "../Components/NavBar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
    useEffect(() => {
        console.log("Mount Layout");
        return () => {
            console.log("UnMount Layout");
        };
    }, []);

    return (
        <>
            <Head>
                <title>My App</title>
                <meta
                    head-key="description"
                    name="description"
                    content="これはMy Appです"
                />
                <meta
                    head-key="keywords"
                    name="keywords"
                    content="My App,説明文"
                />
            </Head>
            <header>
                <h1 style={{ textAlign: "center" }}>Logo</h1>
                <NavBar />
            </header>
            {children}
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
