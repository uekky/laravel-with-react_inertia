import { Head } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

const About = () => {
    return (
        <>
            <Head>
                <title>Aboutページ</title>
                <meta
                    head-key="description"
                    name="description"
                    content="これはAboutページです"
                />
                <meta
                    head-key="keywords"
                    name="keywords"
                    content="About,ページ,説明文"
                />
            </Head>
            <h1>About</h1>
        </>
    );
};

About.layout = (page) => <Layout>{page}</Layout>;

export default About;
