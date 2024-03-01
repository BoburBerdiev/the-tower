import {Footer, Navbar, TopNav} from "@/components/index";
import {useEffect, useState} from "react";
import Aos from "aos";

const Layout = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false)
    

    useEffect(() => {
            Aos.init()
    } , [])

    return (
        <div className={ `relative ${navOpen ? 'h-screen overflow-hidden': ''}`}>
            <TopNav />
            <Navbar setNavOpen={setNavOpen} navOpen={navOpen}/>
            <main className={`  overflow-x-hidden` }>
                {children}
            </main>
            <Footer  />
        </div>
    );
};

export default Layout;