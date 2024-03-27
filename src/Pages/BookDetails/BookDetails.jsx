import {  Link, useLoaderData, useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { saveReadData } from "../../utility/localStorage";


const BookDetails = () => {
    const singleBooks = useLoaderData()
    const {bookId} =useParams()
    const idInt = parseInt(bookId)
    const book = singleBooks.find(book =>book.bookId === idInt)

    const handleRead = ()=>{
        saveReadData(idInt)
        toast('Book added Successfully')
    }  

    const handleWishlist = ()=> {
        toast ('Book added to Wishlist')
    }
    

    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row ">
    <div className=" bg-gray-400 w-1/3 rounded-2xl">
    <img src={book.image}  className="px-10 py-20 bg-gray-300 rounded-xl w-[425px] h-[700px] " />
    </div>
    <div className="w-2/3">
      <h1 className="text-[40px] font-bold">{book.bookName}</h1>
      <p className="mt-5 text-[20px] font-medium">By : {book.author}</p>
      <p className="border-b-2 mt-6"></p>
      <p className="mt-4 text-[20px] font-medium">{book.category}</p>
      <p className="border-b-2 mt-4"></p>
      <p className="py-6 font-normal "> <span className="font-bold">Review:</span> {book.review}</p>
      <div className="flex gap-5 mt-14">
           <p className="font-bold">Tag</p>

           <div className="flex gap-6">
                <p className="w-[130px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{book.tags[0]}</p>
					<p className="w-[125px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{book.tags[1]}</p>
                </div>



      </div>
      <p className="border-b-2 mt-6"></p>
<ul className="mt-6 space-y-3">
    
    <li className="flex gap-[90px] ">Number of pages : <span className="font-semibold">  {book.totalPages} </span>    </li>

    <li className="flex gap-[151px] ">Publisher:  <span className="font-semibold"> {book.publisher}  </span>   </li>


    <li  className="flex gap-[90px]  " >Year of Publishing:  <span className="font-semibold"> {book.yearOfPublishing}  </span>   </li>

    <li className="flex gap-[170px]" >Rating:  <span className="font-semibold"> {book.rating}  </span>   </li>

    </ul>

<div className="flex gap-4 mt-10 ">
 
 <Link to={`/bookDetail/${bookId}`}>
 <button onClick={handleRead} className="btn bg-[#1313134D] w-[101px] h-[57px] text-[18px] font-semibold ">Read</button>  </Link>


      <button onClick={handleWishlist} className="btn bg-[#50B1C9] w-[128px] h-[57px] text-[18px] font-semibold text-white  ">Wishlist</button>

</div>
     
    </div>
  </div>
  <ToastContainer/>
</div>
    );
};

export default BookDetails;