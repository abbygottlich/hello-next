import Layout from "../comps/MyLayout";
import withLayout from "../comps/MyLayout";

// Method #1
// export default function Index() {
//     return (
//         <Layout>
//             <p>Hello Next.js</p>
//         </Layout>
//     )
// };

// Method #2
const Page = () => <p>Hello Next.js</p>;
export default withLayout(Page);