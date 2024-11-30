import Layout from "../../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: "",
        email: "",
        password: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        post("/user");
    }

    return (
        <>
            <Head title="ユーザの登録"></Head>
            <h1>ユーザの登録</h1>
            <div>
                <form onSubmit={onSubmit}>
                    <div>
                        <label htmlFor="name">名前:</label>
                        <input
                            id="name"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && <div>{errors.name}</div>}
                    </div>

                    <div>
                        <label htmlFor="email">メールアドレス:</label>
                        <input
                            id="email"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && <div>{errors.email}</div>}
                    </div>

                    <div>
                        <label htmlFor="password">パスワード:</label>
                        <input
                            id="password"
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            type="password"
                        />
                        {errors.password && <div>{errors.password}</div>}
                    </div>
                    <button type="submit" disabled={processing}>
                        {processing ? "登録中..." : "登録"}
                    </button>
                </form>
            </div>
        </>
    );
};

Create.layout = (page) => <Layout children={page} />;

export default Create;
