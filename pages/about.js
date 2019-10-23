import Layout from "../comps/MyLayout";
import pageLayout from "../comps/MyLayout";
import contentLayout from "../comps/MyLayout";

// Method #1 - using props.children
export default function About() {
    return (
        <Layout>
            <p>This is the about page</p>
        </Layout>
    );
}

// Method #2 - Layout as a Higher Order Component
// const Page = () => <p>This is the about page</p>;
// export default pageLayout(Page);

// Method #3 - Page content as a prop
// const aboutPageContent = <p>This is the about page</p>

// export default function About() {
//     return <Layout content={aboutPageContent} />
// }