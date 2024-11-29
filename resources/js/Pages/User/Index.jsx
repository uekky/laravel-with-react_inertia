import NavBar from "../../Components/NavBar";
import PropTypes from "prop-types";

const Index = (props) => {
    return (
        <>
            <NavBar />
            <h1>ユーザ一覧</h1>
            <ul>
                {props.users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </>
    );
};

Index.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Index;
