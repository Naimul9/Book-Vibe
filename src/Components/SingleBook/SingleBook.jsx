/* eslint-disable react/prop-types */
import { AiOutlineStar } from "react-icons/ai";
import { Link } from "react-router-dom";
const SingleBook = ({item}) => {

    const {bookName, bookId, author,image,  rating, category, tags  } = item
    return (
		<Link to={`/bookDetail/${bookId}`}>
        <div > 
         
            
          <section className="h-[481px] lg:w-[374px] w-full border rounded-xl">
	<div className="container p-6 mx-auto">
	
		<div>
			<article className="flex flex-col ">
				
					<img  alt="" className="object-fill  h-[230px] w-[326px] rounded-2xl" src={image} />
			
				<div className="flex flex-col flex-1 mt-7">
					
				<div className="flex gap-6">
                <p className="w-[130px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{tags[0]}</p>
					<p className="w-[125px] h-[34px] bg-[#23BE0A0D] text-[#23BE0A] rounded-full text-center py-1 font-medium">{tags[1]}</p>
                </div>

					<h3 className="flex-1 py-2 text-2xl font-bold ">{bookName}</h3>
                    <p className="font-medium">By : {author}</p>


					<div className="flex flex-wrap justify-between  text-black mt-10  font-medium">
						<span>{category} </span>
						<p className="flex items-center justify-center gap-2  font-medium"> {rating} <AiOutlineStar /> </p>
					</div>
				</div>
			</article>
			
		</div>
	</div>
</section>

          
         

        </div>
		</Link>
    );
};

export default SingleBook;