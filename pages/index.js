import Layout from "../comps/MyLayout";
import Link from "next/link";
// import pageLayout from "../comps/MyLayout";
// import contentLayout from "../comps/MyLayout";

// Method #1 - using props.children
// export default function Index() {
//     return (
//         <Layout>
//             <p>Hello Next.js</p>
//         </Layout>
//     )
// };

// Method #2 - Layout as a Higher Order Component
// const Page = () => <p>Hello Next.js</p>;
// export default pageLayout(Page);

// Method #3 - Page content as a prop
// const indexPageContent = <p>Hello Next.js</p>;

// export default function Index() {
//     return <Layout content={indexPageContent} />
// }


const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);
export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink title="Hello Next.js" />
                <PostLink title="Learning Next.js is Awesome" />
                <PostLink title="Deploy Apps with Zeit" />
            </ul>
        </Layout>
    );
}