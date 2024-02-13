import {Footer, Navbar, TopNav} from "@/components/index";
import {useEffect} from "react";
import AOS from 'aos';

const Layout = ({ children }) => {

    useEffect(() => {
            AOS.init()
    } , [])

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