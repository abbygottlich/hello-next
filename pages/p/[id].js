import { useRouter } from 'next/router';
import Layout from '../../comps/MyLayout';

export default function Post() {
    const router = useRouter();

    return (
        <Layout>
            {/* displaying whatever the url was set to as the h1 */}
            <h1>{router.query.id}</h1>
            <p>This is the blog post content.</p>
        </Layout>
    );
}