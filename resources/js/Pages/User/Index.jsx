import PropTypes from "prop-types";
import Layout from "../../Layouts/Layout";

const Index = (props) => {
    return (
        <>
            <h1>ユーザ一覧</h1>
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
