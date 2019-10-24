// import { useRouter } from 'next/router';
import Layout from '../../comps/MyLayout';
import fetch from 'isomorphic-unfetch';

// blog post code
// export default function Post() {
//     const router = useRouter();

//     return (
//         <Layout>
//             {/* displaying whatever the url was set to as the h1 */}
//             <h1>{router.query.id}</h1>
//             <p>This is the blog post content.</p>
//         </Layout>
//     );
// }

// batman shows code
const Post = props => (
    <Layout>
        <h1>{props.show.name}</h1>
        {/* the .replace stuff is replcaing the inline <p></p> tags with an empty string */}
        <p>{props.show.summary.replace(/<[/]?[pb]>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
);

Post.getInitialProps = async function(context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();

    // because this whole file is technically "nested" inside of a Link tag (in index.js),
    // this console log displays in the browser console only because we navigated to the post via the client side
    // when you click on a <Link> component, the page transition takes place in the browser without making a request to the server
    console.log(`Fetched show: ${show.name}`);
    // console.log(show);

    return { show };
};

export default Post;