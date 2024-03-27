import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadData } from "../utility/localStorage";

const Read = () => {

    const reads = useLoaderData()

   const [selectedBook, setSelectedBook] =useState([])

    useEffect ( ()=> {

const storedReadIds = getStoredReadData()
if(reads.length>0){
    const appliedReads =reads.filter(read=> storedReadIds.includes(read.bookId))
    
    setSelectedBook(appliedReads)
    console.log(appliedReads)
}

    },[reads])

   
    return (
        <div>
           <p>book Name : {selectedBook.length} </p>
           
        </div>
    );
};

export default Read;