import Layout from "../../Layouts/Layout";
import { Head, useForm } from "@inertiajs/react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        name: "hoge" + Math.random(),
        email: "hoge" + Math.random() + "@example.com",
        password: "password",
        avatar: "",
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
                <form onSubmit={onSubmit} encType="multipart/form-data">
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
                    <div>
                        <label htmlFor="avatar">画像:</label>
                        <input
                            type="file"
                            onChange={(e) =>
                                setData("avatar", e.target.files[0])
                            }
                        />

                        {/*
                        複数ファイルの時はこう書く
                        <input
                            type="file"
                            multiple // 複数ファイル選択を可能にする
                            onChange={(e) =>
                                setData("avatar", Array.from(e.target.files)) // すべてのファイルを配列として取得
                            }
                        />
                        */}
                        {errors.avatar && <div>{errors.avatar}</div>}
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
