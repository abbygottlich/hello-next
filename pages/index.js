import React from "react";
import Layout from "../comps/MyLayout";
import Link from "next/link";
import Puppy from "../comps/Puppy";

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" },
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
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
);

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPuppy: false,
    };
  }

  handleClick() {
    console.log("clicked");
    this.setState({
      showPuppy: true,
    });
  }

  render() {
    return (
      <Layout>
        <h1>My Blog</h1>
        <ul>
          {getPosts().map((post) => (
            <PostLink key={post.id} post={post} />
          ))}
        </ul>
        <Link href="/p/staticRoute">
          <a>This is a static route</a>
        </Link>
        <button onClick={() => this.handleClick()}>Click Me!</button>
        {this.state.showPuppy ? <Puppy /> : null}
        <style jsx>{`
          h1,
          a {
            font-family: "Arial";
          }

          ul {
            padding: 0;
          }
        `}</style>
      </Layout>
    );
  }
}

// export default function Blog() {
//   return (
//     <Layout>
//       <h1>My Blog</h1>
//       <ul>
//         {getPosts().map((post) => (
//           <PostLink key={post.id} post={post} />
//         ))}
//       </ul>
//       <Link href="/p/staticRoute">
//         <a>This is a static route</a>
//       </Link>
//       <button click={handleClick}>Click Me!</button>
//       {this.state.showPuppy ? <Puppy /> : null}
//       <style jsx>{`
//         h1,
//         a {
//           font-family: "Arial";
//         }

//         ul {
//           padding: 0;
//         }
//       `}</style>
//     </Layout>
//   );
// }
