import { Head, usePage } from "@inertiajs/react";
import Layout from "../Layouts/Layout";

const About = () => {
    const { appName } = usePage().props;
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
            <h1>About | {appName}</h1>
        </>
    );
};

About.layout = (page) => <Layout>{page}</Layout>;

export default About;
