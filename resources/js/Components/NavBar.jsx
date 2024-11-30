import { useEffect } from "react";
import { Link, usePage } from "@inertiajs/react";
import "./NavBar.css";

const NavBar = () => {
    const { url, component } = usePage();
    useEffect(() => {
        console.log("Mount NavBar");
        return () => {
            console.log("UnMount NavBar");
        };
    }, []);
    return (
        <>
            <div>URL : {url}</div>
            <div>Component : {component}</div>
            <nav>
                <ul className="menu">
                    <li>
                        <Link
                            href={route("welcome")}
                            className={url === "/" ? "active" : ""}
                        >
                            Welcome
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("about")}
                            className={url === "/about" ? "active" : ""}
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            href={route("user.index")}
                            className={url.startsWith("/user") ? "active" : ""}
                        >
                            User
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
