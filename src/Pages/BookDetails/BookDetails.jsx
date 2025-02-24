import {  Link, useLoaderData, useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import {  getReadData,  getWishlistData, removeWishlistData, saveReadData, saveWishlistData } from "../../utility/localStorage";



const BookDetails = () => {
    const singleBooks = useLoaderData()
    const {bookId} =useParams()
    const idInt = parseInt(bookId)
    const book = singleBooks.find(book =>book.bookId === idInt)
  

   
    const handleRead = () => {
        const alreadyRead = getReadData().includes(idInt);
        const alreadyWishlist = getWishlistData().includes(idInt);

        if (alreadyRead) {
            toast('You have already read this book.');
        } else {
            saveReadData(idInt);
            toast('Book added to Read list');

            if (alreadyWishlist) {
                removeWishlistData(idInt);
                toast('Book removed from Wishlist');
            }
           
        }
    };

    const handleWishlist = () => {
        const alreadyRead = getReadData().includes(idInt);
        if (alreadyRead) {
            toast('You have already read this book. Cannot add to Wishlist.');
        } else {
            const alreadyWishlist = getWishlistData().includes(idInt);
            if (alreadyWishlist) {
                toast('You have already added this book to Wishlist.');
            } else {
                saveWishlistData(idInt);
                toast('Book added to Wishlist');
            }
        }
    };
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row ">
    <div className=" bg-gray-400 lg:w-1/3 w-11/12 rounded-2xl">
    <img src={book.image}  className="lg:px-10 px-2 lg:py-20 py-2 bg-gray-300 rounded-xl w-[425px] lg:h-[700px] h-[400px] " />
    </div>
    <div className="lg:w-2/3 w-11/12">
      <h1 className="lg:text-[40px] text-[30px] font-bold">{book.bookName}</h1>
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