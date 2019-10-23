import { useRouter } from 'next/router';
import Layout from '../comps/MyLayout';

const Page = () => {
    const router = useRouter();

    // index.js is what's giving each post a specific title
    // this file is rendering the page based on what that title is
    return (
        <Layout>
            <h1>{router.query.title}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
};

export default Page;