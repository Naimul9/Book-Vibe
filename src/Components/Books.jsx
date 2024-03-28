
import { useLoaderData } from 'react-router-dom';
import SingleBook from './SingleBook/SingleBook';

const Books = () => {

    const books = useLoaderData()


    return (

        <div className='mt-10 px-10 '>

<p className='text-[40px] font-bold text-center mb-10'>Books</p>

            <div className='grid lg:grid-cols-3 grid-cols-1 gap-5 '>
            {
                books.map(item=>  <SingleBook item={item} key={item.id}></SingleBook> )
            }
        </div>
        </div>
    );
};

export default Books;