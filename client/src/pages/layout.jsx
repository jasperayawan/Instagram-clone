import Maincontent from "../components/mainContent";
import Sidebar from "../components/sidebar";

const Layout = () => {
    return(
        <main>
            <div className="flex">
                <Sidebar/>
                <Maincontent/>
            </div>
        </main>
    )
}

export default Layout;