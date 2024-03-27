
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getWishlistData } from "../utility/localStorage";
import BookCard from "./BookCard";

const Wish = () => {
    const wishlistBooks = useLoaderData();
    const [selectedBooks, setSelectedBooks] = useState([]);

    useEffect(() => {
        const storedWishlistIds = getWishlistData();
        if (wishlistBooks.length > 0) {
            const appliedWishlistBooks = wishlistBooks.filter(read => storedWishlistIds.includes(read.bookId));
            setSelectedBooks(appliedWishlistBooks);
        }
    }, [wishlistBooks]);

    return (
        <div className="flex flex-col gap-5 ">
            {selectedBooks.map(read => <BookCard read={read} key={read.bookId} />)}
        </div>
    );
};

export default Wish;
