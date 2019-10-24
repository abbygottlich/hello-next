import Layout from "../comps/MyLayout";
import Link from "next/link";
// import fetch from 'isomorphic-unfetch';
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




// blog post code
// const PostLink = props => (
//     <li>
//         {/* this is basically saying, link to the [id] file, but make the path the same as the prop id below */}
//         <Link href="p/[id]" as={`/p/${props.id}`}>
//             <a>{props.id}</a>
//         </Link>
//     </li>
// );
// export default function Blog() {
//     return (
//         <Layout>
//             <h1>My Blog</h1>
//             <ul>
//                 <PostLink id="hello-nextjs" />
//                 <PostLink id="learn-nextjs" />
//                 <PostLink id="deploy-nextjs" />
//             </ul>
//         </Layout>
//     );
// }




// batman shows code
// getting props from Index.getInitialProps below
// const Index = props => (
//     <Layout>
//         <h1>Batman TV Shows</h1>
//         <ul>
//             {/* mapping over the returned shows object from function below */}
//             {props.shows.map(show => (
//                 <li key={show.id}>
//                     {/* actually routing you to [id].js page, but displaying the show id in the url */}
//                     <Link href="/p/[id]" as={`/p/${show.id}`}>
//                         <a>{show.name}</a>
//                     </Link>
//                 </li>
//             ))}
//         </ul>
//     </Layout>
// );

// // whatever this function returns will be the props for the Index function above
// Index.getInitialProps = async function() {
//     const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
//     const data = await res.json();

//     // this console log only shows up in the server console because when the site is first rendered, it renders on the server side
//     console.log(`Show data fetched. Count: ${data.length}`);
//     // console.log(data);

//     return {
//         // what you are mapping over in the above function (props.shows)
//         shows: data.map(entry => entry.show)
//     };
// };

// export default Index;




// styling components
function getPosts() {
    return [
      { id: 'hello-nextjs', title: 'Hello Next.js' },
      { id: 'learn-nextjs', title: 'Learn Next.js is awesome' },
      { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ];
  }

  const PostLink = ({ post }) => (
    <li>
      <Link href="/p/[id]" as={`/p/${post.id}`}>
        <a>{post.title}</a>
      </Link>
      <style jsx>{`
      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
        font-family: 'Arial';
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
    </li>
  );

  export default function Blog() {
    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          {getPosts().map(post => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
        <style jsx>{`
          h1,
          a {
            font-family: 'Arial';
          }
  
          ul {
            padding: 0;
          }
        `}</style>
      </Layout>
    );
  }