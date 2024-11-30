import { useState } from "react";
import Layout from "../../Layouts/Layout";
import { router, Head } from "@inertiajs/react";
import PropTypes from "prop-types";

const Create = ({ errors }) => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        router.post("/user", values, { errorBag: "createUser" });
    }

    return (
        <>
            <Head title="ユーザの登録"></Head>
            <h1>ユーザの登録</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">名前:</label>
                        <input
                            id="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                        {errors.createUser && errors.createUser.name && (
                            <p>{errors.createUser.name}</p>
                        )}
                    </div>
                    <div>
                        <label htmlFor="email">メールアドレス:</label>
                        <input
                            id="email"
                            value={values.email}
                            onChange={handleChange}
                        />
                        {errors.createUser && errors.createUser.email && (
                            <p>{errors.createUser.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password">パスワード:</label>
                        <input
                            id="password"
                            value={values.password}
                            onChange={handleChange}
                            type="password"
                        />
                        {errors.createUser && errors.createUser.password && (
                            <p>{errors.createUser.password}</p>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </>
    );
};

Create.layout = (page) => <Layout>{page}</Layout>;

Create.propTypes = {
    errors: PropTypes.object,
};

export default Create;
