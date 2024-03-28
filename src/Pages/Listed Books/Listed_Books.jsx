import { useState } from "react";
import { Link, Outlet, useLoaderData } from "react-router-dom";



const Listed_Books = () => {

  const data = useLoaderData()

  const [displayBooks, setDisplayBooks] =useState([])

  
  const handleFilter = ()=>{
  console.log(data)
  }

    const [tabIndex, setTabIndex] = useState(0)



    
    return (
  
<div className="lg:w-[1170px] w-full ">

<div className='h-[100px] bg-[#1313130D] text-center text-[28px] font-bold rounded-lg items-center flex justify-center mb-10'>Books</div>
{/* button */}
<div className='flex items-center justify-center'>
<div className="dropdown mb-14 relative  ">
  <div onClick={handleFilter} tabIndex={0} role="button" className="btn m-1 flex items-center bg-[#23BE0A] text-white text-[18px] font-semibold">Button
    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 12l-6-6h12l-6 6z" clipRule="evenodd"/>
    </svg>
  </div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 absolute top-full left-0">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
</div>

{/* TAB */}
<div className="flex items-center  overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap text-black lg:w-[1170px] w-full mx-auto">
	<Link to={`readBooks/&{bookId}`}  onClick={()=> setTabIndex(0)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===0 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
		<span>Read Books</span>
	</Link>
	<Link  to={'wishList'} onClick={()=> setTabIndex(1)} rel="noopener noreferrer" href="#" className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex ===1 ? 'border border-b-0' : 'border-b'} rounded-t-lg border-gray-400`}>
		
		<span>Wishlist Books</span>
	</Link>

</div>

<Outlet/>
        
     
      </div>
    );
};

export default Listed_Books;