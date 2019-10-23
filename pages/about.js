import Layout from "../comps/MyLayout";
import withLayout from "../comps/MyLayout";

// Method #1
// export default function About() {
//     return (
//         <Layout>
//             <p>This is the about page</p>
//         </Layout>
//     );
// }

// Method #2
const Page = () => <p>This is the about page</p>;
export default withLayout(Page);