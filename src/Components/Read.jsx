import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadData } from "../utility/localStorage";
import BookCard from "./BookCard";

const Read = () => {

    const reads = useLoaderData()

   const [selectedBook, setSelectedBook] =useState([])

    useEffect ( ()=> {

const storedReadIds = getStoredReadData()
if(reads.length>0){
    const appliedReads =reads.filter( read=> storedReadIds.includes(read.bookId))
    
    setSelectedBook(appliedReads)
    console.log(appliedReads)
}

    },[reads])

   
    return (
        <div className="flex flex-col gap-5 ">
         
            {
                selectedBook.map(read =>  <BookCard read={read}
                     key={read.bookId}> </BookCard>   )
            }
        </div>
    );
};

export default Read;