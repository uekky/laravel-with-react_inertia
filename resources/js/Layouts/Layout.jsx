import { useEffect } from "react";
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
