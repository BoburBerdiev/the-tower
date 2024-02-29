import {Footer, Navbar, TopNav} from "@/components/index";
import {useEffect} from "react";
import Aos from "aos";

const Layout = ({ children }) => {

    useEffect(() => {
            Aos.init()
    } , [])

    return (
        <div className={'relative '}>
            <TopNav />
            <Navbar  />
            <main className={"  overflow-x-hidden" }>
                {children}
            </main>
            <Footer  />
        </div>
    );
};

export default Layout;