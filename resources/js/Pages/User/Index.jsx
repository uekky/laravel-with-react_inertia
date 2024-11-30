import PropTypes from "prop-types";
import { Head, Link } from "@inertiajs/react";
import Layout from "../../Layouts/Layout";

const Index = (props) => {
    return (
        <>
            <Head title="ユーザ一覧ページ" />
            <h1>ユーザ一覧</h1>
            <div>
                <Link href={route("user.create")} as="button" type="button">
                    ユーザ登録
                </Link>
            </div>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
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
