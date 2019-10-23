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
        {/* this is basically saying, link to the [id] file, but make the path the same as the prop id below */}
        <Link href="p/[id]" as={`/p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);
export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <PostLink id="hello-nextjs" />
                <PostLink id="learn-nextjs" />
                <PostLink id="deploy-nextjs" />
            </ul>
        </Layout>
    );
}