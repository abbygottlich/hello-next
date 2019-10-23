import Header from "./Header";

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

// Method #1 - using props.children
// This method will render all of the child tags you put inside of the Layout tag within your index/about pages
const Layout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.children}
    </div>
);

// export default Layout;



// Method #2 - Layout as a Higher Order Component
// This method takes in the variable Page that was created in your index/about
// pages that has been set equal to the content you want displayed and renders it
const pageLayout = Page => {
    return () => (
        <div style={layoutStyle}>
            <Header />
            <Page />
        </div>
    );
};

// export default pageLayout;


// Method #3 - Page content as a prop
// This method takes in props that were given to the Layout tag in your index/about
// pages and renders whichever prop you "call", in this case "content"
const contentLayout = props => (
    <div style={layoutStyle}>
        <Header />
        {props.content}
    </div>
);

export default contentLayout;

