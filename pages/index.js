import Layout from "../comps/MyLayout";
import pageLayout from "../comps/MyLayout";
import contentLayout from "../comps/MyLayout"

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
const indexPageContent = <p>Hello Next.js</p>;

export default function Index() {
    return <Layout content={indexPageContent} />
}