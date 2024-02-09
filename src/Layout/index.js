import {Footer, Navbar, TopNav} from "@/components/index";


const Layout = ({ children }) => {

    return (
        <div className={'relative'}>
            <TopNav />
            <Navbar  />
            <main className={"  " }>
                {children}
            </main>
            <Footer  />
        </div>
    );
};

export default Layout;