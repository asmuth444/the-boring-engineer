import Header from "./header";

const Layout = (props: {children: any}) => {

    return (
        <>
        <Header />
        <main>
        {props.children}
        </main>
        </>
    );
}

export default Layout;