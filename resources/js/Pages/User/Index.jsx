import PropTypes from "prop-types";
import { Head, Link, usePage } from "@inertiajs/react";
import Layout from "../../Layouts/Layout";

const Index = (props) => {
    const { flash } = usePage().props;

    return (
        <>
            <Head title="ユーザ一覧ページ" />
            <h1>ユーザ一覧</h1>
            {flash.message && (
                <div style={{ color: "red", fontWeight: "bold" }}>
                    {flash.message}
                </div>
            )}
            <div>
                <Link href={route("user.create")} as="button" type="button">
                    ユーザ登録
                </Link>
            </div>
            <ul>
                {props.users.map((user) => (
                    <li
                        key={user.id}
                        style={{ display: "flex", alignItems: "center" }}
                    >
                        {user.avatar_file_path && (
                            <img
                                src={user.avatar_file_path}
                                style={{ width: "30px" }}
                            />
                        )}
                        <span>{user.name}</span>
                    </li>
                ))}
            </ul>
        </>
    );
};

Index.layout = (page) => <Layout>{page}</Layout>;

Index.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Index;
