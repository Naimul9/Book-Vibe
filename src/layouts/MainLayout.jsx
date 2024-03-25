import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="w-[1280px] mx-auto">
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