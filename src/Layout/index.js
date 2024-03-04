import {Footer, Navbar, TopNav} from "@/components/index";
import {useEffect, useState} from "react";
import Aos from "aos";
import {useQuery} from "react-query";
import apiService from "@/service/axois";

const Layout = ({ children }) => {

  const [navOpen, setNavOpen] = useState(false)
    const { data: contact  , refetch: contactRefetch, isLoading , isSuccess } = useQuery("contact", () =>
        apiService.getData( '/pages/contact') , { enabled: false}
    );

    useEffect(() =>{
       contactRefetch()
    } , [])

    useEffect(() => {
            Aos.init()
    } , [])


    return (
        <div className={ `relative ${navOpen ? 'h-screen': ''}`}>
            <TopNav contact={contact} />
            <Navbar setNavOpen={setNavOpen} navOpen={navOpen}/>
            <main >
                {children}
            </main>
            <Footer contact={contact} />
        </div>
    );
};

export default Layout;