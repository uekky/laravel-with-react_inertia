import { Link } from "@inertiajs/react";

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href={route("welcome")}>Welcome</Link>
                </li>
                <li>
                    <Link href={route("about")}>About</Link>
                </li>
                <li>
                    <Link href={route("user")}>User</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
