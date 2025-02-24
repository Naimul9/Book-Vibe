import { BsPeopleFill } from "react-icons/bs"; 
import { MdOutlineContactPage } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const BookCard = ({read}) => {

   
 const { bookName, bookId, author,image,  rating, category, tags, publisher, totalPages, yearOfPublishing }  = read 
    return (
     <div className="lg:h-[277px] lg:w-[1170px] w-full mt-4 flex lg:flex-row flex-col gap-4">

<div  > 
<img  className="object-fill  h-[270px] lg:w-[230px] w-full rounded-2xl" alt="" src={image} />

</div>

<div>


<p className="text-2xl font-bold">{bookName}</p>

<p className="mt-4 font-medium"> By: {author} </p>

<div className="flex gap-3 mt-5">
   <p className="font-bold"> Tag</p>
    <div className="flex lg:gap-6 gap-2">
                <p className="lg:w-[130px] w-full h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{tags[0]}</p>
					<p className="lg:w-[125px] w-full h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{tags[1]}</p>
                    <p className=" flex gap-1 items-center font-normal lg:text-[18px]"> <span><CiLocationOn /></span> Year of Publishing :{yearOfPublishing} </p>
                </div>
</div>


<div className="mt-6 flex lg:gap-10 gap-4">
    <p className="flex items-center gap-1 text-[18px]"> <BsPeopleFill /> <span> Publisher: {publisher}</span> </p>
    <p className="flex items-center lg:gap-1 text-[18px]"> <MdOutlineContactPage /> <span>  Page {totalPages}</span> </p>
    <p> </p>
</div>

<p className="border-b-2 mt-4"></p>


<div className="flex gap-6 mt-4 ">
                <p className="w-[174px] h-[41px] bg-[#328EFF26] text-[#328EFF] rounded-full text-center py-1 font-medium">{tags[0]}</p>
					<p className="w-[174px] h-[41px] bg-[#FFAC3326] text-[#FFAC33] rounded-full text-center py-1 font-medium">{tags[1]}</p>
                 <Link to={`/bookDetail/${bookId}`}>   <button className="btn w-[150px] h-[30px] bg-[#23BE0A] text-white rounded-full text-center" >View Details</button></Link>
                </div> 

</div>




     </div>
    );
};

export default BookCard;