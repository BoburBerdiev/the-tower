import {Footer, Navbar, TopNav} from "@/components/index";
import {useEffect, useState} from "react";
import Aos from "aos";
import {useQuery} from "react-query";
import apiService from "@/service/axois";

const Layout = ({ children }) => {

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
        <div className={ `relative `}>
            <TopNav contact={contact} />
            <Navbar/>
            <main >
                {children}
            </main>
            <Footer contact={contact} />
        </div>
    );
};

export default Layout;