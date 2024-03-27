const getStoredReadData = () =>{
    const storedReadData =localStorage.getItem('read-data')
    if(storedReadData){
        return JSON.parse(storedReadData)
    }
    return []
}

const saveReadData = bookId =>{
    const storedReadData = getStoredReadData()
    const exists = storedReadData.find(readId => readId === bookId)
    if(!exists){
        storedReadData.push(bookId)
        localStorage.setItem('read-data', JSON.stringify(storedReadData))
    }

}




export { getStoredReadData, saveReadData}