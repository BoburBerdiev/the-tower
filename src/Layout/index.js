import { Footer, Navbar} from "@/components/index";


const Layout = ({ children }) => {

    return (
        <div className={''}>
            <Navbar  />
            <main className={" min-h-screen mt-[80px] bg-red-700 " }>
                {children}
            </main>
            <Footer  />
        </div>
    );
};

export default Layout;