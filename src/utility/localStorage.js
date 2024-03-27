const getStoredReadData = () => {
    const storedReadData = localStorage.getItem('read-data');
    if (storedReadData) {
        return JSON.parse(storedReadData);
    }
    return [];
};

const getStoredWishlistData = () => {
    const storedWishlistData = localStorage.getItem('wishlist-data');
    if (storedWishlistData) {
        return JSON.parse(storedWishlistData);
    }
    return [];
};

const getReadData = () => {
    return getStoredReadData();
};

const getWishlistData = () => {
    return getStoredWishlistData();
};

const saveReadData = (bookId) => {
    const storedReadData = getStoredReadData();
    const exists = storedReadData.find(readId => readId === bookId);
    if (!exists) {
        storedReadData.push(bookId);
        localStorage.setItem('read-data', JSON.stringify(storedReadData));
    }
};

const saveWishlistData = (bookId) => {
    const storedWishlistData = getStoredWishlistData();
    const exists = storedWishlistData.find(wishlistId => wishlistId === bookId);
    if (!exists) {
        storedWishlistData.push(bookId);
        localStorage.setItem('wishlist-data', JSON.stringify(storedWishlistData));
    }
};

const removeWishlistData = (bookId) => {
    const storedWishlistData = getStoredWishlistData();
    const index = storedWishlistData.indexOf(bookId);
    if (index !== -1) {
        storedWishlistData.splice(index, 1);
        localStorage.setItem('wishlist-data', JSON.stringify(storedWishlistData));
    }
};

export { getStoredReadData, getStoredWishlistData, getReadData, getWishlistData, saveReadData, saveWishlistData, removeWishlistData };
