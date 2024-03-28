import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="lg:w-[1170px] w-11/12 mx-auto">
            <div>
            <Navbar></Navbar>
            </div>

<div className="mt-8">
<Outlet></Outlet>
</div>

        </div>
    );
};

export default MainLayout;