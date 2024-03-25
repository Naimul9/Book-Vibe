
const SingleBook = ({item}) => {

    const {bookName, bookId, author,image,review, totalPages, rating, category, tags,publisher, yearOfPublishing   } = item
    return (
        <div > 
            
            <section className="h-[481px] w-[374px] border rounded-xl">
	<div className="container p-6 mx-auto">
	
		<div>
			<article className="flex flex-col ">
				
					<img  alt="" className="object-fill  h-[230px] w-[326px] rounded-2xl" src={image} />
			
				<div className="flex flex-col flex-1 mt-7">
					
				<div className="flex gap-6">
                <p className="">{tags[0]}</p>
					<p className="">{tags[1]}</p>
                </div>

					<h3 className="flex-1 py-2 text-lg font-semibold ">{bookName}</h3>
                    <p>By : {author}</p>


					<div className="flex flex-wrap justify-between  text-gray-400 mt-10">
						<span>June 1, 2020</span>
						<span>2.1K views</span>
					</div>
				</div>
			</article>
			
		</div>
	</div>
</section>


        </div>
    );
};

export default SingleBook;