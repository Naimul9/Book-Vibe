import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className="navbar bg-base-100 font-work mt-8 lg:w-[1170px] w-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[18px] font-normal">
            <li> <NavLink to={'/'} className={({isActive})=> isActive? 'text-[#23BE0A] lg:text-[18px] font-semibold border border-[#23BE0A] h-[49px] pt-3': ''}>Home </NavLink></li>
          <li> <NavLink to={'/listed-books'} className={({isActive})=> isActive? 'text-[#23BE0A] lg:text-[18px] font-semibold border border-[#23BE0A] h-[49px] pt-3 ': ''} >  Listed Books  </NavLink></li>

          <li>   <NavLink to={'/pages-to-read'} className={({isActive})=> isActive? 'text-[#23BE0A] lg:text-[18px] font-semibold border border-[#23BE0A] h-[49px] pt-3 ': ''} >Pages To Read</NavLink></li>
           
              
            </ul>
          </div>
          <a className="btn btn-ghost lg:text-[28px] text-[16px] font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex items-center justify-center">
          <ul className="menu menu-horizontal px-1 text-[18px] font-normal">
          <li> <NavLink to={'/'} className={({isActive})=> isActive? 'text-[#23BE0A] text-[18px] font-semibold border border-[#23BE0A] h-[49px] pt-3': ''}>Home </NavLink></li>
          <li> <NavLink to={'/listed-books'} className={({isActive})=> isActive? 'text-[#23BE0A] text-[18px] font-semibold border border-[#23BE0A] h-[49px] pt-3 ': ''} >  Listed Books  </NavLink></li>

          <li>   <NavLink to={'/pages-to-read'} className={({isActive})=> isActive? 'text-[#23BE0A] text-[18px] font-semibold border border-[#23BE0A] h-[49px] pt-3 ': ''} >Pages To Read</NavLink></li>
           
              
          </ul>
        </div>
        <div className="navbar-end ">
          <a className="btn bg-[#23BE0A] h-[57px] lg:w-[117px] w-[85px]  lg:text-[18px] text-[15px] font-semibold text-white mr-3">Sign In</a>
          <a className="btn bg-[#59C6D2] h-[57px] lg:w-[117px] w-[90px] lg:text-[18px] text-[15px] font-semibold text-white ">Sign Up</a>
        </div>
      </div>
    );
};

export default Navbar;